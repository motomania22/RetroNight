"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function formatARS(value) {
  if (value === null || value === undefined || value === "") {
    return "A confirmar";
  }
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);
}

export default function ProductGallery({ categorias }) {
  const [zoomed, setZoomed] = useState(null); // { imagen, nombre, precio } | null

  // Cerrar con la tecla Escape
  useEffect(() => {
    if (!zoomed) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setZoomed(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  return (
    <>
      {categorias.map((categoria) => (
        <section key={categoria.nombre} className="categoria">
          <h2>{categoria.nombre}</h2>
          <div className="grid">
            {categoria.productos.map((producto) => {
              const tieneImagen = Boolean(producto.imagen);
              return (
                <div key={producto.nombre} className="card">
                  <button
                    type="button"
                    className={`card-img ${tieneImagen ? "card-img-clickable" : ""}`}
                    onClick={() => tieneImagen && setZoomed(producto)}
                    aria-label={
                      tieneImagen
                        ? `Ampliar imagen de ${producto.nombre}`
                        : producto.nombre
                    }
                    disabled={!tieneImagen}
                  >
                    {tieneImagen ? (
                      <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        width={120}
                        height={120}
                      />
                    ) : (
                      <span className="card-img-placeholder">🍹</span>
                    )}
                  </button>
                  <div className="card-body">
                    <span className="card-name">{producto.nombre}</span>
                    {producto.descripcion && (
                      <span className="card-desc">{producto.descripcion}</span>
                    )}
                    <span
                      className={`card-price ${
                        producto.precio == null ? "card-price-pending" : ""
                      }`}
                    >
                      {producto.precioTexto || formatARS(producto.precio)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {zoomed && (
        <div
          className="lightbox-backdrop"
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setZoomed(null)}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={zoomed.imagen}
              alt={zoomed.nombre}
              width={500}
              height={500}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <span className="card-name">{zoomed.nombre}</span>
              {zoomed.descripcion && (
                <span className="card-desc">{zoomed.descripcion}</span>
              )}
              <span className="card-price">
                {zoomed.precioTexto || formatARS(zoomed.precio)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
