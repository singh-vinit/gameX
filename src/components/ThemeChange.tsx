"use client"
import { Toggle } from "@/components/ui/toggle";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export function ThemeChange() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  // console.log(isDarkMode);
  return (
    <Toggle aria-label="Toggle" size="lg" onClick={toggleTheme}>
      {isDarkMode ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </Toggle>
  );
}
