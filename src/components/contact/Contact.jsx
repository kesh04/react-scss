import { spacing } from "@mui/system";
import { useState } from "react";
import "./contact.css";

export default function Contact() {

  const [Message,setmessage] = useState(false);

   const handlesumbit = (e) =>{
    e.preventDefault();
    setmessage(true)
   }
  return (
    <div className="contact" id="contact">
       <div className="left">
        <img src="assets/shake.svg" alt="" />
       </div>
       <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handlesumbit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" ></textarea>
          <button type="sumbit ">Send</button>

          {Message &&  <span>Thanks</span>}
        </form>
       </div>
    </div>
  );
}
