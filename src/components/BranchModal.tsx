"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, MapPin, Calendar, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

interface BranchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
              maxWidth: "560px",
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
                ¿Cómo deseas agendar?
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                Elige tu sucursal y el método de reserva que prefieras.
              </p>
            </div>

            {/* Branches list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  style={{
                    padding: "1.5rem",
                    borderRadius: "1.5rem",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {/* Branch header inside card */}
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
                          fontSize: "1.15rem",
                          color: "#fff",
                        }}
                      >
                        {branch.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "rgba(255,255,255,0.45)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {branch.details}
                      </div>
                    </div>
                  </div>

                  {/* Dual Action buttons inside the card */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    {/* WhatsApp button */}
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
                        padding: "0.85rem 1rem",
                        borderRadius: "1rem",
                        background: "rgba(37, 211, 102, 0.08)",
                        border: "1px solid rgba(37, 211, 102, 0.2)",
                        color: "#25D366",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
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
                      <MessageCircle size={15} />
                      Por WhatsApp
                    </a>

                    {/* AgendaPro online booking button */}
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
                        padding: "0.85rem 1rem",
                        borderRadius: "1rem",
                        background: `${branch.accent}15`,
                        border: `1px solid ${branch.accent}30`,
                        color: "#fff",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
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
                      <Calendar size={15} style={{ color: branch.accent }} />
                      Agendar Online
                      <ExternalLink size={10} style={{ opacity: 0.5 }} />
                    </a>
                  </div>

                  {/* Note for Colorines: handles out-of-city bookings */}
                  {branch.id === "colorines" && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.55rem 0.85rem",
                        background: "rgba(37, 211, 102, 0.04)",
                        border: "1px solid rgba(37, 211, 102, 0.1)",
                        borderRadius: "0.75rem",
                        marginTop: "-0.25rem",
                      }}
                    >
                      <MessageCircle size={11} style={{ color: "#25D366", flexShrink: 0 }} />
                      <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", margin: 0, lineHeight: 1.3 }}>
                        También para citas en{" "}
                        <strong style={{ color: "rgba(255,255,255,0.6)" }}>Saltillo, Cadereyta, Guadalajara</strong>
                        {" "}u otro lugar fuera de Monterrey.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
