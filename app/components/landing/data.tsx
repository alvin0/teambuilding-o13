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
      "MC nêu 9 món, mỗi người dùng chén lấy đủ và xếp thành bàn Bingo 3×3 trước khi bước vào màn gọi món.",
    concept:
      "Nhịp chơi nhanh, phản xạ liên tục và tiếng cười bùng nổ vì ai cũng vừa soi bảng vừa chiến đấu với chiếc bụng của mình.",
    winCondition:
      "Người chơi ăn hết 2 hàng dọc hoặc 2 hàng ngang trước tiên sẽ giành chiến thắng.",
    bullets: [
      "6 người cùng lấy đủ 9 món và xếp thành 9 ô vuông 3×3 bằng chén.",
      "Ai gọi trúng món mình có thì phải ăn ngay phần trong chén đó.",
      "Người lấy xong sớm được ưu tiên ăn trước và dễ chiếm nhịp trận hơn.",
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
      "MC sẽ nêu sẵn 9 món ăn. 6 người chơi phải lấy đủ 9 món bằng chén, xếp thành 9 ô vuông 3×3 và bước vào vòng gọi món với đúng phần ăn của mình.",
    guideSteps: [
      {
        title: "Lấy 9 món và dựng bàn 3×3",
        detail:
          "Sau khi MC công bố 9 món cần chuẩn bị, mỗi người dùng chén lấy đủ 9 món và sắp thành 9 ô vuông ngăn cách theo bố cục 3 hàng x 3 cột trên bàn của mình.",
        cue: "Ai hoàn thành sớm nhất sẽ được ưu tiên ăn trước.",
      },
      {
        title: "Gọi món nào, ăn món đó",
        detail:
          "Mỗi người chơi sắp xếp ngẫu nhiên 9 món rồi lần lượt hô to tên một món bất kỳ. Những ai có đúng món đó trên bàn sẽ phải ăn ngay để tính tiến độ.",
        cue: "Đã bị gọi trúng thì phải ăn hết phần thức ăn trong chén đó.",
      },
      {
        title: "Hoàn thành 2 hàng để thắng",
        detail:
          "Thành viên nào ăn hết trước 2 hàng dọc hoặc 2 hàng ngang trên bảng Bingo của mình sẽ là người chiến thắng.",
        cue: "Nên nhìn thế cờ để ưu tiên các ô có thể tạo 2 hàng nhanh nhất.",
      },
    ],
    guideOutro:
      "Lưu ý: lấy thức ăn vừa đủ. Đã lấy chén nào để chơi thì phải ăn hết thức ăn trong chén đó, nên tốc độ luôn phải đi cùng chiến lược và khả năng ăn thật.",
    icon: FoodIcon,
  },
  {
    id: "hoang-de-dai-chien",
    title: "Hoàng Đế Đại Chiến",
    shortTitle: "Đại Chiến Đế Chế",
    players: "10 người • 2 đội",
    vibe: "Draft đội • Chọn tướng • Quyết chiến",
    spirit: "Đấu đội • Chiến thuật • Cân não từng lượt",
    summary:
      "10 người bốc thăm chọn 2 Hoàng Đế, chia thành 2 phe và phân quân qua 5 mini game để tranh ngôi vương.",
    intro:
      "Hai Hoàng Đế oẳn tù tì giành lượt chọn trước, hoàn tất đội hình 5 người và bước vào loạt đấu thắng 3 trong 5.",
    concept:
      "Đây là game chiến thuật theo đội: mỗi thành viên chỉ được ra sân một lần, nên Hoàng Đế phải đọc đúng điểm mạnh của từng người trước khi tung quân.",
    winCondition:
      "Đội nào thắng 3 trong 5 mini game sẽ thắng chung cuộc; nếu hòa 2-2 sau 4 game thì hai Hoàng Đế trực tiếp đấu game 5 để phân định.",
    bullets: [
      "10 người bốc thăm chọn 2 Hoàng Đế, mỗi phe sẽ có 1 Hoàng Đế và 4 thành viên.",
      "Hoàng Đế thắng oẳn tù tì được quyền chọn người trước để hoàn thiện đội hình.",
      "Đội thắng chung cuộc nhận phần thưởng chia đều cho toàn bộ thành viên.",
    ],
    subgames: [
      "Plank 1 phút",
      "Lật chai nước",
      "Đuổi hình bắt chữ",
      "Thiện xạ tài ba",
      "Đấu giá sức ăn",
    ],
    highlights: ["Draft 2 phe", "Lineup 5 game", "Chung kết Hoàng Đế"],
    visualTitle: "Battle arena chia đôi chiến tuyến",
    accent: "#5f7cff",
    accentSoft: "rgba(95, 124, 255, 0.16)",
    glow: "rgba(95, 124, 255, 0.33)",
    imageSrc: withBasePath("/resources/game-2.png"),
    imageAlt:
      "Poster game Hoàng Đế Đại Chiến với hai đội đối đầu, hai hoàng đế và năm mini game.",
    posterBubbles: ["Bốc thăm thôi!", "Chọn quân trước!", "Chung kết Hoàng Đế!"],
    guideIntro:
      "10 người chơi bốc thăm chọn ra 2 Hoàng Đế. Sau màn oẳn tù tì để quyết định lượt draft, mỗi Hoàng Đế xây đội hình 5 người và phân quân qua 5 mini game để chạm mốc 3 chiến thắng.",
    guideSteps: [
      {
        title: "Bốc thăm chọn 2 Hoàng Đế",
        detail:
          "10 người chơi bóc thăm để chọn ra 2 Hoàng Đế. 8 người còn lại là thành viên tự do chờ được tuyển vào đội.",
        cue: "Mỗi đội cuối cùng sẽ có 1 Hoàng Đế và 4 thành viên.",
      },
      {
        title: "Oẳn tù tì để lấy lượt chọn trước",
        detail:
          "2 Hoàng Đế oẳn tù tì, người thắng được quyền chọn thành viên trước. Hai bên lần lượt tuyển người cho đến khi đủ đội hình.",
        cue: "Khâu draft quyết định lợi thế chiến thuật ngay từ đầu.",
      },
      {
        title: "Phân người cho 5 mini game",
        detail:
          "Trước mỗi vòng, Hoàng Đế cân nhắc điểm mạnh của từng người để cử đúng đại diện thi đấu. Mỗi thành viên chỉ được tham gia đúng 1 mini game.",
        cue: "Không thể dùng lại cùng một người ở 2 game khác nhau.",
      },
      {
        title: "Mini game 1: Plank 1 phút",
        detail:
          "Mỗi đội cử 1 người plank trong 1 phút. Ai giữ đúng tư thế lâu hơn là thắng; nếu cả hai đều hoàn thành đủ 1 phút thì tính hòa.",
        cue: "Đây là vòng thiên về thể lực và độ lì.",
      },
      {
        title: "Mini game 2: Lật chai nước",
        detail:
          "Mỗi người cầm 1 chai nước có khoảng 1/3 nước. Trong 1 phút, ai tung chai xoay trên không và tiếp đất đứng thẳng được nhiều lần hơn sẽ thắng.",
        cue: "Khéo tay và giữ nhịp ổn định sẽ có lợi.",
      },
      {
        title: "Mini game 3: Đuổi hình bắt chữ",
        detail:
          "Có 5 hình, mỗi hình tối đa 30 giây. Ai nghĩ ra đáp án thì xung phong trả lời; người thắng trước 3 phần sẽ lấy điểm cho đội.",
        cue: "Vòng này cần phản xạ nhanh, IQ lẫn EQ.",
      },
      {
        title: "Mini game 4: Thiện xạ tài ba",
        detail:
          "Mỗi người có 3 lượt bắn. Bên nào làm ngã được nhiều chai hơn sẽ thắng; nếu số chai ngã bằng nhau thì tính hòa.",
        cue: "Ưu tiên người có tay ném ổn và giữ bình tĩnh tốt.",
      },
      {
        title: "Mini game 5: Đấu giá sức ăn",
        detail:
          "Nếu sau 4 game chưa phân thắng bại, 2 Hoàng Đế trực tiếp tham chiến. Hai bên lần lượt đấu giá số lượng tôm, cua hoặc món đã chọn có thể ăn; người chốt giá thành công phải ăn hết phần đã đấu giá. Ăn hết thì thắng, không ăn hết thì thua.",
        cue: "Đây là trận chung kết quyết định ngai vàng.",
      },
    ],
    guideOutro:
      "Đội thắng chung cuộc là đội chạm mốc 3 điểm trước và phần thưởng được chia đều cho toàn bộ thành viên. Game này thắng không chỉ nhờ sức mạnh cá nhân mà nhờ Hoàng Đế đọc người đúng, chọn quân đúng và giữ nhịp cả đội qua từng vòng.",
    icon: CrownIcon,
  },
  {
    id: "chien-luoc-gia-tai-ba",
    title: "Chiến Lược Gia Tài Ba",
    shortTitle: "Đấu Trí Kẹo Cược",
    players: "4 người • 10 kẹo/người",
    vibe: "Đầu tư • Bluff • Tăng cược",
    spirit: "Suy luận • Quản lý vốn • Tâm lý chiến",
    summary:
      "Game đấu trí cho 4 người, nơi mỗi quyết định đầu tư trong 2 vòng đều ảnh hưởng trực tiếp tới số kẹo bạn giữ lại.",
    intro:
      "Mỗi người bắt đầu với 10 viên kẹo, bước vào 2 vòng đầu tư chiến lược và phải liên tục cân bằng giữa đọc bài, đọc người và giữ vốn.",
    concept:
      "Thông tin bị chia lệch: lá trên đối thủ biết còn bạn không biết, lá dưới chỉ mình bạn biết. Muốn thắng, bạn phải vừa tính xác suất vừa phân tích nhịp cược của cả bàn.",
    winCondition:
      "Sau 2 vòng đầu tư, người có nhiều kẹo nhất sẽ thắng chung cuộc. Trong từng vòng, ai có tổng điểm 2 lá cao nhất sẽ ăn toàn bộ pot; nếu hòa thì chia đều số kẹo cược.",
    bullets: [
      "Bộ bài gồm 20 lá, chia thành 2 hàng; mỗi hàng tương ứng đủ điểm từ 1 đến 10.",
      "Mỗi người chơi bốc 2 lá tương ứng 2 hàng: lá hàng trên đối thủ biết, lá hàng dưới chỉ mình bạn biết.",
      "Mỗi vòng mở bằng 1 viên kẹo bắt buộc và mỗi người có đúng 2 cơ hội để nâng mức cược.",
    ],
    sectionFacts: [
      {
        label: "Khởi đầu",
        value: "4 người, mỗi người nhận 10 viên kẹo để làm vốn chơi.",
      },
      {
        label: "Bàn bài",
        value: "20 lá bài chia thành 2 hàng, mỗi hàng đủ các điểm từ 1 đến 10.",
      },
      {
        label: "Nhịp cược",
        value: "Chơi 2 vòng đầu tư; đầu vòng đặt 1 kẹo và mỗi người có 2 lần nâng cược.",
      },
    ],
    highlights: ["20 lá bài / 2 hàng", "2 vòng đầu tư", "Candy pot theo từng lượt cược"],
    visualTitle: "Bàn cược nơi mọi ánh nhìn đều có ý đồ",
    accent: "#35d6c4",
    accentSoft: "rgba(53, 214, 196, 0.16)",
    glow: "rgba(53, 214, 196, 0.32)",
    imageSrc: withBasePath("/resources/game-3.png"),
    imageAlt:
      "Poster game Chiến Lược Gia Tài Ba với bốn người chơi, bàn bài và các viên kẹo đặt cược.",
    posterBubbles: ["10 kẹo mở màn", "Phân tích đối thủ!", "Tăng cược hay giữ vốn?"],
    guideIntro:
      "Chiến Lược Gia Tài Ba là game đấu trí dành cho 4 người. Mỗi người cầm 10 viên kẹo ban đầu, trải qua 2 vòng đầu tư chiến lược và tìm cách chốt pot bằng tổng điểm 2 lá bài cao nhất.",
    guideSteps: [
      {
        title: "Khởi đầu với 10 viên kẹo mỗi người",
        detail:
          "Game có 4 người chơi. Ngay từ đầu, mỗi người được phát 10 viên kẹo để làm vốn đặt cược và tích lũy qua các vòng.",
        cue: "Giữ vốn tốt ở đầu game sẽ tạo lợi thế rất lớn về cuối.",
      },
      {
        title: "Chuẩn bị 20 lá bài thành 2 hàng",
        detail:
          "Trước mặt người chơi có 20 lá bài chia thành 2 hàng. Mỗi hàng gồm đủ các lá tương ứng số điểm từ 1 đến 10 để tạo nên hai nguồn thông tin tách biệt.",
        cue: "Mỗi người sẽ bốc 1 lá ở hàng trên và 1 lá ở hàng dưới.",
      },
      {
        title: "Bốc 2 lá với thông tin bất đối xứng",
        detail:
          "Lá thuộc hàng trên là lá bạn không được biết nhưng các đối thủ còn lại sẽ biết. Lá thuộc hàng dưới là lá chỉ mình bạn biết. Vì vậy mỗi người đều vừa có thông tin thật vừa có khoảng mù cần suy luận.",
        cue: "Đây là phần làm nên chất bluff, đọc bài và đọc người của game.",
      },
      {
        title: "Mở vòng cược bằng 1 viên kẹo bắt buộc",
        detail:
          "Ở đầu mỗi vòng đầu tư, tất cả người chơi đều phải đặt trước 1 viên kẹo vào pot. Đây là mức cược nền để bắt đầu cuộc chơi và tạo áp lực cho mọi quyết định tiếp theo.",
        cue: "Pot đã mở thì ai cũng phải cân nhắc xem có nên theo lớn hay giữ vốn cho vòng sau.",
      },
      {
        title: "Mỗi người có 2 cơ hội để nâng mức cược",
        detail:
          "Sau mức cược bắt buộc, người chơi lần lượt nâng cược theo chiến lược của mình. Trong mỗi vòng, mỗi người có đúng 2 lần cơ hội để tăng thêm mức cược nhằm gây áp lực hoặc tận dụng bài mạnh.",
        cue: "Nâng cược không chỉ để thắng pot mà còn để ép đối thủ lộ phản ứng.",
      },
      {
        title: "So tổng điểm 2 lá để chốt người thắng vòng",
        detail:
          "Khi vòng cược khép lại, tổng điểm của 2 lá bài sẽ được dùng để xác định người thắng. Ai có tổng điểm cao nhất sẽ lấy toàn bộ số kẹo trong pot; nếu có nhiều người bằng điểm nhau thì pot được chia đều.",
        cue: "Kết thúc 2 vòng, ai giữ nhiều kẹo nhất sẽ là Chiến Lược Gia Tài Ba.",
      },
    ],
    guideOutro:
      "Game này hấp dẫn ở chỗ người chơi không thể chỉ dựa vào may mắn. Muốn thắng, bạn phải biết khi nào nên đầu tư mạnh, khi nào nên giữ vốn, đồng thời phân tích được biểu cảm và khả năng chiến thắng của đối thủ qua từng nhịp cược.",
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
