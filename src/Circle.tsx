import { useEffect } from "react";

type Props = {
    timeLeft: number;
    minutes: number;
    isRunning:boolean;
}

const Circle = ({timeLeft, minutes, isRunning}: Props) => {
    
    // 
    const maxSpan = 1005;
    const totalTime = minutes * 60;
    const timeLeftPercentage = timeLeft / totalTime;
    const span = maxSpan * timeLeftPercentage

    // Circle color changes from green to red as R increases and G decreases
    const R = Math.floor(255 - (255 * timeLeftPercentage))
    const G = Math.floor(255 * timeLeftPercentage + totalTime * 1.5)

    useEffect(() => {
      console.log(timeLeftPercentage);
      console.log(isRunning)
    }, [timeLeft]);
    
    
    return (
        <svg 
        width={400}
        height={400} 
        className="absolute" 
        style={{
            stroke:`rgb(${R},${G},0)`,
            strokeWidth:20,
            fill:"none",
            strokeDasharray:`${span}, 20000`, // max 1005
            zIndex:-1,
        }}>
            {isRunning && <circle cx={200} cy={200} r={160} transform="rotate(-90,200,200)"/>}
        </svg> 
    );
}
 
export default Circle;