import { useState} from "react"
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"



export type ChatRole = "system" | "user";

export type ChatMessage = {
    role: ChatRole
    text: string
    timestamp: string
}

function getCurrentTimestamp(): string {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  })
}



const initialMessages: ChatMessage[] = [
  {
    role: "system",
    text: "Hello. I am the interactive agent trained on Edem Ahorlu's professional history, code repositories, and system designs.",
    timestamp: getCurrentTimestamp()
  }
]


export default function ChatPanel() {
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
    const [inputMessage, setInputMessage] = useState("")

    function handleSendMessage() {
        const trimmed = inputMessage.trim()

        if (!trimmed) {
            return
        }

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text: trimmed,
                timestamp: getCurrentTimestamp()
            }
        ])
        
        setInputMessage("")
    }

    function handleSelectSuggestedQuery(query: string) {
        setInputMessage(query);
    }



  return (
    <section className="flex h-full flex-col">
        <ChatHeader />
        <ChatMessages 
        messages={messages}
        />
        <ChatInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            onSend={handleSendMessage}
        />
    </section>
  )
}