import { useEffect, useState } from "react";

import ScrollArrow from "./ScrollArrow";

type Props = {
    handleSection: Function,
    isSelected: Boolean,
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
            <section id="about" className="flex justify-center items-end h-[100svh]">
                <div className="flex flex-col w-[80%] aboutbreak4:w-[70%] h-[95%] justify-between items-center">
                    <div className="flex flex-col aboutbreak3:flex-row flex-grow justify-center">            
                        
                        <div className="flex flex-col">
                            <div id="intro" className="flex justify-center bg-white aboutbreak3:mr-auto mb-5 aboutbreak3:mt-[2rem] aboutbreak2:mb-10 md:mb-0 doodle-border shadow-green-sm aboutbreak3:shadow-green -skew-x-12 animate-slide-in-right">
                                <h2 className="font-bowlby md:text-left text-[1.5rem] iphone:text-[1.8rem] aboutbreak2:text-[2.3rem] aboutbreak4:text-[2.8rem] md:text-[3rem] aboutbreak:px-[1.5rem]">
                                    Nice to meet you!
                                </h2>
                            </div>

                            <div className="flex flex-row">
                                <div id="aboutDetails" className="font-inter font-medium text-[1.3rem] bigphone:text-[1.6rem] aboutbreak3:text-[2.2rem] aboutbreak4:text-[2.7rem] animate-fade-up animate-duration-700 animate-delay-[500ms]">
                                    <p>
                                        {"My name is Ashton Winters, and I'm a frontend developer."}
                                    </p>
                                    <p className="mt-5 md:mt-10">
                                        {"When I'm not writing code, you can find me playing board games, working out, or writing at a coffee shop."}  
                                    </p>
                                </div>
                                <img className="flex aboutbreak3:hidden max-h-[55svh] bigphone:max-h-[60svh]" src="/assets/images/fullbody.png" />
                            </div>
                        </div>
                        <div className="hidden aboutbreak3:flex justify-center items-center">
                            <img className="max-h-[80svh] mx-[10rem]" src="/assets/images/fullbody.png" />
                        </div>
                    </div>
                    <ScrollArrow handleSection={handleSection} location="experience" up={false} />
                </div>
            </section>
        </>
    )
}