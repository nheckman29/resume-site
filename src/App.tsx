import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import Resume from "./resume/Resume";
import Photos from "./photos/Photos";
import Contact from "./contact/Contact";
import Projects from "./projects/ProjectsWithSkills";
import Welcome from "./welcome/Welcome";
import Experiences from "./timeline/Timeline";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <div className="mt-1 mb-5">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certifications" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
