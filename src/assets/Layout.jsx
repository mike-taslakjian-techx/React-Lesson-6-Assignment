import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";

const Layout = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    );
};

export { Layout };