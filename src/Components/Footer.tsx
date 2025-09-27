import React from "react";
import assets from "../assets/Assets";
import { motion } from "motion/react";

interface FooterProps {
  theme: "light" | "dark";
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`pt-10 sm:pt-12 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 
        ${theme === "dark" ? "bg-gray-900 text-gray-400" : "bg-slate-50 text-gray-700"}`}
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:items-start">
        {/* Left - Logo + Text + Nav */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start space-y-5 text-sm"
        >
          {/* Text Logo */}
          {/* <div
            className={`font-bold text-2xl sm:text-3xl cursor-pointer ${
              theme === "dark" ? "text-white" : "text-black"
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


          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-6 lg:gap-8 lg:flex-row">
            <li>
              <a href="#hero" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:text-primary transition-colors">
                Our Work
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Right - Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-md"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-grow p-3 text-sm outline-none rounded-l-md border 
                ${theme === "dark" ? "border-gray-500 bg-gray-800" : "border-gray-300 bg-white"}`}
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 rounded-r-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className={`mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-xs
          ${theme === "dark" ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}
      >
        {/* Copyright */}
        <p>© 2025 Algorithra.Ai - All Rights Reserved</p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#"><img src={assets.facebook_icon} alt="Facebook" className="w-5 hover:opacity-80 transition" /></a>
          <a href="#"><img src={assets.twitter_icon} alt="Twitter" className="w-5 hover:opacity-80 transition" /></a>
          <a href="#"><img src={assets.instagram_icon} alt="Instagram" className="w-5 hover:opacity-80 transition" /></a>
          <a href="#"><img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 hover:opacity-80 transition" /></a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;


// import React from "react";
// import assets from "../assets/Assets";
// import {motion} from "motion/react";

// interface FooterProps {
//   theme: "light" | "dark";
// }

// const Footer: React.FC<FooterProps> = ({ theme }) => {
//   return (
//     <motion.footer
//     initial={{opacity:0,y:50}}
//     whileInView={{opacity:1,y:0}}
//     transition={{duration:0.8}}
//     viewport={{once:true}}

//       className={`pt-10 sm:pt-12 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 
//         ${theme === "dark" ? "bg-gray-900 text-gray-400" : "bg-slate-50 text-gray-700"}`}
//     >
//       {/* Top Section */}
//       <div className="flex flex-col lg:flex-row justify-between gap-10 lg:items-start">
//         {/* Left - Logo + Text + Nav */}
//         <motion.div 
//         initial={{opacity:0,x:-30}}
//         whileInView={{opacity:1,x:0}}
//         transition={{duration:0.6,delay: 0.2}}
//         viewport={{once:true}}

//         className="flex flex-col items-start space-y-5 text-sm">
//           <img
//             src={theme === "dark" ? assets.logo_dark : assets.logo}
//             className="w-32 sm:w-44"
//             alt="Company Logo"
//           />
//           <p className="max-w-md">
//             From strategy to execution, we craft digital solutions that move your business forward.
//           </p>

//           {/* Navigation Links */}
//           <ul className="flex flex-wrap gap-6 lg:gap-8 lg:flex-row">
//             <li>
//               <a href="#hero" className="hover:text-primary transition-colors">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="hover:text-primary transition-colors">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#our-work" className="hover:text-primary transition-colors">
//                 Our Work
//               </a>
//             </li>
//             <li>
//               <a href="#contact-us" className="hover:text-primary transition-colors">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </motion.div>

//         {/* Right - Newsletter */}
//         <motion.div 
//         initial={{opacity:0,x:30}}
//         whileInView={{opacity:1,x:0}}
//         transition={{duration:0.6,delay: 0.3}}
//         viewport={{once:true}}
        
//         className="w-full max-w-md">
//           <h3 className="font-semibold">Subscribe to our newsletter</h3>
//           <p className="text-sm mt-2 mb-6">
//             The latest news, articles, and resources, sent to your inbox weekly.
//           </p>
//           <form className="flex w-full">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className={`flex-grow p-3 text-sm outline-none rounded-l-md border 
//               ${theme === "dark" ? "border-gray-500 bg-gray-800" : "border-gray-300 bg-white"}`}
//             />
//             <button
//               type="submit"
//               className="bg-primary text-white px-6 rounded-r-md hover:bg-blue-700 transition-colors"
//             >
//               Subscribe
//             </button>
//           </form>
//         </motion.div>
//       </div>

//       {/* Bottom Section */}
//       <motion.div
//       initial={{opacity:0}}
//         whileInView={{opacity:1}}
//         transition={{duration:0.5,delay: 0.4}}
//         viewport={{once:true}}

//         className={`mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-xs
//         ${theme === "dark" ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}
//       >
//         {/* Copyright */}
//         <p>© 2025 algorithra.ai - All Rights Reserved</p>

//         {/* Social Links */}
//         <div className="flex gap-4 mt-4 sm:mt-0">
//           <a href="#"><img src={assets.facebook_icon} alt="Facebook" className="w-5 hover:opacity-80 transition" /></a>
//           <a href="#"><img src={assets.twitter_icon} alt="Twitter" className="w-5 hover:opacity-80 transition" /></a>
//           <a href="#"><img src={assets.instagram_icon} alt="Instagram" className="w-5 hover:opacity-80 transition" /></a>
//           <a href="#"><img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 hover:opacity-80 transition" /></a>
//         </div>
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;

