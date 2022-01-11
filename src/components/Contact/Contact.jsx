import "./Contact.css";
import PhoneImg from "../../images/phone.png";
import EmailImg from "../../images/email.png";
import LocationImg from "../../images/address.png";

function Contact() {
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
        <div className="contactRight">Right</div>
      </div>
    </div>
  );
}

export default Contact;
