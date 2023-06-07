import { Button } from "@/@common/Button";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const DonateNow = () => {
  const [btnActive, setActive] = useState(1);
  return (
    <div className="justify-center flex donation-bg">
      <div className="text-center my-[85px] max-w-2xl">
        <div className="font-bold text-[59px]">Donate Today</div>
        <p className="text-[20px] my-6">
          Charity law within the UK varies among England and Wales, Scotland and
          Northern Ireland, but the fundamental principles are the same.
        </p>
        <div className="flex gap-2 py-6">
          <Button
            btnName="₹500"
            className={`${
              btnActive !== 1 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => setActive(1)}
          />
          <Button
            btnName="₹1000"
            className={`${
              btnActive !== 2 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => setActive(2)}
          />
          <Button
            btnName="₹2000"
            className={`${
              btnActive !== 3 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => setActive(3)}
          />
          <Button
            btnName="₹4000"
            className={`${
              btnActive !== 4 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => setActive(4)}
          />
          <TextField
            id="standard-basic"
            label="Other Amount (₹)"
            variant="standard"
            color="success"
            size="small"
            className="text-md ml-4"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
        </div>
        <Button className="!px-20 mt-3 !py-[14px]" btnName="DONATE NOW" />
      </div>
    </div>
  );
};

export default DonateNow;
