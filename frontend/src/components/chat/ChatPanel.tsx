import { useState} from "react"
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"

export type ChatRole = "assistant" | "user";
export type ChatIntent =
  | 'PORTFOLIO'
  | 'PROJECT'
  | 'EXPERIENCE'
  | 'HIRING'
  | 'CONTACT'
  | 'SMALL_TALK'
  | 'OFF_TOPIC'
  | 'INJECTION';


export type ChatMessage = {
    role: ChatRole
    text: string
    timestamp: string
}

type ChatResponse = {
  message: ChatMessage;
  meta: {
    intent: ChatIntent;
    capReached: boolean;
    messagesRemaining: number;
    handoffEmail: string | null;
  };
};

function getCurrentTimestamp(): string {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  })
}

const API_URL = "http://localhost:3000/chat"



const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    text: "Ask about Edem’s work, projects, stack, or background.",
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

        const nextMessages = [...messages, userMessage];
        setMessages(nextMessages)
        setInputMessage("")

        // call backend API to get system response
        try {
          const response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ messages: nextMessages.map(({ role, text }) => ({ role, text })) })
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