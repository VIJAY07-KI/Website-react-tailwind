


import React, { useState } from "react"
import assets from "../assets/Assets"
import ThemeToggleBtn from "./ThemeToggleBtn"
import { motion } from "motion/react"



interface NavbarProps {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  console.log(theme)

  return (
    <motion.div 
    initial={{opacity:0,y:-50}}
    animate= {{opacity:1,y:0}}
    transition={{duration:0.6,ease:"easeOut"}}
      
className={`flex justify-between items-center px-4 sm:px-12 lg:px-24 
  xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium 
  ${theme === 'dark' ? 'bg-gray-900/70 text-white' : 'bg-white/50 text-black'}`}

    >
      {/* Logo */}
      
{/* <div
  className={`font-bold text-2xl sm:text-3xl cursor-pointer ${
    theme === "dark" ? "logo-dark" : "logo-light"
  }`}
>
  Algorithra.Ai
</div> */}
{/* <div className="font-bold text-2xl sm:text-3xl cursor-pointer text-primary">
  Algorithra.Ai
</div> */}

{/* Stylish Blue Logo */}
<div
  className="text-primary text-3xl sm:text-4xl font-extrabold cursor-pointer"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
  Algorithra.Ai
</div>



      {/* Sidebar / Menu */}
      <div
        className={`${theme === 'dark' ? ' text-white' : 'text-gray-700'} dark: sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col
           max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5
           transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="Close Menu"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">
          Home
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className="sm:hover:border-b">
          Services
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#our-work" className="sm:hover:border-b">
          Our Work
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">
          Contact Us
        </a>
      </div>

      
      

        {/* <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Contact Us
        </a> */}
        <a
  href="#contact-us"
  className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all ml-100"
>
  Contact Us
</a>


        <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          alt="Menu Icon"
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />
      </div>
    </motion.div>
  )
}

export default Navbar


