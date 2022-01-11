import "./Contact.css";
import PhoneImg from "../../images/phone.png";
import EmailImg from "../../images/email.png";
import LocationImg from "../../images/address.png";
import { useRef } from "react";

function Contact() {
  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(12, formRef);
    console.log(13, formRef.current);
    console.log(14, formRef.current[0]);
    console.log(15, formRef.current[0].value);
  };
  return (
    <div className="contact">
      <div className="contactBg"></div>
      <div className="contactWrapper">
        <div className="contactLeft">
          <h1 className="contactTitle">Let's discuss your project</h1>
          <div className="contactInfo">
            <div className="contactInfoItem">
              <img 
                className="contactInfoImg"
                src={PhoneImg} 
                alt="" 
                />
              +92 3158604063
            </div>
            <div className="contactInfoItem">
              <img 
                className="contactInfoImg"
                src={EmailImg} 
                alt="" 
                />
              syedshahid1215@gmail.com
            </div>
            <div className="contactInfoItem">
              <img 
                className="contactInfoImg"
                src={LocationImg} 
                alt="" 
                />
              Karachi, Pakistan
            </div>
          </div>
        </div>
        <div className="contactRight">
          <p className="contactRightDesc">
            <b>What’s your story?</b> Get in touch. Always available for freelancing 
            if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea placeholder="Message" name="user_message" rows="5"></textarea>
            <button className="contactBtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
