import { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../../../utils/load-contract";
import { UserContext } from "@/contexts/UserContext";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { toast } from "react-toastify";
import useSelectMode from "@/Features/SelectMode/components/views/useSelectMode";
const useHomePage = (inputId) => {
  const [web3api, setweb3api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const { userData, setUserData } = useContext(UserContext);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [reload, setReload] = useState(false);
  const [btnActive, setActive] = useState(500);
  const [payBtnActive, setPayBtnActive] = useState(1);
  const [payementMethod, setPayementMethod] = useState(1);
  const [input, setInput] = useState(0);
  const reloadPage = () => setReload(!reload);
  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3api;
      const balance = await web3.eth.getBalance(contract?.address);
      setBalance(web3.utils.fromWei(balance, "ether"));
    };
    web3api.contract && loadBalance();
  }, [web3api, reload]);

  useEffect(() => {
    const loadProviders = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("Payment1", provider);

      if (provider) {
        provider.request({ method: "eth_requestAccounts" });
        setweb3api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error("Please install Metamask");
      }
    };
    loadProviders();
  }, []);

  useEffect(() => {
    const getAcc = async () => {
      const accounts = await web3api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3api.web3 && getAcc();
  }, [web3api.web3]);

  const handleChange = (value) => {
    setInput(value);
  };
  useEffect(() => {
    if (!input) {
      document.getElementById("standard-basic").value = null;
    }
  }, [input]);
  var amount = (input ? input : btnActive) * 0.0000096;

  const getEditor = () => {
    let list1 = localStorage.getItem("list1");
    if (list1) {
      return JSON.parse(list1);
    } else {
      return [];
    }
  };

  const transferFund = async () => {
    const { contract, web3 } = web3api;
    console.log(input ? input : btnActive, "hhhhhhhh");
    await contract.transfer({
      from: account,
      value: web3.utils.toWei(`${amount}`, "ether"),
    });
    const emailData = {
      user_email: getEditor().email,
      phone: getEditor().phone,
      name: getEditor().fname + " " + getEditor().lname,
      message: getEditor().message,
      amount: "₹" + input ? input : btnActive,
    };
    console.log(emailData);

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
    const email = emailData.user_email;
    const fullname = emailData.name;
    const phone = emailData.phone;
    await fetch("http://localhost:4000/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: input ? input : btnActive,
        txnDate,
        txnTime,
        fullname,
        email,
        phone,
        balance: (balance * 104327.87).toFixed(2),
      }),
    })
      .then((t) => console.log(t, "i m here"))
      .catch((err) => console.log(err));

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
    toast.success("Payment Successful !", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-login",
      hideProgressBar: true,
    });
    reloadPage();
    // const acc = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });
  };

  useEffect(() => {
    setUserData({
      razorpayAmount: input,
      btnActive: btnActive,
      totalBalance: (balance * 104327.87).toFixed(2),
    });
  }, [btnActive, input]);

  return {
    account,
    setAccount,
    balance,
    setBalance,
    transferFund,
    reload,
    setReload,
    btnActive,
    input,
    setInput,
    setPayBtnActive,
    payBtnActive,
    handleChange,
    payementMethod,
    setActive,
    setPayementMethod,
  };
};

export default useHomePage;
