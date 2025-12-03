import { IoSend } from "react-icons/io5";
import order from '../assets/order.png'

function Message() {
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
              height:42px;
              width:90%;
              border-radius:30px;
              margin-left:9px;
              margin-top:7px;
              margin-bottom:7px;
              padding-left:20px;
              

           }
         `
        }
      </style>
      <div style={{marginLeft:"-5px"}}>
              <div style={{ height: "500px", width: "790px", borderRadius: "30px", border: "1px solid #F7F7F7", backgroundColor: "white", position: "fixed", backgroundImage: `url(${order})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }}>

              </div>
              <div style={{
                height: "60px",
                width: "799px",
                position: "absolute",
                bottom: "2%",
                borderRadius: "30px",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "row"
              }}>
                < input type="text" placeholder="Enter the message" />
                <IoSend style={{ height: "40px", width: "40px", marginLeft: "15px", marginTop: "7px", color: "white" }} />

              </div>
      </div>

    </>
  )
}
export default Message;