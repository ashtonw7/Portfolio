import { useEffect, useState } from "react";

import Image from "next/image";
import ScrollArrow from "../ScrollArrow";

type Props = {
    handleSection: Function,
    isSelected: Boolean
};

export default function About({ handleSection, isSelected }: Props){
    useEffect(() => {
        if (isSelected){
            let intro = document.getElementById("intro");
            let aboutDetails = document.getElementById("aboutDetails");

            intro!.classList.remove("animate-slide-in-right");
            intro!.offsetHeight;
            intro!.classList.add("animate-slide-in-right");

            aboutDetails!.classList.remove("animate-fade-up");
            aboutDetails!.offsetHeight;
            aboutDetails!.classList.add("animate-fade-up");
        }
    }, [isSelected]);
    
    return(
        <>
            <section id="about" className="relative">
                <div className="flex justify-center w-full"> 
                    <div className="flex flex-row justify-between w-[70%] h-[100vh] bg-[#FDF7F1]">
                        
                        <div className="flex flex-col items-start w-[70%]">
                            <div id="intro" className="font-bowlby text-[5rem] leading-[7rem] px-10 -skew-x-12 doodle-border animate-slide-in-right bg-white shadow-green mt-20">
                                <h2 className="skew-x-12 ">Nice to meet you!</h2>
                            </div>

                            <div id="aboutDetails" className="font-inter font-medium text-[2rem] mt-[5rem] animate-fade-up animate-delay-800">
                                <p>
                                    My name is Ashton Winters, and I'm a frontend developer.
                                </p>
                                <p className="mt-10">
                                    When I'm not writing code, you can find me playing board games, working out, or writing at a coffee shop.  
                                </p>
                            </div>    
                        </div>

                        <div className="flex items-center">
                            <Image className="" height={2905/3.5} width={890/3.5} alt="Full body drawing" src='/assets/images/fullbody.png' />
                        </div>
                    </div>
                </div>

                <ScrollArrow handleSection={handleSection} location="experience" up={false} />
            </section>
        </>
    )
}