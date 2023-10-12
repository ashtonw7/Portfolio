import { useEffect, useRef } from "react";

type Props = {
    closeModal: Function,
    place: string,
    title: string,
    text: [string],
    image: string,
};

export default function DetailsModal({ closeModal, place, title, text, image }: Props){
    let blurb = [];

    for (let i = 0; i < text.length; i++){
        if (i > 0){
            blurb.push(
                <p className="" key={i}>
                    {text[i]}
                </p>
            );
        }
        else {
            blurb.push(
                <p className="mt-2" key={i}>
                    {text[i]}
                </p>
            );
        }
    }
    
    return(
        <>
            <div className="fixed top-0 left-0 h-full w-full bg-black z-20 opacity-20" />
            <section id="detailModal" className="fixed top-0 left-0 w-full h-full z-20">
                <div className="flex justify-center items-center h-full w-full">
                    <div className="flex flex-col justify-center items-center w-[90%] md:w-[85%] h-[90%] border-black border-[10px] bg-white rounded-sm px-3">
                        <div className="flex flex-col justify-start items-center md:w-[70%]">
                            <h2 className="flex justify-center text-center w-full font-bowlby text-2xl iphone:text-3xl md:text-6xl">
                                {place}
                            </h2>
                            <img className='max-w-[150px] shadow-green-sm border-[5px] my-2 iphone:my-5 p-3 border-black rounded-[500px]' src={image} />
                            <h3 className="font-inter font-medium text-center text-xl md:text-2xl whitespace-pre-wrap mb-2 iphone:mb-5 leading-5">
                                {title}
                            </h3>
                            
                            <div className="flex flex-col text-left font-inter text-md md:text-2xl iphone:text-lg">
                                {blurb}
                            </div>
                        </div>
                        <div className="flex min-h-[10%] items-center">
                            <button className="rounded-md font-inter font-bold text-white bg-[#00917B] px-4 py-2 md:text-2xl" onClick={() => closeModal()}>
                                CLOSE
                            </button>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}
