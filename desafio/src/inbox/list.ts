export function inboxListComp() {
    const conteninerEl = document.querySelector(".content__email-container");

    conteninerEl.innerHTML = ` <div class="content__email">
    <h4 class="email__title">Un email</h4>
    <a class="email__access link-interno" href="/inbox/1234">Ver mas</a>
</div>
<div class="content__email">
<h4 class="email__title">Un email</h4>
<a class="email__access link-interno" href="/inbox/5678">Ver mas</a>
</div>
<div class="content__email">
<h4 class="email__title">Un email</h4>
<a class="email__access link-interno" href="/inbox/9012">Ver mas</a>
</div>`;

    return conteninerEl;
}
