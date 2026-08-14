"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ElitePatients from "@/components/ElitePatients";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, DollarSign, Users, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Star, Trophy, Clock, X, Phone, Heart } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  city: string;
  age: string;
  pain: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mauricio Benavides",
    role: "Empresario / Golfista Amateur",
    quote: "Tenía meses con un dolor lumbar que no me dejaba jugar golf cómodo. En la primera sesión con Edgar sentí una liberación inmediata.",
    rating: 5,
    city: "San Pedro",
    age: "45 años",
    pain: "Dolor lumbar crónico y rigidez cadera",
    result: "Recuperación de rango de giro y cero dolor al día siguiente.",
  },
  {
    name: "Valeria Sada",
    role: "Diseñadora de Interiores",
    quote: "La tensión en mi cuello por estar tantas horas en la laptop era insoportable. El masaje descontracturante completo y el ajuste fueron la salvación.",
    rating: 5,
    city: "San Pedro",
    age: "31 años",
    pain: "Dolor cervical severo y dolor de cabeza tensional",
    result: "Descompresión inmediata del cuello y alivio total de la migraña.",
  },
  {
    name: "Rodrigo Villarreal",
    role: "Corredor de Trail",
    quote: "Edgar sabe exactamente qué mover. La combinación de ajuste biomecánico y liberación de piernas me devolvió a la montaña.",
    rating: 5,
    city: "Monterrey",
    age: "38 años",
    pain: "Sobrecarga en isquiotibiales y desalineación pélvica",
    result: "Zancada más libre y alivio de rodilla inmediato.",
  },
];

const galleryImages = [
  { src: "/edgar/edgar-quiropractica-real.jpg", alt: "Ajuste manual clínico de columna" },
  { src: "/edgar/edgar-descompresion-real.jpg", alt: "Terapia de descompresión física axial" },
  { src: "/edgar/edgar-action-1.jpg", alt: "Ajuste cervical de alta precisión" },
  { src: "/edgar/edgar-action-3.jpg", alt: "Terapia manual y liberación muscular" },
];

export default function ColorinesPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "ajuste",
    timeSlot: "9:00 AM - 11:00 AM",
    symptoms: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Target event date: Sunday, August 9, 2026 at 9:00 AM
  useEffect(() => {
    const targetDate = new Date("2026-08-09T09:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const getServiceDetails = (serviceKey: string) => {
    switch (serviceKey) {
      case "ajuste":
        return { name: "Ajuste Quiropráctico Clínico", price: 1000 };
      case "masaje-completo":
        return { name: "Masaje Descontracturante Completo", price: 800 };
      case "masaje-medio":
        return { name: "Masaje Descontracturante Medio", price: 600 };
      case "combo-completo":
        return { name: "Ajuste + Masaje Descontracturante Completo", price: 1800 };
      case "combo-medio":
        return { name: "Ajuste + Masaje Descontracturante Medio", price: 1600 };
      default:
        return { name: "Ajuste Quiropráctico Clínico", price: 1000 };
    }
  };

  const selectedService = getServiceDetails(formData.service);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    const message = `¡Hola All Anatomy Colorines! Me gustaría agendar mi cita para el Evento Especial del Domingo 9 de agosto.\n\nDetalles del Registro:\n- Nombre: ${formData.name}\n- WhatsApp: ${formData.phone}\n- Servicio: ${selectedService.name} ($${selectedService.price} MXN)\n- Horario sugerido: ${formData.timeSlot}\n- Síntomas/Molestia: ${formData.symptoms || "Check-up general"}\n- Costo Total: $${selectedService.price} MXN (Efectivo)`;
    const encodedMessage = encodeURIComponent(message);
    // WhatsApp branch phone is +52 81 1639 4613 (Phone Raw: 8116394613)
    const whatsappUrl = `https://wa.me/528116394613?text=${encodedMessage}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6.5rem", background: "#030305", minHeight: "100vh", position: "relative" }}>
        
        {/* Glow ambient background (Electric Blue) */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background: "radial-gradient(circle at 50% 25%, rgba(0, 150, 255, 0.05) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Urgency Announcement Bar */}
        <div
          style={{
            background: "linear-gradient(90deg, #0055ff 0%, #00d5ff 100%)",
            color: "#fff",
            padding: "0.85rem 1rem",
            textAlign: "center",
            fontSize: "clamp(0.72rem, 1.5vw, 0.85rem)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "'Space Grotesk', sans-serif",
            position: "relative",
            zIndex: 3,
            boxShadow: "0 4px 20px rgba(0, 150, 255, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
          }}
        >
          <ShieldAlert size={15} style={{ animation: "pulse 1.5s infinite" }} />
          <span>⚠️ Única Fecha: ¡Solo 6 lugares disponibles para este Domingo! 88% de citas reservadas.</span>
        </div>

        {/* Hero Section */}
        <section
          style={{
            minHeight: "92vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            padding: "6.5rem 1.5rem",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Background Images / Overlays */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
          >
            {/* Desktop Version */}
            <div className="hide-on-mobile" style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/hero-bg-new.jpg"
                alt="All Anatomy Ajuste Quiropráctico en Plaza Colorines"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={90}
              />
            </div>
            {/* Mobile Version */}
            <div className="show-only-on-mobile" style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/hero-bg-mobile.jpg"
                alt="All Anatomy Ajuste Quiropráctico en Plaza Colorines"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={90}
              />
            </div>
            {/* Ambient Overlays (matching the blue design) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(3,3,5,0.85) 0%, rgba(3,3,5,0.5) 40%, rgba(3,3,5,0.9) 75%, #030305 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at center, transparent 35%, rgba(3,3,5,0.95) 90%)",
              }}
            />
          </div>

          <div style={{ maxWidth: "980px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                background: "rgba(0,150,255,0.15)",
                border: "1px solid rgba(0,210,255,0.3)",
                borderRadius: "9999px",
                color: "#00d5ff",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginBottom: "2rem",
                fontFamily: "'Inter', sans-serif",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 20px rgba(0,150,255,0.15)",
              }}
            >
              <Sparkles size={13} style={{ color: "#00d5ff" }} />
              Edgar Delgado en San Pedro
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.4rem, 6.5vw, 4.8rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
                textShadow: "0 10px 40px rgba(0,0,0,0.9)",
              }}
            >
              <span style={{ display: "block", color: "#fff" }}>RECUPERA TU BIENESTAR</span>
              <span style={{ display: "block", color: "#00beff", fontSize: "0.9em", marginTop: "0.2rem" }}>AJUSTE QUIROPRÁCTICO</span>
              <span style={{ display: "block", fontSize: "0.45em", fontWeight: 600, marginTop: "1.2rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.35, maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
                Elimina contracturas, dolores de cuello, espalda o ciática con valoración especializada y terapia de precisión este domingo en San Pedro.
              </span>
            </h1>

            {/* Dynamic Countdown Timer */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginBottom: "2.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { value: timeLeft.days, label: "Días" },
                { value: timeLeft.hours, label: "Horas" },
                { value: timeLeft.minutes, label: "Minutos" },
                { value: timeLeft.seconds, label: "Segundos" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "rgba(10, 10, 15, 0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(0, 180, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "0.8rem 1.2rem",
                    minWidth: "75px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "#00d5ff",
                      lineHeight: 1,
                    }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.6rem", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontWeight: 600, letterSpacing: "0.06em", marginTop: "0.3rem" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Event Specs row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2.5rem",
                color: "rgba(255,255,255,0.85)",
                fontSize: "1.05rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                marginBottom: "2.5rem",
                background: "rgba(10, 10, 15, 0.65)",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                border: "1px solid rgba(0, 180, 255, 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Calendar size={18} style={{ color: "#00d5ff" }} />
                <span>Domingo 9 de Agosto</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Clock size={18} style={{ color: "var(--yellow)" }} />
                <span>09:00 AM - 02:00 PM</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <MapPin size={18} style={{ color: "#ff5a4e" }} />
                <span>Plaza Colorines L-320, San Pedro</span>
              </div>
            </div>

            {/* Hero Scroll CTA Button */}
            <button
              onClick={() => {
                const element = document.getElementById("registro-formulario");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                background: "linear-gradient(90deg, #0055ff 0%, #00d5ff 100%)",
                border: "none",
                padding: "1.1rem 2.5rem",
                fontSize: "1rem",
                fontWeight: 800,
                color: "#fff",
                borderRadius: "1.25rem",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0, 140, 255, 0.3)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 140, 255, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 140, 255, 0.3)";
              }}
            >
              Reservar mi Cita (Cupo Limitado)
            </button>
          </div>
        </section>

        {/* Trust & Authority Bar */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "-3rem auto 4rem",
            padding: "1.5rem 2rem",
            background: "rgba(10, 10, 15, 0.6)",
            border: "1px solid rgba(0, 180, 255, 0.1)",
            backdropFilter: "blur(16px)",
            borderRadius: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {[
            { value: "+49,000", label: "Ajustes Clínicos Realizados" },
            { value: "10 Años", label: "Experiencia en Columna" },
            { value: "SEP-Conocer", label: "Técnica con Registro Oficial" },
            { value: "Élite", label: "Quiropráctico de Deportistas" },
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={{ fontSize: "1.75rem", fontWeight: 800, color: "#00d5ff", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

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
                  <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #0055ff, #00d5ff)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Jornada Especial en San Pedro 📍
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
                    Normalmente, nuestra sucursal de <strong>Plaza Colorines en San Pedro</strong> permanece cerrada los domingos. Sin embargo, este <strong>Domingo 9 de Agosto</strong> abriremos exclusivamente para esta jornada de ajustes clínicos y masajes con Edgar Delgado.
                  </p>
                  <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontWeight: 300, fontFamily: "'Inter', sans-serif", marginTop: "1rem" }}>
                    Es una oportunidad perfecta si trabajas entre semana o si buscas atender tus dolores musculares crónicos con el director clínico de All Anatomy sin interrumpir tus horarios laborales.
                  </p>
                </div>
              </div>

              {/* Flyer Info Showcase */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #0055ff, #00d5ff)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Servicios Disponibles 📋
                  </h2>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { title: "Ajuste Quiropráctico", price: "$1,000 MXN", detail: "Sesión clínica de alineación espinal y biomecánica completa con Edgar Delgado. Ideal para dolor lumbar, cervical, hernias y pinzamientos.", icon: "⚡" },
                    { title: "Masaje Descontracturante Completo", price: "$800 MXN", detail: "Descarga muscular profunda de cuerpo entero. Disuelve nudos de tensión profunda acumulada en espalda, hombros, cuello y piernas.", icon: "💆‍♂️" },
                    { title: "Masaje Descontracturante Medio", price: "$600 MXN", detail: "Descarga focalizada de tejido blando en la zona de mayor molestia (ej. únicamente espalda alta y cuello).", icon: "🩹" },
                    { title: "Combo Completo (Ajuste + Masaje Completo)", price: "$1,800 MXN", detail: "El protocolo de máximo rendimiento. Primero descontracturamos todo el tejido muscular y luego Edgar alinea tu columna con precisión.", icon: "⭐" },
                  ].map((srv, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: "1.5rem",
                        padding: "1.5rem",
                        display: "flex",
                        gap: "1.25rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ fontSize: "1.75rem", background: "rgba(0,180,255,0.05)", padding: "0.5rem", borderRadius: "12px" }}>{srv.icon}</span>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                          <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem" }}>{srv.title}</h4>
                          <span style={{ color: "#00d5ff", fontWeight: 800, fontSize: "1.1rem" }}>{srv.price}</span>
                        </div>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{srv.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialist Bio */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #0055ff, #00d5ff)" }} />
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
                    <div style={{ position: "relative", width: "90px", height: "90px", borderRadius: "1.5rem", overflow: "hidden", border: "2px solid rgba(0, 180, 255, 0.2)" }}>
                      <Image
                        src="/edgar/edgar-profile.jpg"
                        alt="Edgar Delgado"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>Edgar Delgado</h4>
                      <p style={{ fontSize: "0.78rem", color: "#00d5ff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Director Clínico & Especialista en Columna
                      </p>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                    Especialista en quiropráctica clínica e instrumentada, enfocado en corregir problemas biomecánicos severos y recuperar el rango completo de movilidad de atletas profesionales y pacientes clínicos. Es el quiropráctico de confianza de futbolistas profesionales y personalidades de alto rendimiento en Monterrey.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)", flexShrink: 0 }} />
                      <span>Creador de la Técnica de Descompresión Axial con registro ante SEP</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)", flexShrink: 0 }} />
                      <span>Colaborador de salud de atletas de Tigres UANL y Rayados</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #0055ff, #00d5ff)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Tratamiento Clínico Seguro 📷
                  </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {galleryImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedImg(img.src)}
                      style={{
                        position: "relative",
                        aspectRatio: "1.33",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.05)",
                        background: "rgba(255,255,255,0.01)",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        quality={80}
                      />
                      {/* Hover indicator */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(0, 0, 0, 0.4)",
                          opacity: 0,
                          transition: "opacity 0.25s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      >
                        <span style={{ color: "#fff", fontSize: "0.7rem", fontWeight: 600, padding: "0.35rem 0.75rem", background: "rgba(0,0,0,0.6)", borderRadius: "9999px" }}>
                          🔎 Ampliar
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar: Registration Form Box */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              
              {/* Benefits list card */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.01)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "2rem",
                  padding: "2rem",
                }}
              >
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
                  ¿Cuándo debes agendar un ajuste?
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>
                  {[
                    "Compresión ciática",
                    "Rigidez o estrés",
                    "Dolor de cuello",
                    "Hernias discales",
                    "Nudos musculares",
                    "Dolor lumbar",
                  ].map((symptom, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle2 size={12} style={{ color: "#00d5ff", flexShrink: 0 }} />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Box */}
              <div
                id="registro-formulario"
                style={{
                  background: "rgba(10, 10, 15, 0.95)",
                  border: "1px solid rgba(0, 180, 255, 0.15)",
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
                      background: "rgba(0, 140, 255, 0.12)",
                      border: "1px solid rgba(0, 140, 255, 0.3)",
                      borderRadius: "9999px",
                      padding: "0.35rem 0.85rem",
                      color: "#00beff",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "1rem",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <ShieldAlert size={12} />
                    Jornada Especial — Domingo Único
                  </div>

                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>
                    Reserva tu Turno 🎟️
                  </h3>

                  {/* Scarcity Progress Bar */}
                  <div style={{ margin: "1rem 0 1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.4rem", fontFamily: "'Inter', sans-serif" }}>
                      <span>Reservado: <strong>88%</strong></span>
                      <span style={{ color: "#00d5ff", fontWeight: 600 }}>🔥 ¡Quedan 6 lugares!</span>
                    </div>
                    <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden" }}>
                      <div
                        style={{ width: "88%", height: "100%", background: "linear-gradient(90deg, #0055ff 0%, #00d5ff 100%)", borderRadius: "3px" }}
                      />
                    </div>
                  </div>

                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", lineHeight: 1.45 }}>
                    Solo se abrirán 25 turnos en total este domingo para asegurar la máxima calidad. Selecciona tu servicio abajo.
                  </p>

                  {/* Live Viewers Indicator */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", fontSize: "0.72rem", color: "#ffbe1a", fontFamily: "'Inter', sans-serif", marginTop: "1rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffbe1a", animation: "pulse 1.5s infinite", display: "inline-block" }} />
                    <span>11 personas viendo este evento ahora</span>
                  </div>
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
                      placeholder="Ej. Manuel Villarreal"
                      className="input-premium"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        background: "rgba(10,10,15,0.5)",
                        border: "1px solid rgba(0,180,255,0.15)",
                      }}
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
                      style={{
                        background: "rgba(10,10,15,0.5)",
                        border: "1px solid rgba(0,180,255,0.15)",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Selecciona el Servicio *
                    </label>
                    <select
                      className="input-premium"
                      style={{ background: "#0c0c12", cursor: "pointer", border: "1px solid rgba(0,180,255,0.15)" }}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="ajuste">Ajuste Quiropráctico ($1,000 MXN)</option>
                      <option value="masaje-completo">Masaje Descontracturante Completo ($800 MXN)</option>
                      <option value="masaje-medio">Masaje Descontracturante Medio ($600 MXN)</option>
                      <option value="combo-completo">Combo: Ajuste + Masaje Completo ($1,800 MXN)</option>
                      <option value="combo-medio">Combo: Ajuste + Masaje Medio ($1,600 MXN)</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Bloque de Horario Sugerido
                    </label>
                    <select
                      className="input-premium"
                      style={{ background: "#0c0c12", cursor: "pointer", border: "1px solid rgba(0,180,255,0.15)" }}
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    >
                      <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                      <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Síntomas o zonas de dolor
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ej. Dolor de cuello, ciática pierna derecha..."
                      className="input-premium"
                      style={{ resize: "none", background: "rgba(10,10,15,0.5)", border: "1px solid rgba(0,180,255,0.15)" }}
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    />
                  </div>

                  {/* Pricing Box (Dynamic Calculator) */}
                  <div
                    style={{
                      background: "rgba(0,140,255,0.03)",
                      border: "1px solid rgba(0,180,255,0.1)",
                      borderRadius: "1.5rem",
                      padding: "1.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", fontWeight: 700 }}>
                      Tu Sesión Incluye:
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <CheckCircle2 size={13} style={{ color: "#00d5ff" }} />
                        <span>{selectedService.name}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <CheckCircle2 size={13} style={{ color: "#00d5ff" }} />
                        <span>Valoración clínica inicial con especialista</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <CheckCircle2 size={13} style={{ color: "#00d5ff" }} />
                        <span>Diagnóstico biomecánico y de postura</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(0,180,255,0.1)", paddingTop: "0.75rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700 }}>Total en Efectivo:</span>
                      <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#00d5ff", fontFamily: "'Space Grotesk', sans-serif" }}>
                        ${selectedService.price.toLocaleString("es-MX")} MXN
                      </span>
                    </div>
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
                      background: "#25D366",
                      color: "#fff",
                      border: "none",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
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
                    background: "rgba(0, 180, 255, 0.05)",
                    border: "1px solid rgba(0, 180, 255, 0.15)",
                    borderRadius: "1.25rem",
                    padding: "1rem 1.25rem",
                    marginTop: "2rem",
                    alignItems: "flex-start",
                  }}
                >
                  <ShieldAlert size={16} style={{ color: "#00d5ff", flexShrink: 0, marginTop: "1px" }} />
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
                    <strong>Pago en Efectivo:</strong> Al ser un evento de jornada única especial de domingo, únicamente se recibirán pagos en efectivo al momento de tu recepción para agilizar el registro clínico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose All Anatomy block */}
        <section
          style={{
            padding: "5rem 1.5rem",
            background: "rgba(10, 10, 15, 0.4)",
            borderTop: "1px solid rgba(0, 180, 255, 0.05)",
            borderBottom: "1px solid rgba(0, 180, 255, 0.05)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "3rem" }}>
              ¿Por qué elegir <span style={{ color: "#00d5ff" }}>All Anatomy?</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2.5rem" }}>
              {[
                { title: "Quiropráctica de Precisión", desc: "Alineación mecánica fina enfocada en corregir el dolor desde el origen.", icon: "🎯" },
                { title: "Sin Medicamentos ni Cirugías", desc: "Terapia 100% natural que ayuda a tu cuerpo a sanar y desinflamarse.", icon: "🌱" },
                { title: "Respaldo y Certificación", desc: "Contamos con registro y técnicas avaladas ante organismos oficiales.", icon: "🛡️" },
                { title: "Atención de Élite", desc: "Nos confían su recuperación atletas profesionales de alto rendimiento.", icon: "🏆" },
                { title: "Instalaciones Premium", desc: "Tu terapia en un consultorio cómodo, moderno y con tecnología especializada.", icon: "🏢" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "2.2rem" }}>{item.icon}</span>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elite Patients validation */}
        <ElitePatients />

        {/* Testimonials */}
        <section
          style={{
            padding: "6rem 1.5rem 8rem",
            background: "#030305",
            borderTop: "1px solid rgba(0, 180, 255, 0.05)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                Opiniones de Pacientes de{" "}
                <span style={{ color: "#00d5ff", fontStyle: "italic", fontWeight: 400 }}>San Pedro.</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                Conoce la experiencia de personas que ya han eliminado su dolor con Edgar Delgado.
              </p>
            </div>

            {/* Testimonials grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.01)",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                    borderRadius: "2rem",
                    padding: "2.5rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "320px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  <div>
                    {/* Stars */}
                    <div style={{ display: "flex", gap: "0.3rem", marginBottom: "1.25rem" }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="var(--yellow)" style={{ color: "var(--yellow)" }} />
                      ))}
                    </div>

                    {/* Pain and Result Details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem", borderLeft: "2px solid #00beff", paddingLeft: "0.85rem" }}>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                        🤕 <strong>Dolor anterior:</strong> {t.pain}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#00d5ff" }}>
                        ✨ <strong>Resultado:</strong> {t.result}
                      </div>
                    </div>

                    <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif", fontStyle: "italic", marginBottom: "1.5rem" }}>
                      "{t.quote}"
                    </p>
                  </div>
                  
                  {/* User Profile */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #0055ff, #00d5ff)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>
                      {t.name.split(" ")[0][0]}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem" }}>{t.name}</h4>
                      <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
                        {t.role} · {t.city} ({t.age})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Repeater at bottom of Testimonials */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "3.5rem" }}>
              <button
                onClick={() => {
                  const element = document.getElementById("registro-formulario");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  background: "linear-gradient(90deg, #0055ff 0%, #00d5ff 100%)",
                  border: "none",
                  padding: "1rem 2.5rem",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: "#fff",
                  borderRadius: "1.25rem",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(0, 140, 255, 0.25)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Quiero agendar mi cita →
              </button>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section
          style={{
            padding: "6rem 1.5rem",
            background: "#0a0a0f",
            borderTop: "1px solid rgba(0, 180, 255, 0.05)",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #0055ff, #00d5ff)" }} />
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  ¿Cómo llegar? 🗺️
                </h2>
              </div>
              
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                All Anatomy Plaza Colorines
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Av. Real San Agustín, Plaza Colorines 102-L320, Zona San Agustín Campestre, 66270 San Pedro Garza García, N.L.
              </p>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "1.5rem", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
                  📍 <strong>Ubicación del consultorio:</strong> Tercer piso de la plaza comercial, justo a un lado de <em>Gain Pilates</em>.
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
                  🚗 <strong>Estacionamiento:</strong> Cómodo estacionamiento disponible dentro de Plaza Colorines.
                </div>
              </div>
              <a
                href="https://www.google.com/maps?q=Plaza+Colorines,+Av.+Real+San+Agustin+102,+Zona+San+Agust%C3%ADn+Campestre,+66278+San+Pedro+Garza+Garc%C3%ADa,+N.L.&ftid=0x8662be6fdb879c0b:0x86aad3e50b20e81d"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "1rem",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(0, 180, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                Abrir en Google Maps <ArrowRight size={15} />
              </a>
            </div>
            
            <div style={{ height: "350px", position: "relative", borderRadius: "2rem", overflow: "hidden", border: "1px solid rgba(0, 180, 255, 0.15)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.539281745232!2d-100.34484932484297!3d25.6534927774328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be6fdb879c0b%3A0x86aad3e50b20e81d!2sPlaza%20Colorines!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section
          style={{
            padding: "6rem 1.5rem",
            background: "#030305",
            borderTop: "1px solid rgba(0, 180, 255, 0.05)",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                Preguntas{" "}
                <span style={{ color: "#00d5ff", fontStyle: "italic", fontWeight: 400 }}>Frecuentes.</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                Respuestas a las dudas más comunes sobre la jornada especial del Domingo en Plaza Colorines.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  q: "¿Cuándo se realizará esta jornada especial?",
                  a: "Únicamente este Domingo 9 de Agosto, en un horario de 9:00 AM a 2:00 PM. Los espacios de agenda son específicos para asegurar la debida atención clínica personalizada.",
                },
                {
                  q: "¿Qué diferencia hay entre el masaje medio y completo?",
                  a: "El masaje descontracturante completo ($800 MXN) tiene una duración extendida y cubre cuerpo completo (espalda alta/baja, cuello, hombros y piernas). El masaje medio ($600 MXN) dura menos y se enfoca únicamente en la zona de mayor dolor indicada por el paciente.",
                },
                {
                  q: "¿Cómo funciona el combo de Ajuste + Masaje?",
                  a: "Es la terapia más recomendada. Primero, se descarga la tensión profunda y contracturas en las fibras musculares mediante el masaje. Posteriormente, con los músculos relajados, Edgar Delgado realiza el ajuste articular con mayor facilidad y menor resistencia, logrando una alineación óptima.",
                },
                {
                  q: "¿Por qué el pago es únicamente en efectivo?",
                  a: "Dado que es una fecha clínica especial fuera del horario habitual de la plaza, operamos con un sistema de recepción simplificado para agilizar el ingreso de los 25 pacientes citados, evitando esperas molestas.",
                },
                {
                  q: "¿Quién realizará los ajustes quiroprácticos?",
                  a: "Todos los ajustes quiroprácticos de columna serán ejecutados directamente y de forma personalizada por Edgar Delgado, director clínico de All Anatomy.",
                },
                {
                  q: "¿Cómo confirmo mi cita después de llenar el formulario?",
                  a: "Al enviar tus datos, se abrirá un chat directo con nuestro WhatsApp oficial (+52 81 1639 4613) prellenado con tu selección. Uno de nuestros asistentes te confirmará la hora exacta disponible y las indicaciones finales de acceso.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.01)",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                    borderRadius: "1.5rem",
                    padding: "1.5rem 2rem",
                  }}
                >
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
                    {faq.q}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Repeater at bottom of FAQ */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "3.5rem" }}>
              <button
                onClick={() => {
                  const element = document.getElementById("registro-formulario");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  background: "linear-gradient(90deg, #0055ff 0%, #00d5ff 100%)",
                  border: "none",
                  padding: "1rem 2.5rem",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: "#fff",
                  borderRadius: "1.25rem",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(0, 140, 255, 0.25)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Solicitar mi Turno Ahora →
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky Footer Bar */}
      <div
        className="show-only-on-mobile"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: "rgba(10, 10, 15, 0.95)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(0, 180, 255, 0.15)",
          padding: "1rem 1.5rem",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.6)",
        }}
      >
        <button
          onClick={() => {
            const element = document.getElementById("registro-formulario");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #0055ff 0%, #00d5ff 100%)",
            border: "none",
            padding: "1.1rem 2rem",
            fontSize: "0.95rem",
            fontWeight: 800,
            color: "#fff",
            borderRadius: "1.25rem",
            cursor: "pointer",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(0, 140, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          🎟️ Reservar Cita (Últimos 6 lugares)
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
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
              onClick={() => setSelectedImg(null)}
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

            {/* Main image container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "90%",
                maxWidth: "750px",
                height: "80vh",
              }}
            >
              <Image
                src={selectedImg}
                alt="Imagen ampliada"
                fill
                style={{ objectFit: "contain" }}
                quality={95}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
