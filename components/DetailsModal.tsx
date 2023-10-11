import { useEffect, useRef } from "react";

type Props = {
    openModal: Function,
    closeModal: Function,
    text: string[];
};

export default function DetailsModal({ openModal, closeModal, text }: Props){
    return(
        <>
            <div className="fixed top-0 left-0 h-full w-full bg-black z-20 opacity-20" />
            <section id="detailModal" className="fixed top-0 left-0 w-full h-full z-20">
                <div className="flex justify-center items-center h-full w-full">
                    <div className="flex flex-col justify-center items-center w-[90%] h-[90%] border-black border-[10px] bg-white rounded-sm px-3">
                        <div className="flex flex-col justify-start items-center flex-grow">
                            <h2 className="font-bowlby text-xl mt-[3rem]">
                                Yale University
                            </h2>
                            <img className='max-w-[100px] shadow-green-sm border-[5px] border-black rounded-[500px]' src='/assets/images/aliens.png' />
                            <h3 className="font-inter font-medium text-center text-lg whitespace-pre-wrap mb-5">
                                B.S. Computer Science
                                <br/>
                                Japanese Language Certificate
                            </h3>
                            <p>
                            "I graduated in 2020 from Yale University.",asdflkjas;lfkjasd;lk
                            </p>
                        </div>
                        <div className="flex items-end">
                            <button className="mb-5 rounded-sm font-inter font-bold text-white bg-[#00917B] px-10">
                                Close
                            </button>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}
