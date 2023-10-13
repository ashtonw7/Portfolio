import Link from "next/link"

export default function Proficiences(){
    return(
        <>
            <div className="flex flex-row justify-start space-x-4">
                <div className="flex flex-col items-center lg:mt-5">
                    <svg className="inline lg:hidden" width="40" height="40" viewBox="0 0 24 24">
                        <path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm4.256 11h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/>
                    </svg>
                    <svg className="hidden lg:inline" width="50" height="50" viewBox="0 0 24 24">
                        <path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm4.256 11h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/>
                    </svg>
                    <Link href="/files/Winters_Resume.pdf" target="_blank" className="hover:cursor-pointer text-center hover:text-[#284d47] text-[#00917B] bigphone:text-[1.3rem] aboutbreak3:text-[1.4rem] aboutbreak4:text-[1.6rem] font-inter font-semibold underline underline-offset-2">
                        Resume
                    </Link>
                </div>

                <div className="flex flex-col items-center lg:mt-5">
                    <svg className="inline lg:hidden" width="40" height="40" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <svg className="hidden lg:inline" width="50" height="50" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <Link href="https://www.linkedin.com/in/ashtonwinters/" target="_blank" className="hover:cursor-pointer text-center hover:text-[#284d47] text-[#00917B] bigphone:text-[1.3rem] aboutbreak3:text-[1.4rem] aboutbreak4:text-[1.6rem] font-inter font-semibold underline underline-offset-2">
                        LinkedIn
                    </Link>
                </div>

                <div className="flex flex-col items-center lg:mt-5">
                    <svg className="inline lg:hidden" width="40" height="40" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <svg className="hidden lg:inline" width="50" height="50" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <Link href="https://github.com/ashtonw7" target="_blank" className="hover:cursor-pointer text-center hover:text-[#284d47] text-[#00917B] bigphone:text-[1.3rem] aboutbreak3:text-[1.4rem] aboutbreak4:text-[1.6rem] font-inter font-semibold underline underline-offset-2">
                        GitHub
                    </Link>
                </div>

                <div className="flex flex-col items-center lg:mt-5">
                    <svg className="inline lg:hidden" width="40" height="40" viewBox="0 0 24 24">
                        <path d="M23.908 16.041l-2.344-9.66c-.205-.821-.943-1.381-1.789-1.381h-15.551c-.845 0-1.582.56-1.787 1.381l-2.344 9.66c-.064.251-.093.491-.093.716 0 1.38 1.095 2.243 2.287 2.243.632 0 1.292-.243 1.83-.781l2.406-2.87c.44.643 1.238 1.007 2.077 1.007 1.712 0 2.139-1.542 3.403-1.542 1.099 0 1.615 1.542 3.457 1.542.84 0 1.578-.364 2.02-1.007l2.404 2.87c.537.538 1.197.781 1.83.781 1.191 0 2.286-.863 2.286-2.242 0-.226-.028-.465-.092-.717zm-8.158-7.291c.414 0 .75.335.75.75s-.336.75-.75.75-.75-.335-.75-.75.336-.75.75-.75zm-8.75 3.25h-1v-2h-2v-1h2v-2h1v2h2v1h-2v2zm1.658 3.005c-.726 0-1.316-.59-1.316-1.316 0-.726.59-1.316 1.316-1.316.726 0 1.316.59 1.316 1.316 0 .726-.591 1.316-1.316 1.316zm4.342-4.005h-2v-1h2v1zm2.344 4.005c-.727 0-1.316-.59-1.316-1.316 0-.726.59-1.316 1.316-1.316.725 0 1.314.59 1.314 1.316 0 .726-.59 1.316-1.314 1.316zm2.156-3.005c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75z"/>
                    </svg>
                    <svg className="hidden lg:inline" width="50" height="50" viewBox="0 0 24 24">
                        <path d="M23.908 16.041l-2.344-9.66c-.205-.821-.943-1.381-1.789-1.381h-15.551c-.845 0-1.582.56-1.787 1.381l-2.344 9.66c-.064.251-.093.491-.093.716 0 1.38 1.095 2.243 2.287 2.243.632 0 1.292-.243 1.83-.781l2.406-2.87c.44.643 1.238 1.007 2.077 1.007 1.712 0 2.139-1.542 3.403-1.542 1.099 0 1.615 1.542 3.457 1.542.84 0 1.578-.364 2.02-1.007l2.404 2.87c.537.538 1.197.781 1.83.781 1.191 0 2.286-.863 2.286-2.242 0-.226-.028-.465-.092-.717zm-8.158-7.291c.414 0 .75.335.75.75s-.336.75-.75.75-.75-.335-.75-.75.336-.75.75-.75zm-8.75 3.25h-1v-2h-2v-1h2v-2h1v2h2v1h-2v2zm1.658 3.005c-.726 0-1.316-.59-1.316-1.316 0-.726.59-1.316 1.316-1.316.726 0 1.316.59 1.316 1.316 0 .726-.591 1.316-1.316 1.316zm4.342-4.005h-2v-1h2v1zm2.344 4.005c-.727 0-1.316-.59-1.316-1.316 0-.726.59-1.316 1.316-1.316.725 0 1.314.59 1.314 1.316 0 .726-.59 1.316-1.314 1.316zm2.156-3.005c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75z"/>
                    </svg>
                    <Link href="https://itch.io/profile/yungcereal" target="_blank" className="hover:cursor-pointer hover:text-[#284d47] text-center text-[#00917B] bigphone:text-[1.3rem] aboutbreak3:text-[1.4rem] aboutbreak4:text-[1.6rem] font-inter font-semibold underline underline-offset-2">
                        itch.io
                    </Link>
                </div>
            </div>
        </>
    )
}