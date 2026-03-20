<script setup>
import { SUMMARY_ROWS } from '../data/clinicalData'
</script>

<template>
  <div class="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
    <table class="w-full min-w-[640px] border-collapse text-left text-sm">
      <thead>
        <tr class="border-b border-slate-200 bg-slate-50/90">
          <th class="px-4 py-3 font-semibold text-slate-800">Tipo</th>
          <th class="px-4 py-3 font-semibold text-slate-800">Tiempo típico</th>
          <th class="px-4 py-3 font-semibold text-slate-800">Inmunidad mediada</th>
          <th class="px-4 py-3 font-semibold text-slate-800">Ejemplos clínicos</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in SUMMARY_ROWS"
          :key="row.tipo"
          class="border-b border-slate-100 last:border-0"
          :class="i % 2 === 1 ? 'bg-slate-50/50' : ''"
        >
          <td class="px-4 py-3 font-medium text-primary-700">{{ row.tipo }}</td>
          <td class="px-4 py-3 text-slate-700">{{ row.tiempo }}</td>
          <td class="px-4 py-3 text-slate-700">{{ row.inmunidad }}</td>
          <td class="px-4 py-3 text-slate-700">{{ row.ejemplo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
