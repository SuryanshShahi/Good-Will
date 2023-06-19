import { createContext } from "react";

export const UserContext = createContext<any>({
  userData: {
    btnActive: 500,
    totalBalance: 0,
    user: {},
    razorpayAmount: "",
  },
  setUserData: () => {},
});
