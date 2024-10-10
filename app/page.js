"use client";

import GameFooter from "./_components/GameFooter";
import GameHeader from "./_components/GameHeader";
import GameMain from "./_components/GameMain";
import { useGame } from "./_context/GameContext";

export default function Page() {
  const { isGameOver, statusMessage } = useGame();

  const backgroundColor = isGameOver
    ? statusMessage.includes("won")
      ? "bg-green-700"
      : statusMessage.includes("was")
      ? "bg-red-700"
      : "bg-stone-900"
    : "bg-stone-900";

  return (
    <div className={`${backgroundColor}  text-stone-100 h-screen`}>
      <GameHeader />
      <GameMain />
      <GameFooter />
    </div>
  );
}
