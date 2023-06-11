import { Button } from "@/@common/Button";
import { TextField } from "@mui/material";
import useHomePage from "./views/useHomePage";
import Link from "next/link";
const DonateNow = () => {
  const { setActive, handleChange, btnActive, transferFund, input, balance } =
    useHomePage("standard-basic");
  return (
    <div className="justify-center flex donation-bg px-[1.5rem]">
      <div className="text-center my-[85px] max-w-[610px]">
        <div className="font-bold sm:text-5xl text-4xl">Donate Today</div>
        <p className="sm:text-[20px] text-lg my-6">
          Charity law within the UK varies among England and Wales, Scotland and
          Northern Ireland, but the fundamental principles are the same.
        </p>
        <div className="flex gap-2 py-6 flex-wrap justify-center">
          <Button
            btnName="₹500"
            className={`sm:text-base text-sm ${
              btnActive !== 500 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => {
              setActive(500), handleChange(null);
            }}
          />
          <Button
            btnName="₹1000"
            className={`sm:text-base text-sm ${
              btnActive !== 1000 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => {
              setActive(1000), handleChange(null);
            }}
          />
          <Button
            btnName="₹2000"
            className={`sm:text-base text-sm ${
              btnActive !== 2000 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => {
              setActive(2000), handleChange(null);
            }}
          />
          <Button
            btnName="₹4000"
            className={`sm:text-base text-sm ${
              btnActive !== 4000 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => {
              setActive(4000), handleChange(null);
            }}
          />
          <TextField
            id="standard-basic"
            label="Other Amount (₹)"
            variant="standard"
            color="success"
            size="small"
            className="text-md md:ml-4 w-full md:max-w-[200px] md:my-0 my-[16px] max-w-xs"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <Link href="/selectMode">
          <Button className="!px-20 mt-3 !py-[14px]" btnName="DONATE NOW" />
        </Link>
      </div>
    </div>
  );
};

export default DonateNow;
