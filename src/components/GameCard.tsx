import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
interface GameCardProps {
  imgUrl: string;
  title: string;
  platform?: string;
}

export function GameCard({ imgUrl, title, platform }: GameCardProps) {
  return (
    <div>
      <Card className="w-[310px] shadow-lg rounded-2xl hover:scale-95 transition-transform ease-in-out delay-100 duration-100">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-[240px] object-cover rounded-t-2xl"
        />
        <CardContent className="text-center p-1">
          <p className="font-extrabold text-lg">{title}</p>
        </CardContent>
        <CardFooter>
          <p>{platform}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
