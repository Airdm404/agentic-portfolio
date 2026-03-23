

export default function ChatHeader() {
    return (
        <header className="flex items-center justify-between border-b border-border-color bg-surface/50 px-6 py-6">
            <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </div>

                <h2 className="text-[13px] font-mono font-bold tracking-wide text-zinc-50">
                AGENT_ONLINE
                </h2>
            </div>
    </header>
    )
}