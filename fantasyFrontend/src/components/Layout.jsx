import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ActivityBar from "./ActivityBar";
import "./Layout.css"

function Layout() {
    return (
        <div className="layout">
            <NavBar />
            <main className="layout-main">
                <Outlet />
            </main>
            <ActivityBar />
        </div>
    )
}

export default Layout;