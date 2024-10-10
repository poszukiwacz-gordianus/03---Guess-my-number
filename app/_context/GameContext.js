"use client";

import { createContext, useContext, useReducer } from "react";
import { generateRandomNumber } from "../_helpers/functions";

const GameContext = createContext();
const maxNumber = 20;

const generateInitialState = (maxNumber) => ({
  maxNumber: maxNumber,
  currentGuess: "",
  statusMessage: "Guess My Number!",
  guessFeedback: "Start guessing...",
  isGameOver: false,
  highscore: 0,
  randomNumber: generateRandomNumber(maxNumber),
  score: maxNumber,
});

const initialState = generateInitialState(maxNumber);

function reducer(state, action) {
  switch (action.type) {
    case "newGame":
      return generateInitialState(maxNumber);
    case "setCurrentGuess":
      return { ...state, currentGuess: action.payload };
    case "makeGuess":
      if (state.score === 1 && action.payload !== state.randomNumber)
        return {
          ...state,
          guessFeedback: "😢 You lost!",
          statusMessage: "🙈 Correct number was:",
          isGameOver: true,
          score: state.score - 1,
          currentGuess: "",
        };
      else {
        if (action.payload > state.maxNumber || action.payload < 1)
          return {
            ...state,
            statusMessage: `Only numbers between 1 and ${state.maxNumber}`,
          };
        else if (action.payload === state.randomNumber)
          return {
            ...state,
            guessFeedback: "👍 Correct number!",
            isGameOver: true,
            statusMessage: "🎉 You won! 🎉",
            currentGuess: "",
            highscore:
              state.highscore < state.score ? state.score : state.highscore,
          };
        else
          return {
            ...state,
            guessFeedback:
              action.payload < state.randomNumber
                ? "📉 To low!"
                : "📈 To high!",
            score: state.score - 1,
            currentGuess: "",
          };
      }
    case "resetGame":
      return {
        ...generateInitialState(state.maxNumber),
        highscore:
          state.highscore < state.score && state.isGameOver
            ? state.score
            : state.highscore,
      };
  }
}

function GameProvider({ children }) {
  const [
    {
      maxNumber,
      randomNumber,
      currentGuess,
      statusMessage,
      guessFeedback,
      score,
      isGameOver,
      highscore,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider
      value={{
        maxNumber,
        randomNumber,
        currentGuess,
        statusMessage,
        guessFeedback,
        score,
        isGameOver,
        highscore,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("GameContext used outside of Provider");
  return context;
}

export { GameProvider, useGame };
