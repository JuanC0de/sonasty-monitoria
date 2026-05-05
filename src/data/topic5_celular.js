/**
 * Datos pedagógicos: Elementos de la inmunidad celular.
 */

export const SUMMARY_ROWS = [
  {
    tipo: 'Origen',
    tiempo: 'Precursores',
    inmunidad: 'Médula ósea (hemopoyesis)',
    ejemplo: 'Stem cell pluripotencial → Linfoide',
  },
  {
    tipo: 'Maduración T',
    tiempo: 'Órgano primario',
    inmunidad: 'Timo (selección positiva y negativa)',
    ejemplo: 'Timocitos doble negativos → doble positivos → simples positivos',
  },
  {
    tipo: 'Maduración B',
    tiempo: 'Órgano primario',
    inmunidad: 'Médula ósea (reordenamiento VDJ)',
    ejemplo: 'Pro-B → Pre-B → B inmaduro',
  },
  {
    tipo: 'Activación',
    tiempo: 'Órganos secundarios',
    inmunidad: 'Ganglios, bazo, MALT',
    ejemplo: 'Linfocito virgen → Efector / Memoria',
  },
]

export const CLINICAL_CASES = [
  {
    id: 'celular-1',
    typeLabel: 'Linfopoyesis T',
    shortLabel: 'Timo',
    title: 'Selección tímica y tolerancia',
    narrative:
      'En el timo, millones de linfocitos en desarrollo (timocitos) reordenan sus genes TCR. Muchos de ellos no logran reconocer el CMH propio o reaccionan con demasiada fuerza a antígenos propios, sufriendo apoptosis.',
    questions: [
      {
        id: 'cl1-q1',
        prompt: '¿Qué proceso asegura que los linfocitos T maduros sean capaces de reconocer péptidos presentados en moléculas de CMH propio?',
        options: [
          { id: 'a', text: 'Selección Positiva en la corteza tímica.', correct: true },
          { id: 'b', text: 'Selección Negativa en la médula tímica.', correct: false },
          { id: 'c', text: 'Reordenamiento de inmunoglobulinas.', correct: false },
          { id: 'd', text: 'Hipermutación somática.', correct: false },
        ],
        explanation: 'La selección positiva (rescate de la muerte por abandono) favorece a los timocitos doble positivos (CD4+ CD8+) que tienen al menos una afinidad débil/moderada por el CMH propio.',
      },
      {
        id: 'cl1-q2',
        prompt: '¿Qué previene principalmente que clones T autorreactivos peligrosos pasen a la periferia?',
        options: [
          { id: 'a', text: 'Expresión de RAG-1 y RAG-2.', correct: false },
          { id: 'b', text: 'Selección Negativa (deleción clonal).', correct: true },
          { id: 'c', text: 'Falta de IL-7.', correct: false },
          { id: 'd', text: 'Paso por el bazo.', correct: false },
        ],
        explanation: 'La selección negativa elimina mediante apoptosis a los timocitos que se unen con muy alta afinidad a complejos CMH-péptido propio en el timo, estableciendo tolerancia central.',
      }
    ],
  },
  {
    id: 'celular-2',
    typeLabel: 'Linfopoyesis B',
    shortLabel: 'Médula',
    title: 'Estadios de maduración B en médula ósea',
    narrative:
      'Las células B desarrollan su receptor (BCR) paso a paso. Primero reordenan los genes de la cadena pesada y luego los de la cadena ligera, antes de salir a circulación.',
    questions: [
      {
        id: 'cl2-q1',
        prompt: '¿Cuál es el marcador distintivo del estadio de linfocito pre-B?',
        options: [
          { id: 'a', text: 'Presencia de IgM e IgD en la membrana celular.', correct: false },
          { id: 'b', text: 'Expresión intracitoplasmática de la cadena pesada mu (μ) junto con cadena ligera sustituta (surrogate).', correct: true },
          { id: 'c', text: 'Ningún reordenamiento génico ha comenzado.', correct: false },
          { id: 'd', text: 'Secreción masiva de IgG al plasma.', correct: false },
        ],
        explanation: 'El linfocito pre-B ya ha reordenado exitosamente la cadena pesada (cadena μ citoplasmática) que se asocia al pre-BCR con la cadena ligera sustituta, parando el reordenamiento del otro alelo (exclusión alélica).',
      },
      {
        id: 'cl2-q2',
        prompt: 'Un linfocito B inmaduro que recién abandona la médula ósea expresa en su superficie:',
        options: [
          { id: 'a', text: 'Solamente IgG.', correct: false },
          { id: 'b', text: 'Únicamente IgM.', correct: true },
          { id: 'c', text: 'IgM e IgD conjuntamente.', correct: false },
          { id: 'd', text: 'Ninguna inmunoglobulina.', correct: false },
        ],
        explanation: 'El linfocito B inmaduro expresa solo IgM. Al llegar a los órganos secundarios se vuelve maduro (o virgen maduro) expresando tanto IgM como IgD.',
      }
    ],
  },
  {
    id: 'celular-3',
    typeLabel: 'Estados de Activación',
    shortLabel: 'Activación',
    title: 'Del estado virgen al efector',
    narrative:
      'Un linfocito T CD4+ virgen (naive) residente en el ganglio linfático se encuentra con una célula dendrítica que presenta un péptido viral.',
    questions: [
      {
        id: 'cl3-q1',
        prompt: 'Para lograr la activación completa de un linfocito T virgen (naive), se requieren generalmente:',
        options: [
          { id: 'a', text: 'Reconocimiento del antígeno-CMH (Señal 1).', correct: true },
          { id: 'b', text: 'Coestimulación por CD28 uniéndose a CD80/CD86 (Señal 2).', correct: true },
          { id: 'c', text: 'Citoquinas del entorno celular (Señal 3, polarización).', correct: true },
          { id: 'd', text: 'Presencia inmediata de anticuerpos séricos neutralizantes.', correct: false },
        ],
        explanation: 'La activación de T vírgenes exige Señal 1 (TCR/CMH), Señal 2 (Coestimulación) y Señal 3 (citoquinas) para la supervivencia, proliferación y diferenciación.',
      },
      {
        id: 'cl3-q2',
        prompt: '¿Qué destino toman los linfocitos B maduros vírgenes una vez activados exitosamente en un ganglio linfático?',
        options: [
          { id: 'a', text: 'Vuelven al timo a madurar nuevamente.', correct: false },
          { id: 'b', text: 'Sufren apoptosis de forma inmediata por anergia.', correct: false },
          { id: 'c', text: 'Se diferencian en células plasmáticas secretoras de anticuerpos y células B de memoria.', correct: true },
          { id: 'd', text: 'Se convierten en linfocitos T citotóxicos.', correct: false },
        ],
        explanation: 'Tras la activación T-dependiente, los linfocitos B forman centros germinales, experimentan cambio de isotipo, afinidad e hipermutación, originando plasmocitos y memoria.',
      }
    ],
  }
]

export const FINAL_QUIZ = [
  {
    id: 'cl-fq1',
    prompt: 'Linfocito que aún no ha encontrado el antígeno para el cual es específico en los órganos periféricos:',
    options: [
      { id: 'a', text: 'Linfocito efector.', correct: false },
      { id: 'b', text: 'Linfocito de memoria.', correct: false },
      { id: 'c', text: 'Linfocito virgen (naive).', correct: true },
      { id: 'd', text: 'Célula plasmática.', correct: false },
    ],
    explanation: 'Linfocito virgen (naive) es aquel maduro pero que aún no se ha enfrentado a su antígeno específico.',
  },
  {
    id: 'cl-fq2',
    prompt: 'El estadio de timocito "Doble Positivo" se caracteriza por:',
    options: [
      { id: 'a', text: 'Expresar tanto CD4 como CD8 en su superficie.', correct: true },
      { id: 'b', text: 'Expresar receptores de células B y T al mismo tiempo.', correct: false },
      { id: 'c', text: 'No expresar ni CD4 ni CD8.', correct: false },
      { id: 'd', text: 'Encontrarse únicamente en circulación periférica.', correct: false },
    ],
    explanation: 'En la corteza tímica, pasan de doble negativos a doble positivos (CD4+ CD8+) antes de ser seleccionados y pasar a simple positivos.',
  },
  {
    id: 'cl-fq3',
    prompt: 'Enzimas encargadas del reordenamiento de los segmentos génicos V(D)J en linfocitos B y T:',
    options: [
      { id: 'a', text: 'Helicasas de ADN exclusivas.', correct: false },
      { id: 'b', text: 'Proteasas lisosomales.', correct: false },
      { id: 'c', text: 'RAG-1 y RAG-2 (Genes activadores de recombinación).', correct: true },
      { id: 'd', text: 'Grancimas y perforinas.', correct: false },
    ],
    explanation: 'El complejo RAG es indispensable para cortar y ensamblar genes de receptores; su deficiencia causa Inmunodeficiencia Combinada Grave (SCID).',
  },
  {
    id: 'cl-fq4',
    prompt: 'Ubicación anatómica preferencial para la activación de linfocitos T y B vírgenes por antígenos circulantes de la linfa:',
    options: [
      { id: 'a', text: 'Ganglios linfáticos.', correct: true },
      { id: 'b', text: 'Médula ósea.', correct: false },
      { id: 'c', text: 'Timo.', correct: false },
      { id: 'd', text: 'Corazón.', correct: false },
    ],
    explanation: 'Los ganglios linfáticos drenan la linfa recogiendo antígenos tisulares para presentarlos a linfocitos en constante recirculación.',
  },
  {
    id: 'cl-fq5',
    prompt: 'Consecuencia de que un linfocito T virgen reciba la Señal 1 (TCR-CMH) sin la Señal 2 (coestimulación CD28):',
    options: [
      { id: 'a', text: 'Activación máxima y tormenta de citoquinas.', correct: false },
      { id: 'b', text: 'Cambio rápido a célula B.', correct: false },
      { id: 'c', text: 'Anergia clonal (inactivación funcional a largo plazo).', correct: true },
      { id: 'd', text: 'Proliferación masiva descontrolada.', correct: false },
    ],
    explanation: 'La falta de coestimulación es un mecanismo periférico de tolerancia, induciendo anergia en el linfocito T frente a antígenos presentados sin contexto de peligro.',
  }
]

export function getTotalQuestionCount() {
  const caseQs = CLINICAL_CASES.reduce((n, c) => n + c.questions.length, 0)
  return caseQs + FINAL_QUIZ.length
}

export const RESOURCES = [
  {
    id: 'img-3b',
    type: 'image',
    title: 'Activación del Linfocito T',
    description: 'Interacción microscópica entre células de la inmunidad adaptativa.',
    url: '/assets/t_cell_activation.png'
  },
  {
    id: 'link-1',
    type: 'book',
    title: 'Clase 5 - Linfocitos B e Inmunología',
    description: 'Presentación esquemática sobre CMH, linfocitos B y maduración celular.',
    url: 'https://es.slideshare.net/slideshow/clase-5complejo-mayor-de-histocompatibilidadlinfocitos-bcomplemento-inmunologia/82166072'
  },
  {
    id: 'link-2',
    type: 'book',
    title: 'Sistema Inmunitario - Algor Education',
    description: 'Apuntes universitarios sobre inmunidad y biología de los linfocitos.',
    url: 'https://library.algoreducation.com/es/docs/9273/sistema-inmunitario-biologia-universidad'
  }
]
