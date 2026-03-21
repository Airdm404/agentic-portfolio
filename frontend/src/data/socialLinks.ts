import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6"
import type { IconType } from "react-icons"

export type SocialLink = {
  href: string
  label: string
  icon: IconType
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/airdm404", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/edem-ahorlu", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://x.com/ed3mah", label: "X", icon: FaXTwitter },
  { href: "mailto:edem.ahorluk@gmail.com", label: "Email", icon: FaEnvelope },
]