import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { games, heroMoments, heroStats } from "./data";
import { GuideModal } from "./guide-modal";
import { ArrowUpRightIcon } from "./icons";
import { Badge, CopyBlock, viewport } from "./shared";
import type { Game, MotionPreference } from "./types";
import {
  BattleBoard,
  BingoBoard,
  HeroCelebrationCarousel,
  StrategyBoard,
} from "./visuals";

const sectionThemes = [
  {
    background:
      "linear-gradient(135deg, rgba(255,244,221,0.98) 0%, rgba(255,235,196,0.96) 44%, rgba(255,244,234,0.98) 100%)",
    overlay:
      "radial-gradient(circle at 12% 18%, rgba(255,186,72,0.26), transparent 18%), radial-gradient(circle at 84% 12%, rgba(255,123,71,0.16), transparent 18%), linear-gradient(135deg, rgba(255,255,255,0.42) 0%, transparent 48%)",
    accentSurface: "rgba(255, 140, 97, 0.12)",
  },
  {
    background:
      "linear-gradient(135deg, rgba(255,244,229,0.98) 0%, rgba(255,232,188,0.98) 48%, rgba(255,244,225,0.98) 100%)",
    overlay:
      "radial-gradient(circle at 12% 20%, rgba(255,180,52,0.24), transparent 18%), radial-gradient(circle at 76% 24%, rgba(255,141,97,0.18), transparent 18%), linear-gradient(144deg, rgba(255,210,125,0.12) 0%, transparent 42%)",
    accentSurface: "rgba(255, 140, 97, 0.14)",
  },
  {
    background:
      "linear-gradient(115deg, rgba(255,239,236,0.98) 0%, rgba(255,220,210,0.98) 34%, rgba(255,236,246,0.96) 50%, rgba(230,239,255,0.98) 100%)",
    overlay:
      "linear-gradient(135deg, rgba(255,115,92,0.1) 0%, transparent 40%), linear-gradient(225deg, rgba(95,124,255,0.12) 0%, transparent 38%), radial-gradient(circle at 50% 24%, rgba(255,173,82,0.12), transparent 16%)",
    accentSurface: "rgba(95, 124, 255, 0.12)",
  },
  {
    background:
      "linear-gradient(135deg, rgba(233,246,255,0.98) 0%, rgba(214,237,255,0.98) 44%, rgba(230,255,250,0.96) 100%)",
    overlay:
      "radial-gradient(circle at 18% 18%, rgba(64,181,255,0.18), transparent 18%), radial-gradient(circle at 82% 18%, rgba(53,214,196,0.2), transparent 18%), linear-gradient(140deg, rgba(90,167,255,0.1) 0%, transparent 44%)",
    accentSurface: "rgba(53, 214, 196, 0.12)",
  },
] as const;

export function BackgroundDecor({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0">
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,rgba(255,210,144,0.35),transparent_72%)]" />
      </div>

      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        {[
          "left-[7%] top-28 h-20 w-20 bg-[#ffbe5c]/18",
          "right-[8%] top-40 h-24 w-24 bg-[#ff8db5]/16",
          "left-[14%] bottom-24 h-16 w-16 bg-[#72c8ff]/14",
          "right-[18%] bottom-20 h-14 w-14 bg-[#5ddfca]/16",
        ].map((item, index) => (
          <motion.div
            key={item}
            className={`absolute rounded-full blur-sm ${item}`}
            animate={
              shouldReduceMotion
                ? undefined
                : { y: index % 2 === 0 ? [0, -18, 0] : [0, 18, 0] }
            }
            transition={{
              duration: 5 + index * 0.45,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
}

export function SiteHeader({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsHeaderHidden(false);
      return;
    }

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (currentScrollY < 24) {
        setIsHeaderHidden(false);
      } else if (scrollDelta > 8) {
        setIsHeaderHidden(true);
      } else if (scrollDelta < -8) {
        setIsHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-[#efcda6]/80 bg-[#fff8ee]/88 backdrop-blur-xl"
      animate={shouldReduceMotion ? undefined : { y: isHeaderHidden ? "-100%" : "0%" }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-[94rem] items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-3 sm:gap-4">
          <span className="flex h-12 items-center rounded-[1.25rem] border border-[#ffd2b3] bg-[linear-gradient(135deg,#ff8e4d,#ff6b5f)] px-3 shadow-[0_16px_30px_rgba(255,134,61,0.2)] sm:h-14 sm:px-4">
            <Image
              src="/resources/logo-company.png"
              alt="Company logo"
              width={1521}
              height={428}
              priority
              className="h-6 w-auto object-contain drop-shadow-[0_4px_10px_rgba(120,20,0,0.18)] sm:h-7"
            />
          </span>
          <div className="hidden sm:block">
            <p className="font-display text-sm uppercase tracking-[0.38em] text-[#a34a12]">
              Team Building
            </p>
            <p className="font-display text-[1.45rem] tracking-tight text-[#612206]">
              2026
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-base font-bold text-[#8f532f] xl:flex">
          {games.map((game, index) => (
            <a
              key={game.id}
              href={`#${game.id}`}
              className="transition hover:text-[#5f250a]"
            >
              {`0${index + 1}. ${game.shortTitle}`}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export function HeroSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  const theme = sectionThemes[0];
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const activeMoment = heroMoments[activeHeroIndex];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroMoments.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] snap-start scroll-mt-24 items-center overflow-hidden"
      style={{ background: theme.background }}
    >
      <div className="absolute inset-0 opacity-95" style={{ background: theme.overlay }} />
      <div className="pointer-events-none absolute inset-x-0 top-20 h-72 bg-[radial-gradient(circle_at_50%_10%,rgba(255,208,106,0.34),transparent_62%)]" />
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,188,84,0.24),transparent_66%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[28%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,116,146,0.18),transparent_66%)] blur-3xl" />

      <div className="mx-auto w-full max-w-[96rem] px-6 py-10 lg:px-8">
        <div className="grid items-center gap-8 xl:grid-cols-[0.76fr_1.24fr]">
          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 30,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-8 top-4 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,196,101,0.28),transparent_68%)] blur-2xl" />
            <div className="relative max-w-[39rem]">
              <motion.div
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 18,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.6 }}
                className="flex flex-wrap items-center gap-3 text-sm font-black uppercase tracking-[0.26em] text-[#2b8cff] xl:text-[0.95rem]"
              >
                <span className="rounded-full bg-white/78 px-4 py-2 shadow-[0_10px_18px_rgba(255,188,112,0.08)]">
                  OS1
                </span>
                <span className="rounded-full bg-white/78 px-4 py-2 shadow-[0_10px_18px_rgba(255,188,112,0.08)]">
                  OS3
                </span>
                <span>Hồ Chí Minh</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffa13d]" />
                <span>Tháng 04</span>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 30,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.14,
                  duration: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 max-w-5xl font-display text-6xl leading-[0.84] tracking-[-0.06em] text-[#73290c] sm:text-7xl xl:text-[5.7rem]"
              >
                TEAM
                <span className="block">BUILDING</span>
              </motion.h1>

              <motion.div
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 22,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(255,247,232,0.88))] p-5 shadow-[0_24px_46px_rgba(255,188,112,0.14)] backdrop-blur-sm"
              >
                <div className="pointer-events-none absolute -left-8 top-12 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,186,84,0.18),transparent_70%)] blur-2xl" />
                <div className="pointer-events-none absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,111,160,0.14),transparent_70%)] blur-2xl" />

                <div className="relative max-w-[24rem]">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c17746]">
                    Hai phòng đang kết nối
                  </p>
                  <p className="mt-2 font-display text-[1.5rem] leading-tight text-[#6f2b0f]">
                    OS1 và OS3 cùng hâm nóng bầu không khí, cùng reo lên mỗi khi sân khấu đổi nhịp.
                  </p>
                </div>

                <div className="relative mt-6 grid grid-cols-2 items-center gap-12 md:gap-16">
                  <div className="pointer-events-none absolute left-[24%] right-[24%] top-1/2 h-16 -translate-y-1/2 overflow-hidden">
                    <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-[linear-gradient(90deg,rgba(255,183,67,0.14),rgba(255,128,76,0.58),rgba(116,133,255,0.58),rgba(214,106,255,0.16))]" />
                    <div className="absolute inset-x-[8%] top-1/2 h-[18px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,193,103,0.26),transparent_68%)] blur-xl" />
                    {!shouldReduceMotion ? (
                      <>
                        <motion.span
                          className="absolute left-[6%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#ffb743] shadow-[0_0_18px_rgba(255,183,67,0.95)]"
                          animate={{ x: ["0%", "340%", "0%"], opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        />
                        <motion.span
                          className="absolute right-[6%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#cf64ff] shadow-[0_0_18px_rgba(207,100,255,0.88)]"
                          animate={{ x: ["0%", "-340%", "0%"], opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.45 }}
                        />
                        <motion.span
                          className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fff0d1_0%,#ffb46d_48%,rgba(255,180,109,0)_74%)]"
                          animate={{ scale: [0.92, 1.16, 0.92], opacity: [0.75, 1, 0.75] }}
                          transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        />
                      </>
                    ) : null}
                  </div>

                  <motion.div
                    className="relative rounded-[1.7rem] border border-[#ffd3a0] bg-[linear-gradient(160deg,#fff6e5,rgba(255,245,223,0.96))] px-5 py-5 shadow-[0_14px_28px_rgba(255,188,112,0.1)]"
                    animate={shouldReduceMotion ? undefined : { y: [0, -5, 0], rotate: [-0.4, 0.4, -0.4] }}
                    transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#be7a42]">
                        Phòng 1
                      </p>
                      <span className="h-3 w-3 rounded-full bg-[#ffb743] shadow-[0_0_16px_rgba(255,183,67,0.9)]" />
                    </div>
                    <p className="mt-3 font-display text-[2.5rem] leading-none text-[#8d4312]">
                      OS1
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#9b6138]">
                      Khởi động nhịp đầu tiên
                    </p>
                  </motion.div>

                  <motion.div
                    className="relative rounded-[1.7rem] border border-[#ffd3e3] bg-[linear-gradient(160deg,#fff4fb,rgba(255,245,251,0.96))] px-5 py-5 shadow-[0_14px_28px_rgba(255,188,112,0.1)]"
                    animate={shouldReduceMotion ? undefined : { y: [0, 5, 0], rotate: [0.4, -0.4, 0.4] }}
                    transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.25 }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#be7a42]">
                        Phòng 2
                      </p>
                      <span className="h-3 w-3 rounded-full bg-[#d86aff] shadow-[0_0_16px_rgba(216,106,255,0.8)]" />
                    </div>
                    <p className="mt-3 font-display text-[2.5rem] leading-none text-[#8d4312]">
                      OS3
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#9b6138]">
                      Bắt nhịp và khuấy động
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                {["Gắn kết", "Vui vẻ", "Cổ vũ hết mình", "Cùng thắng lớn"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className={`rounded-full border px-4 py-2.5 text-sm font-black shadow-[0_12px_24px_rgba(255,188,112,0.08)] xl:text-base ${
                        index === 2
                          ? "border-[#ffd38f] bg-[#fff0ce] text-[#9b4b16]"
                          : "border-white bg-white text-[#8a5431]"
                      }`}
                    >
                      {item}
                    </span>
                  ),
                )}
              </motion.div>

              <motion.div
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 28,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 grid gap-3 sm:grid-cols-3"
              >
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-[1.6rem] border px-4 py-4 shadow-[0_16px_34px_rgba(255,187,108,0.1)] ${
                      index === 0
                        ? "border-[#ffd8b3] bg-[#fff8e8]"
                        : index === 1
                          ? "border-[#ffd2dc] bg-[#fff6f8]"
                          : "border-[#cfe8ff] bg-[#f2f9ff]"
                    }`}
                  >
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#ae6d44] xl:text-xs">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-display text-[1.55rem] leading-[1.02] tracking-tight text-[#67250b] xl:text-[1.8rem]">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.6 }}
                className="mt-8 rounded-[1.8rem] border border-white/70 bg-white/68 px-5 py-5 shadow-[0_18px_32px_rgba(255,188,112,0.08)] backdrop-blur-sm"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c07846]">
                  Khoảnh khắc OS1 + OS3 đang theo dõi
                </p>
                <p className="mt-3 font-display text-[1.4rem] leading-8 text-[#6f2b0f] xl:text-[1.7rem]">
                  {activeMoment.headline}
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-[#8c552d] xl:text-[1rem]">
                  {activeMoment.description}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 36,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="pointer-events-none absolute -right-10 top-12 hidden h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,132,150,0.2),transparent_68%)] blur-2xl xl:block" />
            <div className="relative overflow-hidden rounded-[3.25rem] border border-white/82 bg-[linear-gradient(160deg,rgba(255,255,255,0.76),rgba(255,248,235,0.56))] p-5 shadow-[0_38px_100px_rgba(255,186,98,0.18)] backdrop-blur md:p-6 xl:p-7">
              <div className="relative flex items-start justify-between gap-4">
                <span className="rounded-full bg-white/84 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#a45d29]">
                  Sân khấu cổ động
                </span>
                <span className="rounded-full bg-[#ffe27b] px-4 py-2 text-sm font-display text-[#7f3c0e] shadow-[0_12px_22px_rgba(255,205,79,0.2)]">
                  Tự động chuyển trò chơi
                </span>
              </div>
              <div className="mt-4">
                <HeroCelebrationCarousel
                  shouldReduceMotion={shouldReduceMotion}
                  activeIndex={activeHeroIndex}
                  onSelect={setActiveHeroIndex}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function GameSections({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  const [activeGuide, setActiveGuide] = useState<Game | null>(null);

  return (
    <>
      {games.map((game, index) => (
        <GameShowcaseSection
          key={game.id}
          game={game}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
          reverse={index % 2 === 1}
          onOpenGuide={() => setActiveGuide(game)}
        />
      ))}

      <GuideModal
        game={activeGuide}
        shouldReduceMotion={shouldReduceMotion}
        onClose={() => setActiveGuide(null)}
      />
    </>
  );
}

function GameShowcaseSection({
  game,
  index,
  shouldReduceMotion,
  reverse = false,
  onOpenGuide,
}: {
  game: Game;
  index: number;
  shouldReduceMotion: MotionPreference;
  reverse?: boolean;
  onOpenGuide: () => void;
}) {
  const Icon = game.icon;
  const theme = sectionThemes[index + 1];

  return (
    <section
      id={game.id}
      className="relative flex min-h-[100svh] snap-start scroll-mt-24 items-center overflow-hidden"
      style={{ background: theme.background }}
    >
      <div className="absolute inset-0 opacity-95" style={{ background: theme.overlay }} />

      <div className="mx-auto w-full max-w-[94rem] px-6 py-6 lg:px-8">
        <motion.article
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: index * 0.04 }}
          className="relative overflow-hidden rounded-[3rem] border border-white/80 bg-white/90 p-5 shadow-[0_34px_90px_rgba(255,182,92,0.16)] backdrop-blur md:p-6 xl:p-7"
        >
          <div
            className="pointer-events-none absolute -right-10 top-4 font-display text-[9rem] leading-none tracking-[-0.08em] text-[#7c3c18]/6 md:text-[12rem] xl:text-[16rem]"
          >
            {`0${index + 1}`}
          </div>

          <div
            className={`relative grid items-center gap-6 xl:min-h-[calc(100svh-7.5rem)] ${
              reverse ? "xl:grid-cols-[1.02fr_0.98fr]" : "xl:grid-cols-[0.98fr_1.02fr]"
            }`}
          >
            <div className={reverse ? "xl:order-2" : ""}>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex h-16 w-16 items-center justify-center rounded-[1.35rem] text-white shadow-[0_16px_32px_rgba(255,152,82,0.2)]"
                  style={{ backgroundColor: game.accent }}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <Badge label={game.players} />
                <Badge label={game.vibe} muted />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-base font-black uppercase tracking-[0.36em] text-[#b3744c]">
                  {`Game 0${index + 1}`}
                </p>
                <span
                  className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] xl:text-sm"
                  style={{ backgroundColor: theme.accentSurface, color: game.accent }}
                >
                  {game.spirit}
                </span>
              </div>

              <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.05em] text-[#6e260a] sm:text-6xl xl:text-[4.55rem]">
                {game.title}
              </h2>

              <p className="mt-3 max-w-3xl text-[1.06rem] leading-[1.58] text-[#8b5731] xl:text-[1.22rem]">
                {game.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {game.posterBubbles.slice(0, 2).map((bubble, bubbleIndex) => (
                  <motion.span
                    key={bubble}
                    className={`rounded-full px-4 py-2.5 text-sm font-display shadow-[0_14px_26px_rgba(255,188,112,0.1)] xl:text-base ${
                      bubbleIndex === 0
                        ? "bg-[#fff4e4] text-[#8b4a21]"
                        : bubbleIndex === 1
                          ? "bg-[#ffd84e] text-[#7b2b08]"
                          : "bg-[#ecf7ff] text-[#205a8c]"
                    }`}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { y: bubbleIndex % 2 === 0 ? [0, -4, 0] : [0, 4, 0] }
                    }
                    transition={{
                      duration: 3 + bubbleIndex * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {bubble}
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <CopyBlock title="Concept" body={game.intro} />
                <CopyBlock title="Chiến thắng" body={game.winCondition} />
              </div>

              <div className="mt-5 grid gap-3 xl:grid-cols-2">
                {game.bullets.slice(0, 2).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.5rem] border border-[#ffe2c0] bg-[#fffaf2] px-4 py-4 shadow-[0_12px_24px_rgba(255,188,112,0.06)]"
                  >
                    <span
                      className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: game.accent }}
                    />
                    <p className="text-sm leading-7 text-[#8a5730] xl:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {game.sectionFacts?.length ? (
                <div className="mt-5 grid gap-3 xl:grid-cols-3">
                  {game.sectionFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[1.65rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,255,252,0.94))] px-4 py-4 shadow-[0_14px_28px_rgba(53,214,196,0.08)]"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#35b8ab]">
                        {fact.label}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#6d4a2a] xl:text-base">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {game.subgames?.length ? (
                <div className="mt-5 rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,rgba(242,246,255,0.9),rgba(255,255,255,0.96))] px-4 py-4 shadow-[0_16px_34px_rgba(95,124,255,0.1)] xl:px-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-[#5570da]">
                      5 mini game quyết định ngai vàng
                    </p>
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#5f7cff] shadow-[0_10px_20px_rgba(95,124,255,0.08)]">
                      Mỗi người chỉ ra sân 1 lần
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                    {game.subgames.map((subgame, subgameIndex) => (
                      <div
                        key={subgame}
                        className="rounded-[1.4rem] border border-white bg-white/92 px-3 py-3 shadow-[0_12px_24px_rgba(95,124,255,0.08)]"
                      >
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#91a3f7]">
                          {`0${subgameIndex + 1}`}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#5c3c26]">
                          {subgame}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-4">
                <motion.button
                  type="button"
                  onClick={onOpenGuide}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-base font-black text-white shadow-[0_18px_36px_rgba(255,150,70,0.22)] xl:text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${game.accent}, #ffb743)`,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  Hướng dẫn chơi
                  <ArrowUpRightIcon className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            <div className={reverse ? "xl:order-1" : ""}>
              <div className="relative mx-auto max-w-[54rem]">
                <div
                  className="absolute inset-x-[10%] top-10 h-52 rounded-full blur-3xl"
                  style={{ backgroundColor: game.glow }}
                />
                {index === 0 ? (
                  <BingoBoard shouldReduceMotion={shouldReduceMotion} />
                ) : index === 1 ? (
                  <BattleBoard shouldReduceMotion={shouldReduceMotion} />
                ) : (
                  <StrategyBoard shouldReduceMotion={shouldReduceMotion} />
                )}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
