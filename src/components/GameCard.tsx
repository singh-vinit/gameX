import { Card } from "./ui/card";
import Star from "../../public/star.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Platforms = {
  platform: {
    name: string;
    slug: string;
  };
};

type Genres = {
  name: string;
  slug: string;
};

interface GameCardProps {
  imgUrl: string;
  title: string;
  rating: number;
  released: string;
  esrb: string;
  platforms: Platforms[];
  genres: Genres[];
}

export function GameCard({
  imgUrl,
  title,
  rating,
  released,
  esrb,
  genres,
}: GameCardProps) {
  return (
    <div>
      <Card className="relative w-[240px] h-[300px] rounded-xl border-none transition-all duration-300 ease-in-out hover:scale-105">
        <Image
          src={imgUrl}
          alt={title}
          width={100}
          height={100}
          unoptimized={true}
          className="h-full w-full object-cover rounded-xl hover:blur-sm hover:brightness-50 transition-all duration-300 ease-in-out"
        />
        <div className="absolute bottom-0 bg-black/45 backdrop-blur-md text-white w-full p-2 rounded-b-xl">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">{title}</div>
            <div className="flex items-center space-x-1">
              <span>
                <Image src={Star} height={20} width={20} alt="star" />
              </span>
              <span className="text-sm font-light">{rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="">
            <span className="text-sm font-medium">genres: </span>
            <span className="text-sm font-light">
              {genres.map((genre) => genre.name).join(", ")}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-light"><span className="font-medium">release:</span> {released}</span>
            <Badge variant={"outline"}>{esrb}</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}
