
import Circles from "../../components/Circles";

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { BsArrowRight } from "react-icons/bs";


const Contact = () => {
  return (
    <div className="h-full flex ">
      <div className="container mx-auto py-32 text-center xl:text-left flex justify-center items-center">
        <div className=" flex flex-col justify-center w-full max-w-[700px]">
          <motion.h2 className="h2 text-center mb-12" variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'>
            let&apos;s <span className="text-accent"> Connect </span>
          </motion.h2>

          <motion.form className="flex-1 flex items-center flex-col gap-6 w-full mx-auto" variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'>
            <div className="flex gap-x-6 w-full">
              <input className="input" type="text" placeholder="Name" />
              <input className="input" type="text" placeholder="Name" />
            </div>
            <input className="input" type="text" placeholder="Name" />
            <textarea className="textarea" placeholder="Message" name="" id="" cols="30" rows="10"></textarea>

            <button className="btn rounded-lg border border-white/50 max-w-[14rem] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500"> I&apos;m waiting for you!</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
