import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="introLeft">
        <div className="introLeftWrapper">
          <h2 className="introLeftDesc">Hello, My name is</h2>
          <h1 className="introLeftName">Shahid Ali</h1>
          <div className="introLeftTitles">
            <div className="introLeftItemWrapper">
            <div className="introLeftItem">Web Developer</div>
            <div className="introLeftItem">UI / UX Developer</div>
            <div className="introLeftItem">ReactJS Developer</div>
            <div className="introLeftItem">NodeJS Developer</div>
            <div className="introLeftItem">MERN stack Developer</div>
            <div className="introLeftItem">Frontend Developer</div>
            <div className="introLeftItem">Backend Developer</div>
            </div>
          </div>
          <p className="introDetail">
          I design and develop services for customers of all sizes, 
          specializing in creating stylish, modern websites, web services 
          and online stores.
          </p>
        </div>
      </div>
      <div className="introRight">Intro Right</div>
    </div>
  );
}

export default Intro;
