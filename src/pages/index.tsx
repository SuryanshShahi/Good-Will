import { Button } from "@/@common/Button";
import Image from "next/image";
import { Nav, Navbar, Container, Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="absolute z-10">
          <Navbar className="py-4 w-screen text-sm bg-black" expand="lg">
            <Container>
              <div className="flex">
                <div className="list-none flex gap-3 text-green-500">
                  <li className="">f</li>
                  <li className="">f</li>
                  <li className="">f</li>
                  <li className="">f</li>
                </div>
                <div className="text-white ml-7">
                  <span>f</span>&nbsp; +1234567890
                </div>
              </div>
              <div className="flex list-none gap-3 text-gray-500">
                <li className="hover:text-gray-300 cursor-pointer">FAQ</li>|
                <li className="hover:text-gray-300 cursor-pointer">
                  What We Do
                </li>
                |
                <li className="hover:text-gray-300 cursor-pointer">
                  Become A Volunteer
                </li>
                |
                <li className="hover:text-gray-300 cursor-pointer">
                  Contact Us
                </li>
                |<li className="ml-4 text-gray-300 cursor-pointer">Login</li>
                <li className="text-gray-300 cursor-pointer">Sign Up</li>
              </div>
            </Container>{" "}
          </Navbar>
          <Navbar className="my-10" expand="lg">
            <Container className="flex p-0">
              <Image
                src="/Images/logo-demo-3.png"
                alt="logo"
                height={45}
                width={183}
              />
              <div className="ml-auto flex gap-5">
                <div>
                  <div className="font-medium text-[17px] text-white">
                    20000
                  </div>
                  <div className="text-[15px] text-green-300 opacity-[0.8]">
                    Plants Protected
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[17px] text-white">
                    3M Ton
                  </div>
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
                <Button name="DONATE" />
              </div>
            </Container>
          </Navbar>
          <Navbar className="w-screen" expand="lg">
            <Container className="p-3 bg-white ">
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
            </Container>
          </Navbar>
        </div>

        <Carousel interval={5000} controls={false} fade>
          <Carousel.Item>
            <img
              className="h-screen w-screen"
              src="/Images/hp3-slider-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="mb-10">
              <Image
                className="mx-auto"
                height={60}
                width={60}
                src="/Images/slider-1-item.png"
                alt="flag"
              />
              <div className=" text-7xl my-3 font-bold">
                Plants give <span className="text-green-500">Life</span>
              </div>
              <p className="text-[23px]">
                We build strength, stability and self reliance through shelter.
              </p>
              <Button name="DONATE" />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="h-screen w-screen"
              src="/Images/hp3-slider-2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="mb-10">
              <div className=" text-7xl mb-3 font-bold">
                Help Us Save The<span className="text-green-500">Planet</span>
              </div>
              <p className="text-[23px]">
                We build strength, stability and self reliance through shelter.
              </p>

              <Button name="DONATE" />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="container">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-24 gap-4">
            <div className="flex gap-3">
              <Image
                height={65}
                width={65}
                src="/Images/hp3-col-1.png"
                alt="image"
                className="h-fit mt-3"
              />
              <div>
                <div className="text-[29px] mb-2 font-bold">Save Plants</div>
                <div className="leading-8">
                  Charity law within the UK varies among England and Wales,
                  Scotland and North ern Ireland, but the fundamental
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                height={65}
                width={65}
                src="/Images/hp3-col-2.png"
                alt="image"
                className="h-fit mt-3"
              />
              <div>
                <div className="text-[29px] mb-2 font-bold">Save Plants</div>
                <div className="leading-8">
                  Charity law within the UK varies among England and Wales,
                  Scotland and North ern Ireland, but the fundamental
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                height={65}
                width={65}
                src="/Images/hp3-col-3.png"
                alt="image"
                className="h-fit mt-3"
              />
              <div>
                <div className="text-[29px] mb-2 font-bold">Save Plants</div>
                <div className="leading-8">
                  Charity law within the UK varies among England and Wales,
                  Scotland and North ern Ireland, but the fundamental
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              height={23}
              width={75}
              src="/Images/hp3-counter-divider.png"
              alt="image"
            />
          </div>
        </div>

        <div className="justify-center flex donation-bg">
          <div className="text-center my-[85px] max-w-2xl">
            <div className="font-bold text-[59px]">Donate Today</div>
            <p className="text-[20px] my-6">
              Charity law within the UK varies among England and Wales, Scotland
              and Northern Ireland, but the fundamental principles are the same.
            </p>
            <div className="flex gap-2 py-6">
              <Button name="$10" />
              <Button
                name="$25"
                bgColor="text-transparent"
                color="text-black"
                border="border-[2.4px] border-black"
              />
              <Button
                name="$50"
                bgColor="text-transparent"
                color="text-black"
                border="border-[2.4px] border-black"
              />
              <Button
                name="$100"
                bgColor="text-transparent"
                color="text-black"
                border="border-[2.4px] border-black"
              />
            </div>
            <button className="font-[500] text-white px-20 mt-3 text-sm bg-green-400 py-[14px]">
              DONATE NOW
            </button>
          </div>
        </div>

        <div className="container my-40 space-y-28">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <Image
              src="/Images/hp3-about-left.jpg"
              height={380}
              width={515}
              alt="image"
            />
            <div className="px-[20px]">
              <div className="font-bold  text-4xl mb-6 text-green-500">
                More People<br></br>More impact
              </div>
              <div className="pt-1 bg-black w-7 my-[20px]"></div>
              <p className="leading-10 text-2xl">
                Charity law within the UK varies among England and Wales,
                Scotland and Northern Ireland, but the fundamental principles
                are the same. Most organizations that are charities are required
                to registered
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div className="px-[20px]">
              <div className="font-bold text-gray-400 text-sm mb-6">
                GET INVOLVED WITH US
              </div>
              <div className="font-bold  text-4xl mb-6 text-green-500">
                Let’s Protect The Future
              </div>
              <div className="pt-1 bg-black w-7 my-[20px]"></div>
              <p className="leading-10 text-2xl">
                Charity law within the UK varies among England and Wales,
                Scotland and Northern Ireland, but the fundamental principles
                are the same. Most organizations that are charities are required
                to registered
              </p>
            </div>
            <Image
              src="/Images/hp3-about-right.jpg"
              height={380}
              width={515}
              alt="image"
            />
          </div>
        </div>

        <div className="justify-center flex happening-bg">
          <div className="text-center my-[85px] max-w-2xl">
            <div className="font-bold text-md text-green-200 opacity-70">
              GET UPDATED
            </div>
            <div className="font-bold text-5xl text-white">Happening Now</div>
            <div>
              <Image
                height={65}
                width={65}
                src="/Images/hp3-col-1.png"
                alt="image"
                className="h-fit mt-3"
              />
              <div className="p-10">
                  <span></span>
              </div>
            </div>
            <button className="font-[500] text-white px-20 mt-3 text-sm bg-green-400 py-[14px]">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
