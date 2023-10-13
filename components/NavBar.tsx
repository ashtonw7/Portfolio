import { useState } from "react";

type Props = {
    handleSection: Function;
};

export default function NavBar({ handleSection }: Props){
    function scrollTo(location: string) {
        document.getElementById(location)!.scrollIntoView({block: "center"});
        handleSection(location);
    };

    const [open, setOpen] = useState(false);

    return(
        <>
            <nav id="navbar" className="flex flex-row w-full justify-between px-[1rem] bigphone:px-[3rem] lg:px-[10rem] text-sm iphone:text-md big:text-lg fixed top-0 z-20 bg-[#fff5d8] font-inter font-medium h-[5svh] bighpone:[5vh]">
                    <button onClick={() => scrollTo("home")}>
                        Home
                    </button>
                    <button onClick={() => scrollTo("about")}>
                        About
                    </button>
                    <button onClick={() => scrollTo("experience")}>
                        Experience
                    </button>
                    <button onClick={() => scrollTo("projects")}>
                        Projects
                    </button>
                    <button onClick={() => scrollTo("contact")}>
                        Contact
                    </button>
            </nav>
        </>    
    )
}