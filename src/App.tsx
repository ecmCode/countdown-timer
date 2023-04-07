import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import StartButton from './StartButton';
import MinutesInput from './MinutesInput';

// Constants
const originalTitle = document.title;
const alarmURL = "src/assets/alarm.mp3";
const alarmDuration = 5000;
const audio = new Audio(alarmURL);

const App = () => {
  
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0); // input data for minutes to be calculated to seconds
  const [timeLeft, setTimeLeft] = useState(0);

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
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Countdown 
        isRunning={isRunning} 
        setIsRunning={setIsRunning} 
        timeLeft={timeLeft} 
        setTimeLeft={setTimeLeft}
      />
      <div className="mt-4">
        <StartButton 
          isRunning={isRunning} 
          handleStart={handleStart} 
          handleClear={handleClear}
        />
      </div>
      <MinutesInput
        minutes={minutes}
        handleMinutesChange={handleMinutesChange}
      />
    </div>
 );
};

export default App;
