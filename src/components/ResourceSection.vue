<script setup>
import { computed } from 'vue'

const props = defineProps({
  resources: {
    type: Array,
    required: true,
    default: () => []
  }
})

const hasResources = computed(() => props.resources && props.resources.length > 0)

const images = computed(() => props.resources.filter(r => r.type === 'image'))
const videos = computed(() => props.resources.filter(r => r.type === 'video'))
const books = computed(() => props.resources.filter(r => r.type === 'book'))
</script>

<template>
  <section v-if="hasResources" id="recursos" class="scroll-mt-28 border-t border-line pt-10 mt-10">
    <h2 class="font-display text-xl font-bold text-fg mb-6">Recursos y multimedia</h2>

    <div class="flex flex-col gap-8">
      <!-- Imágenes -->
      <div v-if="images.length > 0" class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold uppercase tracking-wide" :style="{ color: 'var(--accent)' }">Imágenes de apoyo</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <figure v-for="img in images" :key="img.id" class="glass overflow-hidden rounded-2xl">
            <img :src="img.url" :alt="img.title" loading="lazy" class="aspect-[4/3] w-full object-cover" />
            <figcaption class="p-4">
              <p class="font-semibold text-fg text-sm">{{ img.title }}</p>
              <p class="mt-1 text-xs text-fg-muted leading-relaxed">{{ img.description }}</p>
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- Videos -->
      <div v-if="videos.length > 0" class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold uppercase tracking-wide" :style="{ color: 'var(--accent)' }">Material audiovisual</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="vid in videos" :key="vid.id" class="glass flex flex-col overflow-hidden rounded-2xl">
            <div class="aspect-video w-full bg-ink-950">
              <iframe
                class="h-full w-full"
                :src="vid.url"
                title="Video educativo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-4">
              <p class="font-semibold text-fg text-sm">{{ vid.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Libros y Artículos -->
      <div v-if="books.length > 0" class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold uppercase tracking-wide" :style="{ color: 'var(--accent)' }">Bibliografía y fuentes</h3>
        <div class="grid gap-3">
          <a
            v-for="book in books"
            :key="book.id"
            :href="book.url"
            target="_blank"
            rel="noopener noreferrer"
            class="res-link group glass flex items-center gap-4 rounded-2xl p-4 transition"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
              :style="{ backgroundImage: 'linear-gradient(135deg, var(--accent), var(--accent2))' }"
            >
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.75 16.82A8.962 8.962 0 0112 17.25c.716 0 1.39-.133 2.02-.371.494-.188 1.036-.086 1.433.277.585.534 1.547.414 1.547-.367V5.592c0-.462-.35-.853-.808-.94a7.474 7.474 0 00-4.192.355l-.472.196a.75.75 0 01-.556 0l-.472-.196A7.474 7.474 0 006.308 4.65c-.458.087-.808.478-.808.941v11.196c0 .78.962.9 1.547.367.397-.363.94-.465 1.433-.277.63.238 1.304.371 2.02.371a8.962 8.962 0 001.25-.082z" />
              </svg>
            </div>
            <div class="min-w-0">
              <p class="font-semibold text-fg text-sm group-hover:text-[var(--accent)]">{{ book.title }}</p>
              <p class="text-xs text-fg-muted">{{ book.description }}</p>
            </div>
            <svg class="ml-auto h-4 w-4 shrink-0 text-fg-dim transition group-hover:text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.res-link:hover {
  border-color: color-mix(in oklab, var(--accent) 50%, transparent);
}
</style>
