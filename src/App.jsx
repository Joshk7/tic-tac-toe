import { useState } from "react";
import NewGame from "./components/NewGame";

const App = () => {
    const [playerX, setPlayerX] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [singlePlayer, setSinglePlayer] = useState(true);
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    console.log(
        playing,
        setPlaying,
        singlePlayer,
        setSinglePlayer,
        board,
        setBoard
    );

    if (playing) {
        console.log("playing!");
    } else {
        return <NewGame playerX={playerX} setPlayerX={setPlayerX} />;
    }
};

export default App;
