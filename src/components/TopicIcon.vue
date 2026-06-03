<script setup>
defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <!-- Hipersensibilidad: chispa / reacción inmediata -->
    <template v-if="name === 'spark'">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </template>

    <!-- Innato: escudo / barrera -->
    <template v-else-if="name === 'shield'">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </template>

    <!-- Complemento: cascada / capas -->
    <template v-else-if="name === 'cascade'">
      <path d="M12 3l8 4-8 4-8-4 8-4Z" />
      <path d="M4 11l8 4 8-4" />
      <path d="M4 15l8 4 8-4" />
    </template>

    <!-- CMH: presentación -->
    <template v-else-if="name === 'present'">
      <rect x="4" y="4" width="16" height="11" rx="2" />
      <path d="M12 15v5" />
      <path d="M8 20h8" />
      <path d="M8.5 10.5l2.5 2.5 4-5" />
    </template>

    <!-- Celular: células / linaje -->
    <template v-else-if="name === 'cells'">
      <circle cx="7" cy="8" r="3.2" />
      <circle cx="16.5" cy="7" r="2.4" />
      <circle cx="15" cy="16" r="3.6" />
      <path d="M9.8 9.4l3 4M9.4 7l4.8-.3" />
    </template>
  </svg>
</template>
