import { IoIosAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import Addclient from "./addclient";

function Homesidebar({ onClientSelect }) {

    const [addclient, setAddclient] = useState(false);

    const [userdata, setuserdata] = useState(() => {
        const localdata = localStorage.getItem("userdata");
        return localdata ? JSON.parse(localdata) : [];
    });

    useEffect(() => {
        localStorage.setItem("userdata", JSON.stringify(userdata));
    }, [userdata]);

    const handleClientClick = (client) => {
        if (onClientSelect) {
            onClientSelect(client);
        }
    };

    const toggleAddClient = () => {
        setAddclient(!addclient);
    };

    return (
        <>
            {addclient && <Addclient setuserdata={setuserdata} />}
            <div style={{ height: "100vh", width: "390px", borderRadius: "10px", border: "1px solid #f1f1f1ff", backgroundColor: "#f0f0f0ff", marginLeft: "-40px", display: "flex", flexDirection: "column" }}>
                <div style={{position:"sticky"}}>
                    <h2 style={{ marginLeft: "20px", marginTop: "30px" }}>Clients Overview</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <input type="search" placeholder="Search Client" style={{ height: "40px", width: "279px", paddingLeft: "10px", borderRadius: "10px", marginLeft: "15px", marginTop: "20px", border: "1px solid gray" }} />
                    <IoIosAddCircle onClick={toggleAddClient} style={{ height: "40px", width: "40px", marginLeft: "5px", marginTop: "20px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <select id="caseType" aria-label="Choose case type" style={{ color: "gray", height: "30px", width: "159px", paddingLeft: "10px", borderRadius: "10px", marginLeft: "15px", marginTop: "20px" }}>
                        <option value="" disabled selected>— Select a case type —</option>
                        <option value="criminal">Criminal Cases</option>
                        <option value="civil">Civil Cases</option>
                        <option value="constitutional">Constitutional Cases</option>
                        <option value="administrative">Administrative / Regulatory Cases</option>
                        <option value="family">Family Cases</option>
                        <option value="commercial">Commercial / Corporate Cases</option>
                        <option value="labor">Labor / Employment Cases</option>
                        <option value="consumer">Consumer Cases</option>
                        <option value="taxation">Taxation Cases</option>
                        <option value="environmental">Environmental Cases</option>
                        <option value="human_rights">Human Rights Cases</option>
                        <option value="international">International Law Cases</option>
                        <option value="ipr">Intellectual Property (IPR) Cases</option>
                        <option value="election">Election Cases</option>
                        <option value="cybercrime">Cybercrime / Digital Law Cases</option>
                    </select>

                    <select id="caseStatus" style={{ color: "gray", height: "30px", width: "159px", paddingLeft: "5px", borderRadius: "10px", marginLeft: "5px", marginTop: "20px" }}>
                        <option value="" disabled selected>— Choose Status —</option>
                        <option value="filed">Filed / Registered</option>
                        <option value="scrutiny">Under Scrutiny</option>
                        <option value="pending">Pending</option>
                        <option value="hearing">Listed for Hearing</option>
                        <option value="adjourned">Adjourned</option>
                        <option value="trial">Under Trial / Evidence Stage</option>
                        <option value="arguments">Arguments Stage</option>
                        <option value="reserved">Reserved for Judgment</option>
                        <option value="judgment">Judgment / Order Passed</option>
                        <option value="disposed">Disposed / Closed</option>
                        <option value="appeal">Appeal Filed</option>
                        <option value="execution">Execution Stage</option>
                    </select>
                </div>
                </div>
                <hr style={{ marginTop: "30px" }} />
                <div style={{overflow:"auto"}}>
                    

                {
                    userdata.map((items, index) => (
                        <div
                            key={index}
                            onClick={() => handleClientClick(items)}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                border: "1px solid gray",
                                backgroundColor: "white",
                                borderRadius: "50px",
                                marginTop: "20px",
                                marginLeft: "5px",
                                marginRight: "5px",
                                height: "90px",
                                color:"black",
                                width: "349px",
                                cursor: "pointer"
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&w=1000&q=80" style={{ marginLeft: "19px", marginTop: "15px", height: "60px", width: "60px", borderRadius: "90px", border: "1px solid gray" }} alt="clientimage" />
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ marginTop: "25px", marginLeft: "20px", display: "flex", flexDirection: "column" }}>
                                    <h3>{items.firstname}</h3>
                                </div>
                                <p style={{ height: "15px", border: "1px solid #ffe205ff", backgroundColor: "#ffee00ff", borderRadius: "50px", padding: "5px", paddingBottom: "8px", marginTop: "25px", marginLeft: "25px" }}>Active Client</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    );
}

export default Homesidebar;
