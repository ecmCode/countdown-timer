type Props = {
    minutes: number;
    isRunning: boolean;
    handleMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MinutesInput = ({minutes, isRunning, handleMinutesChange}: Props) => {
    return (
        <div className="mt-4">
            <label 
                htmlFor="minutes" 
                className="mr-4 font-bold"
            >
                Minutes:
            </label>
            
            <input 
                id="minutes" 
                type="number" 
                value={minutes} 
                onChange={handleMinutesChange} 
                className="px-4 py-2 bg-gray-100 rounded-md" 
                min={1}
                max={120}
                disabled={isRunning}
            />
        </div>
    );
}
 
export default MinutesInput;