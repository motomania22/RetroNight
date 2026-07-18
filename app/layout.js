export const metadata = {
  metadataBase: new URL("https://retro-night.vercel.app"),
  title: "MTM Cavas Drink's | Retro Night Fest",
  description: "Lista de precios y pago con QR - Retro Night Fest",
  openGraph: {
    title: "MTM Cavas Drink's | Retro Night Fest",
    description: "Lista de precios y pago con QR - Retro Night Fest",
    url: "https://retro-night.vercel.app",
    siteName: "MTM Cavas Drink's",
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MTM Cavas Drink's | Retro Night Fest",
    description: "Lista de precios y pago con QR - Retro Night Fest"
  }
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
