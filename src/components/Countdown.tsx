import { useEffect } from 'react';

type Props = {
    timeLeft: number;
    isRunning: boolean;
    darkMode: boolean;
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
};

const themeStyle = {
  dark: "text-4xl font-bold text-slate-50",
  light: "text-4xl font-bold text-slate-950"
}

const Countdown = ({isRunning,setIsRunning,timeLeft,setTimeLeft, darkMode}: Props) => {
  
    useEffect(() => {
        if (timeLeft === 0) return setIsRunning(false);
        const intervalId = setInterval(() => {        
            isRunning && setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId)
    }, [timeLeft]);
  
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={darkMode? themeStyle.dark : themeStyle.light}>
      {hours.toString().padStart(2, '0')}:
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default Countdown;
