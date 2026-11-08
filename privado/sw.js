// ─────────────────────────────────────────────────────────────
// Service worker de Global Autos Privé (/privado/):
// · funciona sin señal (guarda la app y las fotos de la flota);
// · muestra las notificaciones que envía el aviso programado.
// ─────────────────────────────────────────────────────────────
const CACHE = 'ga-prive-v3' // v2: fotos reales de la Prado TX gris (mismas URL que las de referencia)
const SHELL = ['/privado/', '/privado/manifest.webmanifest', '/privado/iconos/icono-192.png', '/brand/ga-mark.svg', '/brand/ga-lockup-white.png', '/contratos/arrendamiento-carros.pdf', '/contratos/arrendamiento-van.pdf', '/contratos/conduccion.pdf']

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  const url = new URL(req.url)
  if (req.method !== 'GET' || url.origin !== self.location.origin) return // la nube (B2) va directo
  // La app: primero la red (siempre la versión nueva), sin señal la guardada
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put('/privado/', copy))
          return res
        })
        .catch(() => caches.match('/privado/')),
    )
    return
  }
  // Contratos oficiales (PDF en blanco): primero la red (por si cambian), sin señal la copia guardada
  if (url.pathname.startsWith('/contratos/') && url.pathname.endsWith('.pdf')) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(url.pathname, copy))
          }
          return res
        })
        .catch(() => caches.match(url.pathname)),
    )
    return
  }
  // Fotos del sitio (/img/): de la memoria al instante y, por detrás, se trae la versión
  // de la red para la próxima vez (si se cambia una foto con el mismo nombre, se actualiza sola)
  if (url.pathname.startsWith('/img/')) {
    const fresh = fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone()
          return caches.open(CACHE).then((c) => c.put(req, copy)).then(() => res)
        }
        return res
      })
      .catch(() => null)
    e.waitUntil(fresh)
    e.respondWith(caches.match(req).then((hit) => hit || fresh.then((res) => res || Response.error())))
    return
  }
  // Código con hash, fuentes y demás: de la memoria y, si no está, de la red
  if (url.pathname.startsWith('/assets/') || /\.(webp|png|jpg|svg|woff2?)$/.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) {
              const copy = res.clone()
              caches.open(CACHE).then((c) => c.put(req, copy))
            }
            return res
          }),
      ),
    )
  }
})

// ── Notificaciones ────────────────────────────────────────────
self.addEventListener('push', (e) => {
  let data = {}
  try {
    data = e.data ? e.data.json() : {}
  } catch {
    data = { title: 'Global Autos', body: e.data ? e.data.text() : '' }
  }
  const title = data.title || 'Global Autos'
  const opts = {
    body: data.body || '',
    icon: '/privado/iconos/icono-192.png',
    badge: '/privado/iconos/icono-192.png',
    tag: data.tag || undefined,
    data: { url: data.url || '/privado/#/inicio' },
  }
  e.waitUntil(
    Promise.all([
      self.registration.showNotification(title, opts),
      data.badge != null && self.navigator?.setAppBadge ? self.navigator.setAppBadge(data.badge).catch(() => {}) : null,
    ]),
  )
})

self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  // Solo páginas de la app (una notificación nunca abre un sitio ajeno)
  let url = '/privado/#/inicio'
  try {
    const u = new URL(e.notification.data?.url || url, self.location.origin)
    if (u.origin === self.location.origin && u.pathname.startsWith('/privado/')) url = u.href
  } catch {
    /* dirección inválida: inicio */
  }
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if (new URL(client.url).pathname.startsWith('/privado/')) {
          client.postMessage({ url })
          return client.focus()
        }
      }
      return self.clients.openWindow(url)
    }),
  )
})
