import Link from "next/link";
import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e: any) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e: any) => {
    e.preventDefault();

    const { fname, lname, email, mobile, password, cpassword } = user;
    console.log(user);
    const res = await fetch("/signup1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname,
        lname,
        email,
        mobile,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("All fields are mandatory");
    } else if (res.status === 409) {
      console.log("Email already exists");
    } else if (res.status === 401) {
      console.log("Password Didn't Match");
    } else if (res.status === 201) {
      window.location.href = "/login";
      console.log("SignUp Successful");
    } else {
      console.log("Invalid Credentials");
    }
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
        <div className="py-4">
          <div className="mx-4">
            <div className="justify-content-center d-flex">
              <div className="text-center">
                <span
                  className="fa fa-book fa-4x text-center"
                  style={{ color: "#3bcf93" }}
                ></span>
                <div
                  className=""
                  style={{ fontWeight: "700", fontSize: "48px" }}
                >
                  <span style={{ color: "#3bcf93" }}>Good</span>Will
                </div>
                <div
                  className="my-2"
                  style={{ color: "#333333", fontSize: "16px" }}
                >
                  Remember everything important.
                </div>
              </div>
            </div>

            <form method="POST" onSubmit={PostData}>
              <div
                className="py-3 row"
                style={{ color: "#525f7f", fontWeight: "600" }}
              >
                <div className="col-6 my-3">
                  <div>First Name:</div>
                  <input
                    type="text"
                    className="form-control border-0 mt-2"
                    name="fname"
                    value={user.fname}
                    onChange={handleInputs}
                    style={{
                      boxShadow:
                        "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                      height: "45px",
                    }}
                    placeholder="Enter FirstName"
                  />
                </div>
                <div className="col-6 my-3">
                  <div>Last Name:</div>
                  <input
                    type="text"
                    className="form-control border-0 mt-2"
                    name="lname"
                    value={user.lname}
                    onChange={handleInputs}
                    style={{
                      boxShadow:
                        "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                      height: "45px",
                    }}
                    placeholder="Enter LastName"
                  />
                </div>
                <div className="col-6 my-3">
                  <div>Email:</div>
                  <input
                    type="email"
                    className="form-control border-0 mt-2"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                    style={{
                      boxShadow:
                        "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                      height: "45px",
                    }}
                    placeholder="Enter Email"
                  />
                </div>
                <div className="col-6 my-3">
                  <div>Mobile:</div>
                  <input
                    type="tel"
                    className="form-control border-0 mt-2"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleInputs}
                    style={{
                      boxShadow:
                        "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                      height: "45px",
                    }}
                    placeholder="Enter Mobile"
                  />
                </div>
                <div className="col-6 my-3">
                  <div>Password:</div>
                  <input
                    type="password"
                    className="form-control border-0 mt-2"
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                    style={{
                      boxShadow:
                        "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                      height: "45px",
                    }}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="col-6 my-3">
                  <div>Re-Enter Password:</div>
                  <input
                    type="password"
                    className="form-control border-0 mt-2"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                    style={{
                      boxShadow:
                        "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                      height: "45px",
                    }}
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 align-items-center border-0 justify-content-center d-flex mt-3"
                style={{ height: "45px", background: "#3bcf93" }}
              >
                Continue
              </button>
            </form>
            <div className="text-center">
              <div
                className="mt-3"
                style={{ fontSize: "12px", color: "#a6a6a6" }}
              >
                By creating an account, you are agreeing to our{" "}
                <span style={{ color: "#3bcf93", cursor: "pointer" }}>
                  Terms of Service
                </span>{" "}
                and{" "}
                <span style={{ color: "#3bcf93", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </div>
              <div className="mt-4" style={{ color: "#737373" }}>
                Already have an account?
              </div>
              <Link href="/login" className="text-decoration-none">
                <div
                  className="mt-2"
                  style={{
                    color: "#3bcf93",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Sign in
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
