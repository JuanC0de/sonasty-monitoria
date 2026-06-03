<script setup>
const steps = [
  { title: 'Quimiotaxis', detail: 'El fagocito migra siguiendo señales (C5a, quimiocinas).' },
  { title: 'Reconocimiento', detail: 'PRR y opsoninas (C3b, IgG) detectan al patógeno.' },
  { title: 'Englobamiento', detail: 'Los pseudópodos rodean al microbio → fagosoma.' },
  { title: 'Fagolisosoma', detail: 'El fagosoma se fusiona con el lisosoma.' },
  { title: 'Destrucción', detail: 'ROS y enzimas degradan; se presenta el antígeno.' },
]
const cx = (i) => 70 + i * 155
const CY = 96
const R = 42
</script>

<template>
  <svg viewBox="0 0 760 270" font-family="DM Sans, sans-serif">
    <!-- conexiones -->
    <g v-for="i in steps.length - 1" :key="`a${i}`">
      <path :d="`M${cx(i - 1) + R + 4} ${CY} H${cx(i) - R - 8}`" stroke="var(--accent)" stroke-width="2.5" fill="none" />
      <path :d="`M${cx(i) - R - 4} ${CY} l-9 -5 v10 z`" fill="var(--accent)" />
    </g>

    <g v-for="(s, i) in steps" :key="s.title">
      <!-- célula fagocítica -->
      <circle :cx="cx(i)" :cy="CY" :r="R" fill="#11182b" stroke="var(--accent)" stroke-width="2" />
      <circle :cx="cx(i)" :cy="CY" :r="R + 6" fill="none" stroke="var(--accent)" stroke-opacity="0.18" stroke-width="6" />

      <!-- depicción por etapa -->
      <template v-if="i === 0">
        <circle :cx="cx(i)" :cy="CY" r="11" fill="var(--accent2)" fill-opacity="0.55" />
        <ellipse :cx="cx(i) + 30" :cy="CY - 18" rx="6" ry="4" fill="#fbbf24" />
        <line :x1="cx(i) + 40" :y1="CY - 24" :x2="cx(i) + 52" :y2="CY - 28" stroke="#fbbf24" stroke-width="1.5" />
        <line :x1="cx(i) + 40" :y1="CY - 16" :x2="cx(i) + 52" :y2="CY - 14" stroke="#fbbf24" stroke-width="1.5" />
      </template>
      <template v-else-if="i === 1">
        <circle :cx="cx(i)" :cy="CY" r="11" fill="var(--accent2)" fill-opacity="0.55" />
        <ellipse :cx="cx(i) + 22" :cy="CY - 22" rx="7" ry="4.5" fill="#fbbf24" />
        <line v-for="a in [-20, -10, 0]" :key="a" :x1="cx(i) + 14" :y1="CY - 18 + a * 0.3" :x2="cx(i) + 22" :y2="CY - 22" stroke="#fbbf24" stroke-width="1.2" />
      </template>
      <template v-else-if="i === 2">
        <circle :cx="cx(i)" :cy="CY" r="11" fill="var(--accent2)" fill-opacity="0.55" />
        <ellipse :cx="cx(i) + 12" :cy="CY - 16" rx="7" ry="4.5" fill="#fbbf24" />
        <path :d="`M${cx(i) + 2} ${CY - 30} q14 -6 26 6`" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" />
      </template>
      <template v-else-if="i === 3">
        <circle :cx="cx(i)" :cy="CY" r="11" fill="var(--accent2)" fill-opacity="0.55" />
        <circle :cx="cx(i) + 14" :cy="CY - 12" r="8" fill="none" stroke="#fbbf24" stroke-width="2" />
        <ellipse :cx="cx(i) + 14" :cy="CY - 12" rx="4" ry="2.5" fill="#fbbf24" />
        <circle :cx="cx(i) - 16" :cy="CY + 14" r="5" fill="var(--accent)" fill-opacity="0.7" />
      </template>
      <template v-else>
        <circle :cx="cx(i)" :cy="CY" r="11" fill="var(--accent2)" fill-opacity="0.55" />
        <circle :cx="cx(i) + 12" :cy="CY - 10" r="9" fill="#fbbf24" fill-opacity="0.18" stroke="#fbbf24" stroke-dasharray="2 3" />
        <g stroke="#fbbf24" stroke-width="1.4" stroke-linecap="round">
          <line :x1="cx(i) + 8" :y1="CY - 14" :x2="cx(i) + 16" :y2="CY - 6" />
          <line :x1="cx(i) + 16" :y1="CY - 14" :x2="cx(i) + 8" :y2="CY - 6" />
        </g>
      </template>

      <!-- número -->
      <circle :cx="cx(i) - R + 6" :cy="CY - R + 6" r="12" fill="var(--accent)" />
      <text :x="cx(i) - R + 6" :y="CY - R + 11" fill="#05070f" font-size="13" font-weight="700" text-anchor="middle">{{ i + 1 }}</text>

      <!-- etiqueta -->
      <text :x="cx(i)" y="168" fill="#eaf0fc" font-size="14" font-weight="700" text-anchor="middle" font-family="Space Grotesk, sans-serif">{{ s.title }}</text>
      <foreignObject :x="cx(i) - 74" y="178" width="148" height="80">
        <div xmlns="http://www.w3.org/1999/xhtml" style="color:#9fabca;font:500 11.5px/1.3 'DM Sans',sans-serif;text-align:center">{{ s.detail }}</div>
      </foreignObject>
    </g>
  </svg>
</template>
