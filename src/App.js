import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";
import {  useContext } from "react";

function App() {
  
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <div 
      className="app" 
      style={{ 
        backgroundColor: state.darkMode ? "#222" : "white",
        color: state.darkMode && "white"
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
