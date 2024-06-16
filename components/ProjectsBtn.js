import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div className=" mx-auto xl:mx-0">
      <Link className="relative flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group w-[185px] h-[185px] " href={'/work'}>
        <Image className='animate-spin-slow w-[141px] h-[148px]' src={'/rounded-text.png'} width={300} height={300} alt=" our projects" />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
