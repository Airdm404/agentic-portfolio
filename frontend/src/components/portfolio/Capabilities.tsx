import CapabilityCard from "./CapabilityCard"
import type { ProfileResponse } from "../../types/profile"


type CapabilitiesProps = {
  capabilities: ProfileResponse["capabilities"]
}



export default function Capabilities({ capabilities }: CapabilitiesProps) {
    return (
        <section className="flex flex-col gap-8 mt-2 border-t border-border-color pt-12">
            <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">memory</span>
                <h3 className="text-xl font-mono font-bold">Capabilities</h3>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((capability) => (
                    <CapabilityCard 
                        key={capability.title}
                        title={capability.title}
                        items={capability.items}
                    />
                ))}
             </div>
      
        </section>
    )
}