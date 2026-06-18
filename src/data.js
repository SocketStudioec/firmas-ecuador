// Contenido central de la landing "Firma Transaccional" — Firmas Ecuador by Begroup.
// Basado en el módulo real de firma delegada/transaccional (BackFirmasC / FirmasAppFront).

export const CONTACT = {
  email: 'ventas@firmasecuador.com',
  phone: '(02) 276 2790',
  // Número de WhatsApp comercial — reemplazar por el real de ventas.
  whatsapp: '593990000000',
  whatsappMsg:
    'Hola, quiero información sobre la Firma Transaccional (firmar con biometría sin tener firma electrónica).',
  whatsappDist:
    'Hola, soy distribuidor (o quiero serlo) y me interesa comprar blocs de Firma Transaccional para revender.',
  city: 'Santo Domingo, Ecuador',
  parentUrl: 'https://begroupec.com',
  appUrl: 'https://begroupec.com/firmas_electronicas/#/login',
}

export const NAV = [
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'diferencia', label: 'Sin firma .p12' },
  { id: 'funciones', label: 'Funciones' },
  { id: 'casos', label: 'Casos de uso' },
  { id: 'precios', label: 'Precios' },
  { id: 'distribuidores', label: 'Distribuidores' },
  { id: 'faq', label: 'Preguntas' },
]

// --- Pilares de marca (be Grupo Empresarial / Begroup) ---
export const PILLARS = [
  { icon: 'ShieldCheck', title: 'Seguridad y confianza', text: 'Identidad verificada con biometría y prueba de vida en cada firma.' },
  { icon: 'FileSignature', title: 'Cumplimiento legal', text: 'Respaldo en la Ley de Comercio Electrónico, Firmas y Mensajes de Datos.' },
  { icon: 'Clock', title: 'Eficiencia en cada transacción', text: 'Del documento a varias firmas en minutos, sin filas ni trámites previos.' },
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

// --- Casos de uso (reales: contadores, abogados, finiquitos, contratos, actas) ---
export const CASOS = [
  {
    title: 'Finiquitos laborales',
    text: 'El trabajador firma su finiquito o acta de salida con identidad verificada, desde su celular, sin necesidad de tener firma electrónica.',
  },
  {
    title: 'Contratos con varias partes',
    text: 'Arrendamientos, prestación de servicios o acuerdos comerciales donde firman cliente, proveedor y testigos —aunque ninguno tenga certificado .p12.',
  },
  {
    title: 'Actas y autorizaciones',
    text: 'Actas de reunión, autorizaciones y consentimientos que necesitan la firma verificada de varias personas en poco tiempo.',
  },
  {
    title: 'Estudios contables',
    text: 'Contadores que hacen firmar a sus clientes documentos, declaraciones y autorizaciones sin pedirles trámites previos de firma.',
  },
  {
    title: 'Estudios jurídicos',
    text: 'Abogados que tramitan firmas de varios representantes y dejan trazabilidad legal completa de cada acto de firma.',
  },
  {
    title: 'Recursos humanos',
    text: 'Cartas de oferta, anexos de contrato y documentos internos firmados por el colaborador con su identidad verificada.',
  },
]

// --- Seguridad / validez (sección oscura) ---
export const SECURITY = [
  { label: 'Identidad', value: 'Biometría facial + prueba de vida' },
  { label: 'Evidencia', value: 'Geolocalización y sello de tiempo' },
  { label: 'Respaldo', value: 'Ley de Comercio Electrónico EC' },
  { label: 'Trazabilidad', value: 'Auditoría completa por trámite' },
]

// --- Precios reales: blocs de firmas transaccionales (PVP incluido IVA) ---
// El distribuidor compra el bloc y revende cada firma a su cartera.
export const PRICING = {
  note: 'PVP incluido IVA. Cada firma completada descuenta del bloc. Las firmas no caducan mientras tu cuenta esté activa.',
  baseUnit: 2.5, // $/firma del Bloc 10, usado para calcular el ahorro
  blocs: [
    { firmas: 10, precio: 25, badge: null, featured: false },
    { firmas: 20, precio: 48, badge: null, featured: false },
    { firmas: 30, precio: 66, badge: null, featured: false },
    { firmas: 50, precio: 100, badge: 'El más vendido', featured: true },
    { firmas: 100, precio: 190, badge: 'Mejor precio por firma', featured: false },
  ],
}

// --- Programa de distribuidores ---
export const DISTRIBUTOR = {
  title: 'Compra blocs, revende firmas.',
  subtitle:
    'La Firma Transaccional es un producto pensado para distribuidores. Compras un bloc al por mayor, defines tu precio de venta y lo ofreces a tu cartera de contadores, abogados y empresas.',
  points: [
    { icon: 'Users', title: 'Tu propia cartera', text: 'Vende a contadores, estudios jurídicos, RR.HH. y empresas que firman finiquitos, contratos y actas.' },
    { icon: 'ListChecks', title: 'Panel de control', text: 'Gestiona tus blocs, trámites y firmas restantes desde un solo lugar, con seguimiento en tiempo real.' },
    { icon: 'ShieldCheck', title: 'Margen sin inventario', text: 'No manejas certificados ni stock físico: compras firmas, las revendes y solo se descuentan al usarse.' },
  ],
  cta: 'Quiero ser distribuidor',
}

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
    a: 'Por blocs de firmas. Compras un bloc (10, 20, 30, 50 o 100 firmas) y cada firma completada lo descuenta. Los precios incluyen IVA y van desde $25 el Bloc 10. A mayor bloc, menor precio por firma.',
  },
  {
    q: '¿Puedo revender la Firma Transaccional?',
    a: 'Sí. Es un producto pensado para distribuidores: compras blocs al por mayor, defines tu precio de venta y lo ofreces a tu cartera (contadores, abogados, empresas). Escríbenos para unirte al programa de distribuidores.',
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
