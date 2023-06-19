import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const res = await fetch("http://localhost:4000/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // credentials: "include",
    });

    const data = await res.json();
    console.log(data, "#3333333");
    setUserData(data);
  };
  useEffect(() => {
    getUserData();
    console.log(userData);
    setUser(getData());
  }, []);

  const getData = () => {
    let list3 = localStorage.getItem("list3");
    if (list3) {
      return JSON.parse(list3);
    } else {
      return [];
    }
  };

  const [isActive, setActive] = useState(true);
  const [user, setUser] = useState([]);

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = (e) => {
    e.preventDefault();
    setActive(true);
    console.log(user);
  };

  useEffect(() => {
    localStorage.setItem("list3", JSON.stringify(user));
  }, [user]);

  return (
    <div className="bg-[#e6e6e6]">
      <div className="flex">
        <div className="max-w-[280px] text-[#7d7d7d] bg-white w-full p-4">
          <div className="font-bold text-lg my-3 text-[#3f3f3f]">
            MY ACCOUNT
          </div>
          <div>Dashboard</div>
          <div>Edit Profile</div>
          <div>Change Password</div>
          <hr></hr>
          <div className="font-bold text-lg my-3 text-[#3f3f3f]">
            CONTRIBUTIONS
          </div>
          <div>My Contributions</div>
          <div>Following</div>
          <div>Receipts</div>
          <hr></hr>
          <div>Sign Out</div>
          <hr></hr>
          <div className="mb-4 mt-5">Need Help?</div>
          <div>1.823.445.22</div>
          <div>help@chariti.theme</div>
        </div>
        <div className="m-3 pt-4 space-y-3 w-full">
          <div
            className="py-3 px-4 position-relative bg-white flex items-center"
            style={{
              // minHeight: "50vh",
              borderRadius: "15px",
              boxShadow: "0 0 2rem 0 rgb(136 152 170 / 15%)",
            }}
          >
            <div className="text-center">
              <div
                className="text-dark mx-auto h-20 w-20 bg-red-400"
                style={{
                  boxShadow: "0 0 2rem 0 rgb(136 152 170 / 15%)",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#32325d",
                }}
              >
                {userData.fname || ""} {userData.lname || ""}
              </div>
              <div
                style={{
                  color: "#32325d",
                  fontWeight: "400",
                  fontSize: "12px",
                }}
              >
                B.tech, CSE
              </div>
            </div>
            <div className="position-relative flex flex-col justify-center mt-3 items-center text-center ml-auto">
              <div style={{ color: "#32325d", fontWeight: "600" }}>
                Major Project - GoodWill
              </div>
              <div style={{ color: "#525F7F" }}>Gautam Buddha University</div>
              <div
                style={{
                  color: "#32325d",
                  fontWeight: "400",
                  fontSize: "12px",
                }}
              >
                {user.city || ""}, {user.country || ""}
              </div>
            </div>
          </div>
          <div className="">
            <div
              className=""
              style={{
                minHeight: "50vh",
                borderRadius: "15px",
                background: "#f8f9fe",
                boxShadow: "0 0 2rem 0 rgb(136 152 170 / 15%)",
                border: "1px solid rgba(0, 0, 0, .05)",
              }}
            >
              <div className="mb-4">
                <form method="GET" onSubmit={PostData}>
                  <div
                    className="d-flex align-items-center py-4 px-4 bg-white"
                    style={{
                      borderRadius: "15px 15px 0px 0px",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    <div className="">My Account</div>
                    {isActive ? (
                      <div
                        className="btn btn-primary ml-auto border-0"
                        style={{ height: "fit-content" }}
                        onClick={() => setActive(false)}
                      >
                        Edit Profile
                      </div>
                    ) : (
                      <div
                        className="btn btn-primary ml-auto px-4 border-0"
                        style={{ height: "fit-content" }}
                      >
                        <button
                          id="button"
                          type="submit"
                          className="bg-transparent border-0 text-white"
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </div>

                  {isActive ? (
                    <div>
                      <div>
                        {" "}
                        <div
                          className="mt-4 px-4"
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#8898aa",
                          }}
                        >
                          USER INFORMATION
                        </div>
                        <div
                          key={userData._id}
                          className="px-5 pt-3"
                          style={{ color: "#525f7f", fontWeight: "600" }}
                        >
                          <div className="d-flex mt-3">
                            <div>First Name:</div>
                            <div className="ml-auto">{userData.fname}</div>
                          </div>
                          <div className="d-flex mt-3">
                            <div>Last Name:</div>
                            <div className="ml-auto">{userData.lname}</div>
                          </div>
                          <div className="d-flex mt-3">
                            <div>Email:</div>
                            <div className="ml-auto">{userData.email}</div>
                          </div>
                          <div className="d-flex mt-3">
                            <div>Mobile:</div>
                            <div className="ml-auto">{userData.mobile}</div>
                          </div>
                        </div>
                      </div>
                      <hr className="m-4" style={{ color: "white" }}></hr>
                      <div>
                        {" "}
                        <div
                          className="px-4"
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#8898aa",
                          }}
                        >
                          CONTACT INFORMATION
                        </div>
                        <div
                          className="px-5 pt-3"
                          style={{ color: "#525f7f", fontWeight: "600" }}
                        >
                          <div className="d-flex mt-3">
                            <div>Address:</div>
                            <div className="ml-auto text-right">
                              {user.address || "- not added -"}
                            </div>
                          </div>
                          <div className="d-flex mt-3">
                            <div>City:</div>
                            <div className="ml-auto">
                              {user.city || "- not added -"}
                            </div>
                          </div>
                          <div className="d-flex mt-3">
                            <div>Country:</div>
                            <div className="ml-auto">
                              {user.country || "- not added -"}
                            </div>
                          </div>
                          <div className="d-flex mt-3">
                            <div>Postal Code:</div>
                            <div className="ml-auto">
                              {user.postal || "- not added -"}
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="m-4" style={{ color: "white" }}></hr>
                      <div>
                        <div
                          className="px-4"
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#8898aa",
                          }}
                        >
                          ABOUT ME
                        </div>
                        <div
                          className="px-5 pt-3"
                          style={{ color: "#525f7f", fontWeight: "600" }}
                        >
                          <div>About Me:</div>
                          <div className="ml-auto mt-3">
                            {user.aboutMe || "- not added -"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <div
                          className="mt-4 px-4"
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#8898aa",
                          }}
                        >
                          USER INFORMATION
                        </div>
                        <div
                          className="px-5 py-3 row"
                          style={{
                            color: "#525f7f",
                            fontWeight: "600",
                          }}
                        >
                          <div className="col-6 my-3">
                            <div>First Name:</div>
                            <input
                              type="text"
                              className="form-control border-0 mt-2"
                              name="fname"
                              value={userData.fname || user.name}
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
                              value={userData.lname || user.lname}
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
                              value={userData.email || user.email}
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
                              value={userData.mobile || user.mobile}
                              onChange={handleInputs}
                              style={{
                                boxShadow:
                                  "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                                height: "45px",
                              }}
                              placeholder="Enter Mobile"
                            />
                          </div>
                        </div>
                      </div>
                      <hr
                        className="m-4"
                        style={{ color: "rgb(0,0,0,0.2)" }}
                      ></hr>
                      <div>
                        {" "}
                        <div
                          className="px-4 pt-2"
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#8898aa",
                          }}
                        >
                          CONTACT INFORMATION
                        </div>
                        <div
                          className="px-5 py-3 row"
                          style={{
                            color: "#525f7f",
                            fontWeight: "600",
                          }}
                        >
                          <div className="col-12 my-3">
                            <div>Address:</div>
                            <input
                              type="text"
                              className="form-control border-0 mt-2"
                              name="address"
                              value={user.address}
                              onChange={handleInputs}
                              style={{
                                boxShadow:
                                  "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                                height: "45px",
                              }}
                              placeholder="Address"
                            />
                          </div>
                          <div className="col-4 my-3">
                            <div>City:</div>
                            <input
                              type="text"
                              className="form-control border-0 mt-2"
                              name="city"
                              value={user.city}
                              onChange={handleInputs}
                              style={{
                                boxShadow:
                                  "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                                height: "45px",
                              }}
                              placeholder="City"
                            />
                          </div>
                          <div className="col-4 my-3">
                            <div>Country:</div>
                            <input
                              type="text"
                              className="form-control border-0 mt-2"
                              name="country"
                              value={user.country}
                              onChange={handleInputs}
                              style={{
                                boxShadow:
                                  "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                                height: "45px",
                              }}
                              placeholder="Country"
                            />
                          </div>
                          <div className="col-4 my-3">
                            <div>Postal Code:</div>
                            <input
                              type="tel"
                              className="form-control border-0 mt-2"
                              name="postal"
                              value={user.postal}
                              onChange={handleInputs}
                              style={{
                                boxShadow:
                                  "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                                height: "45px",
                              }}
                              placeholder="Postal Code"
                            />
                          </div>
                        </div>
                      </div>
                      <hr
                        className="m-4"
                        style={{ color: "rgb(0,0,0,0.2)" }}
                      ></hr>
                      <div>
                        <div
                          className="px-4 mb-2"
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#8898aa",
                          }}
                        >
                          ABOUT ME
                        </div>
                        <div
                          className="px-5 pt-4"
                          style={{
                            color: "#525f7f",
                            fontWeight: "600",
                          }}
                        >
                          <div>About Me:</div>
                          <textarea
                            name="aboutMe"
                            value={user.aboutMe}
                            onChange={handleInputs}
                            rows={4}
                            className="form-control border-0 mt-2"
                            style={{
                              boxShadow:
                                "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
