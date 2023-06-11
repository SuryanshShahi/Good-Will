// const User = require("./model/userSchema");
const jwt = require("jsonwebtoken");
const User = require("../model/userProfileSchema");

const Authenticate = async (req, res, next) => {
  console.log(req.cookies, ">>>>>>>>>>>>>>");
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      //   console.log("User not found");
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized: No token provided");
    console.log(err);
  }
};
module.exports = Authenticate;
