"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import BranchModal from "./BranchModal";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

const navGroups = [
  {
    title: "Clínica",
    links: [
      { label: "Servicios", href: "/servicios" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Equipo", href: "/nosotros#equipo" },
      { label: "Sucursales", href: "/sucursales" },
    ],
  },
  {
    title: "Instituto",
    links: [
      { label: "All Anatomy Institute", href: "/instituto" },
      { label: "Cursos y certificaciones", href: "/instituto#cursos" },
      { label: "Descompresión Axial", href: "/servicios#descompresion" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Contacto", href: "/contacto" },
      { label: "Aviso de Privacidad", href: "/privacidad" },
    ],
  },
];

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer
        style={{
          background: "var(--black-card)",
          borderTop: "1px solid var(--black-border)",
          padding: "4rem 1.5rem 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem",
              marginBottom: "3rem",
            }}
          >
            {/* Brand */}
            <div>
              <Link
                href="/"
                style={{
                  display: "block",
                  marginBottom: "1.25rem",
                }}
                id="footer-logo"
              >
                <img
                  src="/logo-white.png"
                  alt="All Anatomy"
                  style={{
                    height: "36px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                  maxWidth: "32ch",
                }}
              >
                Quiropráctica, terapia deportiva e Instituto certificado. Sucursales en Plaza Colorines (San Pedro) y Plaza AR218 (Contry), Monterrey, N.L.
              </p>

              {/* Socials */}
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a
                  href={CONTACT_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-instagram"
                  aria-label="Instagram All Anatomy"
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                >
                  <InstagramIcon size={15} />
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  id="footer-whatsapp"
                  aria-label="WhatsApp All Anatomy"
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    border: "1px solid rgba(37,211,102,0.2)",
                    background: "rgba(37,211,102,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#25D366",
                    cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                >
                  <MessageCircle size={15} />
                </button>
              </div>

              {/* COFEPRIS badge */}
              <div
                style={{
                  marginTop: "1.25rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "6px",
                  border: "1px solid rgba(245,197,24,0.2)",
                  background: "rgba(245,197,24,0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "rgba(245,197,24,0.7)",
                  }}
                >
                  🏛 Permiso COFEPRIS vigente
                </span>
              </div>
            </div>

            {/* Nav groups */}
            {navGroups.map((group) => (
              <div key={group.title}>
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "1rem",
                  }}
                >
                  {group.title}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {group.links.map((link) => (
                    <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                      <Link
                        href={link.href}
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          textDecoration: "none",
                          fontFamily: "'Inter', sans-serif",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "#fff")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color =
                            "rgba(255,255,255,0.5)")
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid var(--black-border)",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.25)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              © {new Date().getFullYear()} All Anatomy. Todos los derechos reservados.
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.2)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              San Pedro Garza García · Monterrey, Nuevo León · México
            </span>
          </div>
        </div>
      </footer>

      {/* Branch Modal integration */}
      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
