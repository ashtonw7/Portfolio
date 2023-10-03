import { useEffect } from "react";
import Link from "next/link";

import ScrollArrow from "./ScrollArrow";
import ExperienceCard from "./ExperienceCard";

type Props = {
    handleSection: Function
    isSelected: Boolean
};

let text = 'Lorem ipsum dolor sit amet, consectetur a, tempor ipsum. Praesent in nibh lobortis, mollis lorem a, ultricies purus. Nulla sit amet pretium ligula. Nulla pulvinar euismod nisl, porta accumsan nibh condimentum at. In molestie lorem et purus elementum maximus.'

let yalePlace = "Yale University"
let yaleTitle = "B.S. Computer Science\nJapanese Language Certificate"
let yaleBlurb = [
    "I graduated in 2020 from Yale University.",
    "Along with computer science, I also learned Japanese got the chance to study abroad there during the summers.",
    "For my senior project, I combined my two interests to build online learning tools for the Japanese Department."
]

let airForcePlace = "US Air Force"
let airForceTitle = "AI Research Engineer\nDeputy Flight Commander"
let airForceBlurb = [
    "I commissioned into the Air Force out of ROTC as a Defensive Cyber Operator. I am separating in January.",
    "As an AI Research Engineer, I test and develop visualization tools for cutting edge machine-learning tools.",
    "I lead a team of 20 Airmen, ensuring their well-being and mission success."
]

export default function Experience({ handleSection, isSelected }: Props){
    useEffect(() => {
        console.log("EXPERIENCE", isSelected)
    }, [isSelected]);
    
    return(
        <>
            <section id="experience" className="relative"> 
                <div className="flex items-center justify-around h-[100vh] bg-[#FDF7F1]">

                    <div className="w-[90%] h-full flex flex-row justify-around items-center">

                        <ExperienceCard image='/assets/images/aliens.png' place={yalePlace} title={ yaleTitle } text={yaleBlurb} />
                        <ExperienceCard image='/assets/images/aliens.png' place={airForcePlace} title={airForceTitle} text={airForceBlurb} />
                        <div className="flex flex-col bg-white doodle-border shadow-green h-[70%] w-[30rem] px-8 animate-fade-up">
                            <div className="mt-6">
                                <h2 className="text-3xl font-bowlby font-extrabold">
                                    Links    
                                </h2>
                                <div className="flex flex-row items-center mt-5 ml-[-0.1rem]">
                                    <svg width="50" height="50" viewBox="0 0 24 24"><path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm4.256 11h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/></svg>
                                    <Link href="/files/Winters_Resume.pdf" target="_blank" className="ml-3 hover:cursor-pointer hover:text-[#284d47] text-[#00917B] text-xl font-inter font-semibold underline underline-offset-2">
                                        Download Resume
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-[-0.1rem]">
                                    <svg width="50" height="50" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    <Link href="https://www.linkedin.com/in/ashtonwinters/" target="_blank" className="ml-3 hover:cursor-pointer hover:text-[#284d47] text-[#00917B] text-xl font-inter font-semibold underline underline-offset-2">
                                        LinkedIn
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-[-0.1rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>                                    <Link href="https://github.com/ashtonw7" target="_blank" className="ml-3 hover:cursor-pointer hover:text-[#284d47] text-[#00917B] text-xl font-inter font-semibold underline underline-offset-2">
                                        GitHub
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-[-0.1rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M23.908 16.041l-2.344-9.66c-.205-.821-.943-1.381-1.789-1.381h-15.551c-.845 0-1.582.56-1.787 1.381l-2.344 9.66c-.064.251-.093.491-.093.716 0 1.38 1.095 2.243 2.287 2.243.632 0 1.292-.243 1.83-.781l2.406-2.87c.44.643 1.238 1.007 2.077 1.007 1.712 0 2.139-1.542 3.403-1.542 1.099 0 1.615 1.542 3.457 1.542.84 0 1.578-.364 2.02-1.007l2.404 2.87c.537.538 1.197.781 1.83.781 1.191 0 2.286-.863 2.286-2.242 0-.226-.028-.465-.092-.717zm-8.158-7.291c.414 0 .75.335.75.75s-.336.75-.75.75-.75-.335-.75-.75.336-.75.75-.75zm-8.75 3.25h-1v-2h-2v-1h2v-2h1v2h2v1h-2v2zm1.658 3.005c-.726 0-1.316-.59-1.316-1.316 0-.726.59-1.316 1.316-1.316.726 0 1.316.59 1.316 1.316 0 .726-.591 1.316-1.316 1.316zm4.342-4.005h-2v-1h2v1zm2.344 4.005c-.727 0-1.316-.59-1.316-1.316 0-.726.59-1.316 1.316-1.316.725 0 1.314.59 1.314 1.316 0 .726-.59 1.316-1.314 1.316zm2.156-3.005c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75z"/></svg>                                    <Link href="https://itch.io/profile/yungcereal" target="_blank" className="ml-3 hover:cursor-pointer hover:text-[#284d47] text-[#00917B] text-xl font-inter font-semibold underline underline-offset-2">
                                        itch.io
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h2 className="text-3xl font-bowlby font-extrabold">
                                    Proficiences    
                                </h2>
                                <p className="font-inter text-xl mt-5">
                                        I have years of experience in various languages and frameworks. In my spare time I making web games for game jams. Godot is my engine of choice!
                                </p>
                                <div className="mt-5 flex flex-col">
                                    
                                    <div className="flex flex-row">
                                        <svg width="65" height="65" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000000" rx="60"/><path fill="#FFFFFF" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg>
                                        <svg width="65" height="65" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clipPath="url(#akarIconsHtmlFill0)"><path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081V0Zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656V1.073ZM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058V0Zm4.181 0h1.083v2.167h1.52v1.07h-2.603V0Z"/><path fillRule="evenodd" d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24l-6.944-1.928Zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571H9.183Z" clipRule="evenodd"/></g><defs><clipPath id="akarIconsHtmlFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                                        <svg width="65" height="65" viewBox="0 0 24 24"><path fill="currentColor" d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502V0Zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5V0Zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5V0Z"/><path fill="currentColor" fillRule="evenodd" d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07L11.991 24ZM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18H7.047Z" clipRule="evenodd"/></svg>
                                        <svg width="65" height="65" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"/></svg>
                                        <svg width="65" height="65" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z" clipRule="evenodd"/></svg>      
                                        <svg width="65" height="65" viewBox="0 0 24 24"><path fill="currentColor" d="M19.114 2H15l-3 4.9L9.429 2H0l12 21L24 2h-4.886ZM3 3.75h2.914L12 14.6l6.086-10.85H21L12 19.5L3 3.75Z"/></svg>
                                        <svg width="65" height="65" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.421L14 4.213v6.574L7.5 14.58L1 10.787V4.213L7.5.42ZM7.5 4a3.5 3.5 0 1 0 0 7h.182c.976 0 1.913-.388 2.604-1.078l.068-.068l-.708-.708l-.068.068A2.682 2.682 0 0 1 7.682 10H7.5a2.5 2.5 0 0 1 0-5h.182c.711 0 1.393.283 1.896.786l.068.068l.708-.708l-.068-.068A3.682 3.682 0 0 0 7.682 4H7.5Z" clipRule="evenodd"/></svg>
                                        <svg width="65" height="65" viewBox="0 0 24 24"><path fill="currentColor" d="m14.25.18l.9.2l.73.26l.59.3l.45.32l.34.34l.25.34l.16.33l.1.3l.04.26l.02.2l-.01.13V8.5l-.05.63l-.13.55l-.21.46l-.26.38l-.3.31l-.33.25l-.35.19l-.35.14l-.33.1l-.3.07l-.26.04l-.21.02H8.77l-.69.05l-.59.14l-.5.22l-.41.27l-.33.32l-.27.35l-.2.36l-.15.37l-.1.35l-.07.32l-.04.27l-.02.21v3.06H3.17l-.21-.03l-.28-.07l-.32-.12l-.35-.18l-.36-.26l-.36-.36l-.35-.46l-.32-.59l-.28-.73l-.21-.88l-.14-1.05l-.05-1.23l.06-1.22l.16-1.04l.24-.87l.32-.71l.36-.57l.4-.44l.42-.33l.42-.24l.4-.16l.36-.1l.32-.05l.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75l-.02-.37l.05-.34l.11-.31l.17-.28l.25-.26l.31-.23l.38-.2l.44-.18l.51-.15l.58-.12l.64-.1l.71-.06l.77-.04l.84-.02l1.27.05zm-6.3 1.98l-.23.33l-.08.41l.08.41l.23.34l.33.22l.41.09l.41-.09l.33-.22l.23-.34l.08-.41l-.08-.41l-.23-.33l-.33-.22l-.41-.09l-.41.09zm13.09 3.95l.28.06l.32.12l.35.18l.36.27l.36.35l.35.47l.32.59l.28.73l.21.88l.14 1.04l.05 1.23l-.06 1.23l-.16 1.04l-.24.86l-.32.71l-.36.57l-.4.45l-.42.33l-.42.24l-.4.16l-.36.09l-.32.05l-.24.02l-.16-.01h-8.22v.82h5.84l.01 2.76l.02.36l-.05.34l-.11.31l-.17.29l-.25.25l-.31.24l-.38.2l-.44.17l-.51.15l-.58.13l-.64.09l-.71.07l-.77.04l-.84.01l-1.27-.04l-1.07-.14l-.9-.2l-.73-.25l-.59-.3l-.45-.33l-.34-.34l-.25-.34l-.16-.33l-.1-.3l-.04-.25l-.02-.2l.01-.13v-5.34l.05-.64l.13-.54l.21-.46l.26-.38l.3-.32l.33-.24l.35-.2l.35-.14l.33-.1l.3-.06l.26-.04l.21-.02l.13-.01h5.84l.69-.05l.59-.14l.5-.21l.41-.28l.33-.32l.27-.35l.2-.36l.15-.36l.1-.35l.07-.32l.04-.28l.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33l-.08.41l.08.41l.23.33l.33.23l.41.08l.41-.08l.33-.23l.23-.33l.08-.41l-.08-.41l-.23-.33l-.33-.23l-.41-.08l-.41.08z"/></svg>
                                        <svg width="65" height="65" viewBox="0 0 128 128"><path fill="currentColor" d="M52.203 9.61c-5.3 1.18-10.543 2.816-15.457 5.292c.113 4.34.395 8.496.961 12.72c-1.906 1.222-3.914 2.273-5.695 3.702c-1.813 1.395-3.66 2.727-5.301 4.36a101.543 101.543 0 0 0-10.316-6.004C12.543 33.824 8.94 38.297 6 43.305c2.313 3.629 4.793 7.273 7.086 10.117v30.723c.059 0 .113.003.168.007L32.09 85.97a2.027 2.027 0 0 1 1.828 1.875l.582 8.316l16.426 1.172l1.133-7.672a2.03 2.03 0 0 1 2.007-1.734h19.868a2.03 2.03 0 0 1 2.007 1.734l1.133 7.672l16.43-1.172l.578-8.316a2.027 2.027 0 0 1 1.828-1.875l18.828-1.817c.055-.004.11-.007.168-.007V81.69h.008V53.42c2.652-3.335 5.16-7.019 7.086-10.116c-2.941-5.008-6.543-9.48-10.395-13.625a101.543 101.543 0 0 0-10.316 6.004c-1.64-1.633-3.488-2.965-5.3-4.36c-1.782-1.43-3.79-2.48-5.696-3.703c.566-4.223.848-8.379.96-12.719c-4.913-2.476-10.155-4.113-15.456-5.293c-2.117 3.559-4.055 7.41-5.738 11.176c-2-.332-4.008-.457-6.02-.48V20.3c-.016 0-.027.004-.039.004s-.023-.004-.04-.004v.004c-2.01.023-4.019.148-6.019.48c-1.683-3.765-3.62-7.617-5.738-11.176zM37.301 54.55c6.27 0 11.351 5.079 11.351 11.345c0 6.27-5.082 11.351-11.351 11.351c-6.266 0-11.348-5.082-11.348-11.351c0-6.266 5.082-11.344 11.348-11.344zm53.398 0c6.266 0 11.348 5.079 11.348 11.345c0 6.27-5.082 11.351-11.348 11.351c-6.27 0-11.351-5.082-11.351-11.351c0-6.266 5.082-11.344 11.351-11.344zM64 61.189c2.016 0 3.656 1.488 3.656 3.32v10.449c0 1.832-1.64 3.32-3.656 3.32c-2.02 0-3.652-1.488-3.652-3.32v-10.45c0-1.831 1.632-3.32 3.652-3.32zm0 0"/><path fill="currentColor" d="m98.008 89.84l-.582 8.36a2.024 2.024 0 0 1-1.88 1.878l-20.062 1.434c-.046.004-.097.004-.144.004c-.996 0-1.86-.73-2.004-1.73l-1.152-7.806H55.816l-1.152 7.805a2.026 2.026 0 0 1-2.148 1.727l-20.063-1.434a2.024 2.024 0 0 1-1.879-1.879l-.582-8.36l-16.937-1.632c.008 1.82.03 3.816.03 4.211c0 17.887 22.692 26.484 50.88 26.582h.07c28.188-.098 50.871-8.695 50.871-26.582c0-.402.024-2.39.031-4.211zM45.922 66.566a7.531 7.531 0 0 1-7.535 7.532a7.534 7.534 0 0 1-7.535-7.532a7.534 7.534 0 0 1 7.535-7.53a7.531 7.531 0 0 1 7.535 7.53m36.156 0a7.53 7.53 0 0 0 7.531 7.532a7.531 7.531 0 1 0 0-15.063a7.53 7.53 0 0 0-7.53 7.531"/></svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ScrollArrow handleSection={handleSection} location="projects" up={false} />
            </section>
        </>
    )
}