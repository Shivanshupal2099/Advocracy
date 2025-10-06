import { Outlet } from "react-router-dom";
import Homesidebar from "./homesidebar";

function Homelayout() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Homesidebar />
            <div style={{ flex: 1, padding: "5px" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Homelayout;
