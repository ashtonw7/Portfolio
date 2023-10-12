'use client';

import { useEffect, useState } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import useNavBarHeight from './hooks/useNavBarHeight';

import NavBar from '@/components/NavBar';
import Heading from '@/components/Heading';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import DetailsModal from '@/components/DetailsModal';
import exp from 'constants';

export default function Home() {
  const { height, width } = useWindowDimensions();
  const navBarHeight = useNavBarHeight();
  const [arrowDims, setArrowDims] = useState({height: 0, width: 0});

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

  const [modalVisible, setModalVisible] = useState(false);
  
  interface modalInfo {
    title: string;
    place: string;
    text: [string];
    image: string;
  }

  const [modalInfo, setShowModalInfo] = useState<modalInfo | null>();

  function closeModal(){
    setModalVisible(false);
  }
  function showModal(modalInfo: modalInfo){
    setShowModalInfo(modalInfo);
    setModalVisible(true);
  }

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
      <div id="wrapper" className="relative overflow-x-clip">
        {
          modalVisible ? <DetailsModal closeModal={closeModal} text={modalInfo!.text} place={modalInfo!.place} title={modalInfo!.title} image={modalInfo!.image}  /> : ''
        }
        <Heading handleSection={handleSection} isSelected={home} />
        <About handleSection={handleSection} isSelected={about} />
        <Experience handleSection={handleSection} isSelected={home} showModal={showModal} />
        <Projects handleSection={handleSection} isSelected={projects}/>
        <Contact handleSection={handleSection} isSelected={contact} />
      </div>
    </main>
  )
}