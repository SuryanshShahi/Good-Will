import React, { useEffect } from "react";

function Logout() {
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        window.location.href = "/login";

        console.log("logged out");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <></>;
}

export default Logout;
