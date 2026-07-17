# Retro Night Fest - Lista de precios MTM Cavas Drink's

Web simple en Next.js que muestra la lista de precios de la barra con imagen
del producto, y el QR de pago (Mercado Pago) para que el cliente escanee,
ingrese el monto y pague. También queda claro que se acepta efectivo.

## 1. Editar precios y productos

Abrí `data/products.json` y modificá nombres, precios (en ARS, sin puntos ni
comas) y, si querés, la ruta de imagen de cada producto. Podés agregar o
quitar categorías y productos libremente, el diseño se adapta solo.

Para agregar una foto a un producto:
1. Poné el archivo (jpg/png) dentro de `public/products/` (esa carpeta ya
   está creada en el proyecto).
2. En `products.json`, en el campo `imagen`, escribí `/products/nombre-archivo.jpg`.
3. Si dejás `imagen` vacío (`""`), se muestra un ícono genérico en vez de
   foto, y esa tarjeta no es clickeable (no hay nada que ampliar).

### Ampliar imagen al tocar/hacer click

Si el producto tiene foto, al hacer click (o tap en celular/tablet) sobre la
imagen se abre un modal con la foto ampliada, el nombre y el precio. Se
cierra tocando afuera, con el botón ✕, o con la tecla Escape. Esto ya está
implementado en `app/components/ProductGallery.js`, no requiere
configuración extra: simplemente cargá las fotos como se explica arriba.

## 2. Reemplazar el QR de pago (IMPORTANTE)

El archivo `public/qr-mercadopago.png` es un placeholder de prueba, marcado
en rojo. Antes del evento reemplazalo por tu QR real:

1. En la app de Mercado Pago (con la cuenta donde querés recibir el dinero),
   entrá a **Cobrar > Cobrar con QR** (o usá el sticker del Kit QR oficial si
   ya lo tenés pedido).
2. Descargá ese QR en formato PNG.
3. Reemplazá el archivo `public/qr-mercadopago.png` por el que descargaste,
   manteniendo el mismo nombre (o cambiá la ruta en `app/page.js`).

Ese QR **es siempre el mismo**, no hay que regenerarlo ni reimprimirlo en
ningún momento, ni el día del evento ni entre ventas. No necesita Tienda,
Caja, ni integrar la API de Mercado Pago para nada de esto.

### Modalidad elegida: monto abierto

Para este evento se usa **monto abierto**: el cliente escanea el QR fijo de
siempre y escribe él mismo el importe exacto de lo que consumió, en base a
lo que muestra la web. Vos (o el barman) no tenés que hacer nada en la app
antes de cada venta.

(Mercado Pago también ofrece una modalidad "monto cerrado", donde el
vendedor carga el importe en la app antes de que el cliente escanee, pero no
es la que se va a usar acá.)

## 3. Poner el logo

Ya está copiado en `public/logo-mtm.jpg` (tu logo de MTM Cavas Drink's).
Si querés cambiarlo, reemplazá ese archivo manteniendo el nombre.

## 4. Probar en local

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## 5. Deploy en Vercel

```bash
npm install -g vercel
vercel
```

O conectá el repo de GitHub directamente desde vercel.com/new. No necesita
variables de entorno: todo el contenido sale de `data/products.json` y las
imágenes de `public/`.

## 6. Uso la noche del evento

Dejá la web abierta en una tablet o celular en la barra (o compartí el link
de Vercel por WhatsApp/cartel con QR de acceso a la página). El cliente ve
los precios, y para pagar:
- **QR**: escanea el QR de pago, ingresa el monto, paga con Mercado Pago o
  cualquier billetera interoperable.
- **Efectivo**: paga en mano como siempre.
# RetroNight
