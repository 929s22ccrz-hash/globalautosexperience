import{t as e}from"./config-C3MzGEJu.js";import{F as t,c as n,g as r,n as i,o as a,r as o,s,t as c}from"./firma-ColjnKKN.js";var l=document.getElementById(`app`),u=e=>e&&/\/img\/.+\.webp$/.test(e)?e.replace(/\.webp$/,`-1024.webp`):e||``,d=e=>String(e||``).trim().split(/\s+/)[0]||``,f=new Intl.DateTimeFormat(`es-CO`,{day:`numeric`,month:`long`,year:`numeric`,hour:`numeric`,minute:`2-digit`,hour12:!0,timeZone:`America/Bogota`}),p=e=>`${f.format(e).replace(/\s/g,` `).replace(`,`,` a las`)} (hora de Colombia)`;function m(){let e=navigator.userAgent;return`${/iPhone/.test(e)?`iPhone`:/iPad/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1?`iPad`:/Android/.test(e)?`Android`:/Mac OS X/.test(e)?`Mac`:/Windows/.test(e)?`Windows`:`otro equipo`} · ${/CriOS|Chrome\//.test(e)&&!/Edg/.test(e)?`Chrome`:/FxiOS|Firefox\//.test(e)?`Firefox`:/Edg/.test(e)?`Edge`:/Safari\//.test(e)?`Safari`:`navegador`}`}var h=t=>`
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
  </div>`,g=n=>t(e.whatsapp.number,n);function _({title:e,text:t,retry:n=!1,wa:i=`Hola Global Autos, necesito ayuda con el enlace de mi contrato.`}){l.innerHTML=h(`
    <section class="fx-msg">
      <span class="fx-msg__icon">${o.alerta}</span>
      <h1 class="display">${e}</h1>
      <p class="muted">${t}</p>
      <div class="actions">
        ${n?`<button class="btn btn--primary btn--block" type="button" data-retry>${o.sincronizar}<span>Intentar de nuevo</span></button>`:``}
        <a class="btn ${n?`btn--ghost`:`btn--primary`} btn--block btn--wa" href="${r(g(i))}" target="_blank" rel="noopener">${o.whatsapp}<span>Escribir a Global Autos</span></a>
      </div>
    </section>`),l.querySelector(`[data-retry]`)?.addEventListener(`click`,()=>y())}async function v(e){let t=await fetch(e,{cache:`no-store`});return t.status===404?{status:404}:t.ok?{status:200,data:await t.json()}:{status:t.status}}async function y(){let e=a(location.hash);if(!e)return _({title:`Enlace <em>incompleto</em>`,text:`Este enlace no se abrió completo. Ábrelo de nuevo desde el mensaje de WhatsApp o pídenos uno nuevo.`});if(Date.now()>+e.vence)return _({title:`Este enlace <em>venció</em>`,text:`Por seguridad, los enlaces para firmar duran 7 días. Escríbenos y te enviamos uno nuevo enseguida.`,wa:`Hola Global Autos, el enlace para firmar mi contrato venció. ¿Me envían uno nuevo?`});l.innerHTML=`<div class="lock"><div><div class="lock__mark" role="img" aria-label="Global Autos"></div><p class="kicker">Cargando tu contrato…</p></div></div>`;let t;try{t=await v(e.sobre)}catch{return _({title:`Sin <em>conexión</em>`,text:`No pudimos cargar tu contrato. Revisa tu conexión a internet e inténtalo de nuevo.`,retry:!0})}if(t.status===404)return _({title:`No encontramos <em>tu contrato</em>`,text:`Puede que Global Autos te haya enviado una versión más nueva. Revisa el último mensaje o escríbenos.`});if(t.status!==200)return _({title:`Este enlace <em>venció</em>`,text:`El enlace ya no es válido. Escríbenos y te enviamos uno nuevo enseguida.`,wa:`Hola Global Autos, el enlace para firmar mi contrato no funciona. ¿Me envían uno nuevo?`});let n=t.data,r=await v(n.leer.firma).catch(()=>({status:0}));if(r.status===200&&r.data?.png)return x(n,r.data,{again:!0});b(n)}function b(e){let t=e.documento,n=e.cliente?.nombre||t.partes?.clienteNombre||``,a=e.vehiculo||{};l.innerHTML=h(`
    <section class="fx-hero">
      <p class="kicker">Contrato N.º ${r(t.numero)}</p>
      <h1 class="display">Hola, <em>${r(d(n)||`bienvenido`)}</em></h1>
      <p class="fx-lead">Este es tu contrato${a.nombre?` de <b>${r(a.nombre)}</b>`:``}. Léelo con calma y fírmalo aquí mismo con el dedo: te queda una copia en PDF.</p>
    </section>

    ${a.foto?`<figure class="fx-car">
            <img src="${r(u(a.foto))}" alt="${r(a.nombre||``)}" />
            <figcaption><span class="kicker">Tu vehículo</span><span class="display">${r(a.nombre||``)}</span>${a.placa?`<span class="fx-car__plate">${r(a.placa)}</span>`:``}</figcaption>
          </figure>`:``}

    <ol class="fx-steps" aria-label="Pasos">
      <li><span class="num">1</span>Lee el contrato</li>
      <li><span class="num">2</span>Confirma tus datos</li>
      <li><span class="num">3</span>Firma</li>
    </ol>

    <section class="fx-doc" aria-label="Contrato">
      <div class="paper">${i(t)}</div>
    </section>

    <section class="card card--pad fx-sign" aria-labelledby="fx-sign-title">
      <h2 class="section__title" id="fx-sign-title">Tu <em>firma</em></h2>
      <form class="form" data-form style="margin-top:16px" novalidate>
        <label class="field"><span class="field__label">Nombre completo</span><input class="field__input" name="nombre" value="${r(n)}" autocomplete="name" autocapitalize="words" required /></label>
        <label class="field"><span class="field__label">Documento de identidad</span><input class="field__input" name="documento" value="${r(e.cliente?.documento||t.partes?.clienteDocumento||``)}" required /></label>
        <label class="check"><input type="checkbox" name="acepto" /><span>Leí el contrato N.º ${r(t.numero)} y lo acepto, y autorizo a Global Autos a tratar mis datos personales según su política de tratamiento de datos.</span></label>
      </form>
      <p class="field__label" style="margin:20px 0 8px">Firma aquí con el dedo</p>
      <div class="sigpad" data-pad><div class="sigpad__line"></div><div class="sigpad__hint">FIRME AQUÍ</div></div>
      <div class="fx-pad-tools"><button class="link-more" type="button" data-undo>Deshacer</button><button class="link-more" type="button" data-clear>Borrar firma</button></div>
      <button class="btn btn--primary btn--block" type="button" data-ok style="margin-top:20px">${o.firma}<span>Firmar contrato</span></button>
      <p class="fx-legal">Firma electrónica con la misma validez de la firma manuscrita (Ley 527 de 1999). Guardamos tu nombre, la fecha, la hora y el dispositivo como evidencia, junto con la huella digital del documento.</p>
    </section>`);let s=l.querySelector(`[data-form]`),f=l.querySelector(`[data-ok]`),g=l.querySelector(`[data-pad]`),_=c(g,{onChange:e=>e&&g.classList.remove(`has-error`)});s.addEventListener(`input`,e=>e.target.closest(`.field, .check`)?.classList.remove(`has-error`)),s.addEventListener(`change`,e=>e.target.closest(`.field, .check`)?.classList.remove(`has-error`)),l.querySelector(`[data-clear]`).addEventListener(`click`,()=>_.clear()),l.querySelector(`[data-undo]`).addEventListener(`click`,()=>_.undo());let v=(e,t)=>{let n=e.closest(`.field, .check, .sigpad`)||e;n.classList.add(`has-error`),n.scrollIntoView({behavior:`smooth`,block:`center`}),C(t)};f.addEventListener(`click`,async()=>{l.querySelectorAll(`.has-error`).forEach(e=>e.classList.remove(`has-error`));let n={nombre:s.nombre.value.trim().replace(/\s+/g,` `),documento:s.documento.value.trim()};if(n.nombre.length<3)return v(s.nombre,`Escribe tu nombre completo.`);if(!n.documento)return v(s.documento,`Escribe tu número de documento.`);if(!s.acepto.checked)return v(s.acepto,`Marca la casilla para aceptar el contrato.`);if(_.isEmpty())return v(l.querySelector(`[data-pad]`),`Falta tu firma.`);f.disabled=!0,f.querySelector(`span`).textContent=`Firmando…`;let r=new Date,i={version:1,contrato:t.numero,nombre:n.nombre,documento:n.documento,png:_.toPNG(),firmadoEn:r.toISOString(),fechaTexto:p(r),dispositivo:m(),zonaHoraria:Intl.DateTimeFormat().resolvedOptions().timeZone||``,huella:t.huella,aceptacion:`Leí el contrato N.º ${t.numero} y lo acepto, y autorizo el tratamiento de mis datos personales.`};try{let t=await fetch(e.subir.firma,{method:`PUT`,body:JSON.stringify(i),headers:{"Content-Type":`application/json`}});if(!t.ok)throw Error(t.status===403?`El enlace venció. Escríbenos y te enviamos uno nuevo.`:`No se pudo guardar la firma (${t.status}).`)}catch(e){return f.disabled=!1,f.querySelector(`span`).textContent=`Firmar contrato`,C(e?.message?.startsWith(`El enlace`)||e?.message?.startsWith(`No se pudo`)?e.message:`Sin conexión: revisa tu internet e inténtalo de nuevo.`,5200)}_.destroy(),document.querySelector(`.toast`)?.remove(),x(e,i)})}function x(e,t,{again:i=!1}={}){let a=e.documento,c={nombre:t.nombre,documento:t.documento,fecha:t.fechaTexto,dispositivo:t.dispositivo,metodo:`Firma electrónica con enlace personal enviado por WhatsApp.`};l.innerHTML=h(`
    <section class="fx-done">
      <span class="fx-done__icon">${o.ok}</span>
      <p class="kicker">Contrato N.º ${r(a.numero)}</p>
      <h1 class="display">${i?`Ya está <em>firmado</em>`:`¡Listo, <em>${r(d(t.nombre))}</em>!`}</h1>
      <p class="fx-lead">${i?`Este contrato`:`Tu contrato`} quedó firmado el ${r(t.fechaTexto)}. ${i?``:`Global Autos ya recibió tu firma.`}</p>
      <div class="actions">
        <button class="btn btn--primary btn--block" type="button" data-pdf>${o.descargar}<span>Preparando tu copia…</span></button>
        <a class="btn btn--ghost btn--block btn--wa" href="${r(g(`Hola Global Autos, ya firmé el contrato N.º ${a.numero}.`))}" target="_blank" rel="noopener">${o.whatsapp}<span>${i?`Escribir a Global Autos`:`Avisar por WhatsApp`}</span></a>
      </div>
      <p class="fx-legal">Huella del documento (SHA-256)<br><code>${r(a.huella||``)}</code></p>
    </section>`),window.scrollTo(0,0);let u=l.querySelector(`[data-pdf]`);u.disabled=!0,s(a,{firmaCliente:t.png,evidencia:c,firmaDueno:e.firmaDueno}).then(e=>{let t=n(a,!0);u.disabled=!1,u.querySelector(`span`).textContent=`Descargar mi copia (PDF)`,u.addEventListener(`click`,()=>S(e,t))}).catch(()=>{u.querySelector(`span`).textContent=`No se pudo armar el PDF`})}function S(e,t){let n=new File([e],t,{type:`application/pdf`});if(navigator.canShare?.({files:[n]})){navigator.share({files:[n],title:t}).catch(()=>{});return}let r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),3e4)}function C(e,t=3600){document.querySelector(`.toast`)?.remove();let n=document.createElement(`div`);n.className=`toast`,n.setAttribute(`role`,`alert`),n.innerHTML=`${o.alerta}<span>${r(e)}</span>`,document.body.append(n),setTimeout(()=>{n.classList.add(`is-out`),setTimeout(()=>n.remove(),300)},t)}window.addEventListener(`hashchange`,()=>y()),y();