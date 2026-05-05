/**
 * Datos pedagógicos: Sistema del complemento.
 */

export const SUMMARY_ROWS = [
  {
    tipo: 'Vía Clásica',
    tiempo: 'Activación adaptativa',
    inmunidad: 'Iniciada por complejos Ag-Ac (IgG o IgM)',
    ejemplo: 'Rechazo hiperagudo, autoinmunidad',
  },
  {
    tipo: 'Vía Alternativa',
    tiempo: 'Activación innata continua',
    inmunidad: 'Hidrólisis espontánea de C3, estabilizada en patógenos',
    ejemplo: 'Defensa rápida bacteriana',
  },
  {
    tipo: 'Vía de Lectinas',
    tiempo: 'Activación innata',
    inmunidad: 'Iniciada por MBL unida a manosa',
    ejemplo: 'Infección por patógenos con glúcidos específicos',
  },
  {
    tipo: 'Complejo de Ataque a Membrana (MAC)',
    tiempo: 'Fase terminal',
    inmunidad: 'Lisis directa (C5b-C9)',
    ejemplo: 'Especialmente Neisseria spp.',
  },
]

export const CLINICAL_CASES = [
  {
    id: 'comp-1',
    typeLabel: 'Vía Clásica',
    shortLabel: 'Clásica',
    title: 'Glomerulonefritis postestreptocócica',
    narrative:
      'Niño de 8 años presenta orina oscura y edema facial dos semanas después de una faringitis. En la biopsia renal se observan depósitos subepiteliales granulares de IgG y C3. Hay disminución de C3 sérico y de la actividad lítica total (CH50).',
    questions: [
      {
        id: 'c1-q1',
        prompt: '¿Qué vía del complemento está principalmente implicada en este mecanismo de daño?',
        options: [
          { id: 'a', text: 'Vía alternativa.', correct: false },
          { id: 'b', text: 'Vía clásica.', correct: true },
          { id: 'c', text: 'Vía de las lectinas.', correct: false },
          { id: 'd', text: 'No participa el complemento.', correct: false },
        ],
        explanation: 'La presencia de complejos inmunes (IgG y antígeno) activa clásicamente el complemento a través de C1q.',
      },
      {
        id: 'c1-q2',
        prompt: 'Componente inicial que se une a la fracción Fc de los anticuerpos en la vía clásica:',
        options: [
          { id: 'a', text: 'C3b.', correct: false },
          { id: 'b', text: 'C1q.', correct: true },
          { id: 'c', text: 'MBL.', correct: false },
          { id: 'd', text: 'Factor B.', correct: false },
        ],
        explanation: 'C1q reconoce las porciones Fc de IgG e IgM, iniciando la cascada que forma el complejo C1qrs.',
      }
    ],
  },
  {
    id: 'comp-2',
    typeLabel: 'Fase Terminal y MAC',
    shortLabel: 'MAC',
    title: 'Infecciones recurrentes por Neisseria',
    narrative:
      'Un joven de 20 años sufre un segundo episodio de meningitis meningocócica. Su historial médico revela episodios previos de gonorrea diseminada. Su nivel de CH50 es indetectable, pero el AH50 (vía alternativa) es nulo, lo que sugiere un déficit en componentes tardíos compartidos.',
    questions: [
      {
        id: 'c2-q1',
        prompt: 'La deficiencia genética más probable en este paciente involucra proteínas de:',
        options: [
          { id: 'a', text: 'La vía clásica temprana (C1, C4, C2).', correct: false },
          { id: 'b', text: 'La fase terminal o complejo de ataque a la membrana (C5 a C9).', correct: true },
          { id: 'c', text: 'Vía alternativa (Properdina o Factor D).', correct: false },
          { id: 'd', text: 'MBL (lectina de unión a manosa).', correct: false },
        ],
        explanation: 'Los déficits de los componentes terminales (C5, C6, C7, C8, C9) predisponen clásicamente a infecciones por especies de Neisseria por incapacidad de formar el MAC.',
      },
      {
        id: 'c2-q2',
        prompt: '¿Cuál es la función del complejo de ataque a la membrana (MAC)?',
        options: [
          { id: 'a', text: 'Opsonización de las bacterias.', correct: false },
          { id: 'b', text: 'Atracción quimiotáctica exclusiva de neutrófilos.', correct: false },
          { id: 'c', text: 'Formación de poros en la membrana celular, provocando lisis osmótica.', correct: true },
          { id: 'd', text: 'Neutralización directa de toxinas bacterianas.', correct: false },
        ],
        explanation: 'El MAC perfora la membrana de las bacterias, especialmente importante contra bacterias encapsuladas y Gram negativas como Neisseria.',
      }
    ],
  },
  {
    id: 'comp-3',
    typeLabel: 'Opsonización e Inflamación',
    shortLabel: 'Anafilatoxinas',
    title: 'Anafilaxia simulada y clearance bacteriano',
    narrative:
      'Tras un trauma masivo con choque y sepsis por bacilos gramnegativos, un paciente muestra hipotensión extrema y broncoespasmo severo, con altos niveles circulantes de C3a y C5a.',
    questions: [
      {
        id: 'c3-q1',
        prompt: '¿Qué funciones cumplen principalmente C3a y C5a?',
        options: [
          { id: 'a', text: 'Lisis celular directa.', correct: false },
          { id: 'b', text: 'Anafilatoxinas: degranulación de mastocitos e inflamación vascular.', correct: true },
          { id: 'c', text: 'Inhibición de la cascada del complemento.', correct: false },
          { id: 'd', text: 'Quimiotaxis de neutrófilos (especialmente C5a).', correct: true },
        ],
        explanation: 'C3a, C4a y C5a son anafilatoxinas que inducen degranulación de mastocitos; C5a es además un potente quimioatrayente.',
      },
      {
        id: 'c3-q2',
        prompt: '¿Qué fragmento es considerado la opsonina más importante del sistema del complemento?',
        options: [
          { id: 'a', text: 'C5a.', correct: false },
          { id: 'b', text: 'C3b.', correct: true },
          { id: 'c', text: 'C1 inhibidor.', correct: false },
          { id: 'd', text: 'Factor H.', correct: false },
        ],
        explanation: 'C3b se une covalentemente a la superficie del patógeno, marcándolo para fagocitosis por células con receptores CR1.',
      }
    ],
  }
]

export const FINAL_QUIZ = [
  {
    id: 'comp-fq1',
    prompt: 'La vía alternativa del complemento se inicia principalmente por:',
    options: [
      { id: 'a', text: 'Unión de anticuerpos IgG.', correct: false },
      { id: 'b', text: 'Unión de MBL a carbohidratos.', correct: false },
      { id: 'c', text: 'Activación espontánea y constante del C3 (tick-over).', correct: true },
      { id: 'd', text: 'Complejo C1qrs.', correct: false },
    ],
    explanation: 'El "tick-over" hidroliza lentamente C3; si ocurre cerca de una superficie patógena sin inhibidores locales, se amplifica la cascada.',
  },
  {
    id: 'comp-fq2',
    prompt: 'Enzima clave donde convergen las 3 vías del complemento:',
    options: [
      { id: 'a', text: 'Convertasa de C3.', correct: true },
      { id: 'b', text: 'Convertasa de C1.', correct: false },
      { id: 'c', text: 'Proteína C Reactiva.', correct: false },
      { id: 'd', text: 'Factor B.', correct: false },
    ],
    explanation: 'Las tres vías buscan formar una C3 convertasa para amplificar masivamente la escisión de C3 en C3a y C3b.',
  },
  {
    id: 'comp-fq3',
    prompt: 'La convertasa de C5 en la vía clásica está formada por:',
    options: [
      { id: 'a', text: 'C4b2a3b.', correct: true },
      { id: 'b', text: 'C3bBb3b.', correct: false },
      { id: 'c', text: 'MAC.', correct: false },
      { id: 'd', text: 'Properdina.', correct: false },
    ],
    explanation: 'Al unirse C3b a la convertasa de C3 clásica (C4b2a), se forma la convertasa de C5 que escinde a C5.',
  },
  {
    id: 'comp-fq4',
    prompt: 'Indique componentes de la vía de las lectinas:',
    options: [
      { id: 'a', text: 'MASP-1 y MASP-2.', correct: true },
      { id: 'b', text: 'MBL o Ficolinas.', correct: true },
      { id: 'c', text: 'Factor D y Factor B.', correct: false },
      { id: 'd', text: 'C1q, C1r, C1s.', correct: false },
    ],
    explanation: 'MBL se asocia con serina proteasas (MASP) para escindir C4 y C2, homólogo a C1 de la vía clásica.',
  },
  {
    id: 'comp-fq5',
    prompt: 'Función principal de la proteína reguladora DAF (CD55):',
    options: [
      { id: 'a', text: 'Disociar las convertasas de C3 en membranas propias.', correct: true },
      { id: 'b', text: 'Estabilizar las convertasas en patógenos.', correct: false },
      { id: 'c', text: 'Formar el MAC.', correct: false },
      { id: 'd', text: 'Inhibir la vía de lectinas.', correct: false },
    ],
    explanation: 'DAF previene el daño autoinmune acelerando la disociación del complejo C4b2a y C3bBb de las células del propio individuo.',
  }
]

export function getTotalQuestionCount() {
  const caseQs = CLINICAL_CASES.reduce((n, c) => n + c.questions.length, 0)
  return caseQs + FINAL_QUIZ.length
}

export const RESOURCES = [
  {
    id: 'img-2',
    type: 'image',
    title: 'Complejo de Ataque a Membrana (MAC)',
    description: 'Formación del poro lítico MAC (C5b-C9) sobre la membrana de un patógeno bacteriano.',
    url: '/assets/complement_system.png'
  },
  {
    id: 'link-1',
    type: 'book',
    title: 'Immunomedia - Sistema del Complemento',
    description: 'Material complementario en PDF sobre la cascada del complemento.',
    url: 'https://immunomedia.org/wp-content/uploads/2018/02/immunomedia11complemento1.pdf'
  },
  {
    id: 'link-2',
    type: 'book',
    title: 'Recursos Educativos UNAM - Complemento',
    description: 'Presentación interactiva sobre activación y regulación.',
    url: 'https://recursoseducativos.unam.mx/handle/123456789/20641'
  },
  {
    id: 'link-3',
    type: 'book',
    title: 'Repositorio Salud UNAM',
    description: 'Material institucional detallado del sistema de complemento.',
    url: 'https://repositoriosalud.unam.mx/handle/123456789/139'
  },
  {
    id: 'video-3',
    type: 'video',
    title: 'Sistema del Complemento - Inmunología',
    url: 'https://www.youtube.com/embed/l4eaMlZqISc'
  }
]
