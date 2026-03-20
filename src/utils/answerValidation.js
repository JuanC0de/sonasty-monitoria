export function evaluateMultiselect(question, selectedIds) {
  const correct = new Set(question.options.filter((o) => o.correct).map((o) => o.id))
  const sel = new Set(selectedIds)
  if (correct.size !== sel.size) return false
  for (const id of correct) {
    if (!sel.has(id)) return false
  }
  return true
}
