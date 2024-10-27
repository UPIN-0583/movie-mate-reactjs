import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTING_HOME, ROUTING_LOGIN, ROUTING_SIGNUP} from "./path";
import {HomePage} from "../page/home";
import {Layout} from "../page/layout";
import {SignUpPage} from "../page/sign-up";
import {LoginPage} from "../page/login";


const WebRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path={""} element={<Layout/>}>

                    {/*Trang Chu*/}
                    <Route path={ROUTING_HOME} element={ <HomePage/> } />

                    {/*Header*/}
                    <Route path={ROUTING_SIGNUP} element={ <SignUpPage/> } />
                    <Route path={ROUTING_LOGIN} element={ <LoginPage/> } />


                </Route>

            </Routes>
        </BrowserRouter>
    )

}

export {WebRouter}