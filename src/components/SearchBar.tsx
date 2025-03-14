import { Input } from "./ui/input";

export function SearchBar() {
  return (
    <Input
      type="text"
      placeholder="search games"
      className="w-[45%] text-black dark:text-white font-semibold rounded-2xl focus:border-blue-600 placeholder:focus:opacity-0"
    />
  );
}
