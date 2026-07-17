"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LogoZoom({ src, alt, size = 90 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="logo-button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="logo"
        />
      </button>

      {open && (
        <div
          className="lightbox-backdrop"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={400}
              height={400}
              className="lightbox-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
