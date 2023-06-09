import { happeningCards } from "@/artifacts/happening";
import DonationCard from "@/components/DonationCard/DonationCard";
import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usehappening from "./views/usehappening";
import { Button } from "@/@common/Button";
import Link from "next/link";

const PrevArrow = (props: { onClick?: () => void }) => {
  return (
    <button
      aria-label="go to prev"
      className={`absolute -bottom-16 left-[35%] z-50 bg-[#D9D9D9] p-2 hover:bg-[#D9D9D990] md:left-0`}
      onClick={props.onClick}
    >
      <IoIosArrowBack size={25} />
    </button>
  );
};
const NextArrow = (props: { onClick?: () => void }) => {
  return (
    <button
      aria-label="go to next"
      className={`absolute -bottom-16 left-[55%] z-50 bg-[#D9D9D9] p-2 hover:bg-[#D9D9D990] md:left-14`}
      onClick={props.onClick}
    >
      <IoIosArrowForward size={25} />
    </button>
  );
};
const HappeningNow = () => {
  const { settings } = usehappening();
  return (
    <div className="happening-bg pt-28 pb-24">
      <div className="container">
        <div className="font-bold text-center mb-3 text-md text-green-200 opacity-70">
          GET UPDATED
        </div>
        <div className="font-bold text-center text-5xl text-white">
          Happening Now
        </div>
        <div className="mb-3 mt-16 sm:container container-fluid">
          <Slider
            {...settings}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {happeningCards?.map((e, idx) => {
              return (
                <DonationCard
                  key={idx}
                  image={e.image}
                  date={e.date}
                  author={e.author}
                  title={e.title}
                />
              );
            })}
          </Slider>
        </div>
        <div className="text-center mt-24">
          <Link href="/selectMode">
            <Button className="!py-[14px] !px-20" btnName="DONATE NOW" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HappeningNow;
