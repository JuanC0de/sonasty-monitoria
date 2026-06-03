<script setup>
const props = defineProps({
  rows: { type: Array, required: true }
})
</script>

<template>
  <div class="glass overflow-x-auto rounded-2xl">
    <table class="w-full min-w-[640px] border-collapse text-left text-sm">
      <thead>
        <tr class="border-b border-line-strong bg-ink-850/60">
          <th class="px-4 py-3 font-semibold text-fg">Tipo</th>
          <th class="px-4 py-3 font-semibold text-fg">Tiempo típico</th>
          <th class="px-4 py-3 font-semibold text-fg">Inmunidad mediada</th>
          <th class="px-4 py-3 font-semibold text-fg">Ejemplos clínicos</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in rows"
          :key="row.tipo"
          class="border-b border-line last:border-0 transition-colors hover:bg-ink-800/50"
          :class="i % 2 === 1 ? 'bg-ink-850/30' : ''"
        >
          <td class="px-4 py-3 font-semibold" :style="{ color: 'var(--accent)' }">{{ row.tipo }}</td>
          <td class="px-4 py-3 text-fg-muted">{{ row.tiempo }}</td>
          <td class="px-4 py-3 text-fg-muted">{{ row.inmunidad }}</td>
          <td class="px-4 py-3 text-fg-muted">{{ row.ejemplo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
