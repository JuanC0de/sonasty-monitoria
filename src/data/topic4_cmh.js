/**
 * Datos pedagógicos: Procesamiento y presentacion antigénica I CMH.
 */

export const SUMMARY_ROWS = [
  {
    tipo: 'CMH Clase I',
    tiempo: 'Presentación endógena',
    inmunidad: 'Linfocitos T CD8+',
    ejemplo: 'Proteínas virales, tumorales',
  },
  {
    tipo: 'CMH Clase II',
    tiempo: 'Presentación exógena',
    inmunidad: 'Linfocitos T CD4+',
    ejemplo: 'Bacterias fagocitadas, toxinas',
  },
  {
    tipo: 'Vía Endógena (CMH I)',
    tiempo: 'Proteasoma → TAP → RE',
    inmunidad: 'Carga del péptido en retículo endoplásmico',
    ejemplo: 'Todas las células nucleadas',
  },
  {
    tipo: 'Vía Exógena (CMH II)',
    tiempo: 'Endosoma → Lisosoma',
    inmunidad: 'Cadena Invariante, CLIP, HLA-DM',
    ejemplo: 'Células presentadoras profesionales (Dendríticas, Macrófagos, B)',
  },
]

export const CLINICAL_CASES = [
  {
    id: 'cmh-1',
    typeLabel: 'Vía Endógena',
    shortLabel: 'CMH I',
    title: 'Infección celular por influenza',
    narrative:
      'Una célula del epitelio respiratorio está produciendo proteínas virales de influenza en su citosol. Debe notificar al sistema inmune que está infectada para ser destruida.',
    questions: [
      {
        id: 'cmh1-q1',
        prompt: '¿Cómo son procesadas las proteínas virales citosólicas?',
        options: [
          { id: 'a', text: 'Degradación por el proteasoma en el citosol.', correct: true },
          { id: 'b', text: 'Degradación por lisosomas ácidos.', correct: false },
          { id: 'c', text: 'Transporte intacto a la membrana celular.', correct: false },
          { id: 'd', text: 'Fagocitosis y procesamiento extracelular.', correct: false },
        ],
        explanation: 'Las proteínas sintetizadas endógenamente son marcadas con ubicuitina y degradadas en péptidos por el proteasoma citosólico.',
      },
      {
        id: 'cmh1-q2',
        prompt: '¿Cómo llegan los péptidos resultantes al sitio de carga del CMH?',
        options: [
          { id: 'a', text: 'Transporte a través de proteínas TAP hacia el retículo endoplásmico.', correct: true },
          { id: 'b', text: 'Difusión pasiva hacia el lisosoma.', correct: false },
          { id: 'c', text: 'Unión a la cadena invariante.', correct: false },
          { id: 'd', text: 'Transporte a través de los poros nucleares.', correct: false },
        ],
        explanation: 'El Transportador Asociado al Procesamiento Antigénico (TAP) traslada los péptidos desde el citosol a la luz del retículo endoplásmico para cargarse en el CMH I.',
      }
    ],
  },
  {
    id: 'cmh-2',
    typeLabel: 'Vía Exógena',
    shortLabel: 'CMH II',
    title: 'Fagocitosis de estreptococo',
    narrative:
      'Un macrófago alveolar fagocita una bacteria. Tras la lisis bacteriana, debe presentar sus antígenos a los linfocitos cooperadores para coordinar la respuesta inmunitaria.',
    questions: [
      {
        id: 'cmh2-q1',
        prompt: 'Seleccione las afirmaciones correctas sobre este tipo de procesamiento:',
        options: [
          { id: 'a', text: 'Ocurre en compartimentos vesiculares ácidos (endolisosomas).', correct: true },
          { id: 'b', text: 'Los péptidos se cargan en moléculas de CMH de Clase II.', correct: true },
          { id: 'c', text: 'Se requiere de la proteína TAP para el transporte del péptido bacteriano.', correct: false },
          { id: 'd', text: 'Presentará los antígenos a linfocitos T CD8+.', correct: false },
        ],
        explanation: 'La vía exógena involucra endolisosomas, no requiere TAP, y carga péptidos en CMH II para activar a linfocitos T CD4+ (cooperadores).',
      },
      {
        id: 'cmh2-q2',
        prompt: '¿Qué impide que el CMH II se cargue prematuramente en el retículo endoplásmico con proteínas propias?',
        options: [
          { id: 'a', text: 'La falta de péptidos en el RE.', correct: false },
          { id: 'b', text: 'La cadena invariante (Ii), que ocupa la hendidura de unión.', correct: true },
          { id: 'c', text: 'Una molécula TAP inhibitoria.', correct: false },
          { id: 'd', text: 'El pH alcalino del RE.', correct: false },
        ],
        explanation: 'La cadena invariante ensambla con CMH II en el RE, bloqueando su sitio de unión hasta que llega al compartimento lisosomal donde es escindida (quedando CLIP).',
      }
    ],
  },
  {
    id: 'cmh-3',
    typeLabel: 'Presentación Cruzada',
    shortLabel: 'Cruzada',
    title: 'Activación de T CD8+ por virus que no infecta a la CPA',
    narrative:
      'Un virus infecta únicamente queratinocitos de la piel, pero se observa una fuerte respuesta de linfocitos T CD8+ antivirales, activados en los ganglios linfáticos por células dendríticas.',
    questions: [
      {
        id: 'cmh3-q1',
        prompt: '¿Qué mecanismo explica que una célula dendrítica no infectada active a T CD8+?',
        options: [
          { id: 'a', text: 'Presentación cruzada (cross-presentation).', correct: true },
          { id: 'b', text: 'Secreción de anticuerpos por la célula dendrítica.', correct: false },
          { id: 'c', text: 'Mutación del receptor T.', correct: false },
          { id: 'd', text: 'Unión directa del virus al ganglio.', correct: false },
        ],
        explanation: 'Las células dendríticas son capaces de fagocitar antígenos exógenos y desviar los péptidos hacia la vía del CMH I para activar linfocitos T CD8+ vírgenes (presentación cruzada).',
      }
    ],
  }
]

export const FINAL_QUIZ = [
  {
    id: 'cmh-fq1',
    prompt: 'El Complejo Mayor de Histocompatibilidad de Clase I (CMH I) se expresa en:',
    options: [
      { id: 'a', text: 'Exclusivamente en macrófagos y linfocitos.', correct: false },
      { id: 'b', text: 'Todas las células nucleadas del organismo.', correct: true },
      { id: 'c', text: 'Solo en eritrocitos maduros.', correct: false },
      { id: 'd', text: 'Solamente en el timo.', correct: false },
    ],
    explanation: 'Cualquier célula nucleada puede ser infectada o mutar, por lo que casi todas expresan CMH I para ser evaluadas por linfocitos CD8+.',
  },
  {
    id: 'cmh-fq2',
    prompt: 'Función del complejo HLA-DM:',
    options: [
      { id: 'a', text: 'Facilita el intercambio de CLIP por el péptido antigénico en el CMH II.', correct: true },
      { id: 'b', text: 'Transporta péptidos virales al RE.', correct: false },
      { id: 'c', text: 'Forma parte estructural de la cadena alfa del CMH I.', correct: false },
      { id: 'd', text: 'Degrada la cadena invariante inicialmente.', correct: false },
    ],
    explanation: 'HLA-DM (y en menor medida HLA-DO) remueve CLIP (resto de la cadena invariante) para permitir que el péptido exógeno de alta afinidad ocupe la hendidura del CMH II.',
  },
  {
    id: 'cmh-fq3',
    prompt: 'Moléculas clásicas de CMH II en humanos (HLA):',
    options: [
      { id: 'a', text: 'HLA-A, HLA-B, HLA-C', correct: false },
      { id: 'b', text: 'HLA-DP, HLA-DQ, HLA-DR', correct: true },
      { id: 'c', text: 'HLA-E, HLA-G', correct: false },
      { id: 'd', text: 'TAP-1, TAP-2', correct: false },
    ],
    explanation: 'A, B y C son genes clásicos de CMH I. DP, DQ y DR codifican las cadenas alfa y beta del CMH II.',
  },
  {
    id: 'cmh-fq4',
    prompt: 'La hendidura del CMH I admite péptidos de tamaño:',
    options: [
      { id: 'a', text: 'Aproximadamente 8 a 10 aminoácidos, de forma cerrada en los extremos.', correct: true },
      { id: 'b', text: '13 a 24 aminoácidos, desbordando los extremos.', correct: false },
      { id: 'c', text: 'Proteínas enteras sin escindir.', correct: false },
      { id: 'd', text: 'Secuencias de lípidos.', correct: false },
    ],
    explanation: 'La estructura tridimensional del CMH I tiene una hendidura cerrada, admitiendo péptidos cortos. El CMH II tiene hendidura abierta, admitiendo péptidos más largos.',
  },
  {
    id: 'cmh-fq5',
    prompt: 'La beta-2-microglobulina está asociada estructuralmente a:',
    options: [
      { id: 'a', text: 'CMH de Clase I.', correct: true },
      { id: 'b', text: 'CMH de Clase II.', correct: false },
      { id: 'c', text: 'TCR alfa/beta.', correct: false },
      { id: 'd', text: 'Anticuerpos IgA.', correct: false },
    ],
    explanation: 'La beta-2-microglobulina no es codificada en el complejo HLA pero es esencial para la estabilización y expresión de la cadena alfa del CMH I.',
  }
]

export function getTotalQuestionCount() {
  const caseQs = CLINICAL_CASES.reduce((n, c) => n + c.questions.length, 0)
  return caseQs + FINAL_QUIZ.length
}

export const RESOURCES = [
  {
    id: 'img-3',
    type: 'image',
    title: 'Sinapsis Inmunológica',
    description: 'Célula dendrítica presentando un péptido antigénico a un linfocito T.',
    url: '/assets/t_cell_activation.png'
  },
  {
    id: 'link-1',
    type: 'book',
    title: 'Curso Inmunología - Presentación Antigénica',
    description: 'Diapositivas y esquemas detallados de procesamiento.',
    url: 'https://es.slideshare.net/slideshow/curso-inmunologia-09presentacion-antigenica/45176989?nway-content_model'
  },
  {
    id: 'link-2',
    type: 'book',
    title: 'Inmunología de Rojas (17a Edición)',
    description: 'PDF del libro completo con capítulos esenciales de CMH y antígenos.',
    url: 'https://transparente.med.ucc.edu.ar/wp-content/uploads/2020/09/Inmunologia_de_Rojas_17e_20190612_116259.pdf'
  }
]
