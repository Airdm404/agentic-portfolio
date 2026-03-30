import {useRef, useEffect} from "react"

type ChatInputProps = {
  inputMessage: string
  setInputMessage: React.Dispatch<React.SetStateAction<string>>
  onSend: () => void | Promise<void>;
  disabled?: boolean;
};



export default function ChatInput({
    inputMessage,
    setInputMessage,
    onSend,
    disabled = false,
}: ChatInputProps) {
  
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto"
    textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`
  }, [inputMessage])

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()

      if (!disabled) {
        onSend()
      }
    }
  }

  return (
    <div className="border-t border-border-color p-6">
      <div className="rounded-3xl border border-border-color bg-surface transition-all focus-within:border-primary focus-within:shadow-neon">
        <div className="px-4 pt-4">
          <textarea
            ref={textareaRef}
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={disabled ? "Assistant is responding..." : "Ask a question..."}
            rows={2}
            disabled={disabled}
            className="max-h-40 min-h-14 w-full resize-none overflow-y-auto bg-transparent font-mono text-sm leading-6 text-zinc-50 placeholder:text-muted focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <span className="material-symbols-outlined text-[18px] text-primary">
            terminal
          </span>

          <button
            onClick={onSend}
            disabled={disabled}
            className="flex items-center justify-center p-1 text-muted transition-colors enabled:hover:text-primary disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </div>
      </div>
    </div>
  )


}