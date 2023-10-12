import { useEffect } from "react";
import Link from "next/link";

import ScrollArrow from "./ScrollArrow";
import ExperienceCard from "./ExperienceCard";
import ProficiencesCard from "./ProficienciesCard";

type Props = {
    handleSection: Function,
    isSelected: Boolean,
    showModal: Function,
};

let text = 'Lorem ipsum dolor sit amet, consectetur a, tempor ipsum. Praesent in nibh lobortis, mollis lorem a, ultricies purus. Nulla sit amet pretium ligula. Nulla pulvinar euismod nisl, porta accumsan nibh condimentum at. In molestie lorem et purus elementum maximus.'

let yalePlace = "Yale University"
let yaleTitle = "B.S. Computer Science\nJapanese Language Certificate"
let yaleTitleShort = 'B.S. Computer Science'
let yaleBlurb = [
    "I graduated in 2020 from Yale University.",
    "Along with computer science, I also learned Japanese got the chance to study abroad there during the summers.",
    "For my senior project, I combined my two interests to build online learning tools for the Japanese Department."
]

let airForcePlace = "US Air Force"
let airForceTitle = "AI Research Engineer\nDeputy Flight Commander"
let shortAirForceTitle = "1st Lt\nAI Research Engineer"
let airForceBlurb = [
    "I commissioned into the Air Force out of ROTC as a Defensive Cyber Operator. I am separating in January.",
    "As an AI Research Engineer, I test and develop visualization tools for cutting edge machine-learning tools.",
    "I lead a team of 20 Airmen, ensuring their well-being and mission success."
]

export default function Experience({ handleSection, isSelected, showModal }: Props){
    useEffect(() => {
        console.log("EXPERIENCE", isSelected)
    }, [isSelected]);
    
    return(
        <>
            <section id="experience" className="flex justify-center items-end h-[100dvh]">
                <div className="flex flex-col w-[80%] expbreak35:w-[95%] expbreak5:w-[90%] h-[95%] justify-start items-center">
                    <div className="flex flex-col h-full w-full expbreak32:w-auto expbreak32:flex-row my-0 aboutbreak3:my-10 expbreak32:mb-0 justify-around mt-0 expbreak4:mt-3">
                        <div>
                            <ExperienceCard image='/assets/images/yale.png' place={yalePlace} title={yaleTitle} shortTitle={yaleTitleShort} text={yaleBlurb} showModal={showModal} />
                        </div>
                        <div> 
                            <ExperienceCard image='/assets/images/airforce.png' place={airForcePlace} title={airForceTitle} shortTitle={shortAirForceTitle} text={airForceBlurb} showModal={showModal} />
                        </div>
                        <div>    
                            <ProficiencesCard />
                        </div>
                    </div>
                    <ScrollArrow handleSection={handleSection} location="projects" up={false} />
                </div>
            </section>
        </>
    )
}