import { useEffect } from "react";

import ScrollArrow from "./ScrollArrow";

type Props = {
    handleSection: Function,
    isSelected: Boolean
};

export default function Experience({ handleSection, isSelected }: Props){
    useEffect(() => {
        if (isSelected){
            let projectTitle = document.getElementById("projectTitle");
            let details = document.getElementById("details");
            let image = document.getElementById("image");

            projectTitle!.classList.remove("animate-slide-in-right");
            projectTitle!.offsetHeight;
            projectTitle!.classList.add("animate-slide-in-right");

            details!.classList.remove("animate-fade-up");
            details!.offsetHeight;
            details!.classList.add("animate-fade-up");

            image!.classList.remove("animate-jump-in");
            image!.offsetHeight;
            image!.classList.add("animate-jump-in")
        }
    }, [isSelected]);
    
    return(
        <>
            <section id="projects" className="flex justify-center items-end w-full h-[100svh]">
                <div className="flex flex-col w-[80%] aboutbreak4:w-[70%] h-[95%] justify-between items-center">
                    <div className="flex flex-col h-full w-full expbreak32:w-auto justify-start">
                        <div id="projectTitle" className="flex justify-center bg-white aboutbreak3:mr-auto mb-5 aboutbreak3:mt-[2rem] aboutbreak2:mb-10 md:mb-0 doodle-border shadow-green-sm aboutbreak3:shadow-green -skew-x-12 animate-slide-in-right">
                            <h2 className="font-bowlby md:text-left text-[1.5rem] iphone:text-[1.8rem] aboutbreak2:text-[2.3rem] aboutbreak4:text-[2.8rem] md:text-[3rem] aboutbreak:px-[1.5rem]">
                                Fat Puppet
                            </h2>
                        </div>
                        <div className="flex flex-col xl:flex-row justify-center items-center space-y-3 expbreak32:space-y-10 sm:mt-[0.5rem] xl:mt-[3rem] expbreak32:mb-[3rem]">
                            <div id="details" className="font-inter font-medium text-[0.7rem] smallphone:text-[1.2rem] iphone:text-[1.3rem] bigphone:text-[1.5rem] xl:text-[2.2rem] aboutbreak4:text-[2.7rem] animate-fade-up animate-duration-700 animate-delay-[500ms]">
                                <p>
                                    Blogging platform developed using Next.js and Tailwind.
                                </p>
                                <p className="mt-2 md:mt-10">    
                                Features automated page creation for new posts, satistifies accesibility requirements, and is fully responsive.   
                                </p>
                                <p className="mt-2 md:mt-10">
                                    This is also where I regularly post humor pieces.   
                                    Feel free to <a target="_blank" className="mt-2 md:mt-10 text-[#00917B] underline hover:cursor-pointer hover:text-[#2a524c] text-center" href="https://www.fatpuppet.com">check it out!</a>
                                </p>
                            </div>
                            <div id="image" className="animate-jump-in animate-duration-[600ms] animate-delay-[900ms] animate-ease-in-out">
                                <img className="max-w-[30svh] expbreak32:max-w-[50svh] h-auto mr-3" src="/assets/images/fatpuppet.png" />
                            </div>
                        </div>
                    </div>
                    <ScrollArrow handleSection={handleSection} location="contact" up={false} />
                </div>
            </section>
        </>
    )
}