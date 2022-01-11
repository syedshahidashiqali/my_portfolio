import "./Intro.css";
import myImg from "../../images/me.png"

function Intro() {
  return (
    <div className="intro">
      <div className="introLeft">
        <div className="introLeftWrapper">
          <h2 className="introLeftDesc">Hello, My name is</h2>
          <h1 className="introLeftName">Shahid Ali</h1>
          <div className="introLeftTitles">
            <div className="introLeftItemWrapper">
            <div className="introLeftItem">Web App Developer</div>
            <div className="introLeftItem">Mobile App Developer</div>
            <div className="introLeftItem">UI / UX Developer</div>
            <div className="introLeftItem">ReactJS Developer</div>
            <div className="introLeftItem">React-Native Dev</div>
            <div className="introLeftItem">NodeJS Developer</div>
            <div className="introLeftItem">ExpressJS Developer</div>
            <div className="introLeftItem">MERN stack Developer</div>
            <div className="introLeftItem">Frontend Developer</div>
            <div className="introLeftItem">Backend Developer</div>
            </div>
          </div>
          <p className="introDetail">
          I design and develop services for customers of all sizes, 
          specializing in creating stylish, modern websites and mobile apps and web services.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="introRight">
        <div className="introRightBg"></div>
        <img className="introImg" src={myImg} alt="" />
      </div>
    </div>
  );
}

export default Intro;
