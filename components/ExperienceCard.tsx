import Image from "next/image";

type Props = {
    image: string;
    place: string;
    title: string;
    text: string[];
};

export default function ExperienceCard({image, place, title, text}: Props){
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
            <div className="flex flex-col items-center bg-white doodle-border shadow-green h-[70%] w-[30rem] px-8 animate-fade-up">
                <h2 className="mt-6 text-3xl font-bowlby font-extrabold text-center">
                    { place }
                </h2>
                <Image src={image} height="200" width="200" alt={image} className="my-2 p-3 shadow-green-sm border-[5px] border-black rounded-[500px]" />
                <h3 className="text-[1.4rem] font-inter font-extrabold text-center whitespace-pre-wrap">
                    { title }
                </h3>
                <div className="text-xl font-inter font-semi mt-5 whitespace-pre-wrap">
                    { blurb }
                </div>
            </div>
        </>
    )
}