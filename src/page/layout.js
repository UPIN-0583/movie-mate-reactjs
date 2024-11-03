import { Header } from "../component/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../component/footer";

const Layout = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )

}

export { Layout }