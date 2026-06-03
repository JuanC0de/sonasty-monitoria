<script setup>
const rows = [
  {
    type: 'I', name: 'Inmediata', color: '#fb7185',
    mediator: 'IgE fijada a mastocitos y basófilos',
    effector: 'Degranulación → histamina y mediadores',
    timing: 'Minutos',
  },
  {
    type: 'II', name: 'Citotóxica', color: '#fbbf24',
    mediator: 'IgG / IgM contra antígenos de superficie',
    effector: 'Complemento + fagocitosis → citólisis',
    timing: 'Horas',
  },
  {
    type: 'III', name: 'Complejos inmunes', color: '#38bdf8',
    mediator: 'Complejos Ag–Ac solubles circulantes',
    effector: 'Depósito + complemento → neutrófilos',
    timing: 'Horas–días',
  },
  {
    type: 'IV', name: 'Retardada', color: '#a78bfa',
    mediator: 'Linfocitos T sensibilizados',
    effector: 'Citoquinas → macrófagos (sin Ac)',
    timing: '24–72 h',
  },
]
const ROW_H = 96
const GAP = 14
</script>

<template>
  <svg :viewBox="`0 0 760 ${rows.length * (ROW_H + GAP) + 6}`" font-family="DM Sans, sans-serif">
    <g v-for="(r, i) in rows" :key="r.type" :transform="`translate(0, ${i * (ROW_H + GAP) + 4})`">
      <!-- Tipo -->
      <rect x="2" y="0" width="132" height="86" rx="14"
            :fill="r.color" fill-opacity="0.12" :stroke="r.color" stroke-opacity="0.5" />
      <rect x="2" y="0" width="6" height="86" rx="3" :fill="r.color" />
      <text x="22" y="38" :fill="r.color" font-size="26" font-weight="700" font-family="Space Grotesk, sans-serif">Tipo {{ r.type }}</text>
      <text x="23" y="60" fill="#9fabca" font-size="13">{{ r.name }}</text>

      <!-- Mediador -->
      <rect x="150" y="6" width="236" height="74" rx="12" fill="#11182b" stroke="#2c3a61" />
      <text x="166" y="32" fill="#6b779b" font-size="11" font-weight="600" letter-spacing="0.5">MEDIADOR</text>
      <foreignObject x="164" y="38" width="208" height="40">
        <div xmlns="http://www.w3.org/1999/xhtml" style="color:#eaf0fc;font:500 13px/1.25 'DM Sans',sans-serif">{{ r.mediator }}</div>
      </foreignObject>

      <!-- Flecha -->
      <path :d="`M392 43 H432`" :stroke="r.color" stroke-width="2.5" fill="none" />
      <path :d="`M432 43 l-9 -5 v10 z`" :fill="r.color" />

      <!-- Efecto -->
      <rect x="440" y="6" width="200" height="74" rx="12" fill="#11182b" stroke="#2c3a61" />
      <text x="456" y="32" fill="#6b779b" font-size="11" font-weight="600" letter-spacing="0.5">DAÑO</text>
      <foreignObject x="454" y="38" width="174" height="40">
        <div xmlns="http://www.w3.org/1999/xhtml" style="color:#eaf0fc;font:500 13px/1.25 'DM Sans',sans-serif">{{ r.effector }}</div>
      </foreignObject>

      <!-- Tiempo -->
      <rect x="650" y="20" width="106" height="46" rx="23" :fill="r.color" fill-opacity="0.14" :stroke="r.color" stroke-opacity="0.45" />
      <text x="703" y="48" :fill="r.color" font-size="14" font-weight="700" text-anchor="middle">{{ r.timing }}</text>
    </g>
  </svg>
</template>
