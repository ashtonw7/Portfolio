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
            <section id="about" className="flex flex-col justify-center items-center h-[100svh] bigphone:h-[100vh]">
                <div className="flex flex-col w-[80%] aboutbreak4:w-[70%] justify-between h-[95svh] bigphone:h-[95vh] items-center">
                    <div className="flex flex-1 flex-col aboutbreak3:flex-row flex-grow items-center justify-center">            
                        
                        <div className="flex flex-col min-w-[70%] mt-5 expbreak32:mt-0">
                            <div id="intro" className="flex justify-center items-start bg-white aboutbreak3:mr-auto mb-5 doodle-border shadow-green-sm aboutbreak3:shadow-green -skew-x-12 animate-slide-in-right">
                                <h2 className="border-b mb-[-1px] border-transparent font-bowlby md:text-left text-[1.5rem] iphone:text-[1.8rem] aboutbreak2:text-[2rem] aboutbreak4:text-[2.8rem] aboutbreak:px-[1.5rem]">
                                    Nice to meet you!
                                </h2>
                            </div>

                            <div className="flex flex-row justify-between">
                                <div id="aboutDetails" className="max-w-[70%] font-inter font-medium bigphone:text-[1.3rem] aboutbreak3:text-[1.4rem] aboutbreak4:text-[1.6rem] animate-fade-up animate-duration-700 animate-delay-[300ms]">
                                    <p>
                                        {"My name is Ashton Winters, and I'm a developer."}
                                    </p>
                                    <p className="mt-2 bigphone:mt-5">
                                        {"I'm experienced in web dev, Python, and low-level programming. In my spare time, I make web games for game jams. Check them out and more at the links below."}  
                                    </p>
                                    <p className="mt-2 bigphone:mt-5">
                                        {"When I'm not coding, you can find me playing board games, working out, or writing at a coffee shop."}  
                                    </p>
                                </div>
                                
                                <img className="flex aboutbreak3:hidden max-h-[55svh] bigphone:max-h-[55svh]" alt="A full body doodle of Ashton Winters." src="/assets/images/fullbody.png" />
                            </div>
                        </div>
                        <div className="hidden aboutbreak3:flex aboutbreak3:mt-[3rem] justify-center items-center">
                            <img className="max-h-[75svh] bigphone:max-h-[75vh] w-auto mx-[10rem]" alt="A full body doodle of Ashton Winters." src="/assets/images/fullbody.png" />
                        </div>
                    </div>

                    <ScrollArrow handleSection={handleSection} location="experience" up={false} />
                </div>
            </section>
        </>
    )
}
