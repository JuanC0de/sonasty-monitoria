<script setup>
const pathways = [
  { x: 10, label: 'Vía clásica', detail: 'Complejos Ag–Ac → C1q', color: '#38bdf8' },
  { x: 270, label: 'Vía de las lectinas', detail: 'MBL / ficolinas → MASP', color: '#818cf8' },
  { x: 530, label: 'Vía alternativa', detail: 'Hidrólisis espontánea de C3', color: '#22d3ee' },
]
</script>

<template>
  <svg viewBox="0 0 760 430" font-family="DM Sans, sans-serif">
    <!-- Vías de inicio -->
    <g v-for="p in pathways" :key="p.label">
      <rect :x="p.x" y="6" width="220" height="64" rx="13" fill="#11182b" :stroke="p.color" stroke-opacity="0.55" />
      <text :x="p.x + 16" y="32" :fill="p.color" font-size="14" font-weight="700">{{ p.label }}</text>
      <foreignObject :x="p.x + 14" y="38" width="194" height="28">
        <div xmlns="http://www.w3.org/1999/xhtml" style="color:#9fabca;font:500 12px/1.2 'DM Sans',sans-serif">{{ p.detail }}</div>
      </foreignObject>
      <!-- conector hacia el embudo -->
      <path :d="`M${p.x + 110} 70 C ${p.x + 110} 96, 380 92, 380 116`" stroke="#2c3a61" stroke-width="2" fill="none" />
    </g>

    <!-- Embudo central -->
    <g text-anchor="middle">
      <rect x="270" y="118" width="220" height="52" rx="13" fill="var(--accent)" fill-opacity="0.16" stroke="var(--accent)" stroke-opacity="0.6" />
      <text x="380" y="142" fill="#eaf0fc" font-size="15" font-weight="700">C3 convertasa</text>
      <text x="380" y="160" fill="#9fabca" font-size="11">escisión de C3 → C3a + C3b</text>

      <path d="M380 170 V196" stroke="var(--accent)" stroke-width="2.5" fill="none" />
      <path d="M380 196 l-5 -9 h10 z" fill="var(--accent)" />

      <rect x="270" y="196" width="220" height="52" rx="13" fill="var(--accent)" fill-opacity="0.16" stroke="var(--accent)" stroke-opacity="0.6" />
      <text x="380" y="220" fill="#eaf0fc" font-size="15" font-weight="700">C5 convertasa</text>
      <text x="380" y="238" fill="#9fabca" font-size="11">escisión de C5 → C5a + C5b</text>

      <path d="M380 248 V274" stroke="var(--accent)" stroke-width="2.5" fill="none" />
      <path d="M380 274 l-5 -9 h10 z" fill="var(--accent)" />

      <!-- MAC destacado -->
      <rect x="246" y="274" width="268" height="66" rx="15" fill="var(--accent)" fill-opacity="0.22" stroke="var(--accent)" />
      <text x="380" y="300" fill="#eaf0fc" font-size="16" font-weight="700" font-family="Space Grotesk, sans-serif">MAC · complejo de ataque</text>
      <text x="380" y="322" fill="#eaf0fc" font-size="12">C5b–C6–C7–C8–C9 → poro → lisis celular</text>
    </g>

    <!-- Rama izquierda: opsonización -->
    <path d="M270 144 C 150 144, 150 360, 168 372" stroke="#34d399" stroke-width="2" fill="none" stroke-dasharray="5 4" />
    <rect x="10" y="356" width="200" height="58" rx="12" fill="#0f1f1c" stroke="#34d399" stroke-opacity="0.55" />
    <text x="26" y="380" fill="#34d399" font-size="13" font-weight="700">C3b · opsonina</text>
    <text x="26" y="400" fill="#9fabca" font-size="11">marca al patógeno → fagocitosis</text>

    <!-- Rama derecha: anafilotoxinas -->
    <path d="M490 144 C 610 144, 610 360, 592 372" stroke="#fbbf24" stroke-width="2" fill="none" stroke-dasharray="5 4" />
    <rect x="550" y="356" width="200" height="58" rx="12" fill="#231b06" stroke="#fbbf24" stroke-opacity="0.55" />
    <text x="566" y="380" fill="#fbbf24" font-size="13" font-weight="700">C3a / C5a</text>
    <text x="566" y="400" fill="#9fabca" font-size="11">anafilotoxinas → inflamación</text>
  </svg>
</template>
