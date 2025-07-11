import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

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