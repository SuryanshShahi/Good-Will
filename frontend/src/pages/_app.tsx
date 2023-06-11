import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";

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
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Component {...pageProps} />{" "}
    </UserContext.Provider>
  );
}
