type Props = {
    isRunning: boolean;
    handleStart: () => void;
    handleClear: () => void;
}

const style = {
    clear: "px-4 py-2 transition font-bold text-white bg-gray-500 rounded-md hover:bg-gray-600",
    start: "px-4 py-2 transition font-bold text-white bg-green-500 rounded-md hover:bg-green-600",
}

const StartButton = ({isRunning, handleStart, handleClear}: Props) => {
    return (
        // <div>
        //     {isRunning 
        //         ? (
        //             <button className={style.clear} onClick={handleClear}>
        //                 Clear
        //             </button>
        //         )

        //         : (
        //             <button className={style.start} onClick={handleStart}>
        //                 Start
        //             </button>
        //         )
        //     }
        // </div>
        <button 
        className={isRunning? style.clear : style.start} 
        onClick={isRunning? handleClear : handleStart}>
            {isRunning? "Clear" : "Start"}
        </button>
    );
}
 
export default StartButton;