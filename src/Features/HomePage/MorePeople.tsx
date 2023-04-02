import Image from "next/image";
import React from "react";

const MorePeople = () => {
  return (
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
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
            Most organizations that are charities are required to registered
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
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
            Most organizations that are charities are required to registered
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
  );
};

export default MorePeople;
