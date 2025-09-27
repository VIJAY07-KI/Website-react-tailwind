import React,{useEffect,useState} from 'react'
import assets from '../assets/Assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from "motion/react"

const Services: React.FC = () => {
  // const dark = localStorage.getItem('theme')
   const[isOn,setIson]=useState(localStorage.getItem('theme'))
      useEffect(()=>{
        setIson(localStorage.getItem('theme'))
      })

  const servicesData: { title: string; description: string; icon: string }[] = [
    {
      title: "Advertising",
      description: "we turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "we help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
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
    <motion.div
     initial="hidden"
      whileInView="visible"
      transition={{staggerChildren:0.2}}
      viewport={{once:true}}

      id='services'
      className={`relative flex flex-col items-center gap-7 px-4 sm:px-12 
        lg:px-24 xl:px-40 pt-30 ${
          isOn !== 'dark' ? 'bg-white text-black' : 'bg-gray-900 text-white'
        }`}
    >
      <img
        src={assets.bgImage2}
        alt=''
        className='absolute -top-110 -left-70 -z-1 dark:hidden'
      />

      <Title
        title='How can we help?'
        desc='Our AI-powered digital solutions are designed to simplify complexity, unlock opportunities, and accelerate your growth.'
      />

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} dark={isOn === 'dark'} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services



