import { Banner } from "../component/Banner";
import { Navigate } from "../component/Navigate";
import { NowShowingMovieList } from "../component/NowShowingMovieList";
import { UpComingMovieList } from "../component/UpComingMovieList";
import { PromotionList } from "../component/PromotionList";
import { useMovies } from "../context/MovieContext";

const HomePage = () => {
    const { movies } = useMovies();
    const nowShowingMovies = movies.nowShowing || [];
    const upComingMovies = movies.upcoming || [];
    const promotions = movies.promotions || [];


    return (
        <div className="bg-[#151515]">
            <div className="w-11/12 m-auto pt-10">
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