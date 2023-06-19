import useHomePage from "@/Features/HomePage/views/useHomePage";
import { UserContext } from "@/contexts/UserContext";
import { TextField, TextareaAutosize } from "@mui/material";
import React, { useContext } from "react";
import useSelectMode from "./views/useSelectMode";

const Form = () => {
  const { btnActive, input, transferFund, balance } = useHomePage();
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData, "asddsdsdasd");
  const { user, handleInputs, handleSubmit } = useSelectMode();
  return (
    <div className="sm:p-10 p-[20px]">
      <div className="text-xl font-extrabold">Personal Details</div>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault(),
            handleSubmit(
              userData.razorpayAmount,
              userData.btnActive,
              (balance * 104327.87).toFixed(2)
            );
        }}
        className="grid sm:grid-cols-2 mt-8 grid-cols-1 gap-5 place-items-center"
      >
        <TextField
          id="standard-basic"
          label="First Name"
          variant="outlined"
          color="success"
          name="fname"
          size="medium"
          className="text-md w-full"
          value={user.fname}
          onChange={handleInputs}
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="outlined"
          color="success"
          name="lname"
          size="medium"
          className="text-md w-full"
          value={user.lname}
          onChange={handleInputs}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="outlined"
          color="success"
          name="email"
          size="medium"
          type="email"
          className="text-md w-full"
          value={user.email}
          onChange={handleInputs}
        />
        <TextField
          id="standard-basic"
          label="Phone No."
          variant="outlined"
          color="success"
          name="phone"
          size="medium"
          type="tel"
          className="text-md w-full"
          value={user.phone}
          onChange={handleInputs}
        />
        <TextareaAutosize
          minRows={6}
          maxRows={6}
          className="w-full outline-none px-2 pt-1"
          style={{ border: "1px solid silver" }}
          value={user.message}
          name="message"
          placeholder="Message"
          onChange={handleInputs}
        />
      </form>
    </div>
  );
};

export default Form;
