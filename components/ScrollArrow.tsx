type Props = {
    location: string;
    up: boolean;
    handleSection: Function;
    height: number;
    width: number;
};

import { InferGetServerSidePropsType } from "next";

export default function ScrollArrow({ location, up, handleSection, height, width }: Props){
    function scrollTo() {
        document.getElementById(location)!.scrollIntoView({block: "center"});
        handleSection(location);
    };

    return(
        <>
            <div className="absolute bottom-0 w-full justify-center items-end">
                <button onClick={() => scrollTo()} className="w-full mb-5">
                    <div className="flex justify-center">
                        {up ?
                            <svg className="fill-black hover:fill-[#2c2c2c] animate-bounce hover:cursor-pointer" strokeWidth="1.5" width={width} height={height} viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm4.843-8.211c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291z" />
                            </svg> 
                            :
                            <svg className="fill-black hover:fill-[#2c2c2c] animate-bounce hover:cursor-pointer" strokeWidth="1.5" width={width} height={height} viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm4.843 8.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291z" />
                            </svg>

                        }
                    </div>
                </button>
            </div>
        </>
    )
}