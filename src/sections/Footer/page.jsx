import Link from "next/link";
import { copyrightSign } from "../../../public/assets/icons/page";
import { footerLogo } from "../../../public/assets/images/page";
import { footerLinks, socialMedia } from "../../constants/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faWhatsapp,
  
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="mx-3"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[30px] h-[30px] hover:text-[#e96fb2]"
                />
              </Link>
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <Link
                href="https://www.pinterest.com/"
                target="_blank"
                className="mx-3"
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="w-[30px] h-[30px] hover:text-[#E60124]"
                />
              </Link>
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <Link
                href="https://www.whatsapp.com/"
                target="_blank"
                className="mx-3"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-[30px] h-[30px] hover:text-[#0CC143]"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
