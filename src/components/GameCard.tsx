import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export function GameCard() {
  return (
    <div>
      <Card className="w-96 bg-white shadow-lg rounded-xl overflow-hidden">
        <CardHeader>
          <h3>game video</h3>
        </CardHeader>
        <CardContent>
          <p>Game Description</p>
        </CardContent>
        <CardFooter>
          <p>xbox, window</p>
        </CardFooter>
      </Card>
    </div>
  );
}
