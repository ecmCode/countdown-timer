import { useEffect, useState } from "react";
import { AnimationProps, motion } from "framer-motion";

type Props = {
    timeLeft: number
    minutes: number
    isRunning: boolean
    darkMode: boolean
}

type CircleStatus = "show" | "hide"

const Circle = ({timeLeft, minutes, isRunning, darkMode}: Props) => {

    const [circleStatus, setCircleStatus] = useState<CircleStatus>("hide")

    // Span
    const maxSpan = 1005;
    const totalTime = minutes * 60;
    const timeLeftPercentage = timeLeft / totalTime;
    const span = maxSpan * timeLeftPercentage
    const strokeDasharray = `${Math.floor(span)}, 20000`

    // Circle color changes from green to red as R increases and G decreases
    // Different color tone when dark mode is activated.
    const R = Math.floor(255 - (255 * timeLeftPercentage ) + 50)
    const G = Math.floor(255 * timeLeftPercentage + 100)
    const B = darkMode? 85 : 0 

    // Animation
    const initial: AnimationProps["initial"] = {
        opacity: 0,
        strokeWidth:20,  
    }
    
    const showCircle : AnimationProps["animate"] = {        
        opacity: 1,
        strokeDasharray: strokeDasharray,
        stroke:`rgb(${R},${G},${B})`,
    }

    const hideCircle : AnimationProps["animate"] = {
        opacity: 0,
        strokeDasharray: "0, 20000",   
    }
    
    const transition : AnimationProps["transition"]= {
        duration: 1,  
        ease: "circOut",
    }
    
    useEffect(() => {
        isRunning
        ? setCircleStatus("show")
        : setCircleStatus("hide")
    },[isRunning])

    return (
        <motion.svg 
        width={400}
        height={400} 
        className="absolute -z-10"
        >
           <motion.circle cx={200} cy={200} r={160}     
            transform="rotate(-90,200,200)"
            initial={initial}
            animate={circleStatus === "show" ? showCircle : hideCircle}
            transition={transition}
            className="fill-none"
            />
        </motion.svg> 
    );
}
 
export default Circle;