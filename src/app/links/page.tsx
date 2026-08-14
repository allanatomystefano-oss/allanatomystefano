"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Globe, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

function TikTokIcon({ size = 20, style, className }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function InstagramIcon({ size = 20, style, className }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function LinksPage() {
  const links = [
    {
      title: "Agendar Cita en Línea (AgendaPro)",
      subtitle: "Elige día, hora y especialista al instante",
      url: "https://allanatomy.site.agendapro.com/mx/sucursal/10668",
      icon: <Calendar size={20} style={{ color: "#7c3aed" }} />,
      gradient: "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(234, 88, 12, 0.1) 100%)",
      borderColor: "rgba(124, 58, 237, 0.3)",
      highlight: true,
    },
    {
      title: "WhatsApp San Pedro (Plaza Colorines)",
      subtitle: "Chatea directo con nuestro equipo",
      url: CONTACT_INFO.branches.colorines.whatsappUrl,
      icon: <MessageCircle size={20} style={{ color: "#25D366" }} />,
      borderColor: "rgba(37, 211, 102, 0.2)",
      highlight: false,
    },
    {
      title: "WhatsApp Contry (Alfonso Reyes)",
      subtitle: "Atención personalizada para citas en Contry",
      url: CONTACT_INFO.branches.contry.whatsappUrl,
      icon: <MessageCircle size={20} style={{ color: "#25D366" }} />,
      borderColor: "rgba(37, 211, 102, 0.2)",
      highlight: false,
    },
    {
      title: "Sitio Web Oficial All Anatomy",
      subtitle: "Conoce nuestros servicios, atletas y sucursales",
      url: "https://allanatomy.com.mx",
      icon: <Globe size={20} style={{ color: "#ea580c" }} />,
      borderColor: "rgba(234, 88, 12, 0.2)",
      highlight: false,
    },
    {
      title: "Instagram Oficial",
      subtitle: "@all_anatomy — Casos de éxito y atletas de élite",
      url: CONTACT_INFO.instagram.url,
      icon: <InstagramIcon size={20} style={{ color: "#f5c518" }} />,
      borderColor: "rgba(245, 197, 24, 0.2)",
      highlight: false,
    },
    {
      title: "TikTok Oficial",
      subtitle: "@all_anatomy — Ajustes vertebrales y dinámicas",
      url: "https://tiktok.com/@all_anatomy",
      icon: <TikTokIcon size={20} />,
      borderColor: "rgba(255, 255, 255, 0.15)",
      highlight: false,
    },
  ];

  return (
    <main
      style={{
        background: "#050505",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 1.5rem 6rem",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Background radial ambient lights */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          maxWidth: "700px",
          height: "400px",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(234, 88, 12, 0.04) 50%, transparent 80%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {/* Logo/Header */}
        <Link href="/" style={{ marginBottom: "2.5rem", display: "inline-block" }}>
          <Image
            src="/logo-white-v2.png"
            alt="All Anatomy"
            width={240}
            height={60}
            style={{
              objectFit: "contain",
              height: "50px",
              width: "auto",
            }}
            priority
          />
        </Link>

        {/* Clinic bio */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(124, 58, 237, 0.15)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "9999px",
              padding: "0.4rem 1rem",
              fontSize: "0.72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#fff",
              marginBottom: "1rem",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <Sparkles size={12} style={{ color: "#7c3aed" }} />
            Enlaces Oficiales
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            All Anatomy
          </h1>
          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.45)",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.45,
              maxWidth: "38ch",
              margin: "0 auto",
            }}
          >
            Quiropráctica & Terapia Deportiva de Élite en Monterrey. Ajustes vertebrales, masaje deportivo y descompresión axial.
          </p>
        </div>

        {/* Links listing */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", marginBottom: "4rem" }}>
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.35rem 1.5rem",
                borderRadius: "1.35rem",
                background: link.gradient || "rgba(255, 255, 255, 0.02)",
                border: `1px solid ${link.borderColor}`,
                textDecoration: "none",
                textAlign: "left",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                boxShadow: link.highlight
                  ? "0 10px 30px -10px rgba(124, 58, 237, 0.25)"
                  : "0 4px 12px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.025)";
                e.currentTarget.style.background = link.highlight
                  ? "linear-gradient(135deg, rgba(124, 58, 237, 0.22) 0%, rgba(234, 88, 12, 0.15) 100%)"
                  : "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = link.highlight
                  ? "rgba(124, 58, 237, 0.5)"
                  : "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = link.gradient || "rgba(255, 255, 255, 0.02)";
                e.currentTarget.style.borderColor = link.borderColor;
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </div>

              {/* Texts */}
              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    color: "#fff",
                  }}
                >
                  {link.title}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {link.subtitle}
                </span>
              </div>

              {/* Action Indicator */}
              <ArrowRight size={16} style={{ color: "rgba(255,255,255,0.25)" }} />
            </motion.a>
          ))}
        </div>

        {/* Footer info */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.02em",
          }}
        >
          © {new Date().getFullYear()} All Anatomy. Todos los derechos reservados.
        </p>
      </div>
    </main>
  );
}
