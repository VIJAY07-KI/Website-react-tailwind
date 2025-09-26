
import React, { useState } from "react"
import { motion } from "motion/react"

interface Service {
  icon: string
  title: string
  description: string
}

interface ServiceCardProps {
  service: Service
  index: number
  dark: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, dark }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="m-2 sm:m-4 rounded-xl overflow-hidden group"
      onMouseMove={handleMouseMove} // ✅ updates position
    >
      {/* Gradient border wrapper */}
      <div
        className={`rounded-xl p-[2px] transition-all duration-300
          bg-transparent group-hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500`}
      >
        {/* Inner solid card */}
        <div
          className={`relative rounded-xl p-8 flex items-center gap-10
            ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}
            shadow-2xl`}
        >
          {/* Gradient blob */}
          <div
            className="pointer-events-none blur-2xl rounded-full
              bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
              absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70"
            style={{ top: position.y - 150, left: position.x - 150 }}
          />

          <div
            className={`${dark ? "bg-gray-700" : "bg-gray-100"} rounded-full`}
          >
            <img
              src={service.icon}
              alt={service.title}
              className={`max-w-24 rounded-full m-2 ${
                dark ? "bg-gray-900" : "bg-white"
              }`}
            />
          </div>

          <div className="flex-1">
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard


// import React, { useState } from 'react'
// import {motion} from "motion/react"

// interface Service {
//   icon: string
//   title: string
//   description: string
// }

// interface ServiceCardProps {
//   service: Service
//   index: number
//   dark: boolean
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, dark }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 })

//   return (
//     <motion.div
//     initial={{opacity:0,y:30}}
//     whileInView={{opacity:1,y:0}}
//     transition={{duration:0.5,delay:index * 0.2}}
//     viewport={{once:true}}


//     className="m-2 sm:m-4 rounded-xl overflow-hidden group">
//       {/* Gradient border wrapper */}
//       <div
//         className={`rounded-xl p-[2px] transition-all duration-300
//           bg-transparent group-hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500`}
//       >
//         {/* Inner solid card */}
//         <div
//           className={`relative rounded-xl p-8 flex items-center gap-10
//             ${dark ? 'bg-gray-900 text-white' : 'bg-white text-black'}
//             shadow-2xl`}
//         >
//           {/* gradient blob (optional) */}
//           <div
//             className="pointer-events-none blur-2xl rounded-full
//               bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
//               absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70"
//             style={{ top: position.y - 150, left: position.x - 150 }}
//           ></div>

//           <div className={`${dark ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}>
//             <img
//               src={service.icon}
//               alt=""
//               className={`max-w-24 rounded-full m-2 ${dark ? 'bg-gray-900' : 'bg-white'}`}
//             />
//           </div>

//           <div className="flex-1">
//             <h3 className="font-bold">{service.title}</h3>
//             <p className="text-sm mt-2">{service.description}</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default ServiceCard


