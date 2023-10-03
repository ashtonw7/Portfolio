'use client';

import { useEffect, useState } from 'react';

import NavBar from '@/components/NavBar';
import Heading from '@/components/Heading';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import exp from 'constants';

export default function Home() {
  const [currSection, setCurrSection] = useState("");

  function handleSection(section: string) {
    setCurrSection(section);
  }

  let indices = {
    HOME: 0,
    ABOUT: 1,
    EXPERIENCE: 2,
    PROJECTS: 3,
    CONTACT: 4
  }

  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);


  useEffect(() => {
    switch (currSection){
      case "home":
        setHome(true);
        setAbout(false);
        setExperience(false);
        setProjects(false);
        setContact(false);   
        break;
      
      case "about":
        setHome(false);
        setAbout(true);
        setExperience(false);
        setProjects(false);
        setContact(false);   
        break;

      case "experience":
        setHome(false);
        setAbout(false);
        setExperience(true);
        setProjects(false);
        setContact(false);   
        break;

      case "projects":
        setHome(false);
        setAbout(false);
        setExperience(false);
        setProjects(true);
        setContact(false);   
        break;

      case "contact":
        setHome(false);
        setAbout(false);
        setExperience(false);
        setProjects(false);
        setContact(true);   
        break;
    }
  }, [currSection]);
  
  return (
    <main>
      <NavBar handleSection={handleSection} />
      <Heading handleSection={handleSection} isSelected={home} />
      <About handleSection={handleSection} isSelected={about} />
      <Experience handleSection={handleSection} isSelected={experience} />
      <Projects handleSection={handleSection} isSelected={projects}/>
      <Contact handleSection={handleSection} isSelected={contact} />
    </main>
  )
}