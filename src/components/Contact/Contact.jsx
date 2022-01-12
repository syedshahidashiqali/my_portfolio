import "./Contact.css";
import PhoneImg from "../../images/phone.png";
import EmailImg from "../../images/email.png";
import LocationImg from "../../images/address.png";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import { ThemeContext } from "../../context";
import facebookImg from "../../images/facebook-icon.png";
import linkedinImg from "../../images/linkedin-icon.png";
import twitterImg from "../../images/twitter-icon.png";
import gitHubImg from "../../images/github-icon.png";

function Contact() {
  const formRef = useRef();
  const [ done, setDone ] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(12, formRef);
    // console.log(13, formRef.current);
    // console.log(14, formRef.current[0]);
    // console.log(15, formRef.current[0].value);

    emailjs.sendForm('service_ktnsejg', 'template_ehd7ucf', formRef.current, 'user_usjViLXlJGNfXdxYHTjxw')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
    });
  };

  const { state, dispatch } = useContext(ThemeContext);

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
            <div className="contactInfoItem loc-hidden">
              <img 
                className="contactInfoImg"
                src={LocationImg} 
                alt="" 
                />
              Karachi, Pakistan
            </div>
            <div className="contactInfoItem">
              <a href="https://www.facebook.com/syedshahid.ali.9083" target="_blank" rel="noreferrer noopener">
              <img 
                className="contactInfoImg"
                src={facebookImg} 
                alt="" 
                />
              </a>
              Like me on Facebook
            </div>
            <div className="contactInfoItem">
              <a href="https://www.linkedin.com/in/shahid-ashiq-ali-40522a18b" target="_blank" rel="noreferrer noopener">
              <img 
                className="contactInfoImg"
                src={linkedinImg} 
                alt="" 
                />
              </a>
              Follow me on LinkedIn
            </div>
            <div className="contactInfoItem loc-hidden">
              <a href="https://twitter.com/syed_shahid258?t=68QKQF2BrjsdwuuDlD5uIg&s=09" target="_blank" rel="noreferrer noopener">
              <img 
                className="contactInfoImg"
                src={twitterImg} 
                alt="" 
                />
              </a>
              Follow me on Twitter
            </div>
            <div className="contactInfoItem">
              <a href="https://github.com/syedshahidashiqali" target="_blank" rel="noreferrer noopener">
              <img 
                style={{ backgroundColor:"white", borderRadius:"50%", overflow:"hidden" }}
                className="contactInfoImg"
                src={gitHubImg} 
                alt="" 
                />
              </a>
              Follow me on GitHub
            </div>
          </div>
        </div>
        <div className="contactRight">
          <p className="contactRightDesc">
            <b>What’s your story?</b> Get in touch. Always available for freelancing 
            if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: state.darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: state.darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{ backgroundColor: state.darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: state.darkMode && "#333" }} placeholder="Message" name="user_message" rows="5"></textarea>
            <button className="contactBtn">Submit</button>
            {done && "Thank You"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
