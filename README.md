# Estándar visual del carrito de herramientas

Catálogo profesional e interactivo compatible con GitHub Pages. Conserva el
acomodo lateral de Genially e incluye nueve cajones, zonas táctiles invisibles,
fichas técnicas, búsqueda y vista de lista.

La interfaz es adaptable: reorganiza la navegación, fotografías, áreas
interactivas, listas y fichas para teléfonos, tabletas, computadoras y pantallas
grandes. También incluye un modo compacto para teléfonos colocados
horizontalmente.

## Publicar

1. Descomprime el ZIP.
2. Sube **el contenido de la carpeta**, no la carpeta completa, a la raíz del
   repositorio.
3. Verifica que `index.html`, `app.js`, `styles.css` e `images/` estén junto al
   archivo `README.md`.
4. En GitHub abre **Settings → Pages**.
5. En **Build and deployment** selecciona **Deploy from a branch**.
6. Elige la rama `main`, la carpeta `/root` y pulsa **Save**.
7. Espera unos minutos y abre:

   `https://emanahd19-rgb.github.io/inventario-carrito-herramientas/`

No requiere Node.js, instalación ni compilación.

## Agregar una herramienta seleccionable

Abre `app.js`, localiza el cajón y agrega un registro dentro de `tools`:

```js
tool(
  "Nombre de la herramienta",
  "Medida o especificación",
  50,
  50,
  {
    brand: "Marca",
    part: "Número de parte",
    quantity: 1
  }
)
```

Los valores `50, 50` son la posición horizontal y vertical de la zona
interactiva, expresada en porcentaje. Modifícalos hasta colocar la zona encima
de la herramienta.

El cajón 8 contiene una segunda colección llamada `detailTools`; corresponde a
la vista interior del juego de dados.

## Cambiar o rotar una fotografía

Guarda la fotografía dentro de `images/` y cambia el valor `image` del cajón.
Para girarla, agrega `imageClass: "imagen-rotada"` al cajón y añade al final de
`styles.css`:

```css
.image-panel.imagen-rotada > img {
  transform: rotate(90deg) scale(1.2);
  object-fit: contain;
}
```
