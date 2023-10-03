import { useEffect } from "react";

import ScrollArrow from "./ScrollArrow";

type Props = {
    handleSection: Function,
    isSelected: Boolean
};

export default function Contact({ handleSection, isSelected }: Props){
    useEffect(() => {
        console.log("CONTACT", isSelected)
    }, [isSelected]);

    return(
        <>
            <section id="contact" className="relative"> 
                <div className="flex flex-row items-center justify-around w-full h-[100vh] bg-gradient-to-b bg-[#FDF7F1]">
                </div>
                <ScrollArrow handleSection={handleSection} location="home" up={true} />
            </section>
        </>
    )
}