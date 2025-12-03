function Clientinfo() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: 'column' }} >
                <div className="leftside" style={{ display: "flex", backgroundColor: "white", height: "90px", width: '1200px', flexDirection: "row", marginLeft: "20px", marginTop: "5px", padding: "20px", borderRadius: "10px" }}>

                    <div className="header" style={{ marginLeft: "50px", width: "1030px" }}> <h2>Clients Overview </h2></div>
                    <button style={{ height: "40px", width: "120px", backgroundColor: "#2498ff", color: "white", marginTop: "24px" ,flex:"1" }} >Add Client </button>

                </div>
                
                <hr />

                

            </div>

        </>
    );
}

export default Clientinfo;