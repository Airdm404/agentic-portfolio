type ChatInputProps = {
  inputMessage: string
  setInputMessage: React.Dispatch<React.SetStateAction<string>>
  onSend: () => void
  onSelectSuggestedQuery: (query: string) => void;
};


const suggestedQueries = [
  "What is their strongest language?",
  "Explain their RAG architecture",
]


export default function ChatInput({
    inputMessage,
    setInputMessage,
    onSend,
    onSelectSuggestedQuery
}: ChatInputProps) {

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
        onSend();
        }
    }



  return (
    <div className="border-t border-border-color p-6">
        <div className="mb-4 flex flex-col items-end gap-3">
            <div className="flex flex-wrap justify-end gap-2">
            {suggestedQueries.map((query) => (
                <button
                key={query}
                onClick={() => onSelectSuggestedQuery(query)}
                className="rounded border border-border-color bg-surface px-4 py-2 text-left font-mono text-sm text-muted transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                >
                {`> ${query}`}
                </button>
            ))}
            </div>
        </div>

      <div className="relative flex items-center rounded border border-border-color bg-surface transition-all focus-within:border-primary focus-within:shadow-neon">
        <span className="material-symbols-outlined ml-4 text-[18px] text-primary">
          terminal
        </span>

        <input
            type="text"
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            className="w-full border-none bg-transparent px-4 py-4 font-mono text-sm text-zinc-50 placeholder-muted focus:outline-none"
        />

        <button
            onClick={onSend}
            className="mr-2 flex items-center justify-center p-2 text-muted transition-colors hover:text-primary"
        >
          <span className="material-symbols-outlined text-[20px]">send</span>
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between px-1">
        <span className="text-[11px] font-mono text-muted">
          Press Enter to send
        </span>

        <span className="flex items-center gap-1 text-[11px] font-mono text-muted">
          <span className="material-symbols-outlined text-[12px]">lock</span>
          Context secured
        </span>
      </div>
    </div>
  )
}