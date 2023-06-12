import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const router = useRouter();
  const PostData = async (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    axios
      .post("http://localhost:4000/login", {
        email,
        password,
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          router.push("/");
          console.log("Login Successful");
        } else {
          console.log("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      id="loginSignup"
      className="justify-content-center p-3 d-flex align-items-center absolute top-1/2 z-30 w-full pb-10"
    >
      <div
        className="rounded bg-white p-3"
        style={{
          width: "100%",
          maxWidth: "512px",
          boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
        }}
      >
        <div className="text-center justify-content-center d-flex py-4">
          <div className="" style={{ width: "314px" }}>
            <span
              className="fa fa-book fa-4x text-center"
              style={{ color: "#3bcf93" }}
            ></span>
            <div className="" style={{ fontWeight: "700", fontSize: "48px" }}>
              <span style={{ color: "#3bcf93" }}>Good</span>Will
            </div>
            <div
              className="my-2 mb-5"
              style={{ color: "#333333", fontSize: "16px" }}
            >
              Remember everything important.
            </div>
            <input
              name="text"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control shadow-none"
              placeholder="Enter email"
              style={{
                height: "45px",
                boxShadow: "1px solid #e6e6e6",
                borderRadius: "7px",
              }}
            />
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control shadow-none mt-2"
              placeholder="Password"
              style={{
                height: "45px",
                boxShadow: "1px solid #e6e6e6",
                borderRadius: "7px",
              }}
            />
            <div
              className="btn btn-primary border-0 w-100 align-items-center justify-content-center d-flex mt-3"
              style={{ height: "45px", background: "#3bcf93" }}
              onClick={PostData}
            >
              Continue
            </div>
            <div
              className="d-flex justify-content-center mt-5"
              style={{ marginBottom: "25px" }}
            >
              <input
                type="checkbox"
                className="form-check mr-2"
                style={{ width: "16px", cursor: "pointer" }}
              />
              <div style={{ color: "#737373" }}>Remember me for 30 days</div>
            </div>
            <div style={{ color: "#737373" }}>Don't have an account?</div>
            <Link href="/signup" className="text-decoration-none">
              <div
                className="mt-2"
                style={{
                  color: "#3bcf93",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Create account
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
