import Image from "next/image";

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image className='translate-z-0' src={'/avatar.png'} width={590} height={678} alt='Mariano and Ruben Avatar' />
    </div>
  )
};

export default Avatar;
