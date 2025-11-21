"use client"; 
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="p-1 rounded-full border-0.5 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Sun className="h-10 w-10 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#1da1f2]" fill="currentColor" stroke="currentColor" strokeWidth={3}/>
          <Moon className="absolute h-10 w-10 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#1da1f2]" fill="currentColor"/>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
