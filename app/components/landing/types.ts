import type { ComponentType, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export type LandingIcon = ComponentType<IconProps>;

export type Game = {
  id: string;
  title: string;
  shortTitle: string;
  players: string;
  vibe: string;
  spirit: string;
  summary: string;
  tagline: string;
  intro: string;
  concept: string;
  winCondition: string;
  bullets: string[];
  highlights: string[];
  visualTitle: string;
  accent: string;
  accentSoft: string;
  glow: string;
  imageSrc: string;
  imageAlt: string;
  posterBubbles: string[];
  icon: LandingIcon;
};

export type MotionPreference = boolean | null;
