import Image from "next/image";


const Bulb = () => {
  return (
    <div className="absolute left-[-3rem] bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[240px]  ">
      <Image className="w-full h-full" src='/bulb.png' width={300} height={200} alt="bulb" />
    </div>
  )
};

export default Bulb;
