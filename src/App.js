import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
