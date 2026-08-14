import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de Privacidad simplificado de All Anatomy. Conoce cómo protegemos tus datos personales de acuerdo con la ley.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6.5rem", background: "var(--black)", minHeight: "100vh", position: "relative" }}>
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70vw",
            height: "70vw",
            background: "radial-gradient(circle, rgba(124,58,237,0.03) 0%, transparent 60%)",
            filter: "blur(90px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <section style={{ padding: "4rem 1.5rem 6rem", maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "3rem" }}>
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
              Marco Legal y Transparencia
            </div>
            <h1 className="section-title" style={{ marginBottom: "1rem", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
              Aviso de{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Privacidad
              </span>
            </h1>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
              Última actualización: Agosto de 2026
            </p>
          </div>

          <div
            style={{
              background: "rgba(12,12,12,0.6)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "1.75rem",
              padding: "2.5rem 3rem",
              backdropFilter: "blur(20px)",
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <p>
              En <strong>All Anatomy</strong> (Chiropractic & Alternative Therapy), de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la &ldquo;Ley&rdquo;), protegemos la confidencialidad, privacidad e integridad de los datos personales que nos proporcionas.
            </p>

            <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.08)" }} />

            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                1. Responsable del Tratamiento de Datos
              </h2>
              <p>
                All Anatomy, con domicilio de operación en Av. Alfonso Reyes 218-222, Plaza AR218, Contry, Monterrey, N.L. y Av. Real San Agustín, Plaza Colorines 102-L320, San Pedro Garza García, N.L., es responsable de recabar, tratar y resguardar tus datos personales, del uso que se le dé a los mismos y de su protección.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                2. Datos Personales Recabados
              </h2>
              <p>
                Para llevar a cabo las finalidades descritas en este aviso, podemos recabar los siguientes datos personales:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <li>Datos de identificación (Nombre, edad, género).</li>
                <li>Datos de contacto (Teléfono de contacto, correo electrónico).</li>
                <li>Datos de salud y clínicos (Antecedentes médicos, síntomas actuales, historial de lesiones, diagnósticos previos y estudios de imagenología como radiografías o resonancias), indispensables para elaborar tu expediente clínico quiropráctico y brindarte un diagnóstico adecuado.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                3. Finalidad del Tratamiento de Datos
              </h2>
              <p>
                Tus datos personales serán utilizados exclusivamente para los siguientes fines necesarios para nuestro servicio quiropráctico y de terapia:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <li>Creación y conservación de tu expediente clínico quiropráctico y de terapia deportiva de acuerdo a las normativas de salud aplicables en México.</li>
                <li>Agendado, confirmación y recordatorio de citas de consulta.</li>
                <li>Envío de información médica y de salud de interés relacionada con tu tratamiento.</li>
                <li>Contacto inmediato en caso de alguna emergencia médica.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                4. Medidas de Seguridad y Resguardo
              </h2>
              <p>
                All Anatomy implementa medidas de seguridad técnicas, administrativas y físicas para proteger tus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Los expedientes clínicos se guardan de forma física y digital confidencial y restringida.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                5. Derechos ARCO
              </h2>
              <p>
                Tienes derecho a conocer qué datos personales tenemos de ti, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es tu derecho solicitar la corrección de tu información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos se conocen como derechos <strong>ARCO</strong>.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Para el ejercicio de cualquiera de los derechos ARCO, deberás presentar la solicitud respectiva a través de un correo electrónico dirigido a <strong>contacto@allanatomy.com.mx</strong> o directamente en la recepción de cualquiera de nuestras sucursales físicas.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                6. Cambios al Aviso de Privacidad
              </h2>
              <p>
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias prácticas médicas. Te informaremos de cualquier cambio a través de nuestro sitio web oficial.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
