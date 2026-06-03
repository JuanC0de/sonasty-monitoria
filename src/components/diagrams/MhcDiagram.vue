<script setup>
const columns = [
  {
    x: 14, color: '#a78bfa',
    title: 'CMH I · vía endógena',
    target: 'Linfocito T CD8+ (citotóxico)',
    steps: [
      'Proteína sintetizada en el citosol (viral / tumoral)',
      'Proteasoma la degrada en péptidos',
      'TAP transporta los péptidos al retículo endoplásmico',
      'El péptido se carga en CMH I dentro del RE',
    ],
  },
  {
    x: 396, color: '#e879f9',
    title: 'CMH II · vía exógena',
    target: 'Linfocito T CD4+ (cooperador)',
    steps: [
      'Proteína extracelular captada por endocitosis / fagocitosis',
      'Endosoma–lisosoma la degrada',
      'CMH II llega con cadena invariante → queda el CLIP',
      'HLA-DM retira el CLIP y carga el péptido exógeno',
    ],
  },
]
const Y0 = 70
const STEP = 64
</script>

<template>
  <svg viewBox="0 0 760 416" font-family="DM Sans, sans-serif">
    <!-- divisoria -->
    <line x1="380" y1="6" x2="380" y2="410" stroke="#1f2a47" stroke-width="1.5" stroke-dasharray="4 6" />

    <g v-for="col in columns" :key="col.title">
      <!-- encabezado -->
      <rect :x="col.x" y="6" width="350" height="50" rx="13" :fill="col.color" fill-opacity="0.16" :stroke="col.color" stroke-opacity="0.6" />
      <text :x="col.x + 18" y="37" :fill="col.color" font-size="17" font-weight="700" font-family="Space Grotesk, sans-serif">{{ col.title }}</text>

      <!-- pasos -->
      <g v-for="(s, i) in col.steps" :key="i">
        <rect :x="col.x" :y="Y0 + i * STEP" width="350" height="50" rx="12" fill="#11182b" stroke="#2c3a61" />
        <circle :cx="col.x + 24" :cy="Y0 + i * STEP + 25" r="13" :fill="col.color" fill-opacity="0.2" :stroke="col.color" />
        <text :x="col.x + 24" :y="Y0 + i * STEP + 30" :fill="col.color" font-size="13" font-weight="700" text-anchor="middle">{{ i + 1 }}</text>
        <foreignObject :x="col.x + 46" :y="Y0 + i * STEP + 6" width="294" height="40">
          <div xmlns="http://www.w3.org/1999/xhtml" style="color:#eaf0fc;font:500 12.5px/1.2 'DM Sans',sans-serif;display:flex;align-items:center;height:38px">{{ s }}</div>
        </foreignObject>
        <!-- flecha -->
        <path :d="`M${col.x + 175} ${Y0 + i * STEP + 50} v${STEP - 50 + 5}`" :stroke="col.color" stroke-width="2" fill="none" />
        <path :d="`M${col.x + 175} ${Y0 + i * STEP + STEP + 1} l-5 -9 h10 z`" :fill="col.color" />
      </g>

      <!-- objetivo: linfocito T -->
      <rect :x="col.x" :y="Y0 + col.steps.length * STEP" width="350" height="54" rx="14" :fill="col.color" fill-opacity="0.22" :stroke="col.color" />
      <text :x="col.x + 18" :y="Y0 + col.steps.length * STEP + 25" fill="#eaf0fc" font-size="11" font-weight="600" letter-spacing="0.5">PRESENTACIÓN A</text>
      <text :x="col.x + 18" :y="Y0 + col.steps.length * STEP + 44" fill="#eaf0fc" font-size="14" font-weight="700">{{ col.target }}</text>
    </g>
  </svg>
</template>
