import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import type { IconType } from "react-icons"
import type { ProfileResponse, SocialPlatform } from '../../types/profile';


type SocialsProps = {
  socials: ProfileResponse["socials"]
}

const iconByPlatform: Record<SocialPlatform, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  email: FaEnvelope,
}


export default function Socials({ socials }: SocialsProps) { 

  return (
    <div className="flex justify-end gap-5">
        {socials.map((social) => {
            const Icon = iconByPlatform[social.platform];
            const external = social.href.startsWith("http");
            return (
            <a
                key={social.platform}
                href={social.href}
                title={social.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="text-muted transition-all duration-300 hover:text-primary"
            >
                <Icon className="h-5 w-5" />
            </a>
            )
        })}
        </div>

    )
   
}