import { useEffect, useState} from "react"
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";


const API_URL = "http://localhost:3000/chat"


const introMessage: UIMessage = {
  id: "intro",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Ask about Edem’s work, projects, stack, or background.",
    },
  ],
};



export default function ChatPanel() {
  const [inputMessage, setInputMessage] = useState("")
  const { messages, sendMessage, setMessages, status, error } = useChat<UIMessage>({
    transport: new DefaultChatTransport({
      api: API_URL,
    }),
  });

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([introMessage]);
    }
  }, [messages.length, setMessages]);

  const isBusy = status === "submitted" || status === "streaming";

  async function handleSendMessage() {
      const trimmed = inputMessage.trim()

      if (!trimmed || isBusy) {
          return
      }

      setInputMessage("")
      await sendMessage({ text: trimmed })
  }

  return (
    <section className="flex h-full flex-col">
        <ChatHeader />
        <ChatMessages messages={messages} />

        {error ? (
          <div className="px-6 pb-2 font-mono text-xs text-red-400">
            Unable to reach the chat service right now.
          </div>
          ) : null
        }

        <ChatInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            onSend={handleSendMessage}
            disabled={isBusy}
        />
    </section>
  )
}
