'use client';

import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react';

import NavBar from '@/components/NavBar';
import Heading from '@/components/Heading';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import DetailsModal from '@/components/DetailsModal';

export default function Home() {
  const [currSection, setCurrSection] = useState("");

  function handleSection(section: string) {
    setCurrSection(section);
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
    document.body.classList.remove("h-[100svh]");
    document.body.classList.remove("overflow-y-hidden");
    setModalVisible(false);
  }
  function showModal(modalInfo: modalInfo){
    setShowModalInfo(modalInfo);
    document.body.classList.add("h-[100svh]");
    document.body.classList.add("overflow-y-hidden");
    setModalVisible(true);
  }

  useEffect(() => {
    if (modalVisible){
      let modal = document.getElementById("modal");
      modal!.classList.remove("animate-fade");
      modal!.offsetHeight;
      modal!.classList.add("animate-fade");
    }
  }, [modalVisible]);

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
    <>
        <Helmet>
          <html lang="en" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <main>
          <NavBar handleSection={handleSection} />
          <div id="wrapper" className="relative">
            {
              modalVisible ? <DetailsModal closeModal={closeModal} text={modalInfo!.text} place={modalInfo!.place} title={modalInfo!.title} image={modalInfo!.image}  /> : ''
            }
            <Heading handleSection={handleSection} isSelected={home} />
            <About handleSection={handleSection} isSelected={about} />
            <Experience handleSection={handleSection} isSelected={experience} showModal={showModal} />
            <Projects handleSection={handleSection} isSelected={projects}/>
            <Contact handleSection={handleSection} isSelected={contact} />
          </div>
        </main>
    </>
  )
}