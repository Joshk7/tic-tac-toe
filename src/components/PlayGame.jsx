import { useState } from "react";

const PlayGame = ({ single, playerX, setPlaying }) => {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

    console.log(board, setBoard, single, playerX);
    return (
        <section className="flex flex-col gap-y-16">
            <div className="grid grid-cols-3 gap-5">
                <div className="flex items-center gap-x-2">
                    <img
                        src="/src/assets/icon-x.svg"
                        alt="X"
                        height={32}
                        width={32}
                    />
                    <img
                        src="/src/assets/icon-o.svg"
                        alt="O"
                        height={32}
                        width={32}
                    />
                </div>
                <div className="flex justify-center gap-x-2 items-center p-2 bg-[var(--semi-dark-navy)] rounded-[0.3125rem] second-shadow">
                    <img
                        className="silver-filter"
                        src={
                            playerX
                                ? "/src/assets/icon-x.svg"
                                : "/src/assets/icon-o.svg"
                        }
                        alt={playerX ? "X" : "O"}
                        height={16}
                        width={16}
                    />
                    <span className="heading-xs uppercase">Turn</span>
                </div>
                <div className="flex justify-end items-center">
                    <button
                        className="p-3 bg-[var(--silver)] rounded-[0.3125rem] gray-shadow hover:bg-[var(--silver-hover)] cursor-pointer"
                        onClick={() => {
                            setPlaying(false);
                        }}
                    >
                        <img
                            src="/src/assets/icon-restart.svg"
                            alt="Restart"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            </div>
            <div>
                <div>
                    {board.map((tile, index) => (
                        <button key={index}>
                            {tile === "X" && (
                                <img src="/src/assets/icon-x.svg" alt="X" />
                            )}
                            {tile === "O" && (
                                <img src="/src/assets/icon-o.svg" alt="O" />
                            )}
                        </button>
                    ))}
                </div>
                <div>
                    <div>
                        <span>X</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>Ties</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>O</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlayGame;
