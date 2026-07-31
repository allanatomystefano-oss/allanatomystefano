"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: "600px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{
          maxWidth: "480px",
          width: "100%",
          background: "rgba(15, 15, 15, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "2.5rem",
          padding: "3rem 2rem",
          textAlign: "center",
          backdropFilter: "blur(20px)",
          boxShadow: "0 40px 80px rgba(0, 0, 0, 0.8)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Spine alignment visual hint */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "rgba(245, 197, 24, 0.1)",
              border: "1px solid rgba(245, 197, 24, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--yellow)",
            }}
          >
            <AlertTriangle size={32} />
          </div>
        </div>

        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "4.5rem",
            fontWeight: 800,
            lineHeight: 1,
            color: "#fff",
            marginBottom: "0.5rem",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          ¿Vértebra desalineada?
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "rgba(255, 255, 255, 0.5)",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          Parece que la página que estás buscando se ha movido o no existe temporalmente. Vamos a devolverte a la alineación correcta.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              borderRadius: "1.25rem",
              background: "var(--gradient-brand)",
              border: "none",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.95rem",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(230,51,39,0.25)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(230,51,39,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(230,51,39,0.25)";
            }}
          >
            <ArrowLeft size={16} /> Volver al Inicio
          </Link>

          <button
            onClick={() => window.location.reload()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              borderRadius: "1.25rem",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "rgba(255, 255, 255, 0.8)",
              fontWeight: 500,
              fontSize: "0.9rem",
              fontFamily: "'Inter', sans-serif",
              cursor: "pointer",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
            }}
          >
            <RefreshCw size={14} /> Recargar Página
          </button>
        </div>
      </motion.div>
    </div>
  );
}
