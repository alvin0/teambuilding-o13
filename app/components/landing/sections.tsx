import { motion } from "framer-motion";
import { games, heroStats } from "./data";
import { ArrowRightIcon, ArrowUpRightIcon, SparkIcon } from "./icons";
import { Badge, CopyBlock, viewport } from "./shared";
import {
  BattleBoard,
  BingoBoard,
  HeroPosterStack,
  StrategyBoard,
} from "./visuals";
import type { Game, MotionPreference } from "./types";

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
  return (
    <header className="sticky top-0 z-40 border-b border-[#efcda6]/80 bg-[#fff8ee]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[94rem] items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff9a3d,#ff6d38)] text-white shadow-[0_16px_30px_rgba(255,134,61,0.24)]">
            <SparkIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.38em] text-[#a34a12]">
              Team Building
            </p>
            <p className="font-display text-[1.45rem] tracking-tight text-[#612206]">
              2026
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-base font-bold text-[#8f532f] xl:flex">
          <a href="#hero" className="transition hover:text-[#5f250a]">
            Hero
          </a>
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

        <motion.a
          href={`#${games[0].id}`}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffb743,#ff7b43)] px-6 py-3 text-base font-black text-white shadow-[0_18px_36px_rgba(255,152,67,0.24)]"
          whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        >
          <span>Vào Game 1</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </motion.a>
      </div>
    </header>
  );
}

export function HeroSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  const theme = sectionThemes[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] snap-start scroll-mt-24 items-center overflow-hidden"
      style={{ background: theme.background }}
    >
      <div className="absolute inset-0 opacity-95" style={{ background: theme.overlay }} />
      <div className="pointer-events-none absolute inset-x-0 top-24 h-56 bg-[radial-gradient(circle_at_50%_10%,rgba(255,208,106,0.28),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[7%] hidden w-px bg-[linear-gradient(180deg,transparent,rgba(255,180,96,0.46),transparent)] xl:block" />

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
            <div className="pointer-events-none absolute -left-6 top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,196,101,0.32),transparent_68%)] blur-2xl" />
            <div className="pointer-events-none absolute left-0 top-24 hidden h-24 w-1 rounded-full bg-[linear-gradient(180deg,#ffb743,#ff6f48)] xl:block" />
            <div className="relative max-w-[38rem]">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#ffd8aa] bg-white/88 px-4 py-2.5 text-sm font-bold text-[#9b562e] shadow-[0_14px_28px_rgba(255,188,112,0.16)] backdrop-blur-sm">
                <span className="inline-flex h-3 w-3 rounded-full bg-[#ffb443] shadow-[0_0_14px_rgba(255,180,67,0.8)]" />
                Lễ hội nội bộ • phiên bản trình chiếu
              </div>

              <motion.p
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.6 }}
                className="font-display text-sm uppercase tracking-[0.45em] text-[#2b8cff] xl:text-base"
              >
                OS1 + OS3 | Hồ Chí Minh
              </motion.p>

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
                className="mt-5 max-w-5xl font-display text-6xl leading-[0.84] tracking-[-0.06em] text-[#73290c] sm:text-7xl xl:text-[5.95rem]"
              >
                TEAM
                <span className="block">BUILDING</span>
                <span className="mt-2 block bg-[linear-gradient(135deg,#ff8b2c_0%,#ff5694_42%,#2b8cff_100%)] bg-clip-text text-transparent">
                  2026
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.6 }}
                className="mt-5 max-w-3xl text-[1.08rem] leading-[1.68] text-[#8c552d] xl:text-[1.24rem]"
              >
                Một microsite trình chiếu gồm 4 màn hình lớn: hero mở màn và ba
                section trò chơi với background rõ cá tính, headline lớn và nhịp đọc
                đủ mạnh để lên máy chiếu vẫn nhìn thấy ngay.
              </motion.p>

              <motion.div
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                {["Tháng 04 / 2026", "Gắn kết", "Vui vẻ", "Chiến thắng"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className={`rounded-full border px-4 py-2.5 text-sm font-black shadow-[0_12px_24px_rgba(255,188,112,0.08)] xl:text-base ${
                        index === 0
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
                  y: shouldReduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <motion.a
                  href={`#${games[0].id}`}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffb743,#ff7348)] px-8 py-4 text-lg font-black text-white shadow-[0_22px_45px_rgba(255,145,66,0.24)]"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                >
                  <span>Khám phá trò chơi</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href={`#${games[2].id}`}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white bg-white/82 px-7 py-4 text-lg font-black text-[#8a4b22] shadow-[0_18px_32px_rgba(255,188,112,0.1)] backdrop-blur-sm"
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  Xem đủ 3 game
                  <ArrowUpRightIcon className="h-5 w-5" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 28,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-10 grid gap-3 sm:grid-cols-3"
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
                className="mt-8 flex items-center gap-3 rounded-[1.6rem] border border-white/70 bg-white/64 px-5 py-4 shadow-[0_18px_32px_rgba(255,188,112,0.08)] backdrop-blur-sm"
              >
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ffb743]" />
                  <span className="h-3 w-3 rounded-full bg-[#ff7f71]" />
                  <span className="h-3 w-3 rounded-full bg-[#48c4ff]" />
                </div>
                <p className="text-sm font-semibold leading-7 text-[#8c552d] xl:text-[0.98rem]">
                  Từ bàn ăn bùng nổ tiếng cười đến battle chiến thuật và màn đấu trí,
                  mỗi game đều có một “tính cách” riêng để người xem nhớ ngay.
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
            <div className="relative overflow-hidden rounded-[3.25rem] border border-white/82 bg-[linear-gradient(160deg,rgba(255,255,255,0.72),rgba(255,248,235,0.52))] p-5 shadow-[0_38px_100px_rgba(255,186,98,0.18)] backdrop-blur md:p-6 xl:p-7">
              <div className="pointer-events-none absolute inset-x-[8%] top-0 h-40 rounded-full bg-[radial-gradient(circle,rgba(255,199,106,0.34),transparent_70%)] blur-3xl" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="rounded-full bg-white/84 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#a45d29]">
                  3 game • 3 sắc thái
                </span>
                <span className="rounded-full bg-[#ffe27b] px-4 py-2 text-sm font-display text-[#7f3c0e] shadow-[0_12px_22px_rgba(255,205,79,0.2)]">
                  Poster showcase
                </span>
              </div>
              <div className="mt-3">
                <HeroPosterStack shouldReduceMotion={shouldReduceMotion} />
              </div>
              <div className="relative z-10 -mt-4 flex justify-center xl:justify-end">
                <div className="rounded-[1.4rem] border border-white/80 bg-white/82 px-5 py-4 shadow-[0_18px_32px_rgba(255,187,108,0.12)]">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c07846]">
                    Direction
                  </p>
                  <p className="mt-2 max-w-xs font-display text-[1.15rem] leading-7 text-[#7c3210]">
                    Vui nhộn, sáng rõ và đủ nổi bật để người xem nhìn từ xa vẫn nắm được tinh thần sự kiện.
                  </p>
                </div>
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
  return (
    <>
      {games.map((game, index) => (
        <GameShowcaseSection
          key={game.id}
          game={game}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  );
}

function GameShowcaseSection({
  game,
  index,
  shouldReduceMotion,
  reverse = false,
}: {
  game: Game;
  index: number;
  shouldReduceMotion: MotionPreference;
  reverse?: boolean;
}) {
  const Icon = game.icon;
  const nextGame = games[index + 1];
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

              <div
                className="mt-6 rounded-[1.8rem] px-5 py-5"
                style={{
                  background: `linear-gradient(135deg, ${game.accentSoft}, rgba(255,255,255,0.98))`,
                }}
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9d6840] xl:text-sm">
                  Tagline
                </p>
                <p className="mt-2 font-display text-[1.95rem] tracking-tight text-[#6f2b0f] xl:text-[2.1rem]">
                  {game.tagline}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {nextGame ? (
                  <motion.a
                    href={`#${nextGame.id}`}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-base font-black text-white shadow-[0_18px_36px_rgba(255,150,70,0.24)] xl:text-lg"
                    style={{ background: `linear-gradient(135deg, ${game.accent}, #ffb743)` }}
                    whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    {`Sang ${nextGame.shortTitle}`}
                    <ArrowRightIcon className="h-5 w-5" />
                  </motion.a>
                ) : (
                  <motion.a
                    href="#hero"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-base font-black text-white shadow-[0_18px_36px_rgba(255,150,70,0.24)] xl:text-lg"
                    style={{ background: `linear-gradient(135deg, ${game.accent}, #ffb743)` }}
                    whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    Quay lại Hero
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </motion.a>
                )}

                <motion.a
                  href="#hero"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white bg-white px-7 py-3.5 text-base font-black text-[#8b4b21] xl:text-lg"
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  Về đầu trang
                  <ArrowUpRightIcon className="h-5 w-5" />
                </motion.a>
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
