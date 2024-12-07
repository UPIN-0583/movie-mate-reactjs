import images from "../asset";

// Dữ liệu các loại phim
const nowShowingMovies = [
    { title: "Lối Thoát Cuối Cùng", poster: images.NowShowingMovie, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie1, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Venom: Kèo Cuối", poster: images.NowShowingMovie2, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Linh Miêu: Quỷ Nhập Tràng", poster: images.NowShowingMovie3, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Mật Mã Đỏ", poster: images.NowShowingMovie4, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Cười Xuyên Biên Giới", poster: images.NowShowingMovie5, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Đôi Bạn Học Yêu", poster: images.NowShowingMovie6, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Học Viện Anh Hùng: You're Next", poster: images.NowShowingMovie7, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Võ Sĩ Giác Đấu II", poster: images.NowShowingMovie8, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Tee Yod: Quỷ Ăn Tạng Phần 2", poster: images.NowShowingMovie9, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ozi: Phi Vụ Rừng Xanh", poster: images.NowShowingMovie10, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Đừng Buông Tay", poster: images.NowShowingMovie11, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Hồn Ma Theo Đuổi", poster: images.NowShowingMovie12, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ai Oán Trong Vườn Xuân", poster: images.NowShowingMovie13, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Giải Cứu Anh Thầy", poster: images.NowShowingMovie14, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Ta Đã Yêu", poster: images.NowShowingMovie15, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
];

const upcomingMovies = [
    { title: "Tiên Tri Tử Thần", poster: images.UpComingMovie, rating: "⭐⭐⭐⭐⭐" },
    { title: "Nàng Bạch Tuyết", poster: images.UpComingMovie1, rating: "⭐⭐⭐⭐⭐" },
    { title: "Nhím Sonic 3", poster: images.UpComingMovie2, rating: "⭐⭐⭐⭐⭐" },
    { title: "Mufasa: Vua Sư Tử", poster: images.UpComingMovie3, rating: "⭐⭐⭐⭐⭐" },
    { title: "Hành Trình Của Moana 2", poster: images.UpComingMovie4, rating: "⭐⭐⭐⭐⭐" },
    { title: "Công Tử Bạc Liêu", poster: images.UpComingMovie5, rating: "⭐⭐⭐⭐⭐" },
    { title: "Mickey 17", poster: images.UpComingMovie6, rating: "⭐⭐⭐⭐⭐" },
    { title: "Kính Vạn Hoa", poster: images.UpComingMovie7, rating: "⭐⭐⭐⭐⭐" },
    { title: "WICKED", poster: images.UpComingMovie8, rating: "⭐⭐⭐⭐⭐" },
    { title: "Sói Thủ Đối Đầu", poster: images.UpComingMovie9, rating: "⭐⭐⭐⭐⭐" },
    { title: "Thunderbolts*", poster: images.UpComingMovie10, rating: "⭐⭐⭐⭐⭐" },
    { title: "Captain America: Thế Giới Mới", poster: images.UpComingMovie11, rating: "⭐⭐⭐⭐⭐" },
    { title: "Kraven: Thợ Săn Thủ Lĩnh", poster: images.UpComingMovie12, rating: "⭐⭐⭐⭐⭐" },
    { title: "Cuộc Chiến của Rohirrim", poster: images.UpComingMovie13, rating: "⭐⭐⭐⭐⭐" },
    { title: "Chiến Địa Tử Thi", poster: images.UpComingMovie14, rating: "⭐⭐⭐⭐⭐" },
    { title: "Chuyến Xe Từ Địa Ngục", poster: images.UpComingMovie15, rating: "⭐⭐⭐⭐⭐" },
];

const moviePromotions = [
    {
        image: images.Promotion1,
        title: "Promotion 1",
    },
    {
        image: images.Promotion2,
        title: "Promotion 2",
    },
    {
        image: images.Promotion3,
        title: "Promotion 3",
    },
    {
        image: images.Promotion3,
        title: "Promotion 3",
    }
];

const comboData = [
    { id: 1, name: "Combo Solo", price: 50000, description: "1 Bắp Ngọt 60oz, 1 Coke 32oz" },
    { id: 2, name: "Combo Couple", price: 115000, description: "1 Bắp Ngọt 60oz, 2 Coke 32oz" },
    { id: 3, name: "Combo Party", price: 209000, description: "1 Bắp Ngọt 60oz, 1 Coke 32oz, 1 Hotdog 250g" },
    { id: 4, name: "Combo Party", price: 229000, description: "2 Bắp Ngọt 60oz, 1 Coke 32oz, 1 Hotdog 250g" }
  ];



// Export tất cả các danh mục phim
const moviesData = {
    nowShowing: nowShowingMovies,
    upcoming: upcomingMovies,
    promotions: moviePromotions,
    combos: comboData,
};

export default moviesData;
