import { Header } from "@/components/Header";
import { GameSection } from "@/components/GameSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Navbar />
      <div className="w-[98%] mx-auto">
        <Header />
        <GameSection />
      </div>
    </div>
  );
}
