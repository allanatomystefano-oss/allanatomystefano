# All Anatomy — Estado del Proyecto & Guía de Desarrollo

Este archivo es la fuente de verdad del proyecto. Documenta las decisiones de diseño, la estructura del código, los logros alcanzados y los próximos pasos.

---

## 1. Resumen y Estado de Avance

All Anatomy es un ecosistema digital premium construido con **Next.js 16 (App Router)** y **Tailwind CSS / Vanilla CSS** para una clínica de quiropráctica y terapia deportiva en Monterrey.

### ✅ Logros Desarrollados (Listo en Producción)
1. **Rediseño Completo & UI Glassmorphic**: Diseños estéticos en modo oscuro con fondos degradados, tarjetas translúcidas, tipografías modernas (*Space Grotesk* e *Inter*) y animaciones fluidas con `framer-motion`.
2. **Integración con AgendaPro (Reserva Online)**:
   * **Sucursal San Pedro (Plaza Colorines)**: `https://allanatomy.site.agendapro.com/mx/sucursal/10668`
   * **Sucursal Contry (Plaza AR218)**: `https://allanatomy.site.agendapro.com/mx/sucursal/71550`
   * Implementación de botones directos de AgendaPro por sucursal y un modal de selección interactivo (`BranchModal.tsx`) para redirigir correctamente a agendar en línea o chatear por WhatsApp.
3. **Selector Interactivo de Síntomas (`SymptomSelector.tsx`)**:
   * Panel en el Home que permite seleccionar zonas críticas del cuerpo (Cervical, Dorsal, Lumbar, Articulaciones) y muestra dinámicamente síntomas comunes, causas biológicas y el tratamiento recomendado con enlaces a sus subpáginas.
4. **Preguntas Frecuentes con Acordeón (`FAQ.tsx`)**:
   * Componente con animaciones fluidas para resolver dudas sobre dolor, descompresión axial, métodos de pago y seguros médicos.
5. **Ruta Dinámica para Servicios Individuales (`/servicios/[slug]`)**:
   * Páginas dinámicas ultrarrápidas y optimizadas para SEO para cada tratamiento:
     * 🦴 `/servicios/quiropractica`
     * ⚡ `/servicios/descompresion-axial` (Técnica certificada SEP)
     * 💪 `/servicios/masaje-deportivo`
     * 🎯 `/servicios/puncion-seca`
   * Cada página detalla los costos oficiales, tiempos, sustento científico, el paso a paso de la sesión y las contraindicaciones clínicas.
6. **Página de Enlaces Premium (`/links`)**:
   * Alternativa minimalista y estética a Linktree adaptada para Instagram y TikTok. Cuenta con accesos directos estructurados para reservas directas y chat de WhatsApp con ambas sucursales.
7. **Embudo de Fecha Especial en Saltillo (`/saltillo`)**:
   * Landing page optimizada para campañas publicitarias (ads) enfocada en la fecha clínica del **Viernes 14 de Agosto** (desde las 9:00 AM) por Edgar Delgado.
   * Cuenta con visualización de flyer oficial, biografía del quiropráctico, garantía clínica y un formulario inteligente que procesa datos y los envía directamente a WhatsApp para el cierre y cobro en efectivo ($1,000 MXN).
8. **Corrección Responsiva Móvil**:
   * Implementadas clases nativas `.hide-on-mobile` y `.show-only-on-mobile` en `globals.css` para resolver los problemas de menú en iPhones y dispositivos pequeños.
9. **SEO y Open Graph**:
   * Metadatos con el imagotipo oficial de All Anatomy configurados en `layout.tsx` para previsualizaciones de tarjetas al compartir por WhatsApp o redes.

---

## 2. Pendientes y Próximos Pasos (Futuro)

### 🛒 Tienda en Línea (Pilar B)
* Implementar la compra de pases, sesiones individuales y paquetes quiroprácticos con descuento.
* Conectar pasarela de pago (ej. Stripe o Conekta) y generar correos automatizados con confirmación de compra y folio.

### 🎓 Cursos en Línea / Instituto (Pilar C)
* Creación del módulo educativo **All Anatomy Institute** dirigido a profesionales de la salud.
* Catálogo de certificaciones para el método de Descompresión Axial, reproducción de videos instructivos, cuestionarios y descarga de certificados oficiales (SEP-Conocer).

### 📸 Galería y Rotación Dinámica (Hero Slideshow)
* Implementar la suplantación de la imagen del fondo del Hero en el Home por un slider dinámico de imágenes reales cambiando progresivamente.

---

## 3. Guía de Desarrollo Rápido

El proyecto está ubicado en `web/`.

### Comandos Clave (Consola de Windows)
* **Iniciar servidor de desarrollo**:
  ```bash
  npm run dev
  ```
* **Compilar para producción (Build)**:
  ```bash
  npm run build
  ```
* **Ejecutar build local**:
  ```bash
  npm run start
  ```

### Estructura del Código
* `src/app/page.tsx` — Página de inicio (Home) con Hero, Servicios, Síntomas, FAQs e Instructor.
* `src/app/servicios/page.tsx` — Catálogo general de servicios con costos y beneficios.
* `src/app/servicios/[slug]/page.tsx` — Plantilla dinámica para las landings de tratamientos individuales.
* `src/app/saltillo/page.tsx` — Landing page del embudo especial de Saltillo del 14 de agosto.
* `src/app/links/page.tsx` — Página Linktree oficial de All Anatomy.
* `src/components/` — Componentes reutilizables (`Navbar`, `Footer`, `SymptomSelector`, `FAQ`, `BranchModal`).
* `src/constants/contact.ts` — Centralización de los teléfonos, ubicaciones, coordenadas y enlaces de AgendaPro.
