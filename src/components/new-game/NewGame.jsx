const NewGame = () => {
    return (
        <section className="flex flex-col gap-y-8">
            <div className="flex justify-center gap-x-2">
                <img src="/src/assets/icon-x.svg" alt="X" />
                <img src="/src/assets/icon-o.svg" alt="O" />
            </div>
            <div className="p-6">
                <h1>Pick Player 1's Mark</h1>
                <fieldset className="toggle">
                    <input
                        type="radio"
                        id="choose-x"
                        name="player-mark"
                        value="X"
                    />
                    <label htmlFor="choose-x">X</label>

                    <input
                        type="radio"
                        id="choose-o"
                        name="player-mark"
                        value="O"
                        defaultChecked
                    />
                    <label htmlFor="choose-o">O</label>
                </fieldset>
                <p>Remember: X goes first</p>
            </div>
            <div className="flex flex-col">
                <button>
                    New game (vs cpu)
                </button>
                <button>
                    New game (vs player)
                </button>
            </div>
        </section>
    );
};

export default NewGame;
