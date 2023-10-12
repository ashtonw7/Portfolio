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
            <div className="flex flex-col items-center w-full expbreak32:w-auto smallphone:py-2 expbreak32:py-0 bg-white doodle-border shadow-green-sm px-3 expbreak3:px-8 animate-fade-up h-full">
                <div className="flex w-full h-full expbreak32:min-w-0 justify-start expbreak32:justify-center flex-row md:flex-col">
                    <div className="flex flex-col lg:min-h-[50%] items-center justify-end expbreak32:min-w-0">
                        <h2 className="hidden expbreak32:inline text-xl md:text-3xl font-bowlby font-extrabold text-center">
                            { place }
                        </h2>
                        <div className="flex items-center justify-center my-2 shadow-green-sm border-[5px] border-black rounded-[500px]">
                            <img src={image} height="80" width="80" alt={image} className="inline xl:hidden pt-2 pb-1 px-2" />
                            <img src={image} height="120" width="120" alt={image} className="hidden xl:inline expbreak32:hidden pt-6 pb-4 px-6" />
                            <img src={image} height="200" width="200" alt={image} className="hidden expbreak32:inline pt-6 pb-4 px-6" />
                        </div>
                        <h3 className="hidden expbreak32:inline text-[1rem] md:text-[1.2rem] font-inter font-extrabold text-center whitespace-pre-wrap">
                            { title }
                        </h3>
                    </div>
                    <div className="hidden flex-grow expbreak32:inline text-xl aboutbreak32:text-2xl font-inter font-semi mt-1 expbreak3:mt-3 whitespace-pre-wrap px-2 py-5">
                        { blurb }
                    </div>
                    <div className="flex flex-col flex-grow justify-center items-center leading-[1rem] expbreak32:hidden">
                        <h2 className="font-bowlby text-md text-center">
                            { place } 
                        </h2>
                        <button className=" bg-[#00917B] text-white font-inter text-md xler:text-xl font-bold rounded-md px-4 py-2 mt-1 md:max-w-[30%]" onClick={callShowModal}>
                            DETAILS
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}