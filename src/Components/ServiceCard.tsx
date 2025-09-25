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
    <div
      className={`relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border shadow-2xl transition-all
        ${dark 
          ? 'border-gray-700 shadow-white/10 bg-gray-900 text-white'   // 🔄 opposite
          : 'border-gray-200 shadow-gray-100 bg-white text-black'}`}
    >
      {/* gradient background blob */}
      <div
        className="pointer-events-none blur-2xl rounded-full
        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
        absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70"
        style={{ top: position.y - 150, left: position.x - 150 }}
      ></div>

      {/* card content */}
      <div className="flex items-center gap-10 p-8 z-10 relative">
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
  )
}

export default ServiceCard



// import React, { useState } from "react"

// interface Service {
//   icon: string
//   title: string
//   description: string
// }

// interface ServiceCardProps {
//   service: Service
//   index: number
// }



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
//    let dark=localStorage.getItem('theme')
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const [visible, setVisible] = useState(false)

//   return (
//     <div
//       className={`relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border shadow-2xl transition-all
//         ${
//           dark
//             ? 'border-gray-700 shadow-white/10 bg-gray-900 text-white' // 🔄 opposite
//             : 'border-gray-200 shadow-gray-100 bg-white text-black'
//         }`}
//       onMouseEnter={() => setVisible(true)}
//       onMouseLeave={() => setVisible(false)}
//       onMouseMove={(e) => {
//         const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
//         setPosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         })
//       }}
//     >
//       {/* gradient background blob */}
//       <div
//         className={`pointer-events-none blur-2xl rounded-full
//         bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
//         absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
//           visible ? 'opacity-70' : 'opacity-0'
//         }`}
//         style={{ top: position.y - 150, left: position.x - 150 }}
//       ></div>

//       {/* card content */}
//       <div className="flex items-center gap-10 p-8 z-10 relative">
//         <div className={`${dark ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}>
//           <img
//             src={service.icon}
//             alt={service.title}
//             className={`max-w-24 rounded-full m-2 ${
//               dark ? 'bg-gray-900' : 'bg-white'
//             }`}
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




// import React, { useState } from "react"

// interface Service {
//   icon: string
//   title: string
//   description: string
// }

// interface ServiceCardProps {
//   service: Service
//   index: number
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
//     let dark=localStorage.getItem('theme')
//   const [position, setPosition] = useState({ x: 0, y: 0 })

//   return (
//     <div
//       className={`relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border
//        ${
//           dark === 'dark' ? 'text-white' : 'text-black'
//         }`}
//       onMouseMove={(e) => {
//         const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
//         setPosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         })
//       }}
//     >
//       {/* gradient background blob */}
//       <div
//         className="pointer-events-none blur-2xl rounded-full
//           bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
//           absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70"
//         style={{ top: position.y - 150, left: position.x - 150 }}
//       />

//       {/* card content */}
//       <div
//         className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all 
//           rounded-[10px] bg-white dark:bg-gray-900 z-10 relative"
//       >
//         <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
//           <img
//             src={service.icon}
//             alt={service.title}
//             className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
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


// // import React, { useState } from 'react'

// // interface Service {
// //   icon: string
// //   title: string
// //   description: string
// // }

// // interface ServiceCardProps {
// //   service: Service
// //   index: number
// // }

// // const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
// //     const [position,setPosition] = useState({x:0,y:0})
// //   return (
// //     <div
// //       className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border
// //       border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 
// //       dark:shadow-white/10"
// //     >
// //       {/* gradient background blob */}
// //       <div
// //         className="pointer-events-none blur-2xl rounded-full
// //         bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
// //         absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70  " style={{top:position.y-150,left:position.x-150}}
// //       ></div>

// //       {/* card content */}
// //       <div
// //         className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all 
// //         rounded-[10px] bg-white dark:bg-gray-900 z-10 relative"
// //       >
// //         <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
// //           <img
// //             src={service.icon}
// //             alt=""
// //             className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
// //           />
// //         </div>
// //         <div className="flex-1">
// //           <h3 className="font-bold">{service.title}</h3>
// //           <p className="text-sm mt-2">{service.description}</p>
// //         </div>
// //       </div>
      
// //     </div>
// //   )
// // }

// // export default ServiceCard









// // // import React from 'react';


// // // interface Service {
// // //   img: string;
// // //   // you can add more fields if your service object has them
// // // }

// // // interface ServiceCardProps {
// // //   service: Service;
// // //   index: number;
// // // }

// // // const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
// // //   return (
// // //     <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border
// // //      border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 
// // //      dark:shadow-white/10'>
// // //       <div className='pointer-events-none blur-2xl rounded-full
// // //        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] 
// // //        absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70'></div>
// // //       <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all 
// // //       rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>
// // //         <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
// // //           <img src={service.icon} alt='' className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
// // //         </div>
// // //       </div>
// // //       <div className='flex-1'>
// // //         <h3 className='font-bold'>{Service.title}</h3>
// // //         <p className='text-sm mt-2'> {service.description}</p>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ServiceCard;