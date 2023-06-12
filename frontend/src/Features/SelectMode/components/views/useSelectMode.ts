import { useEffect, useState } from "react";
import displayRazorpay from "utils/PaymentGateway";

const useSelectMode = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  let name, value;
  const handleInputs = (e: any) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (input: number, btnActive: number, balance: number) => {
    displayRazorpay(
      input ? input : btnActive,
      user.fname + " " + user.lname,
      user.email,
      user.phone,
      "₹ " + balance
    );
  };
  useEffect(() => {}, [user]);


  useEffect(() => {
    localStorage.setItem("list1", JSON.stringify(user));
  }, [user]);
  return { user, setUser, handleInputs, handleSubmit };
};

export default useSelectMode;
