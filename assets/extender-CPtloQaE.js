import{n as e,t}from"./proteccion-Cy_hLbce.js";/* empty css                   */import{O as n,c as r,d as i,t as a}from"./iconos-DvhjYnF8.js";import{E as o,_ as s,c,f as l,l as u,o as d,ut as f}from"./extension-CzOePPad.js";/* empty css               */var p=document.getElementById(`app`);if(window.top!==window.self){try{window.top.location.replace(window.location.href)}catch{}throw Error(`Global Autos no se abre dentro de otra página`)}document.getElementById(`anti-iframe`)?.remove();var m=/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname),h=e=>e&&/\/img\/.+\.webp$/.test(e)?e.replace(/\.webp$/,`-1024.webp`):e||``,g=t=>n(e.whatsapp.number,t),_=(e,t)=>{try{if(t===void 0)return JSON.parse(localStorage.getItem(e)||`null`);localStorage.setItem(e,JSON.stringify(t))}catch{return null}};function v(){if(m){let e=_(`ga-publico-prueba`);if(e)return e}return e.prive?.publico||null}var y=0;async function b(){try{let e=await fetch(location.pathname,{method:`HEAD`,cache:`no-store`}),t=Date.parse(e.headers.get(`date`)||``);t&&(y=t-Date.now())}catch{}}var x=t=>`
  <div class="app-glow" aria-hidden="true"></div>
  <div class="fx">
    <header class="fx-brand">
      <span class="fx-brand__mark" role="img" aria-label="Global Autos"></span>
      <span class="kicker">Global Autos</span>
    </header>
    ${t}
    <footer class="fx-foot">
      <p>${r(e.legal.company)} · ${r(e.legal.nit)} · ${r(e.city)}</p>
      <p><a href="${r(e.site)}" rel="noopener">globalautosexperience.com</a> · <a href="${r(e.site)}/legal/privacidad.html" rel="noopener">Tratamiento de datos</a></p>
    </footer>
  </div>`;function S({title:e,text:t,retry:n=null,waText:i=`Hola Global Autos, necesito ayuda para pedir más días con el carro.`}){p.innerHTML=x(`
    <section class="fx-msg">
      <span class="fx-msg__icon">${a.alerta}</span>
      <h1 class="display">${e}</h1>
      <p class="muted">${t}</p>
      <div class="actions">
        ${n?`<button class="btn btn--primary btn--block" type="button" data-retry>${a.sincronizar}<span>Intentar de nuevo</span></button>`:``}
        <a class="btn ${n?`btn--ghost`:`btn--primary`} btn--block btn--wa" href="${r(g(i))}" target="_blank" rel="noopener">${a.whatsapp}<span>Escribir a Global Autos</span></a>
      </div>
    </section>`),p.querySelector(`[data-retry]`)?.addEventListener(`click`,n)}var C=new URLSearchParams(location.search),w=C.get(`c`)||``,T=C.get(`k`)||``,E=o().find(e=>e.id===w);function D({doc:e=``,error:n=``}={}){if(t({aviso:!1}),!E||!d(T))return S({title:`Código <em>no válido</em>`,text:`Este QR no corresponde a un carro de Global Autos o no se leyó completo. Vuelve a escanearlo, o escríbenos y te ayudamos.`});let i=v();if(!i)return S({title:`Escríbenos por <em>WhatsApp</em>`,text:`Para pedir más días con este carro escríbenos y te ayudamos enseguida.`,waText:`Hola Global Autos, necesito más días con la ${E.nombre}.`});p.innerHTML=x(`
    <section class="fx-hero">
      <p class="kicker">Más días · ${r(E.marca)}</p>
      <h1 class="display">¿Necesitas el carro <em>más días?</em></h1>
      <p class="fx-lead">Pídelos aquí, antes de tu hora de devolución. Pagas por transferencia y Global Autos te confirma por WhatsApp.</p>
    </section>
    ${E.foto?`<figure class="fx-car"><img src="${r(h(E.foto))}" alt="${r(E.nombre)}" /><figcaption><span class="kicker">Tu vehículo</span><span class="display">${r(E.nombre)}</span></figcaption></figure>`:``}
    <form class="card card--pad ext-form" data-form novalidate>
      <label class="field"><span class="field__label">Tu cédula o pasaporte</span><input class="field__input" name="doc" value="${r(e)}" autocomplete="off" autocapitalize="characters" spellcheck="false" inputmode="text" required /><span class="field__hint">El mismo documento que está en tu contrato.</span></label>
      <p class="field__error" role="alert" data-err>${r(n)}</p>
      <button class="btn btn--primary btn--block" type="submit">${a.derecha}<span>Continuar</span></button>
    </form>
    <p class="ext-ayuda"><a href="${r(g(`Hola Global Autos, necesito más días con la ${E.nombre}.`))}" target="_blank" rel="noopener">${a.whatsapp} ¿Dudas? Escríbenos por WhatsApp</a></p>`);let o=p.querySelector(`[data-form]`);o.addEventListener(`submit`,async e=>{e.preventDefault();let t=o.doc.value,n=o.querySelector(`[data-err]`);if(l(t).length<5)return n.textContent=`Escribe tu número de documento completo.`,o.doc.focus();let r=o.querySelector(`button`);r.disabled=!0,r.querySelector(`span`).textContent=`Buscando tu alquiler…`;try{let e=await O(i,t);if(!e){let e=(_(`ga-ext-fallos`)||0)+1;return _(`ga-ext-fallos`,e),e>=5&&await new Promise(t=>setTimeout(t,Math.min(30,e*3)*1e3)),D({doc:t,error:`No encontramos un alquiler en curso de este carro con ese documento. Revísalo o escríbenos por WhatsApp.`})}_(`ga-ext-fallos`,0),A(e)}catch{S({title:`Sin <em>conexión</em>`,text:`No pudimos revisar tu alquiler. Revisa tu internet e inténtalo de nuevo.`,retry:()=>D({doc:t})})}})}async function O(e,t){let n=s(w,await u(w,T,t)),r=e.endpoint.replace(/\/+$/,``),i=await f({method:`GET`,url:`${r}/${e.bucket}/${n}`,accessKeyId:e.accessKeyId,secretAccessKey:e.secretAccessKey,region:e.region,expires:900,date:new Date(Date.now()+y)}),a=await fetch(i,{cache:`no-store`,credentials:`omit`});if(a.status===404||a.status===403)return null;if(!a.ok)throw Error(`HTTP ${a.status}`);let o=await a.json(),c=`${r}/${e.bucket}/solicitudes/${w}/${o?.contrato?.id}/`;if(!(o?.v===1&&o.carro?.id===w&&/^[\w-]+$/.test(o?.contrato?.id||``)&&(o.subir||[]).every(e=>String(e.json).startsWith(c)&&String(e.archivo).startsWith(c))))throw Error(`sobre`);return{...o,doc:t}}function k(e,t){let n=`Tu solicitud de +${r(e.dias)} ${r(t(e.dias))}`;if(e.estado===`aprobada`)return`${n} fue <b>aprobada</b>.${e.hasta?` Nueva devolución: <b>${r(c(e.hasta))}</b>`:``}`;if(e.estado===`rechazada`){let t=String(e.motivo||``).trim();return`${n} <b>no fue aprobada</b>${t?`: ${r(t.charAt(0).toLowerCase()+t.slice(1))}`:``}. Si necesitas ayuda, escríbenos.`}return`${n} está <b>en revisión</b>. Te confirmamos por WhatsApp.`}function A(e,t=1){let n=Math.min(15,Math.max(0,Math.floor(Number(e.maxDias??15))||0));n<1&&(t=0);let o=t=>e.unidad===`jornada`?t===1?`jornada`:`jornadas`:t===1?`día`:`días`,s=e.unidad===`jornada`?432e5:864e5,l=Date.parse(e.fin),u=Date.now()+y-l,d=_(`ga-ext-${e.contrato.id}`),f=e.ultima||(d?.enviada&&Date.now()-Date.parse(d.enviada)<2592e5?{estado:`nueva`,dias:d.dias,fecha:d.enviada}:null),m=n>=1&&e.banco&&(e.subir||[]).length&&Date.parse(e.vence)>Date.now()+y,h=()=>{let d=new Date(l+t*s),_=t*e.tarifa;p.innerHTML=x(`
      <section class="fx-hero">
        <p class="kicker">${r(e.carro.nombre||E.nombre)}${e.contrato.numero?` · ${r(e.contrato.numero)}`:``}</p>
        <h1 class="display">Hola, <em>${r(e.cliente||`bienvenido`)}</em></h1>
        <p class="fx-lead">Tu devolución: <b>${r(c(e.fin))}</b></p>
      </section>
      ${f?`<div class="notice ${f.estado===`aprobada`?`notice--ok`:f.estado===`rechazada`?`notice--bad`:``}">${f.estado===`aprobada`?a.ok:a.reloj}<span>${k(f,o)}</span></div>`:``}
      ${u>0?`<div class="notice notice--bad">${a.alerta}<span><b>Tu hora de devolución ya pasó.</b> Desde ahí se cobra el retraso${e.retraso?.hora?` (${r(i(e.retraso.hora))} por hora; desde la 3.ª hora, un día completo)`:``}. Pide los días ahora y paga, o devuelve el carro.</span></div>`:``}
      ${n<1?`<div class="notice notice--bad">${a.calendario}<span>La ${r(e.carro.nombre||E.nombre)} tiene <b>otra reserva justo después</b> de tu devolución, así que no se puede extender desde aquí. Escríbenos por WhatsApp y buscamos una opción.</span></div>`:``}
      <section class="card card--pad ext-dias" ${n<1?`hidden`:``}>
        <p class="field__label">${e.unidad===`jornada`?`¿Cuántas jornadas más?`:`¿Cuántos días más?`}</p>
        <div class="ext-stepper">
          <button type="button" class="ext-stepper__btn" data-menos aria-label="Menos" ${t<=1?`disabled`:``}>−</button>
          <span class="ext-stepper__n num" aria-live="polite"><b>${t}</b> ${r(o(t))}</span>
          <button type="button" class="ext-stepper__btn" data-mas aria-label="Más" ${t>=n?`disabled`:``}>+</button>
        </div>
        <dl class="rows">
          <div><dt>Nueva devolución</dt><dd><b>${r(c(d))}</b></dd></div>
          <div><dt>${r(i(e.tarifa))} × ${t}</dt><dd class="num">${r(i(_))}</dd></div>
        </dl>
        ${t>=n?`<p class="field__hint">¿Más de ${n} ${r(o(n))}? Escríbenos por WhatsApp.</p>`:``}
      </section>
      <div class="actions">
        ${m?`<button class="btn btn--primary btn--block" type="button" data-pagar>${a.recibo}<span>Pagar ${r(i(_))} por transferencia</span></button>`:n<1?`<a class="btn btn--primary btn--block btn--wa" href="${r(g(`Hola Global Autos, soy ${e.cliente}. Necesito más días con la ${e.carro.nombre||E.nombre}${e.contrato.numero?` (${e.contrato.numero})`:``}. ¿Hay alguna opción?`))}" target="_blank" rel="noopener">${a.whatsapp}<span>Escribir a Global Autos</span></a>`:`<a class="btn btn--primary btn--block btn--wa" href="${r(g(`Hola Global Autos, soy ${e.cliente}. Necesito ${t} ${o(t)} más con la ${e.carro.nombre||E.nombre}${e.contrato.numero?` (${e.contrato.numero})`:``}, hasta el ${c(d)}. ¿Me envían los datos para transferir ${i(_)}?`))}" target="_blank" rel="noopener">${a.whatsapp}<span>Pedir los datos de pago por WhatsApp</span></a>`}
        <button class="btn btn--ghost btn--block" type="button" data-volver>Volver</button>
      </div>`),p.querySelector(`[data-menos]`).addEventListener(`click`,()=>(t=Math.max(1,t-1),h())),p.querySelector(`[data-mas]`).addEventListener(`click`,()=>(t=Math.min(n,t+1),h())),p.querySelector(`[data-volver]`).addEventListener(`click`,()=>D({doc:e.doc})),p.querySelector(`[data-pagar]`)?.addEventListener(`click`,()=>j(e,t))};h()}function j(e,t){let n=e.banco,o=t*e.tarifa,s=e.unidad===`jornada`?t===1?`jornada`:`jornadas`:t===1?`día`:`días`,l=(e,t,n=``)=>t?`<div><dt>${r(e)}</dt><dd>${r(t)}${n?` <button class="ext-copiar" type="button" data-copiar="${r(n)}" aria-label="Copiar ${r(e)}">${a.copiar}</button>`:``}</dd></div>`:``;p.innerHTML=x(`
    <section class="fx-hero">
      <p class="kicker">Paso final · solo transferencia</p>
      <h1 class="display">Transfiere <em>${r(i(o)).replace(` `,`&nbsp;`)}</em></h1>
      <p class="fx-lead">Por ${t} ${r(s)} más con la ${r(e.carro.nombre||E.nombre)}. Después sube aquí el comprobante.</p>
    </section>
    <dl class="rows card card--pad ext-banco">
      ${l(`Banco`,n.banco)}
      ${l(`Tipo de cuenta`,n.tipo)}
      ${l(`Número`,n.numero,String(n.numero).replace(/\D/g,``))}
      ${l(`Titular`,n.titular)}
      ${l(`Cédula / NIT`,n.documento,n.documento)}
      ${l(`Llave Bre-B`,n.llave,n.llave)}
      ${l(`Valor`,i(o),String(o))}
    </dl>
    ${n.nota?`<p class="muted" style="font-size:13.5px;margin:10px 4px 0">${r(n.nota)}</p>`:``}
    <form class="card card--pad ext-form" data-form novalidate style="margin-top:14px">
      <p class="field__label">Comprobante de la transferencia</p>
      <label class="ext-subir" data-subir>
        <input type="file" accept="image/*,application/pdf" name="archivo" hidden />
        <span class="ext-subir__vacio">${a.camara}<span>Subir foto o captura del comprobante</span></span>
      </label>
      <label class="field"><span class="field__label">Tu celular (WhatsApp)</span><input class="field__input" name="telefono" type="tel" inputmode="tel" autocomplete="tel" placeholder="300 123 4567" /></label>
      <label class="field"><span class="field__label">Nota (opcional)</span><textarea class="field__input" name="nota" rows="2" maxlength="300"></textarea></label>
      <p class="field__error" role="alert" data-err></p>
      <button class="btn btn--primary btn--block" type="submit" data-enviar disabled>${a.enviar}<span>Enviar solicitud</span></button>
      <p class="field__hint" style="margin-top:10px">Global Autos revisa que la transferencia haya llegado y te confirma. Hasta entonces, tu devolución sigue siendo: ${r(c(e.fin))}</p>
    </form>
    <div class="actions"><button class="btn btn--ghost btn--block" type="button" data-volver>Volver</button></div>`),p.querySelectorAll(`[data-copiar]`).forEach(e=>e.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(e.dataset.copiar),e.classList.add(`is-ok`),setTimeout(()=>e.classList.remove(`is-ok`),1400)}catch{}})),p.querySelector(`[data-volver]`).addEventListener(`click`,()=>A(e,t));let u=p.querySelector(`[data-form]`),d=p.querySelector(`[data-subir]`),f=u.querySelector(`[data-enviar]`),m=u.querySelector(`[data-err]`),h=null;u.archivo.addEventListener(`change`,async()=>{let e=u.archivo.files?.[0];if(e){if(m.textContent=``,e.size>12582912)return m.textContent=`El archivo es muy grande. Sube una captura de pantalla.`;try{h=/pdf$/i.test(e.type)||/\.pdf$/i.test(e.name)?{blob:e,tipo:`application/pdf`}:{blob:await M(e),tipo:`image/jpeg`}}catch{return h=null,m.textContent=`No se pudo leer ese archivo. Sube una foto o captura del comprobante.`}d.classList.add(`is-listo`),d.querySelector(`.ext-subir__vacio`).innerHTML=h.tipo===`application/pdf`?`${a.documento}<span>${r(e.name||`Comprobante.pdf`)} · cambiar</span>`:`<img src="${URL.createObjectURL(h.blob)}" alt="Comprobante" /><span>Cambiar</span>`,f.disabled=!1}}),u.addEventListener(`submit`,async n=>{if(n.preventDefault(),!h)return m.textContent=`Sube el comprobante de la transferencia.`;f.disabled=!0,f.querySelector(`span`).textContent=`Enviando…`;try{await N(e,t,h,{telefono:u.telefono.value,nota:u.nota.value}),P(e,t)}catch{f.disabled=!1,f.querySelector(`span`).textContent=`Enviar solicitud`,m.innerHTML=`No se pudo enviar. Revisa tu internet e intenta otra vez, o <a href="${r(g(`Hola Global Autos, quiero ${t} ${s} más con la ${e.carro.nombre||E.nombre} y ya transferí ${i(o)}. Les envío el comprobante.`))}" target="_blank" rel="noopener">mándanos el comprobante por WhatsApp</a>.`}})}async function M(e){let t=await createImageBitmap(e),n=Math.min(1,1600/Math.max(t.width,t.height)),r=document.createElement(`canvas`);r.width=Math.round(t.width*n),r.height=Math.round(t.height*n);let i=r.getContext(`2d`);return i.fillStyle=`#ffffff`,i.fillRect(0,0,r.width,r.height),i.drawImage(t,0,0,r.width,r.height),new Promise((e,t)=>r.toBlob(n=>n?e(n):t(Error(`foto`)),`image/jpeg`,.82))}async function N(e,t,n,{telefono:r=``,nota:i=``}){let a=`ga-ext-${e.contrato.id}`,o=(((_(a)||{}).cupo??-1)+1)%e.subir.length,s=e.subir[o],c=async(e,t,n)=>{let r=await fetch(e,{method:`PUT`,body:t,headers:{"Content-Type":n},credentials:`omit`});if(!r.ok)throw Error(`HTTP ${r.status}`)};await c(s.archivo,n.blob,n.tipo);let l=await u(w,T,e.doc);await c(s.json,JSON.stringify({v:1,huella:l,dias:t,monto:t*e.tarifa,quien:e.cliente||``,telefono:String(r).replace(/[^\d+]/g,``).slice(0,16),nota:String(i).trim().slice(0,300),comprobanteTipo:n.tipo,creado:new Date(Date.now()+y).toISOString()}),`application/json`),_(a,{cupo:o,dias:t,enviada:new Date().toISOString()})}function P(e,t){let n=e.unidad===`jornada`?t===1?`jornada`:`jornadas`:t===1?`día`:`días`,o=e.carro.nombre||E.nombre;p.innerHTML=x(`
    <section class="fx-done">
      <span class="fx-done__icon">${a.ok}</span>
      <p class="kicker">Solicitud enviada</p>
      <h1 class="display">¡Listo, <em>${r(e.cliente||`gracias`)}</em>!</h1>
      <p class="fx-lead">Recibimos tu solicitud de <b>${t} ${r(n)} más</b> y el comprobante. Global Autos revisa la transferencia y te confirma por WhatsApp.</p>
      <p class="muted">Hasta que te confirmemos, tu devolución sigue siendo: ${r(c(e.fin))}</p>
      <div class="actions">
        <a class="btn btn--primary btn--block btn--wa" href="${r(g(`Hola Global Autos, soy ${e.cliente}. Acabo de pedir ${t} ${n} más con la ${o}${e.contrato.numero?` (${e.contrato.numero})`:``} y subí el comprobante de ${i(t*e.tarifa)}.`))}" target="_blank" rel="noopener">${a.whatsapp}<span>Avisar por WhatsApp</span></a>
      </div>
    </section>`)}b().finally(()=>D());