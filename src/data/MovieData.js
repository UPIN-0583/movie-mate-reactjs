import images from "../asset";

// Dữ liệu banner
const bannerData = [
  {
    id: 1,
    title: "Thế chiến 1917",
    description:
      "1917 dựa trên một câu chuyện có thật của ông nội Mendes, kể về hai chàng lính trẻ người Anh trong đỉnh điểm Thế chiến I được giao nhiệm vụ chuyển một thông điệp đến Tiểu đoàn 2, với nội dung cảnh báo về cuộc phục kích của quân đội Đức nếu họ thực hiện một cuộc tấn công đã lên kế hoạch từ trước.",
    releaseDate: "19 tháng 2, 2022",
    backgroundImage: images.Poster,
    thumbnail: images.Poster,
    rating: 5,
  },
  {
    id: 2,
    title: "Kẻ Hành Pháp Zero",
    description:
      "Trước Hội nghị Thượng đỉnh tại Edge of Ocean ở Vịnh Tokyo, một vụ nổ xảy ra khiến nhiều nhân viên bị thương và Mori Kogoro bị buộc tội oan. Conan phát hiện thủ phạm là công tố viên Kusakabe Makoto, người âm mưu tấn công Tokyo bằng con nhộng từ tàu Hakuchō.",
    releaseDate: "13 tháng 4 năm 2018",
    backgroundImage: images.Poster1,
    thumbnail: images.Poster1,
    rating: 4,
  },
  {
    id: 3,
    title: "Avengers: Hồi kết",
    description:
      "Phim khởi đầu sau sự kiện Infinity War năm 2018, Clint Barton (Hawkeye) cùng vợ con đi dã ngoại trong thời gian bị quản thúc. Ngay khi anh rời mắt khỏi gia đình mình một lát, họ tan biến thành tro bụi do là nạn nhân của sự kiện Búng tay.",
    releaseDate: "6 tháng 5, 2011",
    backgroundImage: images.Poster2,
    thumbnail: images.Poster2,
    rating: 4,
  },
  {
    id: 4,
    title: "Fast & Furious",
    description:
      "Dominic Dom Toretto và nhóm của anh được Tổ chức giao nhiệm vụ đánh cắp một con chip máy tính ở Rome, Ý. Dom và vợ anh, Letty Ortiz, ở nhà cùng cậu con trai Little B trong khi những người còn lại, bao gồm Roman Pearce, Tej Parker, Han Lue và Ramsey, đến Rome.",
    releaseDate: "6 tháng 5, 2011",
    backgroundImage: images.Poster3,
    thumbnail: images.Poster3,
    rating: 4,
  },
];

// Dữ liệu các loại phim
const nowShowingMovies = [
  {
    title: "Lối Thoát Cuối Cùng",
    poster: images.NowShowingMovie,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Ngày Xưa Có Một Chuyện Tình",
    poster: images.NowShowingMovie1,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Venom: Kèo Cuối",
    poster: images.NowShowingMovie2,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Linh Miêu: Quỷ Nhập Tràng",
    poster: images.NowShowingMovie3,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Mật Mã Đỏ",
    poster: images.NowShowingMovie4,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Cười Xuyên Biên Giới",
    poster: images.NowShowingMovie5,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Đôi Bạn Học Yêu",
    poster: images.NowShowingMovie6,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Học Viện Anh Hùng: You're Next",
    poster: images.NowShowingMovie7,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Võ Sĩ Giác Đấu II",
    poster: images.NowShowingMovie8,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Tee Yod: Quỷ Ăn Tạng Phần 2",
    poster: images.NowShowingMovie9,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Ozi: Phi Vụ Rừng Xanh",
    poster: images.NowShowingMovie10,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Đừng Buông Tay",
    poster: images.NowShowingMovie11,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Hồn Ma Theo Đuổi",
    poster: images.NowShowingMovie12,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Ai Oán Trong Vườn Xuân",
    poster: images.NowShowingMovie13,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Giải Cứu Anh Thầy",
    poster: images.NowShowingMovie14,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
  {
    title: "Ngày Ta Đã Yêu",
    poster: images.NowShowingMovie15,
    rating: "⭐⭐⭐⭐⭐",
    time: "2h 4m",
  },
];

const upcomingMovies = [
  {
    title: "Tiên Tri Tử Thần",
    poster: images.UpComingMovie,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Nàng Bạch Tuyết",
    poster: images.UpComingMovie1,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Nhím Sonic 3",
    poster: images.UpComingMovie2,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Mufasa: Vua Sư Tử",
    poster: images.UpComingMovie3,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Hành Trình Của Moana 2",
    poster: images.UpComingMovie4,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Công Tử Bạc Liêu",
    poster: images.UpComingMovie5,
    rating: "⭐⭐⭐⭐⭐",
  },
  { title: "Mickey 17", poster: images.UpComingMovie6, rating: "⭐⭐⭐⭐⭐" },
  {
    title: "Kính Vạn Hoa",
    poster: images.UpComingMovie7,
    rating: "⭐⭐⭐⭐⭐",
  },
  { title: "WICKED", poster: images.UpComingMovie8, rating: "⭐⭐⭐⭐⭐" },
  {
    title: "Sói Thủ Đối Đầu",
    poster: images.UpComingMovie9,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Thunderbolts*",
    poster: images.UpComingMovie10,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Captain America: Thế Giới Mới",
    poster: images.UpComingMovie11,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Kraven: Thợ Săn Thủ Lĩnh",
    poster: images.UpComingMovie12,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Cuộc Chiến của Rohirrim",
    poster: images.UpComingMovie13,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Chiến Địa Tử Thi",
    poster: images.UpComingMovie14,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Chuyến Xe Từ Địa Ngục",
    poster: images.UpComingMovie15,
    rating: "⭐⭐⭐⭐⭐",
  },
];

// Dữ liệu các khuyến mãi
const promotionsData = [
  {
    image: images.Promotion,
    title: "MATE'SUNSHINE - SUNNY DAY DISCOUNT",
    description:
      "Đồng giá 45K/ 2D và 55K/ 3D cho tất cả khách hàng vào những ngày trời nắng (áp dụng theo dự báo thời tiết), tạo cơ hội cho bạn thư giãn và tận hưởng bộ phim yêu thích trong một không gian ấm áp.",
    date: "Chủ nhật các tuần trừ ngày lễ",
  },
  {
    image: images.Promotion1,
    title: "MATE'FAMILY - FAMILY DAY",
    description:
      "Áp dụng đồng giá 45K/ 2D và 55K/ 3D cho khách hàng đi cùng gia đình vào mỗi Chủ nhật hàng tuần. Một cơ hội tuyệt vời để tận hưởng bộ phim yêu thích bên những người thân yêu.",
    date: "Chủ nhật các tuần trừ ngày lễ",
  },
  {
    image: images.Promotion2,
    title: "MATE'WEEKEND - THE WEEKEND VIBES",
    description:
      "Đồng giá 45K/ 2D và 55K/ 3D vào các ngày cuối tuần (Thứ 7 và Chủ nhật), giúp bạn tận hưởng những bộ phim hấp dẫn với mức giá phải chăng, xả stress cuối tuần.",
    date: "Thứ 7 và Chủ nhật các tuần trừ ngày lễ",
  },
  {
    image: images.Promotion3,
    title: "MATE'FRIDAY - END WEEK PARTY",
    description:
      "Áp dụng giá 45K/ 2D và 55K/ 3D cho tất cả khách hàng vào mỗi thứ 6 hàng tuần, mang đến không gian thư giãn tuyệt vời để bắt đầu cuối tuần.",
    date: "Thứ 7 và Chủ nhật các tuần trừ ngày lễ",
  },
  {
    image: images.Promotion4,
    title: "MATE'MEMBER - HAPPY MEMBER’S DAY",
    description:
      "Áp dụng giá 45K/ 2D và 55K/ 3D cho khách hàng là thành viên MovieMate vào ngày thứ 4 hàng tuần",
    date: "Thứ 4 các tuần trừ ngày lễ",
  },
  {
    image: images.Promotion5,
    title: "MATE'MONDAY - HAPPY DAY",
    description: "Đồng giá 45K/2D, 55K/3D vào thứ 2 hàng tuần",
    date: "Thứ 2 các tuần trừ ngày lễ",
  },
  {
    image: images.Promotion6,
    title: "MATE'NINE - HAPPY HOUR",
    description:
      "Áp dụng giá 45K/ 2D và 55K/ 3D cho khách hàng xem phim trước 9h sáng và sau 9h tối.",
    date: "Các ngày trong tuần trừ ngày lễ",
  },
  {
    image: images.Promotion7,
    title: "MATE’STUDENT",
    description:
      "Đồng giá 45K/2D cho HSSV/GV/U22 cả tuần tại mọi cụm rạp MOVIEMATER.",
    date: "Các ngày trong tuần trừ ngày lễ",
  },
];

const comboData = [
  {
    id: 1,
    name: "Combo Solo",
    price: 50000,
    image: images.combo,
    description: "1 Bắp Ngọt 60oz, 1 Coke 32oz",
  },
  {
    id: 2,
    name: "Combo Solo 2",
    price: 229000,
    image: images.combo3,
    description: "1 Coke 32oz, 1 Hotdog 250g",
  },
  {
    id: 3,
    name: "Combo Couple",
    price: 115000,
    image: images.combo1,
    description: "1 Bắp Ngọt 60oz, 2 Coke 32oz",
  },
  {
    id: 4,
    name: "Combo Party",
    price: 209000,
    image: images.combo2,
    description: "1 Bắp Ngọt 60oz, 3 Coke 32oz",
  },
];

const timesData = ["14:00", "16:00", "18:30", "20:45"];

const cinemasData = [
  "MovieMate Nguyễn Du",
  "MovieMate Quế Thanh",
  "MovieMate Hai Bà Trưng",
  "MovieMate Mỹ Tho",
];

const movieData = [
    "Ta Đã Yêu Nhau",
    "Quỷ Ăn Tạng Phần 2",
    "Venon: Kèo Cuối",
    "Lối Thoát Cuối Cùng",
  ];

  const daysData = [
    "Chủ Nhật, 15/12/2024",
    "Thứ Hai, 16/12/2024",
    "Thứ Ba, 17/12/2024",
    "Thứ Tư, 18/12/2024",
  ];

  const ticketDetailsData = {
    title: "Lối Thoát Cuối Cùng",
    poster: images.NowShowingMovie,
    duration: "2h 29m",
    genre: "Hành động, tâm lý",
    time: "14:00 PM",
    date: "19/12/2024",
    room: "Phòng 4",
    seats: "Ghế A7, A8",
    price: "200.000 VNĐ",
    theater: "Moviemate Nguyễn Du",
    address: "116 Nguyễn Du, Quận 1, Tp.HCM",
    barcode: "78889377726",
  };

  const transactionsData = [
    {
      date: "16/12/2024",
      orderId: "78889377726",
      movieName: "Lối thoát cuối cùng",
      amount: "430.000 VNĐ",
    },
    ...Array(6).fill({
      date: "16/06/2024",
      orderId: "18257917519",
      movieName: "Cái Giá Của Hạnh Phúc",
      amount: "120.000 VNĐ",
    }),
  ];


// Export tất cả các danh mục phim
const moviesData = {
  nowShowing: nowShowingMovies,
  upcoming: upcomingMovies,
  promotions: promotionsData,
  combos: comboData,
  banners: bannerData,
  times: timesData,
  cinemas: cinemasData,
  movie: movieData,
  days: daysData,
  ticketDetails: ticketDetailsData,
  transactions: transactionsData,

};

export default moviesData;
