import { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined'

const useWindowSize = () => {

    if (!isBrowser) return {width: 0, height: 0};

    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    });
    const resizeHandler = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    return windowSize;
};

export default useWindowSize;