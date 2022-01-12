import "./ProjectList.css";
import Project from "../Project/Project";
import { projects } from "../../data";
function ProjectList() {
  return (
    <div className="projectList">
      <div className="projectListTexts">
        <h1 className="projectListTextTitle">
        Creativity & Inspiration.
        </h1>
        <p className="projectListTextDesc">
          It is a portfolio that showcases and summarizes all of my projects that I have worked on so far.
          Please have a look at these :)
        </p>
      </div>
      <div className="projectListContainer">
        {projects.map((project => {
          return(
            <Project key={project.id} img={project.img} link={project.link} alt={project.alt} />
          )
        }))}
      </div>
    </div>
  );
}

export default ProjectList;
