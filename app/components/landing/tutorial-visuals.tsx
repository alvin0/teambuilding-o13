"use client";

import { motion } from "framer-motion";
import type { Game, MotionPreference } from "./types";

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
    return <BattleGuideIllustration shouldReduceMotion={shouldReduceMotion} />;
  }

  return <StrategyGuideIllustration shouldReduceMotion={shouldReduceMotion} />;
}

function BingoGuideIllustration({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  const cells = [
    { x: 54, y: 84, label: "Phở", active: true },
    { x: 198, y: 84, label: "Bún", active: true },
    { x: 342, y: 84, label: "Bánh mì", active: false },
    { x: 54, y: 202, label: "Gỏi cuốn", active: false },
    { x: 198, y: 202, label: "Cơm", active: true },
    { x: 342, y: 202, label: "Xèo", active: false },
    { x: 54, y: 320, label: "Hủ tiếu", active: false },
    { x: 198, y: 320, label: "Bún bò", active: true },
    { x: 342, y: 320, label: "Cháo", active: false },
  ];

  return (
    <svg viewBox="0 0 560 460" className="h-full w-full" role="img" aria-label="Mô phỏng cách chơi Món Ăn Bingo">
      <defs>
        <linearGradient id="bingo-bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fff8ea" />
          <stop offset="100%" stopColor="#ffe1b3" />
        </linearGradient>
      </defs>

      <rect x="18" y="18" width="524" height="424" rx="40" fill="url(#bingo-bg)" />
      <rect x="36" y="36" width="488" height="388" rx="28" fill="#fffdf6" stroke="#ffd08c" strokeWidth="2.5" />

      <motion.g
        animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <rect x="52" y="52" width="454" height="356" rx="26" fill="#fff3d6" />
        {cells.map((cell, index) => (
          <g key={cell.label}>
            <rect
              x={cell.x}
              y={cell.y}
              width="110"
              height="92"
              rx="22"
              fill={cell.active ? "#fff4c4" : "#ffffff"}
              stroke={cell.active ? "#ffaf3f" : "#ffdcb0"}
              strokeWidth="3"
              strokeDasharray={cell.active ? undefined : "8 8"}
            />
            <circle
              cx={cell.x + 28}
              cy={cell.y + 28}
              r="16"
              fill={cell.active ? "#ff9a3d" : "#ffe8c7"}
            />
            <text
              x={cell.x + 55}
              y={cell.y + 62}
              textAnchor="middle"
              fontSize={cell.label.length > 6 ? "16" : "18"}
              fontWeight="800"
              fill={cell.active ? "#7d3300" : "#9a6a41"}
            >
              {cell.label}
            </text>
            {cell.active ? (
              <motion.circle
                cx={cell.x + 84}
                cy={cell.y + 24}
                r="12"
                fill="#ff6d38"
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.18, 1] }}
                transition={{
                  duration: 1.6,
                  delay: index * 0.08,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ) : null}
          </g>
        ))}
      </motion.g>

      <motion.path
        d="M253 130 L253 246 L253 364"
        fill="none"
        stroke="#ff6d38"
        strokeWidth="10"
        strokeLinecap="round"
        animate={shouldReduceMotion ? undefined : { pathLength: [0.4, 1, 1] }}
        transition={{ duration: 2.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.9 }}
      />

      <motion.g
        animate={shouldReduceMotion ? undefined : { x: [0, 14, 0], y: [0, -10, 0] }}
        transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <circle cx="472" cy="70" r="34" fill="#fff4df" />
        <text x="472" y="76" textAnchor="middle" fontSize="22" fontWeight="900" fill="#8f3d00">
          Gọi!
        </text>
      </motion.g>

      <motion.g
        animate={shouldReduceMotion ? undefined : { rotate: [-6, 6, -6] }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ transformOrigin: "105px 356px" }}
      >
        <rect x="52" y="340" width="112" height="52" rx="26" fill="#ff8d2f" />
        <text x="108" y="372" textAnchor="middle" fontSize="18" fontWeight="900" fill="#fff">
          Ăn ngay
        </text>
      </motion.g>

      <rect x="332" y="352" width="160" height="46" rx="23" fill="#fff2dc" stroke="#ffc16e" strokeWidth="2" />
      <text x="412" y="381" textAnchor="middle" fontSize="19" fontWeight="800" fill="#9e511b">
        Hoàn thành 2 hàng
      </text>
    </svg>
  );
}

function BattleGuideIllustration({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  return (
    <svg viewBox="0 0 560 460" className="h-full w-full" role="img" aria-label="Mô phỏng cách chơi Hoàng Đế Đại Chiến">
      <defs>
        <linearGradient id="battle-bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fff1ef" />
          <stop offset="100%" stopColor="#ffe7c8" />
        </linearGradient>
      </defs>

      <rect x="18" y="18" width="524" height="424" rx="40" fill="url(#battle-bg)" />
      <rect x="36" y="36" width="488" height="388" rx="30" fill="#fffaf8" stroke="#ffd3c0" strokeWidth="2.5" />

      <motion.g
        animate={shouldReduceMotion ? undefined : { x: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <circle cx="136" cy="110" r="54" fill="#ff8e65" />
        <path d="M102 96h68l-10 32h-48Z" fill="#ffd44d" />
        <circle cx="116" cy="92" r="8" fill="#ffd44d" />
        <circle cx="136" cy="84" r="8" fill="#ffd44d" />
        <circle cx="156" cy="92" r="8" fill="#ffd44d" />
        <text x="136" y="118" textAnchor="middle" fontSize="21" fontWeight="900" fill="#fff8ed">
          A
        </text>
      </motion.g>

      <motion.g
        animate={shouldReduceMotion ? undefined : { x: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <circle cx="424" cy="110" r="54" fill="#5f7cff" />
        <path d="M390 96h68l-10 32h-48Z" fill="#ffd44d" />
        <circle cx="404" cy="92" r="8" fill="#ffd44d" />
        <circle cx="424" cy="84" r="8" fill="#ffd44d" />
        <circle cx="444" cy="92" r="8" fill="#ffd44d" />
        <text x="424" y="118" textAnchor="middle" fontSize="21" fontWeight="900" fill="#eff4ff">
          B
        </text>
      </motion.g>

      <text x="280" y="126" textAnchor="middle" fontSize="48" fontWeight="900" fill="#ff7e3d">
        VS
      </text>

      {[0, 1, 2, 3].map((member) => (
        <g key={`a-${member}`}>
          <rect x={70 + member * 36} y="184" width="28" height="52" rx="14" fill="#ffb18b" />
        </g>
      ))}
      {[0, 1, 2, 3].map((member) => (
        <g key={`b-${member}`}>
          <rect x={350 + member * 36} y="184" width="28" height="52" rx="14" fill="#9fb2ff" />
        </g>
      ))}

      {[0, 1, 2, 3, 4].map((slot) => (
        <g key={slot}>
          <rect
            x={60 + slot * 92}
            y="272"
            width="74"
            height="74"
            rx="22"
            fill={slot < 3 ? "#fff1d7" : "#fff"}
            stroke={slot < 3 ? "#ffac47" : "#ffd9c0"}
            strokeWidth="3"
          />
          <text
            x={97 + slot * 92}
            y="317"
            textAnchor="middle"
            fontSize="28"
            fontWeight="900"
            fill={slot < 3 ? "#ff7c38" : "#c58a6a"}
          >
            {slot + 1}
          </text>
        </g>
      ))}

      <motion.rect
        x="74"
        y="370"
        width="412"
        height="26"
        rx="13"
        fill="#ffe7d4"
        animate={shouldReduceMotion ? undefined : { opacity: [0.82, 1, 0.82] }}
        transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.rect
        x="74"
        y="370"
        width="246"
        height="26"
        rx="13"
        fill="#ff7c38"
        animate={shouldReduceMotion ? undefined : { width: [226, 256, 226] }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <text x="280" y="389" textAnchor="middle" fontSize="18" fontWeight="900" fill="#6b2b0d">
        Chạm mốc 3/5 để lên ngôi vô địch
      </text>
    </svg>
  );
}

function StrategyGuideIllustration({
  shouldReduceMotion,
}: {
  shouldReduceMotion: MotionPreference;
}) {
  return (
    <svg viewBox="0 0 560 460" className="h-full w-full" role="img" aria-label="Mô phỏng cách chơi Chiến Lược Gia Tài Ba">
      <defs>
        <linearGradient id="strategy-bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#eaf6ff" />
          <stop offset="100%" stopColor="#d9fff2" />
        </linearGradient>
      </defs>

      <rect x="18" y="18" width="524" height="424" rx="40" fill="url(#strategy-bg)" />
      <rect x="36" y="36" width="488" height="388" rx="30" fill="#f9fdff" stroke="#bfe4ff" strokeWidth="2.5" />
      <rect x="72" y="88" width="416" height="250" rx="34" fill="#1570ca" />
      <rect x="92" y="108" width="376" height="210" rx="28" fill="#2387e4" />

      <text x="280" y="80" textAnchor="middle" fontSize="20" fontWeight="900" fill="#0b5e9f">
        Hàng trên: đối thủ thấy
      </text>
      <text x="280" y="366" textAnchor="middle" fontSize="20" fontWeight="900" fill="#14877d">
        Hàng dưới: chỉ bạn biết
      </text>

      {[0, 1, 2, 3].map((index) => (
        <g key={`top-${index}`}>
          <rect x={122 + index * 80} y="132" width="56" height="86" rx="16" fill="#fffaf0" stroke="#d6ebff" strokeWidth="3" />
          <text x={150 + index * 80} y="184" textAnchor="middle" fontSize="34" fontWeight="900" fill={index % 2 === 0 ? "#ff7c38" : "#20a780"}>
            {index % 2 === 0 ? 7 - index : 4 + index}
          </text>
        </g>
      ))}

      {[0, 1, 2, 3].map((index) => (
        <g key={`bottom-${index}`}>
          <rect x={122 + index * 80} y="230" width="56" height="86" rx="16" fill="#8cc5ff" stroke="#bfe2ff" strokeWidth="3" />
          <path d={`M${139 + index * 80} 248h22v50h-22Z`} fill="#72b6ff" />
          <circle cx={150 + index * 80} cy="272" r="14" fill="#9fd2ff" />
        </g>
      ))}

      <motion.g
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <rect x="52" y="116" width="54" height="54" rx="27" fill="#ffd34d" />
        <text x="79" y="149" textAnchor="middle" fontSize="28" fontWeight="900" fill="#8a4a00">
          10
        </text>
      </motion.g>

      <motion.g
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 2.5, delay: 0.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <rect x="454" y="286" width="54" height="54" rx="27" fill="#41d3c8" />
        <text x="481" y="319" textAnchor="middle" fontSize="28" fontWeight="900" fill="#063e4d">
          +2
        </text>
      </motion.g>

      <motion.circle
        cx="280"
        cy="332"
        r="22"
        fill="#ffd34d"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <text x="280" y="340" textAnchor="middle" fontSize="22" fontWeight="900" fill="#7d4300">
        Pot
      </text>
    </svg>
  );
}
