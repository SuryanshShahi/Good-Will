import { TextField, TextareaAutosize } from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import useSelectMode from "./views/useSelectMode";
import useHomePage from "@/Features/HomePage/views/useHomePage";
import { UserContext } from "@/contexts/UserContext";
import Form from "./Form";

const Banner = () => {
  // const { btnActive, input, transferFund } = useHomePage();
  // const { userData, setUserData } = useContext(UserContext);

  // const { user, handleInputs, handleSubmit } = useSelectMode();
  return (
    <div className="w-full flex flex-col container lg:mx-4">
      <div className="grid md:grid-cols-2 w-full gap-10">
        <Image
          className="w-[470px] md:mx-0 mx-auto sm:w-[272px] col-span-1"
          height={400}
          width={400}
          src="/Images/selectModel1.jpg"
          alt="flag"
        />
        <div className="w-full mr-10 col-span-1">
          <div className="text-sm font-bold text-[#bdedd3]">
            OU ARE DONATING TO :
          </div>
          <div className="text-2xl font-extrabold text-white">
            Chariti Foundation
          </div>
          <div className="text-sm font-extrabold mt-4 text-[#bdedd3]">
            $12,470.00
          </div>
          <div className="w-full bg-white h-1.5 mt-2">
            <div className=" bg-[#4d5dd4] h-1.5 w-[41%]"></div>
          </div>
          <div className="text-xs text-white font-bold mt-2">41% DONATED</div>
        </div>
      </div>
      <div className="mt-28 lg:block hidden">
        <Form />
      </div>
    </div>
  );
};

export default Banner;
