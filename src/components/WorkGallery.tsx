"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye } from "lucide-react";

// List of cropped real images of the clinic/Edgar Delgado's work, excluding white-bordered images (10-16)
const activeIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 17, 18, 19, 20, 21, 22, 23, 24];
const galleryImages = activeIds.map((id) => ({
  id,
  src: `/trabajo/trabajo-${id}.jpg`,
  alt: `Ajuste quiropráctico y terapia de rehabilitación - Caso ${id}`,
}));

export default function WorkGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [initialCount, setInitialCount] = useState(8);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 4 : 8;
        setInitialCount(count);
        setVisibleCount((prev) => (prev === 8 || prev === 4 ? count : prev));
      };
      
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const showMore = () => {
    setVisibleCount(galleryImages.length);
  };

  const showLess = () => {
    setVisibleCount(initialCount);
  };

  const isMoreVisible = visibleCount < galleryImages.length;

  return (
    <section
      id="nuestro-trabajo"
      style={{
        background: "var(--black)",
        padding: "7rem 2rem",
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
          width: "70vw",
          height: "60vw",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.04) 0%, transparent 65%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Casos de Éxito y Sesiones
          </div>
          <h2
            className="section-title"
            style={{ marginBottom: "1rem" }}
          >
            Nuestro{" "}
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trabajo
            </span>
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", color: "rgba(255,255,255,0.45)" }}
          >
            Galería fotográfica de ajustes quiroprácticos reales, descompresión espinal y terapia de recuperación física de nuestros pacientes.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {galleryImages.slice(0, visibleCount).map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedIdx(index)}
                style={{
                  position: "relative",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  cursor: "pointer",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  background: "rgba(10, 10, 10, 0.4)",
                }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(124, 58, 237, 0.3)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  quality={85}
                />
                
                {/* Hover overlay */}
                <div
                  className="hover-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                >
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                      Ver imagen completa
                    </span>
                    <div style={{ background: "rgba(124, 58, 237, 0.9)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Eye size={16} style={{ color: "#fff", alignSelf: "center" }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Button: Ver Más / Ver Menos */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3.5rem" }}>
          {isMoreVisible ? (
            <button
              onClick={showMore}
              className="btn-secondary"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                padding: "1rem 2.5rem",
              }}
            >
              Ver Todas las Imágenes (+{galleryImages.length - 8})
            </button>
          ) : (
            galleryImages.length > 8 && (
              <button
                onClick={showLess}
                className="btn-secondary"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.12)",
                  padding: "1rem 2.5rem",
                }}
              >
                Mostrar Menos
              </button>
            )
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(5, 5, 5, 0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIdx(null)}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <X size={20} />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: "2rem",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main image container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "90%",
                maxWidth: "700px",
                height: "80vh",
              }}
            >
              <Image
                src={galleryImages[selectedIdx].src}
                alt={galleryImages[selectedIdx].alt}
                fill
                style={{ objectFit: "contain" }}
                quality={95}
                priority
              />
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "2rem",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Caption indicator */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
              }}
            >
              Imagen {selectedIdx + 1} de {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
