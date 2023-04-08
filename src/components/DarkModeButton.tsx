type Props = {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const themeStyle = {
    dark: "px-4 py-2 font-bold text-slate-950 bg-slate-300 rounded-md hover:bg-slate-50 transition",
    light: "px-4 py-2 font-bold text-slate-50 bg-slate-950 rounded-md hover:bg-slate-800 transition"
}

const DarkModeButton = ({darkMode, setDarkMode}: Props) => {
    return (
        <button 
        className={darkMode? themeStyle.dark : themeStyle.light}
        onClick={() => setDarkMode(prevSetting => !prevSetting)}
        >
            {darkMode? "Dark Mode" : "Light Mode"}
        </button>
    );
}
 
export default DarkModeButton;