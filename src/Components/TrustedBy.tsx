import React from "react"
import { company_logos } from "../assets/Assets"

const TrustedBy: React.FC = () => {
     let dark=localStorage.getItem('theme')
  return (
    <div className={`flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 ${dark !== 'dark' ? ' text-white' : ' text-black'}`}>
      <h3 className="font-semibold">Trusted by Leading Companies</h3>

      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  )
}

export default TrustedBy
