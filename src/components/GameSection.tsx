"use client";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { GameCard } from "./GameCard";
import { Games } from "@/types/games";

export function GameSection() {
  const { data, isPending } = useQuery({
    queryKey: ["games", "fetchGames"],
    queryFn: () => useFetch("games"),
  });
  if (isPending) return <div>loading...</div>;

  const games = data as Games;

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {games.results.map((game) => (
        <GameCard
          key={game.id}
          imgUrl={game.background_image}
          title={game.name}
          platforms={game.parent_platforms}
          rating={game.rating}
          released={game.released}
          esrb={game.esrb_rating.name}
          genres={game.genres}
        />
      ))}
    </div>
  );
}
