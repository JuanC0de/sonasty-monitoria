import * as topic1 from './topic1_hipersensibilidad'
import * as topic2 from './topic2_innato'
import * as topic3 from './topic3_complemento'
import * as topic4 from './topic4_cmh'
import * as topic5 from './topic5_celular'

/**
 * Cada tema tiene identidad visual propia:
 *  - accent / accent2: gradiente neón usado en toda la vista del tema.
 *  - icon: clave de ícono (ver TopicIcon.vue).
 *  - tagline: subtítulo corto para la tarjeta.
 *  - diagram: clave del diagrama SVG didáctico (ver diagrams/ConceptDiagram.vue).
 */
export const TOPICS = [
  {
    id: 'hipersensibilidad',
    title: 'Hipersensibilidad I–IV',
    tagline: 'Clasificación de Gell y Coombs: casos clínicos y razonamiento.',
    accent: '#fb7185',
    accent2: '#fb923c',
    icon: 'spark',
    diagram: 'hypersensitivity',
    data: topic1,
  },
  {
    id: 'innato',
    title: 'Inmunidad innata II',
    tagline: 'Células y órganos: fagocitosis y primera línea de defensa.',
    accent: '#34d399',
    accent2: '#2dd4bf',
    icon: 'shield',
    diagram: 'innate',
    data: topic2,
  },
  {
    id: 'complemento',
    title: 'Sistema del complemento',
    tagline: 'Tres vías que convergen en el complejo de ataque a membrana.',
    accent: '#38bdf8',
    accent2: '#818cf8',
    icon: 'cascade',
    diagram: 'complement',
    data: topic3,
  },
  {
    id: 'cmh',
    title: 'Presentación antigénica (CMH)',
    tagline: 'Vías endógena (CMH I) y exógena (CMH II) hacia los linfocitos T.',
    accent: '#a78bfa',
    accent2: '#e879f9',
    icon: 'present',
    diagram: 'mhc',
    data: topic4,
  },
  {
    id: 'celular',
    title: 'Inmunidad celular',
    tagline: 'Origen, maduración tímica y selección de linfocitos.',
    accent: '#fbbf24',
    accent2: '#fb7185',
    icon: 'cells',
    diagram: 'cellular',
    data: topic5,
  },
]
