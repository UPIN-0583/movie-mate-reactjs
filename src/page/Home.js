import { Banner } from "../components/Banner";
import { Navigate } from "../components/Navigate";
import { NowShowingMovieList } from "../components/NowShowingMovieList";
import { UpComingMovieList } from "../components/UpComingMovieList";
import { PromotionList } from "../components/PromotionList";
import { useMovies } from "../context/MovieContext";
import {useGetMovies} from "../api/movie/useGetMovie";

const HomePage = () => {

    const { movies } = useMovies();
    const upComingMovies = movies.upcoming || [];
    const promotions = movies.promotions || [];

    // Lấy dữ liệu phim từ backend
    const { data: moviesData, error, isFetching } = useGetMovies();

    if (isFetching) {
        return <div className="text-white">Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div className="text-red-500">Lỗi: {error.message}</div>;
    }

    // Phân loại phim
    const nowShowingMovies = moviesData.filter((movie) => movie.status === "NOW_SHOWING");



    return (
        <div className="bg-[#151515]">
            <div className="w-11/12 m-auto pt-16">
                <Banner />
            </div>

            <div className="w-11/12 m-auto pt-10">
                <Navigate />
            </div>

            <div className="w-11/12 m-auto justify-center">
                <NowShowingMovieList movies={nowShowingMovies} />
            </div>

            <div className="w-11/12 m-auto justify-center">
                <UpComingMovieList movies={upComingMovies} />
            </div>

            <div className="w-11/12 m-auto justify-center">
                <PromotionList promotions={promotions} />
            </div>
        </div>
    )
}

export { HomePage }