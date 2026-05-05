<script setup>
import { computed } from 'vue'

const props = defineProps({
  cases: { type: Array, required: true }
})

const links = computed(() => {
  const base = [{ id: 'inicio', label: 'Inicio' }]
  const caseLinks = props.cases.map(c => ({ id: `caso-${c.id}`, label: c.shortLabel }))
  return [
    ...base,
    ...caseLinks,
    { id: 'tabla', label: 'Tabla comparativa' },
    { id: 'quiz', label: 'Quiz final' },
    { id: 'recursos', label: 'Recursos' },
  ]
})
</script>

<template>
  <nav
    class="sticky top-6 flex flex-col gap-0.5 text-sm"
    aria-label="Secciones"
  >
    <p class="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
      Contenido
    </p>
    <a
      v-for="l in links"
      :key="l.id"
      :href="`#${l.id}`"
      class="rounded-lg px-3 py-2 font-medium text-slate-600 transition hover:bg-primary-50 hover:text-primary-700"
    >
      {{ l.label }}
    </a>
  </nav>
</template>
