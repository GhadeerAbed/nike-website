import Link from "next/link";
import { hamburger } from "../../../public/assets/icons/page";
import { headerLogo } from "../../../public/assets/images/page";
import { navLinks } from "../../constants/page";

import Image from "next/image";

const Nav = () => {
  return (
    <header className="padding-x py-8  z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red" 
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 ">
          <Link href="/" className="hover:text-coral-red">Sign in</Link>
          <span>/</span>
          <Link href="/" className="hover:text-coral-red">Explore now</Link>
        </div>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
