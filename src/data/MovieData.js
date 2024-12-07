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

// Dữ liệu các khuyến mãi
const moviePromotions = [
    {
        image: images.Promotion,
        title: "MATE'SUNSHINE - SUNNY DAY DISCOUNT",
        description: "Đồng giá 45K/ 2D và 55K/ 3D cho tất cả khách hàng vào những ngày trời nắng (áp dụng theo dự báo thời tiết), tạo cơ hội cho bạn thư giãn và tận hưởng bộ phim yêu thích trong một không gian ấm áp.",
        date: "Chủ nhật các tuần trừ ngày lễ"
    },
    {
        image: images.Promotion1,
        title: "MATE'FAMILY - FAMILY DAY",
        description: "Áp dụng đồng giá 45K/ 2D và 55K/ 3D cho khách hàng đi cùng gia đình vào mỗi Chủ nhật hàng tuần. Một cơ hội tuyệt vời để tận hưởng bộ phim yêu thích bên những người thân yêu.",
        date: "Chủ nhật các tuần trừ ngày lễ"
    },
    {
        image: images.Promotion2,
        title: "MATE'WEEKEND - THE WEEKEND VIBES",
        description: "Đồng giá 45K/ 2D và 55K/ 3D vào các ngày cuối tuần (Thứ 7 và Chủ nhật), giúp bạn tận hưởng những bộ phim hấp dẫn với mức giá phải chăng, xả stress cuối tuần.",
        date: "Thứ 7 và Chủ nhật các tuần trừ ngày lễ"
    },
    {
        image: images.Promotion3,
        title: "MATE'FRIDAY - END WEEK PARTY",
        description: "Áp dụng giá 45K/ 2D và 55K/ 3D cho tất cả khách hàng vào mỗi thứ 6 hàng tuần, mang đến không gian thư giãn tuyệt vời để bắt đầu cuối tuần.",
        date: "Thứ 7 và Chủ nhật các tuần trừ ngày lễ"
    },
    {
        image: images.Promotion4,
        title: "MATE'MEMBER - HAPPY MEMBER’S DAY",
        description: "Áp dụng giá 45K/ 2D và 55K/ 3D cho khách hàng là thành viên MovieMate vào ngày thứ 4 hàng tuần",
        date: "Thứ 4 các tuần trừ ngày lễ"
    },
    {
        image: images.Promotion5,
        title: "MATE'MONDAY - HAPPY DAY",
        description: "Đồng giá 45K/2D, 55K/3D vào thứ 2 hàng tuần",
        date: "Thứ 2 các tuần trừ ngày lễ"
    },
    {
        image: images.Promotion6,
        title: "MATE'NINE - HAPPY HOUR",
        description: "Áp dụng giá 45K/ 2D và 55K/ 3D cho khách hàng xem phim trước 9h sáng và sau 9h tối.",
        date: "Các ngày trong tuần trừ ngày lễ"
    },
    {
        image: images.Promotion7,
        title: "MATE’STUDENT",
        description: "Đồng giá 45K/2D cho HSSV/GV/U22 cả tuần tại mọi cụm rạp MOVIEMATER.",
        date: "Các ngày trong tuần trừ ngày lễ"
    }
];



// Export tất cả các danh mục phim
const moviesData = {
    nowShowing: nowShowingMovies,
    upcoming: upcomingMovies,
    promotions: moviePromotions,
};

export default moviesData;
