import { Button } from "@/@common/Button";
import useHomePage from "@/Features/HomePage/views/useHomePage";
import { TextField } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";
const PaymentMode = () => {
  const {
    handleChange,
    btnActive,
    setActive,
    setPayBtnActive,
    payBtnActive,
    input,
    payementMethod,
    setPayementMethod,
    transferFund,
    balance,
  } = useHomePage();
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div className="bg-white sm:p-12 p-6 lg:ml-auto mx-auto max-w-md shadow-xl duration-500">
      <div className="text-center text-xl font-bold mb-3">
        Select Donation Amount
      </div>
      <div className="flex gap-2 flex-wrap justify-center py-6">
        <Button
          btnName="₹500"
          className={`rounded sm:text-base text-sm ${
            btnActive !== 500 &&
            "bg-transparent !border-[#3bcf93] !text-[#3bcf93]"
          }`}
          onclick={() => {
            handleChange(null), setActive(500);
          }}
        />
        <Button
          btnName="₹1000"
          className={`rounded sm:text-base text-sm ${
            btnActive !== 1000 &&
            "bg-transparent !border-[#3bcf93] !text-[#3bcf93]"
          }`}
          onclick={() => {
            handleChange(null), setActive(1000);
          }}
        />
        <Button
          btnName="₹2000"
          className={`rounded sm:text-base text-sm ${
            btnActive !== 2000 &&
            "bg-transparent !border-[#3bcf93] !text-[#3bcf93]"
          }`}
          onclick={() => {
            handleChange(null), setActive(2000);
          }}
        />
        <Button
          btnName="₹4000"
          className={`rounded sm:text-base text-sm ${
            btnActive !== 4000 &&
            "bg-transparent !border-[#3bcf93] !text-[#3bcf93]"
          }`}
          onclick={() => {
            handleChange(null), setActive(4000);
          }}
        />
      </div>
      <TextField
        id="standard-basic"
        label="Other Amount (₹)"
        variant="standard"
        color="success"
        size="small"
        value={userData.razorpayAmount}
        className="text-md w-full"
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
        onChange={(e) => handleChange(e.target.value)}
      />

      <div className="text-center my-5 !text-sm">
        <Button
          btnName="Donate Online"
          className={`px-3 ${
            payBtnActive !== 1 &&
            "bg-transparent !border-[#3bcf93] !text-[#3bcf93] !text-md"
          }`}
          onclick={() => setPayBtnActive(1)}
        />
        <Button
          btnName="Donate Offline"
          className={`px-3 ${
            payBtnActive !== 0 &&
            "bg-transparent !border-[#3bcf93] !text-[#3bcf93] !text-md"
          }`}
          onclick={() => setPayBtnActive(0)}
        />
      </div>
      <div className="text-center text-sm text-[#bcbcbc] font-bold my-4">
        PAYEMENT METHOD
      </div>
      {payBtnActive ? (
        <div>
          <div className="flex items-center gap-4 mt-[35px] justify-center mb-4">
            <div
              className={`h-14 rounded-sm flex items-center px-2 cursor-pointer ${
                payementMethod === 1 && "!border-orange-500"
              }`}
              style={{ border: "1.5px solid transparent" }}
              onClick={() => setPayementMethod(1)}
            >
              <Image
                className="h-14"
                height={56}
                width={121}
                src="/Images/Razorpay_logo.svg"
                alt="flag"
              />
            </div>
            <div
              className={`h-14 rounded-sm flex items-center px-2 cursor-pointer ${
                payementMethod === 0 && "!border-orange-500"
              }`}
              style={{ border: "1.5px solid transparent" }}
              onClick={() => setPayementMethod(0)}
            >
              <Image
                className="h-7"
                height={56}
                width={121}
                src="/Images/metamask.png"
                alt="flag"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <Image
              className="h-[23px]"
              height={23}
              width={49}
              src="/Images/visa.png"
              alt="flag"
            />
            <Image
              className="h-[23px]"
              height={23}
              width={90}
              src="/Images/master-card.png"
              alt="flag"
            />
            <Image
              className="h-[23px]"
              height={23}
              width={51}
              src="/Images/american-express.png"
              alt="flag"
            />
            <Image
              className="h-[23px]"
              height={23}
              width={27}
              src="/Images/jcb.png"
              alt="flag"
            />
          </div>
          <select className="p-3 text-sm font-light out border w-full my-4">
            <option>A One Time</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      ) : (
        <div className="!mt-[30px]">
          <ul className="font-light text-sm my-4 p-0">
            <li>Please transfer funds to</li>
            <li>
              Bank name :<span className="font-bold"> ICICI</span>
            </li>
            <li>
              Account Number :<span className="font-bold"> 1111-1111-1111</span>
            </li>
            <li>
              Swift Code : <span className="font-bold"> XXCCVV</span>
            </li>
          </ul>
          <p className="text-[#bcbcbc] text-sm">
            * By clicking the donate button, your record will be stored in our
            database as pending transaction. After your payment verifed, we will
            send receipt to your email,
          </p>
        </div>
      )}
      {payementMethod ? (
        <Button
          className="w-full !py-[14px] sm:mb-4 mb-[40px]"
          btnName="DONATE NOW"
          form="form"
          type="submit"
        />
      ) : (
        <Button
          className="w-full !py-[14px] sm:mb-4 mb-[40px]"
          btnName="DONATE NOW"
          onclick={()=>transferFund()}
        />
      )}
    </div>
  );
};

export default PaymentMode;
