import { useReducer } from 'react'
import profilelogo from '../assets/profilelogo.png'


const useraccount = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    jobtype: ""
}

const reducer = (data, action) => {
    if (action.type === 'reset') {
        return action.val;
    }
    return { ...data, [action.type]: action.val }

}



function Account() {

    const [state, dispatch] = useReducer(reducer, useraccount);

    const url = "http://localhost:3000/users";

    const createuser = async () => {

        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })

        if (response.ok) {
            await response.json();
            dispatch({ type: 'reset', val: useraccount }); // Reset state
        }
    }






    return (
        <>

            <style>

                {
                    `
                *{
                margin:0;
                padding:0;
                box-sizing: border-box;
                }

                body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background-color: #eae59dff;
                
                }

                .box{
                height:600px;
                width:700px;
                border:2px solid white;
                max-width: 750px;
                padding:30px;
                border-radius:15px;
                margin:20px auto;
                box-shadow: 3px 9px 3px black ;
                background-color: white;
                }
                .box:hover
                {
                  transform: scale(1.05);
                  border-radius:30px;
                  box-shadow: 2px 20px 15px #2264f3ff;

                }

                .input-box{
                 height:40px;
                 width:249px;
                 border-radius:8px;
                 padding:10px;
                 margin:10px 0;
                 box-sizing: border-box;
                }

                @media (max-width: 768px) {
                .box {
                    width: 100%;
                    padding: 20px;
                    margin: 10px auto;
                }

                .input-box {
                    width: 100%;
                }

                h3 {
                    font-size: 1.2em;
                    margin-left: 0 !important;
                    text-align: center;
                }

                button {
                    width: 100% !important;
                    margin-left: 0 !important;
                }

                
                `
                }
            </style>

            <div className="box">
                <form action="" onSubmit={(e) => { e.preventDefault(); createuser(); }}>


                    <h3 style={{ textAlign: "center" }}>Create Account</h3><br />

                    <hr /><br />


                    <div style={{ display: "flex", flexDirection: 'column' }}>



                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                            <div>
                                <label htmlFor=""><h3 >First Name</h3></label>
                                <input value={state.firstName} placeholder='First Name' onChange={(e) => dispatch({ val: e.target.value, type: 'firstName' })} className="input-box" type="text" />


                                <label htmlFor=""><h3 >Last Name</h3></label>
                                <input value={state.lastName} placeholder='Last Name' onChange={(e) => dispatch({ val: e.target.value, type: 'lastName' })} className="input-box" type="text" />

                                <label htmlFor=""><h3 >Email</h3></label>
                                <input value={state.email} placeholder='Email' onChange={(e) => dispatch({ val: e.target.value, type: 'email' })} className="input-box" type="email" />

                            </div>
                            <div>

                                <div style={{ border: "7px solid black", height: "200px", width: "200px", borderRadius: "100px", backgroundImage: `url(${profilelogo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>



                                </div>
                                <p style={{ marginTop: "5px" }}><b>Upload profile image</b></p>

                            </div>
                        </div>
                        <label htmlFor=""><h3  >Password</h3></label>
                        <input value={state.password} placeholder='Password' onChange={(e) => dispatch({ val: e.target.value, type: 'password' })} className="input-box" type="password" />


                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                            <div>
                                <label htmlFor="jobtype">Select Job Type</label>
                                <select value={state.jobtype} onChange={(e) => dispatch({ val: e.target.value, type: 'jobtype' })} className="input-box" name="jobtype" id="jobtype">
                                    <option value="" disabled>Select Job Type</option>
                                    <option value="LAWYER">Lawyer</option>
                                    <option value="Client">Client</option>
                                </select>
                            </div>
                            <div>
                                <button style={{ marginTop: "20px", marginRight: "60px",height: "40px", width: "100px", borderRadius: "8px", backgroundColor: "#2264f3ff", color: "white", fontWeight: "bold", border: "none", cursor: "pointer" }} type="submit">Submit</button>
                            </div>

                        </div>
                    </div>

                    <div style={{ marginTop: "60px"}}>
                        <label htmlFor="">Gender</label>

                    <input type="radio" id="male" value="male" name="gender" checked={state.gender === 'male'}  style={{height:"20px" ,width:"50px"}} onChange={(e) => dispatch({ val: e.target.value, type: 'gender' })} />
                    <label htmlFor="male">Male</label>

                    <input type="radio" id="female" name="gender" value="female" checked={state.gender === 'female'} style={{height:"20px" ,width:"50px"}}  onChange={(e) => dispatch({ val: e.target.value, type: 'gender' })} />
                    <label htmlFor="female">Female</label>
                    </div>
                    <br />



                </form> </div>





        </>
    );
}
export default Account;