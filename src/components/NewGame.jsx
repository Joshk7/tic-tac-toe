import PlayerToggle from "./PlayerToggle";

const NewGame = () => {
    return (
        <section className="flex flex-col gap-y-10">
            <div className="flex justify-center gap-x-2">
                <img
                    src="/src/assets/icon-x.svg"
                    alt="X"
                    width={32}
                    height={32}
                />
                <img
                    src="/src/assets/icon-o.svg"
                    alt="O"
                    width={32}
                    height={32}
                />
            </div>
            <div className="bg-[var(--semi-dark-navy)] p-6 rounded-2xl main-shadow">
                <h1 className="uppercase heading-xs">Pick Player 1's Mark</h1>
                <PlayerToggle />
                <p className="uppercase body">Remember: X goes first</p>
            </div>
            <div className="flex flex-col gap-y-6">
                <button
                    onClick={() => {}}
                    className="bg-[var(--light-yellow)] text-[var(--dark-navy)] p-3.5 rounded-2xl uppercase heading-xs yellow-shadow hover:bg-[var(--light-yellow-hover)] cursor-pointer"
                >
                    New game (vs cpu)
                </button>
                <button
                    onClick={() => {}}
                    className="bg-[var(--light-blue)] text-[var(--dark-navy)] p-3.5 rounded-2xl uppercase heading-xs blue-shadow hover:bg-[var(--light-blue-hover)] cursor-pointer"
                >
                    New game (vs player)
                </button>
            </div>
        </section>
    );
};

export default NewGame;
