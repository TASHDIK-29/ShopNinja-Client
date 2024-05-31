import { Outlet } from "react-router-dom";
import Nav from "../pages/home/nav/Nav";

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet />
        </div>
    );
};

export default MainLayout;