# Informe Neuroventa + SEO — Firma Transaccional (Firmas Ecuador by Begroup)

**URL analizada:** https://socket-studio.com/demo-aplicaciones/firmas-ecuador/
**Producto:** Módulo de firma transaccional — firmar PDF con validación biométrica (prueba de vida) sin tener firma electrónica .p12, e invitar a varios firmantes por enlace.
**Avatar:** PYMEs, estudios jurídicos/contables, áreas de RR.HH. y distribuidores Begroup en Ecuador que necesitan que **varias personas firmen** un documento sin que todas tengan certificado.
**Fecha:** 2026-06-17 · Analista: skill `neuroventa-socket`

---

## NEUROSCORE GLOBAL: **63 / 100** — BUENO (mejoras de conversión posibles)

| # | Pilar | Score | Estado |
|---|-------|-------|--------|
| 1 | Arquitectura AIDA+ | 6.2/10 | 🟡 |
| 2 | Principios Cialdini | 3.8/10 | 🔴 |
| 3 | Viaje emocional (antes/después) | 7.0/10 | 🟢 |
| 4 | Copywriting neuro-activador | 7.0/10 | 🟢 |
| 5 | Estrategia visual | 8.0/10 | 🟢 |
| 6 | CTA | 6.5/10 | 🟡 |
| 7 | Confianza y seguridad | 5.5/10 | 🟡 |
| 8 | Psicología de precios | 5.0/10 | 🟡 |
| 9 | Fricción y abandono | 7.5/10 | 🟢 |

---

## Detalle por pilar

### 1 · AIDA+ (6.2)
- **Attention 8** — El headline *"Firma documentos con biometría, sin tener firma electrónica"* detiene el scroll: nombra el dolor (no tener firma) y el diferenciador en una frase.
- **Interest 8** — Subcopy concreto (3, 4 o 5 firmantes; sin .p12) + 3 chips de valor.
- **Desire 6** — El mockup de trámite con estados (Firmado/Validando/Pendiente) y la sección antes/después construyen deseo, pero la prueba social es débil.
- **Action 6** — "Solicitar demo" es claro pero no urgente.
- **Advocacy 3** — Solo WhatsApp; sin incentivo a referir.

### 2 · Cialdini (3.8) — **PUNTO MÁS DÉBIL**
- **Reciprocidad 2** — No hay lead magnet (ej. *"Modelo de contrato listo para firmar"* o *"Checklist de validez legal"*).
- **Escasez 1** — Sin urgencia ni límite.
- **Autoridad 5** — Respaldo "by Begroup" y Ley de Comercio Electrónico, pero faltan logos de clientes, cifras ("X documentos firmados") y certificaciones.
- **Prueba social 4** — Testimonios sin foto, empresa real ni resultado medible.
- **Simpatía 6** — El avatar se ve reflejado ("equipos que dejaron de perseguir firmas").
- **Compromiso 5** — Micro-compromiso form→WhatsApp correcto.

### 3 · Viaje emocional (7.0)
Sección **Diferencia** ejecuta antes/después de forma explícita y clara (método .p12 vs Firma Transaccional). Falta cerrar el "después" con una visualización de resultado/alivio más emocional.

### 4 · Copywriting (7.0)
Específico y orientado a beneficio. Oportunidad: incorporar palabras neuro-activas ("AHORA", "en minutos", "sin filas", "verificado") en CTAs y subtítulos.

### 5 · Visual (8.0)
Editorial premium: Spectral serif + Inter, paleta royal/cian/verde, jerarquía y aire correctos, mockup en código (sin stock/IA). Mobile y dark section sólidos. Cumple [[feedback-no-ai-cliche-visuals]].

### 6 · CTA (6.5)
"Solicitar demo" / "Hablar con ventas" son específicos pero no urgentes ni con micro-copy de tranquilidad junto al botón ("2 min · sin compromiso"). Falta una variante con verbo+beneficio+urgencia.

### 7 · Confianza (5.5)
Presentes: validez legal, biometría con prueba de vida, geolocalización, auditoría. **Faltan**: logos de clientes/aliados, cifras concretas, sello LOPDP/SSL visible, y testimonios verificables con foto.

### 8 · Precios (5.0)
Modelo Good/Better/Best (Emprende/Empresa/Distribuidor) correcto y honesto (precio→cotización). **Faltan**: anchoring de precio, ejemplo de ROI ("1 trámite presencial cuesta $X; aquí firmas remoto en minutos") y rango orientativo para reducir fricción.

### 9 · Fricción (7.5)
Formulario de 5 campos con solo 2 obligatorios, salida directa a WhatsApp (baja fricción), microcopy *"¿qué pasa después?"* presente, móvil correcto. Mejorable: reducir el primer paso a 3 campos.

---

## TOP 3 ACCIONES (orden de impacto)

1. **Inyectar prueba social y autoridad (Pilar 2/7).** Añadir franja de logos de clientes/aliados + 1 cifra ancla ("+N documentos firmados") + testimonios con foto, nombre, empresa y resultado medible. *Impacto alto, esfuerzo medio.*
2. **Lead magnet de reciprocidad (Pilar 2).** Ofrecer descarga gratis ("Plantilla de contrato lista para firmar" / "Guía de validez legal de la firma transaccional en Ecuador") a cambio del correo → alimenta el embudo. *Impacto alto, esfuerzo medio.*
3. **CTAs con urgencia + microcopy (Pilar 6).** Cambiar a "Agenda tu demo gratis ahora · 2 min, sin compromiso" y añadir banda de escasez honesta (ej. "Activación en 24 h"). *Impacto medio, esfuerzo bajo.*

---

## SEO (resumen — `seo-audit`)
**Implementado:** `<title>` y meta description con keyword principal, canonical, robots index/follow, Open Graph + Twitter Card con `og-image.png` 1200×630, 3× JSON-LD (SoftwareApplication, Organization, FAQPage), HTML semántico, `lang="es-EC"`, favicon SVG.

**Pendiente:**
- `sitemap.xml` y `robots.txt` propios.
- GA4 / Meta Pixel reales (no hay analítica instalada).
- WhatsApp comercial real (placeholder `593990000000` en `src/data.js`).
- Atributos `alt` descriptivos cuando se sumen imágenes reales.
- Considerar página/sección indexable de "preguntas legales" para long-tail ("firma electrónica vs firma transaccional", "validez legal firma biométrica Ecuador").

## Arquitectura del sitio (`site-architecture`)
- Landing **single-page** con anclas (#como-funciona, #diferencia, #funciones, #casos, #planes, #faq, #contacto): jerarquía clara y navegación coherente.
- **Riesgo de orphan page:** vive bajo `/demo-aplicaciones/`. Enlazar desde begroupec.com / firmasecuador.com hacia esta landing y viceversa para transferir autoridad.
- CTA hacia la app real (`begroupec.com/firmas_electronicas/#/login`) presente en header — buen puente al producto.

---

## KPIs a medir tras los cambios
CTR del hero · scroll depth hasta Planes · clics en "Solicitar demo" · leads por WhatsApp · bounce rate móvil · tasa de envío del formulario.

## Tests A/B sugeridos (primero)
1. Headline actual vs *"Que tus clientes firmen sin tener firma electrónica. En minutos."*
2. CTA "Solicitar demo" vs "Agenda tu demo gratis ahora · 2 min".
3. Con vs sin franja de logos/cifra ancla bajo el hero.
