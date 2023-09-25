import Link from "next/link"

export default function NavBar(){
    return(
        <>
            <nav className="sticky top-0 z-20 bg-white">
                <div className="flex flex-row justify-between w-full py-[1rem] px-[5rem] min-[1080rem]:px-[10rem]
                shadow-md
                font-merriweather font-maven font-medium">
                    <Link href='/'>
                        About
                    </Link>
                    <Link href='/'>
                        Experience
                    </Link>
                    <Link href='/'>
                        Skills
                    </Link>
                    <Link href='/'>
                        Projects
                    </Link>
                    <Link href='/'>
                        Contact
                    </Link>
                </div>
            </nav>
        </>    
    )
}