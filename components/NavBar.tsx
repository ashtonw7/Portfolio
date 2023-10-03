import Link from "next/link"
import { useState } from "react";

type Props = {
    handleSection: Function;
};

export default function NavBar({ handleSection }: Props){
    function scrollTo(location: string) {
        document.getElementById(location)!.scrollIntoView();
        handleSection(location);
    };

    const [open, setOpen] = useState(false);
    
    return(
        <>
            <nav className="fixed hidden big:absolute top-0 z-20 w-full bg-[#FDF7F1]">
                <div className="flex flex-row justify-between py-[1rem] px-[10rem] text-lg font-inter font-medium">
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
                </div>
            </nav>

            {/* Mobile */}
            <div className="flex items-center justify-left my-3 ml-3" onClick={() => {setOpen(!open)}}>
                  <svg className={`w-7 h-7 ${open ? "hidden" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <svg className={`w-7 h-7 ${open ? "" : "hidden"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </div>

            <div className={`content big:hidden`}>
                <nav className={`${open ? "content" : "hidden"} border-t`}>
                    <div className="flex flex-col ml-2">

                        <div className="text-left mr-1 font-merriweatherlight text-[#202020] hover:text-black my-2 text-base" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        <Link href="/" >
                            <p className='block'>Posts</p>
                        </Link>
                        </div>

                        <div className="text-left mr-1 font-merriweatherlight text-[#202020] hover:text-black my-2 text-base" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        <Link href="/about">
                            <p className='block'>About</p>
                        </Link>
                        </div>

                        <div className="text-left mr-1 font-merriweatherlight text-[#202020] hover:text-black my-2 text-base" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        <Link href="/contact">
                            <p className='block'>Contact</p>
                        </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>    
    )
}