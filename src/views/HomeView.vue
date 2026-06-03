<script setup>
import { TOPICS } from '../data'
import TopicIcon from '../components/TopicIcon.vue'

function topicQuestionCount(topic) {
  try {
    return topic.data.getTotalQuestionCount?.() ?? 0
  } catch {
    return 0
  }
}
</script>

<template>
  <div class="min-h-svh px-4 py-12 sm:px-6">
    <div class="mx-auto max-w-5xl">
      <!-- Hero -->
      <header class="animate-rise mb-12 text-center sm:mb-16">
        <span
          class="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-fg-muted"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style="animation: pulse-glow 2s ease-in-out infinite" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Aprendizaje activo · Inmunología
        </span>

        <h1 class="font-display mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Domina la
          <span class="text-gradient">Inmunología</span>
          <br class="hidden sm:block" />
          caso por caso
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          Cinco módulos interactivos con casos clínicos, diagramas explicativos,
          tablas comparativas y mini quizzes con retroalimentación inmediata.
        </p>
      </header>

      <!-- Tarjetas de tema -->
      <div class="grid gap-5 sm:grid-cols-2">
        <router-link
          v-for="(topic, i) in TOPICS"
          :key="topic.id"
          :to="{ name: 'topic', params: { id: topic.id } }"
          class="group glass animate-rise relative flex flex-col overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1"
          :style="{ '--accent': topic.accent, '--accent2': topic.accent2, animationDelay: `${i * 70}ms` }"
        >
          <!-- Resplandor superior -->
          <div
            class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-50 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
            :style="{ background: `radial-gradient(circle, ${topic.accent}, transparent 70%)` }"
          />

          <div class="relative flex items-start justify-between gap-4">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
              :style="{ backgroundImage: `linear-gradient(135deg, ${topic.accent}, ${topic.accent2})`, boxShadow: `0 10px 30px -8px ${topic.accent}` }"
            >
              <TopicIcon :name="topic.icon" class="h-7 w-7" />
            </div>
            <span
              class="rounded-full border border-line bg-ink-850/70 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-fg-muted"
            >
              {{ topicQuestionCount(topic) }} preguntas
            </span>
          </div>

          <h2 class="font-display mt-5 text-xl font-bold text-fg">
            {{ topic.title }}
          </h2>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
            {{ topic.tagline }}
          </p>

          <span
            class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
            :style="{ color: topic.accent }"
          >
            Comenzar actividad
            <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </span>
        </router-link>
      </div>

      <footer class="mt-14 text-center text-xs text-fg-dim">
        Material de estudio · Fuentes verificadas (NCBI Bookshelf / StatPearls)
      </footer>
    </div>
  </div>
</template>
