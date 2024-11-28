import images from "../asset"; 

// Dữ liệu các loại phim
const nowShowingMovies = [
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie1, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie2, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie3, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie4, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie5, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie6, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie7, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie8, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie9, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie10, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie11, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie12, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie13, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie14, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie15, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie16, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie13, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie14, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie15, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie16, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
];

const upcomingMovies = [
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie1, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie2, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie3, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie4, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie5, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie6, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie7, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie8, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie9, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie10, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie11, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie12, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie13, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie14, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie15, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie16, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie13, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie14, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie15, rating: "⭐⭐⭐⭐⭐"},
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie16, rating: "⭐⭐⭐⭐⭐"},
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

// Export tất cả các danh mục phim
const moviesData = {
  nowShowing: nowShowingMovies,
  upcoming: upcomingMovies,
  promotions: moviePromotions ,
};

export default moviesData;
