import { Button } from "@/@common/Button";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../../utils/load-contract";
const DonateNow = () => {
  const [web3api, setweb3api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [reload, setReload] = useState(false);
  const [btnActive, setActive] = useState(500);
  const [input, setInput] = useState(null);

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

  const transferFund = async () => {
    const { contract, web3 } = web3api;
    await contract.transfer({
      from: account,
      value: web3.utils.toWei(`${amount}`, "ether"),
    });

    reloadPage();
    const acc = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  };

  return (
    <div className="justify-center flex donation-bg">
      <div className="text-center my-[85px] max-w-[610px]">
        <div className="font-bold text-[59px]">Donate Today</div>
        <p className="text-[20px] my-6">
          Charity law within the UK varies among England and Wales, Scotland and
          Northern Ireland, but the fundamental principles are the same.
        </p>
        <div className="flex gap-2 py-6">
          <Button
            btnName="₹500"
            className={`${
              btnActive !== 500 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => {
              setActive(500), handleChange(null);
            }}
          />
          <Button
            btnName="₹1000"
            className={`${
              btnActive !== 1000 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => {
              setActive(1000), handleChange(null);
            }}
          />
          <Button
            btnName="₹2000"
            className={`${
              btnActive !== 2000 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => {
              setActive(2000), handleChange(null);
            }}
          />
          <Button
            btnName="₹4000"
            className={`${
              btnActive !== 4000 &&
              "bg-transparent !border-black text-black !text-md"
            }`}
            onclick={() => {
              setActive(4000), handleChange(null);
            }}
          />
          <TextField
            id="standard-basic"
            label="Other Amount (₹)"
            variant="standard"
            color="success"
            size="small"
            className="text-md ml-4 w-full"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            onChange={(e) => handleChange(e.target.value)}
            onBl
          />
        </div>
        <Button
          className="!px-20 mt-3 !py-[14px]"
          btnName="DONATE NOW"
          onclick={transferFund}
        />
        ₹ {(balance * 104327.87).toFixed(2)}
      </div>
    </div>
  );
};

export default DonateNow;
