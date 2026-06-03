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
    class="scroll-mt-24 border-t border-line pt-10 first:border-t-0 first:pt-0"
  >
    <header class="mb-5 flex items-center gap-3">
      <span class="h-9 w-1.5 rounded-full" :style="{ backgroundImage: 'linear-gradient(var(--accent), var(--accent2))' }" />
      <div>
        <p class="text-xs font-semibold uppercase tracking-wide" :style="{ color: 'var(--accent)' }">
          {{ clinicalCase.typeLabel }}
        </p>
        <h2 class="font-display mt-0.5 text-xl font-bold text-fg">{{ clinicalCase.title }}</h2>
      </div>
    </header>

    <article class="glass relative overflow-hidden rounded-2xl p-6">
      <span class="absolute left-0 top-0 h-full w-1" :style="{ background: 'var(--accent)' }" />
      <p class="text-sm leading-relaxed text-fg-muted">{{ clinicalCase.narrative }}</p>
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
