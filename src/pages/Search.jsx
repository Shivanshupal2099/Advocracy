import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import Filter from "../component/filter";
import { useState } from "react";
import truth from '../assets/truth.png';

function Search() {

    const [filtervalue,setfilter]=useState(false);

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          input {
            height: 70px;
            width: 550px;
            margin-top: 10px;
            background-color: white;
            padding-left: 30px;
            border-radius:40px;
            margin-left:200px;
          }
          .header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom:25px;
          }
          input:hover {
             width:600px;
          }
        `}
      </style>

     

      

      <div className="header">
        <input type="text" placeholder="Search new client or lawyer" />
        <FaSearch style={{height:"30px",width:"60px",marginTop:"25px"}} />
        <FaFilter onClick={() => setfilter(!filtervalue)} style={{height:"30px",width:"60px",marginTop:"25px"}} />

        
      </div>
       
      <hr />

      <div style={{backgroundImage:`url(${truth})`,height:"300px",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",opacity:1.5,marginTop:"10%"}}>
      {
          filtervalue ? <Filter  /> : null
        }
      </div>
      
    </>
  );
}

export default Search;
