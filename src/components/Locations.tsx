"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "@/constants/contact";

export default function Locations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const branches = [
    {
      ...CONTACT_INFO.branches.colorines,
      zone: "San Pedro Garza García",
    },
    {
      ...CONTACT_INFO.branches.contry,
      zone: "Monterrey Sur",
    },
  ];

  return (
    <section
      id="sucursales"
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
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Gallery grid of branches */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: "var(--black-card)",
                border: "1px solid var(--black-border)",
                borderRadius: "2.25rem",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onHoverStart={() => {}}
              whileHover={{
                y: -6,
                borderColor: `${branch.accent}33`,
                boxShadow: `0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px ${branch.accent}05`,
              }}
            >
              {/* Branch Badge / Tag */}
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  background: `${branch.accent}15`,
                  border: `1px solid ${branch.accent}30`,
                  color: branch.accent,
                  fontSize: "0.72rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {branch.tag}
              </div>

              {/* Branch Title & Zone */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {branch.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {branch.zone}
                </p>
              </div>

              {/* Dark Styled Google Maps Iframe wrapper */}
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "#080808",
                }}
              >
                {/* Apply dynamic CSS filters to map container for stunning premium custom dark theme */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    filter: "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)",
                    opacity: 0.88,
                  }}
                >
                  <iframe
                    src={branch.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Content info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.5,
                }}
              >
                {/* Address */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <MapPin size={18} style={{ color: branch.accent, flexShrink: 0, marginTop: "0.15rem" }} />
                  <span>{branch.address}</span>
                </div>

                {/* Hours */}
                <div style={{ display: "flex", gap: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem" }}>
                  <Clock size={18} style={{ color: branch.accent, flexShrink: 0, marginTop: "0.15rem" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", width: "100%" }}>
                    {branch.hours.map((h) => (
                      <div key={h.day} style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>{h.day}:</span>
                        <span style={{ fontWeight: 500, color: "#fff" }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Phone/WhatsApp */}
                <div style={{ display: "flex", gap: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem" }}>
                  <Phone size={18} style={{ color: branch.accent, flexShrink: 0 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Teléfono y WhatsApp:</span>
                    <a
                      href={`tel:${branch.phoneRaw}`}
                      style={{ color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginTop: "auto",
                  paddingTop: "1rem",
                }}
              >
                <a
                  href={branch.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{
                    padding: "0.85rem 1rem",
                    fontSize: "0.8rem",
                    justifyContent: "center",
                  }}
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <a
                  href={branch.agendaProUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    padding: "0.85rem 1rem",
                    borderRadius: "1rem",
                    background: `${branch.accent}15`,
                    border: `1px solid ${branch.accent}30`,
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${branch.accent}25`;
                    e.currentTarget.style.borderColor = `${branch.accent}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${branch.accent}15`;
                    e.currentTarget.style.borderColor = `${branch.accent}30`;
                  }}
                >
                  <Calendar size={14} style={{ color: branch.accent }} />
                  Agendar Online
                </a>
              </div>
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  padding: "0.85rem 1rem",
                  fontSize: "0.8rem",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.03)",
                  width: "100%",
                }}
              >
                Ver Ubicación en Google Maps <ExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
