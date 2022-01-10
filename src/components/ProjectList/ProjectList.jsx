import "./ProjectList.css";
import Project from "../Project/Project";
import { projects } from "../../data";
function ProjectList() {
  return (
    <div className="projectList">
      <div className="projectListTexts">
        <h1 className="projectListTextTitle">
        Create & inspire. It's Lama
        </h1>
        <p className="projectListTextDesc">
          Lama is a creative portfolio that your work has been waiting for. Beautiful homes, 
          stunning portfolio styles & a whole lot more awaits inside.
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
