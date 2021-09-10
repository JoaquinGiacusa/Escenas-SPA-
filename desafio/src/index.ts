import { handleRoute } from "./handle-route";

function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
}

export function findAndProccessLinks(contaier: any = document) {
    const els = contaier.querySelectorAll(".link-interno");

    for (const link of els) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const route = (e.target as any).getAttribute("href");

            /* /inbox o /sent */
            goTo(route);
        });
    }
}

(function () {
    findAndProccessLinks();
    /*  const inboxEl = document.querySelector(".menu__inbox");
    const sentEl = document.querySelector(".menu__sent");

    inboxEl.addEventListener("click", () => goTo("/inbox"));
    sentEl.addEventListener("click", () => goTo("/sent"));
 */
    window.addEventListener("load", () => {
        handleRoute(location.pathname);
    });
})();
