"use client";
import useSWR from "swr";
import { GameCard } from "./GameCard";

const KEY = "fd9de0b1e991460c9c45169d797ae783";
const URL = `https://api.rawg.io/api/games?key=${KEY}`;

//@ts-ignore
const fetcher = (URL) => fetch(URL).then((r) => r.json());

export function Games() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const games = data.results;
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {games.map((game) => (
            <GameCard
                key={game.id}
                imgUrl={game.background_image}
                title={game.name}
                platform={game.platforms.map((platform) => platform.platform.name).join(", ")}
            />
        ))}
    </div>
  );
}
