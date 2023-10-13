import { useEffect } from "react";

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
let yaleTitle = "B.S. Computer Science\nJapanese Certificate"
let yaleTitleShort = 'B.S. Computer Science'
let yaleBlurb = [
    "I graduated in 2020 from Yale University.",
    "Along with computer science, I also learned Japanese and got the chance to study abroad there during the summers.",
    "I combined my two interests to build online learning tools for the Japanese Department."
]

let airForcePlace = "US Air Force"
let airForceTitle = "AI Research Engineer\nDeputy Flight Commander"
let shortAirForceTitle = "1st Lt\nAI Research Engineer"
let airForceBlurb = [
    "I commissioned out of ROTC as a Defensive Cyber Operator. I am currently transitioning out of the military.",
    "As an AI Research Engineer, I test and develop visualization tools for cutting edge machine-learning tools.",
    "I lead a team of 20 Airmen, ensuring their well-being and mission success."
]

export default function Experience({ handleSection, isSelected, showModal }: Props){
    useEffect(() => {
        if (isSelected){
            let yale = document.getElementById("yale");
            let yaleDetails = document.getElementById("yaleDetails");

            let airForce = document.getElementById("airForce");
            let airForceDetails = document.getElementById("airForceDetails");

            yale!.classList.remove("animate-slide-in-right");
            yale!.offsetHeight;
            yale!.classList.add("animate-slide-in-right");

            yaleDetails!.classList.remove("animate-fade-up");
            yaleDetails!.offsetHeight;
            yaleDetails!.classList.add("animate-fade-up");

            airForce!.classList.remove("animate-slide-in-left");
            airForce!.offsetHeight;
            airForce!.classList.add("animate-slide-in-left");

            airForceDetails!.classList.remove("animate-fade-up");
            airForceDetails!.offsetHeight;
            airForceDetails!.classList.add("animate-fade-up");
        }
    }, [isSelected]);
    
    return(
        <>
            <section id="experience" className="flex flex-col justify-center items-center h-[100svh] bigphone:h-[100vh]">
                <div className="flex flex-col bigphone:w-[80%] aboutbreak4:w-[70%] justify-between h-[95svh] bigphone:h-[95vh] items-center">
                    <div className="flex flex-1 flex-col flex-grow items-center justify-around mt-5 expbreak32:mt-0">            
                    
                        <div className="flex flex-col max-w-[80%] items-center bigphone:items-start bigphone:self-start">
                            <div>
                                <div id="yale" className="flex justify-center items-start bg-white px-1 mr-auto mb-3 bigphone:mb-5 doodle-border shadow-green-sm aboutbreak3:shadow-green -skew-x-12 animate-slide-in-right">
                                    <h2 className="font-bowlby md:text-left text-[1.5rem] bigphone:text-[1.8rem] aboutbreak2:text-[2rem] aboutbreak4:text-[2.8rem] aboutbreak:px-[1.5rem]">
                                        Yale University
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-row">
                                <div id="yaleDetails" className="font-inter font-medium text-[1rem] bigphone:text-[1.3rem] aboutbreak4:text-[1.6rem] animate-fade-up animate-duration-700 animate-delay-[300ms]">
                                    <h3 className="font-bold text-center bigphone:text-left">
                                        {"B.S. Computer Science"}
                                    </h3>
                                    <h3 className="font-bold text-center bigphone:text-left mt-[-0.5rem]">
                                        {"Japanese Certificate"}
                                    </h3>
                                    <p className="aboutbreak4:mt-3">
                                        {"Along with computer science, I also learned Japanese and got the chance to study abroad there during the summers. I combined my two interests to build online learning tools for the Yale Japanese Department."}  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col max-w-[80%] items-center bigphone:items-end bigphone:self-end mt-5 bigphone:mt-0">
                            <div>
                                <div id="airForce" className="flex justify-center px-1 items-start bg-white aboutbreak3:mr-auto mb-3 bigphone:mb-5 doodle-border shadow-green-sm aboutbreak3:shadow-green -skew-x-12 animate-slide-in-left">
                                    <h2 className="font-bowlby md:text-right text-[1.5rem] bigphone:text-[1.8rem] aboutbreak2:text-[2rem] aboutbreak4:text-[2.8rem] aboutbreak:px-[1.5rem]">
                                        U.S. Air Force
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-row">
                                <div id="airForceDetails" className="font-inter font-medium text-left bigphone:text-right text-[1rem] bigphone:text-[1.3rem] aboutbreak4:text-[1.6rem] animate-fade-up animate-duration-700 animate-delay-500">
                                    <h3 className="font-bold text-center bigphone:text-right">
                                        {"AI Research Engineer"}
                                    </h3>
                                    <h3 className="font-bold text-center bigphone:text-right mt-[-0.5rem]">
                                        {"Deputy Flight Commander"}
                                    </h3>
                                    <p className="aboutbreak4:mt-3">
                                        {"I commissioned out of ROTC as a Defensive Cyber Operator. As an AI Research Engineer, I test and develop visualization tools for cutting edge machine-learning tools. I am currently transitioning out of the military."}  
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <ScrollArrow handleSection={handleSection} location="projects" up={false} />
                </div>
            </section>
        </>
    )
}