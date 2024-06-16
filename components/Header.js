import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";


const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <artclie className=" container mx-auto">
        <article className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
          <Link href='/'> <Image src='/logo.svg' width={250} height={48} alt="Logo Image" property="true" /></Link>
          <Socials />
        </article>
      </artclie>
    </header>
  )
};

export default Header;
