import{n as e,t}from"./proteccion-Cy_hLbce.js";/* empty css                   */import{C as n,O as r,c as i,d as a,s as o,t as s}from"./iconos-DvhjYnF8.js";import{A as c,B as l,O as u,S as d,_ as f,a as p,b as m,d as h,f as g,i as _,k as v,m as y,n as b,o as x,p as S,r as C,t as w,u as T,v as E,y as D}from"./papel-H_laLs0W.js";/* empty css               */var O=document.getElementById(`app`),k=e=>e&&/\/img\/.+\.webp$/.test(e)?e.replace(/\.webp$/,`-1024.webp`):e||``;if(window.top!==window.self){try{window.top.location.replace(window.location.href)}catch{}throw Error(`Global Autos no se abre dentro de otra página`)}document.getElementById(`anti-iframe`)?.remove();var A=e=>String(e||``).trim().split(/\s+/)[0]||``;function j(){let e=navigator.userAgent;return`${/iPhone/.test(e)?`iPhone`:/iPad/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1?`iPad`:/Android/.test(e)?`Android`:/Mac OS X/.test(e)?`Mac`:/Windows/.test(e)?`Windows`:`otro equipo`} · ${/CriOS|Chrome\//.test(e)&&!/Edg/.test(e)?`Chrome`:/FxiOS|Firefox\//.test(e)?`Firefox`:/Edg/.test(e)?`Edge`:/Safari\//.test(e)?`Safari`:`navegador`}`}var M=t=>`
  <div class="app-glow" aria-hidden="true"></div>
  <div class="fx">
    <header class="fx-brand">
      <span class="fx-brand__mark" role="img" aria-label="Global Autos"></span>
      <span class="kicker">Global Autos</span>
    </header>
    ${t}
    <footer class="fx-foot">
      <p>${i(e.legal.company)} · ${i(e.legal.nit)} · ${i(e.city)}</p>
      <p><a href="${i(e.site)}" rel="noopener">globalautosexperience.com</a> · <a href="${i(e.site)}/legal/privacidad.html" rel="noopener">Tratamiento de datos</a></p>
    </footer>
  </div>`,N=t=>r(e.whatsapp.number,t);function P({title:e,text:t,retry:n=!1,wa:r=`Hola Global Autos, necesito ayuda con el enlace de mi contrato.`}){O.innerHTML=M(`
    <section class="fx-msg">
      <span class="fx-msg__icon">${s.alerta}</span>
      <h1 class="display">${e}</h1>
      <p class="muted">${t}</p>
      <div class="actions">
        ${n?`<button class="btn btn--primary btn--block" type="button" data-retry>${s.sincronizar}<span>Intentar de nuevo</span></button>`:``}
        <a class="btn ${n?`btn--ghost`:`btn--primary`} btn--block btn--wa" href="${i(N(r))}" target="_blank" rel="noopener">${s.whatsapp}<span>Escribir a Global Autos</span></a>
      </div>
    </section>`),O.querySelector(`[data-retry]`)?.addEventListener(`click`,()=>I())}async function F(e){let t=await fetch(e,{cache:`no-store`});return t.status===404?{status:404}:t.ok?{status:200,data:await t.json()}:{status:t.status}}async function I(){t({aviso:!1});let e=f(location.hash);if(!e)return P({title:`Enlace <em>incompleto</em>`,text:`Este enlace no se abrió completo. Ábrelo de nuevo desde el mensaje de WhatsApp o pídenos uno nuevo.`});if(Date.now()>+e.vence)return P({title:`Este enlace <em>venció</em>`,text:`Por seguridad, los enlaces para firmar duran 7 días. Escríbenos y te enviamos uno nuevo enseguida.`,wa:`Hola Global Autos, el enlace para firmar mi contrato venció. ¿Me envían uno nuevo?`});O.innerHTML=`<div class="lock"><div><div class="lock__mark" role="img" aria-label="Global Autos"></div><p class="kicker">Cargando tu contrato…</p></div></div>`;let n;try{n=await F(e.sobre)}catch{return P({title:`Sin <em>conexión</em>`,text:`No pudimos cargar tu contrato. Revisa tu conexión a internet e inténtalo de nuevo.`,retry:!0})}if(n.status===404)return P({title:`No encontramos <em>tu contrato</em>`,text:`Puede que Global Autos te haya enviado una versión más nueva. Revisa el último mensaje o escríbenos.`});if(n.status!==200)return P({title:`Este enlace <em>venció</em>`,text:`El enlace ya no es válido. Escríbenos y te enviamos uno nuevo enseguida.`,wa:`Hola Global Autos, el enlace para firmar mi contrato no funciona. ¿Me envían uno nuevo?`});let r=n.data;if(!E(e,r?.leer?.firma)||!E(e,r?.subir?.firma))return P({title:`Enlace <em>no válido</em>`,text:`Este enlace no es de Global Autos. No escribas tus datos aquí: pídenos el enlace por WhatsApp.`});let i=await F(r.leer.firma).catch(()=>({status:0})),a=r.version===2&&Array.isArray(r.docs)&&r.docs.length;if(i.status===200&&i.data?.png)return a?K(r,i.data,{again:!0}):R(r,i.data,{again:!0});if(a)return G(r);L(r)}function L(e){let t=e.documento,n=e.cliente?.nombre||t.partes?.clienteNombre||``,r=e.vehiculo||{};O.innerHTML=M(`
    <section class="fx-hero">
      <p class="kicker">Contrato N.º ${i(t.numero)}</p>
      <h1 class="display">Hola, <em>${i(A(n)||`bienvenido`)}</em></h1>
      <p class="fx-lead">Este es tu contrato${r.nombre?` de <b>${i(r.nombre)}</b>`:``}. Léelo con calma y fírmalo aquí mismo con el dedo: te queda una copia en PDF.</p>
    </section>

    ${r.foto?`<figure class="fx-car">
            <img src="${i(k(r.foto))}" alt="${i(r.nombre||``)}" />
            <figcaption><span class="kicker">Tu vehículo</span><span class="display">${i(r.nombre||``)}</span>${r.placa?`<span class="fx-car__plate">${i(r.placa)}</span>`:``}</figcaption>
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
        <label class="field"><span class="field__label">Nombre completo</span><input class="field__input" name="nombre" value="${i(n)}" autocomplete="name" autocapitalize="words" required /></label>
        <label class="field"><span class="field__label">Documento de identidad</span><input class="field__input" name="documento" value="${i(e.cliente?.documento||t.partes?.clienteDocumento||``)}" required /></label>
        <label class="check"><input type="checkbox" name="acepto" /><span>Leí el contrato N.º ${i(t.numero)} y lo acepto, y autorizo a Global Autos a tratar mis datos personales según su política de tratamiento de datos.</span></label>
      </form>
      <p class="field__label" style="margin:20px 0 8px">Firma aquí con el dedo</p>
      <div class="sigpad" data-pad><div class="sigpad__line"></div><div class="sigpad__hint">FIRME AQUÍ</div></div>
      <div class="fx-pad-tools"><button class="link-more" type="button" data-undo>Deshacer</button><button class="link-more" type="button" data-clear>Borrar firma</button></div>
      <button class="btn btn--primary btn--block" type="button" data-ok style="margin-top:20px">${s.firma}<span>Firmar contrato</span></button>
      <p class="fx-legal">Firma electrónica con la misma validez de la firma manuscrita (Ley 527 de 1999). Guardamos tu nombre, la fecha, la hora y el dispositivo como evidencia, junto con la huella digital del documento.</p>
    </section>`);let a=O.querySelector(`[data-form]`),o=O.querySelector(`[data-ok]`),c=O.querySelector(`[data-pad]`),l=x(c,{onChange:e=>e&&c.classList.remove(`has-error`)});a.addEventListener(`input`,e=>e.target.closest(`.field, .check`)?.classList.remove(`has-error`)),a.addEventListener(`change`,e=>e.target.closest(`.field, .check`)?.classList.remove(`has-error`)),O.querySelector(`[data-clear]`).addEventListener(`click`,()=>l.clear()),O.querySelector(`[data-undo]`).addEventListener(`click`,()=>l.undo());let u=(e,t)=>{let n=e.closest(`.field, .check, .sigpad`)||e;n.classList.add(`has-error`),n.scrollIntoView({behavior:`smooth`,block:`center`}),J(t)};o.addEventListener(`click`,async()=>{O.querySelectorAll(`.has-error`).forEach(e=>e.classList.remove(`has-error`));let n={nombre:a.nombre.value.trim().replace(/\s+/g,` `),documento:a.documento.value.trim()};if(n.nombre.length<3)return u(a.nombre,`Escribe tu nombre completo.`);if(!n.documento)return u(a.documento,`Escribe tu número de documento.`);if(!a.acepto.checked)return u(a.acepto,`Marca la casilla para aceptar el contrato.`);if(l.isEmpty())return u(O.querySelector(`[data-pad]`),`Falta tu firma.`);o.disabled=!0,o.querySelector(`span`).textContent=`Firmando…`;let r=new Date,i={version:1,contrato:t.numero,nombre:n.nombre,documento:n.documento,png:l.toPNG(),firmadoEn:r.toISOString(),fechaTexto:v(r),dispositivo:j(),zonaHoraria:Intl.DateTimeFormat().resolvedOptions().timeZone||``,huella:t.huella,aceptacion:`Leí el contrato N.º ${t.numero} y lo acepto, y autorizo el tratamiento de mis datos personales.`};try{let t=await fetch(e.subir.firma,{method:`PUT`,body:JSON.stringify(i),headers:{"Content-Type":`application/json`}});if(!t.ok)throw Error(t.status===403?`El enlace venció. Escríbenos y te enviamos uno nuevo.`:`No se pudo guardar la firma (${t.status}).`)}catch(e){return o.disabled=!1,o.querySelector(`span`).textContent=`Firmar contrato`,J(e?.message?.startsWith(`El enlace`)||e?.message?.startsWith(`No se pudo`)?e.message:`Sin conexión: revisa tu internet e inténtalo de nuevo.`,5200)}l.destroy(),document.querySelector(`.toast`)?.remove(),R(e,i)})}function R(e,t,{again:n=!1}={}){let r=e.documento,a={nombre:t.nombre,documento:t.documento,fecha:t.fechaTexto,dispositivo:t.dispositivo,metodo:`Firma electrónica con enlace personal enviado por WhatsApp.`};O.innerHTML=M(`
    <section class="fx-done">
      <span class="fx-done__icon">${s.ok}</span>
      <p class="kicker">Contrato N.º ${i(r.numero)}</p>
      <h1 class="display">${n?`Ya está <em>firmado</em>`:`¡Listo, <em>${i(A(t.nombre))}</em>!`}</h1>
      <p class="fx-lead">${n?`Este contrato`:`Tu contrato`} quedó firmado el ${i(t.fechaTexto)}. ${n?``:`Global Autos ya recibió tu firma.`}</p>
      <div class="actions">
        <button class="btn btn--primary btn--block" type="button" data-pdf>${s.descargar}<span>Preparando tu copia…</span></button>
        <a class="btn btn--ghost btn--block btn--wa" href="${i(N(`Hola Global Autos, ya firmé el contrato N.º ${r.numero}.`))}" target="_blank" rel="noopener">${s.whatsapp}<span>${n?`Escribir a Global Autos`:`Avisar por WhatsApp`}</span></a>
      </div>
      <p class="fx-legal">Huella del documento (SHA-256)<br><code>${i(r.huella||``)}</code></p>
    </section>`),window.scrollTo(0,0);let o=O.querySelector(`[data-pdf]`);o.disabled=!0,D(r,{firmaCliente:t.png,evidencia:a,firmaDueno:e.firmaDueno}).then(e=>{let t=m(r,!0);o.disabled=!1,o.querySelector(`span`).textContent=`Descargar mi copia (PDF)`,o.addEventListener(`click`,()=>q(e,t))}).catch(()=>{o.querySelector(`span`).textContent=`No se pudo armar el PDF`})}var z=e=>String(e||``).normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^\w .-]/g,``).trim(),B=e=>e.rol===`conductor`?`Contrato conduccion ${e.numero} firmado - ${z(e.persona?.nombre)}.pdf`:`Contrato ${e.numero} firmado - ${z(e.persona?.nombre)}.pdf`,V=e=>e?`${o(e)}, ${n(e)}`:``;function H(e,t){if(!e)return``;let n=(e,t)=>t?`<div><dt>${e}</dt><dd>${i(t)}</dd></div>`:``;return`<section class="card card--pad fx-servicio" aria-label="Tu servicio">
      <p class="kicker">Tu servicio</p>
      <dl class="rows" style="margin-top:10px">
        ${n(`Vehículo`,[e.vehiculo||t.nombre,e.placa].filter(Boolean).join(` · `))}
        ${n(`Cliente`,e.cliente)}
        ${n(`Inicio`,V(e.inicio))}
        ${n(`Fin`,V(e.fin))}
        ${n(`Lugar de inicio`,e.lugarInicio)}
        ${n(`Horario`,e.horario?`${e.horario} (${e.jornada||12} h)`:``)}
        ${n(`Itinerario`,e.itinerario)}
        ${e.honorarios?n(`Honorarios`,`${a(e.honorarios)} × ${e.dias} ${e.dias===1?`día`:`días`} = ${a(e.total)}`):``}
        ${e.anticipo?n(`Anticipo`,a(e.anticipo)):``}
      </dl>
    </section>`}function U(e){return e.foto?`<figure class="fx-car">
        <img src="${i(k(e.foto))}" alt="${i(e.nombre||``)}" />
        <figcaption><span class="kicker">Tu vehículo</span><span class="display">${i(e.nombre||``)}</span>${e.placa?`<span class="fx-car__plate">${i(e.placa)}</span>`:``}</figcaption>
      </figure>`:``}var W=(e,t)=>`<div class="sigpad" data-pad="${t}"><div class="sigpad__line"></div><div class="sigpad__hint">${e}</div></div>
  <div class="fx-pad-tools"><button class="link-more" type="button" data-undo="${t}">Deshacer</button><button class="link-more" type="button" data-clear="${t}">Borrar firma</button></div>`;async function G(e){let t=e.rol===`conductor`?`conductor`:`cliente`,n=t===`conductor`,r=e.persona||{},a=e.docs[0],o=e.vehiculo||{},c={};if(n)for(let e of d.conductor)e.tipo!==`date`&&a.valores[e.k]&&(c[e.d]=a.valores[e.k]);O.innerHTML=M(`
    <section class="fx-hero">
      <p class="kicker">${n?`Contrato de conducción`:`Contrato`} N.º ${i(e.numero)}</p>
      <h1 class="display">Hola, <em>${i(A(r.nombre)||`bienvenido`)}</em></h1>
      <p class="fx-lead">${n?`Global Autos te envía tu contrato de prestación de servicios de conducción. Revísalo, completa tus datos y fírmalo aquí mismo con el dedo: te queda una copia en PDF.`:`Este es tu contrato${o.nombre?` de <b>${i(o.nombre)}</b>`:``}, con el pagaré y su carta de instrucciones. Léelo con calma y fírmalo aquí mismo con el dedo: te queda una copia en PDF.`}</p>
    </section>
    ${n?H(e.servicio,o):U(o)}
    <ol class="fx-steps" aria-label="Pasos">
      <li><span class="num">1</span>Lee el contrato</li>
      <li><span class="num">2</span>${n?`Completa tus datos`:`Escribe tu correo`}</li>
      <li><span class="num">3</span>Firma</li>
    </ol>
    <section class="fx-doc" aria-label="Contrato">
      <div class="pdfpages" data-pages><p class="muted">Cargando tu contrato…</p></div>
      <a class="btn btn--ghost btn--block" data-abrir hidden target="_blank" rel="noopener" style="margin-top:12px">${s.documento}<span>Abrir el PDF completo</span></a>
    </section>
    <section class="card card--pad fx-sign" aria-labelledby="fx-sign-title">
      <h2 class="section__title" id="fx-sign-title">Tu <em>firma</em></h2>
      <form class="form" data-form style="margin-top:16px" novalidate>${C({rol:t,valores:a.valores,persona:r,numero:e.numero,datos:c})}</form>
      <p class="field__label" style="margin:20px 0 8px">Firma aquí con el dedo</p>
      ${W(`FIRME AQUÍ`,0)}
      ${e.adicional?`<p class="field__label" style="margin:22px 0 8px">Firma del conductor adicional · ${i(e.adicional.nombre)}</p>${W(`CONDUCTOR ADICIONAL`,1)}`:``}
      <button class="btn btn--primary btn--block" type="button" data-ok style="margin-top:20px" disabled>${s.firma}<span>Cargando el contrato…</span></button>
      <p class="fx-legal">Firma electrónica con la misma validez de la firma manuscrita (Ley 527 de 1999 y Decreto 2364 de 2012). Guardamos tu nombre, la fecha, la hora y el dispositivo como evidencia, junto con la huella digital (SHA-256) del documento.</p>
    </section>`);let l=O.querySelector(`[data-form]`),u=O.querySelector(`[data-ok]`),f=O.querySelector(`[data-pages]`),m=[...O.querySelectorAll(`[data-pad]`)].map(e=>x(e,{onChange:t=>t&&e.classList.remove(`has-error`)}));O.querySelectorAll(`[data-clear]`).forEach(e=>e.addEventListener(`click`,()=>m[Number(e.dataset.clear)].clear())),O.querySelectorAll(`[data-undo]`).forEach(e=>e.addEventListener(`click`,()=>m[Number(e.dataset.undo)].undo())),l.addEventListener(`input`,e=>e.target.closest(`.field, .check, fieldset`)?.classList.remove(`has-error`)),l.addEventListener(`change`,e=>e.target.closest(`.field, .check, fieldset`)?.classList.remove(`has-error`));try{for(let t of e.docs)if(await y(await S(t.id))!==t.sha)throw Object.assign(Error(`plantilla`),{cambio:!0});let{bytes:t}=await h(a.id,a.valores,{firmas:e.firmas||{}});await g(f,t,{zoom:!0});let r=O.querySelector(`[data-abrir]`);r.href=URL.createObjectURL(new Blob([t],{type:`application/pdf`})),r.hidden=!1,u.disabled=!1,u.querySelector(`span`).textContent=n?`Firmar mi contrato`:`Firmar contrato`}catch(t){if(t?.cambio)return P({title:`Este enlace <em>cambió</em>`,text:`Global Autos actualizó el contrato después de enviarte este enlace. Pídenos uno nuevo y lo firmas enseguida.`,wa:`Hola Global Autos, necesito un enlace nuevo para firmar el contrato N.º ${e.numero}.`});f.innerHTML=`<div class="notice notice--bad">${s.alerta}<span>No pudimos mostrar el contrato. Revisa tu conexión y vuelve a abrir el enlace.</span></div>`,u.querySelector(`span`).textContent=`Sin contrato no se puede firmar`;return}let w=(e,t)=>{e?.classList.add(`has-error`),e?.scrollIntoView({behavior:`smooth`,block:`center`}),J(t)};u.addEventListener(`click`,async()=>{O.querySelectorAll(`.has-error`).forEach(e=>e.classList.remove(`has-error`));let i=_(l,t,a.valores),o=b(i,t,a.valores);if(o)return w(l.querySelector(`[data-campo="${o[0]}"]`),o[1]);if(m[0].isEmpty())return w(O.querySelector(`[data-pad="0"]`),`Falta tu firma.`);if(e.adicional&&m[1].isEmpty())return w(O.querySelector(`[data-pad="1"]`),`Falta la firma del conductor adicional.`);u.disabled=!0,u.querySelector(`span`).textContent=`Firmando…`;let s=new Date,c={version:2,rol:t,metodo:`enlace`,contrato:e.numero,nombre:r.nombre||``,documento:r.documento||``,png:m[0].toPNG({color:`#13235b`}),pngAdicional:e.adicional?m[1].toPNG({color:`#13235b`}):null,editados:i.editados,ofertas:i.ofertas,firmadoEn:s.toISOString(),fechaTexto:v(s),dispositivo:j(),zonaHoraria:Intl.DateTimeFormat().resolvedOptions().timeZone||``,aceptacion:p(t,e.numero)};try{c.huella=await T(e.docs,t,c);let n=await fetch(e.subir.firma,{method:`PUT`,body:JSON.stringify(c),headers:{"Content-Type":`application/json`}});if(!n.ok)throw Error(n.status===403?`El enlace venció. Escríbenos y te enviamos uno nuevo.`:`No se pudo guardar la firma (${n.status}).`)}catch(e){return u.disabled=!1,u.querySelector(`span`).textContent=n?`Firmar mi contrato`:`Firmar contrato`,J(e?.message?.startsWith(`El enlace`)||e?.message?.startsWith(`No se pudo`)?e.message:`Sin conexión: revisa tu internet e inténtalo de nuevo.`,5200)}m.forEach(e=>e.destroy()),document.querySelector(`.toast`)?.remove(),K(e,c)})}function K(t,n,{again:r=!1}={}){let a=t.rol===`conductor`?`conductor`:`cliente`,o=a===`conductor`,d=t.docs[0],f=t.servicio;O.innerHTML=M(`
    <section class="fx-done">
      <span class="fx-done__icon">${s.ok}</span>
      <p class="kicker">${o?`Contrato de conducción`:`Contrato`} N.º ${i(t.numero)}</p>
      <h1 class="display">${r?`Ya está <em>firmado</em>`:`¡Listo, <em>${i(A(n.nombre))}</em>!`}</h1>
      <p class="fx-lead">${r?`Este contrato`:`Tu contrato`} quedó firmado el ${i(n.fechaTexto)}. ${r?``:`Global Autos ya recibió tu firma.`}${o&&f?.inicio&&!r?` Te esperamos el ${i(V(f.inicio))}${f.lugarInicio?` en ${i(f.lugarInicio)}`:``}.`:``}</p>
      <div class="actions">
        <button class="btn btn--primary btn--block" type="button" data-pdf disabled>${s.descargar}<span>Preparando tu copia…</span></button>
        <a class="btn btn--ghost btn--block btn--wa" href="${i(N(`Hola Global Autos, ya firmé el ${o?`contrato de conducción`:`contrato`} N.º ${t.numero}.`))}" target="_blank" rel="noopener">${s.whatsapp}<span>${r?`Escribir a Global Autos`:`Avisar por WhatsApp`}</span></a>
      </div>
      <p class="fx-legal">Huella del documento firmado (SHA-256)<br><code>${i(n.huella||``)}</code></p>
    </section>
    ${o?H(f,t.vehiculo||{}):``}`),window.scrollTo(0,0);let p=O.querySelector(`[data-pdf]`);(async()=>{let r=n.huella||await T(t.docs,a,n),{bytes:i}=await h(d.id,l(d,a,n),{firmas:c(d.id,a,n,t.firmas||{}),evidencia:u({id:d.id,rol:a,firma:n,congelado:t,huella:r,empresa:e.legal.company})}),o=new Blob([i],{type:`application/pdf`});p.disabled=!1,p.querySelector(`span`).textContent=`Descargar mi copia (PDF)`,p.addEventListener(`click`,()=>q(o,B(t)))})().catch(()=>{p.querySelector(`span`).textContent=`No se pudo armar el PDF`})}function q(e,t){let n=new File([e],t,{type:`application/pdf`});if(navigator.canShare?.({files:[n]})){navigator.share({files:[n],title:t}).catch(()=>{});return}let r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),3e4)}function J(e,t=3600){document.querySelector(`.toast`)?.remove();let n=document.createElement(`div`);n.className=`toast`,n.setAttribute(`role`,`alert`),n.innerHTML=`${s.alerta}<span>${i(e)}</span>`,document.body.append(n),setTimeout(()=>{n.classList.add(`is-out`),setTimeout(()=>n.remove(),300)},t)}window.addEventListener(`hashchange`,()=>I()),I();