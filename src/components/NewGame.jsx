import PlayerToggle from "./PlayerToggle";

const NewGame = () => {
    return (
        <section className="flex flex-col gap-y-8">
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
            <div className="bg-[var(--semi-dark-navy)] p-6 rounded-2xl custom-shadow">
                <h1 className="uppercase heading-xs">Pick Player 1's Mark</h1>
                <PlayerToggle />
                <p className="uppercase body">Remember: X goes first</p>
            </div>
            <div className="flex flex-col">
                <button>New game (vs cpu)</button>
                <button>New game (vs player)</button>
            </div>
        </section>
    );
};

export default NewGame;
