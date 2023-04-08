type Props = {
    minutes: number;
    isRunning: boolean;
    darkMode: boolean;
    handleMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const themeStyle = {
    dark: "mr-4 font-bold text-zinc-50",
    light: "mr-4 font-bold text-zinc-950"
}

const MinutesInput = ({minutes, isRunning, handleMinutesChange, darkMode}: Props) => {
    return (
        <div className="mt-4">
            <label 
                htmlFor="minutes" 
                className={darkMode ? themeStyle.dark : themeStyle.light}
            >
                Minutes:
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
        </div>
    );
}
 
export default MinutesInput;