"use client";
import { useQuery } from "@tanstack/react-query";
import { GameCard } from "./GameCard";
import { Games } from "@/types/games";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export function GameSection() {
  const [page, setPage] = useState(1);

  const apikey = process.env.NEXT_PUBLIC_API_KEY;

  function fetchGames(page = 1) {
    return fetch(
      `https://api.rawg.io/api/games?key=${apikey}&page=${page}`
    ).then((res) => res.json());
  }

  const { isLoading, isPending, isFetching, data } = useQuery({
    queryKey: ["games", page],
    queryFn: () => fetchGames(page),
  });
  const games = data as Games;

  if (isLoading && isPending) return <div>loading...</div>;

  return (
    <>
      <div className={`grid grid-cols-3 gap-4 p-6`}>
        {games.results.map((game) => (
          <GameCard
            key={game.id}
            imgUrl={game?.background_image}
            title={game?.name}
            platforms={game?.parent_platforms}
            rating={game?.rating}
            released={game?.released}
            esrb={game.esrb_rating?.slug}
            genres={game?.genres}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-x-6 w-full">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          variant={"default"}
          className="bg-black text-white dark:bg-white dark:text-black dark:font-medium rounded-lg text-sm font-light hover:scale-90 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          <ChevronLeft />
          prev
        </Button>
        <span className="px-4 font-semibold">{page}</span>
        <Button
          onClick={() => {
            if (games.next) {
              setPage((prev) => prev + 1);
            }
          }}
          disabled={!games.next}
          variant={"default"}
          className="bg-black dark:bg-white dark:text-black dark:font-medium text-white rounded-lg font-light text-sm hover:scale-90 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          next
          <ChevronRight />
        </Button>
        {isFetching ? <span> Loading...</span> : null}
      </div>
    </>
  );
}
