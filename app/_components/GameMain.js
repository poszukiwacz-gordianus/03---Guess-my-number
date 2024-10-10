"use client";
import { useGame } from "../_context/GameContext";

export default function GameMain() {
  const { randomNumber, statusMessage, isGameOver } = useGame();
  return (
    <main className="relative">
      <section className="flex flex-col justify-center gap-10 items-center">
        <h1 className="text-4xl">{statusMessage}</h1>
        <h2 className=" text-stone-900 text-7xl bg-stone-100 pl-12 pr-10 py-6 z-10">
          {isGameOver ? randomNumber : "?"}
        </h2>
      </section>
      <p className="bg-stone-100 w-full h-2 absolute bottom-[22%]"></p>
    </main>
  );
}
