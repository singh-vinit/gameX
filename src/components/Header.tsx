import { SearchBar } from "./SearchBar";
import { ThemeChange } from "./ThemeChange";
export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white border border-red-500">
      <SearchBar />
      <ThemeChange />
    </header>
  );
}
