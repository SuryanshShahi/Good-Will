import Image from "next/image";
import React from "react";

const SavePlants = () => {
  return (
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
              Charity law within the UK varies among England and Wales, Scotland
              and North ern Ireland, but the fundamental
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
              Charity law within the UK varies among England and Wales, Scotland
              and North ern Ireland, but the fundamental
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
              Charity law within the UK varies among England and Wales, Scotland
              and North ern Ireland, but the fundamental
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
  );
};

export default SavePlants;
