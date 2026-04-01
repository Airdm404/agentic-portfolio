import {useRef, useEffect} from "react"
import type { UIMessage } from "ai";


type ChatMessagesProps = {
  messages: UIMessage[];
};

function getText(message: UIMessage) {
  return message.parts
    .filter(
      (
        part,
      ): part is Extract<(typeof message.parts)[number], { type: "text" }> =>
        part.type === "text",
    )
    .map((part) => part.text)
    .join("");
}



export default function ChatMessages({ messages }: ChatMessagesProps) {
    const messagesEndRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])


  return (
    <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-6">
        {messages.map((message) => {
            const isAssistant = message.role === "assistant";
            const text = getText(message).trim();

            if (!text) {
                return null;
            }


            return (
                <div
                    key={message.id}
                    className={`flex flex-col ${isAssistant ? "items-start" : "items-end"}`}
                >
                    <div className="mb-1 flex items-center gap-2 text-xs font-mono text-muted">
                    {isAssistant ? (
                        <>
                        <span className="material-symbols-outlined text-[14px] text-primary">
                            smart_toy
                        </span>
                        <span>Assistant</span>
                        </>
                    ) : (
                        <>
                        <span>You</span>
                        <span className="material-symbols-outlined text-[14px] text-primary">
                            person
                        </span>
                        </>
                    )}
                    </div>

                    <div
                    className={`max-w-[85%] border border-border-color bg-surface p-4 text-sm leading-relaxed text-zinc-300 shadow-sm ${
                        isAssistant
                        ? "rounded-r-xl rounded-bl-xl"
                        : "rounded-l-xl rounded-br-xl"
                    }`}
                    >
                    <p className="font-display">{text}</p>
                    </div>
                </div>
            )
        })}
        <div ref={messagesEndRef} />
    </div>
  )
}
