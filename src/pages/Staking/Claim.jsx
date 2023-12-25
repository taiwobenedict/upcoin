import { useEffect, useContext, useRef, useState } from "react"
import TotalValueLocked from '../../components/TotalValueLocked'
import Performance from '../../components/Performance'
import PrimaryButton from "../../components/PrimaryButton"
import History from "../../components/History"
import './staking.css'
import SidebarButton from "../../components/SideBarButton"
import { TabValues } from "../../common/constants"
import { BTN_HEIGHT_IN_MAIN_AREA, BTN_WIDTH_IN_MAIN_AREA, fadeInRight, fadeInUp } from "../../common/constants"
import Reveal from "react-awesome-reveal"
import { daysUntilWithdrawal } from "../../common/methods"
import { Button } from "../../Utilities";
import { readContracts } from '@wagmi/core';
import { formatEther, parseEther } from "viem";
import { Backdrop, CircularProgress } from "@mui/material";
import { confirmTransactionReceipt, checkTxIsSucceedOrNot, publicClient } from "../../chain_interaction/client";
import { setRefreshFlag } from "../../redux-toolkit/reducers/Staking";
import TokenABI from "../../chain_interaction/SupCoin.json";
import { toast } from "react-toastify";
import StakingABI from "../../chain_interaction/StakingPlatform.json";
import { useDispatch, useSelector } from "react-redux";
import {
  useAccount,
  useConnect,
  useNetwork,
  useWalletClient
} from "wagmi";
import StakingMenu from "./StakingMenu"

const backgroundImageStyle = {
  backgroundImage: `url("/main_bg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh", // Adjust as needed
};

export default function Overview() {
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userStakedInfo2Pool, setUserStakedInfo2Pool] = useState(0);
  const [poolIndex, setPoolindex] = useState(0);
  const [userRewardAmount, setUserRewardAmount] = useState(0);
  const [claimingAmount, setClaimingAmount] = useState(0);
  const [claimTxHash, setClaimTxHash] = useState("");
  const [showSuccessContent, setShowSuccessContent] = useState(false);
  const dispatch = useDispatch();
  const refreshFlag = useSelector(state => state.staking.refreshFlag);
  const poolsData = useSelector(state => state.staking.poolsData);
  const { address, isConnected } = useAccount();
  const { data: connectionData } = useConnect();
  const [working, setWorking] = useState(false);
  const { data: walletClient } = useWalletClient();
  const { chain } = useNetwork();
  const [doshiWalletBalance, setDoshiWalletBalance] = useState(0);

  const readUserStakedAmount = async () => {
    try {
      if (!address || !isConnected) return;
      const data = await readContracts({
        contracts: [{
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'getUserPoolInfo',
          args: [address, poolIndex],
          chainId: 5,
          watch: true,
          enabled: true,
        },
        {
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'getRewards',
          args: [address, poolIndex],
          chainId: 5,
          watch: true,
          enabled: true,
        },
        {
          address: process.env.REACT_APP_SUPCOIN_ADDRESS,
          abi: TokenABI,
          functionName: 'balanceOf',
          args: [address],
          chainId: 5,
          watch: true,
          enabled: true,
        }
        ]
      }
      );
      setUserStakedInfo2Pool(data[0] !== undefined && data[0] !== null && data[0]["result"]);
      console.log("remained reward >>> ", formatEther(data[1]["result"]));
      setUserRewardAmount(data[1] !== undefined && data[1] !== null && formatEther(data[1]["result"]));

      setDoshiWalletBalance(data[2] !== undefined && formatEther(data[2]["result"]));

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    readUserStakedAmount();

    window.addEventListener('click', closeSelectBox);
    return () => {
      window.removeEventListener('click', closeSelectBox);
    };
  }, [])

  const RenderSuccessContents = (label, txHash) => {
    return <Reveal keyframes={fadeInUp} className='onStep' delay={0} duration={800} triggerOnce>
      <div>
        {label}
        <div className="underline text-[12px] ">
          <a href={`https://goerli.etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer" >View on Goerli Etherscan</a>
        </div>
      </div>
    </Reveal >
  }

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const closeSelectBox = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {

    readUserStakedAmount();
  }, [poolIndex, isConnected])

  useEffect(() => {
    ; (async () => {

      if (claimTxHash) {

        setTimeout(async () => {
          try {
            const receipt = await confirmTransactionReceipt(claimTxHash);

            console.log(receipt);
            const succeed = await checkTxIsSucceedOrNot(claimTxHash);
            console.log("succeed >>>", succeed);
            dispatch(setRefreshFlag(!refreshFlag));
            if (succeed) {
              setShowSuccessContent(true);
              setClaimingAmount(0);
              dispatch(setRefreshFlag(!refreshFlag));
              setWorking(false);
              setTimeout(() => {
                setShowSuccessContent(false);
                setClaimTxHash(null);
                readUserStakedAmount();
              }, 5000);
            } else {
              setWorking(false);
              setClaimTxHash(null);
              setWorking(false);
            }
          } catch (err) {
            setClaimTxHash(null);
            setWorking(false);
            console.log(err);
          }
        }, 3000);
      }
    })()
  }, [claimTxHash])


  const onClickClaim = async () => {
    if (isConnected) {
      if (chain.id !== 5) {
        toast.warning("Please change the network of your wallet into Goerli and try again. DOSHI staking platform works on Goerli network.");
        return;
      }
    } else {
      toast.warning("Connect your wallet!");
      return;
    }
    if (claimingAmount <= 0) {
      toast.warning("Please input valid amount and try again.");
      setWorking(false);
      return;
    }
    try {
      setWorking(true);
      const data = await readContracts({
        contracts: [
          {
            address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
            abi: StakingABI,
            functionName: 'getUserPoolInfo',
            args: [address, poolIndex],
            wallet: address
          }, {
            address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
            abi: StakingABI,
            functionName: 'getRewards',
            args: [address, poolIndex],
            wallet: address
          }
        ]
      });
      setUserStakedInfo2Pool(data[0] !== undefined && data[0] !== null && data[0]["result"]);

      setUserRewardAmount(data[1] !== undefined && data[1] !== null && formatEther(data[1]["result"]));

      if (claimingAmount > parseFloat(formatEther(data[1]["result"]))) {
        toast.warning("Amount cannot exceeds the reward amount. Please input value again and retry.");
        setWorking(false);
        return;
      }
      if (!data || !data[0] || !data[1] || parseFloat(formatEther(data[1]["result"])) <= 0) {
        toast.warning("There is not withdrawable rewards.");
        setWorking(false);
        return;
      }

      if (parseFloat(formatEther(data[1]["result"])) > 0) {

        const claimingHs = await walletClient.writeContract({
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'withdraw',
          args: [parseInt(poolIndex), parseEther(claimingAmount)],
          chainId: connectionData?.chain?.id
        });

        setClaimTxHash(claimingHs);
      }

    } catch (err) {
      setWorking(false);
      console.log("claiming err >>> ", err);

    }
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
                isActive={idx === 1}
              />
            )
          }
        </div>

        <div className={`pt-10 d-flex flex-column text-white w-100 h-100`}>
          <div className="d-flex gap-20 mb-5 flex-column flex-md-row">
            <div
              className="overflow-hidden position-relative bg-custom-light-white border-custom-medium-white col-12 col-md-7 border rounded-3xl d-flex flex-wrap  justify-content-center gap-20"
              style={{ minHeight: '350px' }}>

              <Reveal keyframes={fadeInRight} className='onStep w-full' delay={0} duration={800} triggerOnce>
                <div
                  className="overflow-hidden relative min-h-350 border-custom-medium-white d-flex flex-column flex-wrap w-full justify-content-center gap-5 "
                >
                  <div className="text-25 font-semibold pl-2 pr-3 text-left w-full d-flex justify-content-between">
                    <div className="">Claim Your Staking Rewards</div>
                    <div className="">APY: {poolsData[poolIndex]?.apy}</div>
                  </div>
                  <div className="d-flex justify-content-between border-b-1 h-40p pl-3 pr-3  border-b-custom-medium-white ">
                    <div className="text-22 font-semibold">
                      Lock Period
                    </div>
                    <div className="text-16 font-semibold w-[150px] text-left">
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
                          <div className=" top-full left-0  border bg-checkbox border-gray-500 rounded"
                            style={{ zIndex: 100, position: "absolute", right: "10px" }}
                          >
                            {poolsData.map((option, index) => (
                              <div
                                key={index}
                                className="pl-2 pr-3  select-item text-gray-500 text-12"
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
                  </div>
                  <div className="d-flex justify-content-between border-b-1 h-40p pl-3 pr-3  border-b-custom-medium-white">
                    <div className="text-22 font-semibold">
                      Days To Maturity
                    </div>
                    <div className="text-16 font-semibold w-[150px] text-left">
                      {
                        (userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ?
                          poolsData[poolIndex]?.period === 0 ? "Anytime" : daysUntilWithdrawal(Date.now(), parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex]?.period) * 30.5 * 24 * 3600 * 1000) + " Days" : "0 Days"}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between border-b-1 h-40p pl-3 pr-3  border-b-custom-medium-white">
                    <div className="text-22 font-semibold">
                      Withdrawal Date
                    </div>
                    <div className="text-16 font-semibold w-[150px] text-left">
                      {
                        (userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ? new Date(parseInt(userStakedInfo2Pool?.startTime) * 1000 + parseInt(poolsData[poolIndex]?.period) * 30.5 * 24 * 3600 * 1000).toDateString() : "Never"
                      }
                    </div>
                  </div>
                  <div className="d-flex justify-content-between  pl-3 pr-3 h-40p ">
                    <div className="text-22 font-semibold">
                      Free Withdrawals Left
                    </div>
                    <div className="text-16 font-semibold w-[150px] text-left">
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
            </div>

            <div className="col-md-4 col-12 pl-md-0 pr-md-3 p-0">
              <TotalValueLocked />
            </div>
          </div>

          <div className="d-flex gap-20 mb-5 flex-column flex-md-row">
            <div className="col-12 col-md-7 px-0">

              <Reveal keyframes={fadeInRight} className='onStep' delay={0} duration={800} triggerOnce>
                <div className="h-445p text-white border bg-custom-light-white rounded-3xl border-custom-medium-white d-flex flex-column gap-5">
                  <div className="px-10 pt-10 d-flex w-full justify-content-between text-gray-300 text-16 font-semibold mb-3">
                    <div className="flex">Available: {Math.floor(userRewardAmount)} SUP </div>
                    <div className="z-0">Min: {1} SUP </div>
                  </div>
                  <div className="flex justify-content-center px-10 mb-5">
                    <div className="text-white border bg-custom-heavy-white h-60p rounded-lg border-custom-medium-white d-flex justify-content-between px-10 items-center">
                      <div className="d-flex flex-column align-items-start">
                        <input
                          className="text-21 text-white font-normal bg-transparent input-box outline-none  max-w-[150px]"
                          size="10"
                          value={Math.floor(claimingAmount)}
                          type="number"
                          onChange={(e) => setClaimingAmount(e.target.value)}
                          min={0}
                          max={userRewardAmount}
                        ></input>
                        <div className="text-10 text-gray-300 font-semibold text-start">
                          Fee/Tax: {((userStakedInfo2Pool && parseInt(userStakedInfo2Pool?.startTime) > 0) ?
                            isNaN(parseInt(userStakedInfo2Pool?.claimNum)) === false ?
                              parseInt(userStakedInfo2Pool?.claimNum) - 3 > 0 : false
                            : false) === true ? "20%" : "0%"}
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="d-flex pb-12 justify-content-center w-100 mb-5">

                    <button className={`btn btn-inline-light `}
                      style={{ minWidth: "100px" }}
                      onClick={() => onClickClaim()}
                    >Withdraw</button>

                    {claimTxHash && showSuccessContent && RenderSuccessContents("Successfully claimed!", claimTxHash)}
                  </div>

                  <div className="border-t-1 border-t-custom-medium-white pt-5 px-10 mt-3">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="text-22  font-semibold">
                        Last Withdrawal:
                      </div>
                      <div className="text-20 font-semibold">{
                        (userStakedInfo2Pool && parseFloat((userStakedInfo2Pool?.lastClaimAmount)) > 0) ?
                          parseFloat((userStakedInfo2Pool?.lastClaimAmount))?.toFixed(2) : "0.00"} SUP</div>
                    </div>
                  </div>
                </div>

              </Reveal>

            </div>
            <div className="col-md-4 col-12 pl-md-0 pr-md-3 p-0">
              <Performance />
            </div>
          </div>

          <div className="d-flex w-full mb-5">
            <History />
          </div>

        </div>
      </div>
    </div>


  )
}