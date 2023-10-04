import { useState, useEffect } from 'react';

function getNavBarHeight() {
    const height = document.getElementById('navbar')!.clientHeight;
    return height;
}

export default function useNavBarNavBarHeight() {
    const [navBarHeight, setNavBarHeight] = useState(0);

    useEffect(() => {
        if (navBarHeight == 0){
            setNavBarHeight(getNavBarHeight);
        }
        
        function handleResize() {
            setNavBarHeight(getNavBarHeight()
            );
        }   

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return navBarHeight;
}