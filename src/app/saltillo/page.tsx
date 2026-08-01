"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, DollarSign, Users, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Star, Trophy, Clock } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Ochoa",
    role: "Corredor de Maratón / Saltillo",
    quote: "Tenía meses con un dolor lumbar que no me dejaba entrenar. Viajé a Monterrey por recomendación y ahora que vienen a Saltillo ya agendé a toda mi familia. El cambio es inmediato.",
    rating: 5,
  },
  {
    name: "Dra. Sofía Garza",
    role: "Médico Pediatra / Paciente Regular",
    quote: "Como profesional de la salud soy exigente. La técnica de ajuste de Edgar y el profesionalismo de All Anatomy son insuperables. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Ivan Huerta",
    role: "Atleta de Alto Rendimiento / Triatleta",
    quote: "La combinación de ajuste y descarga muscular deportiva me devolvió el rendimiento para mi competencia. La mejor inversión para mi salud física.",
    rating: 5,
  },
];

const galleryImages = [
  { src: "/patient-herrera.jpg", alt: "Ajuste a Miguel Herrera" },
  { src: "/patient-carioca.jpg", alt: "Ajuste a Rafael Carioca" },
  { src: "/edgar/edgar-action-1.jpg", alt: "Ajuste manual de precisión" },
  { src: "/edgar/edgar-action-2.jpg", alt: "Ajuste cervical clínico" },
];

export default function SaltilloPage() {
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

    const message = `¡Hola All Anatomy! Me gustaría agendar mi cita para el Ajuste Quiropráctico en Saltillo el viernes 14 de agosto.\n\nDetalles del Registro:\n- Nombre: ${formData.name}\n- WhatsApp: ${formData.phone}\n- Horario sugerido: ${formData.timeSlot}\n- Síntomas/Molestia: ${formData.symptoms || "Check-up general"}\n- Costo: $1,000 MXN (Efectivo)`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528134173857?text=${encodedMessage}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6.5rem", background: "#020202", minHeight: "100vh", position: "relative" }}>
        
        {/* Glow ambient background */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background: "radial-gradient(circle at 50% 30%, rgba(234, 88, 12, 0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Hero Section */}
        <section
          style={{
            minHeight: "85vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            padding: "4rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "950px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                background: "rgba(234,88,12,0.1)",
                border: "1px solid rgba(234,88,12,0.25)",
                borderRadius: "9999px",
                color: "var(--orange)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginBottom: "2.5rem",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Sparkles size={13} className="animate-pulse" />
              Fecha Especial en Coahuila
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                marginBottom: "2.5rem",
              }}
            >
              <span style={{ display: "block" }}>El Mejor Ajuste</span>
              <span style={{ display: "block", background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Quiropráctico</span>
              <span style={{ display: "block" }}>llega a Saltillo</span>
            </h1>

            {/* Event Specs row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2.5rem",
                color: "rgba(255,255,255,0.45)",
                fontSize: "1.1rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                marginBottom: "3rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Calendar size={18} style={{ color: "#7c3aed" }} />
                <span style={{ color: "#fff", fontWeight: 600 }}>Viernes 14 de Agosto</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Clock size={18} style={{ color: "#f5c518" }} />
                <span>Desde las 9:00 AM</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <MapPin size={18} style={{ color: "#e63327" }} />
                <span>Residencial Valle Real, Saltillo</span>
              </div>
            </div>

            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>Desliza para agendar tu lugar</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight size={16} style={{ transform: "rotate(90deg)", color: "rgba(255,255,255,0.3)" }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem 8rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left Info Area */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
              
              {/* Mission Statement */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Fecha Clínica Especial 📍
                  </h2>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    borderRadius: "2rem",
                    padding: "2.5rem",
                  }}
                >
                  <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>
                    Esta fecha especial está diseñada exclusivamente para brindar el **servicio de ajuste quiropráctico** a pacientes que nos conocen de Saltillo pero que se les complica trasladarse a nuestras sucursales de Monterrey. 
                  </p>
                  <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontWeight: 300, fontFamily: "'Inter', sans-serif", marginTop: "1rem" }}>
                    Abriremos una jornada única de ajustes individuales para ayudarte a aliviar tensiones musculares y corregir desalineaciones de forma directa.
                  </p>
                </div>
              </div>

              {/* Flyer Image */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Flyer del Evento 📋
                  </h2>
                </div>
                <div
                  style={{
                    position: "relative",
                    borderRadius: "2rem",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                    aspectRatio: "1.25",
                    width: "100%",
                    background: "rgba(10,10,10,0.5)",
                  }}
                >
                  <Image
                    src="/flyer-saltillo.png"
                    alt="Flyer Oficial Saltillo Ajuste Quiropráctico"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    quality={95}
                  />
                </div>
              </div>

              {/* Specialist Bio */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Tu Quiropráctico 🎓
                  </h2>
                </div>

                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "2.5rem",
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                    <div style={{ position: "relative", width: "90px", height: "90px", borderRadius: "1.5rem", overflow: "hidden", border: "2px solid rgba(255,255,255,0.1)" }}>
                      <Image
                        src="/edgar/edgar-profile.jpg"
                        alt="Edgar Delgado"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>Edgar Delgado</h4>
                      <p style={{ fontSize: "0.78rem", color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Director Clínico & Especialista
                      </p>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                    Especialista en quiropráctica deportiva de alto rendimiento. Ha ajustado a leyendas mundiales y futbolistas de Tigres UANL y Rayados. Creador de la técnica de Descompresión Axial registrada ante la SEP.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)", flexShrink: 0 }} />
                      <span>Especialista Certificado en Quiropráctica y Biomecánica</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)", flexShrink: 0 }} />
                      <span>+49,000 Ajustes Espinales en pacientes clínicos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    El Ajuste en Acción 📷
                  </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {galleryImages.map((img, i) => (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        aspectRatio: "1.33",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.05)",
                        background: "rgba(255,255,255,0.01)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        quality={80}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar: Registration Form Box */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div
                style={{
                  background: "rgba(12, 12, 12, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "2.5rem",
                  padding: "2.5rem 2rem",
                  boxShadow: "0 50px 100px -30px rgba(0,0,0,0.9)",
                  position: "sticky",
                  top: "8.5rem",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      background: "rgba(230, 51, 39, 0.12)",
                      border: "1px solid rgba(230, 51, 39, 0.3)",
                      borderRadius: "9999px",
                      padding: "0.35rem 0.85rem",
                      color: "#e63327",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "1rem",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <ShieldAlert size={12} />
                    Cupo de 30 a 50 citas
                  </div>

                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>
                    Agenda tu Cita 🎟️
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                    Secuencia del servicio de ajuste clínico
                  </p>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
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
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
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
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Bloque de Horario Sugerido
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
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Síntomas o dolor principal
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ej. Dolor lumbar, dolor de cuello"
                      className="input-premium"
                      style={{ resize: "none" }}
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    />
                  </div>

                  {/* Pricing Box */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.01)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "1.25rem",
                      padding: "1.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "0.5rem",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>
                        Costo de la Sesión
                      </span>
                      <strong style={{ fontSize: "1rem", color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>
                        Ajuste Quiropráctico completo
                      </strong>
                    </div>
                    <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--yellow)", fontFamily: "'Space Grotesk', sans-serif" }}>
                      $1,000
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn-whatsapp"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      borderRadius: "1.25rem",
                      padding: "1.1rem 2rem",
                      marginTop: "0.5rem",
                      cursor: "pointer",
                      boxShadow: "0 10px 30px -10px rgba(37,211,102,0.4)",
                    }}
                  >
                    {submitted ? "Redirigiendo..." : "Solicitar Cita en WhatsApp"}
                    <ArrowRight size={16} />
                  </button>
                </form>

                {/* Important terms */}
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
                    <strong>Cupo Limitado:</strong> Mínimo de 30 personas confirmadas para activar la fecha, con un máximo de 50 citas. Solo pago en efectivo en la recepción del evento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          style={{
            padding: "6rem 1.5rem 8rem",
            background: "#020202",
            borderTop: "1px solid rgba(255,255,255,0.03)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                Opiniones de nuestros{" "}
                <span style={{ color: "var(--orange)", fontStyle: "italic", fontWeight: 400 }}>Pacientes.</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                Esto dicen las personas que ya se atienden con nosotros.
              </p>
            </div>

            {/* Testimonials grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "2rem",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "240px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="var(--yellow)" style={{ color: "var(--yellow)" }} />
                      ))}
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif", fontStyle: "italic", marginBottom: "1.5rem" }}>
                      "{t.quote}"
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem" }}>{t.name}</h4>
                      <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
