import { CrownIcon, FoodIcon, StrategyIcon } from "./icons";
import type { Game, HeroMoment } from "./types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

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
    imageSrc: withBasePath("/resources/game-1.png"),
    imageAlt:
      "Poster game Món Ăn Bingo với bảng bingo món ăn và người chơi hào hứng quanh bàn.",
    posterBubbles: ["Có phở!", "Chọn nhanh!", "Bắt đầu!"],
    guideIntro:
      "Một vòng Bingo vui nhộn nơi ai cũng phải vừa quan sát bàn, vừa phản xạ, vừa thật sự ăn món vừa được gọi.",
    guideSteps: [
      {
        title: "Xếp bàn 3×3",
        detail:
          "Mỗi người nhận 9 món ăn và tự sắp thành bảng Bingo 3×3 của riêng mình trước khi game bắt đầu.",
        cue: "Thu thập nhanh để vào trận với bàn đẹp và lợi thế sớm.",
      },
      {
        title: "Nghe gọi món, ăn ngay",
        detail:
          "MC hoặc người chơi lần lượt gọi tên một món. Nếu món đó xuất hiện trên bàn của bạn, bạn phải đánh dấu và ăn ngay món đó.",
        cue: "Không chỉ trúng ô, bạn còn phải xử lý chiếc bụng thật nhanh.",
      },
      {
        title: "Khóa 2 hàng để thắng",
        detail:
          "Người đầu tiên hoàn thành 2 hàng ngang hoặc 2 hàng dọc sẽ hô Bingo và giành chiến thắng.",
        cue: "Ưu tiên các ô tạo chuỗi đôi để về đích sớm hơn.",
      },
    ],
    guideOutro:
      "Luật ngắn, nhịp nhanh, tiếng cười lớn. Đây là game mở màn cực hợp để kéo cả đội nhập cuộc ngay lập tức.",
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
    imageSrc: withBasePath("/resources/game-2.png"),
    imageAlt:
      "Poster game Hoàng Đế Đại Chiến với hai đội đối đầu, hai hoàng đế và năm mini game.",
    posterBubbles: ["Chọn lính trước!", "Chiến nào!", "Đội tôi thắng!"],
    guideIntro:
      "Một trận battle theo đội, nơi Hoàng Đế phải draft quân và phân người đúng mini game để giữ lợi thế suốt 5 vòng.",
    guideSteps: [
      {
        title: "Chọn Hoàng Đế, draft đội",
        detail:
          "2 người làm Hoàng Đế, sau đó oẳn tù tì để lấy quyền chọn trước và lần lượt tuyển thành viên về phe mình.",
        cue: "Ngay từ khâu draft đã bắt đầu tư duy chiến thuật.",
      },
      {
        title: "Phân lính vào từng thử thách",
        detail:
          "Hai đội bước vào 5 mini game khác nhau. Mỗi thành viên chỉ được chơi 1 game, nên phải chọn đúng người cho đúng bài.",
        cue: "Thể lực, khéo léo, IQ/EQ, thiện xạ và chung kết đều cần người phù hợp.",
      },
      {
        title: "Chạm mốc 3 chiến thắng",
        detail:
          "Đội thắng 3 trên 5 mini game sẽ vô địch. Nếu sau 4 game vẫn cân bằng, hai Hoàng Đế sẽ trực tiếp quyết chiến ở trận cuối.",
        cue: "Giữ nhịp điểm số và tung át chủ bài đúng lúc là chìa khóa.",
      },
    ],
    guideOutro:
      "Game này hợp để đẩy cao tinh thần đồng đội vì mỗi lựa chọn đội hình đều tạo cảm giác đối đầu thật sự.",
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
    imageSrc: withBasePath("/resources/game-3.png"),
    imageAlt:
      "Poster game Chiến Lược Gia Tài Ba với bốn người chơi, bàn bài và các viên kẹo đặt cược.",
    posterBubbles: ["Mình đoán mạnh!", "Phân tích đối thủ!", "Tăng cược!"],
    guideIntro:
      "Một bàn cược nhỏ nhưng rất căng, nơi thông tin bị chia lệch và từng lần tăng kẹo đều là một nước đi tâm lý.",
    guideSteps: [
      {
        title: "Nhận 10 viên kẹo và 2 lá bài",
        detail:
          "Mỗi người bắt đầu với 10 viên kẹo. Bạn bốc 2 lá bài, một lá thuộc hàng trên và một lá thuộc hàng dưới.",
        cue: "Kẹo vừa là tài nguyên vừa là áp lực trong mọi quyết định.",
      },
      {
        title: "Đọc thông tin bất đối xứng",
        detail:
          "Lá hàng trên thì đối thủ thấy còn bạn không thấy. Lá hàng dưới thì chỉ bạn biết, nên ai cũng phải suy luận liên tục.",
        cue: "Đây là lúc bluff, đoán bài và đọc biểu cảm lên ngôi.",
      },
      {
        title: "Cược, tăng cược, ăn pot",
        detail:
          "Mỗi vòng mọi người đặt 1 viên kẹo, sau đó có 2 cơ hội tăng cược. Người có tổng điểm cao nhất lấy toàn bộ pot; hòa thì chia đều.",
        cue: "Sau toàn bộ các vòng, ai giữ nhiều kẹo nhất sẽ trở thành Chiến Lược Gia Tài Ba.",
      },
    ],
    guideOutro:
      "Game này tạo cảm giác hồi hộp rất tốt khi chiếu trên màn lớn vì chỉ cần nhìn vào nhịp cược là người xem đã thấy căng.",
    icon: StrategyIcon,
  },
];

export const navItems = [
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Trò chơi", href: "#tro-choi" },
  { label: "Bùng nổ", href: "#san-sang" },
];

export const heroStats = [
  { label: "3 trò chơi", value: "Luôn có màn để reo hò" },
  { label: "1 tinh thần", value: "Càng chơi càng gắn kết" },
  { label: "Không khí", value: "Vui từ lúc mở màn" },
];

export const heroMoments: HeroMoment[] = [
  {
    gameId: "mon-an-bingo",
    headline: "Mở màn bằng một tràng cười thật lớn",
    description:
      "Món Ăn Bingo kéo cả team nhập cuộc ngay từ đầu với nhịp gọi món, ăn nhanh và hò reo liên tục quanh bàn.",
    label: "Cười bung không khí",
  },
  {
    gameId: "hoang-de-dai-chien",
    headline: "Đối đầu vui nhưng vẫn đầy tinh thần đồng đội",
    description:
      "Hoàng Đế Đại Chiến khiến cả phòng cùng theo dõi từng lượt draft đội, cổ vũ từng mini game và bùng nổ khi lật kèo.",
    label: "Cổ vũ nhiệt lên",
  },
  {
    gameId: "chien-luoc-gia-tai-ba",
    headline: "Đấu trí càng căng, tiếng cổ vũ càng lớn",
    description:
      "Chiến Lược Gia Tài Ba mang đến cảm giác hồi hộp vui nhộn khi ai cũng đoán bài, đọc đối thủ và chờ khoảnh khắc chốt kèo.",
    label: "Theo dõi là cuốn",
  },
];
