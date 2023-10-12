import { useEffect } from "react";

import ScrollArrow from "./ScrollArrow";

type Props = {
    handleSection: Function,
    isSelected: Boolean
};

export default function Experience({ handleSection, isSelected }: Props){
    useEffect(() => {
        console.log("EXPERIENCE", isSelected)
    }, [isSelected]);
    
    return(
        <>
            <section id="projects" className="flex justify-center items-end w-full h-[100dvh]">
                <div className="flex flex-col w-[80%] aboutbreak4:w-[70%] h-[95%] justify-between items-center">
                    <div className="flex flex-col h-full w-full expbreak32:w-auto justify-start">
                        <div className="flex justify-center w-full bg-white aboutbreak3:mr-auto mb-5 aboutbreak3:mt-[2rem] aboutbreak2:mb-10 md:mb-0 doodle-border shadow-green-sm aboutbreak3:shadow-green -skew-x-12 animate-slide-in-right">
                            <h2 className="font-bowlby md:text-left text-[1.5rem] iphone:text-[1.8rem] aboutbreak2:text-[2.3rem] aboutbreak4:text-[2.8rem] md:text-[3rem] aboutbreak:px-[1.5rem]">
                                Fat Puppet
                            </h2>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 sm:mt-[3rem] lg:mt-[3rem] expbreak32:mb-[3rem]">
                            <div className="font-inter font-medium text-[1rem] smallphone:text-[1.2rem] bigphone:text-[1.3rem] smallish:text-[1.5rem] aboutbreak3:text-[2.2rem] aboutbreak4:text-[2.7rem] animate-fade-up">
                                <p>
                                    Blogging platform developed using Next.js and Tailwind.
                                </p>
                                <p className="mt2: md:mt-10">    
                                Features automated page creation for new posts, satistifies accesibility requirements, and is fully responsive.   
                                </p>
                                <p className="mt-2 md:mt-10">
                                    This is also where I regularly post humor pieces.   
                                    Feel free to <a target="_blank" className="mt-2 md:mt-10 text-[#00917B] underline hover:cursor-pointer hover:text-[#2a524c] text-center" href="https://www.fatpuppet.com">check it out!</a>
                                </p>
                            </div>
                            <img className="max-w-[40dvh] expbreak32:max-w-[50dvh] h-auto mr-3" src="/assets/images/fatpuppet.png" />
                        </div>
                    </div>
                    <ScrollArrow handleSection={handleSection} location="contact" up={false} />
                </div>
            </section>
        </>
    )
}