function Editcontact() {
    return (
        <>
        <style>
            {
                `
                *{
                margin:0;
                padding:0;
                }
                input
                {
                   height:40px;
                   width:250px;
                   border-radius:10px;
                   padding-left:10px;
                   margin-top:10px;
                }
                  
                `
            }
        </style>
            <div style={{ position: "absolute", left: "40%", borderRadius: "10px", height: "450px", width: "550px", bottom: "20%", backgroundColor: "white", border: "1px solid gray", boxShadow: "0 4px 8px black", zIndex: "1" }}>
                <h3 align="center" style={{ padding: "20px" }} >Edit Contact</h3>
                <hr />
                <form action="">

                    <tr>
                        <td><label for="fname">First Name</label></td>
                        <td><input type="text" id="fname" name="fname" placeholder="Enter your first name to edit" /></td>

                    </tr>

                    <tr>
                        <td>
                            <label for="lname">Last Name</label>
                        </td>
                        <td>
                            <input type="text" id="lname" name="lname" placeholder="Enter your last name to edit" />

                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="age">Age</label>
                        </td>
                        <td>
                            <input type="date" /> <br />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="phone">Phone</label>
                        </td>
                        <td>
                            <input type="number" id="phone" name="phone" placeholder="Enter your phone number to edit" />

                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="address">Address</label>
                        </td>
                        <td>
                            <input type="text" id="address" name="address" placeholder="Enter your address to edit" />

                        </td>
                    </tr>

                    <button  type="submit" style={{ margin: "20px", padding: "10px", width: "100px", backgroundColor: "black", color: "white", borderRadius: "50px",marginLeft:"200px" }}>Save Edit</button>
                </form>
            </div>

        </>
    )
}

export default Editcontact;