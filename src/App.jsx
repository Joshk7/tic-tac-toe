import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NewGame from "./components/new-game/NewGame";

const App = () => {
    const [playing, setPlaying] = useState(false);
    const [singlePlayer, setSinglePlayer] = useState(true);
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]);

    if (playing) {
        console.log("playing!");
    } else {
        return (
            <NewGame />
        )
    }
}

export default App;
