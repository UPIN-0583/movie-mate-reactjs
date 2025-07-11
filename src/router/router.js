import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTING_HOME, ROUTING_LOGIN, ROUTING_MOVIEDETAIL_NS, ROUTING_MOVIEDETAIL_UC, ROUTING_MOVIELIST_NS, ROUTING_MOVIELIST_UC, ROUTING_SIGNUP, ROUTING_THEATER_DETAIL, ROUTING_PROMOTIONLIST, ROUTING_INFO, ROUTING_TICKET_HISTORY, ROUTING_CONTACT_FROM, ROUTING_ORDER_PAYMENT } from "./path";
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
import { CustomerInfo } from "../page/CustomerInfo.js";
import { TicketHistory } from "../page/TicketHistory.js";
import { ContactForm } from "../page/ContactForm.js";
import { OrderPayment } from "../page/OrderPayment.js";

const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  };



const WebRouter = () => {

    return (
        <BrowserRouter>
        <ScrollToTop />
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
                    <Route path={ROUTING_INFO} element={<CustomerInfo />} />
                    <Route path={ROUTING_TICKET_HISTORY} element={<TicketHistory />} />


                    {/* Trang danh sách phim*/}
                    <Route path={ROUTING_MOVIELIST_NS} element={<MovieListNS />} />
                    <Route path={ROUTING_MOVIELIST_UC} element={<MovieListUC />} />

                    {/* Trang chi tiết phim */}
                    <Route path={ROUTING_MOVIEDETAIL_UC} element={<MovieDetailUC />} />
                    <Route path={ROUTING_MOVIEDETAIL_NS} element={<MovieDetailNS />} />

                    {/* Trang thông tin khuyến mãi */}
                    <Route path={ROUTING_PROMOTIONLIST} element={<PromotionList />} />

                    {/* Trang liên hệ */}
                    <Route path={ROUTING_CONTACT_FROM} element={<ContactForm />} />

                    {/* Trang thanh toán */}
                    <Route path={ROUTING_ORDER_PAYMENT} element={<OrderPayment />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )

}

export { WebRouter }