export function SentListComp() {
    const conteninerEl = document.querySelector(".content__email-container");

    conteninerEl.innerHTML = ` <div class="content__email">
<h4 class="email__title">Un email</h4>
<button class="email__access">Enviado</button>
</div>
<div class="content__email">
<h4 class="email__title">Un email</h4>
<button class="email__access">Enviado</button>
</div>
<div class="content__email">
<h4 class="email__title">Un email</h4>
<button class="email__access">Enviado</button>
</div>`;

    return conteninerEl;
}
