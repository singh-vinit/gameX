import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center p-3">
        <SearchBar />
        <ThemeToggle />
      </div>
      <div className="p-3">
        <p className="font-extrabold text-4xl">New and Trending</p>
        <p className="text-lg font-semibold">
          Based on players count and release date
        </p>
      </div>
    </div>
  );
}
