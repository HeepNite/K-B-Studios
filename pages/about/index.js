'use client'
import { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiCloudflarepages,
} from "react-icons/si";
import Circles from "../../components/Circles";


import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Avatar from "../../components/Avatar";
import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5  key={1}/>,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1} />, <SiAdobexd key={2} />, <SiAdobephotoshop key={3} />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return (
    <div className="h-full  py-[2rem] my-32 text-center xl:text-left">
      <Circles />
      <motion.div className="hidden xl:flex absolute bottom-0 -left-[300px]" variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden ' >
        <Avatar />
      </motion.div>

      <motion.div className="container mx-auto h-full flex flex-col xl:my-40 xl:flex-row xl:gap-x-[6rem]" variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden'>
        <div className="xl:w-[32rem] flex flex-col gap-5 xl:gap-8 mb-4 ">
          <div className="flex flex-col gap-5 xl:gap-8">

            <h2 className="xl:text-5xl text-3xl text-white ">
              Captivating <span className=" text-accent"> stories </span> birth magnificent designs
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

          </div>
          <div className="relative flex flex-1 justify-between  ml-0 after:w-[1px] after:h-[5rem] xl:after:bg-white/50 after:absolute after:top-0 after:right-0">
            <div className="">
              <div className="text-5xl font-bold text-accent">
                <CountUp start={0} end={10} duration={4} />+
              </div>
              <p className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px] font-bold text-white w-28">
                Lorem Ipsum is simply
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-accent">
                <CountUp start={0} end={10} duration={10} />+
              </div>
              <p className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px] font-bold text-white w-28">
                Lorem Ipsum is simply
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent">
                <CountUp start={0} end={10} duration={8} />+
              </div>
              <p className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px] font-bold text-white w-28">
                Lorem Ipsum is simply
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent">
                <CountUp start={0} end={10} duration={8} />+
              </div>
              <p className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px] font-bold text-white w-28">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 xl:mt-[0.80rem] mb-4">
            {aboutData.map((item, itemIndex) => (
              <div key={itemIndex}
                className={`${index === itemIndex && " after:bg-accent text-accent after:transition-all after:w-[100%] after:duration-300"} cursor-pointer capitalize  xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                onClick={() => setIndex(itemIndex)}>
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60" >
                <div className="font-light mb-3 md:mb-0">
                  {item.title}
                </div>
                <div className=" hidden md:flex">-</div>
                <div>{item.stage} </div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) => (
                    <div key={itemIndex} className=" text-2xl transition-all text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
};

export default About;
