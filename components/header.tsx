"use client";

import { useEffect, useState } from "react";
import { MapPin, Clock, Sun, Moon } from "lucide-react";

export function Header() {
  const [time, setTime] = useState<string>("");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const initialDark =
      html.classList.contains("dark") || !html.classList.contains("light");
    setIsDark(initialDark);
    if (initialDark) {
      html.classList.add("dark");
    }

    const updateTime = () => {
      const now = new Date();
      const viennaTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/Vienna",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(`${viennaTime} GMT+1`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <header className="flex items-center justify-between py-3 px-6 max-w-xl mx-auto">
      <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-mono">
        <MapPin className="w-3 h-3" />
        <span>VIENNA, EUROPE</span>
      </div>

      <button
        onClick={toggleTheme}
        className="p-1.5 rounded-full hover:bg-muted transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-3.5 h-3.5" />
        ) : (
          <Moon className="w-3.5 h-3.5" />
        )}
      </button>

      <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-mono">
        <Clock className="w-3 h-3" />
        <span>{time}</span>
      </div>
    </header>
  );
}
