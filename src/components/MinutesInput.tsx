type Props = {
    minutes: number;
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
    isRunning: boolean;
    darkMode: boolean;
    handleMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const themeStyle = {
    dark: "mr-4 font-bold text-zinc-50",
    light: "mr-4 font-bold text-zinc-950"
}


const mins : number[] = [1,10,25,60,120]

const MinutesInput = ({minutes, setMinutes, isRunning, handleMinutesChange, darkMode}: Props) => {
    return (
        <div className="mt-4">
            <label 
                htmlFor="minutes" 
                className={darkMode ? themeStyle.dark : themeStyle.light}
            >
                Minutes
            </label>
            
            <input 
                id="minutes" 
                type="number" 
                value={minutes} 
                onChange={handleMinutesChange} 
                className="px-4 py-2 bg-gray-100 rounded-md border-2 border-slate-950" 
                min={1}
                max={120}
                disabled={isRunning}
            />
            
            <div>
            {!isRunning && mins.map(min => (
                    <button 
                    className="m-2"  
                    onClick={() => setMinutes(min)}>
                        <span className={darkMode ? "text-slate-50" : "text-slate-950"}>
                            {min}
                        </span>
                    </button>
                )
            )}
            </div>
            
        </div>
    );
}
 
export default MinutesInput;