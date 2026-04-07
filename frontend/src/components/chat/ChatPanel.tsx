import { useEffect, useState} from "react"
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { buildApiUrl } from "../../lib/api";


const introMessage: UIMessage = {
  id: "intro",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Hi, I’m Edem’s portfolio assistant. I can answer questions about his background, projects, and experience. What would you like to know?",
    },
  ],
};

function hasVisibleAssistantText(message: UIMessage | undefined) {
  return (
    message?.role === "assistant" &&
    message.parts.some(
      (part) => part.type === "text" && part.text.trim().length > 0,
    )
  );
}


export default function ChatPanel() {
  const [inputMessage, setInputMessage] = useState("")
  const { messages, sendMessage, setMessages, status, error } = useChat<UIMessage>({
    transport: new DefaultChatTransport({
      api: buildApiUrl('/chat'),
    }),
  });

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([introMessage]);
    }
  }, [messages.length, setMessages]);

  const isBusy = status === "submitted" || status === "streaming";
  const lastMessage = messages.at(-1);

  const isProcessing =
    status === "submitted" ||
    (status === "streaming" && !hasVisibleAssistantText(lastMessage));

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
        <ChatMessages messages={messages} isProcessing={isProcessing}/>

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
