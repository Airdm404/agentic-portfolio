
import { socialLinks } from "../../data/socialLinks"


export default function Socials() { 

  return (
    <div className="flex justify-end gap-5">
        {socialLinks.map((link) => {
            const Icon = link.icon
            return (
            <a
                key={link.label}
                href={link.href}
                title={link.label}
                className="text-muted transition-all duration-300 hover:text-primary"
            >
                <Icon className="h-5 w-5" />
            </a>
            )
        })}
        </div>

    )
   
}