const suggestedQueries = [
  "> What is their strongest language?",
  "> Explain their RAG architecture",
  "> Summarize recent impact",
]


export default function ChatMessages() {
  return (
    <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-6">
      <div className="max-w-[85%] self-start">
        <div className="mb-1 flex items-center gap-2 text-xs font-mono text-muted">
          <span className="material-symbols-outlined text-[14px] text-primary">
            smart_toy
          </span>
          <span>System</span>
          <span>[10:42 AM]</span>
        </div>

        <div className="rounded-r-lg rounded-bl-lg border border-border-color bg-surface p-4 text-sm leading-relaxed text-zinc-300 shadow-sm">
          <p className="font-display">
            Hello. I am the interactive agent trained on Edem Ahorlu's
            professional history, code repositories, and system designs.
          </p>

          <p className="mt-4 font-display">
            You can ask me about their architectural decisions, specific tech
            stack experience, or request a summary of their impact at previous
            roles.
          </p>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col gap-3 self-start">
        <p className="text-xs font-mono uppercase tracking-widest text-muted">
          Suggested Queries:
        </p>

        <div className="flex flex-wrap gap-2">
          {suggestedQueries.map((query) => (
            <button
              key={query}
              className="rounded border border-border-color bg-surface px-4 py-2 text-left font-mono text-sm text-muted transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              {query}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}