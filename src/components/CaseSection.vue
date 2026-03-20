<script setup>
import QuestionBlock from './QuestionBlock.vue'

defineProps({
  sectionId: { type: String, required: true },
  clinicalCase: { type: Object, required: true },
})
</script>

<template>
  <section
    :id="sectionId"
    class="scroll-mt-24 border-t border-slate-200/80 pt-10 first:border-t-0 first:pt-0"
  >
    <header class="mb-5">
      <p class="text-xs font-semibold uppercase tracking-wide text-primary-600">
        {{ clinicalCase.typeLabel }}
      </p>
      <h2 class="mt-1 text-xl font-bold text-slate-900">{{ clinicalCase.title }}</h2>
    </header>

    <article
      class="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-sm"
    >
      <p class="text-sm leading-relaxed text-slate-700">{{ clinicalCase.narrative }}</p>
    </article>

    <div class="mt-6 flex flex-col gap-5">
      <QuestionBlock
        v-for="q in clinicalCase.questions"
        :key="q.id"
        scope="case"
        :case-id="clinicalCase.id"
        :question="q"
      />
    </div>
  </section>
</template>
