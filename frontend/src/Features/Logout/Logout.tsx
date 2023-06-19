import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

function Logout() {
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:4000/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: true,
      })
      .then((res) => {
        router.push("/login");
        toast.warn("Logged out !", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-login",
          hideProgressBar: true,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
}

export default Logout;
