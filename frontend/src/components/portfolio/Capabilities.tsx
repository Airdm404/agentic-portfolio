import Card from "./Card"


export default function Capabilities() {
    return (
        <section className="flex flex-col gap-8 mt-8 border-t border-border-color pt-12">
            {/* Title */}
            <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">memory</span>
                <h3 className="text-xl font-mono font-bold">Capabilities</h3>
            </div>

            
            {/* Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Languages" items={["Python", "TypeScript", "Go", "Rust"]} />
                <Card title="AI & Data" items={["PyTorch", "LangChain", "Vector DBs", "OpenAI API"]} />
                <Card title="Infra" items={["AWS", "Docker", "Kubernetes", "Terraform"]} />
             </div>
      
        </section>
    )
}