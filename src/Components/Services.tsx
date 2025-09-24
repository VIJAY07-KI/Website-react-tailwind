import React from 'react'
import assets from '../assets/Assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services: React.FC = () => {
  const dark = localStorage.getItem('theme')

  const servicesData: { title: string; description: string; icon: string }[] = [
    {
      title: "Advertising",
      description: "we turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "we help you execute your plan and deliver results.",
      icon: assets.ads_icon,
    },
    {
      title: "Content writing",
      description: "we help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description: "we help you build a strong social media presence and engage with your audience",
      icon: assets.social_icon,
    },
  ]

  return (
    <div
      id='services'
      className={`relative flex flex-col items-center gap-7 px-4 sm:px-12 
        lg:px-24 xl:px-40 pt-30 ${
          dark === 'dark' ? 'bg-white text-black' : 'bg-gray-900 text-white'
        }`}
    >
      <img
        src={assets.bgImage2}
        alt=''
        className='absolute -top-110 -left-70 -z-1 dark:hidden'
      />

      <Title
        title='How can we help?'
        desc='From Strategy to Execution,
         we craft digital solutions that move your business forward.'
      />

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} dark={dark !== 'dark'} />
        ))}
      </div>
    </div>
  )
}

export default Services



// import React from 'react'
// import assets from '../assets/Assets'
// import Title from './Title'
// import ServiceCard from './ServiceCard'

// const Services: React.FC = () => {
//   const dark = localStorage.getItem('theme')

//   const servicesData: { title: string; description: string; icon: string }[] = [
//     {
//       title: "Advertising",
//       description: "we turn bold ideas into powerful digital solutions that connect, engage...",
//       icon: assets.ads_icon,
//     },
//     {
//       title: "Content marketing",
//       description: "we help you execute your plan and deliver results.",
//       icon: assets.ads_icon,
//     },
//     {
//       title: "Content writing",
//       description: "we help you create a marketing strategy that drives results.",
//       icon: assets.content_icon,
//     },
//     {
//       title: "Social media",
//       description: "we help you build a strong social media presence and engage with your audience",
//       icon: assets.social_icon,
//     },
//   ]

//   return (
//     <div
//       id='services'
//       className={`relative flex flex-col items-center gap-7 px-4 sm:px-12 
//         lg:px-24 xl:px-40 pt-30 ${
//           dark === 'dark' ? 'text-white' : 'text-black'
//         }`}
//     >
//       <img
//         src={assets.bgImage2}
//         alt=''
//         className='absolute -top-110 -left-70 -z-1 dark:hidden'
//       />

//       <Title
//         title='How can we help?'
//         desc='From Strategy to Execution,
//          we craft digital solutions that move your business forward.'
//       />

//       <div className='flex flex-col md:grid grid-cols-2'>
//         {servicesData.map((service, index) => (
//           <ServiceCard key={index} service={service} index={index} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Services


// import React from 'react'
// import assets from '../assets/Assets'
// import Title from './Title'
// import ServiceCard from './ServiceCard'

// const Services: React.FC = () => {
//     let dark=localStorage.getItem('theme')
//   const servicesData: { title: string; description: string; icon: string }[] = [
//     {
//       title: "Advertising",
//       description: "we turn bold ideas into powerful digital solutions that connect, engage...",
//       icon: assets.ads_icon,
//     },
//     {
//       title: "Content marketing",
//       description: "we help you execute your plan and deliver results.",
//       icon: assets.ads_icon,
//     },
//     {
//       title: "Content writing",
//       description: "we help you create a marketing strategy that drives results.",
//       icon: assets.content_icon,
//     },
//     {
//       title: "Social media",
//       description: "we help you build a strong social media presence and engage with your audience",
//       icon: assets.social_icon,
//     },
//   ]

//   return (
//     <div
//       id='services'
//       className={`relative flex flex-col items-center gap-7 px-4 sm:px-12 
//      lg:px-24 xl:px-40 pt-30 ${dark !== 'dark' ? ' text-white' : ' text-black'} `}
//     >
//       <img
//         src={assets.bgImage2}
//         alt=''
//         className='absolute -top-110 -left-70
//         -z-1 dark:hidden'
//       />

//       <Title 
//         title='How can we help?'
//         desc='From Strategy to Execution,
//          we craft digital solutions that move your business forward. '
//       />
//       <div className='flex flex-col md:grid grid-cols-2'>
//         {servicesData.map((service,index)=>{
//             <ServiceCard key={index} service={service} index={index}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Services


// // import React from 'react'
// // import assets from '../assets/Assets'
// // import Title from './Title'

// // const Services = () => {
// //     const servicesData = [
// //         {
// //             title:"Advertising",
// //             description:"we turn bold ideas into powerful digital solutions that connect, engage...",
// //             icon:assets.ads_icon,
// //         },
// //         {
// //             title:"Content marketing",
// //             description:"we help you execute your plan and deliver results.",
// //             icon:assets.ads_icon,
// //         },
// //         {
// //             title:"Content writing",
// //             description:"we help you create a marketing strategy that drives results.",
// //             icon:assets.content_icon,
// //         },
// //         {
// //             title:"Social media",
// //             description:"we help you build a strong social media presence and engage with your audience",
// //             icon:assets.social_icon,
// //         },
// //     ]

// //   return (
// //     <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 
// //      lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white' >
// //         <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70
// //         -z-1 dark:hidden'/>

// //         <Title title='How can we help?' desc='From Strategy to Execution,
// //          we craft digital solutions that move your business forward. '/>
      
// //     </div>
// //   )
// // }

// // export default Services
