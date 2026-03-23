export default function ChatInput() {
  return (
    <div className="border-t border-border-color p-6">
      <div className="relative flex items-center rounded border border-border-color bg-surface transition-all focus-within:border-primary focus-within:shadow-neon">
        <span className="material-symbols-outlined ml-4 text-[18px] text-primary">
          terminal
        </span>

        <input
          type="text"
          placeholder="Type a command..."
          className="w-full border-none bg-transparent px-4 py-4 font-mono text-sm text-zinc-50 placeholder-muted focus:ring-0"
        />

        <button className="mr-2 flex items-center justify-center p-2 text-muted transition-colors hover:text-primary">
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