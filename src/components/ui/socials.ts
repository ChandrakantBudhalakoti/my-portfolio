import type { ComponentType, SVGProps } from "react";
import { profile } from "@/lib/data";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from "./BrandIcons";

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: "X (Twitter)", href: profile.socials.x, icon: XIcon },
  { label: "Instagram", href: profile.socials.instagram, icon: InstagramIcon },
  { label: "Facebook", href: profile.socials.facebook, icon: FacebookIcon },
];
