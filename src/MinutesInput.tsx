type Props = {
    minutes: number;
    handleMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MinutesInput = ({minutes,handleMinutesChange}: Props) => {
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
            />
        </div>
    );
}
 
export default MinutesInput;