const TOTAL_STANDARD_TOOLS = 201;

function tool(name, specification, x, y, options = {}) {
  return {
    name,
    specification,
    x,
    y,
    brand: options.brand || "",
    part: options.part || "",
    quantity: options.quantity || 1,
    use: options.use || "Consulta y uso de acuerdo con el estándar de mantenimiento.",
    safety: options.safety || "Inspeccionar la herramienta antes de utilizarla y usar el EPP requerido.",
    action: options.action || ""
  };
}

const drawers = [
  {
    id: 1,
    title: "Herramienta general",
    category: "Pendiente de documentar",
    image: "./images/carrito.jpeg",
    imageClass: "placeholder-image",
    tools: []
  },
  {
    id: 2,
    title: "Llaves combinadas",
    category: "Medidas SAE y métricas",
    image: "./images/cajon-2-interior.jpeg",
    tools: [
      tool("Llave combinada 7/8", '7/8"', 9.3, 64.9),
      tool("Llave combinada 1/4", '1/4"', 30.8, 91.2),
      tool("Llave combinada 5/16", '5/16"', 29.5, 86.9),
      tool("Llave combinada 3/8", '3/8"', 30.8, 80.9),
      tool("Llave combinada 7/16", '7/16"', 30.8, 75.1),
      tool("Llave combinada 1/2", '1/2"', 32.1, 69.4),
      tool("Llave combinada 9/16", '9/16"', 33.3, 62.9),
      tool("Llave combinada 5/8", '5/8"', 33.7, 56.4),
      tool("Llave combinada 11/16", '11/16"', 34.8, 49.9),
      tool("Llave combinada 3/4", '3/4"', 35.1, 42.8),
      tool("Llave combinada 13/16", '13/16"', 34.8, 35),
      tool("Llave combinada 9 mm", "9 mm", 70.4, 33),
      tool("Llave combinada 10 mm", "10 mm", 70.4, 36.3),
      tool("Llave combinada 11 mm", "11 mm", 70.9, 40.1),
      tool("Llave combinada 12 mm", "12 mm", 71.6, 44.3),
      tool("Llave combinada 13 mm", "13 mm", 71.6, 49.3),
      tool("Llave combinada 14 mm", "14 mm", 72.3, 54.9),
      tool("Llave combinada 15 mm", "15 mm", 73.5, 62.2),
      tool("Llave combinada 16 mm", "16 mm", 73.5, 69.6),
      tool("Llave combinada 17 mm", "17 mm", 74.9, 78.6),
      tool("Llave combinada 18 mm", "18 mm", 75.8, 88.6),
      tool("Llave combinada 19 mm", "19 mm", 92.4, 57.8)
    ]
  },
  {
    id: 3,
    title: "Terminales y diagnóstico",
    category: "Herramienta eléctrica y de precisión",
    image: "./images/cajon-2.jpeg",
    tools: [
      tool("Pinza amperimétrica", "600 A", 29.3, 37.5, { brand: "Fluke" }),
      tool("Pinza ponchadora", "Conectores RJ-9, RJ-11, RJ-12 y RJ-45", 26.2, 76.4, { part: "PRJ-3X" }),
      tool("Pinzas para seguros omega A", "", 82.4, 41.3, { part: "17362" }),
      tool("Pinzas para seguros omega C", "", 85.3, 72.7, { part: "17361" }),
      tool("Crimpadora", "", 59.4, 67, { part: "PCT-8K" }),
      tool("Juego de extractor de sellos", "", 55.6, 36.7, { part: "641134M" })
    ]
  },
  {
    id: 4,
    title: "Pinzas y desarmadores",
    category: "Herramienta aislada, de corte y precisión",
    image: "./images/cajon-1.jpeg",
    tools: [
      tool("Desarmador Phillips", '2 x 4"', 95.5, 60.5),
      tool("Desarmador plano", '3/16 x 6"', 87.8, 33.7),
      tool("Desarmador cuadrado", '2 x 6"', 89.8, 63.8),
      tool("Desarmador Phillips", '1 x 6"', 78.3, 51.9),
      tool("Desarmador plano", '1/4 x 4"', 80.5, 38.3),
      tool("Desarmador Phillips", '2PH x 6"', 73.8, 54.3),
      tool("Pinzas de punta y corte", "Ancho de corte: 5 pulgadas", 62.9, 50, { part: "17366" }),
      tool("Pinzas de punta", "Ancho de corte: 5 pulgadas", 53.3, 39.4, { part: "T203-7X" }),
      tool("Pinzas electrónicas", "Ancho de corte: 12.7 cm", 64.8, 74.7, { part: "17314" }),
      tool("Mini pinzas de corte diagonal", 'Largo: 4" (10 cm)', 52.9, 76.4, { part: "17367" }),
      tool("Pinzas de chofer", "Largo: 20 cm", 25.8, 84.5, { part: "TRP-13065" }),
      tool("Pinza de corte diagonal", "Dimensiones: 20 cm", 26.6, 67.4, { part: "T202-8X" }),
      tool("Pinzas de electricista", "Dimensiones: 23.2 x 7.4 cm", 28.8, 52.2, { part: "T200-7X" }),
      tool("Pinzas pelacable", "Corta y pela cables de 22 a 10 AWG", 26.7, 34.4, { part: "PEC-AUT" })
    ]
  },
  {
    id: 5,
    title: "Desarmadores",
    category: "Puntas ECX, Phillips y ranuradas",
    image: "./images/cajon-5-rotado.jpeg",
    tools: [
      tool("Desarmador", "ECX #1", 51.7, 44.1),
      tool("Desarmador", "ECX #2", 45.6, 54.6),
      tool("Desarmador", 'Phillips #1 x 3"', 40.7, 40.9),
      tool("Desarmador", 'Slotted 3/16 x 6"', 35.9, 54.9),
      tool("Desarmador", 'Phillips #2 x 4"', 30.8, 44.3),
      tool("Desarmador", 'Slotted 1/4 x 4"', 25.7, 52),
      tool("Desarmador", 'Phillips #2 x 6"', 20.6, 49.7),
      tool("Desarmador", 'Slotted 5/16 x 6"', 15.5, 51.1)
    ]
  },
  {
    id: 6,
    title: "Allen, presión y corte",
    category: "Ajuste hexagonal, sujeción y navajas",
    image: "./images/cajon-6-rotado.jpeg",
    tools: [
      tool(
        "Juego de llaves Allen STD",
        'Cabeza hexagonal · 5/16" x 100; 3/32" x 112; 1/8" x 126; 5/32" x 140; 3/16" x 160; 7/32" x 180; 1/4" x 190; 5/16" x 200; 3/8" x 212',
        18.6,
        45.9,
        { part: "502217" }
      ),
      tool(
        "Juego de llaves Allen mm",
        "Cabeza hexagonal · 1.5 x 90; 2 x 100; 2.5 x 112; 3 x 126; 4 x 140; 5 x 160; 6 x 180; 8 x 200; 10 x 219",
        39.5,
        46.7,
        { part: "950 PKL/9 BM SB" }
      ),
      tool("Pinzas de presión", 'Cabeza: 10" · Dimensiones: 32.51 x 9.65 x 2.29 cm', 57.9, 47.7, { part: "48-22-3410" }),
      tool("Navaja cuchillo de sierra", "", 73.5, 45.9, { brand: "Milwaukee", part: "48-22-1530" }),
      tool("Navaja chirroquera", "", 85.6, 47, { brand: "Milwaukee", part: "48-22-1504" })
    ]
  },
  {
    id: 7,
    title: "Golpe y tubería",
    category: "Martillos, mazos y llaves Stillson",
    image: "./images/cajon-7-rotado.jpeg",
    tools: [
      tool("Marro", "Cabeza: 4 lb", 41.2, 32.2, { part: "MD-4F" }),
      tool("Mazo de hule", "Cabeza: 16 oz", 43.3, 63.9, { part: "MH-16" }),
      tool("Llave Stillson", "", 76.1, 44.5, { brand: "Milwaukee", part: "48-227-106" }),
      tool("Llave Stillson", "", 87.7, 46.6, { brand: "Milwaukee", part: "48-22-7114" }),
      tool("Mazo de hule", "Cabeza: 16 oz", 16.6, 64, { part: "MH-16" })
    ]
  },
  {
    id: 8,
    title: "Juego de dados",
    category: "Estuche Westward de 105 piezas",
    image: "./images/cajon-5.jpeg",
    detailImage: "./images/cajon-8-interior.jpeg",
    tools: [
      tool("Juego de dados", "105 piezas", 50, 54, {
        brand: "Westward",
        quantity: 105,
        action: "detail",
        use: "Abrir la vista interior del juego y consultar cada pieza."
      })
    ],
    detailTools: [
      tool("Dado mecánico", '3/16" x 1/4"', 49.9, 50),
      tool("Mango porta puntas", '1/4"', 21.7, 70.4),
      tool("Dado mecánico", '7/32" x 1/4"', 12.9, 43.1),
      tool("Dado mecánico", '1/4" x 1/4"', 17.8, 43.1),
      tool("Dado mecánico", '6 mm x 1/4"', 17.4, 56.9),
      tool("Dado mecánico", '5 mm x 1/4"', 11.5, 56.9),
      tool("Dado mecánico", '4 mm x 1/4"', 5.2, 58),
      tool("Barra de extensión", '1/2"', 62.6, 43.4),
      tool("Ratchet", '3/8"', 77.3, 60.4),
      tool("Ratchet", '1/2"', 72.2, 72.3),
      tool("Ratchet", '1/4"', 82.6, 84.7),
      tool("Barra de extensión", '1/4"', 85.5, 92.4),
      tool("Adaptador", '1/4"', 30.8, 90.4),
      tool("Dado mecánico", '7 mm x 1/4"', 22.9, 57),
      tool("Dado mecánico", '9/32" x 1/4"', 23.6, 43.3),
      tool("Dado mecánico", '5/16" x 1/4"', 26.6, 43.2),
      tool("Dado mecánico", '8 mm x 1/4"', 25.8, 56.1),
      tool("Dado mecánico", '9 mm x 1/4"', 29.4, 56.5),
      tool("Dado mecánico", '10 mm x 1/4"', 32.7, 56.8),
      tool("Dado mecánico", '11 mm x 1/4"', 36.1, 57),
      tool("Dado mecánico", '12 mm x 1/4"', 40.7, 57),
      tool("Dado mecánico", '13 mm x 1/4"', 44.5, 56.6),
      tool("Dado mecánico", '12 x 1/4"', 40.7, 42.3),
      tool("Dado mecánico", '7/16" x 1/4"', 36.2, 43.4),
      tool("Dado mecánico", '3/8" x 1/4"', 33.1, 43.4),
      tool("Dado mecánico", '11/32" x 1/4"', 29.1, 43.1),
      tool("Puntas para desarmador", "Juego de puntas", 13.4, 81.6),
      tool("Puntas para desarmador", "Juego de puntas", 13.4, 85.3),
      tool("Puntas para desarmador", "Juego de puntas", 13.4, 89.2),
      tool("Puntas para desarmador", "Juego de puntas", 12.9, 93.2),
      tool("Dado mecánico", '11 mm x 1/2"', 95.4, 44),
      tool("Dado mecánico", '12 mm x 1/4"', 90.1, 44.3),
      tool("Dado mecánico", '13 mm x 1/4"', 84.7, 44.6)
    ]
  },
  {
    id: 9,
    title: "Lubricación",
    category: "Aplicación manual de grasa",
    image: "./images/cajon-4.jpeg",
    tools: []
  }
];

/*
  Tamaños de las zonas originales de Genially, expresados como porcentaje
  de la fotografía. Las zonas son transparentes: permiten tocar directamente
  cada herramienta sin cubrirla con círculos o números.
*/
const HITBOXES = {
  2: [[12.8,54.8],[17.7,3.1],[21.1,3.1],[23.8,3.1],[23.8,3.9],[26.2,4.2],[28.4,4.2],[27.8,3.1],[32.9,3.6],[33.9,4.2],[34.5,5.9],[19.1,2],[19.1,2],[21.1,2],[22.4,3],[22.4,2.3],[26.3,2.7],[29.6,4.7],[29.6,4.7],[35.8,4.7],[37.6,4.7],[12.2,42.1]],
  3: [[32.5,14.3],[41.5,14.3],[12.7,29.4],[12.7,29.4],[12.1,41.3],[17.3,15.2]],
  4: [[7.4,25],[6.7,20.5],[8.3,26.5],[8.6,49.4],[6.2,26.2],[9.8,58.1],[10.8,22.2],[7.1,28],[9.8,25.9],[11.1,25.9],[34.3,12.7],[34.3,12.7],[37.6,12.7],[33.3,15.7]],
  5: [[4.3,41.5],[3.4,43.8],[2.8,35.6],[2.8,43.1],[4.2,41.8],[2.5,47.8],[2.7,51],[3.9,50.6]],
  6: [[17,55.8],[13.5,58.7],[14.5,63.4],[8.7,34.2],[8.7,36.3]],
  7: [[58,26.3],[66.2,8.8],[6.4,26.3],[13.4,63.1],[13.6,26.1]],
  8: [[61.6,162.1],[35.8,7.9],[2.8,7.8],[2.8,7.8],[2.8,7.8],[2.8,7.8],[2.8,7.8],[32,5.6],[42.6,10.3],[56.2,11.8],[32,10.3],[19.2,3.6],[6,4.8],[2.8,9.7],[2.3,7.8],[1.6,7.8],[1.8,8.5],[2.1,9.6],[2.7,9.4],[2.4,9],[2.6,8.5],[3.4,9.4],[3.4,7.8],[2.5,7.8],[2.2,7.8],[2.4,8.2],[20.1,4.2],[20.1,3.1],[20.1,3.1],[20.1,3.1],[3.7,11.2],[3.7,11.2],[3.7,11.2]]
};

function applyHitboxes(tools, hitboxes) {
  tools.forEach((item, index) => {
    const [width = 10, height = 8] = hitboxes[index] || [];
    item.hitW = Math.min(45, Math.max(4, width));
    item.hitH = Math.min(45, Math.max(5, height));
  });
}

drawers.forEach(drawer => {
  if (drawer.id >= 2 && drawer.id <= 7) {
    applyHitboxes(drawer.tools, HITBOXES[drawer.id]);
  }
});
const socketDrawer = drawers.find(drawer => drawer.id === 8);
Object.assign(socketDrawer.tools[0], { hitW: 72, hitH: 62 });
applyHitboxes(socketDrawer.detailTools, HITBOXES[8]);

drawers.forEach(drawer => {
  drawer.tools.forEach((item, index) => {
    item.image = `./images/tools/cajon-${drawer.id}-${String(index + 1).padStart(2, "0")}.webp`;
  });
});
socketDrawer.detailTools.forEach((item, index) => {
  item.image = `./images/tools/cajon-8-detalle-${String(index + 1).padStart(2, "0")}.webp`;
});

const app = document.querySelector("#app");
const modal = document.querySelector("#toolModal");
const modalContent = document.querySelector("#toolModalContent");
let introOpen = true;
let selectedDrawer = 2;
let listOpen = false;
let detailOpen = false;

function toolCount(tools) {
  return tools.reduce((sum, item) => sum + item.quantity, 0);
}

function render() {
  if (introOpen) {
    app.innerHTML = `
      <section class="welcome-screen">
        <div class="welcome-glow"></div>
        <div class="welcome-copy">
          <p class="welcome-kicker">CONFIGURACIÓN APROBADA · MANTENIMIENTO</p>
          <h1>Estándar visual de <strong>herramientas</strong></h1>
          <p class="welcome-description">Consulta el contenido de cada cajón y toca directamente una herramienta para ver su identificación, medida e imagen.</p>
          <div class="welcome-stats" aria-label="Resumen del estándar">
            <div><strong>9</strong><span>CAJONES</span></div>
            <div><strong>${TOTAL_STANDARD_TOOLS}</strong><span>HERRAMIENTAS</span></div>
            <div><strong>✓</strong><span>CONFIGURACIÓN</span></div>
          </div>
          <button class="welcome-button" id="enterCatalog">Abrir catálogo <span>→</span></button>
        </div>
        <div class="welcome-visual">
          <div class="welcome-cart-frame">
            <img src="./images/carrito.jpeg" alt="Carrito GearWrench de mantenimiento">
          </div>
          <span>CARRO ESTÁNDAR · 9 CAJONES</span>
        </div>
      </section>`;

    document.querySelector("#enterCatalog").addEventListener("click", () => {
      introOpen = false;
      render();
    });
    return;
  }

  const drawer = drawers.find(item => item.id === selectedDrawer);
  const showingDetail = drawer.id === 8 && detailOpen;
  const visibleTools = showingDetail ? drawer.detailTools : drawer.tools;
  const visibleImage = showingDetail ? drawer.detailImage : drawer.image;
  const visibleTitle = showingDetail ? "Interior del juego de dados" : drawer.title;
  const visibleCategory = showingDetail ? "Selecciona una pieza para consultar su medida" : drawer.category;
  const visibleRatio = showingDetail ? "936 / 706" : drawer.id === 2 ? "795 / 445" : "4 / 3";
  const stageRatioClass = showingDetail ? "stage-detail" : drawer.id === 2 ? "stage-wide" : "stage-standard";

  app.innerHTML = `
    <div class="catalog-shell">
      <aside class="left-rail">
        <div class="title-block">
          <span>ESTÁNDAR DE</span>
          <strong>HERRAMIENTAS</strong>
          <span>DE MANTENIMIENTO</span>
          <button class="home-button" id="homeButton" aria-label="Volver al inicio">⌂ Inicio</button>
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
          <div><i class="stat-icon">⚒</i><strong>${TOTAL_STANDARD_TOOLS}</strong><span>HERRAMIENTAS<br>ESTÁNDAR</span></div>
          <div><i class="stat-icon">✓</i><strong class="approved">APROBADA</strong><span>CONFIGURACIÓN</span></div>
        </div>
      </aside>

      <section class="content-stage ${stageRatioClass}">
        <header class="content-header">
          <div>
            <p>CAJÓN ${String(drawer.id).padStart(2, "0")}${showingDetail ? " · DETALLE" : ""}</p>
            <h1>${visibleTitle}</h1>
            <span>${visibleCategory}</span>
          </div>
        </header>

        <div class="image-panel ${drawer.imageClass || ""} ${showingDetail ? "detail-view" : ""}" style="--image-ratio:${visibleRatio}">
          <img src="${visibleImage}" alt="${visibleTitle}">
          <div class="image-shade"></div>
          ${visibleTools.map((item, index) => `
            <button class="tool-hotspot" data-tool="${index}" style="left:${item.x}%;top:${item.y}%;--hit-w:${item.hitW || 12}%;--hit-h:${item.hitH || 8}%" aria-label="${item.action === "detail" ? "Abrir interior" : `Ver ${item.name} ${item.specification}`}">
              <span>${item.action === "detail" ? "↗" : "+"}</span><em>${index + 1}</em>
            </button>`).join("")}
          ${!visibleTools.length ? `<div class="pending-state"><b>SIN FICHAS PUBLICADAS</b><span>Este cajón no contiene puntos informativos en el Genially actual.</span></div>` : ""}
        </div>
        <div class="image-caption">
          <span>${visibleTools.length ? "Toca directamente una herramienta para consultar su ficha" : "Fotografía de referencia del cajón"}</span>
          <b>${visibleTools.length} zonas interactivas invisibles</b>
        </div>

        <div class="action-row">
          <div class="legend"><span><i class="legend-dot"></i> Herramientas táctiles</span><span><i class="legend-orange"></i> Cajón seleccionado</span></div>
          <div class="action-buttons">
            ${showingDetail ? `<button class="back-button" id="backToCase">← Volver al estuche</button>` : ""}
            <button class="list-button" id="listButton"><span>${listOpen ? "×" : "+"}</span>${listOpen ? "Cerrar lista" : "Ver lista"}</button>
          </div>
        </div>

        <div class="inventory-drawer ${listOpen ? "is-open" : ""}">
          <div class="inventory-head">
            <div><span>INVENTARIO DEL CAJÓN</span><h2>${visibleTitle}</h2></div>
            <label class="search-box">⌕ <input id="searchInput" placeholder="Buscar herramienta o medida"></label>
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
      detailOpen = false;
      render();
    }));

  document.querySelector("#homeButton")?.addEventListener("click", () => {
    introOpen = true;
    listOpen = false;
    detailOpen = false;
    render();
  });

  document.querySelectorAll("[data-tool]").forEach(button =>
    button.addEventListener("click", () => {
      const selectedTool = visibleTools[Number(button.dataset.tool)];
      if (selectedTool.action === "detail") {
        detailOpen = true;
        listOpen = false;
        render();
      } else {
        openTool(drawer, selectedTool);
      }
    }));

  document.querySelector("#backToCase")?.addEventListener("click", () => {
    detailOpen = false;
    listOpen = false;
    render();
  });

  document.querySelector("#listButton").addEventListener("click", () => {
    listOpen = !listOpen;
    render();
  });

  renderList(drawer, visibleTools);
  document.querySelector("#searchInput")?.addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    const filtered = visibleTools.filter(item =>
      `${item.name} ${item.brand} ${item.part} ${item.specification}`.toLowerCase().includes(query));
    renderList(drawer, filtered);
  });
}

function renderList(drawer, tools) {
  const grid = document.querySelector("#inventoryGrid");
  if (!grid) return;

  grid.innerHTML = tools.length ? tools.map((item, index) => `
    <button class="inventory-item" data-list-tool="${index}">
      <span class="item-number">${String(index + 1).padStart(2, "0")}</span>
      <span><strong>${item.name}</strong><small>${[item.brand, item.part, item.specification].filter(Boolean).join(" · ")}</small></span>
      <b>×${item.quantity}</b>
      <i>›</i>
    </button>`).join("") : `<div class="empty-list">No hay fichas registradas en esta vista.</div>`;

  document.querySelectorAll("[data-list-tool]").forEach((button, index) =>
    button.addEventListener("click", () => {
      const selectedTool = tools[index];
      if (selectedTool.action === "detail") {
        detailOpen = true;
        listOpen = false;
        render();
      } else {
        openTool(drawer, selectedTool);
      }
    }));
}

function openTool(drawer, item) {
  modalContent.innerHTML = `
    <div class="modal-kicker"><span>CAJÓN ${drawer.id}</span><b>FICHA DE HERRAMIENTA</b></div>
    <figure class="tool-preview">
      <img src="${item.image}" alt="${item.name} ${item.specification}" onerror="this.closest('figure').classList.add('is-missing')">
    </figure>
    <h2 id="toolTitle">${item.name}</h2>
    ${item.brand ? `<p class="tool-brand">${item.brand}</p>` : ""}
    <div class="tool-identification">
      ${item.specification ? `<div><span>MEDIDA / ESPECIFICACIÓN</span><strong>${item.specification}</strong></div>` : ""}
      ${item.part ? `<div><span>NÚMERO DE PARTE</span><strong>${item.part}</strong></div>` : ""}
    </div>
    <button class="modal-primary" id="modalDone">Cerrar ficha</button>`;

  modal.classList.remove("is-hidden");
  document.querySelector("#modalDone").addEventListener("click", closeModal);
}

function closeModal() {
  modal.classList.add("is-hidden");
}

document.querySelector("#closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

render();
