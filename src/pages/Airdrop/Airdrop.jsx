import React, { useEffect, useState } from 'react'
import { Hero, Section } from "../../Utilities"
import {
  useAccount,
  useConnect,
  useNetwork,
  useWalletClient,
} from 'wagmi';
import "./Airdrop.css";

import { formatEther, parseEther } from "viem";
import { readContracts } from '@wagmi/core';
import TokenABI from "../../chain_interaction/SupCoin.json";
import AirdropABI from "../../chain_interaction/AirdropPlatform.json";
import { toast } from "react-toastify";
import { confirmTransactionReceipt, checkTxIsSucceedOrNot } from "../../chain_interaction/client";
import { setRefreshFlag } from "../../redux-toolkit/reducers/Staking";
import { useDispatch, useSelector } from "react-redux";
import Reveal from "react-awesome-reveal"
import { fadeInRight, fadeInUp } from "../../common/constants";
import { Backdrop, CircularProgress } from "@mui/material";

function Airdrop() {
  const dispatch = useDispatch();
  const refreshFlag = useSelector(state => state.staking.refreshFlag);
  const [targetDate, setTargetDate] = useState(new Date(process.env.REACT_APP_SUPCOIN_AIRDROP_END_DATE * 1000));
  const [countdown, setCountDown] = useState(0);
  const [claimAmount, setClaimAmount] = useState(0);
  const [startTime, setStartTime] = useState(process.env.REACT_APP_SUPCOIN_AIRDROP_START_DATE);
  const [endTime, setEndTime] = useState(process.env.REACT_APP_SUPCOIN_AIRDROP_END_DATE);
  const { address, isConnected } = useAccount();
  const [supWalletBalance, setSupWalletBalance] = useState(0);
  const { data: connectionData } = useConnect();
  const { data: walletClient } = useWalletClient();
  const { chain } = useNetwork();
  const [claimableAmount, setClaimableAmount] = useState(0);
  const [working, setWorking] = useState(false);
  const [claimingHash, setClaimingHash] = useState(null);
  const [showSuccessContent, setShowSuccessContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = getTimeRemaining(targetDate);
      setCountDown(timeRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getTimeRemaining = (targetDate) => {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    readWalletSupBalance();
  }, [address, isConnected])

  const readWalletSupBalance = async () => {
    try {
      if (address !== undefined && address !== null) {
        const data = await readContracts({
          contracts: [
            {
              address: process.env.REACT_APP_SUPCOIN_ADDRESS,
              abi: TokenABI,
              functionName: 'balanceOf',
              args: [address],
              wallet: address
            },
            {
              address: process.env.REACT_APP_AIRDROP_PLATFORM_ADDRESS,
              abi: AirdropABI,
              functionName: 'Whitlist',
              args: [address],
              wallet: address
            }
          ]
        })
        console.log("balance data >>> ", data);
        setSupWalletBalance(data !== undefined && formatEther(data[0]["result"]));
        setClaimableAmount(data !== undefined && formatEther(data[1]["result"]));
        setClaimAmount(data !== undefined && formatEther(data[1]["result"]));
      }
    } catch (err) {
      console.error(err);
    }
  }

  const onClickClaim = async () => {
    if (isConnected) {
      if (chain.id !== 5) {
        toast.warning("Please change the network of your wallet into Goerli and try again. SUP staking platform works on Goerli network.");
        return;
      }
    } else {
      toast.warning("Connect your wallet!");
      return;
    }
    try {
      setWorking(true);
      const claimHash = await walletClient.writeContract({
        address: process.env.REACT_APP_AIRDROP_PLATFORM_ADDRESS,
        abi: AirdropABI,
        functionName: "claim",
        args: [parseEther((claimAmount !== undefined && claimAmount?.toString()) || "0")],
        wallet: address,
      });
      setClaimingHash(claimHash);
    } catch (err) {
      setWorking(false);
      console.error(err);
    }
  }

  useEffect(() => {
    ; (async () => {
      if (claimingHash) {

        setTimeout(async () => {
          try {
            const receipt = await confirmTransactionReceipt(claimingHash);

            console.log(receipt);

            const succeed = await checkTxIsSucceedOrNot(claimingHash);
            if (succeed) {
              setShowSuccessContent(true);
              readWalletSupBalance();
              dispatch(setRefreshFlag(!refreshFlag));
              setWorking(false);
              setTimeout(() => {
                setShowSuccessContent(false);
                readWalletSupBalance();
                setClaimingHash(null);
              }, 5000);
            } else {
              setWorking(false);
              setClaimingHash(null);
            }
          } catch (err) {
            setClaimingHash(null);
            setWorking(false);
            console.log(err);
          }
        }, 3000);
      }
    })()
  }, [claimingHash])

  const RenderSuccessContents = (label, txHash) => {
    return <Reveal keyframes={fadeInUp} className='onStep' delay={0} duration={800} triggerOnce>
      <div>
        {label}
        <div className="underline text-12 ">
          <a href={`https://goerli.etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer">View on Goerli Etherscan</a>
        </div>
      </div>
    </Reveal >
  }

  return (
    <div id='airdrop'>
      <Hero className="container" height={100}  >
        <div style={{
          display: "flex ",
          justifyContent: "space-evenly"
        }}
        >
          <div className='text-light' data-aos="fade-up"
          >
            <h1 className="heading-lg bold">Airdrop</h1>
            <p className="text-big bold">Available tokens ⇒ 11,260,000 tokens<br></br>
              All you need to do here is to complete quick tasks by engaging our social media channels and get rewarded for it with supcoins.
            </p>
          </div>

          <div className="col-md-5 "
          >
            {/* <div className="buy-section text-center text-light ml-md-auto">
              <h6 className="bold">CLAIM YOUR SUPCOIN!</h6>
              <h6 className="text-primary mt-3 bold">AVAILABLE UNTIL</h6>
              <div className="count-down d">
                <div className="time">
                  <h3 className='m-0 bold'>{countdown.days}</h3>
                  <p className='m-0'>Days</p>
                </div>
                <div className="time bold">
                  <h3 className='m-0 bold'>{countdown.hours}</h3>
                  <p className='m-0'>Hours</p>
                </div>
                <div className="time">
                  <h3 className='m-0 bold'>{countdown.minutes}</h3>
                  <p className='m-0'>Minutes</p>
                </div>
                <div className="time">
                  <h3 className='m-0 bold'>{countdown.seconds}</h3>
                  <p className='m-0'>Seconds</p>
                </div>
              </div>

              <div className="CARD bg-success">
                <div className="inner-card "
                  style={{
                    width: parseInt(endTime) - new Date().getTime() / 1000 > 0 ? Number((parseInt(endTime) - new Date().getTime() / 1000) * 100 /
                      (parseInt(endTime) - parseInt(startTime)))?.toFixed(2) + "%" : "0%"

                  }}></div>
                <p className="m-0 CARD-text"
                >Until close claim</p>
              </div>

              <h5 className="mt-3 bold">SUPCOIN BALANCE:  ${Number(parseFloat(supWalletBalance) * process.env.REACT_APP_SUP2USDT_RATE)?.toFixed(2)}</h5>
              <p className="mt-2">1 SUP = {parseFloat(0.08)} USD</p>

              <div className="buy-form text-left"
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ width: "100%", border: "1px solid #fff ", paddingLeft: "5px", marginBottom: "15px" }} >
                  <span>Amount to claim</span>
                  <div className="input d-flex">
                    <input type="string" id='other' value={claimAmount} onChange={(e) => setClaimAmount(e.target.value)} />
                  </div>
                </div>
              </div>

              <button className="btn btn-primary buy-btn btn-block"
                onClick={() => onClickClaim()}
              >Claim</button>
              {claimingHash && showSuccessContent && RenderSuccessContents("Successfully claimed!", claimingHash)}
            </div> */}
          </div>
        </div>
      </Hero>

      <div className="pri-light-bg">
        <Section pd="100px 0" className="container">
          <h1 className='mb-5'>Airdrop System 2 - $90,000 Airdrop <br /> Social media campaign System</h1>

          <div className="row">
            <div className="col-md-6">
              <h3>Available tokens ⇒ 11,260,000 tokens</h3>
              <p>All you need to do here is to complete quick tasks by engaging our social media channels and get rewarded for it with supcoins.</p>
              <p>Airdrop Allocation ⇒ 11,260,000 tokens (According to the tokenomics)
                Duration ⇒ (1 - 4 weeks) {`{this can be altered to suit any marketing style}`}</p>
              <p>Goal ⇒ To help build our social media communities and create massive buzz about Supelle
              </p>
              <p>Participants (Target) ⇒ 2500 participants or more (can be increased if more tokens are allocated for airdrops)</p>
              <p>Social Media Communities (Target)⇒ Telegram, Twitter, Discord</p>
              <p>We are adopting a model that will incentivize people to carry out the following activities;
              </p>
              <ol>
                <li>Join the communities (Telegram, twitter, Discord) ONLY
                  <ul className="alph-style">
                    <li>Follow Twitter page
                      <ul className="rom-style">
                        <li>Users are required to submit their twitter username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                    <li>Join Telegram group
                      <ul className="rom-style">
                        <li>Users are required to submit their telegram username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                    <li>Join Telegram announcement channel
                      <ul className="rom-style">
                        <li>Users are required to submit their telegram username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Interaction with Social media contents
                  <ul className="alph-style">
                    <li>Like Twitter pinned post
                      <ul className="rom-style">
                        <li>Users are required to submit the twitter username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                    <li>Share Twitter pinned post
                      <ul className="rom-style">
                        <li>Users are required to submit the twitter username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                    <li >Tweet using designated # hashtags
                      <ul className="rom-style">
                        <li>Users are required to submit the tweet link after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="col-md-6 ">
              <div className=' p-5 h-100'>

                <div className="buy-section text-center text-light ml-md-auto">
                  <h6 className="bold">CLAIM YOUR SUPCOIN!</h6>
                  <h6 className="text-primary mt-3 bold">AVAILABLE UNTIL</h6>
                  <div className="count-down d">
                    <div className="time">
                      <h3 className='m-0 bold'>{countdown.days}</h3>
                      <p className='m-0'>Days</p>
                    </div>
                    <div className="time bold">
                      <h3 className='m-0 bold'>{countdown.hours}</h3>
                      <p className='m-0'>Hours</p>
                    </div>
                    <div className="time">
                      <h3 className='m-0 bold'>{countdown.minutes}</h3>
                      <p className='m-0'>Minutes</p>
                    </div>
                    <div className="time">
                      <h3 className='m-0 bold'>{countdown.seconds}</h3>
                      <p className='m-0'>Seconds</p>
                    </div>
                  </div>

                  <div className="CARD bg-success">
                    <div className="inner-card "
                      style={{
                        width: parseInt(endTime) - new Date().getTime() / 1000 > 0 && (parseInt(startTime) < new Date().getTime() / 1000) ? Number((parseInt(endTime) - new Date().getTime() / 1000) * 100 /
                          (parseInt(endTime) - parseInt(startTime)))?.toFixed(2) + "%" : "0%"

                      }}></div>
                    <p className="m-0 CARD-text"
                    >Until close claim</p>
                  </div>

                  <h5 className="mt-3 bold">SUPCOIN BALANCE:  ${Number(parseFloat(supWalletBalance) * process.env.REACT_APP_SUP2USDT_RATE)?.toFixed(2)}</h5>
                  <p className="mt-2">1 SUP = {parseFloat(0.08)} USD</p>

                  <div className="buy-form text-left"
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <div style={{ width: "100%", border: "1px solid #fff ", paddingLeft: "5px", marginBottom: "15px" }} >
                      <span>Amount to claim</span>
                      <div className="input d-flex">
                        <input type="string" id='other' value={claimAmount} onChange={(e) => setClaimAmount(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary buy-btn btn-block"
                    onClick={() => onClickClaim()}
                  >Claim</button>
                  {claimingHash && showSuccessContent && RenderSuccessContents("Successfully claimed!", claimingHash)}
                </div>
              </div>
            </div>

          </div>

        </Section>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={working}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </div>
  )
}

export default Airdrop