import "./About.css";
import awardImg from "../../images/award.png";

function About() {
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
          It is a long established fact that a reader will be distracted by the readable content.
        </p>
        <p className="aboutDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="aboutAward">
          <img src={awardImg} className="awardImg" alt="" />
          <div className="awardTexts">
            <h4 className="awardTitle">International Design Awards 2021</h4>
            <p className="awardDesc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;