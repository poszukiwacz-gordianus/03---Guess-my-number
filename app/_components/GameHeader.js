"use client";

import { useGame } from "../_context/GameContext";

export default function GameHeader() {
  const { dispatch, maxNumber } = useGame();
  return (
    <header className="flex justify-between py-6 px-10 items-center">
      <button
        className="text-2xl bg-stone-100 text-stone-900 px-6 py-4 hover:bg-stone-200"
        onClick={() => dispatch({ type: "resetGame" })}
      >
        Again!
      </button>
      <p className="text-xl">{`(Between 1 and ${maxNumber})`}</p>
    </header>
  );
}
