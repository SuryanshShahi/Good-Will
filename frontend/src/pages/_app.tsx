import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState({} as any);
  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  useEffect(() => {
    window.addEventListener("offline", () => {
      toast.warn("No Internet Connection !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-login",
        hideProgressBar: true,
        autoClose: false,
      });
    });

    window.addEventListener("online", () => {
      toast.dismiss();
    });
  }, []);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Component {...pageProps} />{" "}
      <ToastContainer />
    </UserContext.Provider>
  );
}
