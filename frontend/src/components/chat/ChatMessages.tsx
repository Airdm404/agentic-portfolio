import type {ChatMessage} from "./ChatPanel"
import {useRef, useEffect} from "react"


type ChatMessagesProps = {
  messages: ChatMessage[];
};


export default function ChatMessages({ 
    messages,
}: ChatMessagesProps) {


    const messagesEndRef = useRef<HTMLDivElement | null>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])




  return (
    <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-6">
        {messages.map((message, index) => {
            const isSystem = message.role === "assistant";

            return (
                <div
                    key={`${message.role}-${message.timestamp}-${index}`}
                    className={`flex flex-col ${isSystem ? "items-start" : "items-end"}`}
                >
                    <div className="mb-1 flex items-center gap-2 text-xs font-mono text-muted">
                    {isSystem ? (
                        <>
                        <span className="material-symbols-outlined text-[14px] text-primary">
                            smart_toy
                        </span>
                        <span>System</span>
                        <span>[{message.timestamp}]</span>
                        </>
                    ) : (
                        <>
                        <span>[{message.timestamp}]</span>
                        <span>You</span>
                        <span className="material-symbols-outlined text-[14px] text-primary">
                            person
                        </span>
                        </>
                    )}
                    </div>

                    <div
                    className={`max-w-[85%] border border-border-color bg-surface p-4 text-sm leading-relaxed text-zinc-300 shadow-sm ${
                        isSystem
                        ? "rounded-r-xl rounded-bl-xl"
                        : "rounded-l-xl rounded-br-xl"
                    }`}
                    >
                    <p className="font-display">{message.text}</p>
                    </div>
                </div>
            )
        })}
        <div ref={messagesEndRef} />
    </div>
  )
}