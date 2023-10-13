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
            let imageSmall = document.getElementById("imageSmall");
            let imageBig = document.getElementById("imageBig");


            projectTitle!.classList.remove("animate-slide-in-right");
            projectTitle!.offsetHeight;
            projectTitle!.classList.add("animate-slide-in-right");

            details!.classList.remove("animate-fade-up");
            details!.offsetHeight;
            details!.classList.add("animate-fade-up");
        }
    }, [isSelected]);
    
    return(
        <>
            <section id="projects" className="flex flex-col justify-center items-center h-[100svh] bigphone:h-[100vh]">
                <div className="flex flex-col w-[90%] bigphone:w-[80%] aboutbreak4:w-[70%] justify-between h-[95svh] bigphone:h-[95vh] items-center">
                    <div className="flex flex-1 flex-col aboutbreak3:flex-row flex-grow items-center justify-center">            
                        <div className="flex flex-col items-center">
                            <div id="projectTitle" className="flex justify-center items-start bg-white px-1 ml-auto bigphone:ml-0 mr-auto mb-5 doodle-border shadow-green-sm aboutbreak3:shadow-green -skew-x-12 animate-slide-in-right">
                                <h2 className="border-b mb-[-1px] border-transparent font-bowlby md:text-left text-[1.5rem] iphone:text-[1.8rem] aboutbreak2:text-[2rem] aboutbreak4:text-[2.8rem] aboutbreak:px-[1.5rem]">
                                    Fat Puppet
                                </h2>
                            </div>

                            <div className="flex flex-col aboutbreak3:flex-row items-center justify-between w-full">
                                <div id="imageSmall" className="flex justify-center aboutbreak3:hidden max-h-[20svh] bigphone:max-h-[30svh]">
                                    <img className="w-auto h-full" alt="A desktop and mobile view demonstration of www.fatpuppet.com." src="/assets/images/fatpuppet.png" />
                                </div>

                                <div id="details" className="max-w-[90%] font-inter font-medium bigphone:text-[1.3rem] aboutbreak4:text-[1.6rem] animate-fade-up animate-duration-700 animate-delay-[300ms]">
                                    <p>
                                        {"I was looking for a solution that was fast, fully customizable, and easy to use. Ultimately, I decided to just build it myself!"}
                                    </p>
                                    <p className="mt-2 bigphone:mt-5">
                                        {"It features automated page creation for new posts, satistifies accesibility requirements, and is fully responsive. "}  
                                    </p>
                                    <p className="mt-2 bigphone:mt-5">
                                        {"Most importantly, it's the place where I can dump my humor writing. If you want a chuckle, feel free to "}
                                        <a target="_blank" className="mt-2 md:mt-10 text-[#00917B] underline hover:cursor-pointer hover:text-[#2a524c] text-center" href="https://www.fatpuppet.com">check it out!</a>
                                    </p>
                                </div>                                
                            </div>
                        </div>
                        <div id="imageBig" className="hidden aboutbreak3:flex aboutbreak3:mt-[3rem] min-w-[30%] justify-center items-center">
                            <img className="w-auto h-full" alt="A desktop and mobile view demonstration of www.fatpuppet.com." src="/assets/images/fatpuppet.png" />
                        </div>
                    </div>
                    <ScrollArrow handleSection={handleSection} location="contact" up={false} />
                </div>
            </section>
        </>
    )
}