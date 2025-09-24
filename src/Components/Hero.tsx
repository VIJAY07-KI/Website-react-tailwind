import React from "react"
import assets from "../assets/Assets" // ✅ make sure capitalization matches your file

const Hero: React.FC = () => {
    let dark=localStorage.getItem('theme')
    
  return (
    <div
      id="hero"
      className={`flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden
        ${dark !== 'dark' ? ' text-white' : ' text-black'}`}
    >
      {/* Trusted by */}
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={assets.group_profile} alt="Group Profile" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>

      {/* Heading with gradient */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
        Turning imagination into
        <br />
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact
      </h1>
      <p className={`text-sm sm:text-lg font-medium${dark !== 'dark' ? ' text-white' : ' text-black'}
      max-w-4/5 sm:max-w-lg pb-3`}>Creating meaningful connections and turning big ideas into interactive digital experiences</p>

      <div className="relative">
        <img src={assets.hero_img} alt="" className="w-full max-w-6xl"/>
        <img src={assets.bgImage1} alt="" className="absolute -top-40 -right-40 
         sm:-top-100 sm:-right-70 -z-1 dark:hidden"/>
      </div>
    </div>
  )
}

export default Hero


// import React from 'react'
// import assets from '../assets/assets'

// const Hero = () => {
//   return (
//     <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      
//       <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
//         <img className='w-20' src={assets.group_profile} alt="" />
//         <p className='text-xs font-medium'>Trusted by 10k+ people</p>
//       </div>
    
//     </div>
//   )
// }

// export default Hero