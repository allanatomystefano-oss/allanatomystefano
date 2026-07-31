"use client";

import { useEffect, useRef } from "react";

const items = [
  "✦ Instagram Verificado",
  "✦ 49K+ Seguidores",
  "✦ Permiso COFEPRIS",
  "✦ Reconocimiento SEP-Conocer",
  "✦ UNT México",
  "✦ 4.9 ★ Calificación",
  "✦ Caso Roberto Carlos",
  "✦ +10 años de experiencia",
  "✦ 2 Sucursales en Monterrey",
  "✦ Instituto Certificado",
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: "var(--black-card)",
        borderTop: "1px solid var(--black-border)",
        borderBottom: "1px solid var(--black-border)",
        overflow: "hidden",
        padding: "0.9rem 0",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background:
            "linear-gradient(90deg, var(--black-card) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background:
            "linear-gradient(270deg, var(--black-card) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              whiteSpace: "nowrap",
              padding: "0 2.5rem",
              fontSize: "0.8rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: i % 3 === 0
                ? "var(--yellow)"
                : i % 3 === 1
                ? "rgba(255,255,255,0.5)"
                : "rgba(255,255,255,0.35)",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
