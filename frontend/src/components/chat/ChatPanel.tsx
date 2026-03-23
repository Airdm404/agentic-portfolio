import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"


export default function ChatPanel() {
  return (
    <section className="flex h-full flex-col">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </section>
  )
}