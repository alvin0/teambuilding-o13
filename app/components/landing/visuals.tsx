import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { games, heroMoments } from "./data";
import { viewport } from "./shared";
import type { Game, MotionPreference } from "./types";

export function HeroCelebrationCarousel({
  shouldReduceMotion,
  activeIndex,
  onSelect,
}: {
  shouldReduceMotion: MotionPreference;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const activeGame = games[activeIndex];
  const activeMoment = heroMoments[activeIndex];

  return (
    <div className="relative grid min-h-[32rem] grid-rows-[auto_18rem_auto] overflow-hidden rounded-[2.8rem] bg-[linear-gradient(180deg,rgba(255,252,246,0.96),rgba(255,243,220,0.96))] p-5 sm:p-6 md:min-h-[35rem] md:grid-rows-[auto_28rem_auto]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,176,76,0.18),transparent_22%),radial-gradient(circle_at_80%_16%,rgba(255,115,148,0.14),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(78,195,255,0.18),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-[10%] top-[12%] h-[60%] rounded-[2.4rem] border border-white/60 bg-white/18 backdrop-blur-[2px]" />

      <div className="relative z-10 mt-8 h-[18rem] md:mt-4 md:h-[28rem]">
        {games.map((game, index) => {
          const slot = getHeroCardSlot(index, activeIndex, games.length);

          return (
            <motion.div
              key={game.id}
              className="absolute left-1/2 top-0 w-[72%] max-w-[34rem] -translate-x-1/2 md:w-[58%]"
              animate={{
                x: slot.x,
                y: slot.y,
                scale: slot.scale,
                rotate: slot.rotate,
                opacity: slot.opacity,
                filter: slot.blur,
              }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : {
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                      mass: 0.9,
                    }
              }
              style={{ zIndex: slot.zIndex }}
            >
              <div className="relative overflow-visible">
                {slot.isActive ? (
                  <>
                    <motion.div
                      className="absolute -right-6 bottom-8 z-30 rounded-full px-5 py-3 text-base font-black text-white shadow-[0_18px_36px_rgba(255,150,70,0.28)]"
                      style={{ backgroundColor: activeGame.accent }}
                      animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      {activeMoment.label}
                    </motion.div>
                  </>
                ) : (
                  <div
                    className="absolute left-4 top-4 z-20 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_12px_26px_rgba(255,150,70,0.18)]"
                    style={{ backgroundColor: game.accent }}
                  >
                    {index < activeIndex ? "Vừa chiếu" : "Sắp tới"}
                  </div>
                )}

                <PosterCard
                  game={game}
                  tilt={slot.isActive ? "rotate-0" : ""}
                  priority={slot.isActive}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 mt-4 rounded-[2rem] border border-white/72 bg-white/76 p-5 shadow-[0_22px_48px_rgba(255,190,112,0.12)] backdrop-blur-sm md:-mt-2">
        <div className="max-w-[30rem]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b56e40]">
            Carousel cổ động tự động
          </p>
          <div className="relative mt-2 min-h-[10.75rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeGame.id}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <h3 className="font-display text-[1.9rem] leading-tight tracking-[-0.04em] text-[#6e2a0e]">
                  {activeMoment.headline}
                </h3>
                <p className="mt-2 text-[1rem] leading-7 text-[#86512c]">
                  {activeMoment.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {games.map((game, index) => (
            <button
              key={game.id}
              type="button"
              onClick={() => onSelect(index)}
              className={`rounded-full px-4 py-2 text-sm font-black transition ${
                index === activeIndex
                  ? "text-white shadow-[0_14px_30px_rgba(255,150,70,0.22)]"
                  : "border border-white bg-white/78 text-[#8f5631]"
              }`}
              style={
                index === activeIndex
                  ? { backgroundColor: game.accent }
                  : undefined
              }
            >
              {game.shortTitle}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          {games.map((game, index) => (
            <button
              key={`${game.id}-dot`}
              type="button"
              aria-label={`Chuyển sang ${game.shortTitle}`}
              onClick={() => onSelect(index)}
              className={`h-3 rounded-full transition-all ${
                index === activeIndex ? "w-12" : "w-3"
              }`}
              style={{
                backgroundColor: index === activeIndex ? game.accent : "rgba(180, 120, 72, 0.28)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function getHeroCardSlot(index: number, activeIndex: number, total: number) {
  const normalized = (index - activeIndex + total) % total;

  if (normalized === 0) {
    return {
      x: "0%",
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 30,
      blur: "blur(0px)",
      isActive: true,
    };
  }

  if (normalized === 1) {
    return {
      x: "56%",
      y: 56,
      scale: 0.72,
      rotate: 10,
      opacity: 0.62,
      zIndex: 10,
      blur: "blur(1.8px)",
      isActive: false,
    };
  }

  return {
    x: "-56%",
    y: 48,
    scale: 0.72,
    rotate: -10,
    opacity: 0.62,
    zIndex: 10,
    blur: "blur(1.8px)",
    isActive: false,
  };
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
        <Image
          src={game.imageSrc}
          alt={game.imageAlt}
          fill
          sizes="(min-width: 768px) 34rem, 72vw"
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
