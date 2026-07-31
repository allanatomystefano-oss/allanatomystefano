"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, DollarSign, Users, CheckCircle, ArrowRight, ShieldAlert, Sparkles, Star } from "lucide-react";
import BranchModal from "@/components/BranchModal";

export default function SaltilloPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeSlot: "9:00 AM - 11:00 AM",
    symptoms: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    // Prefilled WhatsApp text message for booking confirmation
    const message = `Hola All Anatomy! Me gustaría confirmar mi registro para el evento especial de Ajustes Quiroprácticos con Edgar Delgado en Saltillo el jueves 20 de agosto.\n\nMis datos:\n- Nombre: ${formData.name}\n- WhatsApp: ${formData.phone}\n- Horario preferido: ${formData.timeSlot}\n- Motivo de consulta: ${formData.symptoms || "Check-up general"}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528134173857?text=${encodedMessage}`;

    setSubmitted(true);
    // Redirect after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6rem", background: "var(--black)", minHeight: "100vh", position: "relative" }}>
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "80vw",
            background: "radial-gradient(circle, rgba(234,88,12,0.04) 0%, transparent 60%)",
            filter: "blur(90px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Top Highlight Banner */}
        <div
          style={{
            background: "var(--gradient-brand)",
            textAlign: "center",
            padding: "0.75rem 1rem",
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "#fff",
            fontFamily: "'Space Grotesk', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Sparkles size={14} />
          <span>¡EVENTO EXCLUSIVO EN SALTILLO! — CUPO LIMITADO A MÁXIMO 50 PERSONAS</span>
        </div>

        {/* Hero split layout */}
        <section
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "4rem 1.5rem 6rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left info column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "rgba(245, 197, 24, 0.15)",
                  border: "1px solid rgba(245, 197, 24, 0.3)",
                  borderRadius: "9999px",
                  padding: "0.35rem 0.95rem",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--yellow)",
                  fontFamily: "'Inter', sans-serif",
                  width: "fit-content",
                }}
              >
                <Star size={11} fill="var(--yellow)" />
                Por primera vez en Coahuila
              </div>
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  fontWeight: 850,
                  color: "#fff",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                }}
              >
                El Mejor Ajuste Quiropráctico con{" "}
                <span
                  style={{
                    background: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Edgar Delgado
                </span>
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.5,
                  marginTop: "0.5rem",
                }}
              >
                Atiéndete con el especialista de los atletas profesionales y las leyendas de Monterrey. Ajustes vertebrales de precisión extrema para liberar dolores de cuello, espalda y ciática.
              </p>
            </div>

            {/* Quick specifications grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                background: "rgba(255,255,255,0.01)",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "1.75rem",
                padding: "2rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Calendar size={20} style={{ color: "#7c3aed", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>Fecha y Hora</h4>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", marginTop: "0.15rem" }}>
                    Jueves 20 de Agosto<br />Desde las 9:00 AM
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <DollarSign size={20} style={{ color: "#f5c518", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>Costo Especial</h4>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", marginTop: "0.15rem" }}>
                    $1,000 MXN<br />(Solo pago en efectivo)
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <MapPin size={20} style={{ color: "#e63327", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>Ubicación</h4>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", marginTop: "0.15rem", lineHeight: 1.4 }}>
                    Blvd Jose Musa de Leon #2233, Residencial Valle Real, Saltillo
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Users size={20} style={{ color: "#ea580c", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>Cupo del Evento</h4>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", marginTop: "0.15rem" }}>
                    Mínimo 30 / Máximo 50<br />*Registro obligatorio
                  </p>
                </div>
              </div>
            </div>

            {/* Flyer Image Container */}
            <div
              style={{
                position: "relative",
                borderRadius: "1.75rem",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                aspectRatio: "1.25",
                width: "100%",
                background: "rgba(10,10,10,0.5)",
              }}
            >
              <Image
                src="/flyer-saltillo.png"
                alt="Flyer Oficial Saltillo Edgar Delgado"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={90}
              />
            </div>
          </div>

          {/* Right Column: Registration Form (Funnel Box) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(20,20,20,0.85) 0%, rgba(10,10,10,0.98) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "2.25rem",
                padding: "2.5rem",
                boxShadow: "0 50px 100px -25px rgba(0,0,0,0.9), 0 0 50px -10px rgba(124, 58, 237, 0.05)",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <Sparkles size={16} style={{ color: "var(--yellow)" }} />
                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Embudo de Reserva Prioritaria
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 750,
                  color: "#fff",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Asegura tu lugar hoy
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.45,
                  marginBottom: "2rem",
                }}
              >
                Llena tus datos para reservar tu horario. Serás redirigido a WhatsApp para finalizar tu confirmación.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    className="input-premium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
                    Número de WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 8116394613"
                    className="input-premium"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
                    Bloque de Horario Preferido
                  </label>
                  <select
                    className="input-premium"
                    style={{ background: "#141414", cursor: "pointer" }}
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  >
                    <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                    <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
                    <option value="3:00 PM - 5:00 PM">3:00 PM - 5:00 PM</option>
                    <option value="5:00 PM - 7:00 PM">5:00 PM - 7:00 PM</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
                    ¿Sientes algún dolor o molestia en particular?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ej. Dolor lumbar, contractura en cuello, etc."
                    className="input-premium"
                    style={{ resize: "none" }}
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-whatsapp"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    borderRadius: "1.25rem",
                    padding: "1.1rem 2rem",
                    marginTop: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px -10px rgba(37,211,102,0.4)",
                  }}
                >
                  {submitted ? "Redirigiendo..." : "Reservar Mi Lugar Ahora"}
                  <ArrowRight size={16} />
                </button>
              </form>

              {/* Warning tag */}
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  background: "rgba(234, 88, 12, 0.05)",
                  border: "1px solid rgba(234, 88, 12, 0.15)",
                  borderRadius: "1.25rem",
                  padding: "1rem 1.25rem",
                  marginTop: "2rem",
                  alignItems: "flex-start",
                }}
              >
                <ShieldAlert size={16} style={{ color: "var(--orange)", flexShrink: 0, marginTop: "1px" }} />
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
                  <strong>Nota de Cupo:</strong> El evento requiere un mínimo de 30 asistentes confirmados para activarse, y tiene un límite estricto de 50 lugares para garantizar una atención quiropráctica de alta calidad por paciente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
