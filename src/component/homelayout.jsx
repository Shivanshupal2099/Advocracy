import { useState } from "react";
import Homesidebar from "./homesidebar";
import Client from "./client";

function Homelayout() {
    const [selectedClient, setSelectedClient] = useState(null);

    const handleClientSelect = (client) => {
        setSelectedClient(client);
    };

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Homesidebar onClientSelect={handleClientSelect} />
            <div style={{ flex: 1, padding: "20px" }}>
                {selectedClient ? (
                    <Client client={selectedClient} />
                ) : (
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: "18px",
                        color: "#666"
                    }}>
                        Select a client to view details
                    </div>
                )}
            </div>
        </div>
    );
}

export default Homelayout;
