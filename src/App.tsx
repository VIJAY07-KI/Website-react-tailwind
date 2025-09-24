

import React, { useState, useEffect } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import TrustedBy from "./Components/TrustedBy"
import Services from "./Components/Services"

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  )

  // ✅ Sync theme with <html class="dark">
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}min-h-screen transition-colors duration-300`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
    </div>
  )
}

export default App




// import React from 'react';
// import Navbar from './Components/Navbar';

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
      
//     </div>
//   )
// }

// export default App
