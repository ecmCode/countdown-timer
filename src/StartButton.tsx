type Props = {
    isRunning: boolean;
    handleStart: () => void;
    handleClear: () => void;
}

const style = {
    clear: "px-4 py-2 font-bold text-white bg-gray-500 rounded-md hover:bg-gray-600",
    start: "px-4 py-2 font-bold text-white bg-green-500 rounded-md hover:bg-green-600",
}

const StartButton = ({isRunning, handleStart, handleClear}: Props) => {
    return (
        <div className="mt-4">
            {isRunning 
                ? (
                    <button className={style.clear} onClick={handleClear}>
                        Clear
                    </button>
                )

                : (
                    <button className={style.start} onClick={handleStart}>
                        Start
                    </button>
                )
            }
        </div>
    );
}
 
export default StartButton;