<script setup>
const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'tipo-i', label: 'Tipo I' },
  { id: 'tipo-ii', label: 'Tipo II' },
  { id: 'tipo-iii', label: 'Tipo III' },
  { id: 'tipo-iv', label: 'Tipo IV' },
  { id: 'tabla', label: 'Tabla comparativa' },
  { id: 'quiz', label: 'Quiz final' },
]
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
