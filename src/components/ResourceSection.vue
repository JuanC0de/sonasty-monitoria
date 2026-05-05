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
  <section v-if="hasResources" id="recursos" class="scroll-mt-28 border-t border-slate-200/80 pt-10 mt-10">
    <h2 class="text-xl font-bold text-slate-900 mb-6">Recursos Adicionales y Multimedia</h2>

    <div class="flex flex-col gap-8">
      <!-- Imágenes -->
      <div v-if="images.length > 0" class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-primary-600">Imágenes de Apoyo</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <figure v-for="img in images" :key="img.id" class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <img :src="img.url" :alt="img.title" class="aspect-[4/3] w-full object-cover" />
            <figcaption class="p-4">
              <p class="font-semibold text-slate-900 text-sm">{{ img.title }}</p>
              <p class="mt-1 text-xs text-slate-600 leading-relaxed">{{ img.description }}</p>
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- Videos -->
      <div v-if="videos.length > 0" class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-primary-600">Material Audiovisual</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="vid in videos" :key="vid.id" class="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div class="aspect-video w-full bg-slate-100">
              <iframe 
                class="h-full w-full"
                :src="vid.url" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-4">
              <p class="font-semibold text-slate-900 text-sm">{{ vid.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Libros y Artículos -->
      <div v-if="books.length > 0" class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-primary-600">Bibliografía Recomendada</h3>
        <div class="grid gap-3">
          <a 
            v-for="book in books" 
            :key="book.id"
            :href="book.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-primary-300 hover:shadow-md"
          >
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.75 16.82A8.962 8.962 0 0112 17.25c.716 0 1.39-.133 2.02-.371.494-.188 1.036-.086 1.433.277.585.534 1.547.414 1.547-.367V5.592c0-.462-.35-.853-.808-.94a7.474 7.474 0 00-4.192.355l-.472.196a.75.75 0 01-.556 0l-.472-.196A7.474 7.474 0 006.308 4.65c-.458.087-.808.478-.808.941v11.196c0 .78.962.9 1.547.367.397-.363.94-.465 1.433-.277.63.238 1.304.371 2.02.371a8.962 8.962 0 001.25-.082z" />
              </svg>
            </div>
            <div>
              <p class="font-semibold text-slate-900 text-sm group-hover:text-primary-700">{{ book.title }}</p>
              <p class="text-xs text-slate-600">{{ book.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
