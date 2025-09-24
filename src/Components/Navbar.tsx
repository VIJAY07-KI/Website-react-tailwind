import React, { useState } from "react"
import assets from "../assets/Assets"
import ThemeToggleBtn from "./ThemeToggleBtn"

interface NavbarProps {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  console.log(theme)

  return (
    <div
      // className="flex justify-between items-center px-4 sm:px-12 lg:px-24 
      // xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium 
      // bg-white/50 text-black dark:bg-gray-900/70 dark:text-white"
className={`flex justify-between items-center px-4 sm:px-12 lg:px-24 
  xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium 
  ${theme === 'dark' ? 'bg-gray-900/70 text-white' : 'bg-white/50 text-black'}`}

    >
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="App Logo"
        className="w-32 sm:w-40"
      />

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

      {/* Right Side Icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          alt="Menu Icon"
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
        </a>
      </div>
    </div>
  )
}

export default Navbar


// import React, { useState } from "react"
// import assets from "../assets/Assets"
// import ThemeToggleBtn from "./ThemeToggleBtn"


// interface NavbarProps {
//   theme: "light" | "dark"
//   setTheme: (theme: "light" | "dark") => void
// }

// const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false)

//   return (
//     <div
//       className="flex justify-between items-center px-4 sm:px-12 lg:px-24 
//       xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium 
//       bg-white/50 text-black dark:bg-gray-900/70 dark:text-white"
//     >
//       {/* Logo */}
//       <img
//         src={theme === "dark" ? assets.logo_dark : assets.logo}
//         alt="App Logo"
//         className="w-32 sm:w-40"
//       />

//       {/* Sidebar / Menu */}
//       <div
//         className={`text-gray-700 dark:text-white sm:text-sm ${
//           !sidebarOpen
//             ? "max-sm:w-0 overflow-hidden"
//             : "max-sm:w-60 max-sm:pl-10"
//         } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col
//            max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5
//            transition-all`}
//       >
//         <img
//           src={assets.close_icon}
//           alt="Close Menu"
//           className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
//           onClick={() => setSidebarOpen(false)}
//         />

//         <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">
//           Home
//         </a>
//         <a onClick={() => setSidebarOpen(false)} href="#services" className="sm:hover:border-b">
//           Services
//         </a>
//         <a onClick={() => setSidebarOpen(false)} href="#our-work" className="sm:hover:border-b">
//           Our Work
//         </a>
//         <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">
//           Contact Us
//         </a>
//       </div>

//       {/* Right Side Icons */}
//       <div className="flex items-center gap-2 sm:gap-4">
//         <ThemeToggleBtn theme={theme} setTheme={setTheme} />

//         <img
//           alt="Menu Icon"
//           src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
//           onClick={() => setSidebarOpen(true)}
//           className="w-8 sm:hidden cursor-pointer"
//         />

//         <a
//           href="#contact-us"
//           className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
//         >
//           Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Navbar


// import React, { useState } from "react"
// import assets from "../assets/Assets"
// import ThemeToggleBtn from "./ThemeToggleBtn"

// interface NavbarProps {
//   theme: "light" | "dark"
//   setTheme: (theme: "light" | "dark") => void
// }

// const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
//   const [sidebarOpen, setSidebrOpen] = useState(false)
//   return (
//     <div
//       className="flex justify-between items-center px-4 sm:px-12 lg:px-24 
//       xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50
//       dark:bg-gray-900/70"
//     >
//       <img
//         src={theme === "dark" ? assets.logo_dark : assets.logo}
//         alt=""
//         className="w-32 sm:w-40"
//       />

//       <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ?
//        "max-sm:w-0 overflow-hidden": "max-sm:w-60 max-sm:pl-10"} max-sm:fixed 
//        top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col
//         max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5
//          transition-all `}>
//         <img  src={assets.close_icon} alt="" className="w-5 absolute right-4
//          top-4 sm:hidden" onClick={()=>setSidebrOpen(false)}/>

//         <a onClick={()=>setSidebrOpen(false)} href="#" className="sm:hover:border-b">Home</a>
//         <a onClick={()=>setSidebrOpen(false)} href="#services" className="sm:hover:border-b">Services</a>
//         <a onClick={()=>setSidebrOpen(false)} href="#our-work" className="sm:hover:border-b">Our Work</a>
//         <a onClick={()=>setSidebrOpen(false)} href="#contact-us" className="sm:hover:border-b">Contact Us</a>

//       </div>
//       <div className="flex items-center gap-2 sm:gap-4">

//         <ThemeToggleBtn theme={theme } setTheme={setTheme}/>
//         <img alt="" src={theme === "dark" ? assets.menu_icon_dark :assets.menu_icon}
//         onClick={()=>setSidebrOpen(true)} className="w-8 sm:hidden"/>

//         <a href="#contact-us" className="text-sm max-sm:hidden flex
//         items-center gap-2 bg-primary text-white px-6 py-2 rounded-full 
//         cursor-pointer hover:scale-103 transition-all">Connect <img src={assets.arrow_icon} width={14} alt=""/></a>
//       </div>
//     </div>
//   )
// }

// export default Navbar

// import React from "react"
// import assets from "../assets/Assets"

// const Navbar = ({theme ,setTheme}) => {
//   return (
//     <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 
//     xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50
//     dark:bg-gray-900/70 '>
//         <img src={theme === "dark" ? assets.logo_dark :assets.logo } className="w-32 sm:w-40"/>
      
//     </div>
//   )
// }

// export default Navbar


