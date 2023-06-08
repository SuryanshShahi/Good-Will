import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { TiSocialPinterest } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { Nav, Navbar } from "react-bootstrap";
import { useNav } from "./views/useNav";
import Image from "next/image";
import { Button } from "@/@common/Button";

const NavbarComponent = () => {
  const { nav, setNav } = useNav();
  return (
    <div className="absolute z-10">
      <Navbar
        className="!py-6 d-lg-block d-none text-sm bg-[#1F1F1F] !px-10"
        expand="lg"
      >
        <div className="mx-auto flex w-full lg:max-w-[1240px]">
          <div className="flex items-center">
            <div className="list-none flex gap-3 -[#3bcf93]">
              <GrFacebookOption size={16} />
              <RiLinkedinFill size={16} />
              <TiSocialPinterest size={18} />
              <AiOutlineTwitter size={16} />
              <AiOutlineInstagram size={16} />
            </div>
            <div className="text-white ml-7 flex items-center">
              <BsTelephoneFill />
              &nbsp; +1234567890
            </div>
          </div>
          <div className="flex ml-auto list-none gap-3 text-gray-500">
            <li className="hover:text-gray-300 cursor-pointer">FAQ</li>|
            <li className="hover:text-gray-300 cursor-pointer">What We Do</li>|
            <li className="hover:text-gray-300 cursor-pointer">
              Become A Volunteer
            </li>
            |<li className="hover:text-gray-300 cursor-pointer">Contact Us</li>|
            <li className="ml-4 text-gray-300 cursor-pointer">Login</li>
            <li className="text-gray-300 cursor-pointer">Sign Up</li>
          </div>
        </div>{" "}
      </Navbar>
      <Navbar className="my-10 d-lg-block d-none !px-10" expand="lg">
        <div className="flex p-0 mx-auto w-full lg:max-w-[1240px]">
          <Image
            src="/Images/logo-demo-3.png"
            alt="logo"
            height={45}
            width={183}
          />
          <div className="ml-auto flex gap-5">
            <div>
              <div className="font-medium text-[17px] text-white">20000</div>
              <div className="text-[15px] text-green-300 opacity-[0.8]">
                Plants Protected
              </div>
            </div>
            <div>
              <div className="font-medium text-[17px] text-white">3M Ton</div>
              <div className="text-[15px] text-green-300 opacity-[0.8]">
                Water Protected
              </div>
            </div>
            <div className="mr-5">
              <div className="font-medium text-[17px] text-white">
                28k Sqmi.
              </div>
              <div className="text-[15px] text-green-300 opacity-[0.8]">
                Ocean Protected
              </div>
            </div>
            <Button btnName="DONATE" />
          </div>
        </div>
      </Navbar>
      <Navbar className="w-screen p-0 !px-10" expand="lg">
        <div
          className={`p-3 bg-white mx-auto w-full lg:max-w-[1240px] duration-300 ${nav}`}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto p-2 gap-[35px] font-[600]"
              defaultActiveKey="/"
            >
              <Nav.Link className="p-0 text-black" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="p-0 text-black" href="/pages">
                Pages
              </Nav.Link>
              <Nav.Link className="p-0 text-black" href="/about">
                About Us
              </Nav.Link>
              <Nav.Link className="p-0 text-black" href="/cases">
                Our Cases
              </Nav.Link>
              <Nav.Link className="p-0 text-black" href="/case-studies">
                Case Studies
              </Nav.Link>
              <Nav.Link className="p-0 text-black" href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="p-0 text-black" href="/features">
                Features
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Action
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
