

import Description from './Component/Body/Description';
import Navbar from './Component/Navbar';
import Button from './Component/Body/Button';
import Skill from './Component/Skill';
import './Component/Body/myfun.css'
import { useRef } from 'react';
import Project from './Component/Project';
import Contact from './Component/Contact';
import About from './Component/About';
import Footer from './Component/Footer';
import NewSkill from './Component/NewSkill';
import Skillsection from './Component/Skillsection';
import AboutSection from './Component/AboutSection';
import ProjectSection from './Component/ProjectSection';
import NewAboutSection from './NewAboutSection';

function App() {
  const testref=useRef(null);
  return (
    <div >
      <Navbar />
      <Description></Description>
      <Button ></Button>
      <Skillsection></Skillsection>
      {/* <div className="angledLine">
        
      </div> */}
      {/* <Project ></Project> */}
      <ProjectSection></ProjectSection>
      <NewAboutSection></NewAboutSection>
      <Contact></Contact>
      <Footer></Footer>
     
      
      
      
      
     

    </div>
  );
}

export default App;
