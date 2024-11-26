import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTING_HOME, ROUTING_LOGIN, ROUTING_SIGNUP } from "./path";
import { HomePage } from "../page/Home.js";
import { Layout } from "../page/layout.js";
import { SignUpPage } from "../page/SignUp.js";
import { LoginPage } from "../page/Login.js";


const WebRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={""} element={<Layout />}>
                    {/* Trang mặc định */}
                    <Route index element={<HomePage />} />

                    {/*Trang Chu*/}
                    <Route path={ROUTING_HOME} element={<HomePage />} />

                    {/*Header*/}
                    <Route path={ROUTING_SIGNUP} element={<SignUpPage />} />
                    <Route path={ROUTING_LOGIN} element={<LoginPage />} />


                </Route>

            </Routes>
        </BrowserRouter>
    )

}

export { WebRouter }