import{t as e}from"./config-CBPkBc8u.js";import{I as t,_ as n,c as r,l as i,n as a,o,r as s,s as c,t as l}from"./firma-Du1Q1C2F.js";var u=document.getElementById(`app`),d=e=>e&&/\/img\/.+\.webp$/.test(e)?e.replace(/\.webp$/,`-1024.webp`):e||``,f=e=>String(e||``).trim().split(/\s+/)[0]||``,p=new Intl.DateTimeFormat(`es-CO`,{day:`numeric`,month:`long`,year:`numeric`,hour:`numeric`,minute:`2-digit`,hour12:!0,timeZone:`America/Bogota`}),m=e=>`${p.format(e).replace(/\s/g,` `).replace(`,`,` a las`)} (hora de Colombia)`;function h(){let e=navigator.userAgent;return`${/iPhone/.test(e)?`iPhone`:/iPad/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1?`iPad`:/Android/.test(e)?`Android`:/Mac OS X/.test(e)?`Mac`:/Windows/.test(e)?`Windows`:`otro equipo`} · ${/CriOS|Chrome\//.test(e)&&!/Edg/.test(e)?`Chrome`:/FxiOS|Firefox\//.test(e)?`Firefox`:/Edg/.test(e)?`Edge`:/Safari\//.test(e)?`Safari`:`navegador`}`}var g=t=>`
  <div class="app-glow" aria-hidden="true"></div>
  <div class="fx">
    <header class="fx-brand">
      <span class="fx-brand__mark" role="img" aria-label="Global Autos"></span>
      <span class="kicker">Global Autos</span>
    </header>
    ${t}
    <footer class="fx-foot">
      <p>${n(e.legal.company)} · ${n(e.legal.nit)} · ${n(e.city)}</p>
      <p><a href="${n(e.site)}" rel="noopener">globalautosexperience.com</a> · <a href="${n(e.site)}/legal/privacidad.html" rel="noopener">Tratamiento de datos</a></p>
    </footer>
  </div>`,_=n=>t(e.whatsapp.number,n);function v({title:e,text:t,retry:r=!1,wa:i=`Hola Global Autos, necesito ayuda con el enlace de mi contrato.`}){u.innerHTML=g(`
    <section class="fx-msg">
      <span class="fx-msg__icon">${s.alerta}</span>
      <h1 class="display">${e}</h1>
      <p class="muted">${t}</p>
      <div class="actions">
        ${r?`<button class="btn btn--primary btn--block" type="button" data-retry>${s.sincronizar}<span>Intentar de nuevo</span></button>`:``}
        <a class="btn ${r?`btn--ghost`:`btn--primary`} btn--block btn--wa" href="${n(_(i))}" target="_blank" rel="noopener">${s.whatsapp}<span>Escribir a Global Autos</span></a>
      </div>
    </section>`),u.querySelector(`[data-retry]`)?.addEventListener(`click`,()=>b())}async function y(e){let t=await fetch(e,{cache:`no-store`});return t.status===404?{status:404}:t.ok?{status:200,data:await t.json()}:{status:t.status}}async function b(){let e=o(location.hash);if(!e)return v({title:`Enlace <em>incompleto</em>`,text:`Este enlace no se abrió completo. Ábrelo de nuevo desde el mensaje de WhatsApp o pídenos uno nuevo.`});if(Date.now()>+e.vence)return v({title:`Este enlace <em>venció</em>`,text:`Por seguridad, los enlaces para firmar duran 7 días. Escríbenos y te enviamos uno nuevo enseguida.`,wa:`Hola Global Autos, el enlace para firmar mi contrato venció. ¿Me envían uno nuevo?`});u.innerHTML=`<div class="lock"><div><div class="lock__mark" role="img" aria-label="Global Autos"></div><p class="kicker">Cargando tu contrato…</p></div></div>`;let t;try{t=await y(e.sobre)}catch{return v({title:`Sin <em>conexión</em>`,text:`No pudimos cargar tu contrato. Revisa tu conexión a internet e inténtalo de nuevo.`,retry:!0})}if(t.status===404)return v({title:`No encontramos <em>tu contrato</em>`,text:`Puede que Global Autos te haya enviado una versión más nueva. Revisa el último mensaje o escríbenos.`});if(t.status!==200)return v({title:`Este enlace <em>venció</em>`,text:`El enlace ya no es válido. Escríbenos y te enviamos uno nuevo enseguida.`,wa:`Hola Global Autos, el enlace para firmar mi contrato no funciona. ¿Me envían uno nuevo?`});let n=t.data;if(!c(e,n?.leer?.firma)||!c(e,n?.subir?.firma))return v({title:`Enlace <em>no válido</em>`,text:`Este enlace no es de Global Autos. No escribas tus datos aquí: pídenos el enlace por WhatsApp.`});let r=await y(n.leer.firma).catch(()=>({status:0}));if(r.status===200&&r.data?.png)return S(n,r.data,{again:!0});x(n)}function x(e){let t=e.documento,r=e.cliente?.nombre||t.partes?.clienteNombre||``,i=e.vehiculo||{};u.innerHTML=g(`
    <section class="fx-hero">
      <p class="kicker">Contrato N.º ${n(t.numero)}</p>
      <h1 class="display">Hola, <em>${n(f(r)||`bienvenido`)}</em></h1>
      <p class="fx-lead">Este es tu contrato${i.nombre?` de <b>${n(i.nombre)}</b>`:``}. Léelo con calma y fírmalo aquí mismo con el dedo: te queda una copia en PDF.</p>
    </section>

    ${i.foto?`<figure class="fx-car">
            <img src="${n(d(i.foto))}" alt="${n(i.nombre||``)}" />
            <figcaption><span class="kicker">Tu vehículo</span><span class="display">${n(i.nombre||``)}</span>${i.placa?`<span class="fx-car__plate">${n(i.placa)}</span>`:``}</figcaption>
          </figure>`:``}

    <ol class="fx-steps" aria-label="Pasos">
      <li><span class="num">1</span>Lee el contrato</li>
      <li><span class="num">2</span>Confirma tus datos</li>
      <li><span class="num">3</span>Firma</li>
    </ol>

    <section class="fx-doc" aria-label="Contrato">
      <div class="paper">${a(t)}</div>
    </section>

    <section class="card card--pad fx-sign" aria-labelledby="fx-sign-title">
      <h2 class="section__title" id="fx-sign-title">Tu <em>firma</em></h2>
      <form class="form" data-form style="margin-top:16px" novalidate>
        <label class="field"><span class="field__label">Nombre completo</span><input class="field__input" name="nombre" value="${n(r)}" autocomplete="name" autocapitalize="words" required /></label>
        <label class="field"><span class="field__label">Documento de identidad</span><input class="field__input" name="documento" value="${n(e.cliente?.documento||t.partes?.clienteDocumento||``)}" required /></label>
        <label class="check"><input type="checkbox" name="acepto" /><span>Leí el contrato N.º ${n(t.numero)} y lo acepto, y autorizo a Global Autos a tratar mis datos personales según su política de tratamiento de datos.</span></label>
      </form>
      <p class="field__label" style="margin:20px 0 8px">Firma aquí con el dedo</p>
      <div class="sigpad" data-pad><div class="sigpad__line"></div><div class="sigpad__hint">FIRME AQUÍ</div></div>
      <div class="fx-pad-tools"><button class="link-more" type="button" data-undo>Deshacer</button><button class="link-more" type="button" data-clear>Borrar firma</button></div>
      <button class="btn btn--primary btn--block" type="button" data-ok style="margin-top:20px">${s.firma}<span>Firmar contrato</span></button>
      <p class="fx-legal">Firma electrónica con la misma validez de la firma manuscrita (Ley 527 de 1999). Guardamos tu nombre, la fecha, la hora y el dispositivo como evidencia, junto con la huella digital del documento.</p>
    </section>`);let o=u.querySelector(`[data-form]`),c=u.querySelector(`[data-ok]`),p=u.querySelector(`[data-pad]`),_=l(p,{onChange:e=>e&&p.classList.remove(`has-error`)});o.addEventListener(`input`,e=>e.target.closest(`.field, .check`)?.classList.remove(`has-error`)),o.addEventListener(`change`,e=>e.target.closest(`.field, .check`)?.classList.remove(`has-error`)),u.querySelector(`[data-clear]`).addEventListener(`click`,()=>_.clear()),u.querySelector(`[data-undo]`).addEventListener(`click`,()=>_.undo());let v=(e,t)=>{let n=e.closest(`.field, .check, .sigpad`)||e;n.classList.add(`has-error`),n.scrollIntoView({behavior:`smooth`,block:`center`}),w(t)};c.addEventListener(`click`,async()=>{u.querySelectorAll(`.has-error`).forEach(e=>e.classList.remove(`has-error`));let n={nombre:o.nombre.value.trim().replace(/\s+/g,` `),documento:o.documento.value.trim()};if(n.nombre.length<3)return v(o.nombre,`Escribe tu nombre completo.`);if(!n.documento)return v(o.documento,`Escribe tu número de documento.`);if(!o.acepto.checked)return v(o.acepto,`Marca la casilla para aceptar el contrato.`);if(_.isEmpty())return v(u.querySelector(`[data-pad]`),`Falta tu firma.`);c.disabled=!0,c.querySelector(`span`).textContent=`Firmando…`;let r=new Date,i={version:1,contrato:t.numero,nombre:n.nombre,documento:n.documento,png:_.toPNG(),firmadoEn:r.toISOString(),fechaTexto:m(r),dispositivo:h(),zonaHoraria:Intl.DateTimeFormat().resolvedOptions().timeZone||``,huella:t.huella,aceptacion:`Leí el contrato N.º ${t.numero} y lo acepto, y autorizo el tratamiento de mis datos personales.`};try{let t=await fetch(e.subir.firma,{method:`PUT`,body:JSON.stringify(i),headers:{"Content-Type":`application/json`}});if(!t.ok)throw Error(t.status===403?`El enlace venció. Escríbenos y te enviamos uno nuevo.`:`No se pudo guardar la firma (${t.status}).`)}catch(e){return c.disabled=!1,c.querySelector(`span`).textContent=`Firmar contrato`,w(e?.message?.startsWith(`El enlace`)||e?.message?.startsWith(`No se pudo`)?e.message:`Sin conexión: revisa tu internet e inténtalo de nuevo.`,5200)}_.destroy(),document.querySelector(`.toast`)?.remove(),S(e,i)})}function S(e,t,{again:a=!1}={}){let o=e.documento,c={nombre:t.nombre,documento:t.documento,fecha:t.fechaTexto,dispositivo:t.dispositivo,metodo:`Firma electrónica con enlace personal enviado por WhatsApp.`};u.innerHTML=g(`
    <section class="fx-done">
      <span class="fx-done__icon">${s.ok}</span>
      <p class="kicker">Contrato N.º ${n(o.numero)}</p>
      <h1 class="display">${a?`Ya está <em>firmado</em>`:`¡Listo, <em>${n(f(t.nombre))}</em>!`}</h1>
      <p class="fx-lead">${a?`Este contrato`:`Tu contrato`} quedó firmado el ${n(t.fechaTexto)}. ${a?``:`Global Autos ya recibió tu firma.`}</p>
      <div class="actions">
        <button class="btn btn--primary btn--block" type="button" data-pdf>${s.descargar}<span>Preparando tu copia…</span></button>
        <a class="btn btn--ghost btn--block btn--wa" href="${n(_(`Hola Global Autos, ya firmé el contrato N.º ${o.numero}.`))}" target="_blank" rel="noopener">${s.whatsapp}<span>${a?`Escribir a Global Autos`:`Avisar por WhatsApp`}</span></a>
      </div>
      <p class="fx-legal">Huella del documento (SHA-256)<br><code>${n(o.huella||``)}</code></p>
    </section>`),window.scrollTo(0,0);let l=u.querySelector(`[data-pdf]`);l.disabled=!0,r(o,{firmaCliente:t.png,evidencia:c,firmaDueno:e.firmaDueno}).then(e=>{let t=i(o,!0);l.disabled=!1,l.querySelector(`span`).textContent=`Descargar mi copia (PDF)`,l.addEventListener(`click`,()=>C(e,t))}).catch(()=>{l.querySelector(`span`).textContent=`No se pudo armar el PDF`})}function C(e,t){let n=new File([e],t,{type:`application/pdf`});if(navigator.canShare?.({files:[n]})){navigator.share({files:[n],title:t}).catch(()=>{});return}let r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),3e4)}function w(e,t=3600){document.querySelector(`.toast`)?.remove();let r=document.createElement(`div`);r.className=`toast`,r.setAttribute(`role`,`alert`),r.innerHTML=`${s.alerta}<span>${n(e)}</span>`,document.body.append(r),setTimeout(()=>{r.classList.add(`is-out`),setTimeout(()=>r.remove(),300)},t)}window.addEventListener(`hashchange`,()=>b()),b();