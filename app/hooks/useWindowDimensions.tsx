import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});

  useEffect(() => {
    if (windowDimensions.width == 0 && windowDimensions.height == 0){
      setWindowDimensions({width: document.documentElement.clientWidth, height: document.documentElement.clientHeight});
    }

    function handleResize() {
      setWindowDimensions({width: document.documentElement.clientWidth, height: document.documentElement.clientHeight});
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}