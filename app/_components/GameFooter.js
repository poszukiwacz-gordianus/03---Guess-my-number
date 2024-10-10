"use client";

import { useRef, useEffect } from "react";
import { useGame } from "../_context/GameContext";

export default function GameFooter() {
  const {
    dispatch,
    isGameOver,
    guessFeedback,
    score,
    currentGuess,
    highscore,
  } = useGame();

  const inputRef = useRef(null);

  useEffect(() => {
    if (!isGameOver) {
      inputRef.current.focus();
    }
  }, [isGameOver, score]);

  return (
    <footer className="grid grid-cols-2 gap-16 px-10 pt-8">
      <form
        className="flex flex-col gap-5 justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "makeGuess", payload: currentGuess });
        }}
      >
        <label
          htmlFor="currentGuess"
          aria-label="Enter your guess"
          className="text-xl"
        >
          Your guess:
        </label>
        <input
          type="number"
          min="1"
          max="20"
          id="currentGuess"
          value={currentGuess}
          onWheel={(e) => e.target.blur()}
          onChange={(e) => {
            const value = e.target.value;
            dispatch({
              type: "setCurrentGuess",
              payload: value === "" ? "" : Number(value),
            });
          }}
          disabled={isGameOver}
          ref={inputRef}
          required
          className="w-44 h-32 bg-stone-900 border-4 solid text-7xl text-center border-stone-100 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          className="bg-stone-100 hover:bg-stone-200 text-3xl font-semibold text-stone-900 px-6 py-2 disabled:cursor-not-allowed"
          disabled={isGameOver}
        >
          Check!
        </button>
      </form>
      <div className="flex flex-col gap-4 text-xl">
        <p className="mb-auto">{guessFeedback}</p>
        <p>💯 Score: {score}</p>
        <p>🥇 Highscore: {highscore}</p>
      </div>
    </footer>
  );
}
