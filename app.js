const drawers = [
  {
    id: 1, title: "Herramienta general", category: "Pendiente de documentar",
    image: "./images/carrito.jpeg", imageClass: "placeholder-image", tools: []
  },
  {
    id: 2, title: "Llaves combinadas", category: "Métricas y SAE",
    image: "./images/cajon-2-llaves.png", imageClass: "crop-genially",
    tools: [
      ["Juego de llaves combinadas SAE", "Varios", 12, "Ajuste de tornillería en pulgadas.", "Seleccionar la medida exacta.", 37, 47],
      ["Juego de llaves combinadas métricas", "Varios", 11, "Ajuste de tornillería métrica.", "No utilizar extensiones.", 73, 48]
    ]
  },
  {
    id: 3, title: "Terminales y diagnóstico", category: "Herramienta eléctrica",
    image: "./images/cajon-2.jpeg",
    tools: [
      ["Kit de medición", "Fluke", 1, "Diagnóstico eléctrico con accesorios.", "Revisar categoría y rango antes de medir.", 22, 25],
      ["Juego de puntas de prueba", "Genérico", 5, "Inspección y liberación de conectores.", "No introducir en circuitos energizados.", 57, 23],
      ["Pinza para anillos externa", "Truper", 1, "Montaje de anillos de retención.", "Usar protección ocular.", 82, 28],
      ["Kit de precisión", "Wera", 1, "Trabajos de ajuste fino.", "Usar la punta correspondiente.", 30, 58],
      ["Pelacables tipo pistola", "Truper Expert", 1, "Pelado uniforme de conductores.", "Ajustar al calibre del conductor.", 55, 72],
      ["Crimpadora de terminales", "Truper", 1, "Prensado de terminales eléctricos.", "Mantener los dedos fuera de las mordazas.", 77, 64],
      ["Pinza para anillos interna", "Truper", 1, "Montaje de anillos internos.", "Usar protección ocular.", 91, 66]
    ]
  },
  {
    id: 4, title: "Pinzas y desarmadores", category: "Herramienta aislada y de corte",
    image: "./images/cajon-1.jpeg",
    tools: [
      ["Pelacables automático", "Truper", 1, "Retira aislamiento y prepara conductores.", "Trabajar con el circuito desenergizado.", 20, 25],
      ["Pinza de electricista aislada", "Truper", 1, "Sujeción, doblado y corte de cable.", "Verificar el aislamiento antes de usar.", 32, 45],
      ["Pinza de corte diagonal", "Truper", 1, "Corte limpio de alambre y conductores.", "Utilizar protección ocular.", 31, 69],
      ["Pinza universal", "Truper", 1, "Sujeción y trabajo mecánico general.", "No usar como martillo.", 31, 86],
      ["Pinza de punta larga", "Truper", 2, "Sujeción de piezas pequeñas.", "No utilizar como palanca.", 63, 38],
      ["Pinza de precisión", "Truper", 2, "Trabajo en espacios reducidos.", "Conservar puntas alineadas.", 67, 66],
      ["Desarmadores aislados", "Milwaukee", 7, "Ajuste de tornillería ranurada y Phillips.", "Seleccionar la punta correcta.", 86, 50]
    ]
  },
  {
    id: 5, title: "Desarmadores", category: "Puntas planas y Phillips",
    image: "./images/cajon-3.jpeg",
    tools: [
      ["Desarmador Phillips largo", "Milwaukee", 2, "Tornillería Phillips de acceso profundo.", "No utilizar como cincel.", 29, 34],
      ["Desarmador plano largo", "Milwaukee", 2, "Tornillería ranurada de acceso profundo.", "Usar la medida correcta.", 53, 35],
      ["Desarmador Phillips corto", "Milwaukee", 2, "Trabajo en espacios reducidos.", "Evitar fuerza lateral.", 40, 65],
      ["Desarmador plano corto", "Milwaukee", 2, "Trabajo en espacios reducidos.", "No usar en circuitos energizados.", 62, 65]
    ]
  },
  {
    id: 6, title: "Allen, presión y corte", category: "Ajuste hexagonal",
    image: "./images/cajon-7.jpeg",
    tools: [
      ["Juego de llaves Allen métricas", "Truper", 1, "Tornillería hexagonal métrica.", "Insertar completamente la llave.", 24, 49],
      ["Juego de llaves Allen SAE", "Truper", 1, "Tornillería hexagonal en pulgadas.", "No confundir medidas métricas y SAE.", 45, 49],
      ["Pinza de presión", "Milwaukee", 1, "Sujeción temporal de piezas.", "Regular la presión antes de bloquear.", 66, 48],
      ["Navaja plegable", "Milwaukee", 1, "Corte general de materiales.", "Cortar alejándose del cuerpo.", 82, 49],
      ["Cortador de tubo", "Milwaukee", 1, "Corte limpio de tubería.", "Mantener manos fuera de la trayectoria.", 92, 49]
    ]
  },
  {
    id: 7, title: "Golpe y tubería", category: "Martillos y llaves Stillson",
    image: "./images/cajon-6.jpeg",
    tools: [
      ["Marro de golpe", "Truper", 1, "Golpe de alta energía.", "Usar lentes, guantes y mantener el área despejada.", 49, 30],
      ["Mazo de hule blanco", "Truper", 1, "Golpe controlado sin marcar superficies.", "Inspeccionar cabeza y mango.", 45, 68],
      ["Llave Stillson 8 pulg.", "Milwaukee", 1, "Sujeción y giro de tubería.", "Ajustar totalmente la mordaza.", 78, 45],
      ["Llave Stillson 14 pulg.", "Milwaukee", 1, "Tubería de mayor diámetro.", "No usar extensiones en el mango.", 89, 49]
    ]
  },
  {
    id: 8, title: "Dados métricos y SAE", category: "Juego Westward de 105 piezas",
    image: "./images/cajon-5.jpeg",
    tools: [
      ["Juego de dados", "Westward", 105, "Ajuste de tornillería métrica y SAE.", "No utilizar con herramienta de impacto.", 50, 54],
      ["Matraca 1/4 pulg.", "Westward", 1, "Ajuste de bajo y medio torque.", "No extender el mango con tubos.", 68, 55],
      ["Matraca 3/8 pulg.", "Westward", 1, "Ajuste general de tornillería.", "Confirmar el sentido de giro.", 74, 57],
      ["Matraca 1/2 pulg.", "Westward", 1, "Tornillería de mayor tamaño.", "Utilizar el dado correcto.", 81, 59]
    ]
  },
  {
    id: 9, title: "Lubricación", category: "Aplicación manual de grasa",
    image: "./images/cajon-4.jpeg",
    tools: [
      ["Pistola engrasadora manual", "Genérico", 1, "Aplicación controlada de grasa.", "Liberar presión antes de desmontar.", 48, 57],
      ["Manguera flexible para grasa", "Genérico", 1, "Acceso a puntos de lubricación.", "Inspeccionar fugas antes de presurizar.", 70, 34]
    ]
  }
];

const app = document.querySelector("#app");
const modal = document.querySelector("#toolModal");
const modalContent = document.querySelector("#toolModalContent");
let selectedDrawer = 1;
let listOpen = false;

function toolCount(drawer) {
  return drawer.tools.reduce((sum, tool) => sum + tool[2], 0);
}

function render() {
  const drawer = drawers.find(item => item.id === selectedDrawer);
  app.innerHTML = `
    <div class="catalog-shell">
      <aside class="left-rail">
        <div class="title-block">
          <span>ESTÁNDAR DE</span>
          <strong>HERRAMIENTAS</strong>
          <span>DE MANTENIMIENTO</span>
        </div>

        <div class="navigation-zone">
          <div class="cart-card">
            <img src="./images/carrito.jpeg" alt="Carrito GearWrench estándar">
            <span class="cart-label">CARRO ESTÁNDAR</span>
          </div>
          <nav class="drawer-nav" aria-label="Cajones del carrito">
            ${drawers.map(item => `
              <button class="drawer-button ${item.id === drawer.id ? "is-active" : ""}" data-drawer="${item.id}">
                <span>CAJÓN</span><b>${item.id}</b>
              </button>`).join("")}
          </nav>
        </div>

        <div class="standard-card">
          <div><i class="stat-icon">▤</i><strong>9</strong><span>CAJONES</span></div>
          <div><i class="stat-icon">⚒</i><strong>201</strong><span>HERRAMIENTAS<br>ESTÁNDAR</span></div>
          <div><i class="stat-icon">✓</i><strong class="approved">APROBADA</strong><span>CONFIGURACIÓN</span></div>
        </div>
      </aside>

      <section class="content-stage">
        <header class="content-header">
          <div>
            <p>CAJÓN ${String(drawer.id).padStart(2, "0")}</p>
            <h1>${drawer.title}</h1>
            <span>${drawer.category}</span>
          </div>
          <div class="header-meta">
            <span><i></i> Configuración vigente</span>
            <b>${toolCount(drawer)} piezas</b>
          </div>
        </header>

        <div class="image-panel ${drawer.imageClass || ""}">
          <img src="${drawer.image}" alt="${drawer.title}">
          <div class="image-shade"></div>
          ${drawer.tools.map((tool, index) => `
            <button class="tool-hotspot" data-tool="${index}" style="left:${tool[5]}%;top:${tool[6]}%" aria-label="Ver ${tool[0]}">
              <span>+</span><em>${index + 1}</em>
            </button>`).join("")}
          ${!drawer.tools.length ? `<div class="pending-state"><b>CAJÓN PENDIENTE</b><span>Agrega la fotografía y el inventario correspondiente.</span></div>` : ""}
          <div class="image-caption"><span>Selecciona un punto para consultar la herramienta</span><b>${drawer.tools.length} tipos registrados</b></div>
        </div>

        <div class="action-row">
          <div class="legend"><span><i class="legend-dot"></i> Punto interactivo</span><span><i class="legend-orange"></i> Cajón seleccionado</span></div>
          <button class="list-button" id="listButton"><span>${listOpen ? "×" : "+"}</span>${listOpen ? "Cerrar lista" : "Ver lista"}</button>
        </div>

        <div class="inventory-drawer ${listOpen ? "is-open" : ""}">
          <div class="inventory-head">
            <div><span>INVENTARIO DEL CAJÓN</span><h2>${drawer.title}</h2></div>
            <label class="search-box">⌕ <input id="searchInput" placeholder="Buscar herramienta"></label>
          </div>
          <div class="inventory-grid" id="inventoryGrid"></div>
        </div>

        <div class="corner-mark" aria-hidden="true">⚙<span>GF</span></div>
      </section>
    </div>`;

  document.querySelectorAll("[data-drawer]").forEach(button =>
    button.addEventListener("click", () => {
      selectedDrawer = Number(button.dataset.drawer);
      listOpen = false;
      render();
    }));

  document.querySelectorAll("[data-tool]").forEach(button =>
    button.addEventListener("click", () => openTool(drawer, drawer.tools[Number(button.dataset.tool)])));

  document.querySelector("#listButton").addEventListener("click", () => {
    listOpen = !listOpen;
    render();
  });

  renderList(drawer.tools);
  document.querySelector("#searchInput")?.addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    renderList(drawer.tools.filter(tool => `${tool[0]} ${tool[1]}`.toLowerCase().includes(query)));
  });
}

function renderList(tools) {
  const grid = document.querySelector("#inventoryGrid");
  if (!grid) return;
  grid.innerHTML = tools.length ? tools.map((tool, index) => `
    <button class="inventory-item" data-list-tool="${index}">
      <span class="item-number">${String(index + 1).padStart(2, "0")}</span>
      <span><strong>${tool[0]}</strong><small>${tool[1]}</small></span>
      <b>×${tool[2]}</b>
      <i>›</i>
    </button>`).join("") : `<div class="empty-list">No hay herramientas registradas en este cajón.</div>`;

  const drawer = drawers.find(item => item.id === selectedDrawer);
  document.querySelectorAll("[data-list-tool]").forEach((button, index) =>
    button.addEventListener("click", () => openTool(drawer, tools[index])));
}

function openTool(drawer, tool) {
  modalContent.innerHTML = `
    <div class="modal-kicker"><span>CAJÓN ${drawer.id}</span><b>FICHA DE HERRAMIENTA</b></div>
    <h2 id="toolTitle">${tool[0]}</h2>
    <p class="tool-brand">${tool[1]}</p>
    <div class="detail-cards">
      <div><small>CANTIDAD ESTÁNDAR</small><strong>${tool[2]} ${tool[2] === 1 ? "pieza" : "piezas"}</strong></div>
      <div><small>UBICACIÓN</small><strong>Cajón ${drawer.id}</strong></div>
      <div><small>ESTADO</small><strong class="status-ok">● Vigente</strong></div>
    </div>
    <div class="modal-row"><span>USO</span><p>${tool[3]}</p></div>
    <div class="modal-row safety"><span>SEGURIDAD</span><p>${tool[4]}</p></div>
    <button class="modal-primary" id="modalDone">Entendido</button>`;
  modal.classList.remove("is-hidden");
  document.querySelector("#modalDone").addEventListener("click", closeModal);
}

function closeModal() { modal.classList.add("is-hidden"); }
document.querySelector("#closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
render();
