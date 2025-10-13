import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Homesidebar from "./homesidebar";
import { ClientContext } from "./ClientContext";

function Homelayout() {
    const [userdata, setuserdata] = useState(() => {
        const localdata = localStorage.getItem("userdata");
        return localdata ? JSON.parse(localdata) : [];
    });

    useEffect(() => {
        localStorage.setItem("userdata", JSON.stringify(userdata));
    }, [userdata]);

    const deleteClient = (id) => {
        setuserdata(prev => prev.filter(client => client.id !== id));
    };

    return (
        <ClientContext.Provider value={{ deleteClient }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Homesidebar userdata={userdata} setuserdata={setuserdata} />
                <div style={{ flex: 1, padding: "5px" }}>
                    <Outlet />
                </div>
            </div>
        </ClientContext.Provider>
    );
}

export default Homelayout;
