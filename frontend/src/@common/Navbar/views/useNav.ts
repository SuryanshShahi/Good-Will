import { useEffect, useState } from "react";

export const useNav = () => {
  const [nav, setNav] = useState<string>("");

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY > 215) {
        setNav(
          "fixed-top !max-w-full shadow-[0_0.3rem_0.5rem_rgba(0,0,0,.15)]"
        );
      } else {
        setNav("");
      }
    };
    window.addEventListener("scroll", changeNav);
  }, []);

  return {
    nav,
    setNav,
  };
};
