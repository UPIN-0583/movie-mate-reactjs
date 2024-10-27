import {Header} from "../conponent/header";
import {Outlet} from "react-router-dom";
import {Footer} from "../conponent/footer";

const Layout = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )

}

export {Layout}