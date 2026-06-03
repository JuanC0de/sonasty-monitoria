<script setup>
import { computed } from 'vue'
import { injectActivity } from '../composables/useActivity'

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
} = injectActivity()

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
      ? 'is-selected text-fg'
      : 'border-line bg-ink-850/60 text-fg-muted hover:border-line-strong hover:text-fg'
  }
  if (option.correct) {
    return 'border-success/60 bg-success-soft/60 text-fg'
  }
  if (sel && !option.correct) {
    return 'border-danger/60 bg-danger-soft/60 text-fg'
  }
  return 'border-line bg-ink-850/40 text-fg-dim opacity-70'
}
</script>

<template>
  <div class="glass rounded-2xl p-4 sm:p-5">
    <p class="text-sm font-medium leading-snug text-fg">{{ question.prompt }}</p>

    <ul class="mt-3.5 flex flex-col gap-2">
      <li v-for="opt in question.options" :key="opt.id">
        <label
          class="flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-2.5 text-sm transition-colors"
          :class="optionClass(opt)"
        >
          <input
            type="checkbox"
            class="mt-0.5 h-4 w-4 shrink-0 rounded border-line-strong bg-ink-800 accent-[var(--accent)]"
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
        class="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:cursor-not-allowed disabled:opacity-40"
        :style="{ backgroundImage: 'linear-gradient(135deg, var(--accent), var(--accent2))' }"
        :disabled="meta.verified || meta.selection.length === 0"
        @click="verify"
      >
        Comprobar respuesta
      </button>
      <span v-if="meta.verified" class="inline-flex items-center gap-1.5 text-sm font-semibold">
        <span v-if="meta.correct" class="text-success">✓ Correcto</span>
        <span v-else class="text-danger">✕ Incorrecto</span>
      </span>
    </div>

    <p
      v-if="meta.verified"
      class="mt-3 rounded-xl border p-3 text-sm leading-relaxed"
      :class="
        meta.correct
          ? 'border-success/40 bg-success-soft/50 text-fg'
          : 'border-danger/40 bg-danger-soft/50 text-fg'
      "
    >
      {{ question.explanation }}
    </p>
  </div>
</template>

<style scoped>
.is-selected {
  border-color: var(--accent);
  background-color: color-mix(in oklab, var(--accent) 14%, transparent);
  box-shadow: 0 0 0 1px color-mix(in oklab, var(--accent) 35%, transparent);
}
</style>
