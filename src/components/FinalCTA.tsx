"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BranchModal from "./BranchModal";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="cta-final"
        style={{
          background: "var(--black)",
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, var(--black) 0%, rgba(124,58,237,0.08) 50%, var(--black) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "60vw",
            maxWidth: "700px",
            maxHeight: "700px",
            background:
              "radial-gradient(ellipse, rgba(230,51,39,0.12) 0%, transparent 65%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--red)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              ¿Tienes dolor o quieres mejorar tu rendimiento?
            </div>

            <h2
              className="section-title"
              style={{
                marginBottom: "1.25rem",
                fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              }}
            >
              Agenda hoy.{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sin excusas.
              </span>
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "50ch",
                margin: "0 auto 2.5rem",
              }}
            >
              El primer paso hacia tu recuperación es una cita. Contáctanos por WhatsApp y te orientamos sin costo en la sucursal de tu preferencia.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-whatsapp"
                id="finalcta-whatsapp"
                style={{ fontSize: "1.05rem", padding: "1.1rem 2.5rem", cursor: "pointer" }}
              >
                <MessageCircle size={19} />
                Agendar por WhatsApp
              </button>
              <Link
                href="/contacto"
                className="btn-secondary"
                id="finalcta-contact"
              >
                Más formas de contacto <ArrowRight size={15} />
              </Link>
            </div>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Síguenos:
              </span>
              <a
                href="https://www.instagram.com/all_anatomy"
                target="_blank"
                rel="noopener noreferrer"
                id="social-instagram"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  transition: "color 0.25s",
                }}
              >
                <InstagramIcon size={16} />
                @all_anatomy
              </a>
              <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
              <a
                href="https://www.tiktok.com/@all_anatomy"
                target="_blank"
                rel="noopener noreferrer"
                id="social-tiktok"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  transition: "color 0.25s",
                }}
              >
                TikTok @all_anatomy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
