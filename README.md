# Estándar visual del carrito de herramientas

Catálogo profesional e interactivo compatible con GitHub Pages. Conserva el
acomodo lateral de Genially e incluye nueve cajones, puntos interactivos,
fichas técnicas, búsqueda y vista de lista.

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
[
  "Nombre de la herramienta",
  "Marca",
  1,
  "Uso principal",
  "Recomendación de seguridad",
  50,
  50,
  "Especificación opcional"
]
```

Los valores `50, 50` son la posición horizontal y vertical del punto
interactivo, expresada en porcentaje. Modifícalos hasta colocar el punto encima
de la herramienta.

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
