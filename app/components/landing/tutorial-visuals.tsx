"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Game, MotionPreference } from "./types";

const battleFlowSteps = [
  {
    eyebrow: "Bước 1",
    title: "Bốc thăm 2 Hoàng Đế",
    detail: "10 người rút thăm để chọn ra 2 Hoàng Đế mở trận.",
  },
  {
    eyebrow: "Bước 2",
    title: "Oẳn tù tì lấy lượt chọn",
    detail: "Ai thắng được draft người trước và giữ lợi thế đội hình.",
  },
  {
    eyebrow: "Bước 3",
    title: "Hoàn tất đội 5 người",
    detail: "Mỗi phe có 1 Hoàng Đế và 4 lính cát để chia qua 5 game.",
  },
] as const;

const battleRoundMeta = [
  {
    shortTitle: "Plank 1 phút",
    role: "1 lính cát",
    duration: "1 phút",
    winRule: "Giữ đúng tư thế lâu hơn sẽ thắng.",
    note: "Nếu cả hai cùng đủ 1 phút thì tính hòa.",
  },
  {
    shortTitle: "Lật chai nước",
    role: "1 lính cát",
    duration: "1 phút",
    winRule: "Lật chai đứng thẳng nhiều lần hơn sẽ thắng.",
    note: "Mỗi chai chỉ có khoảng 1/3 nước để tăng độ khó.",
  },
  {
    shortTitle: "Đuổi hình bắt chữ",
    role: "1 lính cát",
    duration: "5 hình x 30 giây",
    winRule: "Ai thắng trước 3 đáp án sẽ lấy điểm cho đội.",
    note: "Người có đáp án được quyền xung phong trả lời.",
  },
  {
    shortTitle: "Thiện xạ tài ba",
    role: "1 lính cát",
    duration: "3 lượt bắn",
    winRule: "Làm ngã nhiều chai hơn sẽ thắng.",
    note: "Nếu số chai ngã bằng nhau thì tính hòa.",
  },
  {
    shortTitle: "Đấu giá sức ăn",
    role: "2 Hoàng Đế",
    duration: "Chung kết",
    winRule: "Người chốt giá phải ăn hết phần đã đấu giá.",
    note: "Ăn hết thì thắng, không ăn hết thì thua.",
  },
] as const;

const battleRoundOutcomes = [
  {
    winner: "A",
    score: "1 - 0",
    winnerLabel: "Game 1: Đội A dẫn 1-0",
  },
  {
    winner: "B",
    score: "1 - 1",
    winnerLabel: "Game 2: Đội B gỡ hòa 1-1",
  },
  {
    winner: "A",
    score: "2 - 1",
    winnerLabel: "Game 3: Đội A dẫn 2-1",
  },
  {
    winner: "A",
    score: "3 - 1",
    winnerLabel: "Game 4: Đội A đủ 3 thắng và kết thúc trận",
  },
  {
    winner: null,
    score: "Chỉ mở khi 2 - 2",
    winnerLabel: "Game 5 chỉ mở nếu sau 4 game đang hòa 2-2",
  },
] as const;

const strategyCardNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

const strategyPlayers = [
  { x: 46, y: 146, label: "P1", candies: "10", fill: "#ffd35d", text: "#7d4300" },
  { x: 474, y: 146, label: "P2", candies: "10", fill: "#7be2d8", text: "#0b4d59" },
  { x: 46, y: 246, label: "P3", candies: "10", fill: "#ffb07a", text: "#7a2d00" },
  { x: 474, y: 246, label: "P4", candies: "10", fill: "#96c9ff", text: "#114d8c" },
] as const;

export function GuideIllustration({
  game,
  shouldReduceMotion,
}: {
  game: Game;
  shouldReduceMotion: MotionPreference;
}) {
  if (game.id === "mon-an-bingo") {
    return <BingoGuideIllustration shouldReduceMotion={shouldReduceMotion} />;
  }

  if (game.id === "hoang-de-dai-chien") {
    return <BattleGuideIllustration game={game} shouldReduceMotion={shouldReduceMotion} />;
  }

  return <StrategyGuideIllustration shouldReduceMotion={shouldReduceMotion} />;
}

function BingoGuideIllustration({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  const cells = [
    { x: 74, y: 176, label: "Phở", done: true, column: "left" },
    { x: 172, y: 176, label: "Bún bò", done: false },
    { x: 270, y: 176, label: "Bánh mì", done: true, column: "right" },
    { x: 74, y: 244, label: "Gỏi cuốn", done: true, column: "left" },
    { x: 172, y: 244, label: "Cơm tấm", done: false },
    { x: 270, y: 244, label: "Bún chả", done: true, column: "right" },
    { x: 74, y: 312, label: "Salad", done: true, column: "left" },
    { x: 172, y: 312, label: "Xúc xích", done: false },
    { x: 270, y: 312, label: "Trái cây", done: true, column: "right" },
  ];

  return (
    <svg viewBox="0 0 560 460" className="h-full w-full" role="img" aria-label="Mô phỏng cách chơi Món Ăn Bingo">
      <defs>
        <linearGradient id="bingo-bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fff9ef" />
          <stop offset="52%" stopColor="#ffe8bf" />
          <stop offset="100%" stopColor="#ffd59f" />
        </linearGradient>
        <linearGradient id="bingo-board" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fff6df" />
          <stop offset="100%" stopColor="#fffdf6" />
        </linearGradient>
      </defs>

      <rect x="18" y="18" width="524" height="424" rx="40" fill="url(#bingo-bg)" />
      <rect x="36" y="36" width="488" height="388" rx="28" fill="#fffdf7" stroke="#ffd08c" strokeWidth="2.5" />

      <rect x="54" y="54" width="452" height="88" rx="26" fill="#fff5df" stroke="#ffd59d" strokeWidth="2" />
      <text x="74" y="79" fontSize="13" fontWeight="900" letterSpacing="1.4" fill="#b56b34">
        CHUẨN BỊ
      </text>
      <text x="74" y="102" fontSize="18" fontWeight="900" fill="#8f4a1b">
        Lấy đủ 9 món bằng chén
      </text>
      <text x="74" y="123" fontSize="13" fontWeight="700" fill="#b36b37">
        Xong sớm sẽ được ưu tiên ăn trước
      </text>

      <rect x="314" y="68" width="78" height="58" rx="17" fill="#fffaf0" stroke="#ffd9b2" strokeWidth="1.5" />
      <text x="353" y="84" textAnchor="middle" fontSize="9.5" fontWeight="900" letterSpacing="1.1" fill="#b56b34">
        BÀN BINGO
      </text>
      <text x="353" y="106" textAnchor="middle" fontSize="13" fontWeight="800" fill="#b36b37">
        3x3 ô
      </text>

      <rect x="404" y="68" width="78" height="58" rx="17" fill="#fffaf0" stroke="#ffd9b2" strokeWidth="1.5" />
      <text x="443" y="84" textAnchor="middle" fontSize="9.5" fontWeight="900" letterSpacing="1.1" fill="#b56b34">
        NGƯỜI CHƠI
      </text>
      <text x="443" y="106" textAnchor="middle" fontSize="13" fontWeight="800" fill="#b36b37">
        6 người
      </text>

      <motion.g
        animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <rect x="54" y="158" width="324" height="198" rx="30" fill="url(#bingo-board)" />
        <rect x="66" y="170" width="300" height="174" rx="24" fill="#fff1d2" stroke="#ffd18a" strokeWidth="2.5" />
        <motion.rect
          x="84"
          y="174"
          width="64"
          height="166"
          rx="28"
          fill="#ffcf93"
          animate={shouldReduceMotion ? undefined : { opacity: [0.12, 0.3, 0.12] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.rect
          x="280"
          y="174"
          width="64"
          height="166"
          rx="28"
          fill="#ffcf93"
          animate={shouldReduceMotion ? undefined : { opacity: [0.12, 0.3, 0.12] }}
          transition={{
            duration: 2.4,
            delay: 0.45,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="112"
          y="182"
          width="8"
          height="144"
          rx="4"
          fill="#ff7e42"
          animate={shouldReduceMotion ? undefined : { opacity: [0.28, 0.62, 0.28] }}
          transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.path
          d="M116 188 L116 324"
          fill="none"
          stroke="#ff6d38"
          strokeWidth="8"
          strokeLinecap="round"
          animate={shouldReduceMotion ? undefined : { pathLength: [0, 1, 1], opacity: [0.35, 1, 1] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.6, ease: "easeInOut" }}
        />
        <motion.circle
          cx="116"
          cy="188"
          r="7"
          fill="#ff6d38"
          animate={shouldReduceMotion ? undefined : { y: [0, 136, 136], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.6, ease: "easeInOut" }}
        />
        <motion.rect
          x="308"
          y="182"
          width="8"
          height="144"
          rx="4"
          fill="#ff7e42"
          animate={shouldReduceMotion ? undefined : { opacity: [0.28, 0.62, 0.28] }}
          transition={{ duration: 2.1, delay: 0.45, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.path
          d="M312 188 L312 324"
          fill="none"
          stroke="#ff6d38"
          strokeWidth="8"
          strokeLinecap="round"
          animate={shouldReduceMotion ? undefined : { pathLength: [0, 1, 1], opacity: [0.35, 1, 1] }}
          transition={{
            duration: 2.4,
            delay: 0.45,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.6,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="312"
          cy="188"
          r="7"
          fill="#ff6d38"
          animate={shouldReduceMotion ? undefined : { y: [0, 136, 136], opacity: [0, 1, 0] }}
          transition={{
            duration: 2.4,
            delay: 0.45,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.6,
            ease: "easeInOut",
          }}
        />

        {cells.map((cell, index) => {
          const rowIndex = Math.floor(index / 3);
          const columnDelay = cell.column === "right" ? 0.45 : 0;
          const tickDelay = columnDelay + 0.34 + rowIndex * 0.34;

          return (
            <g key={cell.label}>
              <rect
                x={cell.x}
                y={cell.y}
                width="84"
                height="52"
                rx="16"
                fill={cell.done ? "#fff2bf" : "#ffffff"}
                stroke={cell.done ? "#ffb143" : "#ffdcb0"}
                strokeWidth="2.5"
                strokeDasharray={cell.done ? undefined : "6 6"}
              />
              <text
                x={cell.x + 42}
                y={cell.y + 31}
                textAnchor="middle"
                fontSize={cell.label.length > 7 ? "13" : "14"}
                fontWeight="800"
                fill={cell.done ? "#7f3400" : "#9a6a41"}
              >
                {cell.label}
              </text>
              {cell.column ? (
                <motion.path
                  d={`M${cell.x + 56} ${cell.y + 18}l6 6 12-12`}
                  fill="none"
                  stroke="#ff6d38"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { pathLength: [0, 1, 1], opacity: [0, 1, 1] }
                  }
                  transition={{
                    duration: 0.45,
                    delay: tickDelay,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2.55,
                    ease: "easeInOut",
                  }}
                />
              ) : null}
            </g>
          );
        })}
      </motion.g>

      <rect x="386" y="158" width="120" height="196" rx="26" fill="#fff7e8" stroke="#ffd8a8" strokeWidth="2" />
      <text x="446" y="178" textAnchor="middle" fontSize="10" fontWeight="900" letterSpacing="1.1" fill="#b56b34">
        TRONG
      </text>
      <text x="446" y="191" textAnchor="middle" fontSize="10.5" fontWeight="900" letterSpacing="1" fill="#b56b34">
        VÒNG CHƠI
      </text>

      <motion.g
        animate={shouldReduceMotion ? undefined : { x: [0, 10, 0], y: [0, -6, 0] }}
        transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <rect x="398" y="204" width="96" height="42" rx="21" fill="#ff7e42" />
        <text x="446" y="230" textAnchor="middle" fontSize="14" fontWeight="900" fill="#fffdf6">
          Gọi: Phở
        </text>
      </motion.g>

      <motion.g
        animate={shouldReduceMotion ? undefined : { rotate: [-4, 4, -4] }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ transformOrigin: "446px 282px" }}
      >
        <rect x="396" y="260" width="100" height="44" rx="22" fill="#ff9b37" />
        <text x="446" y="287" textAnchor="middle" fontSize="13.5" fontWeight="900" fill="#fff">
          Ăn hết chén
        </text>
      </motion.g>

      <rect x="394" y="312" width="104" height="34" rx="17" fill="#fff2dc" stroke="#ffc16e" strokeWidth="2" />
      <text x="446" y="324" textAnchor="middle" fontSize="9.5" fontWeight="900" fill="#9e511b">
        Thắng khi đủ
      </text>
      <text x="446" y="335" textAnchor="middle" fontSize="9.5" fontWeight="900" fill="#9e511b">
        2 hàng dọc
      </text>
      <text x="446" y="345" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#b06b36">
        hoặc 2 hàng ngang
      </text>

      <rect x="54" y="372" width="452" height="36" rx="18" fill="#fff3df" stroke="#ffd7a9" strokeWidth="1.5" />
      <text x="280" y="394" textAnchor="middle" fontSize="14" fontWeight="800" fill="#9b5d31">
        Lấy vừa đủ, và chén đã dùng để chơi thì phải ăn hết
      </text>
    </svg>
  );
}

function BattleGuideIllustration({
  game,
  shouldReduceMotion,
}: {
  game: Game;
  shouldReduceMotion: MotionPreference;
}) {
  const battleRounds = game.guideSteps.slice(3).map((step, index) => ({
    ...step,
    ...battleRoundMeta[index],
    ...battleRoundOutcomes[index],
  }));
  const [activeRound, setActiveRound] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveRound((current) => (current + 1) % battleRounds.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [battleRounds.length, shouldReduceMotion]);

  const activeBattleRound = battleRounds[activeRound];
  const winnerTeam = activeBattleRound?.winner;

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-[#ffd9ca] bg-[linear-gradient(180deg,#fff8f5_0%,#fff2e6_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] md:p-5"
      role="img"
      aria-label="Mô phỏng cách chơi Hoàng Đế Đại Chiến với các bước bốc thăm, draft đội hình, năm mini game và chung kết Hoàng Đế"
    >
      <motion.div
        className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#ff9e7b]/20 blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, 16, 0], y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-6 top-20 h-32 w-32 rounded-full bg-[#7c92ff]/18 blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, -14, 0], y: [0, -10, 0] }}
        transition={{ duration: 6.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative">
        <div className="grid gap-2 md:grid-cols-3">
          {battleFlowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="rounded-[1.35rem] border border-white/80 bg-white/80 p-3 shadow-[0_12px_22px_rgba(255,174,120,0.1)]"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#d57a48]">
                {step.eyebrow}
              </p>
              <p className="mt-1 text-sm font-black leading-5 text-[#7b3213]">
                {step.title}
              </p>
              <p className="mt-1.5 text-xs leading-5 text-[#98603f]">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-[1.7rem] border border-[#ffd7c8] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,246,240,0.96))] p-4 shadow-[0_18px_34px_rgba(255,180,124,0.12)]">
          <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
            <BattleTeamCard
              accent="orange"
              title="Hoàng Đế A"
              subtitle="Draft trước nếu thắng"
              shouldReduceMotion={shouldReduceMotion}
              winRounds={battleRounds.map((round) => round.winner === "A")}
              activeRound={activeRound}
              isWinningTeam={winnerTeam === "A"}
              highlightCaptain={activeRound === 4}
            />

            <motion.div
              className="flex flex-col items-center gap-2"
              animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="rounded-full bg-[linear-gradient(135deg,#ff854e,#ff6d3b)] px-4 py-2 text-xl font-black text-white shadow-[0_16px_30px_rgba(255,125,69,0.24)]">
                VS
              </div>
              <div className="rounded-full border border-white bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#7f421e] shadow-[0_10px_22px_rgba(255,182,118,0.12)]">
                Tỉ số mô phỏng {activeBattleRound?.score}
              </div>
              <motion.div
                className={`rounded-full px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_rgba(0,0,0,0.12)] ${
                  winnerTeam === "A"
                    ? "bg-[linear-gradient(135deg,#ff9c6d,#ff7a43)]"
                    : winnerTeam === "B"
                      ? "bg-[linear-gradient(135deg,#7c92ff,#5f7cff)]"
                      : "bg-[linear-gradient(135deg,#a78c7f,#8e7568)]"
                }`}
                key={activeBattleRound?.winnerLabel}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {activeBattleRound?.winnerLabel}
              </motion.div>
            </motion.div>

            <BattleTeamCard
              accent="blue"
              title="Hoàng Đế B"
              subtitle="Giữ át chủ bài tới cuối"
              shouldReduceMotion={shouldReduceMotion}
              winRounds={battleRounds.map((round) => round.winner === "B")}
              activeRound={activeRound}
              isWinningTeam={winnerTeam === "B"}
              highlightCaptain={activeRound === 4}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <motion.div
              className="w-full rounded-[1.2rem] border border-white/80 bg-white/84 px-4 py-3 text-sm font-bold leading-6 text-[#875433] shadow-[0_10px_20px_rgba(255,186,124,0.08)]"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Mỗi lính cát chỉ đấu 1 game. Đội nào đủ <span className="text-[#ff7a43]">3 chiến thắng trước</span> sẽ thắng ngay.
              Game 5 chỉ dùng khi sau 4 game đang <span className="text-[#5f7cff]">hòa 2-2</span>.
            </motion.div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b3653d]">
              5 mini game quyết định ngai vàng
            </p>
            <div className="rounded-full bg-white/90 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#5f7cff] shadow-[0_8px_18px_rgba(95,124,255,0.12)]">
              Vòng {activeRound + 1}/5
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-5">
            {battleRounds.map((round, index) => {
              const isActive = index === activeRound;

              return (
                <motion.button
                  key={round.title}
                  type="button"
                  onClick={() => setActiveRound(index)}
                  onHoverStart={() => setActiveRound(index)}
                  className={`relative overflow-hidden rounded-[1.35rem] border px-3 py-3 text-left transition ${
                    isActive
                      ? "border-[#ff9a52] bg-[linear-gradient(180deg,#fff5db,#fff0df)] shadow-[0_16px_28px_rgba(255,160,85,0.18)]"
                      : "border-[#ffd9c4] bg-white/84 shadow-[0_10px_20px_rgba(255,190,124,0.08)]"
                  }`}
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  {isActive ? (
                    <motion.div
                      className="absolute inset-x-3 top-0 h-1 rounded-b-full bg-[linear-gradient(90deg,#ff8a48,#ffd44d)]"
                      layoutId="battle-active-round"
                    />
                  ) : null}

                  <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#ff7a3a]">
                    {`0${index + 1}`}
                  </p>
                  <p className="mt-1 text-sm font-black leading-5 text-[#6d2d10]">
                    {round.shortTitle}
                  </p>
                  <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#8d5d3b]">
                    {round.role}
                  </p>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={battleRounds[activeRound]?.title}
              className="mt-3 grid gap-3 rounded-[1.7rem] border border-[#ffd8c8] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,236,0.96))] p-4 shadow-[0_18px_34px_rgba(255,182,124,0.12)] md:grid-cols-[1.2fr_0.8fr]"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#d17644]">
                  Đang minh họa
                </p>
                <h4 className="mt-1 font-display text-[1.5rem] leading-tight tracking-[-0.03em] text-[#742d10]">
                  {activeBattleRound?.title}
                </h4>
                <p className="mt-2 text-sm leading-7 text-[#88522d]">
                  {activeBattleRound?.detail}
                </p>
                <div className="mt-3 inline-flex rounded-full bg-[rgba(95,124,255,0.12)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#4d64cc]">
                  {activeBattleRound?.cue}
                </div>
              </div>

              <div className="grid gap-2.5">
                {[
                  {
                    label: "Người thi đấu",
                    value: activeBattleRound?.role,
                  },
                  {
                    label: "Thời lượng",
                    value: activeBattleRound?.duration,
                  },
                  {
                    label: "Cách thắng",
                    value: activeBattleRound?.winRule,
                  },
                  {
                    label: "Ghi chú",
                    value: activeBattleRound?.note,
                  },
                  {
                    label: "Đội thắng",
                    value:
                      winnerTeam === "A"
                        ? "Hoàng Đế A"
                        : winnerTeam === "B"
                          ? "Hoàng Đế B"
                          : "Chưa xác định, chỉ thi đấu khi tỉ số đang là 2-2",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="rounded-[1.2rem] border border-white/80 bg-white/88 px-3 py-3 shadow-[0_10px_20px_rgba(255,190,124,0.08)]"
                    initial={shouldReduceMotion ? undefined : { opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                  >
                    <p className="text-[0.64rem] font-black uppercase tracking-[0.18em] text-[#c27445]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#714227]">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-3">
            <div className="h-3 overflow-hidden rounded-full bg-[#ffe6d5]">
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,#ff7c38,#ffb347)]"
                animate={{
                  width: `${((activeRound + 1) / battleRounds.length) * 100}%`,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#926241]">
              <span>Chạm mốc 3/5 để vô địch</span>
              <span>
                {activeRound === 4
                  ? "Game 5 chỉ là nhánh dự phòng nếu hòa 2-2"
                  : "Đủ 3 trận thắng là dừng trận ngay"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BattleTeamCard({
  accent,
  title,
  subtitle,
  shouldReduceMotion,
  winRounds,
  activeRound,
  isWinningTeam,
  highlightCaptain,
}: {
  accent: "orange" | "blue";
  title: string;
  subtitle: string;
  shouldReduceMotion: MotionPreference;
  winRounds: boolean[];
  activeRound: number;
  isWinningTeam: boolean;
  highlightCaptain: boolean;
}) {
  const isOrange = accent === "orange";

  return (
    <div
      className={`rounded-[1.5rem] border p-3 ${
        isOrange
          ? isWinningTeam
            ? "border-[#ffb188] bg-[linear-gradient(180deg,#fff5ee,#fffaf8)] shadow-[0_12px_24px_rgba(255,146,94,0.12)]"
            : "border-[#ffceb8] bg-[linear-gradient(180deg,#fff5ee,#fffaf8)]"
          : isWinningTeam
            ? "border-[#9fb2ff] bg-[linear-gradient(180deg,#f4f7ff,#fbfcff)] shadow-[0_12px_24px_rgba(95,124,255,0.12)]"
            : "border-[#d4dcff] bg-[linear-gradient(180deg,#f4f7ff,#fbfcff)]"
      }`}
    >
      <div className="flex items-center gap-3">
        <motion.div
          className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-black text-white shadow-[0_12px_24px_rgba(0,0,0,0.12)] ${
            isOrange
              ? "bg-[linear-gradient(135deg,#ff9c6d,#ff7a43)]"
              : "bg-[linear-gradient(135deg,#7c92ff,#5f7cff)]"
          }`}
          animate={
            shouldReduceMotion
              ? undefined
              : highlightCaptain
                ? { scale: [1, 1.08, 1], rotate: [0, -4, 0] }
                : { y: [0, -4, 0] }
          }
          transition={{
            duration: highlightCaptain ? 1.8 : 2.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {isOrange ? "A" : "B"}
          {isWinningTeam ? (
            <motion.span
              className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0.62rem] font-black text-[#ff7a43]"
              initial={shouldReduceMotion ? undefined : { scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.22 }}
            >
              V
            </motion.span>
          ) : null}
        </motion.div>

        <div>
          <p
            className={`text-sm font-black uppercase tracking-[0.2em] ${
              isOrange ? "text-[#d36d3a]" : "text-[#5d74d9]"
            }`}
          >
            {title}
          </p>
          <p className="mt-1 text-xs leading-5 text-[#8f5d3c]">{subtitle}</p>
        </div>
      </div>

      <div className="mt-3 rounded-[1.05rem] border border-white/80 bg-white/72 px-3 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#9b6948]">
            Game thắng
          </p>
          <p
            className={`text-[0.62rem] font-black uppercase tracking-[0.18em] ${
              isOrange ? "text-[#d36d3a]" : "text-[#5d74d9]"
            }`}
          >
            {winRounds.slice(0, activeRound + 1).filter(Boolean).length} thắng
          </p>
        </div>

        <div className="mt-2 grid grid-cols-5 gap-2">
          {winRounds.map((didWin, index) => {
            const isPlayed = index <= activeRound;
            const isFutureTiebreak = index === 4 && activeRound < 4;

            return (
              <div
                key={`win-${index}`}
                className={`flex h-9 items-center justify-center rounded-[0.9rem] border text-[0.65rem] font-black uppercase ${
                  didWin
                    ? isOrange
                      ? "border-[#ffbf9d] bg-[#fff0e6] text-[#ff7a43]"
                      : "border-[#c5d0ff] bg-[#eef2ff] text-[#5f7cff]"
                    : isPlayed
                      ? "border-[#ead8cc] bg-[#fffaf6] text-[#c2a18a]"
                      : "border-[#efe4db] bg-white/70 text-[#d8b8a2]"
                }`}
              >
                {didWin ? "V" : isFutureTiebreak ? "?" : isPlayed ? "-" : ""}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2">
        {["Đế", "L1", "L2", "L3", "L4"].map((member, index) => {
          const isCaptain = index === 0;

          return (
            <motion.div
              key={member}
              className={`relative flex h-10 items-center justify-center rounded-[0.95rem] border text-xs font-black uppercase ${
                isOrange
                  ? "border-[#ffd4bf] bg-[#fff0e6] text-[#8c431d]"
                  : "border-[#dde3ff] bg-[#eef2ff] text-[#4059be]"
              }`}
              animate={
                shouldReduceMotion
                  ? undefined
                  : isCaptain && highlightCaptain
                    ? { y: [0, -6, 0], scale: [1, 1.06, 1] }
                    : { opacity: [0.8, 1, 0.8] }
              }
              transition={{
                duration: isCaptain && highlightCaptain ? 1.5 : 2.4 + index * 0.12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {member}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function StrategyGuideIllustration({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  return (
    <svg
      viewBox="0 0 560 500"
      className="h-full w-full"
      role="img"
      aria-label="Mô phỏng cách chơi Chiến Lược Gia Tài Ba"
    >
      <defs>
        <linearGradient id="strategy-bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#eef9ff" />
          <stop offset="52%" stopColor="#e3f4ff" />
          <stop offset="100%" stopColor="#dffef2" />
        </linearGradient>
        <linearGradient id="strategy-table" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1570ca" />
          <stop offset="100%" stopColor="#1f9fcb" />
        </linearGradient>
        <linearGradient id="strategy-top-card" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fffef9" />
          <stop offset="100%" stopColor="#fff3da" />
        </linearGradient>
        <linearGradient id="strategy-bottom-card" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#29b7a7" />
          <stop offset="100%" stopColor="#1b968b" />
        </linearGradient>
        <radialGradient id="strategy-pot" cx="50%" cy="50%" r="56%">
          <stop offset="0%" stopColor="#fff6c4" />
          <stop offset="100%" stopColor="#ffca3f" />
        </radialGradient>
      </defs>

      <rect x="18" y="18" width="524" height="464" rx="40" fill="url(#strategy-bg)" />
      <rect
        x="36"
        y="36"
        width="488"
        height="428"
        rx="30"
        fill="#fafdff"
        stroke="#bfe5f4"
        strokeWidth="2.5"
      />

      {[
        { x: 54, label: "4 người chơi", fill: "#fff7d4", stroke: "#ffe190", text: "#8a5b12" },
        { x: 222, label: "10 kẹo / người", fill: "#e8fffb", stroke: "#9de7dc", text: "#12786f" },
        { x: 390, label: "2 vòng đầu tư", fill: "#edf4ff", stroke: "#b7d6ff", text: "#2766b7" },
      ].map((chip) => (
        <g key={chip.label}>
          <rect
            x={chip.x}
            y="58"
            width="116"
            height="42"
            rx="18"
            fill={chip.fill}
            stroke={chip.stroke}
            strokeWidth="1.5"
          />
          <text
            x={chip.x + 58}
            y="84"
            textAnchor="middle"
            fontSize="13"
            fontWeight="900"
            fill={chip.text}
          >
            {chip.label}
          </text>
        </g>
      ))}

      <rect x="84" y="132" width="392" height="230" rx="34" fill="url(#strategy-table)" />
      <rect x="100" y="148" width="360" height="198" rx="28" fill="#2f8edd" />

      <text x="280" y="172" textAnchor="middle" fontSize="13" fontWeight="900" letterSpacing="1" fill="#dff3ff">
        HÀNG TRÊN: BẠN KHÔNG BIẾT, ĐỐI THỦ ĐƯỢC BIẾT
      </text>
      <text x="280" y="270" textAnchor="middle" fontSize="13" fontWeight="900" letterSpacing="1" fill="#dffdf5">
        HÀNG DƯỚI: CHỈ BẠN ĐƯỢC BIẾT
      </text>

      {strategyCardNumbers.map((card, index) => {
        const x = 106 + index * 35;
        const isPrivateFocus = index === 7;

        return (
          <g key={`strategy-card-${card}`}>
            {isPrivateFocus ? (
              <motion.rect
                x={x - 4}
                y="243"
                width="36"
                height="60"
                rx="12"
                fill="#91ffe7"
                animate={shouldReduceMotion ? undefined : { opacity: [0.18, 0.4, 0.18] }}
                transition={{ duration: 1.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            ) : null}

            <rect
              x={x}
              y="190"
              width="28"
              height="42"
              rx="9"
              fill="url(#strategy-top-card)"
              stroke="#e6f2ff"
              strokeWidth="1.6"
            />
            <text
              x={x + 14}
              y="216"
              textAnchor="middle"
              fontSize="15"
              fontWeight="900"
              fill={card % 2 === 0 ? "#1975cc" : "#ff7d3a"}
            >
              {card}
            </text>

            <rect
              x={x}
              y="286"
              width="28"
              height="42"
              rx="9"
              fill="url(#strategy-bottom-card)"
              stroke="#aef3ea"
              strokeWidth="1.6"
            />
            <text x={x + 14} y="312" textAnchor="middle" fontSize="15" fontWeight="900" fill="#f4fffd">
              {card}
            </text>
          </g>
        );
      })}

      {strategyPlayers.map((player, index) => (
        <motion.g
          key={player.label}
          animate={shouldReduceMotion ? undefined : { y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
          transition={{
            duration: 2.6,
            delay: index * 0.18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <rect x={player.x} y={player.y} width="40" height="64" rx="20" fill={player.fill} />
          <text x={player.x + 20} y={player.y + 22} textAnchor="middle" fontSize="14" fontWeight="900" fill={player.text}>
            {player.label}
          </text>
          <text x={player.x + 20} y={player.y + 46} textAnchor="middle" fontSize="18" fontWeight="900" fill={player.text}>
            {player.candies}
          </text>
          <text x={player.x + 20} y={player.y + 59} textAnchor="middle" fontSize="8.5" fontWeight="900" letterSpacing="0.8" fill={player.text}>
            KẸO
          </text>
        </motion.g>
      ))}

      <motion.g
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 1.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <circle cx="280" cy="378" r="34" fill="url(#strategy-pot)" stroke="#ffe69b" strokeWidth="4" />
        <text x="280" y="373" textAnchor="middle" fontSize="16" fontWeight="900" fill="#875100">
          POT
        </text>
        <text x="280" y="393" textAnchor="middle" fontSize="13" fontWeight="900" fill="#875100">
          cược chung
        </text>
      </motion.g>

      {[
        { cx: 114, cy: 350, delay: 0 },
        { cx: 170, cy: 388, delay: 0.18 },
        { cx: 446, cy: 350, delay: 0.34 },
        { cx: 390, cy: 388, delay: 0.52 },
      ].map((candy) => (
        <motion.circle
          key={`${candy.cx}-${candy.cy}`}
          cx={candy.cx}
          cy={candy.cy}
          r="9"
          fill="#ffe17a"
          animate={shouldReduceMotion ? undefined : { x: [0, (280 - candy.cx) * 0.2, 0] }}
          transition={{
            duration: 2.1,
            delay: candy.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {[
        {
          x: 68,
          stroke: "#bfe8e1",
          fill: "#f6fffd",
          title: "MỞ VÒNG",
          detailTop: "Mỗi người đặt",
          detailBottom: "1 kẹo",
          titleColor: "#1a8d80",
          detailColor: "#0e615a",
        },
        {
          x: 204,
          stroke: "#c7dafd",
          fill: "#f7fbff",
          title: "NÂNG CƯỢC",
          detailTop: "Mỗi người có 2 lần",
          detailBottom: "tăng cược",
          titleColor: "#2670c4",
          detailColor: "#1c5ca8",
        },
        {
          x: 340,
          stroke: "#ffd7c1",
          fill: "#fffaf6",
          title: "CHỐT VÒNG",
          detailTop: "Tổng 2 lá cao nhất",
          detailBottom: "sẽ thắng",
          titleColor: "#cf6b34",
          detailColor: "#97491c",
        },
      ].map((item) => (
        <g key={item.title}>
          <rect
            x={item.x}
            y="422"
            width="152"
            height="54"
            rx="18"
            fill={item.fill}
            stroke={item.stroke}
            strokeWidth="1.8"
          />
          <text
            x={item.x + 76}
            y="441"
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="900"
            letterSpacing="0.8"
            fill={item.titleColor}
          >
            {item.title}
          </text>
          <text
            x={item.x + 76}
            y="458"
            textAnchor="middle"
            fontSize="12"
            fontWeight="900"
            fill={item.detailColor}
          >
            {item.detailTop}
          </text>
          <text
            x={item.x + 76}
            y="471"
            textAnchor="middle"
            fontSize="12"
            fontWeight="900"
            fill={item.detailColor}
          >
            {item.detailBottom}
          </text>
        </g>
      ))}
    </svg>
  );
}
