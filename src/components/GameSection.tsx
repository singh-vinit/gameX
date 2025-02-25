"use client";
import { Games } from "@/types/games";
import { useFetch } from "@/hooks/useFetch";
import { GameCard } from "./GameCard";

export function GameSection() {
  const { data, loading } = useFetch("games");
  const items = data as Games;
  if (loading) return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {items.results.map((curr) => (
        <GameCard
          key={curr.id}
          imgUrl={curr.background_image}
          title={curr.name}
          platform={curr.parent_platforms
            .map((platform) => platform.platform.name)
            .join(",")}
        />
      ))}
    </div>
  );
}
