import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ActivityBar from "./ActivityBar";

function Layout() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <ActivityBar />
        </>
    )
}

export default Layout;