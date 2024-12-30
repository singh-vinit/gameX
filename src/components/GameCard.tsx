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
      <Card className="w-96 shadow-lg rounded-xl overflow-hidden border-none">
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
