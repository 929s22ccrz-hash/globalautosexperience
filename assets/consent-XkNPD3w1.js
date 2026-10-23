var e=`ga-consent`,t=`/legal/cookies.html`,n=new Set;function r(){try{let t=JSON.parse(localStorage.getItem(e)||`null`);return!t||t.v!==1||!t.ts||Date.now()-t.ts>31536e6?null:t}catch{return null}}function i(t){let r={v:1,ts:Date.now(),necessary:!0,analytics:!!t.analytics};try{localStorage.setItem(e,JSON.stringify(r))}catch{}return a=r,n.forEach(e=>e(r)),document.dispatchEvent(new CustomEvent(`consent:change`,{detail:r})),r}var a=r(),o=e=>e===`necessary`||!!a?.[e];function s(e,t){if(o(e))return t();let r=i=>{i[e]&&(n.delete(r),t())};n.add(r)}var c=`
  <div class="consent__card">
    <p class="consent__kicker">Privacidad</p>
    <h2 class="consent__title" id="consent-title" tabindex="-1">Tú decides qué se guarda</h2>
    <p class="consent__text">
      No usamos cookies de publicidad ni de rastreo: solo guardamos en tu navegador la elección que hagas aquí.
      <a class="link-line" href="${t}">Política de cookies</a>
    </p>
    <div class="consent__prefs" id="consent-prefs" hidden>
      <div class="consent__row">
        <span class="consent__row-head">
          <span class="consent__row-title">Necesarias</span>
          <span class="consent__always">Siempre activas</span>
        </span>
        <span class="consent__row-text">Recuerdan esta elección durante 12 meses. No te identifican.</span>
      </div>
      <label class="consent__row consent__row--toggle">
        <span class="consent__row-head">
          <span class="consent__row-title">Medición de visitas</span>
          <input class="consent__switch" type="checkbox" name="analytics" data-consent-analytics />
        </span>
        <span class="consent__row-text">Hoy no usamos ninguna herramienta de medición. Si algún día la activamos, solo funcionará si marcas esta opción.</span>
      </label>
    </div>
    <div class="consent__actions">
      <button class="consent__btn" type="button" data-consent-reject>Solo necesarias</button>
      <button class="consent__btn" type="button" data-consent-accept>Aceptar todo</button>
      <button class="consent__btn" type="button" data-consent-save hidden>Guardar mi elección</button>
      <button class="consent__more link-line" type="button" data-consent-toggle aria-expanded="false" aria-controls="consent-prefs">Configurar</button>
    </div>
  </div>`,l=null,u=null;function d(){l=document.createElement(`section`),l.className=`consent`,l.setAttribute(`aria-labelledby`,`consent-title`),l.setAttribute(`data-lenis-prevent`,``),l.hidden=!0,l.innerHTML=c;let e=document.querySelector(`.skip-link`);e?e.after(l):document.body.prepend(l);let t=l.querySelector(`#consent-prefs`),n=l.querySelector(`[data-consent-toggle]`),r=l.querySelector(`[data-consent-save]`),o=l.querySelector(`[data-consent-analytics]`),s=e=>{t.hidden=!e,r.hidden=!e,n.setAttribute(`aria-expanded`,String(e)),n.textContent=e?`Ocultar opciones`:`Configurar`};n.addEventListener(`click`,()=>s(t.hidden)),l.querySelector(`[data-consent-reject]`).addEventListener(`click`,()=>p(i({analytics:!1}))),l.querySelector(`[data-consent-accept]`).addEventListener(`click`,()=>p(i({analytics:!0}))),r.addEventListener(`click`,()=>p(i({analytics:o.checked}))),l.addEventListener(`keydown`,e=>{e.key===`Escape`&&a&&p(a)}),l._expand=s}function f({expanded:e=!1,focus:t=!1}={}){l||d(),l.querySelector(`[data-consent-analytics]`).checked=!!a?.analytics,l._expand(e),l.hidden=!1,requestAnimationFrame(()=>l.classList.add(`is-in`)),t&&l.querySelector(`#consent-title`).focus({preventScroll:!0})}function p(){l&&(l.classList.remove(`is-in`),l.hidden=!0,u&&document.contains(u)&&u.focus({preventScroll:!0}),u=null)}function m(e){u=e||document.activeElement,f({expanded:!0,focus:!0})}function h({when:e}={}){document.addEventListener(`click`,e=>{let t=e.target.closest?.(`[data-consent-open]`);t&&(e.preventDefault(),m(t))}),window.globalAutosConsent={get:()=>a,has:o,on:s,open:()=>m()},!a&&Promise.resolve(e).then(()=>{a||f()})}export{h as n,o as t};