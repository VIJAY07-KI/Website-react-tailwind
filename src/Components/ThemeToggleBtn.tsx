import React, { useEffect } from "react"
import assets from "../assets/Assets"

interface ThemeToggleBtnProps {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}

const ThemeToggleBtn: React.FC<ThemeToggleBtnProps> = ({ theme, setTheme }) => {
  // Apply/remove 'dark' class on <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-1.5 border border-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        className="w-8 h-8"
        alt="Toggle Theme"
      />
    </button>
  )
}

export default ThemeToggleBtn




