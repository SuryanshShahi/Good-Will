import emailjs from "@emailjs/browser";
async function displayRazorpay(amount, fullname, email, phone, balance) {
  const getEditor = () => {
    let list1 = localStorage.getItem("list1");
    if (list1) {
      return JSON.parse(list1);
    } else {
      return [];
    }
  };
  console.log(getEditor().fname);
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
      const emailData = {
        user_email: getEditor().email,
        name: getEditor().fname + " " + getEditor().lname,
        message: getEditor().message,
      };
      emailjs
        .send(
          "service_rbuflth",
          "template_47pjvno",
          emailData,
          "DVyNq_VqueaTqkXlE"
        )
        .then(
          (res) => {
            console.log(res, "sent");
          },
          (err) => {
            console.log(err);
          }
        );
    },
    prefill: {
      name: "Suryansh",
      email: "suryansh@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
export default displayRazorpay;
