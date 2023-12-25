import { useEffect, useContext, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from 'use-debounce';
import {
  useAccount,
  useConnect,
  useNetwork,
  useWalletClient,
} from 'wagmi';
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { formatEther, parseEther } from "viem";
import { readContract } from '@wagmi/core';

import TotalValueLocked from '../../components/TotalValueLocked'
import Performance from '../../components/Performance'
import History from "../../components/History"
import './staking.css'
import SidebarButton from "../../components/SideBarButton"
import { TabValues } from "../../common/constants"
import { fadeInRight, fadeInUp } from "../../common/constants"
import Reveal from "react-awesome-reveal"
import { calculateRewards } from "../../common/methods"
import StakingABI from "../../chain_interaction/StakingPlatform.json";
import TokenABI from "../../chain_interaction/SupCoin.json";
import { confirmTransactionReceipt, checkTxIsSucceedOrNot } from "../../chain_interaction/client";
import { setRefreshFlag } from "../../redux-toolkit/reducers/Staking";
import StakingMenu from "./StakingMenu";

const backgroundImageStyle = {
  backgroundImage: `url("/main_bg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh", // Adjust as needed
};

export default function Stake() {

  const [poolIndex, setPoolindex] = useState(0);
  const [stakingAmount, setStakingAmount] = useState(0);
  const [unstakingAmount, setUnstakingAmount] = useState(0);
  const [SUPWalletBalance, setSUPWalletBalance] = useState(0);
  const [userStakedInfo2Pool, setUserStakedInfo2Pool] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [approvingTxHash, setApprovingTxHash] = useState("");
  const [stakingTxHash, setStakingTxHash] = useState("");
  const [unstakingTxHash, setUnstakingTxHash] = useState("");
  const selectRef = useRef(null);
  const [working, setWorking] = useState(false);
  const [showSuccessContent, setShowSuccessContent] = useState(false);

  const dispatch = useDispatch();
  const poolsData = useSelector(state => state.staking.poolsData);
  const refreshFlag = useSelector(state => state.staking.refreshFlag);
  const [debouncedStakingAmount] = useDebounce(stakingAmount, 500);
  const [debouncedUnstakingAmount] = useDebounce(unstakingAmount, 500);
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { data: connectionData } = useConnect();
  const { chain } = useNetwork();

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const closeSelectBox = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {

    readWalletSUPBalance();
    readUserStakedAmount();

    window.addEventListener('click', closeSelectBox);
    return () => {
      window.removeEventListener('click', closeSelectBox);
    };
  }, []);

  const readWalletSUPBalance = async () => {
    try {
      if (address !== undefined && address !== null) {
        const data = await readContract({
          address: process.env.REACT_APP_SUPCOIN_ADDRESS,
          abi: TokenABI,
          functionName: 'balanceOf',
          args: [address],
          wallet: address
        })

        setSUPWalletBalance(data !== undefined && formatEther(data));

      }
    } catch (err) {
      console.error(err);
    }
  }

  //read staked amount before preapare unstaking
  const readUserStakedAmount = async () => {
    try {
      if (address !== undefined && address !== null) {
        const data = await readContract({
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'getUserPoolInfo',
          args: [address, poolIndex],
          wallet: address
        });
        setUnstakingAmount(data !== undefined && data !== null && (data?.stakeAmount));
        setUserStakedInfo2Pool(data !== undefined && data !== null && data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const onClickStake = async () => {
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
      const allowance = await readContract({
        address: process.env.REACT_APP_SUPCOIN_ADDRESS,
        abi: TokenABI,
        functionName: 'allowance',
        args: [address, process.env.REACT_APP_STAKING_PLATFORM_ADDRESS],
      })
      console.log(allowance, parseFloat(formatEther(allowance !== undefined && allowance?.toString())), parseFloat(debouncedStakingAmount));

      if (parseFloat(formatEther(allowance !== undefined && allowance?.toString())) < parseFloat(debouncedStakingAmount)) {

        const aproveHash = await walletClient.writeContract({
          address: process.env.REACT_APP_SUPCOIN_ADDRESS,
          abi: TokenABI,
          functionName: "approve",
          args: [process.env.REACT_APP_STAKING_PLATFORM_ADDRESS, parseEther((stakingAmount !== undefined && stakingAmount?.toString()) || "0")], wallet: address,

        });

        setApprovingTxHash(aproveHash);
      }
      const stakingHash = await walletClient.writeContract({
        address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
        abi: StakingABI,
        functionName: 'stake',
        args: [parseEther((debouncedStakingAmount !== undefined && debouncedStakingAmount?.toString()) || "0"), parseInt(poolIndex)],


      });
      setStakingTxHash(stakingHash);
    } catch (err) {
      setWorking(false);
      console.log("err >>> ", err);

    }
  };

  const onClickUnstake = async () => {
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
      const data = await readContract({
        address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
        abi: StakingABI,
        functionName: 'getUserPoolInfo',
        args: [address, poolIndex],
        wallet: address
      });
      setUnstakingAmount(data !== undefined && data !== null && (data?.stakeAmount));
      setUserStakedInfo2Pool(data !== undefined && data !== null && data);
      if (parseFloat(formatEther(data?.stakeAmount)) > 0) {

        const unstakingHash = await walletClient.writeContract({
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'unstake',
          args: [parseInt(poolIndex)],
          enabled: address !== undefined && address !== null && userStakedInfo2Pool?.stakeAmount > 0 && Date.now() / 1000 <= (parseInt(userStakedInfo2Pool?.startTime) + parseInt(poolsData[poolIndex]?.period) * 24 * 3600) && debouncedUnstakingAmount > 0,
          wallet: address,
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

  useEffect(() => {

    readWalletSUPBalance();
    readUserStakedAmount();
  }, [poolIndex, address])

  useEffect(() => {
    ; (async () => {

      if (approvingTxHash) {
        setTimeout(async () => {
          try {
            const receipt = await confirmTransactionReceipt(approvingTxHash);
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

            const receipt = await confirmTransactionReceipt(stakingTxHash);
            console.log(receipt);
            const succeed = await checkTxIsSucceedOrNot(stakingTxHash);
            console.log("succeed >>>", succeed);
            dispatch(setRefreshFlag(!refreshFlag));
            if (succeed) {
              setShowSuccessContent(true);
              readWalletSUPBalance();
              readUserStakedAmount();
              dispatch(setRefreshFlag(!refreshFlag));
              setStakingAmount(0);
              setWorking(false);
              setTimeout(() => {
                setShowSuccessContent(false);
                setStakingTxHash(null);
                dispatch(setRefreshFlag(!refreshFlag));
              }, 5000);
            } else {
              setWorking(false);
              setStakingAmount(0);
              setStakingTxHash(null);
            }
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

            const receipt = await confirmTransactionReceipt(unstakingTxHash);

            console.log(receipt);

            const succeed = await checkTxIsSucceedOrNot(unstakingTxHash);
            dispatch(setRefreshFlag(!refreshFlag));
            console.log("succeed >>>", succeed);
            if (succeed) {
              setShowSuccessContent(true);
              readWalletSUPBalance();
              readUserStakedAmount();
              dispatch(setRefreshFlag(!refreshFlag));
              setWorking(false);
              setTimeout(() => {
                setShowSuccessContent(false);
                setUnstakingTxHash(null);
              }, 5000);
            } else {
              setWorking(false);
              setUnstakingTxHash(null);
              setWorking(false);
            }
          } catch (err) {
            setUnstakingTxHash(null);
            setWorking(false);
            console.log(err);
          }
        }, 3000);
      }
    })()
  }, [approvingTxHash, unstakingTxHash, stakingTxHash])

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
    <div className="w-100 h-100 bg-dark "
      style={backgroundImageStyle}>

      <StakingMenu />

      <div className="d-flex w-100 h-100 bg-gradient p-5">

        <div style={{ width: '300px', height: '100%', marginTop: "30px" }} className="d-none d-md-block" >
          {
            TabValues.map((item, idx) =>
              <SidebarButton
                label={item}
                icon={item}
                key={idx}
                isActive={idx === 3}
              />
            )
          }
        </div>

        <div className={`pt-10 d-flex flex-column text-white w-100 h-100`}>
          <div className="d-flex gap-20 mb-5 flex-column flex-md-row">
            <div
              className="overflow-hidden position-relative bg-custom-light-white border-custom-medium-white col-12 col-md-7 border rounded-3xl d-flex flex-column flex-wrap  justify-content-center gap-20"
              style={{ minHeight: '350px' }}>

              <div className="d-flex justify-content-between mt-20 px-8 pr-10 md:mt-0  items-center w-100">
                <div className="text-28 font-semibold pl-5">Select A Pool By Lock Period</div>
              </div>

              <div className="d-flex justify-content-between text-18 font-semibold pr-10 align-items-center px-5 w-100">
                <div className="d-flex gap-2 align-items-end">
                  <div className="  text-left pl-8">
                    Lock Period:
                  </div>

                  <div className=" position-relative " ref={selectRef}>
                    <button
                      type="button"
                      onClick={toggleSelectBox}
                      className="select-box d-flex align-items-center bg-transparent justify-content-between text-white"
                    >
                      {poolsData[poolIndex]?.period === 0 ? "Flex" : `${poolsData[poolIndex]?.period} Months`}
                      <span className={`ml-2 transform ${isOpen ? 'rotate-180' : ''} transition-transform`}>
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <div className=" top-full left-0 bg-checkbox  border-gray-500  rounded"
                        style={{ zIndex: 100, position: "absolute", right: "10px" }}
                      >
                        {poolsData.map((option, index) => (
                          <div
                            key={index}
                            className="pl-2 pr-3 py-1 select-item text-gray-500 text-12"
                            style={{ width: "90px" }}
                            onClick={() => {
                              setIsOpen(false);
                              setPoolindex(index);
                            }}
                          >
                            {option?.period === 0 ? "Flex" : `${option?.period} Months`}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
                <div className="">APY: {poolsData[poolIndex]?.apy}</div>
              </div>

              <Reveal keyframes={fadeInRight} className='onStep w-100' delay={0} duration={800} triggerOnce>
                <div className="z-0 d-flex flex-column justify-content-center align-items-center gap-4 w-full">
                  <div
                    className="w-90 max-h-110  bg-custom-heavy-white border-custom-medium-white border rounded-lg px-10 d-flex flex-column justify-content-center"
                  >
                    <div className="z-0 d-flex text-[12px] text-gray-300 font-semibold mt-2 w-full justify-content-between">
                      <div className="z-0">Balance: {parseFloat(SUPWalletBalance).toFixed(2) || 0.0} SUP</div>
                      <div className="z-0 ">Min: 1 SUP</div>
                    </div>
                    <div className="z-0 d-flex text-24 font-medium mt-2 mb-2 w-full justify-content-between">
                      <input
                        className={`z-0 text-white border-none outline-none bg-transparent text-start max-w-150 md:max-w-auto`}
                        placeholder="Input amount to stake"
                        type="number"
                        value={stakingAmount}
                        min={0}
                        onChange={(e) => setStakingAmount(e.target.value)}
                      ></input>
                      <div className="pl-5 border-l-1 text-gray-300 hover:text-white border-l-white text-right cursor-pointer text-24"
                        onClick={() => setStakingAmount(SUPWalletBalance || null)}
                      >
                        MAX
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button className={`btn btn-inline-light `}
                      style={{ minWidth: "100px" }}
                      onClick={() => onClickStake()}>Stake</button>
                  </div>
                  {approvingTxHash && showSuccessContent && RenderSuccessContents("Successfully approved! Will continue staking...", approvingTxHash)}
                  {stakingTxHash && showSuccessContent && RenderSuccessContents("Successfully staked!", stakingTxHash)}
                </div>
                <div className="d-flex flex-column align-items-center gap-4 justify-content-center w-full">
                  <div
                    className="w-90 max-h-110 bg-custom-heavy-white border-custom-medium-white border rounded-lg px-10 d-flex flex-column justify-content-center"
                  >
                    <div className="d-flex text-[12px] text-gray-300 font-semibold mt-2 w-full justify-content-between">
                      <div className="">Staked: {(userStakedInfo2Pool && formatEther(userStakedInfo2Pool?.stakeAmount?.toString()))} SUP</div>
                      <div className="z-0 ">Available Date:</div>
                    </div>
                    <div className="d-flex text-24 font-medium mt-2 w-full justify-content-between align-items-center">
                      <input
                        className="text-white border-none outline-none bg-transparent text-start  max-w-150"
                        placeholder="Input amount to un-stake"
                        type="number"
                        disabled
                        value={(userStakedInfo2Pool && formatEther(userStakedInfo2Pool?.stakeAmount?.toString()))}
                      ></input>
                      <div className="pl-5 text-12  text-gray-300  text-right cursor-pointer">
                        {
                          (userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ? new Date(parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex]?.period) * 30.5 * 24 * 3600 * 1000).toDateString() : "Never"
                        }
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button className={`btn btn-inline-light `}
                      style={{ minWidth: "100px" }}
                      disabled={!(parseInt(userStakedInfo2Pool?.startTime) > 0) || Date.now() < parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex]?.period) * 30.5 * 24 * 3600 * 1000}
                      onClick={() =>
                        parseInt(userStakedInfo2Pool?.startTime) > 0 && Date.now() >= parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex]?.period) * 30.5 * 24 * 3600 * 1000 &&
                        onClickUnstake()
                      }>Unstake</button>

                  </div>
                  {unstakingTxHash && showSuccessContent && RenderSuccessContents("Successfully un-staked!", unstakingTxHash)}
                </div>
                <div className="border-t-1 border-t-custom-medium-white pt-5 px-10 ">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="text-27 font-semibold">
                      Estimated Rewards:
                    </div>
                    <div className="text-20 font-semibold">{calculateRewards(stakingAmount, poolsData[poolIndex]?.period)} SUP</div>
                  </div>
                  <div className="text-18 font-semibold text-left">
                    Please note that once your tokens are staked, you cannot
                    un-stake until the contract fulfils the lock period.
                  </div>
                </div>
              </Reveal>

            </div>

            <div className="col-md-4 col-12 px-0">
              <div className="pb-3 px-0" >
                <TotalValueLocked />
              </div>
              <div className="col-12 px-0">
                <Performance />
              </div>
            </div>
          </div>

          <div className="d-flex mb-5 px-0">
            <History />
          </div>

        </div>
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