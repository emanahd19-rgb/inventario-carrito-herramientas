const drawers = [
  {
    id: 1,
    title: "Pinzas y desarmadores",
    subtitle: "Herramienta eléctrica y de corte",
    image: "./images/cajon-1.jpeg",
    tools: [
      ["Pelacables automático", "Truper", 1, "Retira aislamiento y prepara conductores.", "Trabajar con el circuito desenergizado."],
      ["Pinza de electricista aislada", "Truper", 1, "Sujeción, doblado y corte de cable.", "Verificar el aislamiento antes de usar."],
      ["Pinza de corte diagonal", "Truper", 1, "Corte limpio de alambre y conductores.", "Utilizar protección ocular."],
      ["Pinza de punta larga", "Truper", 2, "Sujeción de piezas pequeñas.", "No utilizar como palanca."],
      ["Desarmadores aislados", "Milwaukee", 7, "Ajuste de tornillería ranurada y Phillips.", "Seleccionar la punta correcta."]
    ]
  },
  {
    id: 2,
    title: "Terminales y diagnóstico",
    subtitle: "Preparación de cableado y medición",
    image: "./images/cajon-2.jpeg",
    tools: [
      ["Crimpadora de terminales", "Truper", 1, "Prensado de terminales eléctricos.", "Mantener los dedos fuera de las mordazas."],
      ["Pelacables tipo pistola", "Truper Expert", 1, "Pelado uniforme de conductores.", "Ajustar al calibre del conductor."],
      ["Juego de puntas de prueba", "Genérico", 5, "Inspección y liberación de conectores.", "No introducir en circuitos energizados."],
      ["Pinza para anillos", "Truper", 2, "Montaje de anillos de retención.", "Utilizar protección ocular."],
      ["Kit de medición", "Fluke", 1, "Diagnóstico eléctrico con accesorios.", "Revisar categoría y rango antes de medir."]
    ]
  },
  {
    id: 3,
    title: "Desarmadores",
    subtitle: "Puntas planas, Phillips y especiales",
    image: "./images/cajon-3.jpeg",
    tools: [
      ["Desarmador Phillips largo", "Milwaukee", 2, "Tornillería Phillips de acceso profundo.", "No utilizar como cincel."],
      ["Desarmador plano largo", "Milwaukee", 2, "Tornillería ranurada de acceso profundo.", "Usar una punta de la medida correcta."],
      ["Desarmador Phillips corto", "Milwaukee", 2, "Trabajo en espacios reducidos.", "Evitar aplicar fuerza lateral."],
      ["Desarmador plano corto", "Milwaukee", 2, "Trabajo en espacios reducidos.", "No usar en circuitos energizados."]
    ]
  },
  {
    id: 4,
    title: "Lubricación",
    subtitle: "Aplicación manual de grasa",
    image: "./images/cajon-4.jpeg",
    tools: [
      ["Pistola engrasadora manual", "Genérico", 1, "Aplicación controlada de grasa.", "Liberar la presión antes de desmontar."],
      ["Manguera flexible para grasa", "Genérico", 1, "Acceso a puntos de lubricación.", "Inspeccionar fugas antes de presurizar."]
    ]
  },
  {
    id: 5,
    title: "Dados métricos y SAE",
    subtitle: "Juego Westward de 105 piezas",
    image: "./images/cajon-5.jpeg",
    tools: [
      ["Juego de dados", "Westward", 105, "Ajuste de tornillería métrica y SAE.", "No utilizar con herramienta de impacto."],
      ["Matraca 1/4 pulg.", "Westward", 1, "Ajuste de bajo y medio torque.", "No extender el mango con tubos."],
      ["Matraca 3/8 pulg.", "Westward", 1, "Ajuste general de tornillería.", "Confirmar el sentido de giro."],
      ["Matraca 1/2 pulg.", "Westward", 1, "Ajuste de tornillería de mayor tamaño.", "Utilizar el dado correcto."]
    ]
  },
  {
    id: 6,
    title: "Golpe y tubería",
    subtitle: "Martillos y llaves Stillson",
    image: "./images/cajon-6.jpeg",
    tools: [
      ["Mazo de hule blanco", "Truper", 1, "Golpe controlado sin marcar superficies.", "Inspeccionar cabeza y mango."],
      ["Marro de golpe", "Truper", 1, "Golpe de alta energía.", "Usar lentes, guantes y área despejada."],
      ["Llave Stillson 8 pulg.", "Milwaukee", 1, "Sujeción y giro de tubería.", "Ajustar totalmente la mordaza."],
      ["Llave Stillson 14 pulg.", "Milwaukee", 1, "Sujeción de tubería de mayor diámetro.", "No usar extensiones en el mango."]
    ]
  },
  {
    id: 7,
    title: "Allen, presión y corte",
    subtitle: "Ajuste hexagonal y herramienta general",
    image: "./images/cajon-7.jpeg",
    tools: [
      ["Juego de llaves Allen métricas", "Truper", 1, "Tornillería hexagonal métrica.", "Insertar completamente la llave."],
      ["Juego de llaves Allen SAE", "Truper", 1, "Tornillería hexagonal en pulgadas.", "No confundir medidas métricas y SAE."],
      ["Pinza de presión", "Milwaukee", 1, "Sujeción temporal de piezas.", "Regular la presión antes de bloquear."],
      ["Navaja plegable", "Milwaukee", 1, "Corte general de materiales.", "Cortar alejándose del cuerpo."],
      ["Cortador de tubo", "Milwaukee", 1, "Corte limpio de tubería.", "Mantener las manos fuera de la trayectoria."]
    ]
  },
  { id: 8, title: "Cajón disponible", subtitle: "Pendiente de documentar", image: "./images/carrito.jpeg", tools: [] }
];

const app = document.querySelector("#app");
const modal = document.querySelector("#modalBackdrop");
const modalContent = document.querySelector("#modalContent");

const total = drawers.reduce((sum, drawer) =>
  sum + drawer.tools.reduce((subtotal, tool) => subtotal + tool[2], 0), 0);

function renderHome() {
  app.innerHTML = `
    <section class="home">
      <div class="intro">
        <p class="eyebrow">CARRO ESTÁNDAR · 8 CAJONES</p>
        <h1>Encuentra cada herramienta en segundos.</h1>
        <p class="lead">Selecciona un cajón del carrito para explorar su contenido y consultar la información de cada herramienta.</p>
        <div class="metrics">
          <div><strong>${total}</strong><span>Piezas registradas</span></div>
          <div><strong>7</strong><span>Cajones documentados</span></div>
          <div><strong>100%</strong><span>Visual y adaptable</span></div>
        </div>
      </div>
      <div class="cart-stage">
        <div class="cart-wrap">
          <img src="./images/carrito.jpeg" alt="Carrito GearWrench de ocho cajones">
          <div class="drawer-hotspots">
            ${drawers.map(d => `<button class="drawer-hit drawer-${d.id}" data-drawer="${d.id}" aria-label="Abrir cajón ${d.id}: ${d.title}"><span>${d.id}</span><b>${d.title}</b></button>`).join("")}
          </div>
        </div>
        <p class="hint">↑ Toca un cajón naranja para abrirlo</p>
      </div>
    </section>`;

  document.querySelectorAll("[data-drawer]").forEach(button =>
    button.addEventListener("click", () => renderDrawer(Number(button.dataset.drawer))));
}

function renderDrawer(id) {
  const drawer = drawers.find(item => item.id === id);
  app.innerHTML = `
    <section class="drawer-view">
      <nav class="breadcrumb"><button id="breadcrumbHome">Carrito</button><span>/</span><b>Cajón ${id}</b></nav>
      <div class="drawer-head">
        <div><p class="eyebrow">CAJÓN ${String(id).padStart(2, "0")}</p><h1>${drawer.title}</h1><p>${drawer.subtitle}</p></div>
        <button class="back-button" id="backButton">← Volver al carrito</button>
      </div>
      <div class="drawer-content">
        <div class="drawer-photo"><img src="${drawer.image}" alt="Interior del cajón ${id}"><span>${drawer.tools.length} tipos de herramienta</span></div>
        <aside class="tool-panel">
          <div class="panel-title"><div><small>CONTENIDO</small><h2>Herramientas</h2></div><b>${drawer.tools.reduce((sum, t) => sum + t[2], 0)}</b></div>
          ${drawer.tools.length ? `<label class="search"><span>⌕</span><input id="searchInput" placeholder="Buscar herramienta..."></label>` : ""}
          <div class="tool-list" id="toolList"></div>
        </aside>
      </div>
    </section>`;

  document.querySelector("#breadcrumbHome").addEventListener("click", renderHome);
  document.querySelector("#backButton").addEventListener("click", renderHome);

  const showTools = (query = "") => {
    const filtered = drawer.tools.filter(t => `${t[0]} ${t[1]}`.toLowerCase().includes(query.toLowerCase()));
    document.querySelector("#toolList").innerHTML = filtered.length
      ? filtered.map((t, i) => `<button class="tool-card" data-tool="${drawer.tools.indexOf(t)}"><span class="tool-index">${String(i + 1).padStart(2, "0")}</span><span><strong>${t[0]}</strong><small>${t[1]}</small></span><b>×${t[2]}</b><i>›</i></button>`).join("")
      : `<div class="empty"><b>${drawer.tools.length ? "Sin resultados" : "Próximamente"}</b><p>${drawer.tools.length ? "Prueba con otro nombre o marca." : "Este cajón está pendiente de documentar."}</p></div>`;
    document.querySelectorAll("[data-tool]").forEach(button =>
      button.addEventListener("click", () => openTool(drawer, drawer.tools[Number(button.dataset.tool)])));
  };

  showTools();
  document.querySelector("#searchInput")?.addEventListener("input", event => showTools(event.target.value));
}

function openTool(drawer, tool) {
  modalContent.innerHTML = `
    <p class="eyebrow">FICHA DE HERRAMIENTA</p>
    <h2 id="modalTitle">${tool[0]}</h2>
    <p class="modal-brand">${tool[1]}</p>
    <div class="detail-grid">
      <div><small>CANTIDAD ESTÁNDAR</small><strong>${tool[2]} ${tool[2] === 1 ? "pieza" : "piezas"}</strong></div>
      <div><small>UBICACIÓN</small><strong>Cajón ${drawer.id}</strong></div>
    </div>
    <div class="info-row"><span>Uso</span><p>${tool[3]}</p></div>
    <div class="info-row warning"><span>Seguridad</span><p>${tool[4]}</p></div>
    <button class="primary" id="understood">Entendido</button>`;
  modal.classList.remove("hidden");
  document.querySelector("#understood").addEventListener("click", closeModal);
}

function closeModal() { modal.classList.add("hidden"); }
document.querySelector("#homeButton").addEventListener("click", renderHome);
document.querySelector("#closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
renderHome();
