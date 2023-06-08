import { Button } from "@/@common/Button";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";

const LandingPageCarousel = () => {
  return (
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
          {/* <img src="/Images/slider-1-item.png" alt="flag"/> */}
          <div className=" text-7xl my-3 font-bold">
            Plants give <span className="text-[#3bcf93]">Life</span>
          </div>
          <p className="text-[23px]">
            We build strength, stability and self reliance through shelter.
          </p>
          <Button btnName="DONATE" />
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
            Help Us Save The
            <span className="text-[#3bcf93] ml-3">Planet</span>
          </div>
          <p className="text-[23px]">
            We build strength, stability and self reliance through shelter.
          </p>

          <Button btnName="DONATE" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingPageCarousel;
