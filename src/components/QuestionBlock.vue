<script setup>
import { computed } from 'vue'
import { useActivity } from '../composables/useActivity'

const props = defineProps({
  scope: { type: String, required: true }, // 'case' | 'quiz'
  caseId: { type: String, default: '' },
  question: { type: Object, required: true },
})

const {
  toggleCaseOption,
  toggleQuizOption,
  verifyCaseQuestion,
  verifyQuizQuestion,
  caseMeta,
  quizMeta,
} = useActivity()

const meta = computed(() =>
  props.scope === 'case'
    ? caseMeta(props.caseId, props.question.id)
    : quizMeta(props.question.id),
)

function toggle(optId) {
  if (props.scope === 'case') toggleCaseOption(props.caseId, props.question.id, optId)
  else toggleQuizOption(props.question.id, optId)
}

function verify() {
  if (props.scope === 'case') verifyCaseQuestion(props.caseId, props.question)
  else verifyQuizQuestion(props.question)
}

function optionClass(option) {
  const sel = meta.value.selection.includes(option.id)
  if (!meta.value.verified) {
    return sel
      ? 'border-primary-500 bg-primary-50 ring-1 ring-primary-500/30'
      : 'border-slate-200 bg-white hover:border-slate-300'
  }
  if (option.correct) {
    return 'border-green-600 bg-green-50/90 ring-1 ring-green-600/25'
  }
  if (sel && !option.correct) {
    return 'border-red-600 bg-red-50/90 ring-1 ring-red-600/25'
  }
  return 'border-slate-100 bg-slate-50/80 opacity-70'
}
</script>

<template>
  <div class="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
    <p class="text-sm font-medium leading-snug text-slate-800">{{ question.prompt }}</p>

    <ul class="mt-3 flex flex-col gap-2">
      <li v-for="opt in question.options" :key="opt.id">
        <label
          class="flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-sm text-slate-700 transition-colors"
          :class="optionClass(opt)"
        >
          <input
            type="checkbox"
            class="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
            :checked="meta.selection.includes(opt.id)"
            :disabled="meta.verified"
            @change.prevent="toggle(opt.id)"
          />
          <span class="leading-snug">{{ opt.text }}</span>
        </label>
      </li>
    </ul>

    <div class="mt-4 flex flex-wrap items-center gap-3">
      <button
        type="button"
        class="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="meta.verified || meta.selection.length === 0"
        @click="verify"
      >
        Comprobar respuesta
      </button>
      <span v-if="meta.verified" class="text-sm font-semibold">
        <span v-if="meta.correct" class="text-green-700">Correcto</span>
        <span v-else class="text-red-700">Incorrecto</span>
      </span>
    </div>

    <p
      v-if="meta.verified"
      class="mt-3 rounded-lg border text-sm leading-relaxed"
      :class="
        meta.correct
          ? 'border-green-200 bg-green-50/80 p-3 text-green-900'
          : 'border-red-200 bg-red-50/80 p-3 text-red-900'
      "
    >
      {{ question.explanation }}
    </p>
  </div>
</template>
