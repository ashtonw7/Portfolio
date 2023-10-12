import Link from "next/link"
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
            <nav id="navbar" className="flex flex-row w-full justify-between px-[1rem] bigphone:px-[3rem] lg:px-[10rem] text-sm iphone:text-md big:text-lg fixed top-0 z-20 bg-[#fff5d8] font-inter font-medium h-[5%]">
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

            {/* Mobile */}
            {/* <div className="items-left justify-left flex flex-col sticky top-2 ml-2 z-20 big:hidden" onClick={() => {setOpen(!open)}}>
                  <svg className={`w-7 h-7 ${open ? "hidden" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <svg className={`w-7 h-7 ${open ? "" : "hidden"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  
                  <nav className={`${open ? "contents" : "hidden"} border-t-4 border-b-4 border-black`}>
                    <div className="flex flex-col ml-2">

                        <div className="text-left mr-1 font-inter text-[#202020] hover:text-black my-2 text-base" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <button onClick={() => scrollTo("home")}>
                                Home
                            </button>
                        </div>

                        <div className="text-left mr-1 font-inter text-[#202020] hover:text-black my-2 text-base" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <button onClick={() => scrollTo("about")}>
                                About
                            </button>
                        </div>

                        <div className="text-left mr-1 font-inter text-[#202020] hover:text-black my-2 text-base" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <button onClick={() => scrollTo("experience")}>
                                Experience
                            </button>
                        </div>
                        <div className="text-left mr-1 font-inter text-[#202020] hover:text-black my-2 text-base" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <button onClick={() => scrollTo("projects")}>
                                Projects
                            </button>
                        </div>
                        <div className="text-left mr-1 font-inter text-[#202020] hover:text-black my-2 text-base" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <button onClick={() => scrollTo("contact")}>
                                contact
                            </button>
                        </div>
                    </div>
                </nav>
            </div> */}
        </>    
    )
}