"use client";
import { Games } from "@/types/games";
import { GameCard } from "./GameCard";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";

export function GameSection() {
  //first fetch the games
  const { data, isPending } = useQuery({
    queryKey: ["games", "fetchGames"],
    queryFn: () => useFetch("games"),
  });

  if (isPending) return <div>loading...</div>;

  const items = data as Games;

  //fetch the game trailers based on ids
  // const videoQueries = useQueries({
  //   queries: items.results.map((curr) => {
  //     return {
  //       queryKey: ["videos", curr.id],
  //       queryFn: () => fetchVideos(curr.id),
  //       enabled: !!items,
  //     };
  //   }),
  // });

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 p-4">
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
