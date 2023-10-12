import { useState, useEffect, useRef, use } from "react";
import FloatingImages from "./FloatingImages";
import ScrollArrow from "./ScrollArrow";
import useNavBarHeight from "@/app/hooks/useNavBarHeight";

type Props = {
    handleSection: Function,
    isSelected: Boolean,
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
            <section id="home" className="relative h-[100dvh]">
                <div className="absolute top-0 left-0 z-0 pt-[60px] w-full">
                    <FloatingImages />
                </div>

                <div className="flex flex-col items-center justify-center h-full w-full z-10 pt-[60px]">
                    <div id="introBlock" className="mt-auto mb-auto bg-white doodle-border shadow-green-sm md:shadow-green z-10 w-[60%] px-[6rem] py-[1rem] md:py-[2rem]">
                        <div className='flex flex-col items-center justify-center'>
                            <h1 id="name" className="font-bowlby text-center text-[2rem] iphone:text-[2.5rem] md:text-[4rem] lg:text-[6.5rem] leading-[2rem] iphone:leading-[3rem] md:leading-[3.5rem] lg:leading-[7rem] mb-7 animate-wiggle animate-once animate-ease-out">
                                Ashton Winters
                            </h1>

                            <h2 id="headingDetails" className="flex flex-col md:flex-row justify-between font-inter font-medium text-center text-[1rem] iphone:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] md:leading-[1.5rem] lg:leading-[2rem] animate-fade-up animate-delay-800 animate-ease-out">
                                <span className="mb-5 md:mb-0">
                                    Frontend Developer
                                </span>
                     
                                <span className="mb-5 md:mb-0 md:border-l-[3px] md:border-r-[3px] md:border-black md:px-5 md:mx-5">
                                    Technical Manager
                                </span>
                         
                                <span>
                                    Software Engineer
                                </span>
                            </h2>
                        </div>                    
                    </div>

                    <ScrollArrow handleSection={handleSection} location="about" up={false} />
                </div>
            </section>
        </>
    )
}