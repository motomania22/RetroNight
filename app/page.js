import Image from "next/image";
import data from "../data/products.json";
import ProductGallery from "./components/ProductGallery";
import LogoZoom from "./components/LogoZoom";
import "./globals.css";

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <div className="header-info">
          <LogoZoom src="/logo-mtm.jpg" alt="MTM Cavas Drink's" size={90} />
          <div>
            <h1>{data.negocio}</h1>
            <p className="subtitle">{data.evento} · Lista de precios</p>
          </div>
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com/mtm.cavas.drinks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de MTM Cavas Drink's"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d="M22 12.06C22 6.48 17.52 2 11.94 2S1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.91c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.35h-1.2c-1.18 0-1.55.74-1.55 1.5v1.8h2.64l-.42 2.91h-2.22V22c4.78-.76 8.44-4.92 8.44-9.94z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/mtm_cavas_drinks/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de MTM Cavas Drink's"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </header>

      <ProductGallery categorias={data.categorias} />

      <section className="pago">
        <div className="pago-qr">
          <Image
            src="/qr-mercadopago.png"
            alt="QR de pago Mercado Pago"
            width={180}
            height={180}
          />
        </div>
        <div className="pago-info">
          <h2>Pagá en la barra</h2>
          <p>
            Escaneá el código QR con tu app de Mercado Pago o tu billetera
            virtual, ingresá el monto exacto de tu consumición y mostrá el
            comprobante en la barra.
          </p>
          <p className="pago-alt">También aceptamos efectivo.</p>
        </div>
      </section>

      <footer className="footer">
        <p>{data.nota}</p>
      </footer>
    </main>
  );
}
