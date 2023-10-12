import { useEffect } from "react";

import ScrollArrow from "./ScrollArrow";

type Props = {
    handleSection: Function,
    isSelected: Boolean
};

export default function Contact({ handleSection, isSelected }: Props){
    useEffect(() => {
        if (isSelected){
            let connect = document.getElementById("connect");
            let email = document.getElementById("email");

            connect!.classList.remove("animate-slide-in-right");
            connect!.offsetHeight;
            connect!.classList.add("animate-slide-in-right");

            email!.classList.remove("animate-fade-up");
            email!.offsetHeight;
            email!.classList.add("animate-fade-up");
        }
    }, [isSelected]);

    return(
        <>
            <section id="contact" className="flex justify-center items-end w-full h-[100dvh]">
                <div className="flex flex-col max-w-[80%] h-[95%] justify-start items-center">
                    <div className="flex flex-col w-full h-full items-center justify-center mb-[10rem]">
                        <div id="connect" className="flex flex-col w-full bg-white aboutbreak3:mt-[2rem] doodle-border shadow-green-sm aboutbreak3:shadow-green -skew-x-12 animate-slide-in-right">
                            <h2 className="font-bowlby text-center text-[1.5rem] iphone:text-[1.8rem] aboutbreak2:text-[2.3rem] aboutbreak4:text-[2.8rem] md:text-[3rem] aboutbreak:px-[1.5rem]">
                                {"Let's Connect!"}
                            </h2>
                        </div>
                        <p id="email" className="font-inter font-medium text-[1.3rem] bigphone:text-[1.6rem] aboutbreak3:text-[2.2rem] aboutbreak4:text-[2.7rem] mt-10 aniamte-fade-up animate-duration-700 animate-delay-[500ms]">
                            Shoot me an email at <a href="mailto:ashton.winters@aya.yale.edu" className="mt-2 md:mt-10 text-[#00917B] underline hover:cursor-pointer hover:text-[#2a524c] text-center">ashton.winters@aya.yale.edu</a>
                        </p>
                    </div>
                    <ScrollArrow handleSection={handleSection} location="home" up={true} />
                </div>
            </section>
        </>
    )
}