export function renderHighlighted(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-blue-500 dark:text-blue-400 font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}