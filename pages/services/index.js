import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";


const Services = () => {
  return (
    <div className=" h-full py-36 flex items-center">
      <Bulb />

      <div className="container mx-auto flex flex-col gap-3 xl:flex-row gap-x-8">
        <motion.div className="flex items-center xl:items-start flex-col xl:flex-col xl:w-[38rem]" variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' >
          <h2 className=" h2 xl:mt-8"> My services <span className="text-accent">.</span> </h2>
          <p className=" mb-4 max-w-[300px] xlmax-w[400px] lg:mx-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </motion.div>

        <motion.div className=" w-full xl:max-w-[48rem] mx-auto lg:mx-0 " variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' >
          <ServiceSlider />
        </motion.div>

      </div>

      <Circles />
    </div>
  )
};

export default Services;
