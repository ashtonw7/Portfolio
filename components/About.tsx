import { useEffect, useState } from "react";
import useNavBarHeight from "@/app/hooks/useNavBarHeight";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

import Image from "next/image";
import ScrollArrow from "./ScrollArrow";

type Props = {
    handleSection: Function,
    isSelected: Boolean,
    height: number,
    width: number,
    topPadding: number,
    arrowHeight: number,
    arrowWidth: number,
};

export default function About({ handleSection, isSelected, height, width, topPadding, arrowHeight, arrowWidth }: Props){
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
            <section id="about" className="relative h-[100dvh]">
                <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start w-[80%] md:w-[70%] h-full pt-[60px]"> 
                        {/* DESKTOP */}

                        <div className="flex flex-col justify-start md:justify-between md:w-[70%] bg-[#FDF7F1]">
                            
                            <div id="intro" className="font-bowlby text-[1.7rem] md:text-[5rem] md:leading-[7rem] px-2 md:px-10 -skew-x-12 doodle-border animate-slide-in-right bg-white shadow-green-sm md:shadow-green mt-[3.5rem] md:mt-20">
                                <h2 className="skew-x-12 ">Nice to meet you!</h2>
                            </div>

                            <div id="aboutDetails" className="font-inter font-medium text-[1.4rem] md:text-[2rem] mt-[3rem] md:mt-[5rem] animate-fade-up animate-delay-800">
                                <div className="flex flex-row">
                                    <div>
                                        <p>
                                            My name is Ashton Winters, and I'm a frontend developer.
                                        </p>
                                        <p className="mt-5 md:mt-10">
                                            When I'm not writing code, you can find me playing board games, working out, or writing at a coffee shop.  
                                        </p>
                                    </div>
                                    <Image className=" md:hidden" height={125} width={125} alt="Full body drawing" src='/assets/images/fullbody.png' />
                                </div>
                            </div>

                        </div>
                        
                        <div className="items-center hidden md:flex mt-20">
                                <Image className="" height={250} width={250} alt="Full body drawing" src='/assets/images/fullbody.png' />
                        </div>
                    </div>
                </div>

                <span className="md:hidden">    
                    <ScrollArrow handleSection={handleSection} location="job1" up={false} height={arrowHeight} width={arrowWidth} />
                </span>
                <span className="hidden md:inline">
                    <ScrollArrow handleSection={handleSection} location="experience" up={false} height={arrowHeight} width={arrowWidth} />
                </span>
            </section>
        </>
    )
}