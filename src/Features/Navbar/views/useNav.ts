import { useEffect, useState } from "react";

export const useNav = () => {
  const [nav, setNav] = useState<string>("");

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY > 215) {
        setNav("fixed-top !max-w-full");
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
