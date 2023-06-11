import emailjs from "@emailjs/browser";
async function displayRazorpay(amount, fullname, email, phone, balance) {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const txnDate =
    date.getDate() +
    " " +
    months[date.getMonth() + 1] +
    ", " +
    date.getFullYear();
  const txnTime = date.getTime();
  const data = await fetch("http://localhost:4000/razorpay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount,
      txnDate,
      txnTime,
      fullname,
      email,
      phone,
      balance,
    }),
  }).then((t) => t.json());
  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: amount,
    name: "Good Will",
    description: "Wallet Transaction",
    image: "http://localhost:4000/logo.png",
    order_id: data.id,
    handler: function (res) {
      alert("PAYMENT ID ::" + res.razorpay_payment_id);
      alert("ORDER ID :: " + res.razorpay_order_id);

      emailjs
        .sendForm(
          "service_u8vj1ke",
          "template_dwlucdq",
          {
            user_email: "suryansh06shahi@gmail.com",
            message: "hello",
            name: "Suryansh",
          },
          "lCP5fKsL73HkyO8v6"
        )
        .then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    },
    prefill: {
      name: "Anirudh Jwala",
      email: "suryansh@gmail.com",
      contact: "9999999999",
    },
  };


  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
export default displayRazorpay;
