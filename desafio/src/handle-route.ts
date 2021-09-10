import { inboxListComp } from "./inbox/list";
import { SentListComp } from "./sent/list";
import { findAndProccessLinks } from "./index";
import { inboxEmailComp } from "./inbox/email";

export function handleRoute(route) {
    /*     console.log("soy el handler", route); */

    const routes = [
        {
            path: /\/inbox/,
            handler: inboxListComp,
        },
        {
            path: /\/inbox\/./,
            handler: inboxEmailComp,
        },
        {
            path: /\/sent/,
            handler: SentListComp,
        },
    ];
    for (const r of routes) {
        if (r.path.test(route)) {
            const el = r.handler();

            /* ESTO DE ACA ES PARA BORRAR LO ANTERIOR Y DSP PODER PONER LO NUEVO */
            const contentEl = document.querySelector(".container-test");
            if (contentEl.firstChild) {
                contentEl.firstChild.remove();
            }

            contentEl.appendChild(el);
            findAndProccessLinks(el);
        }
    }
}
