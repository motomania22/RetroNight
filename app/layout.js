export const metadata = {
  title: "MTM Cavas Drink's | Retro Night Fest",
  description: "Lista de precios y pago con QR - Retro Night Fest"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
