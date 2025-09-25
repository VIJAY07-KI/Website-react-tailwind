// import React, { useState } from 'react'

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
//     <div
//       className={`relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border shadow-2xl transition-all
//         ${dark 
//           ? 'border-gray-700 shadow-white/10 bg-gray-900 text-white'   // 🔄 opposite
//           : 'border-gray-200 shadow-gray-100 bg-white text-black'}`}
//     >
//       {/* gradient background blob */}
//       <div
//         className="pointer-events-none blur-2xl rounded-full
//         bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
//         absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70"
//         style={{ top: position.y - 150, left: position.x - 150 }}
//       ></div>

//       {/* card content */}
//       <div className="flex items-center gap-10 p-8 z-10 relative">
//         <div className={`${dark ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}>
//           <img
//             src={service.icon}
//             alt=""
//             className={`max-w-24 rounded-full m-2 ${dark ? 'bg-gray-900' : 'bg-white'}`}
//           />
//         </div>
//         <div className="flex-1">
//           <h3 className="font-bold">{service.title}</h3>
//           <p className="text-sm mt-2">{service.description}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ServiceCard

import React, { useState } from 'react'

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

  return (
    <div className="m-2 sm:m-4 rounded-xl overflow-hidden group">
      {/* Gradient border wrapper */}
      <div
        className={`rounded-xl p-[2px] transition-all duration-300
          bg-transparent group-hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500`}
      >
        {/* Inner solid card */}
        <div
          className={`relative rounded-xl p-8 flex items-center gap-10
            ${dark ? 'bg-gray-900 text-white' : 'bg-white text-black'}
            shadow-2xl`}
        >
          {/* gradient blob (optional) */}
          <div
            className="pointer-events-none blur-2xl rounded-full
              bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
              absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70"
            style={{ top: position.y - 150, left: position.x - 150 }}
          ></div>

          <div className={`${dark ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}>
            <img
              src={service.icon}
              alt=""
              className={`max-w-24 rounded-full m-2 ${dark ? 'bg-gray-900' : 'bg-white'}`}
            />
          </div>

          <div className="flex-1">
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard


