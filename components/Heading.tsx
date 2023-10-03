import { useState, useEffect, useRef, use } from "react";
import FloatingImages from "./FloatingImages";
import ScrollArrow from "./ScrollArrow";

type Props = {
    handleSection: Function,
    isSelected: Boolean
};

export default function Heading({ handleSection, isSelected }: Props){
    useEffect(() => {
        if (isSelected){
            let name = document.getElementById("name");
            let headingDetails = document.getElementById("headingDetails");

            name!.classList.remove("animate-wiggle");
            name!.offsetHeight;
            name!.classList.add("animate-wiggle");

            headingDetails!.classList.remove("animate-fade-up");
            headingDetails!.offsetHeight;
            headingDetails!.classList.add("animate-fade-up");
        }
    }, [isSelected]);
    
    return(
        <>
            <section id="home" className="relative w-full">
                <div className="relative w-full h-[100dvh] bg-[#FDF7F1]">
                    <FloatingImages />

                    <div id="introBlock" className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-70%] px-6 py-8 bg-white doodle-border shadow-green">
                        <div className='flex flex-col'>
                            
                            <h1 id="name" className="font-bowlby text-center text-[6.5rem] leading-[7rem] mb-7 animate-wiggle animate-once animate-ease-out">
                                Ashton Winters
                            </h1>

                            <h2 id="headingDetails" className="flex justify-between font-inter font-medium text-center text-[2rem] leading-[2rem] animate-fade-up animate-delay-800 animate-ease-out">
                                <span>
                                    Frontend Developer
                                </span>
                     
                                <span className="border-l-[3px] border-r-[3px] border-black">
                                    Technical Manager
                                </span>
                         
                                <span>
                                    Software Engineer
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <ScrollArrow handleSection={handleSection} location="about" up={false} />
            </section>
        </>
    )
}