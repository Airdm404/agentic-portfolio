import { useState} from "react"
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"



export type ChatRole = "assistant" | "user";

export type ChatMessage = {
    role: ChatRole
    text: string
    timestamp: string
}

type ChatResponse = {
    message: ChatMessage
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

    async function handleSendMessage() {
        const trimmed = inputMessage.trim()

        if (!trimmed) {
            return
        }

        const userMessage: ChatMessage = {
            role: "user",
            text: trimmed,
            timestamp: getCurrentTimestamp()
        }

        setMessages((prev) => [...prev, userMessage])
        setInputMessage("")

        // call backend API to get system response
        try {
          const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: trimmed }),
          });
          
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }

          const data: ChatResponse = await response.json();
          setMessages((prev) => [...prev, data.message]);

        } catch (error) {
            console.error("Error sending message:", error)
        }
    }

  return (
    <section className="flex h-full flex-col">
        <ChatHeader />
        <ChatMessages messages={messages} />
        <ChatInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            onSend={handleSendMessage}
        />
    </section>
  )
}