"use client";

import { useMemo, useState } from "react";

type Tool = {
  name: string;
  brand: string;
  quantity: number;
  use: string;
  safety: string;
};

type Drawer = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tools: Tool[];
};

const drawers: Drawer[] = [
  {
    id: 1,
    title: "Pinzas y desarmadores",
    subtitle: "Herramienta eléctrica y de corte",
    image: "/images/cajon-1.jpeg",
    tools: [
      { name: "Pelacables automático", brand: "Truper", quantity: 1, use: "Retira aislamiento y prepara conductores.", safety: "Trabajar siempre con el circuito desenergizado." },
      { name: "Pinza de electricista aislada", brand: "Truper", quantity: 1, use: "Sujeción, doblado y corte de cable.", safety: "Verificar el aislamiento antes de usar." },
      { name: "Pinza de corte diagonal", brand: "Truper", quantity: 1, use: "Corte limpio de alambre y conductores.", safety: "Utilizar protección ocular." },
      { name: "Pinza de punta larga", brand: "Truper", quantity: 2, use: "Sujeción de piezas pequeñas y acceso estrecho.", safety: "No usar como palanca." },
      { name: "Desarmadores aislados", brand: "Milwaukee", quantity: 7, use: "Ajuste de tornillería ranurada y Phillips.", safety: "Seleccionar la punta y medida correctas." },
    ],
  },
  {
    id: 2,
    title: "Terminales y diagnóstico",
    subtitle: "Preparación de cableado y medición",
    image: "/images/cajon-2.jpeg",
    tools: [
      { name: "Crimpadora de terminales", brand: "Truper", quantity: 1, use: "Prensado de terminales eléctricos.", safety: "Mantener los dedos fuera de las mordazas." },
      { name: "Pelacables tipo pistola", brand: "Truper Expert", quantity: 1, use: "Pelado uniforme de conductores.", safety: "Ajustar al calibre del conductor." },
      { name: "Juego de puntas de prueba", brand: "Genérico", quantity: 5, use: "Inspección y liberación de conectores.", safety: "No introducir en circuitos energizados sin protección." },
      { name: "Pinza para anillos", brand: "Truper", quantity: 2, use: "Montaje y retiro de anillos de retención.", safety: "Usar protección ocular por riesgo de expulsión." },
      { name: "Kit de medición", brand: "Fluke", quantity: 1, use: "Diagnóstico eléctrico con accesorios.", safety: "Revisar categoría y rango antes de medir." },
    ],
  },
  {
    id: 3,
    title: "Desarmadores",
    subtitle: "Puntas planas, Phillips y especiales",
    image: "/images/cajon-3.jpeg",
    tools: [
      { name: "Desarmador Phillips largo", brand: "Milwaukee", quantity: 2, use: "Tornillería Phillips de acceso profundo.", safety: "No usar como cincel o palanca." },
      { name: "Desarmador plano largo", brand: "Milwaukee", quantity: 2, use: "Tornillería ranurada de acceso profundo.", safety: "La punta debe coincidir con la ranura." },
      { name: "Desarmador Phillips corto", brand: "Milwaukee", quantity: 2, use: "Trabajo en espacios reducidos.", safety: "Evitar aplicar fuerza lateral." },
      { name: "Desarmador plano corto", brand: "Milwaukee", quantity: 2, use: "Tornillería ranurada en espacios reducidos.", safety: "No usar en circuitos energizados." },
    ],
  },
  {
    id: 4,
    title: "Lubricación",
    subtitle: "Aplicación manual de grasa",
    image: "/images/cajon-4.jpeg",
    tools: [
      { name: "Pistola engrasadora manual", brand: "Genérico", quantity: 1, use: "Aplicación controlada de grasa en graseras.", safety: "Liberar la presión antes de desmontar la manguera." },
      { name: "Manguera flexible para grasa", brand: "Genérico", quantity: 1, use: "Acceso a puntos de lubricación restringidos.", safety: "Inspeccionar fugas y daño antes de presurizar." },
    ],
  },
  {
    id: 5,
    title: "Dados métricos y SAE",
    subtitle: "Juego Westward de 105 piezas",
    image: "/images/cajon-5.jpeg",
    tools: [
      { name: "Juego de dados", brand: "Westward", quantity: 105, use: "Ajuste de tornillería métrica y SAE.", safety: "No utilizar con herramienta de impacto." },
      { name: "Matraca 1/4 pulg.", brand: "Westward", quantity: 1, use: "Ajuste de tornillería de bajo y medio torque.", safety: "No extender el mango con tubos." },
      { name: "Matraca 3/8 pulg.", brand: "Westward", quantity: 1, use: "Ajuste general de tornillería.", safety: "Confirmar el sentido de giro antes de aplicar fuerza." },
      { name: "Matraca 1/2 pulg.", brand: "Westward", quantity: 1, use: "Ajuste de tornillería de mayor tamaño.", safety: "Usar el dado correcto y en buen estado." },
    ],
  },
  {
    id: 6,
    title: "Golpe y tubería",
    subtitle: "Martillos y llaves Stillson",
    image: "/images/cajon-6.jpeg",
    tools: [
      { name: "Mazo de hule blanco", brand: "Truper", quantity: 1, use: "Golpe controlado sin marcar superficies.", safety: "Inspeccionar cabeza y mango antes de usar." },
      { name: "Marro de golpe", brand: "Truper", quantity: 1, use: "Golpe de alta energía en trabajo mecánico.", safety: "Usar lentes, guantes y área despejada." },
      { name: "Llave Stillson 8 pulg.", brand: "Milwaukee", quantity: 1, use: "Sujeción y giro de tubería.", safety: "Ajustar totalmente la mordaza." },
      { name: "Llave Stillson 14 pulg.", brand: "Milwaukee", quantity: 1, use: "Sujeción de tubería de mayor diámetro.", safety: "No usar extensiones en el mango." },
    ],
  },
  {
    id: 7,
    title: "Allen, presión y corte",
    subtitle: "Ajuste hexagonal y herramienta general",
    image: "/images/cajon-7.jpeg",
    tools: [
      { name: "Juego de llaves Allen métricas", brand: "Truper", quantity: 1, use: "Tornillería hexagonal métrica.", safety: "Insertar completamente la llave." },
      { name: "Juego de llaves Allen SAE", brand: "Truper", quantity: 1, use: "Tornillería hexagonal en pulgadas.", safety: "No confundir medidas métricas y SAE." },
      { name: "Pinza de presión", brand: "Milwaukee", quantity: 1, use: "Sujeción temporal de piezas.", safety: "Regular la presión antes de bloquear." },
      { name: "Navaja plegable", brand: "Milwaukee", quantity: 1, use: "Corte general de materiales.", safety: "Cortar alejándose del cuerpo." },
      { name: "Cortador de tubo", brand: "Milwaukee", quantity: 1, use: "Corte limpio de tubería.", safety: "Mantener las manos fuera de la trayectoria." },
    ],
  },
  {
    id: 8,
    title: "Cajón disponible",
    subtitle: "Pendiente de documentar",
    image: "/images/carrito.jpeg",
    tools: [],
  },
];

export default function Home() {
  const [selectedDrawer, setSelectedDrawer] = useState<Drawer | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [query, setQuery] = useState("");

  const filteredTools = useMemo(() => {
    if (!selectedDrawer) return [];
    return selectedDrawer.tools.filter((tool) =>
      `${tool.name} ${tool.brand}`.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, selectedDrawer]);

  const totalTools = drawers.reduce(
    (sum, drawer) => sum + drawer.tools.reduce((toolSum, tool) => toolSum + tool.quantity, 0),
    0,
  );

  const goHome = () => {
    setSelectedDrawer(null);
    setSelectedTool(null);
    setQuery("");
  };

  return (
    <main>
      <header className="topbar">
        <button className="brand" onClick={goHome} aria-label="Ir al inicio">
          <span className="brand-mark">GW</span>
          <span>
            <strong>Inventario visual</strong>
            <small>Carrito de mantenimiento</small>
          </span>
        </button>
        <div className="status"><i /> Catálogo activo</div>
      </header>

      {!selectedDrawer ? (
        <section className="home">
          <div className="intro">
            <p className="eyebrow">CARRO ESTÁNDAR · 8 CAJONES</p>
            <h1>Encuentra cada herramienta en segundos.</h1>
            <p className="lead">
              Selecciona un cajón del carrito para explorar su contenido y consultar la información de cada herramienta.
            </p>
            <div className="metrics">
              <div><strong>{totalTools}</strong><span>piezas registradas</span></div>
              <div><strong>7</strong><span>cajones documentados</span></div>
              <div><strong>100%</strong><span>visual y adaptable</span></div>
            </div>
          </div>

          <div className="cart-stage">
            <div className="cart-wrap">
              <img src="/images/carrito.jpeg" alt="Carrito GearWrench de ocho cajones" />
              <div className="drawer-hotspots" aria-label="Seleccionar cajón">
                {drawers.map((drawer) => (
                  <button
                    key={drawer.id}
                    className={`drawer-hit drawer-${drawer.id}`}
                    onClick={() => setSelectedDrawer(drawer)}
                    aria-label={`Abrir cajón ${drawer.id}: ${drawer.title}`}
                  >
                    <span>{drawer.id}</span>
                    <b>{drawer.title}</b>
                  </button>
                ))}
              </div>
            </div>
            <p className="hint"><span>↑</span> Toca un cajón naranja para abrirlo</p>
          </div>
        </section>
      ) : (
        <section className="drawer-view">
          <nav className="breadcrumb" aria-label="Navegación">
            <button onClick={goHome}>Carrito</button><span>/</span><b>Cajón {selectedDrawer.id}</b>
          </nav>

          <div className="drawer-head">
            <div>
              <p className="eyebrow">CAJÓN {String(selectedDrawer.id).padStart(2, "0")}</p>
              <h1>{selectedDrawer.title}</h1>
              <p>{selectedDrawer.subtitle}</p>
            </div>
            <button className="back-button" onClick={goHome}>← Volver al carrito</button>
          </div>

          <div className="drawer-content">
            <div className="drawer-photo">
              <img src={selectedDrawer.image} alt={`Interior del cajón ${selectedDrawer.id}: ${selectedDrawer.title}`} />
              <span>{selectedDrawer.tools.length} tipos de herramienta</span>
            </div>

            <aside className="tool-panel">
              <div className="panel-title">
                <div><small>CONTENIDO</small><h2>Herramientas</h2></div>
                <b>{selectedDrawer.tools.reduce((sum, tool) => sum + tool.quantity, 0)}</b>
              </div>
              {selectedDrawer.tools.length > 0 && (
                <label className="search">
                  <span>⌕</span>
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar herramienta..." />
                </label>
              )}
              <div className="tool-list">
                {filteredTools.map((tool, index) => (
                  <button className="tool-card" key={tool.name} onClick={() => setSelectedTool(tool)}>
                    <span className="tool-index">{String(index + 1).padStart(2, "0")}</span>
                    <span><strong>{tool.name}</strong><small>{tool.brand}</small></span>
                    <b>×{tool.quantity}</b>
                    <i>›</i>
                  </button>
                ))}
                {selectedDrawer.tools.length === 0 && (
                  <div className="empty"><b>Próximamente</b><p>Agrega una fotografía para documentar este cajón.</p></div>
                )}
                {selectedDrawer.tools.length > 0 && filteredTools.length === 0 && (
                  <div className="empty"><b>Sin resultados</b><p>Prueba con otro nombre o marca.</p></div>
                )}
              </div>
            </aside>
          </div>
        </section>
      )}

      {selectedTool && selectedDrawer && (
        <div className="modal-backdrop" onMouseDown={() => setSelectedTool(null)}>
          <article className="tool-modal" onMouseDown={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Información de ${selectedTool.name}`}>
            <button className="close" onClick={() => setSelectedTool(null)} aria-label="Cerrar">×</button>
            <div className="modal-accent">{selectedDrawer.id}</div>
            <p className="eyebrow">FICHA DE HERRAMIENTA</p>
            <h2>{selectedTool.name}</h2>
            <p className="modal-brand">{selectedTool.brand}</p>
            <div className="detail-grid">
              <div><small>CANTIDAD ESTÁNDAR</small><strong>{selectedTool.quantity} {selectedTool.quantity === 1 ? "pieza" : "piezas"}</strong></div>
              <div><small>UBICACIÓN</small><strong>Cajón {selectedDrawer.id}</strong></div>
            </div>
            <div className="info-row"><span>Uso</span><p>{selectedTool.use}</p></div>
            <div className="info-row warning"><span>Seguridad</span><p>{selectedTool.safety}</p></div>
            <button className="primary" onClick={() => setSelectedTool(null)}>Entendido</button>
          </article>
        </div>
      )}
    </main>
  );
}
