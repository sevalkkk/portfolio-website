import { useState } from "react";
import "./contact.scss";
import img4 from "../intro/img/img4.jpg"

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="right">
        <img src={img4} alt="img" />
      </div>
      <div className="left">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply your messages. :)</span>}
        </form>
      </div>
    </div>
  );
}