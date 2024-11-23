import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Listen for system theme changes

  const applyTheme = (currentTheme) => {
    if (currentTheme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    } else {
      document.documentElement.classList.toggle(
        "dark",
        currentTheme === "dark"
      );
    }
  };
  // Function to toggle theme
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Custom hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);
