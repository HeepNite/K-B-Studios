import Link from "next/link";

import { RiYoutubeLine, RiLinkedinLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri'
const Socials = () => {
  return (
    <section className="flex items-center gap-5 text-lg">
      <Link className="hover:text-accent transition-all duration-300" href='/'>
        <RiYoutubeLine size={25} />
      </Link>
      <Link className="hover:text-accent transition-all duration-300" href='/'>
        <RiLinkedinLine size={25} />
      </Link>
      <Link className="hover:text-accent transition-all duration-300" href='/'>
        <RiInstagramLine size={25} />
      </Link>
      <Link className="hover:text-accent transition-all duration-300" href='/'>
        <RiTwitterLine size={25} />
      </Link>
    </section>
  )
};

export default Socials;
