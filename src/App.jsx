import { useState } from "react";
import NewGame from "./components/NewGame";
import PlayGame from "./components/PlayGame.jsx";

const App = () => {
    const [playerX, setPlayerX] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [single, setSingle] = useState(true);
    const [stats, setStats] = useState({
        x: 0,
        ties: 0,
        o: 0,
    });
    console.log(stats, setStats);

    if (playing) {
        return <PlayGame single={single} playerX={playerX} setPlaying={setPlaying} />
    } else {
        return <NewGame playerX={playerX} setPlayerX={setPlayerX} setPlaying={setPlaying} setSingle={setSingle} />;
    }

};

export default App;
