<script setup>
import { computed } from 'vue'
import { CLINICAL_CASES, FINAL_QUIZ, getTotalQuestionCount } from './data/clinicalData'
import { useActivity } from './composables/useActivity'
import SideNav from './components/SideNav.vue'
import CaseSection from './components/CaseSection.vue'
import SummaryTable from './components/SummaryTable.vue'
import QuestionBlock from './components/QuestionBlock.vue'

const sectionIds = ['tipo-i', 'tipo-ii', 'tipo-iii', 'tipo-iv']

const { correctCount, verifiedCount, resetAll } = useActivity()

const total = getTotalQuestionCount()

const progressLabel = computed(() => `${verifiedCount.value} / ${total} verificadas`)
const scoreLabel = computed(() => `${correctCount.value} / ${total} correctas`)

const quizComplete = computed(() => verifiedCount.value >= total)

const summaryMessage = computed(() => {
  if (!quizComplete.value) return ''
  const ratio = correctCount.value / total
  if (ratio >= 0.9) return 'Excelente dominio del razonamiento clínico.'
  if (ratio >= 0.65) return 'Buen trabajo. Repasa los casos marcados en rojo y la tabla comparativa.'
  return 'Refuerza la diferencia entre tiempos, mediadores y ejemplos paradigmáticos.'
})
</script>

<template>
  <div class="min-h-svh bg-slate-100 text-slate-900">
    <header
      class="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div
        class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-primary-600">
            Aprendizaje activo
          </p>
          <h1 class="text-lg font-bold text-slate-900 sm:text-xl">
            Hipersensibilidad I–IV: casos y razonamiento
          </h1>
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
        <SideNav />
      </aside>

      <main class="min-w-0 flex-1">
        <!-- Móvil: navegación compacta -->
        <nav
          class="mb-8 flex flex-wrap gap-2 md:hidden"
          aria-label="Secciones (móvil)"
        >
          <a
            v-for="id in ['inicio', ...sectionIds, 'tabla', 'quiz']"
            :key="id"
            :href="`#${id}`"
            class="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 shadow-sm ring-1 ring-slate-200/80"
          >
            {{
              id === 'inicio'
                ? 'Inicio'
                : id === 'tabla'
                  ? 'Tabla'
                  : id === 'quiz'
                    ? 'Quiz'
                    : id.replace('tipo-', 'T')
            }}
          </a>
        </nav>

        <section id="inicio" class="scroll-mt-28">
          <div
            class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 class="text-base font-semibold text-slate-900">Cómo usar esta actividad</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              Recorre los cuatro casos (uno por tipo de hipersensibilidad según Gell y Coombs). En cada
              pregunta marca <strong class="font-medium text-slate-800">todas</strong> las opciones
              que consideres correctas y pulsa <em>Comprobar respuesta</em> para ver feedback
              inmediato. Al final, integra conceptos con la tabla y el mini quiz.
            </p>
            <ul class="mt-4 list-inside list-disc space-y-1 text-sm text-slate-600">
              <li>Azul: navegación y acentos principales.</li>
              <li>Verde y rojo: retroalimentación correcta e incorrecta.</li>
              <li>Sin servidor: todo corre en tu navegador.</li>
            </ul>
          </div>
        </section>

        <CaseSection
          v-for="(c, i) in CLINICAL_CASES"
          :key="c.id"
          :section-id="sectionIds[i]"
          :clinical-case="c"
        />

        <section id="tabla" class="scroll-mt-28 border-t border-slate-200/80 pt-10">
          <h2 class="text-xl font-bold text-slate-900">Tabla comparativa</h2>
          <p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Usa esta síntesis para anclar tiempos, mediadores y ejemplos antes del quiz final.
          </p>
          <div class="mt-6">
            <SummaryTable />
          </div>
        </section>

        <section id="quiz" class="scroll-mt-28 border-t border-slate-200/80 pt-10">
          <h2 class="text-xl font-bold text-slate-900">Mini quiz final</h2>
          <p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Cinco ítems de integración. Misma mecánica: selección múltiple cuando aplique y
            comprobación explícita.
          </p>
          <div class="mt-6 flex flex-col gap-5">
            <QuestionBlock
              v-for="q in FINAL_QUIZ"
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
              Puntuación: <strong class="tabular-nums">{{ correctCount }} / {{ total }}</strong>.
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
      </main>
    </div>
  </div>
</template>
