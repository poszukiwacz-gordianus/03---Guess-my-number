import { Press_Start_2P } from "next/font/google";
import "@/app/globals.css";
import { GameProvider } from "./_context/GameContext";

const fontStart = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-fontStart",
});

export const metadata = {
  title: "Guess my number",
  description: "Guess my number game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontStart.variable}`}>
      <body className={`antialiased`}>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
