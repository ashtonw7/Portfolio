import Image from "next/image";

type Props = {
    image: string;
    place: string;
    title: string;
    shortTitle: string;
    text: string[];
    showModal: Function;
};

export default function ExperienceCard({image, place, title, text, showModal}: Props){
    function callShowModal(){
        interface modalInfo {
            title: string;
            place: string;
            text: null
        }

        let modalInfo = {
            image: image,
            text: text,
            place: place,
            title: title
        }

        showModal(modalInfo);
    }
    
    let blurb = [];

    for (let i = 0; i < text.length; i++){
        if (i != 0){
            blurb.push(
                <p className="mt-2">
                    {text[i]}
                </p>
            )
        }
        else{
            blurb.push(
                <p>
                    {text[i]}
                </p>
            )
        }
    }
    
    return(
        <>
            <div className="flex flex-col items-center w-full expbreak32:w-auto smallphone:py-2 expbreak32:py-6 expbreak32:mr-10 bg-white doodle-border shadow-green-sm expbreak32:shadow-green px-3 expbreak3:px-8 animate-fade-up h-full">
                <div className="flex w-full h-full expbreak32:min-w-0 justify-start expbreak32:justify-start flex-row md:flex-col">
                    <div className="flex flex-col items-center min-w-[30%] smallphone:min-w-[50%] expbreak32:min-w-0">
                        <h2 className="hidden expbreak32:inline text-xl md:text-3xl font-bowlby font-extrabold text-center">
                            { place }
                        </h2>
                        <Image src={image} height="80" width="80" alt={image} className="inline iphone:hidden mr-4 my-2 p-3 shadow-green-sm border-[5px] border-black rounded-[500px]" />
                        <Image src={image} height="120" width="120" alt={image} className="hidden iphone:inline expbreak32:hidden mr-4 my-2 p-3 shadow-green-sm border-[5px] border-black rounded-[500px]" />
                        <Image src={image} height="200" width="200" alt={image} className="hidden expbreak32:inline my-2 p-3 shadow-green-sm border-[5px] border-black rounded-[500px]" />
                        <h3 className="hidden expbreak32:inline text-[1rem] md:text-[1.2rem] font-inter font-extrabold text-center whitespace-pre-wrap">
                            { title }
                        </h3>
                    </div>
                    <div className="hidden expbreak32:inline text-lg md:text-xl font-inter font-semi mt-2 expbreak3:mt-3 whitespace-pre-wrap px-2 py-5">
                        { blurb }
                    </div>
                    <div className="flex flex-col flex-grow justify-center items-center leading-[1rem] expbreak32:hidden">
                        <h2 className="font-bowlby text-md text-center">
                            { place } 
                        </h2>
                        <button className=" bg-[#00917B] text-white font-inter font-bold rounded-md px-4 py-2 mt-1 md:max-w-[30%]" onClick={callShowModal}>
                            DETAILS
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}