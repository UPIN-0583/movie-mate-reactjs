import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTING_HOME, ROUTING_LOGIN, ROUTING_MOVIEDETAIL_NS, ROUTING_MOVIEDETAIL_UC, ROUTING_MOVIELIST_NS, ROUTING_MOVIELIST_UC, ROUTING_SIGNUP, ROUTING_THEATER_DETAIL, ROUTING_PROMOTIONLIST } from "./path";
import { HomePage } from "../page/Home.js";
import { Layout } from "../page/layout.js";
import { SignUpPage } from "../page/SignUp.js";
import { LoginPage } from "../page/Login.js";
import { MovieDetailUC } from "../page/MovieDetailUC.js";
import { MovieDetailNS } from '../page/MovieDetailNS.js';
import { MovieListNS } from "../page/MovieListNS.js";
import { MovieListUC } from "../page/MovieListUC.js";
import { TheaterDetail } from "../page/TheaterDetail.js";
import { PromotionList } from "../page/PromotionList.js";



const WebRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={""} element={<Layout />}>
                    {/* Trang mặc định */}
                    <Route index element={<HomePage />} />

                    {/*Trang chủ*/}
                    <Route path={ROUTING_HOME} element={<HomePage />} />
                    <Route path={ROUTING_THEATER_DETAIL} element={<TheaterDetail />} />


                    {/*Header*/}
                    <Route path={ROUTING_SIGNUP} element={<SignUpPage />} />
                    <Route path={ROUTING_LOGIN} element={<LoginPage />} />


                    {/* Trang danh sách phim*/}
                    <Route path={ROUTING_MOVIELIST_NS} element={<MovieListNS />} />
                    <Route path={ROUTING_MOVIELIST_UC} element={<MovieListUC />} />

                    {/* Trang chi tiết phim */}
                    <Route path={ROUTING_MOVIEDETAIL_UC} element={<MovieDetailUC />} />
                    <Route path={ROUTING_MOVIEDETAIL_NS} element={<MovieDetailNS />} />

                    <Route path={ROUTING_PROMOTIONLIST} element={<PromotionList />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )

}

export { WebRouter }