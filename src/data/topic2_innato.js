/**
 * Datos pedagógicos: Células y órganos del sistema inmune innato II.
 */

export const SUMMARY_ROWS = [
  {
    tipo: 'Neutrófilos',
    tiempo: 'Primeras horas',
    inmunidad: 'Fagocitosis, trampas extracelulares (NETs)',
    ejemplo: 'Infección bacteriana aguda',
  },
  {
    tipo: 'Macrófagos',
    tiempo: 'Horas a días',
    inmunidad: 'Fagocitosis, presentación antigénica, citocinas',
    ejemplo: 'Infección crónica, limpieza de tejido',
  },
  {
    tipo: 'Células NK',
    tiempo: 'Horas',
    inmunidad: 'Citotoxicidad directa, perforinas y granzimas',
    ejemplo: 'Células infectadas por virus o tumorales',
  },
  {
    tipo: 'Células Dendríticas',
    tiempo: 'Días (activación T)',
    inmunidad: 'Captura de antígenos, migración a ganglios',
    ejemplo: 'Puente entre inmunidad innata y adaptativa',
  },
]

export const CLINICAL_CASES = [
  {
    id: 'innato-1',
    typeLabel: 'Fagocitos Polimorfonucleares',
    shortLabel: 'Neutrófilos',
    title: 'Infección bacteriana aguda de piel',
    narrative:
      'Paciente de 18 años con herida cortante en antebrazo. A los dos días presenta eritema, calor, dolor y exudado purulento. El hemograma muestra leucocitosis a expensas de neutrófilos.',
    questions: [
      {
        id: 'in1-q1',
        prompt: '¿Qué mecanismos utilizan principalmente los neutrófilos en este contexto? (selecciona las aplicables)',
        options: [
          { id: 'a', text: 'Fagocitosis y estallido respiratorio (ROS).', correct: true },
          { id: 'b', text: 'Presentación de antígenos en el ganglio linfático.', correct: false },
          { id: 'c', text: 'Liberación de trampas extracelulares (NETs).', correct: true },
          { id: 'd', text: 'Producción de anticuerpos específicos.', correct: false },
        ],
        explanation: 'Los neutrófilos son fagocitos rápidos que destruyen patógenos mediante ROS y enzimas líticas, y pueden formar NETs. No presentan antígenos ni producen anticuerpos.',
      },
      {
        id: 'in1-q2',
        prompt: 'El exudado purulento (pus) está compuesto principalmente por:',
        options: [
          { id: 'a', text: 'Macrófagos multinucleados.', correct: false },
          { id: 'b', text: 'Neutrófilos muertos, tejido necrótico y bacterias.', correct: true },
          { id: 'c', text: 'Acumulación de linfocitos T vírgenes.', correct: false },
          { id: 'd', text: 'Plasma sin componente celular.', correct: false },
        ],
        explanation: 'El pus es el resultado característico de la muerte masiva de neutrófilos tras el estallido respiratorio y el control bacteriano local.',
      }
    ],
  },
  {
    id: 'innato-2',
    typeLabel: 'Fagocitos Mononucleares',
    shortLabel: 'Macrófagos',
    title: 'Resolución y control crónico',
    narrative:
      'Tras varias semanas de una infección pulmonar por un patógeno intracelular, se observa en la biopsia la presencia de células gigantes multinucleadas y granulomas.',
    questions: [
      {
        id: 'in2-q1',
        prompt: '¿Qué tipo celular es el principal responsable de esta estructura granulomatosa?',
        options: [
          { id: 'a', text: 'Neutrófilos.', correct: false },
          { id: 'b', text: 'Macrófagos activados (células epitelioides).', correct: true },
          { id: 'c', text: 'Células NK.', correct: false },
          { id: 'd', text: 'Linfocitos B secretores de IgE.', correct: false },
        ],
        explanation: 'Los macrófagos, al no poder eliminar el patógeno, se diferencian en células epitelioides y células gigantes para contener la infección, formando granulomas.',
      },
      {
        id: 'in2-q2',
        prompt: 'Funciones clave de los macrófagos incluyen:',
        options: [
          { id: 'a', text: 'Fagocitosis de restos celulares.', correct: true },
          { id: 'b', text: 'Producción masiva de perforinas circulantes.', correct: false },
          { id: 'c', text: 'Secreción de citocinas proinflamatorias como IL-1 y TNF-alfa.', correct: true },
          { id: 'd', text: 'Presentación antigénica a linfocitos T.', correct: true },
        ],
        explanation: 'Los macrófagos fagocitan, producen citocinas y actúan como CPA (células presentadoras de antígeno).',
      }
    ],
  },
  {
    id: 'innato-3',
    typeLabel: 'Inmunidad Antiviral',
    shortLabel: 'Células NK',
    title: 'Defensa frente a infección viral temprana',
    narrative:
      'Paciente expuesto a un virus respiratorio. En las primeras 48 horas, antes de la activación de la inmunidad adaptativa, un grupo de células linfoides interviene eliminando células infectadas que han regulado a la baja el CMH de clase I.',
    questions: [
      {
        id: 'in3-q1',
        prompt: '¿Qué célula es responsable de esta acción temprana?',
        options: [
          { id: 'a', text: 'Linfocitos T citotóxicos CD8+.', correct: false },
          { id: 'b', text: 'Células Natural Killer (NK).', correct: true },
          { id: 'c', text: 'Eosinófilos.', correct: false },
          { id: 'd', text: 'Células dendríticas foliculares.', correct: false },
        ],
        explanation: 'Las células NK reconocen la ausencia de CMH I (señal de "falta de lo propio") y destruyen las células infectadas o tumorales tempranamente.',
      },
      {
        id: 'in3-q2',
        prompt: '¿Qué mecanismo ejecutor utilizan las células NK?',
        options: [
          { id: 'a', text: 'Fagocitosis.', correct: false },
          { id: 'b', text: 'Liberación de granzimas y perforinas.', correct: true },
          { id: 'c', text: 'Secreción de anticuerpos neutralizantes.', correct: false },
          { id: 'd', text: 'Inducción de apoptosis por el receptor Fas y FasL.', correct: true },
        ],
        explanation: 'Al igual que los T CD8+, las NK inducen apoptosis mediante granzimas/perforinas y la vía Fas/FasL.',
      }
    ],
  },
  {
    id: 'innato-4',
    typeLabel: 'Puente Adaptativo',
    shortLabel: 'Dendríticas',
    title: 'Inicio de la respuesta específica',
    narrative:
      'Se inyecta una vacuna en el músculo deltoides. Unas células residentes capturan el antígeno viral y viajan por los vasos linfáticos aferentes hasta el ganglio axilar para activar a los linfocitos vírgenes.',
    questions: [
      {
        id: 'in4-q1',
        prompt: '¿Qué célula realiza principalmente esta función?',
        options: [
          { id: 'a', text: 'Célula de Kupffer.', correct: false },
          { id: 'b', text: 'Célula dendrítica.', correct: true },
          { id: 'c', text: 'Linfocito B.', correct: false },
          { id: 'd', text: 'Basófilo.', correct: false },
        ],
        explanation: 'Las células dendríticas son las células presentadoras de antígeno profesionales por excelencia para activar linfocitos T vírgenes.',
      },
      {
        id: 'in4-q2',
        prompt: 'Durante su maduración hacia el ganglio, la célula dendrítica experimenta los siguientes cambios:',
        options: [
          { id: 'a', text: 'Aumenta su capacidad fagocítica al máximo.', correct: false },
          { id: 'b', text: 'Aumenta la expresión de CMH I y II.', correct: true },
          { id: 'c', text: 'Disminuye su capacidad de captura antigénica.', correct: true },
          { id: 'd', text: 'Aumenta la expresión de moléculas coestimuladoras (CD80/CD86).', correct: true },
        ],
        explanation: 'Al madurar, pierden capacidad fagocítica pero se optimizan para la presentación, aumentando el CMH y moléculas coestimuladoras.',
      }
    ],
  }
]

export const FINAL_QUIZ = [
  {
    id: 'in-fq1',
    prompt: 'Primera célula en llegar de forma masiva al sitio de inflamación aguda bacteriana:',
    options: [
      { id: 'a', text: 'Neutrófilo', correct: true },
      { id: 'b', text: 'Macrófago', correct: false },
      { id: 'c', text: 'Linfocito B', correct: false },
      { id: 'd', text: 'Mastocito', correct: false },
    ],
    explanation: 'El neutrófilo responde rápidamente a quimiocinas (ej. IL-8) en horas.',
  },
  {
    id: 'in-fq2',
    prompt: 'Receptor celular fundamental en el reconocimiento de Patrones Moleculares Asociados a Patógenos (PAMPs):',
    options: [
      { id: 'a', text: 'TCR', correct: false },
      { id: 'b', text: 'Receptores tipo Toll (TLR)', correct: true },
      { id: 'c', text: 'BCR', correct: false },
      { id: 'd', text: 'Receptor de transferrina', correct: false },
    ],
    explanation: 'Los TLRs (Toll-like receptors) son PRRs esenciales en macrófagos y dendríticas.',
  },
  {
    id: 'in-fq3',
    prompt: 'Selecciona las células que son fagocitos profesionales:',
    options: [
      { id: 'a', text: 'Células NK', correct: false },
      { id: 'b', text: 'Macrófagos', correct: true },
      { id: 'c', text: 'Neutrófilos', correct: true },
      { id: 'd', text: 'Linfocitos T', correct: false },
    ],
    explanation: 'Macrófagos y neutrófilos son los fagocitos por excelencia del sistema inmune.',
  },
  {
    id: 'in-fq4',
    prompt: 'Función primordial de las células dendríticas inmaduras en los tejidos:',
    options: [
      { id: 'a', text: 'Producción de anticuerpos.', correct: false },
      { id: 'b', text: 'Lisis de células tumorales.', correct: false },
      { id: 'c', text: 'Captura constante de antígenos ambientales.', correct: true },
      { id: 'd', text: 'Formación del estroma secundario.', correct: false },
    ],
    explanation: 'En los tejidos, en estado inmaduro, tienen alta capacidad de macropinocitosis y fagocitosis.',
  },
  {
    id: 'in-fq5',
    prompt: 'Verdadero sobre la célula NK:',
    options: [
      { id: 'a', text: 'Maduran en el timo.', correct: false },
      { id: 'b', text: 'Poseen receptores activadores e inhibidores.', correct: true },
      { id: 'c', text: 'Matan células que carecen de CMH clase I.', correct: true },
      { id: 'd', text: 'Pertenecen a la inmunidad adaptativa.', correct: false },
    ],
    explanation: 'Las NK son linfocitos de la inmunidad innata. Su inhibición depende de reconocer el CMH I propio.',
  }
]

export function getTotalQuestionCount() {
  const caseQs = CLINICAL_CASES.reduce((n, c) => n + c.questions.length, 0)
  return caseQs + FINAL_QUIZ.length
}

export const RESOURCES = [
  {
    id: 'img-1',
    type: 'image',
    title: 'Fagocitosis por Macrófago',
    description: 'Ilustración 3D microscópica de un macrófago activado fagocitando bacterias invasoras.',
    url: '/assets/innato_macrophage.png'
  },
  {
    id: 'link-1',
    type: 'book',
    title: 'Presentación de Inmunología Innata UMSA',
    description: 'Material de estudio sobre las células del sistema inmunitario innato.',
    url: 'https://es.slideshare.net/slideshow/presentacion-de-inmunologia-innata-umsa-pdf/281079867'
  },
  {
    id: 'link-2',
    type: 'book',
    title: 'Sistema Inmunitario - Algor Education',
    description: 'Apuntes de Biología a nivel universitario.',
    url: 'https://library.algoreducation.com/es/docs/9273/sistema-inmunitario-biologia-universidad'
  },
  {
    id: 'link-3',
    type: 'book',
    title: 'Inmunopíldoras (SEI)',
    description: 'Recursos educativos de la Sociedad Española de Inmunología.',
    url: 'https://www.inmunologia.org/index.php/educacion-sei/inmunopildoras'
  }
]
