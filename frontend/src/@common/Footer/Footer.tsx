import Image from "next/image";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-20 py-20 lg:px-20 sm:px-10 text-white bg-neutral-800 footer">
        <div>
          <Image
            src="/Images/footer-logo.png"
            height={78}
            width={92}
            alt="footer-logo"
            className="h-[78px] w-[92px]"
          />
          <p className="text-[#c7c7c7] mt-10">
            Towards the end of the 19th century, with the advent of the New
            Liberalism and the innovative
          </p>
          <div className="flex gap-5 mt-4 lg:justify-center items-center">
            <AiFillFacebook size={25} />
            <AiFillLinkedin size={25} />
            <AiOutlineTwitter size={25} />
            <AiOutlineInstagram size={25} />
          </div>
        </div>
        <div className="list-none">
          <h4 className="text-base mb-9 font-extrabold">CONTACT INFO</h4>
          <ul className="text-[#c7c7c7] text-sm pl-0">
            <li>Gautam Buddha University</li>
            <li>Greater Noida</li>
            <li>Pincode - 201312</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <AiOutlinePhone size={18} className="text-[#3bcf93] rotate-90" />
            <div className="font-medium text-sm">
              Greater Noida : <span className="font-light">1800-2355-2356</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <HiOutlineMailOpen size={18} className="text-[#3bcf93]" />
            <div className="font-light text-sm">contact@Chariti.theme</div>
          </div>
        </div>
        <div className="list-none text-sm font-light">
          <h4 className="text-base mb-9 font-extrabold">QUICK LINKS</h4>
          <li className="flex items-center hover:text-[#969696] cursor-pointer gap-3 mb-3">
            <IoIosArrowForward size={12} className="text-white" />
            About Our Organization
          </li>
          <hr className="h-[0.2px] opacity-[0.08]"></hr>
          <li className="flex items-center hover:text-[#969696] cursor-pointer gap-3 mb-3">
            <IoIosArrowForward size={12} className="text-white" />
            Become a Volunteer
          </li>
          <hr className="h-[0.2px] opacity-[0.08]"></hr>
          <li className="flex items-center hover:text-[#969696] cursor-pointer gap-3 mb-3">
            <IoIosArrowForward size={12} className="text-white" />
            Case Studies
          </li>
          <hr className="h-[0.2px] opacity-[0.08]"></hr>
          <li className="flex items-center hover:text-[#969696] cursor-pointer gap-3 mb-3">
            <IoIosArrowForward size={12} className="text-white" />
            Sponsors
          </li>
          <hr className="h-[0.2px] opacity-[0.08]"></hr>
          <li className="flex items-center hover:text-[#969696] cursor-pointer gap-3 mb-3">
            <IoIosArrowForward size={12} className="text-white" />
            FAQ
          </li>
          <hr className="h-[0.2px] opacity-[0.08]"></hr>
        </div>
        <div>
          <h4 className="text-base mb-9 font-extrabold">URGENT CAUSES</h4>
          <div className="space-y-4">
            <div className="flex">
              <Image
                src="/Images/donation-1.jpg"
                height={80}
                width={80}
                alt="footer-item1"
                className="h-20 w-20"
              />
              <div className="ml-4 w-full">
                <div>Second Hand Goods Donation</div>
                <div className="w-full bg-white h-1.5 mt-2">
                  <div className=" bg-[#4d5dd4] h-1.5 w-[31%]"></div>
                </div>
                <div className="text-xs text-[#c0c0c0] font-bold mt-2">
                  31% DONATED
                </div>
              </div>
            </div>
            <div className="flex">
              <Image
                src="/Images/donation-1.jpg"
                height={80}
                width={80}
                alt="footer-item1"
                className="h-20 w-20"
              />
              <div className="ml-4 w-full">
                <div>Education Needed</div>
                <div className="w-full bg-white h-1.5 mt-2">
                  <div className=" bg-[#4d5dd4] h-1.5 w-[41%]"></div>
                </div>
                <div className="text-xs text-[#c0c0c0] font-bold mt-2">
                  41% DONATED
                </div>
              </div>
            </div>
            <div className="flex">
              <Image
                src="/Images/donation-1.jpg"
                height={80}
                width={80}
                alt="footer-item1"
                className="h-20 w-20"
              />
              <div className="ml-4 w-full">
                <div>Save Child Africa</div>
                <div className="w-full bg-white h-1.5 mt-2">
                  <div className=" bg-[#4d5dd4] h-1.5 w-[51%]"></div>
                </div>
                <div className="text-xs text-[#c0c0c0] font-bold mt-2">
                  51% DONATED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 bg-black sm:flex text-center items-center sm:space-y-0 space-y-2 font-light text-sm text-white lg:px-20 sm:px-10">
        <div className="flex gap-2 items-center justify-center">
          <div className="hover:text-[#969696] duration-400 cursor-pointer">
            Privacy Policy
          </div>
          |
          <div className="hover:text-[#969696] duration-400 cursor-pointer">
            Terms Of Use
          </div>
        </div>
        <div className="text-[#969696] ml-auto">
          Copyright 2020 Chariti Theme, All Right Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
