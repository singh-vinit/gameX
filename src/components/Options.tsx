"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  holder: string;
  options: string[];
}

import { useState } from "react";

export function Options({ holder, options }: Props) {
  const [value, setValue] = useState<string | null>(null);
  console.log(value);
  return (
    <Select onValueChange={(val) => setValue(val)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={holder} />
      </SelectTrigger>
      <SelectContent className="bg-white text-black dark:bg-black dark:text-white">
        {options.map((option) => (
          <SelectItem key={option} value={option.toLowerCase()}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
