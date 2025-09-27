import React from "react";
import Title from "./Title";
import assets from "../assets/Assets";
import toast from "react-hot-toast";
import {motion} from "motion/react"

const ContactUs: React.FC = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "9150b730-ec17-48c4-b40c-5d253e65fd00");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        // safely reset the form
        if (form instanceof HTMLFormElement) form.reset();
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.";
      toast.error(message);
    }
  };

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren:0.2}}
    viewport={{once:true}}
    
    id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
       initial={{opacity:0,y:30}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5,delay: 0.4}}
       viewport={{once:true}}

        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        {/* Name Field */}
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <p className="mb-2 text-sm font-medium">Your email</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-max flex gap-2 items-center text-sm px-10 py-3 rounded-full bg-primary text-white cursor-pointer hover:scale-103 transition-all"
        >
          Submit
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;




