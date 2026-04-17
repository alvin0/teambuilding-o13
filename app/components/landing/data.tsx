import { CrownIcon, FoodIcon, StrategyIcon } from "./icons";
import type { Game } from "./types";

export const games: Game[] = [
  {
    id: "mon-an-bingo",
    title: "Món Ăn Bingo",
    shortTitle: "Bingo Ẩm Thực",
    players: "6 người",
    vibe: "Ăn vui • Gọi tên • Hô Bingo",
    spirit: "Nhanh tay • May mắn • Cười bung nóc",
    summary:
      "Cuộc đua ẩm thực nơi tốc độ, quan sát và độ lì của chiếc bụng cùng lên sân khấu.",
    tagline: "Ăn nhanh – Trúng chuẩn – Cười thả ga",
    intro:
      "Mỗi người tự xếp một bàn Bingo 3×3 từ 9 món ăn và phải ăn ngay khi ô của mình được gọi tên.",
    concept:
      "Nhịp chơi nhanh, phản xạ liên tục và tiếng cười bùng nổ vì ai cũng vừa soi bảng vừa chiến đấu với chiếc bụng của mình.",
    winCondition:
      "Chạm 2 hàng dọc hoặc 2 hàng ngang trước tiên để thắng.",
    bullets: [
      "Lấy món càng nhanh, lợi thế mở màn càng lớn.",
      "Trúng ô là phải ăn ngay, không có chỗ cho chần chừ.",
      "Cả bàn luôn ở trạng thái hỗn loạn dễ thương và đầy tiếng cười.",
    ],
    highlights: ["Bingo 3×3", "Food pop animation", "Progress theo số hàng"],
    visualTitle: "Bingo board đang nóng máy",
    accent: "#ff8c61",
    accentSoft: "rgba(255, 140, 97, 0.18)",
    glow: "rgba(255, 140, 97, 0.35)",
    imageSrc: "/resources/game-1.png",
    imageAlt:
      "Poster game Món Ăn Bingo với bảng bingo món ăn và người chơi hào hứng quanh bàn.",
    posterBubbles: ["Có phở!", "Chọn nhanh!", "Bắt đầu!"],
    icon: FoodIcon,
  },
  {
    id: "hoang-de-dai-chien",
    title: "Hoàng Đế Đại Chiến",
    shortTitle: "Đại Chiến Đế Chế",
    players: "10 người • 2 đội",
    vibe: "Chọn quân • Đấu trận • Vô địch",
    spirit: "Đối đầu • Chiến thuật • Đồng đội bùng nổ",
    summary:
      "Hai Hoàng Đế tuyển quân, dựng đội hình và phân người đúng trận để tranh ngôi vô địch.",
    tagline: "Chiến lược đúng – Đội hình mạnh – Vinh quang thuộc về bạn",
    intro:
      "Sau màn draft đội hình, hai phe bước vào 5 mini game trải từ thể lực đến đấu trí và chung kết quyết định.",
    concept:
      "Mỗi thành viên chỉ ra sân một lần, nên Hoàng Đế thắng bằng cách chọn đúng người cho đúng thử thách.",
    winCondition: "Đội thắng 3 trên 5 mini game sẽ giành vương miện vô địch.",
    bullets: [
      "Draft đội hình tạo cảm giác battle thật sự ngay từ đầu.",
      "Mỗi mini game đại diện cho một loại thử thách khác nhau.",
      "Nếu hòa sau 4 game, hai Hoàng Đế bước vào màn quyết chiến cuối cùng.",
    ],
    highlights: ["Layout 2 phe", "Scoreboard 3/5", "Reveal đội hình"],
    visualTitle: "Battle arena chia đôi chiến tuyến",
    accent: "#5f7cff",
    accentSoft: "rgba(95, 124, 255, 0.16)",
    glow: "rgba(95, 124, 255, 0.33)",
    imageSrc: "/resources/game-2.png",
    imageAlt:
      "Poster game Hoàng Đế Đại Chiến với hai đội đối đầu, hai hoàng đế và năm mini game.",
    posterBubbles: ["Chọn lính trước!", "Chiến nào!", "Đội tôi thắng!"],
    icon: CrownIcon,
  },
  {
    id: "chien-luoc-gia-tai-ba",
    title: "Chiến Lược Gia Tài Ba",
    shortTitle: "Đấu Trí Kẹo Cược",
    players: "4 người",
    vibe: "Phân tích • Bluff • Tăng cược",
    spirit: "Bluff • Suy luận • Tâm lý chiến",
    summary:
      "Một bàn cược gọn nhưng căng, nơi càng ít thông tin thì từng quyết định càng sắc bén.",
    tagline: "Ít thông tin – Nhiều suy đoán – Quyết định tất cả",
    intro:
      "Mỗi người cầm 10 viên kẹo, bốc 2 lá bài với thông tin bất đối xứng và phải liên tục quyết định theo, tố hay dừng.",
    concept:
      "Bạn không thắng chỉ nhờ bài mạnh; bạn thắng khi đọc đúng đối thủ và bluff đúng nhịp.",
    winCondition:
      "Kết thúc các vòng, ai giữ nhiều kẹo nhất sẽ chiến thắng.",
    bullets: [
      "Một lá bài bị lộ cho đối thủ, một lá chỉ mình bạn biết.",
      "Mỗi vòng có 2 lần tăng cược khiến nhịp căng thẳng dồn lên.",
      "Từng ánh mắt và biểu cảm đều trở thành dữ kiện để đọc vị.",
    ],
    highlights: ["Card flip", "Candy counter", "Focus theo lượt"],
    visualTitle: "Bàn cược nơi mọi ánh nhìn đều có ý đồ",
    accent: "#35d6c4",
    accentSoft: "rgba(53, 214, 196, 0.16)",
    glow: "rgba(53, 214, 196, 0.32)",
    imageSrc: "/resources/game-3.png",
    imageAlt:
      "Poster game Chiến Lược Gia Tài Ba với bốn người chơi, bàn bài và các viên kẹo đặt cược.",
    posterBubbles: ["Mình đoán mạnh!", "Phân tích đối thủ!", "Tăng cược!"],
    icon: StrategyIcon,
  },
];

export const navItems = [
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Trò chơi", href: "#tro-choi" },
  { label: "Bùng nổ", href: "#san-sang" },
];

export const heroStats = [
  { label: "3 game", value: "3 cá tính" },
  { label: "20+ tiếng cười", value: "Liên tục" },
  { label: "1 tinh thần", value: "Cùng thắng lớn" },
];
