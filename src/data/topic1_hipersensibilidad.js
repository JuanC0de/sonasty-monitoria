/**
 * Datos pedagógicos embebidos: 4 tipos de hipersensibilidad (Gell y Coombs).
 * Cada opción marcada con correct: true forma el conjunto de respuestas válidas.
 */

export const SUMMARY_ROWS = [
  {
    tipo: 'I (inmediata)',
    tiempo: 'Minutos',
    inmunidad: 'IgE, mastocitos / basófilos',
    ejemplo: 'Anafilaxia, rinitis alérgica, asma alérgica',
  },
  {
    tipo: 'II (citotóxica)',
    tiempo: 'Horas',
    inmunidad: 'IgG/IgM, complemento, citotoxicidad celular',
    ejemplo: 'EHRN, anemia hemolítica autoinmune',
  },
  {
    tipo: 'III (complejos inmunes)',
    tiempo: 'Horas',
    inmunidad: 'Complejos Ag‑Ac, complemento, neutrófilos',
    ejemplo: 'Enfermedad del suero, LES (nefritis)',
  },
  {
    tipo: 'IV (retardada)',
    tiempo: '24–72 h',
    inmunidad: 'Linfocitos T, macrófagos',
    ejemplo: 'Prueba de tuberculina, dermatitis de contacto',
  },
]

export const CLINICAL_CASES = [
  {
    id: 'hs1',
    typeLabel: 'Hipersensibilidad tipo I',
    shortLabel: 'Tipo I',
    title: 'Reacción tras ingesta de maní',
    narrative:
      'Estudiante de 22 años, sin antecedentes de interés, desarrolla urticaria generalizada, mareo, sensación de “garganta cerrada” y presión arterial baja a los 10 minutos de comer un postre con maní. Había tolerado el mismo alimento en el pasado.',
    questions: [
      {
        id: 'hs1-q1',
        prompt:
          'Selecciona los mecanismos inmunológicos que mejor explican esta presentación (elige todas las que apliquen).',
        options: [
          { id: 'a', text: 'Fijación de IgE a receptores de membrana en mastocitos y basófilos.', correct: true },
          { id: 'b', text: 'Degranulación rápida con liberación de histamina y otros mediadores.', correct: true },
          { id: 'c', text: 'Depósito predominante de complejos inmunes en la membrana basal glomerular.', correct: false },
          { id: 'd', text: 'Activación de linfocitos T CD4 con aparición típica a 48–72 horas.', correct: false },
        ],
        explanation:
          'La anafilaxis alimentaria tipo I se inicia por sensibilización con IgE; el reencuentro con el antígeno provoca degranulación masiva en minutos. No depende de complejos circulantes ni de una respuesta T retardada.',
      },
      {
        id: 'hs1-q2',
        prompt: '¿Qué marco temporal es el más característico de este tipo de hipersensibilidad?',
        options: [
          { id: 'a', text: 'Minutos tras la exposición.', correct: true },
          { id: 'b', text: 'Solo después de 1–2 semanas de exposición continua.', correct: false },
          { id: 'c', text: '24–72 h sin antecedente inmediato de síntomas.', correct: false },
          { id: 'd', text: 'Meses, al ritmo de fibrosis crónica.', correct: false },
        ],
        explanation:
          'El tipo I es inmediato: síntomas suelen aparecer en minutos, aunque en algunos casos pueden prolongarse en fase bifásica.',
      },
      {
        id: 'hs1-q3',
        prompt: 'Patrones clínicos típicos asociados al tipo I incluyen (selecciona lo correcto):',
        options: [
          { id: 'a', text: 'Rinitis alérgica y urticaria aguda.', correct: true },
          { id: 'b', text: 'Anafilaxia con compromiso hemodinámico o respiratorio.', correct: true },
          { id: 'c', text: 'Dermatitis de contacto solo por linfocitos T, sin IgE.', correct: false },
          { id: 'd', text: 'Rechazo agudo de trasplante mediado exclusivamente por IgM.', correct: false },
        ],
        explanation:
          'Manifestaciones mucocutáneas y sistémicas mediadas por IgE son el núcleo clínico del tipo I. La dermatitis de contacto clásica es tipo IV.',
      },
    ],
  },
  {
    id: 'hs2',
    typeLabel: 'Hipersensibilidad tipo II',
    shortLabel: 'Tipo II',
    title: 'Anemia hemolítica autoinmune',
    narrative:
      'Mujer de 35 años presenta astenia, ictericia leve y esplenomegalia. El hemograma muestra anemia con reticulocitosis; la prueba directa de antiglobulina (Coombs) es positiva para IgG y C3 en eritrocitos.',
    questions: [
      {
        id: 'hs2-q1',
        prompt: '¿Qué afirmaciones describen mejor el mecanismo del tipo II en este contexto?',
        options: [
          { id: 'a', text: 'Anticuerpos dirigidos contra antígenos propios en la superficie eritrocitaria.', correct: true },
          { id: 'b', text: 'Lesión celular por citotoxicidad dependiente de anticuerpo (macrofagos / NK).', correct: true },
          { id: 'c', text: 'Reacción exclusivamente mediada por degranulación de mastocitos en minutos.', correct: false },
          { id: 'd', text: 'Granulomas epitelioides sin participación relevante de anticuerpos.', correct: false },
        ],
        explanation:
          'El tipo II (citotóxico) implica anticuerpos contra antígenos de membrana y destrucción celular, con frecuente participación del complemento o fagocitosis esplénica.',
      },
      {
        id: 'hs2-q2',
        prompt: 'Hallazgos inmunológicos coherentes con el tipo II incluyen:',
        options: [
          { id: 'a', text: 'Consumo o fijación de complemento en superficie celular.', correct: true },
          { id: 'b', text: 'Anticuerpos IgG o IgM unidos al blanco celular.', correct: true },
          { id: 'c', text: 'Únicamente IL‑4 e IgE sin citólisis.', correct: false },
          { id: 'd', text: 'Infiltrado linfocitario puramente retardado sin anticuerpos.', correct: false },
        ],
        explanation:
          'Los mecanismos citotóxicos clásicos involucran inmunoglobulinas fijadas al antígeno y, a menudo, cascada del complemento u opsoniación.',
      },
      {
        id: 'hs2-q3',
        prompt: 'Un ejemplo paradigmático **distinto** de este caso pero del mismo tipo es:',
        options: [
          { id: 'a', text: 'Enfermedad hemolítica del recién nacido por anticuerpos maternos anti‑Rh.', correct: true },
          { id: 'b', text: 'Anafilaxia luego de antibiótico por IgE.', correct: false },
          { id: 'c', text: 'Dermatitis alérgicas de contacto por níquel (48 h).', correct: false },
          { id: 'd', text: 'Nefropatía por complejos en “túbulos y cúpula” típicos del LES.', correct: false },
        ],
        explanation:
          'EHRN y AHAI comparten lógica de anticuerpos contra superficie celular con daño celular. Anafilaxia es tipo I; dermatitis de contacto clásica, tipo IV; nefropatía inmune compleja se alinea más con tipo III.',
      },
    ],
  },
  {
    id: 'hs3',
    typeLabel: 'Hipersensibilidad tipo III',
    shortLabel: 'Tipo III',
    title: 'Fiebre y artralgias tras suero heterólogo',
    narrative:
      'Paciente de 50 años recibe antitoxina equina por sospecha de tétanos. A la semana presenta fiebre, artralgias, adenopatías y exantema maculopapular. Función renal conservada inicialmente.',
    questions: [
      {
        id: 'hs3-q1',
        prompt: 'Mecanismos centrales del tipo III en situaciones como la enfermedad del suero:',
        options: [
          { id: 'a', text: 'Formación de complejos antígeno‑anticuerpo solubles circulantes.', correct: true },
          { id: 'b', text: 'Activación del complemento y reclutamiento neutrófilo con daño tisular.', correct: true },
          { id: 'c', text: 'Degranulación mastocítica exclusiva en los primeros 15 minutos.', correct: false },
          { id: 'd', text: 'Citólisis exclusiva por NK sin precipitación de complejos.', correct: false },
        ],
        explanation:
          'El tipo III se asocia a complejos solubles, depósito o circulación patológica y daño por inflamación mediada por complemento y neutrófilos.',
      },
      {
        id: 'hs3-q2',
        prompt: '¿Cuál de estos escenarios encaja **mejor** con tipo III?',
        options: [
          { id: 'a', text: 'Síndrome semejante a enfermedad del suero por fármaco o antisuero.', correct: true },
          { id: 'b', text: 'Glomerulonefritis con depósito subendotelial de complejos (p. ej., asociado a LES).', correct: true },
          { id: 'c', text: 'Reacción cutánea retardada a la prueba de tuberculina pura.', correct: false },
          { id: 'd', text: 'Urticaria precoz tras administración intravenosa de contraste sin mecanismo autoinmune complejo.', correct: false },
        ],
        explanation:
          'Enfermedad del suero y nefropatías por complejos inmunes ilustran el tipo III. La PPD positiva clásica es tipo IV; urticaria precoz inmediata se orienta a tipo I, no a III.',
      },
      {
        id: 'hs3-q3',
        prompt: 'Respecto al tiempo de inicio clínico en muchas formas de tipo III:',
        options: [
          { id: 'a', text: 'Suele ser de horas a unos días tras la exposición, no minutos como la anafilaxia clásica.', correct: true },
          { id: 'b', text: 'Siempre 4–6 horas exactas, nunca antes ni después.', correct: false },
          { id: 'c', text: 'Siempre 3–4 semanas, obligatoriamente.', correct: false },
          { id: 'd', text: 'Idéntico al de la hipersensibilidad retardada celular pura.', correct: false },
        ],
        explanation:
          'Las respuestas por complejos suelen desarrollarse tras un lapso que permite formación y depósito de complejos; varía según antígeno y contexto, pero no es el patrón “minutos” del tipo I ni el “días exclusivos” del IV.',
      },
    ],
  },
  {
    id: 'hs4',
    typeLabel: 'Hipersensibilidad tipo IV',
    shortLabel: 'Tipo IV',
    title: 'Eccema vesicular tras joyería de níquel',
    narrative:
      'Enfermera de 28 años describe eritema pruriginoso lineal en muñeca 2 días después de usar un reloj nuevo. Las lesiones evolucionan a pequeñas vesículas. No hay shock ni angioedema agudo.',
    questions: [
      {
        id: 'hs4-q1',
        prompt: 'Elementos inmunológicos típicos del tipo IV (retardada):',
        options: [
          { id: 'a', text: 'Linfocitos T sensibilizados liberan citoquinas y reclutan inflamación local.', correct: true },
          { id: 'b', text: 'Macrofagos y células dendríticas participan en la fase efectora.', correct: true },
          { id: 'c', text: 'Dependencia exclusiva de IgE unida a mastocitos para el prurito inicial.', correct: false },
          { id: 'd', text: 'Daño exclusivamente por complejos inmunoglobulina‑complemento en piel.', correct: false },
        ],
        explanation:
          'El tipo IV es mediado por células; la presentación del antígeno y la respuesta T explican el retraso. Ni IgE ni complejos circulantes son el eje principal en la dermatitis de contacto alérgica clásica.',
      },
      {
        id: 'hs4-q2',
        prompt: 'Marco temporal más característico de este grupo:',
        options: [
          { id: 'a', text: '24–72 horas tras reexposición en un sitio sensibilizado.', correct: true },
          { id: 'b', text: '2–3 minutos con hipotensión súbita en todos los casos.', correct: false },
          { id: 'c', text: '12 horas en todos los pacientes, sin excepción.', correct: false },
          { id: 'd', text: 'Cronificación exclusiva sin fase aguda.', correct: false },
        ],
        explanation:
          'La hipersensibilidad retardada se manifiesta típicamente después de un día o más, por el reclutamiento y activación de linfocitos T.',
      },
      {
        id: 'hs4-q3',
        prompt: 'Otros ejemplos reconocibles de tipo IV incluyen (selecciona los correctos):',
        options: [
          { id: 'a', text: 'Reacción positiva a prueba de tuberculina en persona previamente expuesta.', correct: true },
          { id: 'b', text: 'Rechazo celular agudo de trasplante (componente T dependiente).', correct: true },
          { id: 'c', text: 'Anafilaxia por penicilina en 5 minutos.', correct: false },
          { id: 'd', text: 'Enfermedad hemolítica del recién nacido por anti‑D IgG.', correct: false },
        ],
        explanation:
          'PPD y rechazo celular ilustran respuestas T; la anafilaxia es tipo I y EHRN, patrón tipo II.',
      },
    ],
  },
]

export const FINAL_QUIZ = [
  {
    id: 'fq1',
    prompt:
      'Paciente con infiltración monocitaria y destrucción de borla de motonero por reacción inmune; se relaciona con mecanismo citotóxico por anticuerpos. ¿Tipo de hipersensibilidad?',
    options: [
      { id: 'a', text: 'Tipo II', correct: true },
      { id: 'b', text: 'Tipo I', correct: false },
      { id: 'c', text: 'Tipo III', correct: false },
      { id: 'd', text: 'Tipo IV', correct: false },
    ],
    explanation:
      'Anticuerpos contra estructuras fijas en tejido (p. ej., glomerular) que medían daño complemento‑citotóxico encajan en el concepto de citotoxicidad mediada por anticuerpo (tipo II).',
  },
  {
    id: 'fq2',
    prompt: 'Extrínseca alérgica alveolitis y reacción de Arthus se citan con frecuencia como ejemplos de:',
    options: [
      { id: 'a', text: 'Tipo III (complejos inmunes)', correct: true },
      { id: 'b', text: 'Tipo IV exclusivo en ambos sin participación de complejos.', correct: false },
      { id: 'c', text: 'Tipo I en todo contexto', correct: false },
      { id: 'd', text: 'Tipo II por IgE fija a mastocitos alveolares', correct: false },
    ],
    explanation:
      'Estos modelos destacan inflamación por complejos precipitados o depósito local; la clasificación clínica puede solaparse en algo, pero el foco docente clásico es tipo III.',
  },
  {
    id: 'fq3',
    prompt: '¿Cuáles son típicas del **tipo I**? (selecciona todas las que apliquen)',
    options: [
      { id: 'a', text: 'Asma alérgica con eosinofilia y broncoespasmo inducido por alérgeno.', correct: true },
      { id: 'b', text: 'Ametropía por astigmatismo — concepto oftalmológico no inmunológico.', correct: false },
      { id: 'c', text: 'Rinitis alérgica estacional.', correct: true },
      { id: 'd', text: 'Nefritis lúpica por depósitos masivos de complejos como mecanismo predominante.', correct: false },
    ],
    explanation:
      'Rinitis y asma alérgicas se vinculan a IgE y células efectoras inmediatas; el patrón nefrítico del LES se enseña principalmente como tipo III.',
  },
  {
    id: 'fq4',
    prompt: 'Reacción cutánea vesicular 48 h tras exposición a urushiol (hiedra venenosa) se alinea mejor con:',
    options: [
      { id: 'a', text: 'Tipo IV (retardada)', correct: true },
      { id: 'b', text: 'Tipo I', correct: false },
      { id: 'c', text: 'Tipo II', correct: false },
      { id: 'd', text: 'Tipo III exclusivamente sin linfocitos', correct: false },
    ],
    explanation:
      'El retraso y el mecanismo T‑mediado caracterizan la dermatitis de contacto alérgica.',
  },
  {
    id: 'fq5',
    prompt: 'Marca los enunciados **correctos** sobre diferenciación rápida:',
    options: [
      { id: 'a', text: '“Minutos + IgE + mastocitos” sugiere tipo I.', correct: true },
      { id: 'b', text: '“Anticuerpo + superficie celular + citólisis” sugiere tipo II.', correct: true },
      { id: 'c', text: '“Complejos + complemento + neutrófilos” orienta a tipo III.', correct: true },
      { id: 'd', text: '“24–72 h sin IgE predominante” orienta a tipo IV.', correct: true },
    ],
    explanation:
      'Estos atajos conceptuales ayudan a razonar el caso sin memorizar listas aisladas.',
  },
]

/** Preguntas evaluables en casos + quiz (para contador y progreso). */
export function getTotalQuestionCount() {
  const caseQs = CLINICAL_CASES.reduce((n, c) => n + c.questions.length, 0)
  return caseQs + FINAL_QUIZ.length
}

export const RESOURCES = [
  {
    id: 'video-1',
    type: 'video',
    title: 'Hypersensitivity — los 4 tipos explicados (animación, Alila Medical Media)',
    url: 'https://www.youtube.com/embed/jXTW4F-8jd4'
  },
  {
    id: 'src-1',
    type: 'book',
    title: 'Type I Hypersensitivity Reaction — StatPearls (NCBI Bookshelf)',
    description: 'Mecanismo IgE, mastocitos y manejo de la reacción inmediata. Actualización vigente.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK560561/'
  },
  {
    id: 'src-2',
    type: 'book',
    title: 'Type II Hypersensitivity Reaction — StatPearls (NCBI Bookshelf)',
    description: 'Reacción citotóxica mediada por IgG/IgM y complemento.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK563264/'
  },
  {
    id: 'src-3',
    type: 'book',
    title: 'Type III Hypersensitivity Reaction — StatPearls (NCBI Bookshelf)',
    description: 'Complejos inmunes, enfermedad del suero y glomerulonefritis.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK559122/'
  },
  {
    id: 'src-4',
    type: 'book',
    title: 'Hypersensitivity Reactions — tabla comparativa (Geeky Medics)',
    description: 'Comparación clara de los tipos I–IV con ejemplos clínicos.',
    url: 'https://geekymedics.com/hypersensitivity-reactions/'
  }
]
