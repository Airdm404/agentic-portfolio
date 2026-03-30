import {useRef, useEffect} from "react"
import type { ChatUIMessage } from "../../schemas/chat.ui";


type ChatMessagesProps = {
  messages: ChatUIMessage[];
};

function getText(message: ChatUIMessage) {
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

function getTimestamp(message: ChatUIMessage) {
  const createdAt = message.metadata?.createdAt;

  if (!createdAt) {
    return null;
  }

  return new Date(createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
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
            const timestamp = getTimestamp(message);

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
                        {timestamp ? <span>[{timestamp}]</span> : null}
                        </>
                    ) : (
                        <>
                        {timestamp ? <span>[{timestamp}]</span> : null}
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