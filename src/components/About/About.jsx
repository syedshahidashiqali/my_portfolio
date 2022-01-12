import "./About.css";
import awardImg from "../../images/award1.PNG";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function About() {

  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div className="about">
      <div className="aboutLeft">
        <div className="aboutCard Bg"></div>
        <div className="aboutCard">
          <img className="aboutCardImg" src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </div>
      </div>
      <div className="aboutRight">
        <h1 className="aboutTitle">About Me</h1>
        <p className="aboutSub">
          I am a MERN stack software developer skilled in developing full-stack web and mobile applications.
          {/* It is a long established fact that a reader will be distracted by the readable content. */}
        </p>
        <p className="aboutDesc">
          I develop complete mobile and web applications including its frontend and backend using stack 
          called MERN stack.
          <br />
          Furthermore, I also have knowledge of Python programming language and its web framework <b>Django</b>, as
          well as its Machine Leraning Framework <b>Tensorflow</b>.
          and also I have completed certification of <b>AI for everyone </b> by <i>Andrew Ng</i>.
          {/*  */}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehende. */}
        </p>
        <div className="aboutAward">
          <a href="https://www.coursera.org/account/accomplishments/verify/RGEB2D2ZPDFF" target="_blank" title="Click to view and verify">
          <img src={awardImg} className="awardImg" alt="" />
          </a>
          <div className="awardTexts">
            <h4 className="awardTitle">AI For Everyone Certificate</h4>
            <p className="awardDesc">
            an online non-credit course authorized by <b><a style={{textDecoration: "none", color: state.darkMode ? "white" : "#000000"}}  href="https://www.deeplearning.ai/">deeplearning.ai</a></b> and offered through Coursera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;