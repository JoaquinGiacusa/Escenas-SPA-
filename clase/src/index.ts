import map from "lodash/map";

function handleRoute(route) {
    const contenedorEl = document.querySelector(".contenedor");

    const routes = [
        {
            path: /\/sit1/,
            handler: () => (contenedorEl.textContent = "Sit 1"),
        },
        {
            path: /\/sit2/,
            handler: () => (contenedorEl.textContent = "Sit 2"),
        },
        {
            path: /\/search\/./,
            handler: () => (contenedorEl.textContent = "Buscador"),
        },
    ];
    for (const r of routes) {
        if (r.path.test(route)) {
            r.handler();
        }
    }
}

function goTo(path) {
    /* path: 
/sit 1
/sit 2 
esta funcion cambia la url y mada el path a handleroute
*/
    history.pushState({}, "", path);
    handleRoute(path);
}

(function () {
    const sit1ButtonEl = document.querySelector(".sit-1");
    const sit2ButtonEl = document.querySelector(".sit-2");
    const sit3ButtonEl = document.querySelector(".sit-3");

    sit1ButtonEl.addEventListener("click", () => goTo("/sit1"));
    sit2ButtonEl.addEventListener("click", () => goTo("/sit2"));
    sit3ButtonEl.addEventListener("click", () => goTo("/search/termo"));

    /* para saber a donde estoy(sit1 o sit2) al entrar por primera vez y que cargue el contenido(min 20)*/
    window.addEventListener("load", () => {
        handleRoute(location.pathname);
    });
    console.log(map);
})();
