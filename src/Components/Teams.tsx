import React,{useState,useEffect} from "react";
import Title from "./Title";
import { teamData } from "../assets/Assets";
import {motion} from "motion/react"

type Team = {
  image: string;
  name: string;
  title: string;
};

const Teams: React.FC = () => {
    const[isOn,setIson]=useState(localStorage.getItem('theme'))
        useEffect(()=>{
          setIson(localStorage.getItem('theme'))
        })
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
     
    
    className={`flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 ${isOn==='dark'?'text-white':"text-black"}`}>
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand's success."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team: Team, index: number) => (
          <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.4,delay:index * 0.1}}
          viewport={{once:true}}

            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border 
                       border-gray-200 dark:border-gray-700 
                       bg-white text-black 
                       dark:bg-black dark:text-white 
                       shadow-xl shadow-gray-100 dark:shadow-white/5 
                       hover:scale-103 transition-all duration-400"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;


