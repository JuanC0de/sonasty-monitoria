<script setup>
import { computed, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TOPICS } from '../data'
import { provideActivity } from '../composables/useActivity'
import SideNav from '../components/SideNav.vue'
import CaseSection from '../components/CaseSection.vue'
import SummaryTable from '../components/SummaryTable.vue'
import QuestionBlock from '../components/QuestionBlock.vue'
import ResourceSection from '../components/ResourceSection.vue'

const route = useRoute()
const router = useRouter()

const topic = computed(() => TOPICS.find((t) => t.id === route.params.id))
const topicData = computed(() => topic.value?.data || null)

// Redirect if topic not found
watch(topic, (newVal) => {
  if (!newVal) {
    router.replace('/')
  }
}, { immediate: true })

const { correctCount, verifiedCount, resetAll, totalItems } = provideActivity(topicData)

const progressLabel = computed(() => `${verifiedCount.value} / ${totalItems.value} verificadas`)
const scoreLabel = computed(() => `${correctCount.value} / ${totalItems.value} correctas`)

const quizComplete = computed(() => totalItems.value > 0 && verifiedCount.value >= totalItems.value)

const summaryMessage = computed(() => {
  if (!quizComplete.value) return ''
  const ratio = correctCount.value / totalItems.value
  if (ratio >= 0.9) return 'Excelente dominio del razonamiento clínico.'
  if (ratio >= 0.65) return 'Buen trabajo. Repasa los casos marcados en rojo y la tabla comparativa.'
  return 'Refuerza los conceptos clave y vuelve a intentarlo.'
})

const cases = computed(() => topicData.value?.CLINICAL_CASES || [])
const sectionIds = computed(() => cases.value.map(c => `caso-${c.id}`))
</script>

<template>
  <div v-if="topic" class="min-h-svh bg-slate-100 text-slate-900">
    <header
      class="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div
        class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <div class="flex items-center gap-3">
          <router-link to="/" class="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
            <span class="sr-only">Volver</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
            </svg>
          </router-link>
          <div>
            <p class="text-xs font-semibold uppercase tracking-wide text-primary-600">
              Aprendizaje activo
            </p>
            <h1 class="text-lg font-bold text-slate-900 sm:text-xl">
              {{ topic.title }}
            </h1>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
          <div
            class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm tabular-nums text-slate-700"
            role="status"
            aria-live="polite"
          >
            <span class="font-medium text-primary-700">{{ scoreLabel }}</span>
            <span class="text-slate-300">·</span>
            <span class="text-slate-500">{{ progressLabel }}</span>
          </div>
          <button
            type="button"
            class="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            @click="resetAll"
          >
            Reiniciar actividad
          </button>
        </div>
      </div>
    </header>

    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 pb-16 md:flex-row md:gap-10 md:px-6">
      <aside class="hidden shrink-0 md:block md:w-52 lg:w-56" aria-label="Navegación">
        <SideNav :cases="cases" />
      </aside>

      <main class="min-w-0 flex-1">
        <!-- Móvil: navegación compacta -->
        <nav
          class="mb-8 flex flex-wrap gap-2 md:hidden"
          aria-label="Secciones (móvil)"
        >
          <a href="#inicio" class="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 shadow-sm ring-1 ring-slate-200/80">
            Inicio
          </a>
          <a
            v-for="(c, i) in cases"
            :key="c.id"
            :href="`#caso-${c.id}`"
            class="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 shadow-sm ring-1 ring-slate-200/80"
          >
            {{ c.shortLabel }}
          </a>
          <a href="#tabla" class="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 shadow-sm ring-1 ring-slate-200/80">
            Tabla
          </a>
          <a href="#quiz" class="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 shadow-sm ring-1 ring-slate-200/80">
            Quiz
          </a>
          <a v-if="topicData.RESOURCES && topicData.RESOURCES.length > 0" href="#recursos" class="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 shadow-sm ring-1 ring-slate-200/80">
            Recursos
          </a>
        </nav>

        <section id="inicio" class="scroll-mt-28">
          <div class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
            <h2 class="text-base font-semibold text-slate-900">Cómo usar esta actividad</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              Recorre los casos de este tema. En cada pregunta marca <strong class="font-medium text-slate-800">todas</strong> las opciones que consideres correctas y pulsa <em>Comprobar respuesta</em> para ver retroalimentación inmediata. Al final, repasa con la tabla comparativa y el mini quiz.
            </p>
          </div>
        </section>

        <CaseSection
          v-for="(c, i) in cases"
          :key="c.id"
          :section-id="sectionIds[i]"
          :clinical-case="c"
        />

        <section id="tabla" class="scroll-mt-28 border-t border-slate-200/80 pt-10">
          <h2 class="text-xl font-bold text-slate-900">Tabla comparativa</h2>
          <p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Usa esta síntesis para anclar conceptos importantes antes del quiz final.
          </p>
          <div class="mt-6">
            <SummaryTable :rows="topicData.SUMMARY_ROWS" />
          </div>
        </section>

        <section id="quiz" class="scroll-mt-28 border-t border-slate-200/80 pt-10">
          <h2 class="text-xl font-bold text-slate-900">Mini quiz final</h2>
          <p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Ítems de integración. Misma mecánica de respuesta.
          </p>
          <div class="mt-6 flex flex-col gap-5">
            <QuestionBlock
              v-for="q in topicData.FINAL_QUIZ"
              :key="q.id"
              scope="quiz"
              :question="q"
            />
          </div>

          <div
            v-if="quizComplete"
            class="mt-8 rounded-2xl border border-primary-200 bg-primary-50/80 p-6 text-sm text-primary-950"
          >
            <p class="font-semibold">Actividad completada</p>
            <p class="mt-2 leading-relaxed">
              Puntuación: <strong class="tabular-nums">{{ correctCount }} / {{ totalItems }}</strong>.
              {{ summaryMessage }}
            </p>
            <button
              type="button"
              class="mt-4 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              @click="resetAll"
            >
              Volver a empezar
            </button>
          </div>
        </section>

        <!-- Recursos -->
        <ResourceSection :resources="topicData.RESOURCES || []" />
      </main>
    </div>
  </div>
</template>
