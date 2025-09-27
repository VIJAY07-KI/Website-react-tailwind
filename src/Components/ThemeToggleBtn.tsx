import React, { useEffect } from "react"
import assets from "../assets/Assets"
// import darkicon from "../assets/darkicon.jpg"
// import lighticon from "../assets/lighticon.jpg"

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
      className="p-0.1 border border-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        // src={icon}
        className=" w-3 h-3 "
        alt="Toggle Theme"
      />
    </button>
  )
}

export default ThemeToggleBtn




