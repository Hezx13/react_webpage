import React, { useState,useRef, useEffect } from 'react'

export const useElementOnScreen = (options) => {
    const containerRef = useRef(null)
    const [IsVisible, setIsVisible] = useState(false)

    const callBackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }


useEffect(() => {

    const observer = new IntersectionObserver(callBackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
        if (containerRef.current) observer.unobserve(containerRef.current)
    }    
},
[containerRef, options]
)
return [containerRef, IsVisible]
}