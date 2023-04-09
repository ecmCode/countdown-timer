type Props = {
    pause: boolean
    setPause: React.Dispatch<React.SetStateAction<boolean>>
}

const PauseButton = ({pause,setPause}: Props) => {
    return (
        <button 
        className="px-4 py-2 transition font-bold text-white bg-red-500 hover:bg-red-400 rounded-md" 
        onClick={() => setPause(!pause)}>
            {pause? "Resume" : "Pause"}
        </button>
    );
}
 
export default PauseButton;