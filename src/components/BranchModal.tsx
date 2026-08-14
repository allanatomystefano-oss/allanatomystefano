"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, MapPin, Calendar, ExternalLink, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

interface BranchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTRY_PHONE = "528134173857";

const outOfCityCities = [
  {
    id: "saltillo",
    name: "Saltillo",
    details: "Coahuila — Fecha especial",
    icon: "🏙️",
    accent: "#f59e0b",
    whatsappText: "Hola%20All%20Anatomy%21%20Me%20gustar%C3%ADa%20agendar%20mi%20cita%20para%20el%20Ajuste%20Quiropr%C3%A1ctico%20en%20Saltillo.",
  },
  {
    id: "cadereyta",
    name: "Cadereyta",
    details: "Nuevo León — Fecha especial",
    icon: "📍",
    accent: "#7c3aed",
    whatsappText: "Hola%20All%20Anatomy%21%20Me%20gustar%C3%ADa%20agendar%20mi%20cita%20para%20el%20Ajuste%20Quiropr%C3%A1ctico%20en%20Cadereyta.",
  },
  {
    id: "guadalajara",
    name: "Guadalajara",
    details: "Jalisco — Fecha especial",
    icon: "🌆",
    accent: "#0ea5e9",
    whatsappText: "Hola%20All%20Anatomy%21%20Me%20gustar%C3%ADa%20agendar%20mi%20cita%20para%20el%20Ajuste%20Quiropr%C3%A1ctico%20en%20Guadalajara.",
  },
];

export default function BranchModal({ isOpen, onClose }: BranchModalProps) {
  const branches = [
    {
      ...CONTACT_INFO.branches.colorines,
      details: "San Pedro Garza García",
    },
    {
      ...CONTACT_INFO.branches.contry,
      details: "Monterrey Sur (Alfonso Reyes)",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(5, 5, 5, 0.85)",
              backdropFilter: "blur(12px)",
            }}
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            style={{
              width: "100%",
              maxWidth: "580px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "rgba(15, 15, 15, 0.96)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "2.25rem",
              padding: "2.5rem 2rem",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.95)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <X size={16} />
            </button>

            {/* Content Header */}
            <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                ¿Dónde quieres agendar?
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                Selecciona tu ciudad o sucursal.
              </p>
            </div>

            {/* ── Sucursales Monterrey ── */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "'Inter', sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sucursales Monterrey
                </span>
                <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {branches.map((branch) => (
                  <div
                    key={branch.id}
                    style={{
                      padding: "1.35rem",
                      borderRadius: "1.5rem",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {/* Branch header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "10px",
                          background: `${branch.accent}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: branch.accent,
                          flexShrink: 0,
                        }}
                      >
                        <MapPin size={20} />
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <div
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "1.05rem",
                            color: "#fff",
                          }}
                        >
                          {branch.name}
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {branch.details}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
                      <a
                        href={branch.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          padding: "0.8rem 1rem",
                          borderRadius: "1rem",
                          background: "rgba(37, 211, 102, 0.08)",
                          border: "1px solid rgba(37, 211, 102, 0.2)",
                          color: "#25D366",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "all 0.25s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(37, 211, 102, 0.15)";
                          e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(37, 211, 102, 0.08)";
                          e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.2)";
                        }}
                      >
                        <MessageCircle size={14} />
                        Por WhatsApp
                      </a>
                      <a
                        href={branch.agendaProUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          padding: "0.8rem 1rem",
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
                        <ExternalLink size={10} style={{ opacity: 0.5 }} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Fechas Especiales (otras ciudades) ── */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "'Inter', sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Sparkles size={10} style={{ color: "#f59e0b" }} />
                  Fechas Especiales
                </span>
                <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {outOfCityCities.map((city) => (
                  <a
                    key={city.id}
                    href={`https://wa.me/${CONTRY_PHONE}?text=${city.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1.25rem 1.35rem",
                      borderRadius: "1.5rem",
                      background: `rgba(255,255,255,0.02)`,
                      border: `1px solid ${city.accent}25`,
                      textDecoration: "none",
                      transition: "all 0.25s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${city.accent}0d`;
                      e.currentTarget.style.borderColor = `${city.accent}50`;
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = `${city.accent}25`;
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {/* City icon */}
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        background: `${city.accent}15`,
                        border: `1px solid ${city.accent}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.35rem",
                        flexShrink: 0,
                      }}
                    >
                      {city.icon}
                    </div>

                    {/* City info */}
                    <div style={{ flex: 1, textAlign: "left" }}>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: "#fff",
                          lineHeight: 1.2,
                        }}
                      >
                        {city.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "rgba(255,255,255,0.4)",
                          fontFamily: "'Inter', sans-serif",
                          marginTop: "0.15rem",
                        }}
                      >
                        {city.details}
                      </div>
                    </div>

                    {/* WhatsApp badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        background: "rgba(37,211,102,0.08)",
                        border: "1px solid rgba(37,211,102,0.2)",
                        borderRadius: "9999px",
                        padding: "0.4rem 0.85rem",
                        flexShrink: 0,
                      }}
                    >
                      <MessageCircle size={13} style={{ color: "#25D366" }} />
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#25D366",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        WhatsApp
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Footer note */}
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "'Inter', sans-serif",
                  textAlign: "center",
                  marginTop: "1.25rem",
                  lineHeight: 1.5,
                }}
              >
                Las citas en fechas especiales son atendidas por la sucursal <strong style={{ color: "rgba(255,255,255,0.4)" }}>Contry (Alfonso Reyes)</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
