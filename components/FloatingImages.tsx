import Image from 'next/image';
import { useState, useEffect } from "react";
import useWindowDimensions from '@/app/hooks/useWindowDimensions';

const ufo = '/assets/images/aliens.png';
const barrel = '/assets/images/barrel.png';
const caveman = '/assets/images/caveman.png';
const dolphin = '/assets/images/dolphins.png';
const dodo = '/assets/images/dodo-birds.png';
const jester = '/assets/images/jester.png';
const yeti = '/assets/images/yeti.png';
const boots = '/assets/images/duels.png';
const apple = '/assets/images/history-book.png';

let imageLinks = [ufo, barrel, caveman, dolphin, dodo, jester, yeti, boots, apple];
const delay = 500;

type Props = {
    height: number,
    width: number
};

export default function FloatingImages({ height, width }: Props){
    let imageDims: number;
    let numImages: number;
    if (width > 1000){
        imageDims = width / 11;
        numImages = 9;
    }
    else{
        imageDims = width/4;
        numImages = 5
    }

    let usedImages: any = [];

    imageLinks.forEach((e) => {
        usedImages.push([e, false])
    });

    let displayedImages = new Array(numImages).fill(null);
    for (let i = 0; i < numImages; i++){
        resetImage(i);
    }

    function resetImage(i: number){

        if (displayedImages[i]){
            usedImages.forEach((e: any) => {
                if (e[0] == displayedImages[i]){
                    e[1] = false;
                }
            });
        }

        let ind = randImageInt();
        while (usedImages[ind][1]){
            ind = randImageInt();
        }

        displayedImages[i] = imageLinks[ind]
        usedImages[ind][1] = true;
    }

    function randImageInt(){
        return Math.floor(Math.random() * numImages);
    }

    let images: JSX.Element[] = [];
    
    for (let i=0; i < numImages; i++){
        images.push(<Image id={i.toString()} key={i} onAnimationEnd={() => hideAndReset(i)} className="invisible" width={imageDims} height={imageDims} src={displayedImages[i]} alt="aliens" /> ) 
    }

    useEffect(() => {
        const interval = setInterval(() => {
          if (!isAllVisible()){
            showNewImage()
          }
        }, delay);
    
        return () => clearInterval(interval);
      }, []);

    function hideAndReset(i: number){
        let image = document.getElementById(i.toString());
        if (image){
            image!.classList.remove("visible");
            image!.classList.add("invisible");
            resetImage(i);
        }
    }

    function isAllVisible(){
        for (let i=0; i < numImages; i++){
            if (document.getElementById(i.toString())?.classList.contains("invisible")){
                return false;
            }    
        }
        return true;
    }

    function showNewImage(){
        let i = randImageInt();

        let image = document.getElementById(i.toString());
        
        while (image?.classList.contains("visible")){
            i = randImageInt();
            image = document.getElementById(i.toString());
        }

        if (image?.classList.contains("invisible")){
            image?.classList.remove("animate-cascade", "invisible");
            image?.offsetHeight;
            image?.classList.add("animate-cascade", "visible");
        } 
    }

    return(
        <>
            <div className='flex flex-row justify-center space-x-8'>

                { images }

            </div>
        </>
    )
}