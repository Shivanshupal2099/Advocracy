function Clientsidebar()
{
    return(
        <>
             <div style={{height:"100vh" ,width:"310px",padding:"20px",borderRadius:"30px",marginLeft:"10px",backgroundColor:"white"}}>
                <div className="client-search">
                    <input type="search" style={{ height: "40px", border: '2px solid gray', width: "300px", borderRadius: "10px", paddingLeft: "10px" }} placeholder="Search clients by name..." />
                     </div>



                <div style={{ display: 'flex' }} >

                    <select name="" id="cases-type" style={{ height: "40px", width: "140px", borderRadius: "10px", marginTop: "20px", paddingLeft: "10px", border: '2px solid gray' }}>
                        <option value="Case type : All" selected>Case type : All</option>
                        <option value="Civil Cases">Civil Cases</option>
                        <option value="Criminal Cases">Criminal Cases</option>
                        <option value="Constitutional Cases">Constitutional Cases</option>
                        <option value="Administrative Cases">Administrative Cases</option>
                        <option value="Corporate Cases">Corporate Cases</option>
                        <option value="Commercial Cases"> Commercial Cases</option>
                        <option value="Labour Cases">Labour Cases</option>
                        <option value="Employment Cases">Employment Cases</option>
                        <option value="International Cases">International Cases</option>
                    </select>

                    <select name="" id="" style={{ marginLeft: "10px", height: "40px", width: "140px", borderRadius: "10px", marginTop: "20px", paddingLeft: "10px", border: '2px solid gray' }}>
                        <option value="">Active</option>
                        <option value="">Pending</option>
                        <option value="">In Progress</option>
                        <option value="">On Hold</option>
                        <option value="">Under Review</option>
                        <option value="">Approved</option>
                        <option value="">Rejected</option>
                        <option value="">Resolved</option>
                        <option value="">Closed</option>
                        <option value="">Completed</option>
                    </select>
                </div>
             </div>
             
        </>
    );
}
export default Clientsidebar;