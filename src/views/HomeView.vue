<script setup>
import { TOPICS } from '../data'
</script>

<template>
  <div class="min-h-svh bg-slate-100 px-4 py-10 sm:px-6">
    <div class="mx-auto max-w-4xl">
      <header class="mb-10 text-center">
        <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Módulos de Inmunología
        </h1>
        <p class="mt-4 text-lg text-slate-600">
          Selecciona un tema para explorar casos clínicos y preguntas de razonamiento.
        </p>
      </header>

      <div class="grid gap-6 sm:grid-cols-2">
        <router-link
          v-for="topic in TOPICS"
          :key="topic.id"
          :to="{ name: 'topic', params: { id: topic.id } }"
          class="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md"
        >
          <div class="mb-4">
            <h2 class="text-lg font-semibold text-slate-900 group-hover:text-primary-700">
              {{ topic.title }}
            </h2>
          </div>
          <span
            class="inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition group-hover:text-primary-700"
          >
            Comenzar actividad
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
