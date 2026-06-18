// Contenido central de la landing "Firma Transaccional" — Firmas Ecuador by Begroup.
// Basado en el módulo real de firma delegada/transaccional (BackFirmasC / FirmasAppFront).

export const CONTACT = {
  email: 'ventas@firmasecuador.com',
  phone: '(02) 276 2790',
  // Número de WhatsApp comercial — reemplazar por el real de ventas.
  whatsapp: '593990000000',
  whatsappMsg:
    'Hola, quiero información sobre la Firma Transaccional (firmar con biometría sin tener firma electrónica).',
  city: 'Santo Domingo, Ecuador',
  parentUrl: 'https://begroupec.com',
  appUrl: 'https://begroupec.com/firmas_electronicas/#/login',
}

export const NAV = [
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'diferencia', label: 'Sin firma .p12' },
  { id: 'funciones', label: 'Funciones' },
  { id: 'casos', label: 'Casos de uso' },
  { id: 'planes', label: 'Planes' },
  { id: 'faq', label: 'Preguntas' },
]

// --- Barra de confianza ---
export const TRUST = [
  'Validez legal en Ecuador',
  'Biometría con prueba de vida',
  'Trazabilidad y auditoría',
  'Geolocalización del firmante',
  'Sin instalar nada',
  'Firma en el navegador',
]

// --- Cómo funciona (3 pasos reales del flujo de invitado) ---
export const STEPS = [
  {
    n: '01',
    title: 'Sube el documento y define firmantes',
    text: 'Carga tu PDF, ubica dónde va cada rúbrica y agrega a las personas que deben firmar con su cédula y correo. Tú, como dueño del trámite, no firmas: gestionas.',
    tag: 'Crear trámite',
  },
  {
    n: '02',
    title: 'Cada firmante recibe un enlace',
    text: 'Enviamos por correo un enlace seguro a cada invitado. Lo abre desde su celular o computadora, sin crear cuenta ni instalar nada. Capturamos su ubicación al ingresar.',
    tag: 'Invitación por enlace',
  },
  {
    n: '03',
    title: 'Firma con biometría y prueba de vida',
    text: 'El firmante valida su identidad con reconocimiento facial y prueba de vida. Al confirmar, el documento queda firmado y se envía a todos por correo con su respaldo legal.',
    tag: 'Validación biométrica',
  },
]

// --- Diferenciador: con vs sin firma .p12 ---
export const COMPARE = {
  before: {
    title: 'El método tradicional con firma .p12',
    points: [
      'Cada firmante necesita comprar su propio certificado .p12.',
      'Instalar archivos y contraseñas en cada dispositivo.',
      'Coordinar por WhatsApp quién firmó y quién falta.',
      'Si una persona no tiene firma, el trámite se detiene.',
    ],
  },
  after: {
    title: 'Con Firma Transaccional',
    points: [
      'Nadie necesita tener firma electrónica para firmar.',
      'Una sola validación biométrica por persona, en el navegador.',
      'Envías un enlace a 3, 4 o 5 firmantes y los sigues en tiempo real.',
      'El trámite avanza aunque tus firmantes nunca hayan usado una firma.',
    ],
  },
}

// --- Funciones (extraídas del backend real) ---
export const FEATURES = [
  {
    icon: 'ScanFace',
    title: 'Biometría con prueba de vida',
    text: 'Verificación de identidad facial con detección de vida antes de firmar. Confirmas quién firma, no solo que se firmó.',
  },
  {
    icon: 'Link2',
    title: 'Invitación multifirmante',
    text: 'Un enlace por firmante. Invita a varias personas a un mismo documento; cada una firma desde su propio dispositivo.',
  },
  {
    icon: 'FileSignature',
    title: 'Rúbrica en posición exacta',
    text: 'Define la página y la posición de cada firma sobre el PDF. La rúbrica queda visible y ubicada donde corresponde.',
  },
  {
    icon: 'MapPin',
    title: 'Geolocalización del firmante',
    text: 'Registramos la ubicación desde la que firma cada persona como evidencia adicional del acto de firma.',
  },
  {
    icon: 'ListChecks',
    title: 'Seguimiento de trámites',
    text: 'Panel con el estado de cada documento: pendiente, en proceso, firmado o rechazado. Sabes al instante quién falta.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Auditoría y trazabilidad',
    text: 'Cada paso queda registrado con fecha, hora e identidad. Reportes de auditoría para sustentar la validez del documento.',
  },
  {
    icon: 'Ban',
    title: 'Rechazo con motivo',
    text: 'Un firmante puede rechazar el documento dejando constancia del motivo, manteniendo el proceso transparente.',
  },
  {
    icon: 'MailCheck',
    title: 'Documento firmado al correo',
    text: 'Al completarse el trámite, todos reciben automáticamente el PDF firmado con su respaldo en su correo.',
  },
  {
    icon: 'Lock',
    title: 'Documentos privados y seguros',
    text: 'Los archivos se almacenan de forma privada y se visualizan mediante enlaces temporales protegidos.',
  },
]

// --- Casos de uso ---
export const CASOS = [
  {
    title: 'Contratos con varias partes',
    text: 'Arrendamientos, prestación de servicios o acuerdos comerciales donde firman cliente, proveedor y testigos sin que todos tengan firma electrónica.',
  },
  {
    title: 'Actas y consentimientos',
    text: 'Actas de reunión, consentimientos informados o autorizaciones que necesitan la firma verificada de varias personas en poco tiempo.',
  },
  {
    title: 'Clientes sin firma electrónica',
    text: 'Tu empresa firma documentos con clientes que nunca han comprado un certificado .p12, sin pedirles trámites previos.',
  },
  {
    title: 'Recursos humanos',
    text: 'Cartas de oferta, anexos de contrato y documentos internos firmados por el colaborador con su identidad verificada.',
  },
  {
    title: 'Estudios jurídicos y contables',
    text: 'Despachos que tramitan firmas de varios representantes y dejan trazabilidad legal completa de cada acto.',
  },
  {
    title: 'Distribuidores Begroup',
    text: 'Ofrece la Firma Transaccional a tu cartera de clientes con tu propio paquete de firmas y panel de seguimiento.',
  },
]

// --- Seguridad / validez (sección oscura) ---
export const SECURITY = [
  { label: 'Identidad', value: 'Biometría facial + prueba de vida' },
  { label: 'Evidencia', value: 'Geolocalización y sello de tiempo' },
  { label: 'Respaldo', value: 'Ley de Comercio Electrónico EC' },
  { label: 'Trazabilidad', value: 'Auditoría completa por trámite' },
]

// --- Planes (modelo real: por cantidad de firmas) ---
export const PLANES = [
  {
    name: 'Emprende',
    desc: 'Para profesionales y pequeños equipos que firman ocasionalmente.',
    highlight: 'Paquete inicial de firmas',
    features: [
      'Firmas transaccionales por paquete',
      'Multifirmante por enlace',
      'Biometría con prueba de vida',
      'Seguimiento de trámites',
    ],
    cta: 'Cotizar paquete',
    featured: false,
  },
  {
    name: 'Empresa',
    desc: 'Para organizaciones con volumen recurrente de documentos.',
    highlight: 'El más solicitado',
    features: [
      'Mayor cantidad de firmas incluidas',
      'Auditoría y reportes',
      'Geolocalización y trazabilidad',
      'Soporte prioritario',
    ],
    cta: 'Hablar con ventas',
    featured: true,
  },
  {
    name: 'Distribuidor',
    desc: 'Revende la Firma Transaccional con tu propia marca y cartera.',
    highlight: 'Programa de distribuidores',
    features: [
      'Paquetes de firmas al por mayor',
      'Panel y precios preferenciales',
      'Capacitación e incentivos',
      'Acompañamiento comercial',
    ],
    cta: 'Ser distribuidor',
    featured: false,
  },
]

// --- FAQ ---
export const FAQ = [
  {
    q: '¿Necesito tener firma electrónica para firmar?',
    a: 'No. Con la Firma Transaccional firmas validando tu identidad con biometría y prueba de vida directamente en el navegador. No necesitas comprar ni instalar un certificado .p12.',
  },
  {
    q: '¿A cuántas personas puedo enviar a firmar un mismo documento?',
    a: 'Puedes invitar a varios firmantes —por ejemplo 3, 4 o 5 personas— en un mismo trámite. Cada uno recibe su propio enlace y firma con su validación biométrica individual.',
  },
  {
    q: '¿Tiene validez legal en Ecuador?',
    a: 'Sí. El proceso se respalda en la Ley de Comercio Electrónico, Firmas y Mensajes de Datos del Ecuador, e incorpora geolocalización, sello de tiempo y auditoría para sustentar cada acto de firma.',
  },
  {
    q: '¿El firmante necesita instalar una aplicación?',
    a: 'No. El firmante abre el enlace que recibe por correo desde su celular o computadora, valida su identidad y firma. No crea cuenta ni instala software.',
  },
  {
    q: '¿Cómo sé quién ya firmó y quién falta?',
    a: 'Desde tu panel ves el estado de cada trámite en tiempo real: pendiente, en proceso, firmado o rechazado, con la fecha y hora de cada firma.',
  },
  {
    q: '¿Cómo se cobra el servicio?',
    a: 'Se trabaja con paquetes por cantidad de firmas. Cada firmante que completa su firma descuenta del paquete contratado. Escríbenos para cotizar el volumen que necesitas.',
  },
]

// --- Testimonios ---
export const TESTIMONIOS = [
  {
    quote:
      'Cerramos contratos con clientes que nunca tuvieron firma electrónica. Les llega el enlace, validan con su rostro y listo.',
    name: 'María Fernanda C.',
    role: 'Gerente comercial, distribuidora',
  },
  {
    quote:
      'Antes perseguíamos firmas por WhatsApp. Ahora veo en el panel quién firmó y quién falta, con respaldo de auditoría.',
    name: 'Jorge A.',
    role: 'Estudio jurídico',
  },
  {
    quote:
      'La prueba de vida nos da tranquilidad: sabemos que firma la persona correcta, no solo que se firmó el documento.',
    name: 'Andrea P.',
    role: 'Talento humano',
  },
]

export const STATS = [
  { value: '0', suffix: '', label: 'certificados .p12 que necesita el firmante' },
  { value: '5', suffix: '+', label: 'firmantes por documento' },
  { value: '100', suffix: '%', label: 'en el navegador, sin instalar' },
  { value: '24/7', suffix: '', label: 'firma desde cualquier lugar' },
]
