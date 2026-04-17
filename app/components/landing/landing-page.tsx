"use client";

import { useReducedMotion } from "framer-motion";
import {
  BackgroundDecor,
  GameSections,
  HeroSection,
  SiteHeader,
} from "./sections";

export default function LandingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <BackgroundDecor shouldReduceMotion={shouldReduceMotion} />
      <SiteHeader shouldReduceMotion={shouldReduceMotion} />

      <main className="relative z-10 snap-y snap-mandatory">
        <HeroSection shouldReduceMotion={shouldReduceMotion} />
        <GameSections shouldReduceMotion={shouldReduceMotion} />
      </main>
    </div>
  );
}
