import { computed, reactive } from 'vue'
import { CLINICAL_CASES, FINAL_QUIZ, getTotalQuestionCount } from '../data/clinicalData'
import { evaluateMultiselect } from '../utils/answerValidation'

function caseKey(caseId, questionId) {
  return `c:${caseId}:${questionId}`
}

/**
 * Estado global de la actividad (frontend only).
 * selections: opción id[] por pregunta
 * verified: si ya se pulsó "Comprobar"
 * outcomes: resultado tras verificar (solo lectura pedagógica)
 */
const activity = reactive({
  selections: {},
  verified: {},
  outcomes: {},
})

function ensureSelectionArray(key) {
  if (!activity.selections[key]) activity.selections[key] = []
  return activity.selections[key]
}

export function useActivity() {
  const totalItems = getTotalQuestionCount()

  function selectionFor(caseId, questionId) {
    return activity.selections[caseKey(caseId, questionId)] || []
  }

  function selectionQuiz(quizId) {
    return activity.selections[`q:${quizId}`] || []
  }

  function toggleCaseOption(caseId, questionId, optionId) {
    const key = caseKey(caseId, questionId)
    if (activity.verified[key]) return
    const arr = ensureSelectionArray(key)
    const i = arr.indexOf(optionId)
    if (i >= 0) arr.splice(i, 1)
    else arr.push(optionId)
  }

  function toggleQuizOption(quizId, optionId) {
    const key = `q:${quizId}`
    if (activity.verified[key]) return
    const arr = ensureSelectionArray(key)
    const i = arr.indexOf(optionId)
    if (i >= 0) arr.splice(i, 1)
    else arr.push(optionId)
  }

  function verifyCaseQuestion(caseId, question) {
    const key = caseKey(caseId, question.id)
    if (activity.verified[key]) return
    const sel = activity.selections[key] || []
    activity.outcomes[key] = evaluateMultiselect(question, sel)
    activity.verified[key] = true
  }

  function verifyQuizQuestion(question) {
    const key = `q:${question.id}`
    if (activity.verified[key]) return
    const sel = activity.selections[key] || []
    activity.outcomes[key] = evaluateMultiselect(question, sel)
    activity.verified[key] = true
  }

  function caseMeta(caseId, questionId) {
    const key = caseKey(caseId, questionId)
    return {
      verified: !!activity.verified[key],
      correct: activity.outcomes[key] === true ? true : activity.outcomes[key] === false ? false : null,
      selection: activity.selections[key] || [],
    }
  }

  function quizMeta(quizId) {
    const key = `q:${quizId}`
    return {
      verified: !!activity.verified[key],
      correct: activity.outcomes[key] === true ? true : activity.outcomes[key] === false ? false : null,
      selection: activity.selections[key] || [],
    }
  }

  function resetAll() {
    activity.selections = {}
    activity.verified = {}
    activity.outcomes = {}
  }

  const correctCount = computed(() => {
    let n = 0
    for (const c of CLINICAL_CASES) {
      for (const q of c.questions) {
        const key = caseKey(c.id, q.id)
        if (!activity.verified[key]) continue
        if (activity.outcomes[key]) n++
      }
    }
    for (const q of FINAL_QUIZ) {
      const key = `q:${q.id}`
      if (!activity.verified[key]) continue
      if (activity.outcomes[key]) n++
    }
    return n
  })

  const verifiedCount = computed(() => {
    let n = 0
    for (const c of CLINICAL_CASES) {
      for (const q of c.questions) {
        if (activity.verified[caseKey(c.id, q.id)]) n++
      }
    }
    for (const q of FINAL_QUIZ) {
      if (activity.verified[`q:${q.id}`]) n++
    }
    return n
  })

  return {
    activity,
    totalItems,
    selectionFor,
    selectionQuiz,
    toggleCaseOption,
    toggleQuizOption,
    verifyCaseQuestion,
    verifyQuizQuestion,
    caseMeta,
    quizMeta,
    resetAll,
    correctCount,
    verifiedCount,
  }
}
