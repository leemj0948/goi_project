import React, { useEffect } from "react"
import { callbackify } from 'util';

interface iParam  {
    target:React.MutableRefObject<null>;
    callBackFn:IntersectionObserverCallback;
    root:null;
    rootMargin:string;
    threshold:number;
}

export const useIntersectionObserver = ({
    target, 
    callBackFn, 
    root = null,
    rootMargin = "0px", 
    threshold = 1.0,
}:iParam) => {
    useEffect(() => {
        let observer:IntersectionObserver
      
        if (target && target.current) {
            observer = new IntersectionObserver(callBackFn, { root, rootMargin, threshold })
            observer.observe(target.current)
        }

        return () => observer && observer.disconnect()
    }, [target, rootMargin, threshold])
}