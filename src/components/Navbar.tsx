"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Calendar, ChevronRight } from "lucide-react";
import BranchModal from "./BranchModal";

const navLinks = [
  { label: "Servicios", href: "/servicios", desc: "Tratamientos y terapia deportiva" },
  { label: "Nosotros", href: "/nosotros", desc: "Nuestros valores y equipo médico" },
  { label: "Sucursales", href: "/sucursales", desc: "Ubicaciones y horarios" },
  { label: "Instituto", href: "/instituto", desc: "Cursos y certificaciones oficiales" },
  { label: "Contacto", href: "/contacto", desc: "Escríbenos o visítanos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: scrolled ? "0.75rem 2rem" : "1.5rem 2rem",
          background: scrolled
            ? "rgba(5, 5, 5, 0.85)"
            : "linear-gradient(180deg, rgba(5, 5, 5, 0.8) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "blur(0px)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo with smooth scaling */}
          <Link
            href="/"
            id="nav-logo"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
              zIndex: 1001,
            }}
          >
            <motion.div
              animate={{ scale: scrolled ? 0.95 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/logo-white-v2.png"
                alt="All Anatomy"
                width={220}
                height={55}
                style={{
                  objectFit: "contain",
                  height: scrolled ? "36px" : "44px",
                  width: "auto",
                  transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <li key={link.href} style={{ position: "relative" }}>
                <Link
                  href={link.href}
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    transition: "color 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    letterSpacing: "0.03em",
                    padding: "0.5rem 0",
                    display: "block",
                  }}
                  className="nav-item-link"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  }}
                >
                  {link.label}
                </Link>
                {/* Visual hover indicator line */}
                <style>{`
                  .nav-item-link { position: relative; }
                  .nav-item-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: var(--gradient-brand);
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                  }
                  .nav-item-link:hover::after {
                    transform: scaleX(1);
                    transform-origin: left;
                  }
                `}</style>
              </li>
            ))}
          </ul>

          {/* CTA + Burger Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", zIndex: 1001 }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-whatsapp hidden md:inline-flex"
              id="nav-cta-whatsapp"
              style={{
                padding: "0.65rem 1.5rem",
                fontSize: "0.82rem",
                cursor: "pointer",
                border: "1px solid rgba(37,211,102,0.25)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.15)",
              }}
            >
              <Phone size={13} />
              Agendar Cita
            </button>

            {/* Premium Animated Burger Button */}
            <button
              onClick={() => setOpen(!open)}
              id="nav-mobile-toggle"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              style={{
                background: open ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                width: "44px",
                height: "44px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                outline: "none",
                gap: "5px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="md:hidden"
            >
              {/* Top Line */}
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), y 0.3s",
                  transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              {/* Middle Line */}
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  opacity: open ? 0 : 1,
                }}
              />
              {/* Bottom Line */}
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Full Screen Premium Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{
                position: "fixed",
                inset: 0,
                height: "100vh",
                width: "100vw",
                background: "rgba(5, 5, 5, 0.98)",
                backdropFilter: "blur(30px) saturate(1.8)",
                zIndex: 999,
                display: "flex",
                flexDirection: "column",
                padding: "7rem 2rem 2.5rem",
                overflowY: "auto",
              }}
            >
              {/* Menu Content Wrapper */}
              <div
                style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "space-between",
                  gap: "2.5rem",
                }}
              >
                {/* Navigation List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.3)",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Navegación
                  </div>

                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "1.1rem 1.5rem",
                          borderRadius: "1.25rem",
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.04)",
                          textDecoration: "none",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontWeight: 700,
                              fontSize: "1.15rem",
                              color: "#fff",
                            }}
                          >
                            {link.label}
                          </div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              color: "rgba(255,255,255,0.4)",
                              fontFamily: "'Inter', sans-serif",
                              marginTop: "0.2rem",
                            }}
                          >
                            {link.desc}
                          </div>
                        </div>
                        <ChevronRight size={16} style={{ color: "rgba(255,255,255,0.3)" }} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Info inside Menu (Map, Hours) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: "2rem",
                  }}
                >
                  {/* Branch quick info cards */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
                      <div style={{ fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.3rem" }}>
                        <MapPin size={12} style={{ color: "var(--yellow)" }} /> San Pedro
                      </div>
                      Plaza Colorines L-320
                      <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "0.2rem" }}>
                        L-J: 10am - 8pm
                      </div>
                    </div>

                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
                      <div style={{ fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.3rem" }}>
                        <MapPin size={12} style={{ color: "var(--red)" }} /> Contry
                      </div>
                      Plaza AR218 Piso 3
                      <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "0.2rem" }}>
                        L-J: 11am - 7pm
                      </div>
                    </div>
                  </div>

                  {/* Primary mobile menu action */}
                  <button
                    onClick={() => {
                      setOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="btn-whatsapp"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "1rem 2rem",
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      borderRadius: "1.25rem",
                    }}
                    id="nav-mobile-cta"
                  >
                    <Calendar size={16} />
                    Agendar Cita en WhatsApp
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Branch selection modal */}
      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
