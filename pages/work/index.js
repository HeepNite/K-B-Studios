
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import WorkSlider from '../../components/WorkSlider';


const Work = () => {
  return (
    <div className=" h-full py-36 xl:my-[3.5rem] flex items-center">
      <Bulb />

      <div className="container mx-auto flex flex-col gap-3 xl:flex-row gap-x-16 ">
        <motion.div className="flex items-center xl:items-start flex-col xl:flex-col xl:w-[38rem]" variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' >
          <h2 className=" h2 xl:mt-8"> My Work <span className="text-accent">.</span> </h2>
          <p className=" mb-4 max-w-[400px] xl:max-w[300px] lg:mx-0 xl:text-left text-center w-[36rem] xl:w-[25rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer.</p>
          <p className=" mb-4 max-w-[400px] xl:max-w[300px] lg:mx-0 xl:text-left text-center w-[36rem] xl:w-[25rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer.</p>
        </motion.div>

        <motion.div className=" w-full xl:max-w-[48rem] mx-auto lg:mx-0 " variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' >
          <WorkSlider />
        </motion.div>

      </div>

      <Circles />
    </div>
  )
};

export default Work;
