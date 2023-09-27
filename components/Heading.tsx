import { useState, useEffect } from "react";
import FloatingImages from "./FloatingImages";
import ScrollArrow from "./ScrollArrow";

export default function Heading(){
    let imageLink = '/assets/images/' + 'aliens' + '.png';

    return(
        <>
            <div className='relative w-full h-[94.2vh] bg-[#FDF7F1]'>
                <FloatingImages />

                <div id="introBlock" className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-70%] z-10 px-6 py-8 bg-white border-[12px] border-black
                [border-top-left-radius:255px_5px] [border-top-right-radius:5px_255px] [border-bottom-left-radius:5px_255px] [border-bottom-right-radius:255px_5px]">
                    <div className='flex flex-col'>
                        
                        <h1 className="font-bowlby text-center
                        text-[6.5rem] leading-[7rem] mb-7
                        animate-wiggle animate-once animate-ease-out">
                            Ashton Winters
                        </h1>

                        <h2 className="flex justify-between
                        font-maven font-medium text-center
                        text-[2rem] leading-[2rem]
                        animate-fade-up animate-delay-1000 animate-ease-out">
                            <span>
                                Frontend Developer
                            </span>
                            <span>
                                |    
                            </span> 
                            <span>
                                Technical Manager
                            </span>
                            <span>
                                |
                            </span>
                            <span>
                                Software Developer
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
            <ScrollArrow />
        </>
    )
}