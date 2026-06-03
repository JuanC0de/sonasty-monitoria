<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TOPICS } from '../data'
import { provideActivity } from '../composables/useActivity'
import SideNav from '../components/SideNav.vue'
import CaseSection from '../components/CaseSection.vue'
import SummaryTable from '../components/SummaryTable.vue'
import QuestionBlock from '../components/QuestionBlock.vue'
import ResourceSection from '../components/ResourceSection.vue'
import TopicIcon from '../components/TopicIcon.vue'
import ConceptDiagram from '../components/diagrams/ConceptDiagram.vue'

const route = useRoute()
const router = useRouter()

const topic = computed(() => TOPICS.find((t) => t.id === route.params.id))
const topicData = computed(() => topic.value?.data || null)

watch(topic, (newVal) => {
  if (!newVal) router.replace('/')
}, { immediate: true })

const { correctCount, verifiedCount, resetAll, totalItems } = provideActivity(topicData)

const progressLabel = computed(() => `${verifiedCount.value} / ${totalItems.value} verificadas`)
const scoreLabel = computed(() => `${correctCount.value} / ${totalItems.value} correctas`)
const progressPct = computed(() =>
  totalItems.value > 0 ? Math.round((verifiedCount.value / totalItems.value) * 100) : 0,
)
const ringDash = computed(() => {
  const c = 2 * Math.PI * 20
  return `${(progressPct.value / 100) * c} ${c}`
})

const quizComplete = computed(() => totalItems.value > 0 && verifiedCount.value >= totalItems.value)

const summaryMessage = computed(() => {
  if (!quizComplete.value) return ''
  const ratio = correctCount.value / totalItems.value
  if (ratio >= 0.9) return 'Excelente dominio del razonamiento clínico.'
  if (ratio >= 0.65) return 'Buen trabajo. Repasa los casos marcados en rojo y la tabla comparativa.'
  return 'Refuerza los conceptos clave y vuelve a intentarlo.'
})

const cases = computed(() => topicData.value?.CLINICAL_CASES || [])
const sectionIds = computed(() => cases.value.map((c) => `caso-${c.id}`))
</script>

<template>
  <div
    v-if="topic"
    class="min-h-svh"
    :style="{ '--accent': topic.accent, '--accent2': topic.accent2 }"
  >
    <header class="glass sticky top-0 z-30">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div class="flex items-center gap-3">
          <router-link
            to="/"
            class="rounded-full border border-line bg-ink-850/60 p-2 text-fg-muted transition hover:text-fg"
          >
            <span class="sr-only">Volver</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
            </svg>
          </router-link>
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
            :style="{ backgroundImage: 'linear-gradient(135deg, var(--accent), var(--accent2))' }"
          >
            <TopicIcon :name="topic.icon" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-wide" :style="{ color: 'var(--accent)' }">
              Aprendizaje activo
            </p>
            <h1 class="font-display text-base font-bold text-fg sm:text-lg">{{ topic.title }}</h1>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <!-- Anillo de progreso -->
          <div class="flex items-center gap-2.5" role="status" aria-live="polite">
            <svg class="h-11 w-11 -rotate-90" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="20" fill="none" stroke="var(--color-line-strong)" stroke-width="4" />
              <circle
                cx="22" cy="22" r="20" fill="none" stroke="var(--accent)" stroke-width="4"
                stroke-linecap="round" :stroke-dasharray="ringDash"
                style="transition: stroke-dasharray 0.5s ease"
              />
            </svg>
            <div class="leading-tight">
              <p class="text-sm font-bold tabular-nums text-fg">{{ scoreLabel }}</p>
              <p class="text-[11px] text-fg-dim">{{ progressLabel }}</p>
            </div>
          </div>
          <button
            type="button"
            class="rounded-xl border border-line bg-ink-850/60 px-3 py-2 text-sm font-semibold text-fg-muted transition hover:text-fg"
            @click="resetAll"
          >
            Reiniciar
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
        <nav class="mb-8 flex flex-wrap gap-2 md:hidden" aria-label="Secciones (móvil)">
          <a href="#inicio" class="rounded-full border border-line bg-ink-850/60 px-3 py-1 text-xs font-medium text-fg-muted">Inicio</a>
          <a
            v-for="c in cases"
            :key="c.id"
            :href="`#caso-${c.id}`"
            class="rounded-full border border-line bg-ink-850/60 px-3 py-1 text-xs font-medium text-fg-muted"
          >{{ c.shortLabel }}</a>
          <a href="#tabla" class="rounded-full border border-line bg-ink-850/60 px-3 py-1 text-xs font-medium text-fg-muted">Tabla</a>
          <a href="#quiz" class="rounded-full border border-line bg-ink-850/60 px-3 py-1 text-xs font-medium text-fg-muted">Quiz</a>
          <a v-if="topicData.RESOURCES && topicData.RESOURCES.length > 0" href="#recursos" class="rounded-full border border-line bg-ink-850/60 px-3 py-1 text-xs font-medium text-fg-muted">Recursos</a>
        </nav>

        <section id="inicio" class="animate-rise scroll-mt-28">
          <div class="glass rounded-2xl p-6 sm:p-8">
            <h2 class="font-display text-base font-semibold text-fg">Cómo usar esta actividad</h2>
            <p class="mt-3 text-sm leading-relaxed text-fg-muted">
              Repasa primero el <strong class="font-semibold text-fg">diagrama</strong>, luego recorre los casos. En cada pregunta marca <strong class="font-semibold text-fg">todas</strong> las opciones correctas y pulsa <em>Comprobar respuesta</em> para ver retroalimentación inmediata. Cierra con la tabla comparativa y el mini quiz.
            </p>
          </div>
        </section>

        <!-- Diagrama didáctico del tema -->
        <section id="diagrama" class="animate-rise mt-8 scroll-mt-28">
          <ConceptDiagram
            :diagram="topic.diagram"
            title="Diagrama del tema"
            caption="Esquema de apoyo para fijar el mecanismo central antes de resolver los casos."
          />
        </section>

        <div class="mt-10 flex flex-col gap-10">
          <CaseSection
            v-for="(c, i) in cases"
            :key="c.id"
            :section-id="sectionIds[i]"
            :clinical-case="c"
          />
        </div>

        <section id="tabla" class="mt-10 scroll-mt-28 border-t border-line pt-10">
          <h2 class="font-display text-xl font-bold text-fg">Tabla comparativa</h2>
          <p class="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">
            Usa esta síntesis para anclar conceptos importantes antes del quiz final.
          </p>
          <div class="mt-6">
            <SummaryTable :rows="topicData.SUMMARY_ROWS" />
          </div>
        </section>

        <section id="quiz" class="mt-10 scroll-mt-28 border-t border-line pt-10">
          <h2 class="font-display text-xl font-bold text-fg">Mini quiz final</h2>
          <p class="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">
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
            class="glow-accent glass mt-8 rounded-2xl p-6 text-sm"
          >
            <p class="font-display font-bold text-fg">¡Actividad completada!</p>
            <p class="mt-2 leading-relaxed text-fg-muted">
              Puntuación: <strong class="tabular-nums text-fg">{{ correctCount }} / {{ totalItems }}</strong>.
              {{ summaryMessage }}
            </p>
            <button
              type="button"
              class="mt-4 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow transition hover:brightness-110"
              :style="{ backgroundImage: 'linear-gradient(135deg, var(--accent), var(--accent2))' }"
              @click="resetAll"
            >
              Volver a empezar
            </button>
          </div>
        </section>

        <ResourceSection :resources="topicData.RESOURCES || []" />
      </main>
    </div>
  </div>
</template>
