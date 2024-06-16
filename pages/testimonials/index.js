import TestimonialSlider from "../../components/TestimonialSlider";

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Testimonials = () => {
  return (

    <div className="h-full py-32 text-center">
      <div className=" container mx-auto flex h-full flex-col justify-center">
        <motion.h2 className=" h2 mb-8 xl:mb-0" variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden'>
          <TestimonialSlider />
        </motion.div>

      </div>
    </div>

  )
};

export default Testimonials;
