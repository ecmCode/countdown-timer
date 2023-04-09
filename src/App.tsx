import { useEffect, useState } from 'react';
import Countdown from './components/Countdown';
import StartButton from './components/StartButton';
import MinutesInput from './components/MinutesInput';
import Circle from './components/Circle';
import DarkModeButton from './components/DarkModeButton';

// Constants
const originalTitle = document.title;
const alarmURL = "src/assets/alarm.mp3";
const alarmDuration = 5000;
const audio = new Audio(alarmURL);

const App = () => {
  
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(1); // input data for minutes to be calculated to seconds
  const [timeLeft, setTimeLeft] = useState(0);
  const [darkMode, setDarkMode] = useState(false)

  const handleStart = () => {
    if (minutes > 0){
      setTimeLeft(minutes * 60);
      setIsRunning(true);
    } 
  };

  const handleClear = () => {
    setTimeLeft(0);
    setIsRunning(false);
  };

  const timeup = () => {
    audio.play();
    document.title = 'Time Up!';
    setTimeout(() => {
      document.title = originalTitle;
    }, alarmDuration);
  }
  
  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinutes = Number(event.target.value);
    setMinutes(Math.min(120, Math.max(1, newMinutes)));
  };

  useEffect(() => {
    const unsub = () => {
      if(isRunning && timeLeft === 1) return timeup()
    };
    return () => unsub()
  }, [timeLeft]);
  
  const themeStyle = {
    dark: "bg-gradient-to-br from-zinc-900 to-zinc-950 -z-10",
    light: "bg-gradient-to-br from-zinc-50 to-zinc-200 -z-10", 
  }

  return (
    <div className={darkMode? themeStyle.dark : themeStyle.light}>
      <div className="flex flex-col items-center justify-center h-screen relative z-10">
        <Countdown 
          isRunning={isRunning} 
          setIsRunning={setIsRunning} 
          timeLeft={timeLeft} 
          setTimeLeft={setTimeLeft}
          darkMode={darkMode}
        />
        <div className="mt-4 flex gap-2 items-center">
          <StartButton 
            isRunning={isRunning} 
            handleStart={handleStart} 
            handleClear={handleClear}
          />
          <DarkModeButton 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
        <MinutesInput
          minutes={minutes}
          setMinutes={setMinutes}
          isRunning={isRunning}        
          handleMinutesChange={handleMinutesChange} 
          darkMode={darkMode}
        />
        <Circle timeLeft={timeLeft} minutes={minutes} isRunning={isRunning}/>
      </div>
    </div>
    
 );
};

export default App;
