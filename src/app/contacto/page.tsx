"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, MapPin, Phone, Send, CheckCircle2, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BranchModal from "@/components/BranchModal";
import { CONTACT_INFO } from "@/constants/contact";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "quiropractica", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate database send / API action
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "quiropractica", message: "" });
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6rem", background: "var(--black)", minHeight: "100vh", position: "relative" }}>
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "0",
            width: "50vw",
            height: "50vw",
            background: "radial-gradient(circle, rgba(124,58,237,0.03) 0%, transparent 60%)",
            filter: "blur(90px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <section style={{ padding: "4rem 1.5rem 6rem", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--yellow)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                marginBottom: "0.75rem",
              }}
            >
              Agenda o Escríbenos
            </div>
            <h1 className="section-title" style={{ marginBottom: "1rem" }}>
              Ponte en{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                contacto
              </span>
            </h1>
            <p className="section-subtitle">
              La forma más rápida de agendar es por WhatsApp. También puedes llenar el formulario para consultas generales.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "rgba(12,12,12,0.6)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "2rem",
                padding: "2.5rem",
                backdropFilter: "blur(20px)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "1.5rem",
                }}
              >
                Enviar Mensaje
              </h2>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                  >
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        required
                        className="input-premium"
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          required
                          className="input-premium"
                          placeholder="juan@correo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          required
                          className="input-premium"
                          placeholder="81 1234 5678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                        Servicio de Interés
                      </label>
                      <select
                        className="input-premium"
                        style={{ cursor: "pointer" }}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="quiropractica">Quiropráctica</option>
                        <option value="descompresion">Descompresión Axial</option>
                        <option value="masaje">Masaje Deportivo</option>
                        <option value="puncion">Punción Seca</option>
                        <option value="instituto">Instituto (Cursos)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                        Mensaje / Síntomas
                      </label>
                      <textarea
                        required
                        className="input-premium"
                        rows={4}
                        placeholder="Cuéntanos un poco sobre tu dolor o consulta..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        background: "var(--gradient-brand-h)",
                        border: "none",
                        borderRadius: "1rem",
                        padding: "1rem",
                        color: "#fff",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.6rem",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        boxShadow: "0 8px 30px rgba(124, 58, 237, 0.25)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 40px rgba(124, 58, 237, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 30px rgba(124, 58, 237, 0.25)";
                      }}
                    >
                      {loading ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send size={15} /> Enviar Mensaje
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "2rem 0",
                    }}
                  >
                    <CheckCircle2 size={56} style={{ color: "#25D366", marginBottom: "1.25rem" }} />
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", color: "#fff", fontWeight: 700, marginBottom: "0.5rem" }}>
                      ¡Mensaje Enviado!
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", lineHeight: 1.6, maxWidth: "28ch", marginBottom: "1.5rem" }}>
                      Gracias por escribirnos. Uno de nuestros especialistas se pondrá en contacto contigo en breve.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "0.75rem",
                        padding: "0.6rem 1.25rem",
                        color: "#fff",
                        fontSize: "0.825rem",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Cards Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* WhatsApp Card */}
              <button
                onClick={() => setIsModalOpen(true)}
                id="contact-whatsapp-card"
                style={{
                  background: "rgba(37,211,102,0.04)",
                  border: "1px solid rgba(37,211,102,0.15)",
                  borderRadius: "1.75rem",
                  padding: "2.25rem",
                  textDecoration: "none",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  cursor: "pointer",
                  width: "100%",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(37,211,102,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = "rgba(37,211,102,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(37,211,102,0.15)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(37,211,102,0.04)";
                }}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(37,211,102,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MessageCircle size={20} style={{ color: "#25D366" }} />
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
                  WhatsApp Inmediato
                </div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                  Agendado rápido de citas. Elige la sucursal más cercana para iniciar conversación en un clic.
                </div>
                <div style={{ fontSize: "0.85rem", color: "#25D366", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                  Abrir selector de sucursal →
                </div>
              </button>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/all_anatomy"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-instagram-card"
                style={{
                  background: "rgba(124,58,237,0.04)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  borderRadius: "1.75rem",
                  padding: "2.25rem",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = "rgba(124,58,237,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.15)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(124,58,237,0.04)";
                }}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(124,58,237,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <InstagramIcon size={20} />
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
                  Instagram DM
                </div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                  Síguenos en nuestra cuenta verificada con 49K+ seguidores y escríbenos por mensaje directo.
                </div>
                <div style={{ fontSize: "0.85rem", color: "#7c3aed", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                  Ir a @all_anatomy →
                </div>
              </a>

              {/* Sucursales Mini Details */}
              <div
                style={{
                  background: "rgba(20,20,20,0.4)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "1.75rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <MapPin size={18} style={{ color: "var(--yellow)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.2rem" }}>
                        Sucursal San Pedro (Colorines)
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", lineHeight: 1.45, marginBottom: "0.3rem" }}>
                        {CONTACT_INFO.branches.colorines.address}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--yellow)", fontFamily: "'Inter', sans-serif", marginBottom: "0.5rem" }}>
                        Lun-Jue: 10 am - 8 pm | Vie: 10 am - 5 pm | Sab: 10 am - 2 pm
                      </div>
                    </div>
                  </div>
                  <a
                    href={CONTACT_INFO.branches.colorines.agendaProUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "0.85rem",
                      background: "rgba(124, 58, 237, 0.15)",
                      border: "1px solid rgba(124, 58, 237, 0.3)",
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.25s",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(124, 58, 237, 0.25)";
                      e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(124, 58, 237, 0.15)";
                      e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.3)";
                    }}
                  >
                    <Calendar size={13} style={{ color: "#7c3aed" }} />
                    Agendar Online — San Pedro
                  </a>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", flexDirection: "column", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <MapPin size={18} style={{ color: "var(--red)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.2rem" }}>
                        Sucursal Contry (AR218)
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", lineHeight: 1.45, marginBottom: "0.3rem" }}>
                        {CONTACT_INFO.branches.contry.address}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--red)", fontFamily: "'Inter', sans-serif", marginBottom: "0.5rem" }}>
                        Lun-Jue: 11 am - 7 pm | Vie: 10 am - 5 pm | Sab: 10 am - 2 pm
                      </div>
                    </div>
                  </div>
                  <a
                    href={CONTACT_INFO.branches.contry.agendaProUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "0.85rem",
                      background: "rgba(234, 88, 12, 0.15)",
                      border: "1px solid rgba(234, 88, 12, 0.3)",
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.25s",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(234, 88, 12, 0.25)";
                      e.currentTarget.style.borderColor = "rgba(234, 88, 12, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(234, 88, 12, 0.15)";
                      e.currentTarget.style.borderColor = "rgba(234, 88, 12, 0.3)";
                    }}
                  >
                    <Calendar size={13} style={{ color: "#ea580c" }} />
                    Agendar Online — Contry
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
