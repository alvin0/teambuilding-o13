import { motion } from "framer-motion";
import Image from "next/image";
import { games } from "./data";
import { viewport } from "./shared";
import type { Game, MotionPreference } from "./types";

export function HeroPosterStack({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  return (
    <div className="relative min-h-[31rem] sm:min-h-[37rem]">
      <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_20%_18%,rgba(255,164,68,0.28),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(255,98,98,0.2),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(64,178,255,0.24),transparent_34%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[12%] top-[16%] h-[58%] rounded-[2.6rem] border border-white/42 bg-white/18 backdrop-blur-[2px]" />

      <motion.div
        className="absolute left-[-1%] top-[6%] w-[58%] sm:w-[49%]"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -10, 0], rotate: [-9, -6.5, -9] }
        }
        transition={{
          duration: 6.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <PosterCard game={games[0]} tilt="-rotate-6" priority />
      </motion.div>

      <motion.div
        className="absolute right-[-1%] top-[0%] w-[58%] sm:w-[49%]"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, 12, 0], rotate: [8.5, 6.25, 8.5] }
        }
        transition={{
          duration: 7.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <PosterCard game={games[1]} tilt="rotate-6" />
      </motion.div>

      <motion.div
        className="absolute bottom-[-1%] left-1/2 w-[66%] -translate-x-1/2 sm:w-[56%]"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -12, 0], rotate: [0, -2.5, 0] }
        }
        transition={{
          duration: 6.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <PosterCard game={games[2]} tilt="rotate-0" />
      </motion.div>

      {[
        {
          text: "Có phở!",
          className:
            "left-[9%] top-[2%] bg-[#fff4e5] text-[#7e3800] shadow-[0_18px_35px_rgba(255,140,97,0.22)]",
        },
        {
          text: "Chiến nào!",
          className:
            "right-[5%] top-[37%] bg-[#ffd446] text-[#7a2500] shadow-[0_18px_35px_rgba(255,196,0,0.22)]",
        },
        {
          text: "Tăng cược!",
          className:
            "left-[21%] bottom-[1%] bg-[#41d3c8] text-[#08354f] shadow-[0_18px_35px_rgba(53,214,196,0.24)]",
        },
      ].map((bubble, index) => (
        <motion.div
          key={bubble.text}
          className={`absolute rounded-full px-6 py-3.5 font-display text-[1.35rem] ${bubble.className}`}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0] }
          }
          transition={{
            duration: 3.4 + index * 0.35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ maxWidth: "11rem" }}
        >
          {bubble.text}
        </motion.div>
      ))}
    </div>
  );
}

export function BingoBoard({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  return <GamePosterVisual game={games[0]} shouldReduceMotion={shouldReduceMotion} />;
}

export function BattleBoard({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  return <GamePosterVisual game={games[1]} shouldReduceMotion={shouldReduceMotion} />;
}

export function StrategyBoard({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  return <GamePosterVisual game={games[2]} shouldReduceMotion={shouldReduceMotion} />;
}

function GamePosterVisual({
  game,
  shouldReduceMotion,
}: {
  game: Game;
  shouldReduceMotion: MotionPreference;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[2.6rem] border border-white/70 bg-white p-5 shadow-[0_30px_70px_rgba(255,152,82,0.18)] sm:p-6"
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0.96), ${game.accentSoft})`,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-28 opacity-80"
        style={{
          background: `radial-gradient(circle at top, ${game.glow}, transparent 68%)`,
        }}
      />

      <div className="relative">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className="rounded-full px-5 py-2.5 text-sm font-black uppercase tracking-[0.24em] text-white"
            style={{ backgroundColor: game.accent }}
          >
            {game.vibe}
          </span>
          <span className="rounded-full border border-white/70 bg-white/75 px-5 py-2.5 text-base font-bold text-[#78401f]">
            {game.players}
          </span>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[2.1rem] border border-white/70 bg-white shadow-[0_24px_50px_rgba(255,183,92,0.2)]"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -4 }}
          transition={{ duration: 0.25 }}
        >
          <Image
            src={game.imageSrc}
            alt={game.imageAlt}
            width={1024}
            height={768}
            className="h-auto w-full"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(255,255,255,0.08)_100%)]" />

          {game.posterBubbles.map((bubble, index) => (
            <motion.div
              key={bubble}
              className={`absolute rounded-full px-5 py-2.5 text-base font-display text-[#603200] shadow-[0_18px_34px_rgba(255,163,72,0.18)] ${
                index === 0
                  ? "left-5 top-5 bg-[#fff4e4]"
                  : index === 1
                    ? "right-5 top-5 bg-[#ffd445]"
                    : "bottom-5 left-1/2 -translate-x-1/2 bg-white/92"
              }`}
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }
              }
              transition={{
                duration: 3 + index * 0.25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {bubble}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {game.highlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[1.4rem] border border-white/70 bg-white/82 px-5 py-4 text-base font-bold text-[#6a3717]"
            >
              {highlight}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PosterCard({
  game,
  tilt,
  priority = false,
}: {
  game: Game;
  tilt: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2.2rem] border border-white/80 bg-white p-3 shadow-[0_26px_65px_rgba(255,160,88,0.22)] ${tilt}`}
    >
      <Image
        src={game.imageSrc}
        alt={game.imageAlt}
        width={1024}
        height={768}
        priority={priority}
        className="h-auto w-full rounded-[1.5rem]"
      />
    </div>
  );
}
