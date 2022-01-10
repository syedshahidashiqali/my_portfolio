import "./Project.css";

function Project({img, link, alt}) {
  console.log(img)
  console.log(link)
  return (
    <div className="project">
      <div className="projectBrowser">
        <div className="projectBrowserCircle"></div>
        <div className="projectBrowserCircle"></div>
        <div className="projectBrowserCircle"></div>
        <h4 style={{position: "absolute", left:0, right:0, margin: "auto", color: "#555"}}>{alt}</h4>
      </div>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img className="projectImg" src={img} alt={alt} title={alt} />
      </a>
    </div>
  );
}

export default Project;
