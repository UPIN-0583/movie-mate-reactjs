import { Banner } from "../component/Banner";
import { NowShowingMovieList } from "../component/NowShowingMovieList";
import { Navigate } from "../component/Navigate";
import images from "../asset"
import { UpComingMovieList } from "../component/UpComingMovieList";

const HomePage = () => {
    const nowShowingMovies = [
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie1,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie2,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie3,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie4,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie5,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie6,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie7,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie8,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie9,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie10,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie11,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie12,
            rating: "⭐⭐⭐⭐⭐",
            time: "2h 4m",
        }
    ]
    const upComingMovies = [
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie1,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie2,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie3,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie4,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie5,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie6,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie7,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie8,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie9,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie10,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie11,
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            title: "Ngày Xưa Có Một Chuyện Tình",
            poster: images.NowShowingMovie12,
            rating: "⭐⭐⭐⭐⭐",
        }
    ]
    return (
        <div className="bg-gray-900">
            <div className="w-11/12 m-auto pt-10">
                <Banner />
            </div>

            <div className="w-11/12 m-auto pt-10">
                <Navigate />
            </div>

            <div className="w-11/12 m-auto justify-center">
                <div className="">
                    <NowShowingMovieList movies={nowShowingMovies} />
                </div>
            </div>

            <div className="w-11/12 m-auto justify-center">
                <div className="">
                    <UpComingMovieList movies={upComingMovies} />
                </div>
            </div>
        </div>
    )
}

export { HomePage }