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
            <section id="projects" className="relative"> 
                <div className="flex flex-row items-center justify-around w-full h-[100vh] bg-[#FDF7F1]">

                </div>
                <ScrollArrow handleSection={handleSection} location="contact" up={false} />
            </section>
        </>
    )
}