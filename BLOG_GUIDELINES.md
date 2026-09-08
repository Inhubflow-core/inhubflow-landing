# Guía de Diseño y Formato de Artículos de Blog - InHubFlow

Este documento sirve como modelo base y estándar de referencia tipográfico y visual para todos los artículos del blog de InHubFlow.

---

## 1. Filosofía de Diseño
* **Base para innovar:** Define la jerarquía y consistencia visual sin actuar como una regla rígida o limitante.
* **Aspecto profesional:** Sin emojis en títulos ni textos explicativos (única excepción: `★★★★★` en reseñas/testimonios).
* **Fluidez de lectura:** Textos con punto y seguido (un solo bloque de párrafo) y alineación justificada.
* **Idioma unificado:** Sincronizado dinámicamente con el selector del navbar global.

---

## 2. Escala de Tamaños Tipográficos (Tailwind CSS)

* **Título de la sección (`<h2>`):** `text-2xl sm:text-3xl font-bold` (30px desktop / 24px móvil).
* **Encabezados intermedios de bloques (`<h3>`):** `text-xl sm:text-2xl font-bold` (24px desktop / 20px móvil).
* **Subtítulos de listas y procesos (`<h3>`):** `text-lg sm:text-xl font-bold` (20px desktop / 18px móvil).
* **Títulos de tarjetas, pasos y métricas:** `text-sm sm:text-base font-bold` (16px desktop / 14px móvil).
* **Párrafos de contenido principal:** `text-base sm:text-lg text-gray-700 leading-relaxed text-justify` (18px desktop / 16px móvil).
* **Descripciones en tarjetas, notas y métricas:** `text-sm sm:text-base text-gray-600 leading-relaxed text-justify` (16px desktop / 14px móvil).
* **Citas destacadas (`<blockquote>`):** `text-base sm:text-lg italic text-gray-800 border-l-4 border-indigo-600 pl-5`.

---

## 3. Estructura de Secciones por Artículo
1. **Hero & Breadcrumbs:** Sin selector inline, migas de pan limpias.
2. **Hook:** Gancho con titular de impacto, subheadline y cita contundente.
3. **Problema (PAS):** Exposición, agitación y límite en párrafos corridos, más lista de puntos de dolor (`✕`).
4. **Solución:** Titular principal, introducción, 3 pasos de proceso y beneficio destacado en verde.
5. **Credibilidad & Prueba Social:** 4 pilares de seguridad/rendimiento, insignia Gemini, 3 métricas de impacto y testimonio con 5 estrellas.
6. **CTA Global:** Banner a 2 columnas con rotación de copies y enlace a `https://inhubflow.online/`.
7. **Navegación:** Enlaces interactivos a *Artículo Anterior* y *Próximo Artículo*.
