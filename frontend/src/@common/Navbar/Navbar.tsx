import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { TiSocialPinterest } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { Nav, Navbar } from "react-bootstrap";
import { useNav } from "./views/useNav";
import Image from "next/image";
import { Button } from "@/@common/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const NavbarComponent = ({ isBg, hide }: { isBg?: number; hide?: boolean }) => {
  const { nav, setNav } = useNav();
  const [rootUser, setRootUser] = useState();
  const getUserData = async () => {
    // const res = await fetch("http://localhost:4000/users", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    // });
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        console.log(res.data);
        setRootUser(res.data);
      })
      .catch((err) => console.log(err));
    // const data = await res.json();
    // console.log(data);
  };
  useEffect(() => {
    getUserData();
    console.log(rootUser);
  }, []);
  return (
    <div
      className="absolute z-[11] bg-no-repeat"
      style={{
        backgroundImage: isBg === 1 ? 'url("/Images/selectMode.jpg")' : "none",
        backgroundSize: isBg === 1 ? "100% 100%" : "",
      }}
    >
      <Navbar
        className="!py-6 d-lg-block d-none text-sm bg-[#1F1F1F] !px-10"
        expand="lg"
      >
        <div className="mx-auto flex w-full lg:max-w-[1240px]">
          <div className="flex items-center">
            <div className="list-none flex gap-3 text-[#3bcf93]">
              <GrFacebookOption size={16} className="cursor-pointer" />
              <RiLinkedinFill size={16} className="cursor-pointer" />
              <TiSocialPinterest size={18} className="cursor-pointer" />
              <AiOutlineTwitter size={16} className="cursor-pointer" />
              <AiOutlineInstagram size={16} className="cursor-pointer" />
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
            {!rootUser ? (
              <>
                <Link
                  href="/login"
                  className="ml-4 text-gray-300 cursor-pointer"
                >
                  Login
                </Link>
                <Link href="/signup" className="text-gray-300 cursor-pointer">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  href="/profile"
                  className="ml-4 text-gray-300 cursor-pointer"
                >
                  Profile
                </Link>
                <Link href="/logout" className="text-gray-300 cursor-pointer">
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </Navbar>
      <Navbar
        className={`my-10  !px-10 ${hide ? "!hidden" : "d-lg-block d-none"}`}
        expand="lg"
      >
        <div className="flex p-0 mx-auto w-full lg:max-w-[1240px]">
          <Link href="/">
            <Image
              src="/Images/logo-demo-3.png"
              alt="logo"
              height={45}
              width={183}
            />
          </Link>
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
            <Link href="/selectMode">
              <Button btnName="DONATE" />
            </Link>
          </div>
        </div>
      </Navbar>
      <Navbar className={`w-screen p-0 !px-10 flex-col z-20 `} expand="lg">
        <div
          className={`p-3 bg-white mx-auto w-full lg:max-w-[1240px] duration-300 ${
            hide && "lg:!hidden"
          } ${nav}`}
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
            </Nav>
          </Navbar.Collapse>
        </div>
        {!hide && isBg ? (
          <div
            className={`text-white my-36 lg:text-6xl sm:text-4xl text-2xl z-20 font-extrabold ${
              nav && "my-48"
            }`}
          >
            Make a Donation
          </div>
        ) : (
          <div className="h-[50vh]"></div>
        )}
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
