import{n as e,t}from"./proteccion-F1ntS3rC.js";/* empty css                   */import{A as n,B as r,K as i,O as a,S as o,X as s,_ as c,a as l,b as u,ct as d,d as f,f as p,i as m,k as h,m as g,n as _,o as v,p as y,pt as b,q as x,r as S,s as C,t as w,u as T,v as E,y as D}from"./papel-Cg7uQTlU.js";var O=document.getElementById(`app`),k=e=>e&&/\/img\/.+\.webp$/.test(e)?e.replace(/\.webp$/,`-1024.webp`):e||``;if(window.top!==window.self){try{window.top.location.replace(window.location.href)}catch{}throw Error(`Global Autos no se abre dentro de otra página`)}document.getElementById(`anti-iframe`)?.remove();var A=e=>String(e||``).trim().split(/\s+/)[0]||``;function j(){let e=navigator.userAgent;return`${/iPhone/.test(e)?`iPhone`:/iPad/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1?`iPad`:/Android/.test(e)?`Android`:/Mac OS X/.test(e)?`Mac`:/Windows/.test(e)?`Windows`:`otro equipo`} · ${/CriOS|Chrome\//.test(e)&&!/Edg/.test(e)?`Chrome`:/FxiOS|Firefox\//.test(e)?`Firefox`:/Edg/.test(e)?`Edge`:/Safari\//.test(e)?`Safari`:`navegador`}`}var M=t=>`
  <div class="app-glow" aria-hidden="true"></div>
  <div class="fx">
    <header class="fx-brand">
      <span class="fx-brand__mark" role="img" aria-label="Global Autos"></span>
      <span class="kicker">Global Autos</span>
    </header>
    ${t}
    <footer class="fx-foot">
      <p>${x(e.legal.company)} · ${x(e.legal.nit)} · ${x(e.city)}</p>
      <p><a href="${x(e.site)}" rel="noopener">globalautosexperience.com</a> · <a href="${x(e.site)}/legal/privacidad.html" rel="noopener">Tratamiento de datos</a></p>
    </footer>
  </div>`,N=t=>b(e.whatsapp.number,t);function P({title:e,text:t,retry:n=!1,wa:r=`Hola Global Autos, necesito ayuda con el enlace de mi contrato.`}){O.innerHTML=M(`
    <section class="fx-msg">
      <span class="fx-msg__icon">${C.alerta}</span>
      <h1 class="display">${e}</h1>
      <p class="muted">${t}</p>
      <div class="actions">
        ${n?`<button class="btn btn--primary btn--block" type="button" data-retry>${C.sincronizar}<span>Intentar de nuevo</span></button>`:``}
        <a class="btn ${n?`btn--ghost`:`btn--primary`} btn--block btn--wa" href="${x(N(r))}" target="_blank" rel="noopener">${C.whatsapp}<span>Escribir a Global Autos</span></a>
      </div>
    </section>`),O.querySelector(`[data-retry]`)?.addEventListener(`click`,()=>I())}async function F(e){let t=await fetch(e,{cache:`no-store`});return t.status===404?{status:404}:t.ok?{status:200,data:await t.json()}:{status:t.status}}async function I(){t({aviso:!1});let e=c(location.hash);if(!e)return P({title:`Enlace <em>incompleto</em>`,text:`Este enlace no se abrió completo. Ábrelo de nuevo desde el mensaje de WhatsApp o pídenos uno nuevo.`});if(Date.now()>+e.vence)return P({title:`Este enlace <em>venció</em>`,text:`Por seguridad, los enlaces para firmar duran 7 días. Escríbenos y te enviamos uno nuevo enseguida.`,wa:`Hola Global Autos, el enlace para firmar mi contrato venció. ¿Me envían uno nuevo?`});O.innerHTML=`<div class="lock"><div><div class="lock__mark" role="img" aria-label="Global Autos"></div><p class="kicker">Cargando tu contrato…</p></div></div>`;let n;try{n=await F(e.sobre)}catch{return P({title:`Sin <em>conexión</em>`,text:`No pudimos cargar tu contrato. Revisa tu conexión a internet e inténtalo de nuevo.`,retry:!0})}if(n.status===404)return P({title:`No encontramos <em>tu contrato</em>`,text:`Puede que Global Autos te haya enviado una versión más nueva. Revisa el último mensaje o escríbenos.`});if(n.status!==200)return P({title:`Este enlace <em>venció</em>`,text:`El enlace ya no es válido. Escríbenos y te enviamos uno nuevo enseguida.`,wa:`Hola Global Autos, el enlace para firmar mi contrato no funciona. ¿Me envían uno nuevo?`});let r=n.data;if(!E(e,r?.leer?.firma)||!E(e,r?.subir?.firma))return P({title:`Enlace <em>no válido</em>`,text:`Este enlace no es de Global Autos. No escribas tus datos aquí: pídenos el enlace por WhatsApp.`});let i=await F(r.leer.firma).catch(()=>({status:0})),a=r.version===2&&Array.isArray(r.docs)&&r.docs.length;if(i.status===200&&i.data?.png)return a?K(r,i.data,{again:!0}):R(r,i.data,{again:!0});if(a)return G(r);L(r)}function L(e){let t=e.documento,n=e.cliente?.nombre||t.partes?.clienteNombre||``,r=e.vehiculo||{};O.innerHTML=M(`
    <section class="fx-hero">
      <p class="kicker">Contrato N.º ${x(t.numero)}</p>
      <h1 class="display">Hola, <em>${x(A(n)||`bienvenido`)}</em></h1>
      <p class="fx-lead">Este es tu contrato${r.nombre?` de <b>${x(r.nombre)}</b>`:``}. Léelo con calma y fírmalo aquí mismo con el dedo: te queda una copia en PDF.</p>
    </section>

    ${r.foto?`<figure class="fx-car">
            <img src="${x(k(r.foto))}" alt="${x(r.nombre||``)}" />
            <figcaption><span class="kicker">Tu vehículo</span><span class="display">${x(r.nombre||``)}</span>${r.placa?`<span class="fx-car__plate">${x(r.placa)}</span>`:``}</figcaption>
          </figure>`:``}

    <ol class="fx-steps" aria-label="Pasos">
      <li><span class="num">1</span>Lee el contrato</li>
      <li><span class="num">2</span>Confirma tus datos</li>
      <li><span class="num">3</span>Firma</li>
    </ol>

    <section class="fx-doc" aria-label="Contrato">
      <div class="paper">${w(t)}</div>
    </section>

    <section class="card card--pad fx-sign" aria-labelledby="fx-sign-title">
      <h2 class="section__title" id="fx-sign-title">Tu <em>firma</em></h2>
      <form class="form" data-form style="margin-top:16px" novalidate>
        <label class="field"><span class="field__label">Nombre completo</span><input class="field__input" name="nombre" value="${x(n)}" autocomplete="name" autocapitalize="words" required /></label>
        <label class="field"><span class="field__label">Documento de identidad</span><input class="field__input" name="documento" value="${x(e.cliente?.documento||t.partes?.clienteDocumento||``)}" required /></label>
        <label class="check"><input type="checkbox" name="acepto" /><span>Leí el contrato N.º ${x(t.numero)} y lo acepto, y autorizo a Global Autos a tratar mis datos personales según su política de tratamiento de datos.</span></label>
      </form>
      <p class="field__label" style="margin:20px 0 8px">Firma aquí con el dedo</p>
      <div class="sigpad" data-pad><div class="sigpad__line"></div><div class="sigpad__hint">FIRME AQUÍ</div></div>
      <div class="fx-pad-tools"><button class="link-more" type="button" data-undo>Deshacer</button><button class="link-more" type="button" data-clear>Borrar firma</button></div>
      <button class="btn btn--primary btn--block" type="button" data-ok style="margin-top:20px">${C.firma}<span>Firmar contrato</span></button>
      <p class="fx-legal">Firma electrónica con la misma validez de la firma manuscrita (Ley 527 de 1999). Guardamos tu nombre, la fecha, la hora y el dispositivo como evidencia, junto con la huella digital del documento.</p>
    </section>`);let i=O.querySelector(`[data-form]`),a=O.querySelector(`[data-ok]`),o=O.querySelector(`[data-pad]`),s=v(o,{onChange:e=>e&&o.classList.remove(`has-error`)});i.addEventListener(`input`,e=>e.target.closest(`.field, .check`)?.classList.remove(`has-error`)),i.addEventListener(`change`,e=>e.target.closest(`.field, .check`)?.classList.remove(`has-error`)),O.querySelector(`[data-clear]`).addEventListener(`click`,()=>s.clear()),O.querySelector(`[data-undo]`).addEventListener(`click`,()=>s.undo());let c=(e,t)=>{let n=e.closest(`.field, .check, .sigpad`)||e;n.classList.add(`has-error`),n.scrollIntoView({behavior:`smooth`,block:`center`}),J(t)};a.addEventListener(`click`,async()=>{O.querySelectorAll(`.has-error`).forEach(e=>e.classList.remove(`has-error`));let n={nombre:i.nombre.value.trim().replace(/\s+/g,` `),documento:i.documento.value.trim()};if(n.nombre.length<3)return c(i.nombre,`Escribe tu nombre completo.`);if(!n.documento)return c(i.documento,`Escribe tu número de documento.`);if(!i.acepto.checked)return c(i.acepto,`Marca la casilla para aceptar el contrato.`);if(s.isEmpty())return c(O.querySelector(`[data-pad]`),`Falta tu firma.`);a.disabled=!0,a.querySelector(`span`).textContent=`Firmando…`;let r=new Date,o={version:1,contrato:t.numero,nombre:n.nombre,documento:n.documento,png:s.toPNG(),firmadoEn:r.toISOString(),fechaTexto:h(r),dispositivo:j(),zonaHoraria:Intl.DateTimeFormat().resolvedOptions().timeZone||``,huella:t.huella,aceptacion:`Leí el contrato N.º ${t.numero} y lo acepto, y autorizo el tratamiento de mis datos personales.`};try{let t=await fetch(e.subir.firma,{method:`PUT`,body:JSON.stringify(o),headers:{"Content-Type":`application/json`}});if(!t.ok)throw Error(t.status===403?`El enlace venció. Escríbenos y te enviamos uno nuevo.`:`No se pudo guardar la firma (${t.status}).`)}catch(e){return a.disabled=!1,a.querySelector(`span`).textContent=`Firmar contrato`,J(e?.message?.startsWith(`El enlace`)||e?.message?.startsWith(`No se pudo`)?e.message:`Sin conexión: revisa tu internet e inténtalo de nuevo.`,5200)}s.destroy(),document.querySelector(`.toast`)?.remove(),R(e,o)})}function R(e,t,{again:n=!1}={}){let r=e.documento,i={nombre:t.nombre,documento:t.documento,fecha:t.fechaTexto,dispositivo:t.dispositivo,metodo:`Firma electrónica con enlace personal enviado por WhatsApp.`};O.innerHTML=M(`
    <section class="fx-done">
      <span class="fx-done__icon">${C.ok}</span>
      <p class="kicker">Contrato N.º ${x(r.numero)}</p>
      <h1 class="display">${n?`Ya está <em>firmado</em>`:`¡Listo, <em>${x(A(t.nombre))}</em>!`}</h1>
      <p class="fx-lead">${n?`Este contrato`:`Tu contrato`} quedó firmado el ${x(t.fechaTexto)}. ${n?``:`Global Autos ya recibió tu firma.`}</p>
      <div class="actions">
        <button class="btn btn--primary btn--block" type="button" data-pdf>${C.descargar}<span>Preparando tu copia…</span></button>
        <a class="btn btn--ghost btn--block btn--wa" href="${x(N(`Hola Global Autos, ya firmé el contrato N.º ${r.numero}.`))}" target="_blank" rel="noopener">${C.whatsapp}<span>${n?`Escribir a Global Autos`:`Avisar por WhatsApp`}</span></a>
      </div>
      <p class="fx-legal">Huella del documento (SHA-256)<br><code>${x(r.huella||``)}</code></p>
    </section>`),window.scrollTo(0,0);let a=O.querySelector(`[data-pdf]`);a.disabled=!0,D(r,{firmaCliente:t.png,evidencia:i,firmaDueno:e.firmaDueno}).then(e=>{let t=u(r,!0);a.disabled=!1,a.querySelector(`span`).textContent=`Descargar mi copia (PDF)`,a.addEventListener(`click`,()=>q(e,t))}).catch(()=>{a.querySelector(`span`).textContent=`No se pudo armar el PDF`})}var z=e=>String(e||``).normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^\w .-]/g,``).trim(),B=e=>e.rol===`conductor`?`Contrato conduccion ${e.numero} firmado - ${z(e.persona?.nombre)}.pdf`:`Contrato ${e.numero} firmado - ${z(e.persona?.nombre)}.pdf`,V=e=>e?`${i(e)}, ${d(e)}`:``;function H(e,t){if(!e)return``;let n=(e,t)=>t?`<div><dt>${e}</dt><dd>${x(t)}</dd></div>`:``;return`<section class="card card--pad fx-servicio" aria-label="Tu servicio">
      <p class="kicker">Tu servicio</p>
      <dl class="rows" style="margin-top:10px">
        ${n(`Vehículo`,[e.vehiculo||t.nombre,e.placa].filter(Boolean).join(` · `))}
        ${n(`Cliente`,e.cliente)}
        ${n(`Inicio`,V(e.inicio))}
        ${n(`Fin`,V(e.fin))}
        ${n(`Lugar de inicio`,e.lugarInicio)}
        ${n(`Horario`,e.horario?`${e.horario} (${e.jornada||12} h)`:``)}
        ${n(`Itinerario`,e.itinerario)}
        ${e.honorarios?n(`Honorarios`,`${s(e.honorarios)} × ${e.dias} ${e.dias===1?`día`:`días`} = ${s(e.total)}`):``}
        ${e.anticipo?n(`Anticipo`,s(e.anticipo)):``}
      </dl>
    </section>`}function U(e){return e.foto?`<figure class="fx-car">
        <img src="${x(k(e.foto))}" alt="${x(e.nombre||``)}" />
        <figcaption><span class="kicker">Tu vehículo</span><span class="display">${x(e.nombre||``)}</span>${e.placa?`<span class="fx-car__plate">${x(e.placa)}</span>`:``}</figcaption>
      </figure>`:``}var W=(e,t)=>`<div class="sigpad" data-pad="${t}"><div class="sigpad__line"></div><div class="sigpad__hint">${e}</div></div>
  <div class="fx-pad-tools"><button class="link-more" type="button" data-undo="${t}">Deshacer</button><button class="link-more" type="button" data-clear="${t}">Borrar firma</button></div>`;async function G(e){let t=e.rol===`conductor`?`conductor`:`cliente`,n=t===`conductor`,r=e.persona||{},i=e.docs[0],a=e.vehiculo||{},s={};if(n)for(let e of o.conductor)e.tipo!==`date`&&i.valores[e.k]&&(s[e.d]=i.valores[e.k]);O.innerHTML=M(`
    <section class="fx-hero">
      <p class="kicker">${n?`Contrato de conducción`:`Contrato`} N.º ${x(e.numero)}</p>
      <h1 class="display">Hola, <em>${x(A(r.nombre)||`bienvenido`)}</em></h1>
      <p class="fx-lead">${n?`Global Autos te envía tu contrato de prestación de servicios de conducción. Revísalo, completa tus datos y fírmalo aquí mismo con el dedo: te queda una copia en PDF.`:`Este es tu contrato${a.nombre?` de <b>${x(a.nombre)}</b>`:``}, con el pagaré y su carta de instrucciones. Léelo con calma y fírmalo aquí mismo con el dedo: te queda una copia en PDF.`}</p>
    </section>
    ${n?H(e.servicio,a):U(a)}
    <ol class="fx-steps" aria-label="Pasos">
      <li><span class="num">1</span>Lee el contrato</li>
      <li><span class="num">2</span>${n?`Completa tus datos`:`Escribe tu correo`}</li>
      <li><span class="num">3</span>Firma</li>
    </ol>
    <section class="fx-doc" aria-label="Contrato">
      <div class="pdfpages" data-pages><p class="muted">Cargando tu contrato…</p></div>
      <a class="btn btn--ghost btn--block" data-abrir hidden target="_blank" rel="noopener" style="margin-top:12px">${C.documento}<span>Abrir el PDF completo</span></a>
    </section>
    <section class="card card--pad fx-sign" aria-labelledby="fx-sign-title">
      <h2 class="section__title" id="fx-sign-title">Tu <em>firma</em></h2>
      <form class="form" data-form style="margin-top:16px" novalidate>${S({rol:t,valores:i.valores,persona:r,numero:e.numero,datos:s})}</form>
      <p class="field__label" style="margin:20px 0 8px">Firma aquí con el dedo</p>
      ${W(`FIRME AQUÍ`,0)}
      ${e.adicional?`<p class="field__label" style="margin:22px 0 8px">Firma del conductor adicional · ${x(e.adicional.nombre)}</p>${W(`CONDUCTOR ADICIONAL`,1)}`:``}
      <button class="btn btn--primary btn--block" type="button" data-ok style="margin-top:20px" disabled>${C.firma}<span>Cargando el contrato…</span></button>
      <p class="fx-legal">Firma electrónica con la misma validez de la firma manuscrita (Ley 527 de 1999 y Decreto 2364 de 2012). Guardamos tu nombre, la fecha, la hora y el dispositivo como evidencia, junto con la huella digital (SHA-256) del documento.</p>
    </section>`);let c=O.querySelector(`[data-form]`),u=O.querySelector(`[data-ok]`),d=O.querySelector(`[data-pages]`),b=[...O.querySelectorAll(`[data-pad]`)].map(e=>v(e,{onChange:t=>t&&e.classList.remove(`has-error`)}));O.querySelectorAll(`[data-clear]`).forEach(e=>e.addEventListener(`click`,()=>b[Number(e.dataset.clear)].clear())),O.querySelectorAll(`[data-undo]`).forEach(e=>e.addEventListener(`click`,()=>b[Number(e.dataset.undo)].undo())),c.addEventListener(`input`,e=>e.target.closest(`.field, .check, fieldset`)?.classList.remove(`has-error`)),c.addEventListener(`change`,e=>e.target.closest(`.field, .check, fieldset`)?.classList.remove(`has-error`));try{for(let t of e.docs)if(await g(await y(t.id))!==t.sha)throw Object.assign(Error(`plantilla`),{cambio:!0});let{bytes:t}=await f(i.id,i.valores,{firmas:e.firmas||{}});await p(d,t,{zoom:!0});let r=O.querySelector(`[data-abrir]`);r.href=URL.createObjectURL(new Blob([t],{type:`application/pdf`})),r.hidden=!1,u.disabled=!1,u.querySelector(`span`).textContent=n?`Firmar mi contrato`:`Firmar contrato`}catch(t){if(t?.cambio)return P({title:`Este enlace <em>cambió</em>`,text:`Global Autos actualizó el contrato después de enviarte este enlace. Pídenos uno nuevo y lo firmas enseguida.`,wa:`Hola Global Autos, necesito un enlace nuevo para firmar el contrato N.º ${e.numero}.`});d.innerHTML=`<div class="notice notice--bad">${C.alerta}<span>No pudimos mostrar el contrato. Revisa tu conexión y vuelve a abrir el enlace.</span></div>`,u.querySelector(`span`).textContent=`Sin contrato no se puede firmar`;return}let w=(e,t)=>{e?.classList.add(`has-error`),e?.scrollIntoView({behavior:`smooth`,block:`center`}),J(t)};u.addEventListener(`click`,async()=>{O.querySelectorAll(`.has-error`).forEach(e=>e.classList.remove(`has-error`));let a=m(c,t,i.valores),o=_(a,t,i.valores);if(o)return w(c.querySelector(`[data-campo="${o[0]}"]`),o[1]);if(b[0].isEmpty())return w(O.querySelector(`[data-pad="0"]`),`Falta tu firma.`);if(e.adicional&&b[1].isEmpty())return w(O.querySelector(`[data-pad="1"]`),`Falta la firma del conductor adicional.`);u.disabled=!0,u.querySelector(`span`).textContent=`Firmando…`;let s=new Date,d={version:2,rol:t,metodo:`enlace`,contrato:e.numero,nombre:r.nombre||``,documento:r.documento||``,png:b[0].toPNG({color:`#13235b`}),pngAdicional:e.adicional?b[1].toPNG({color:`#13235b`}):null,editados:a.editados,ofertas:a.ofertas,firmadoEn:s.toISOString(),fechaTexto:h(s),dispositivo:j(),zonaHoraria:Intl.DateTimeFormat().resolvedOptions().timeZone||``,aceptacion:l(t,e.numero)};try{d.huella=await T(e.docs,t,d);let n=await fetch(e.subir.firma,{method:`PUT`,body:JSON.stringify(d),headers:{"Content-Type":`application/json`}});if(!n.ok)throw Error(n.status===403?`El enlace venció. Escríbenos y te enviamos uno nuevo.`:`No se pudo guardar la firma (${n.status}).`)}catch(e){return u.disabled=!1,u.querySelector(`span`).textContent=n?`Firmar mi contrato`:`Firmar contrato`,J(e?.message?.startsWith(`El enlace`)||e?.message?.startsWith(`No se pudo`)?e.message:`Sin conexión: revisa tu internet e inténtalo de nuevo.`,5200)}b.forEach(e=>e.destroy()),document.querySelector(`.toast`)?.remove(),K(e,d)})}function K(t,i,{again:o=!1}={}){let s=t.rol===`conductor`?`conductor`:`cliente`,c=s===`conductor`,l=t.docs[0],u=t.servicio;O.innerHTML=M(`
    <section class="fx-done">
      <span class="fx-done__icon">${C.ok}</span>
      <p class="kicker">${c?`Contrato de conducción`:`Contrato`} N.º ${x(t.numero)}</p>
      <h1 class="display">${o?`Ya está <em>firmado</em>`:`¡Listo, <em>${x(A(i.nombre))}</em>!`}</h1>
      <p class="fx-lead">${o?`Este contrato`:`Tu contrato`} quedó firmado el ${x(i.fechaTexto)}. ${o?``:`Global Autos ya recibió tu firma.`}${c&&u?.inicio&&!o?` Te esperamos el ${x(V(u.inicio))}${u.lugarInicio?` en ${x(u.lugarInicio)}`:``}.`:``}</p>
      <div class="actions">
        <button class="btn btn--primary btn--block" type="button" data-pdf disabled>${C.descargar}<span>Preparando tu copia…</span></button>
        <a class="btn btn--ghost btn--block btn--wa" href="${x(N(`Hola Global Autos, ya firmé el ${c?`contrato de conducción`:`contrato`} N.º ${t.numero}.`))}" target="_blank" rel="noopener">${C.whatsapp}<span>${o?`Escribir a Global Autos`:`Avisar por WhatsApp`}</span></a>
      </div>
      <p class="fx-legal">Huella del documento firmado (SHA-256)<br><code>${x(i.huella||``)}</code></p>
    </section>
    ${c?H(u,t.vehiculo||{}):``}`),window.scrollTo(0,0);let d=O.querySelector(`[data-pdf]`);(async()=>{let o=i.huella||await T(t.docs,s,i),{bytes:c}=await f(l.id,r(l,s,i),{firmas:n(l.id,s,i,t.firmas||{}),evidencia:a({id:l.id,rol:s,firma:i,congelado:t,huella:o,empresa:e.legal.company})}),u=new Blob([c],{type:`application/pdf`});d.disabled=!1,d.querySelector(`span`).textContent=`Descargar mi copia (PDF)`,d.addEventListener(`click`,()=>q(u,B(t)))})().catch(()=>{d.querySelector(`span`).textContent=`No se pudo armar el PDF`})}function q(e,t){let n=new File([e],t,{type:`application/pdf`});if(navigator.canShare?.({files:[n]})){navigator.share({files:[n],title:t}).catch(()=>{});return}let r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),3e4)}function J(e,t=3600){document.querySelector(`.toast`)?.remove();let n=document.createElement(`div`);n.className=`toast`,n.setAttribute(`role`,`alert`),n.innerHTML=`${C.alerta}<span>${x(e)}</span>`,document.body.append(n),setTimeout(()=>{n.classList.add(`is-out`),setTimeout(()=>n.remove(),300)},t)}window.addEventListener(`hashchange`,()=>I()),I();