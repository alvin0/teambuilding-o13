"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRightIcon, CloseIcon } from "./icons";
import { GuideIllustration } from "./tutorial-visuals";
import type { Game, MotionPreference } from "./types";

export function GuideModal({
  game,
  shouldReduceMotion,
  onClose,
}: {
  game: Game | null;
  shouldReduceMotion: MotionPreference;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!game) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [game, onClose]);

  return (
    <AnimatePresence>
      {game ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#4a2008]/42 px-4 py-4 backdrop-blur-lg md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${game.id}-guide-title`}
            className="relative flex max-h-[92svh] w-full max-w-[90rem] flex-col overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,251,244,0.98),rgba(255,247,236,0.98))] shadow-[0_40px_120px_rgba(88,40,11,0.28)]"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="absolute inset-x-0 top-0 h-32 opacity-80"
              style={{
                background: `radial-gradient(circle at top, ${game.glow}, transparent 70%)`,
              }}
            />

            <div className="relative flex items-center justify-between gap-4 border-b border-[#f1d9bc] px-6 py-5 md:px-8">
              <div className="min-w-0">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#bf7a4a]">
                  Hướng dẫn chơi
                </p>
                <h3
                  id={`${game.id}-guide-title`}
                  className="mt-2 font-display text-3xl tracking-[-0.04em] text-[#6a250a] md:text-[2.7rem]"
                >
                  {game.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white bg-white text-[#7c3c17] shadow-[0_12px_24px_rgba(255,188,112,0.12)] transition hover:scale-[1.04]"
                aria-label="Đóng hướng dẫn"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="relative grid flex-1 gap-6 overflow-y-auto px-6 py-6 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
              <div className="flex flex-col">
                <div className="rounded-[1.8rem] border border-[#ffe0bc] bg-white/74 px-5 py-5 shadow-[0_18px_36px_rgba(255,188,112,0.08)]">
                  <p className="text-lg leading-8 text-[#844d25] md:text-[1.16rem]">
                    {game.guideIntro}
                  </p>
                </div>

                <div className="mt-5 space-y-4">
                  {game.guideSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      className="rounded-[1.8rem] border border-white/80 bg-white/86 px-5 py-5 shadow-[0_18px_36px_rgba(255,188,112,0.08)]"
                      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.08 * index }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] text-lg font-black text-white shadow-[0_16px_30px_rgba(255,152,82,0.2)]"
                          style={{ backgroundColor: game.accent }}
                        >
                          {index + 1}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-display text-[1.5rem] tracking-[-0.03em] text-[#6f2b0f]">
                            {step.title}
                          </h4>
                          <p className="mt-2 text-[1rem] leading-7 text-[#87522c] md:text-[1.06rem]">
                            {step.detail}
                          </p>
                          <div
                            className="mt-3 inline-flex max-w-full items-center rounded-full px-4 py-2 text-sm font-bold"
                            style={{ backgroundColor: game.accentSoft, color: game.accent }}
                          >
                            {step.cue}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="mt-5 rounded-[1.8rem] px-5 py-5"
                  style={{
                    background: `linear-gradient(135deg, ${game.accentSoft}, rgba(255,255,255,0.95))`,
                  }}
                >
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a06338]">
                    Chốt lại
                  </p>
                  <p className="mt-3 text-[1.04rem] leading-8 text-[#7f4922] md:text-[1.12rem]">
                    {game.guideOutro}
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,246,232,0.96))] p-4 shadow-[0_24px_55px_rgba(255,188,112,0.14)] md:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#bb7747]">
                        Minh họa chuyển động
                      </p>
                      <p className="mt-2 font-display text-[1.55rem] tracking-[-0.03em] text-[#6f2b0f]">
                        Nhìn nhanh là hiểu luật
                      </p>
                    </div>
                    <div
                      className="rounded-full px-4 py-2 text-sm font-black text-white"
                      style={{ backgroundColor: game.accent }}
                    >
                      {game.players}
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.8rem] border border-white/70 bg-white/78 p-3 md:p-4">
                    <GuideIllustration game={game} shouldReduceMotion={shouldReduceMotion} />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.8rem] border border-[#ffe0bc] bg-[#fffaf2] px-5 py-5">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b87245]">
                      Nhịp game
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#83512d] md:text-[1.05rem]">
                      {game.concept}
                    </p>
                  </div>

                  <div className="rounded-[1.8rem] border border-[#ffe0bc] bg-white px-5 py-5">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b87245]">
                      Điều kiện thắng
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#83512d] md:text-[1.05rem]">
                      {game.winCondition}
                    </p>
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={onClose}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-base font-black text-white shadow-[0_18px_36px_rgba(255,150,70,0.24)]"
                  style={{ background: `linear-gradient(135deg, ${game.accent}, #ffb743)` }}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  Đóng hướng dẫn
                  <ArrowRightIcon className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
