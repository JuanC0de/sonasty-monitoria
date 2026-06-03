<script setup>
import HypersensitivityDiagram from './HypersensitivityDiagram.vue'
import InnateDiagram from './InnateDiagram.vue'
import ComplementDiagram from './ComplementDiagram.vue'
import MhcDiagram from './MhcDiagram.vue'
import CellularDiagram from './CellularDiagram.vue'

const props = defineProps({
  diagram: { type: String, required: true },
  title: { type: String, default: '' },
  caption: { type: String, default: '' },
})

const map = {
  hypersensitivity: HypersensitivityDiagram,
  innate: InnateDiagram,
  complement: ComplementDiagram,
  mhc: MhcDiagram,
  cellular: CellularDiagram,
}
</script>

<template>
  <figure
    v-if="map[diagram]"
    class="glass overflow-hidden rounded-3xl p-5 sm:p-7"
  >
    <figcaption v-if="title" class="mb-4 flex items-center gap-2.5">
      <span class="h-2.5 w-2.5 rounded-full" :style="{ background: 'var(--accent)' }" />
      <span class="font-display text-sm font-semibold uppercase tracking-wide text-fg-muted">
        {{ title }}
      </span>
    </figcaption>

    <div class="w-full overflow-x-auto">
      <component :is="map[diagram]" class="h-auto w-full min-w-[560px]" />
    </div>

    <p v-if="caption" class="mt-4 text-xs leading-relaxed text-fg-dim">
      {{ caption }}
    </p>
  </figure>
</template>
