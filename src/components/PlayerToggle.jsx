import clsx from "clsx";

const PlayerToggle = ({ playerX, setPlayerX }) => {
    return (
        <fieldset className="mt-6 mb-4 bg-[var(--dark-navy)] relative p-2 flex gap-x-2 rounded-[0.625rem]">
            <button
                onClick={() => {
                    setPlayerX(true);
                }}
                className={clsx(
                    playerX && "bg-[var(--silver)]",
                    "flex-1 block w-full p-3 rounded-[0.625rem] transition-all duration-500 cursor-pointer"
                )}
                htmlFor="choose-x"
            >
                <img
                    className={clsx(
                        playerX ? "dark-navy-filter" : "silver-filter",
                        "mx-auto"
                    )}
                    src="/src/assets/icon-x.svg"
                    alt="X"
                    width={32}
                    height={32}
                />
            </button>
            <button
                onClick={() => {
                    setPlayerX(false);
                }}
                className={clsx(
                    !playerX && "bg-[var(--silver)]",
                    "flex-1 block w-full p-3 rounded-[0.625rem] transition-all duration-500 cursor-pointer"
                )}
                htmlFor="choose-o"
            >
                <img
                    className={clsx(
                        !playerX ? "dark-navy-filter" : "silver-filter",
                        "mx-auto"
                    )}
                    src="/src/assets/icon-o.svg"
                    alt="O"
                    width={32}
                    height={32}
                />
            </button>
        </fieldset>
    );
};

export default PlayerToggle;
