import Image from "next/image";

const Circles = () => {
  return (
    <div>
      <Image className="w-[200] xl:w-[300px] absolute right-0 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 " src='/circles.png' width={200} height={200} alt='' />
    </div>
  )
};

export default Circles;
