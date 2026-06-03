<script setup>
const tCol = {
  x: 410, color: '#fbbf24',
  header: 'Linaje T · timo',
  steps: [
    'Timocito doble negativo (DN) → doble positivo (DP)',
    'Selección positiva en la corteza: reconoce CMH propio',
    'Selección negativa en la médula: elimina autorreactivos',
    'Simple positivo CD4+ o CD8+ → sale a la periferia',
  ],
}
const bCol = {
  x: 20, color: '#fb7185',
  header: 'Linaje B · médula ósea',
  steps: [
    'Reordenamiento VDJ (Pro-B)',
    'Pre-B: cadena pesada μ',
    'B inmaduro (IgM) → sale a la periferia',
  ],
}
const Y0 = 196
const STEP = 56
</script>

<template>
  <svg viewBox="0 0 760 426" font-family="DM Sans, sans-serif">
    <!-- Tronco común -->
    <g text-anchor="middle">
      <rect x="290" y="6" width="180" height="46" rx="13" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" />
      <text x="380" y="28" fill="#eaf0fc" font-size="14" font-weight="700" font-family="Space Grotesk, sans-serif">Médula ósea</text>
      <text x="380" y="44" fill="#9fabca" font-size="11">célula madre hematopoyética</text>

      <path d="M380 52 V70" stroke="var(--accent)" stroke-width="2.5" />
      <path d="M380 70 l-5 -9 h10 z" fill="var(--accent)" transform="translate(0,2)" />

      <rect x="275" y="72" width="210" height="46" rx="13" fill="#11182b" stroke="#2c3a61" />
      <text x="380" y="94" fill="#eaf0fc" font-size="13.5" font-weight="700">Progenitor linfoide común</text>
      <text x="380" y="110" fill="#9fabca" font-size="11">se compromete a linaje B o T</text>
    </g>

    <!-- ramas hacia cada linaje -->
    <path d="M310 118 C 230 132, 185 124, 185 140" stroke="#fb7185" stroke-width="2" fill="none" />
    <path d="M450 118 C 530 132, 575 124, 575 140" stroke="#fbbf24" stroke-width="2" fill="none" />

    <!-- Columnas -->
    <g v-for="col in [bCol, tCol]" :key="col.header">
      <rect :x="col.x" y="140" width="330" height="44" rx="12" :fill="col.color" fill-opacity="0.16" :stroke="col.color" stroke-opacity="0.6" />
      <text :x="col.x + 16" y="168" :fill="col.color" font-size="15" font-weight="700" font-family="Space Grotesk, sans-serif">{{ col.header }}</text>

      <g v-for="(s, i) in col.steps" :key="i">
        <rect :x="col.x" :y="Y0 + i * STEP" width="330" height="44" rx="11" fill="#11182b" stroke="#2c3a61" />
        <circle :cx="col.x + 22" :cy="Y0 + i * STEP + 22" r="11" :fill="col.color" fill-opacity="0.2" :stroke="col.color" />
        <text :x="col.x + 22" :y="Y0 + i * STEP + 26" :fill="col.color" font-size="12" font-weight="700" text-anchor="middle">{{ i + 1 }}</text>
        <foreignObject :x="col.x + 42" :y="Y0 + i * STEP + 4" width="280" height="36">
          <div xmlns="http://www.w3.org/1999/xhtml" style="color:#eaf0fc;font:500 12px/1.15 'DM Sans',sans-serif;display:flex;align-items:center;height:36px">{{ s }}</div>
        </foreignObject>
        <template v-if="i < col.steps.length - 1">
          <path :d="`M${col.x + 165} ${Y0 + i * STEP + 44} v9`" :stroke="col.color" stroke-width="2" fill="none" />
          <path :d="`M${col.x + 165} ${Y0 + i * STEP + 55} l-5 -9 h10 z`" :fill="col.color" />
        </template>
      </g>
    </g>
  </svg>
</template>
