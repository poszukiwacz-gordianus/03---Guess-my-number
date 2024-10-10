"use client";

import GameFooter from "./_components/GameFooter";
import GameHeader from "./_components/GameHeader";
import GameMain from "./_components/GameMain";
import { useGame } from "./_context/GameContext";

export default function Page() {
  const { isGameOver, statusMessage } = useGame();

  const backgroundColor = statusMessage.includes("won")
    ? "bg-green-700"
    : "bg-red-700";

  return (
    <div
      className={`${
        isGameOver ? backgroundColor : "bg-stone-900"
      }  text-stone-100 h-screen`}
    >
      <GameHeader />
      <GameMain />
      <GameFooter />
    </div>
  );
}
