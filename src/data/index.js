import * as topic1 from './topic1_hipersensibilidad'
import * as topic2 from './topic2_innato'
import * as topic3 from './topic3_complemento'
import * as topic4 from './topic4_cmh'
import * as topic5 from './topic5_celular'

export const TOPICS = [
  {
    id: 'hipersensibilidad',
    title: 'Hipersensibilidad I–IV: casos y razonamiento',
    data: topic1
  },
  {
    id: 'innato',
    title: 'Células y órganos del sistema inmune innato II',
    data: topic2
  },
  {
    id: 'complemento',
    title: 'Sistema del complemento',
    data: topic3
  },
  {
    id: 'cmh',
    title: 'Procesamiento y presentación antigénica I (CMH)',
    data: topic4
  },
  {
    id: 'celular',
    title: 'Elementos de la inmunidad celular',
    data: topic5
  }
]
