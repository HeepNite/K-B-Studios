//images
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar"

//Framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants"

const Home = () => {
  return (
    <div className="bgprimary/60 h-full w-full">

      <div className="w-full h-full bg-none xl:bg-cover xl:bg-explosion translate-z-0 xl:bg-no-repeat">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full w-5/6 mx-auto xl:bg-right absolute ">
          <div className=" ml-20">
            <motion.h1 className="h1" variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' >
              Transforming Ideas <br /> Into
              <span className="text-accent"> Digital Reality</span>
            </motion.h1>
            <motion.p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16" variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
            </motion.p>

            <div className='flex justify-center xl:hidden relative'>
              <ProjectsBtn />
            </div>
            <motion.div className='hidden xl:flex' variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'>
              <ProjectsBtn />
            </motion.div>
          </div>

        </div>
        <div className=' w-[1100px] h-full absolute right-0 bottom-0'>

          <div><ParticlesContainer /></div>
          <div className='w-full h-full max-[590px] max-h-[678px] absolute -bottom-32 lg:top-[50%] lg:left-[32%]'>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
``