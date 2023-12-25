import React, { useState, useRef, useEffect, useMemo } from "react";
import TotalValueLocked from "../../components/TotalValueLocked";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Reveal from "react-awesome-reveal";
import { useDebounce } from 'use-debounce';
import { useDispatch, useSelector } from "react-redux";
import { formatGwei, parseGwei } from "viem";
import {
  useAccount,
  useConnect,
  useNetwork,
  useWalletClient
} from "wagmi";
import { readContract, readContracts } from '@wagmi/core';
import { setRefreshFlag } from "../../redux-toolkit/reducers/Staking";
import StakingABI from "../../wagmi-interaction/platformContractABI.json";
import TokenABI from "../../wagmi-interaction/tokenABI.json";
import { getTransactionReceipt } from "../../wagmi-interaction/client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import animation_coin from "../../images/home/animation_coin.mp4";

import { Button, Hero2, Section } from '../../Utilities';
import { calculateDoshiRewards, calculateDailyDoshiRewardsByAPY, daysUntilWithdrawal } from "../../utils/methods";

// import { toast } from "react-toastify";

import {
  BTN_HEIGHT_IN_MAIN_AREA,
  BTN_WIDTH_IN_MAIN_AREA,
  fadeInUp,
  fadeInRight,
} from "../../utils/constants";
import { averageHolding, numberWithCommas, weightedAverageAPY } from "../../utils/methods";

// Import Swiper styles
import 'swiper/css';

import "./Stake.css"

function Stake() {

  const dispatch = useDispatch();
  const refreshFlag = useSelector(state => state.staking.refreshFlag);
  const poolsData = useSelector(state => state.staking.poolsData);

  const [principleAmount, setPrincipleAmount] = useState(null);
  const [apy, setApy] = useState(null);

  const selectRef = useRef(null);
  const selectRef2 = useRef(null);
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { data: connectionData } = useConnect();
  const { data: walletClient } = useWalletClient();
  const [claimTxHash, setClaimTxHash] = useState("");
  const [poolIndex, setPoolindex] = useState(0);
  const [poolIndex2, setPoolindex2] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [userStakedInfo2Pool, setUserStakedInfo2Pool] = useState(0);
  const [userRewardAmount, setUserRewardAmount] = useState(0);
  const [claimingAmount, setClaimingAmount] = useState(0);
  const [working, setWorking] = useState(false);
  const [working2, setWorking2] = useState(false);
  const [showSuccessContent, setShowSuccessContent] = useState(false);

  const [stakingAmount, setStakingAmount] = useState(0);
  const [doshiWalletBalance, setDoshiWalletBalance] = useState(0);
  const [unstakingAmount, setUnstakingAmount] = useState(0);
  const [debouncedStakingAmount] = useDebounce(stakingAmount, 500);
  const [debouncedUnstakingAmount] = useDebounce(unstakingAmount, 500);
  const [approvingTxHash, setApprovingTxHash] = useState("");
  const [stakingTxHash, setStakingTxHash] = useState("");
  const [unstakingTxHash, setUnstakingTxHash] = useState("");

  const readUserStakedAmount2 = async () => {
    try {
      const data = await readContracts({
        contracts: [{
          address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
          abi: StakingABI,
          functionName: 'getUserPoolInfo',
          args: [address, poolIndex2],
          formatUnits: 'gwei',
          chainId: connectionData?.chain?.id,
        },
        {
          address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
          abi: StakingABI,
          functionName: 'getRewards',
          args: [address, poolIndex2],
          chainId: connectionData?.chain?.id,
        },
        {
          address: process.env.REACT_APP_DOSHI_TOKEN_CONTRACT_ADDRESS,
          abi: TokenABI,
          functionName: 'balanceOf',
          args: [address],
          formatUnits: 'gwei',
          chainId: connectionData?.chain?.id,
        }
        ]
      }
      );
      console.log(data);
      setUserStakedInfo2Pool(data[0] !== undefined && data[0] !== null && data[0]["result"]);
      console.log("remained reward >>> ", formatGwei(data[1]["result"]));
      setUserRewardAmount(data[1] !== undefined && data[1] !== null && formatGwei(data[1]["result"]));

      setDoshiWalletBalance(data[2] !== undefined && formatGwei(data[2]["result"]));

    } catch (err) {
      console.log(err);
    }
  }

  const readUserStakedAmount = async () => {
    if (address !== undefined && address !== null) {
      const data = await readContract({
        address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
        abi: StakingABI,
        functionName: 'getUserPoolInfo',
        args: [address, poolIndex],
        formatUnits: 'gwei',
        chainId: connectionData?.chain?.id,
        wallet: address
      });
      setUnstakingAmount(data !== undefined && data !== null && (data?.stakeAmount));
      setUserStakedInfo2Pool(data !== undefined && data !== null && data);
    }
  }

  const readWalletDoshiBalance = async () => {
    if (address !== undefined && address !== null) {
      const data = await readContract({
        address: process.env.REACT_APP_DOSHI_TOKEN_CONTRACT_ADDRESS,
        abi: TokenABI,
        functionName: 'balanceOf',
        args: [address],
        formatUnits: 'gwei',
        chainId: connectionData?.chain?.id,
        wallet: address
      })

      setDoshiWalletBalance(data !== undefined && formatGwei(data));

    }
  }

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
    setIsOpen2(false);
  };
  const toggleSelectBox2 = () => {
    setIsOpen(false);
    setIsOpen2(!isOpen2);
  };

  const getTimeRemaining = (targetDate) => {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const RenderSuccessContents = (label, txHash) => {
    return <Reveal keyframes={fadeInUp} className='onStep' delay={0} duration={800} triggerOnce>
      <div>
        {label}
        <div className="underline text-[14px] ">
          <a href={`https://goerli.etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer" >View on Goerli Etherscan</a>
        </div>
      </div>
    </Reveal >
  }

  const onClickClaim = async () => {
    if (isConnected) {
      if (chain.id !== 5) {
        // toast.warning("Please change the network of your wallet into goerli and try again. DOSHI staking platform works on Goerli network.");
        console.log("Please change the network of your wallet into goerli and try again. DOSHI staking platform works on Goerli network.");
        return;
      }
    } else {
      // toast.warning("Connect your wallet!");
      console.log("Connect your wallet!");
      return;
    }
    if (claimingAmount <= 0) {
      // toast.warning("Please input valid amount and try again.");
      console.log("Please input valid amount and try again.");
      setWorking2(false);
      return;
    }
    try {
      setWorking2(true);
      const data = await readContracts({
        contracts: [
          {
            address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
            abi: StakingABI,
            functionName: 'getUserPoolInfo',
            args: [address, poolIndex2],
            formatUnits: 'gwei',
            chainId: connectionData?.chain?.id,
            wallet: address
          }, {
            address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
            abi: StakingABI,
            functionName: 'getRewards',
            args: [address, poolIndex2],
            chainId: connectionData?.chain?.id,
            wallet: address
          }
        ]
      });
      setUserStakedInfo2Pool(data[0] !== undefined && data[0] !== null && data[0]["result"]);

      setUserRewardAmount(data[1] !== undefined && data[1] !== null && formatGwei(data[1]["result"]));

      if (claimingAmount > parseFloat(formatGwei(data[1]["result"]))) {
        // toast.warning("Amount cannot exceeds the reward amount. Please input value again and retry.");
        setWorking2(false);
        return;
      }
      if (!data || !data[0] || !data[1] || parseFloat(formatGwei(data[1]["result"])) <= 0) {
        // toast.warning("There is not withdrawable rewards.");
        setWorking2(false);
        return;
      }

      if (parseFloat(formatGwei(data[1]["result"])) > 0) {

        const claimingHs = await walletClient.writeContract({
          address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
          abi: StakingABI,
          functionName: 'withdraw',
          args: [parseInt(poolIndex2), parseGwei(claimingAmount)],
          chainId: connectionData?.chain?.id
        });

        setClaimTxHash(claimingHs);
      }

    } catch (err) {
      setWorking2(false);
      console.log("claiming err >>> ", err);
    }
  }

  useEffect(() => {
    if (address != undefined) {
      readUserStakedAmount2();
    }
  }, [poolIndex2, address])

  useEffect(() => {
    readWalletDoshiBalance();
    readUserStakedAmount();
  }, [poolIndex, address])

  useEffect(() => {
    ; (async () => {

      if (approvingTxHash) {
        setTimeout(async () => {
          try {
            const receipt = await getTransactionReceipt(approvingTxHash);
            console.log(receipt);
            setShowSuccessContent(true);
            setTimeout(() => {
              setShowSuccessContent(false);
              setApprovingTxHash(null);
            }, 5000);
          } catch (err) {
            setWorking(false);
            setApprovingTxHash(null);
            console.log(err);
          }
        }, 3000);
      }
      if (stakingTxHash) {
        setTimeout(async () => {
          try {

            const receipt = await getTransactionReceipt(stakingTxHash);

            console.log(receipt);
            setShowSuccessContent(true);
            readWalletDoshiBalance();
            readUserStakedAmount();
            dispatch(setRefreshFlag(!refreshFlag));
            setStakingAmount(0);
            setWorking(false);
            setTimeout(() => {
              setShowSuccessContent(false);
              setStakingTxHash(null);
              dispatch(setRefreshFlag(!refreshFlag));
            }, 5000);
          } catch (err) {
            setWorking(false);
            setStakingTxHash(null);
            console.log(err);
          }
        }, 3000);
      }
      if (unstakingTxHash) {

        setTimeout(async () => {
          try {

            const receipt = await getTransactionReceipt(unstakingTxHash);

            console.log(receipt);
            setShowSuccessContent(true);
            readWalletDoshiBalance();
            readUserStakedAmount();
            dispatch(setRefreshFlag(!refreshFlag));
            setWorking(false);
            setTimeout(() => {
              setShowSuccessContent(false);
              setUnstakingTxHash(null);
            }, 5000);
          } catch (err) {
            setUnstakingTxHash(null);
            setWorking(false);
            console.log(err);
          }
        }, 3000);
      }
    })()
  }, [approvingTxHash, unstakingTxHash, stakingTxHash])

  const onClickUnstake = async () => {
    if (isConnected) {
      if (chain.id !== 5) {
        // toast.warning("Please change the network of your wallet into goerli and try again. DOSHI staking platform works on Goerli network.");
        return;
      }
    } else {
      // toast.warning("Connect your wallet!");
      return;
    }
    try {
      setWorking(true);
      const data = await readContract({
        address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
        abi: StakingABI,
        functionName: 'getUserPoolInfo',
        args: [address, poolIndex],
        formatUnits: 'gwei',
        chainId: connectionData?.chain?.id,
        wallet: address
      });
      setUnstakingAmount(data !== undefined && data !== null && (data?.stakeAmount));
      setUserStakedInfo2Pool(data !== undefined && data !== null && data);
      if (parseFloat(formatGwei(data?.stakeAmount)) > 0) {

        const unstakingHash = await walletClient.writeContract({
          address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
          abi: StakingABI,
          functionName: 'unstake',
          args: [parseInt(poolIndex)],
          enabled: address !== undefined && address !== null && userStakedInfo2Pool?.stakeAmount > 0 && Date.now() / 1000 <= (parseInt(userStakedInfo2Pool?.startTime) + parseInt(poolsData[poolIndex]?.period) * 24 * 3600) && debouncedUnstakingAmount > 0,
          wallet: address,
          chainId: connectionData?.chain?.id
        });

        setUnstakingTxHash(unstakingHash);
      }
      else setWorking(false);
      console.log(" Can not un-stake!!!");
    } catch (err) {
      setWorking(false);
      console.log("unstaking err >>> ", err);
    }
  };

  const onClickStake = async () => {
    if (isConnected) {
      if (chain.id !== 5) {
        // toast.warning("Please change the network of your wallet into goerli and try again. DOSHI staking platform works on Goerli network.");
        return;
      }
    } else {
      // toast.warning("Connect your wallet!");
      return;
    }
    try {
      setWorking(true);
      const allowance = await readContract({
        address: process.env.REACT_APP_DOSHI_TOKEN_CONTRACT_ADDRESS,
        abi: TokenABI,
        functionName: 'allowance',
        args: [address, process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS],
        chainId: connectionData?.chain?.id,
      })
      console.log(allowance, parseFloat(formatGwei(allowance !== undefined && allowance?.toString())), parseFloat(debouncedStakingAmount));

      if (parseFloat(formatGwei(allowance !== undefined && allowance?.toString())) < parseFloat(debouncedStakingAmount)) {

        const aproveHash = await walletClient.writeContract({
          address: process.env.REACT_APP_DOSHI_TOKEN_CONTRACT_ADDRESS,
          abi: TokenABI,
          functionName: "approve",
          args: [process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS, parseGwei((stakingAmount !== undefined && stakingAmount?.toString()) || "0")], wallet: address,
          chainId: connectionData?.chain?.id
        });

        setApprovingTxHash(aproveHash);
      }
      const stakingHash = await walletClient.writeContract({
        address: process.env.REACT_APP_DOSHI_STAKING_CONTRACT_ADDRESS,
        abi: StakingABI,
        functionName: 'stake',
        args: [parseGwei((debouncedStakingAmount !== undefined && debouncedStakingAmount?.toString()) || "0"), parseInt(poolIndex)],

        chainId: connectionData?.chain?.id
      });
      setStakingTxHash(stakingHash);
    } catch (err) {
      setWorking(false);
      console.log("err >>> ", err);

    }
  };

  useEffect(() => {
    (async () => {

      if (claimTxHash) {

        setTimeout(async () => {
          try {
            const receipt = await getTransactionReceipt(claimTxHash);
            console.log(receipt);
            setShowSuccessContent(true);
            setClaimingAmount(0);
            dispatch(setRefreshFlag(!refreshFlag));
            setWorking2(false);
            setTimeout(() => {
              setShowSuccessContent(false);
              setClaimTxHash(null);
              readUserStakedAmount2();
            }, 5000);

          } catch (err) {
            setClaimTxHash(null);
            setWorking2(false);
            console.log(err);
          }
        }, 3000);
      }
    })()
  }, [claimTxHash])

  return (
    <>
      <div id={"stake"}>

        {/* Hero Backgrounds */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={"auto"}
          autoplay={{ delay: 100000 }}
          speed={1000}
          loop={"true"}
          className='w-100 position-absolute'
        >
          <SwiperSlide className='w-100 h-100 d-none d-md-block'>
            <div className="hero-bg hero-bg2 w-100 h-100">
              <video autoPlay muted loop className='h-100 w-100 animation-coin'>
                <source src={animation_coin} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className='w-100 h-100'>
            <div className="hero-bg hero-bg1">
              <div className="display"></div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        <Hero2 centerContent={true} expand={true} className={"container-fluid"} >
          <div className="row  w-100 mx-auto justify-content-between align-items-center">
            <div className="w-full d-flex gap-[30px]" style={{ zIndex: 1 }}>
              <div
                className="pad overflow-hidden relative min-h-[350px] bg-custom-light-white border-custom-medium-white md:col-span-3 flex flex-wrap pt-20 w-full justify-center gap-5"
              >
                <Reveal keyframes={fadeInUp} className='onStep' delay={0} duration={800} triggerOnce>
                  <div className="flex flex-col gap-2 items-center min-w-[160px] md:min-w-[180px]">
                    <img
                      src="/statistics/marketcap.svg"
                      className="w-[30px] h-[30px]"
                      alt="statistic icon"
                    />
                    <div className="text-[20px] font-semibold">Market Cap</div>
                    <div className="text-[24px] font-semibold">
                      ${numberWithCommas(process.env.REACT_APP_DOSHI_MARKETCAP)}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-center  min-w-[160px] md:min-w-[180px]">
                    <img
                      src="/statistics/apy.svg"
                      className="w-[30px] h-[30px]"
                      alt="statistic icon"
                    />
                    <div className="text-[20px] font-semibold">APY Statistics</div>
                    <div className="text-[24px] font-semibold">
                      {numberWithCommas(weightedAverageAPY(poolsData))}%
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-center min-w-[160px] md:min-w-[180px]">
                    <img
                      src="/statistics/totalsupply.svg"
                      className="w-[30px] h-[30px]"
                      alt="statistic icon"
                    />
                    <div className="text-[20px] font-semibold">Total Supply</div>
                    <div className="text-[24px] font-semibold">
                      {numberWithCommas(process.env.REACT_APP_DOSHI_TOTOALSUPPLY)}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-center min-w-[160px] md:min-w-[180px]">
                    <img
                      src="/statistics/circumstance.svg"
                      className="w-[30px] h-[30px]"
                      alt="statistic icon"
                    />
                    <div className="text-[20px] font-semibold">Circulating Supply</div>
                    <div className="text-[24px] font-semibold">
                      {numberWithCommas(process.env.REACT_APP_DOSHI_CIRCULATINGSUPPLY)}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-center min-w-[160px] md:min-w-[180px] pb-5 ">
                    <img
                      src="/statistics/averagehoding.svg"
                      className="w-[30px] h-[30px]"
                      alt="statistic icon"
                    />
                    <div className="text-[20px] font-semibold">Average Holding</div>
                    <div className="text-[24px] font-semibold">
                      {numberWithCommas(averageHolding(poolsData))}
                    </div>
                  </div>
                </Reveal>
              </div>

              <TotalValueLocked />
            </div>

            <div className="w-full" style={{ zIndex: 1 }}>
              <Reveal keyframes={fadeInRight} className='onStep' delay={0} duration={800} triggerOnce>
                <div className="d-flex justify-between gap-10">
                  <div
                    className="pad overflow-hidden relative min-h-[120px] border-custom-medium-white bg-custom-light-white flex flex-col flex-wrap w-full justify-center gap-5 mt-5"
                  >
                    <div className="font-semibold text-[28px] font-normal text-center md:text-left mt-5">
                      Calculate Your Daily Rewards
                    </div>
                    <div className="d-flex justify-between px-10 font-semibold">
                      <div className="w-full mb-5">
                        <div className="text-[24px]">Principle amount:</div>
                        <input
                          className={`font-semibold w-[calc(100%-60px)] min-h-[32px] bg-custom-heavy-white border-custom-medium-white text-[20px] border-[1px] font-medium px-[10px] outline-none calculator-placeholder `}
                          placeholder="enter your principle amount"
                          type="number"
                          value={principleAmount}
                          onChange={(e) => setPrincipleAmount(e.target.value)}
                        ></input>
                      </div>
                      <div className="w-full mb-5">
                        <div className="text-[24px]">Preferred APY:</div>
                        <input
                          className="font-semibold w-[calc(100%-60px)] min-h-[32px] bg-custom-heavy-white border-custom-medium-white border-[1px] text-[20px] font-medium px-[10px] outline-none calculator-placeholder"
                          placeholder="enter your preferred APY(%)"
                          type="number"
                          value={apy}
                          onChange={(e) => setApy(e.target.value)}
                        ></input>
                      </div>
                      <div className="w-full mb-5 text-center">
                        <div className="text-[24px]">Expected Daily Reward</div>
                        <div className="text-[20px] min-h-[40px]">
                          {
                            calculateDailyDoshiRewardsByAPY(principleAmount, apy) > 0 ?
                              parseFloat(calculateDailyDoshiRewardsByAPY(principleAmount, apy)).toFixed(2) + " Doshi"
                              : "- - -"
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="w-full mt-5 d-flex gap-10" style={{ zIndex: 1 }}>
              <div className="w-50" style={{ zIndex: '1 !important' }}>
                <Reveal keyframes={fadeInRight} className='onStep' delay={0} duration={800} triggerOnce>
                  <div
                    className="pad overflow-hidden relative min-h-[350px] bg-custom-light-white border-custom-medium-white flex flex-col flex-wrap pt-5 w-full justify-center gap-5"
                  >
                    <div className="text-[28px] text-center font-semibold">Claim</div>
                    <div className="text-[20px] ml-5 pr-10 text-left flex justify-between">
                      <div className="font-semibold">Claim Your Staking Rewards</div>
                      <div className="font-semibold">APY: {poolsData[poolIndex2]?.apy}</div>
                    </div>
                    <div className="flex justify-between border-b-[1px] h-[40px] ml-5 mr-10  border-b-custom-medium-white ">
                      <div className="text-[16px] md:text-[20px] font-semibold">
                        Lock Period
                      </div>
                      <div className="text-[16px] font-semibold w-[150px] text-left">
                        <div className=" relative " ref={selectRef}>
                          <button
                            onClick={toggleSelectBox2}
                            className="hover:border-b hover:border-custom-medium-white flex items-center justify-between"
                          >
                            {poolsData[poolIndex2]?.period} Months
                            <span className={`ml-2 transform ${isOpen2 ? 'rotate-180' : ''} transition-transform`}>
                              ▼
                            </span>
                          </button>
                          {isOpen2 && (
                            <div className=" top-full left-0 right-0 border bg-white border-gray-500 rounded"
                              style={{ zIndex: 100, position: "absolute" }}
                            >
                              {poolsData.map((option, index) => (
                                <div
                                  key={index}
                                  className="px-4 py-2 hover:bg-custom-heavy-white hover:text-white"
                                  style={{ color: 'black', zIndex: 10000 }}
                                  onClick={() => {
                                    setIsOpen2(false);
                                    setPoolindex2(index);
                                  }}
                                >
                                  {option?.period} Months
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between border-b-[1px] h-[40px] ml-5 mr-10  border-b-custom-medium-white">
                      <div className="text-[16px] md:text-[20px] font-semibold">
                        Days To Maturity
                      </div>
                      <div className="text-[16px] font-semibold w-[150px] text-left">
                        {
                          (userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ?
                            daysUntilWithdrawal(Date.now(), parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex2]?.period) * 30.5 * 24 * 3600 * 1000) : 0} Days
                      </div>
                    </div>
                    <div className="flex justify-between border-b-[1px] h-[40px] ml-5 mr-10  border-b-custom-medium-white">
                      <div className="text-[16px] md:text-[22px] font-semibold">
                        Withdrawal Date
                      </div>
                      <div className="text-[16px] font-semibold w-[150px] text-left">
                        {
                          (userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ? new Date(parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex2]?.period) * 30.5 * 24 * 3600 * 1000).toDateString() : "Never"
                        }
                      </div>
                    </div>
                    <div className="flex justify-between  ml-5 mr-10  h-[40px]">
                      <div className="text-[16px] md:text-[22px] font-semibold">
                        Free Withdrawals Left
                      </div>
                      <div className="text-[16px] font-semibold w-[150px] text-left">
                        {
                          (userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ?
                            (isNaN(3 - parseInt(userStakedInfo2Pool?.claimNum)) === false && (3 - parseInt(userStakedInfo2Pool?.claimNum)) > 0) ?
                              3 - parseInt(userStakedInfo2Pool?.claimNum) : 0
                            : 0
                        }
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal keyframes={fadeInRight} className='onStep' delay={0} duration={800} triggerOnce>
                  <div className="pad h-[400px]  text-white bg-custom-light-white border-custom-medium-white flex flex-col gap-5">
                    <div className="px-10 pt-10 flex w-full justify-between text-gray-300 text-[16px] font-semibold">
                      <div className="flex">Available: {Math.floor(userRewardAmount)} DOSHI </div>
                      <div className="z-0">Min: {1} DOSHI </div>
                    </div>
                    <div className="flex justify-center ">
                      <div className="text-white border-[1px] bg-custom-heavy-white h-[60px] w-[calc(100%-60px)] rounded-lg border-custom-medium-white flex justify-between px-10 items-center">
                        <div className="flex flex-col items-start">
                          <input
                            className="text-[21px] font-normal bg-transparent outline-none  min-w-[150px]"
                            size="10"
                            value={Math.floor(claimingAmount)}
                            type="number"
                            onChange={(e) => setClaimingAmount(e.target.value)}
                            min={0}
                            max={userRewardAmount}
                          ></input>
                          <div className="text-[12px] text-gray-300 font-semibold text-start">
                            Fee/Tax: {((userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ?
                              isNaN(parseInt(userStakedInfo2Pool?.claimNum)) === false ?
                                parseInt(userStakedInfo2Pool?.claimNum) - 3 > 0 : false
                              : false) === true ? "20%" : "0%"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full d-flex justify-center">
                      <PrimaryButton
                        label={"Withdraw"}
                        onClick={() => onClickClaim()}
                        width={BTN_WIDTH_IN_MAIN_AREA}
                        height={BTN_HEIGHT_IN_MAIN_AREA}
                      />
                      {claimTxHash && showSuccessContent && RenderSuccessContents("Successfully claimed!", claimTxHash)}
                    </div>
                    <div className="border-t-[1px] border-t-custom-medium-white pt-5 px-10">
                      <div className="flex gap-2 items-center">
                        <div className="text-[16px] md:text-[22px]  font-semibold">
                          Last Withdrawal:
                        </div>
                        <div className="text-[18px] md:text-[20px] font-semibold">{
                          (userStakedInfo2Pool && parseFloat(formatGwei(userStakedInfo2Pool?.lastClaimAmount)) > 0) ?
                            parseFloat(formatGwei(userStakedInfo2Pool?.lastClaimAmount))?.toFixed(2) : "0.00"} DOSHI</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="w-50">
                <div
                  className="pad overflow-hidden relative min-h-[350px] bg-custom-light-white border-custom-medium-white flex flex-col flex-wrap pt-5 w-full justify-center gap-5"
                >
                  <div className="px-8 pr-10 text-center">
                    <div className="text-[28px] font-semibold">Stake</div>
                  </div>
                  <div className="px-8 items-center">
                    <div className="text-[20px] font-semibold">Select A Pool By Lock Period</div>
                  </div>
                  <div className="flex justify-between text-[18px] font-semibold pr-10 items-center ">
                    <div className="flex gap-2 items-end">
                      <div className="text-left pl-8">
                        Lock Period:
                      </div>
                      <div className="relative" ref={selectRef2}>
                        <button
                          onClick={toggleSelectBox}
                          className="px-2 border-transparent hover:border-custom-medium-white flex items-center justify-between"
                        >
                          {poolsData[poolIndex]?.period} Months
                          <span className={`ml-2 transform ${isOpen ? 'rotate-180' : ''} transition-transform`}>
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <div className="top-full left-0 right-0 mt-1 border bg-white border-gray-500 rounded min-w-[148px]"
                            style={{ zIndex: 100, position: "absolute" }}
                          >
                            {poolsData.map((option, index) => (
                              <div
                                key={index}
                                className="px-4 py-2 hover:bg-custom-heavy-white hover:text-white"
                                style={{ color: 'black' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setPoolindex(index);
                                }}
                              >
                                {option?.period} Months
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="">APY: {poolsData[poolIndex]?.apy}</div>
                  </div>

                  <Reveal keyframes={fadeInRight} className='onStep' delay={0} duration={800} triggerOnce>
                    <div className="z-0 flex flex-col justify-center items-center gap-4 w-full">
                      <div
                        className="w-[calc(100%-60px)] min-h-[110px]  bg-custom-heavy-white border-custom-medium-white    border-[1px] rounded-lg px-10
                flex flex-col justify-center
              "
                      >
                        <div className="z-0 flex text-[14px] text-gray-300 font-semibold mt-2 w-full justify-between">
                          <div className="z-0">Balance: {parseFloat(doshiWalletBalance).toFixed(2) || 0.0} DOSHI</div>
                          <div className="z-0 ">Min: 1 DOSHI</div>
                        </div>
                        <div className="z-0 flex text-[18px] md:text-[24px] font-medium mt-2 w-full justify-between">
                          <input
                            className={`z-0 text-white border-none outline-none bg-transparent text-start max-w-[150px] md:max-w-auto`}
                            placeholder="Input amount to stake"
                            type="number"
                            value={stakingAmount}
                            min={0}
                            onChange={(e) => setStakingAmount(e.target.value)}
                          ></input>
                          <div className="pl-5 border-l-[1px] text-gray-300 hover:text-white border-l-white text-right cursor-pointer"
                            onClick={() => setStakingAmount(doshiWalletBalance || null)}
                          >
                            MAX
                          </div>
                        </div>
                      </div>

                      <PrimaryButton
                        label={"Stake"}
                        width={BTN_WIDTH_IN_MAIN_AREA}
                        height={BTN_HEIGHT_IN_MAIN_AREA}
                        onClick={() => onClickStake()}
                      />
                      {approvingTxHash && showSuccessContent && RenderSuccessContents("Successfully approved! Will continue staking...", approvingTxHash)}
                      {stakingTxHash && showSuccessContent && RenderSuccessContents("Successfully staked!", stakingTxHash)}
                    </div>
                    <div className="flex flex-col items-center gap-4 justify-center w-full">
                      <div
                        className="w-[calc(100%-60px)] min-h-[110px]  bg-custom-heavy-white border-custom-medium-white border-[1px] rounded-lg px-10 flex flex-col justify-center"
                      >
                        <div className="flex text-[14px] text-gray-300 font-semibold mt-2 w-full justify-between">
                          <div className="">Staked: {formatGwei(userStakedInfo2Pool && userStakedInfo2Pool?.stakeAmount?.toString())} DOSHI</div>
                          <div className="z-0 ">Available Date:</div>
                        </div>
                        <div className="flex text-[18px] md:text-[24px] font-medium mt-2 w-full justify-between items-center">
                          <input
                            className="text-white border-none outline-none bg-transparent text-start  max-w-[150px]"
                            placeholder="Input amount to un-stake"
                            type="number"
                            disabled
                            value={formatGwei(userStakedInfo2Pool && userStakedInfo2Pool?.stakeAmount?.toString())}
                          ></input>
                          <div className="pl-5 text-[14px]  text-gray-300  text-right cursor-pointer">
                            {
                              (userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ? new Date(parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex]?.period) * 30.5 * 24 * 3600 * 1000).toDateString() : "Never"
                            }
                          </div>
                        </div>
                      </div>

                      <PrimaryButton
                        label={"Unstake"}
                        width={BTN_WIDTH_IN_MAIN_AREA}
                        height={BTN_HEIGHT_IN_MAIN_AREA}
                        disabled={!(parseInt(userStakedInfo2Pool?.startTime) > 0) || Date.now() < parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex]?.period) * 30.5 * 24 * 3600 * 1000}
                        onClick={() =>
                          parseInt(userStakedInfo2Pool?.startTime) > 0 && Date.now() >= parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex]?.period) * 30.5 * 24 * 3600 * 1000 &&
                          onClickUnstake()
                        }
                      />
                      {unstakingTxHash && showSuccessContent && RenderSuccessContents("Successfully un-staked!", unstakingTxHash)}
                    </div>
                    <div className="border-t-[1px] border-t-custom-medium-white py-4 px-10 my-1">
                      <div className="flex gap-2 items-center">
                        <div className="text-[20px] md:text-[24px] font-semibold">
                          Estimated Rewards:
                        </div>
                        <div className="text-[20px] font-semibold">{calculateDoshiRewards(debouncedStakingAmount, poolsData[poolIndex]?.period)} DOSHI</div>
                      </div>
                      <div className="text-[18px] font-semibold text-left">
                        Please note that once your tokens are staked, you cannot
                        un-stake until the contract fulfils the lock period.
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Hero2 >
      </div >
    </>
  )
}

export default Stake