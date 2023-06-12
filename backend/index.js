require("dotenv").config();

const app = require("express")();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors");

const shortid = require("shortid");
const Razorpay = require("razorpay");

const bcrypt = require("bcrypt");
const UserProfile = require("./model/userProfileSchema");
const authenticate = require("./middleware/authenticate");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});
app.use(cors());

require("./db/conn");
const Payment = require("./model/userSchema");

app.get("/logo.png", (req, res) => {
  res.sendFile(path.join(__dirname, "logo.png"));
});

app.post("/razorpay", async (req, res) => {
  const { amount, txnDate, txnTime, fullname, email, phone, balance } =
    req.body;
  const payment_capture = 1;
  const currency = "INR";
  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
    const amt = amount;
    const user = new Payment({
      amount: amt,
      txnDate,
      txnTime,
      name: fullname,
      email: email,
      phone: phone,
      paymentId: response.id,
      receipt: shortid.generate(),
      currency: response.currency,
      balance,
    });

    await user.save();
    res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    console.log(error);
  }
});

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

app.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are mandatory" });
    }

    const userExist = await UserProfile.findOne({ email: email });
    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);
      token = await userExist.generateAuthToken();
      console.log(token);

      res.cookie(("jwtoken", token), {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credentials" });
      } else {
        res.status(201).json({ message: "login successful" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/signup", async (req, res) => {
  const { fname, lname, email, mobile, password, cpassword } = req.body;
  if (!fname || !lname || !email || !mobile || !password || !cpassword) {
    return res.status(422).json({ error: "All fields are mandatory" });
  }
  try {
    const userExist = await UserProfile.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(401).json({ error: "password doesn't match" });
    } else {
      const user = new UserProfile({
        fname,
        lname,
        email,
        mobile,
        password,
        cpassword,
      });

      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/users", authenticate, (req, res) => {
  // UserProfile.find("").then((data) => {
  //   res.status(201).json(data);
  // });
  res.send(req.rootUser);
});
app.get("/payments", async (req, res) => {
  const mydata = await Payment.find({});

  res.status(200).json({ mydata });
});

app.listen(4000, () => {
  console.log("server is running at 4000");
});
