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
    class="sticky top-24 flex flex-col gap-0.5 text-sm"
    aria-label="Secciones"
  >
    <p class="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-fg-dim">
      Contenido
    </p>
    <a
      v-for="l in links"
      :key="l.id"
      :href="`#${l.id}`"
      class="nav-link rounded-lg px-3 py-2 font-medium text-fg-muted transition hover:text-fg"
    >
      {{ l.label }}
    </a>
  </nav>
</template>

<style scoped>
.nav-link:hover {
  background-color: color-mix(in oklab, var(--accent) 14%, transparent);
  color: var(--accent);
}
</style>
