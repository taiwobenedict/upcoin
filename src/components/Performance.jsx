import Reveal from "react-awesome-reveal";
import { fadeInUp } from "../common/constants";
import StakingABI from "../chain_interaction/StakingPlatform.json";
import { useEffect, useState } from "react";

import { readContracts } from '@wagmi/core'
import { formatEther } from "viem";
import { formatNumber } from "../common/methods";
import { useDispatch, useSelector } from "react-redux";
import { setPoolsAmounts } from "../redux-toolkit/reducers/Staking";
import "./Components.css";

export default function Performance({ className }) {
  const refreshFlag = useSelector(state => state.staking.refreshFlag);

  const dispatch = useDispatch();
  const [poolsData0, setPoolsData0] = useState(0);
  const [poolsData1, setPoolsData1] = useState(0);
  const [poolsData2, setPoolsData2] = useState(0);
  const [poolsData3, setPoolsData3] = useState(0);
  const [poolsData4, setPoolsData4] = useState(0);
  const [poolsData5, setPoolsData5] = useState(0);
  const [poolsData6, setPoolsData6] = useState(0);
  const [maxPool, setMaxPool] = useState(0);

  const readWalletDoshiBalance = async () => {
    try {
      const data = await readContracts({
        contracts: [{
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'poolData',
          args: [0],
          chainId: 5,
          watch: true,
          enabled: true,
        },
        {
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'poolData',
          args: [1],
          chainId: 5,
          watch: true,
          enabled: true,
        },
        {
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'poolData',
          args: [2],
          chainId: 5,
          watch: true,
          enabled: true,
        },
        {
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'poolData',
          args: [3],
          chainId: 5,
          watch: true,
          enabled: true,
        },
        {
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'poolData',
          args: [4],
          chainId: 5,
          watch: true,
          enabled: true,
        },
        {
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'poolData',
          args: [5],
          chainId: 5,
          watch: true,
          enabled: true,
        },
        {
          address: process.env.REACT_APP_STAKING_PLATFORM_ADDRESS,
          abi: StakingABI,
          functionName: 'poolData',
          args: [6],
          chainId: 5,
          watch: true,
          enabled: true,
        }
        ]
      });
      let temp0 = parseFloat(formatEther(data[0]["result"][2]?.toString()));
      let temp1 = parseFloat(formatEther(data[1]["result"][2]?.toString()));
      let temp2 = parseFloat(formatEther(data[2]["result"][2]?.toString()));
      let temp3 = parseFloat(formatEther(data[3]["result"][2]?.toString()));
      let temp4 = parseFloat(formatEther(data[4]["result"][2]?.toString()));
      let temp5 = parseFloat(formatEther(data[5]["result"][2]?.toString()));
      let temp6 = parseFloat(formatEther(data[6]["result"][2]?.toString()));
      setPoolsData0(temp0);
      setPoolsData1(temp1);
      setPoolsData2(temp2);
      setPoolsData3(temp3);
      setPoolsData4(temp4);
      setPoolsData5(temp5);
      setPoolsData6(temp6);

      let maxValue = Math.max(temp0, temp1, temp2, temp3, temp4, temp5, temp6);
      console.log("maxValue >>> ", maxValue, temp0 / maxValue, temp1 / maxValue);
      setMaxPool(parseFloat(maxValue?.toString()));
      dispatch(setPoolsAmounts([temp0, temp1, temp2, temp3, temp4, temp5, temp6]));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    readWalletDoshiBalance();
  }, [refreshFlag]) //[] 

  return (
    <div
      className={`${className} overflow-hidden position-relative  bg-custom-light-white border-custom-medium-white  md:col-span-2  border rounded-3xl`} style={{ height: '445px' }}
    >

      <Reveal keyframes={fadeInUp} className='onStep' delay={0} duration={800} triggerOnce>
        <div className="text-25 font-semibold mt-5 ml-5 text-left">
          Performance
        </div>
        <div className="text-12 text-gray-300 font-semibold mt-1 ml-5 text-left">
          (Locked SUP)
        </div>
        {/* <div className=" w-full h-160 gap-1 md:gap-4 px-10 mt-2 align-items-end grid grid-cols-4 "> */}
        <div className=" w-full h-160 gap-1 px-10 mt-5 align-items-end d-flex"
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center"
          }}
        >
          <div className="thickbar  d-flex flex-column align-items-center  ">
            {formatNumber(poolsData0)}
            <div className={`w-full max-w-72  rounded-t-lg bg-custom-yellow `}
              style={{ height: poolsData0 > 0 ? Math.floor(poolsData0 / maxPool * 150) + "px" : "1px" }}
            ></div>
            <div className="text-center">a</div>
          </div>
          <div className="thickbar  d-flex flex-column align-items-center  ">
            {formatNumber(poolsData1)}
            <div className={`w-full max-w-72 rounded-t-lg bg-custom-blue `}
              style={{ height: poolsData1 > 0 ? Math.floor(poolsData1 / maxPool * 150) + "px" : "1px" }}
            ></div>
            <div className="text-center">b</div>
          </div>

          <div className="thickbar  d-flex flex-column align-items-center ">
            {formatNumber(poolsData2)}
            <div className={`w-full max-w-72 rounded-t-lg bg-custom-green `}
              style={{ height: poolsData2 > 0 ? Math.floor(poolsData2 / maxPool * 150) + "px" : "1px" }}
            ></div>
            <div className="text-center">c</div>
          </div>

          <div className="thickbar  d-flex flex-column align-items-center  ">
            {formatNumber(poolsData3)}
            <div className={` w-full max-w-72 rounded-t-lg bg-custom-red `}
              style={{ height: poolsData3 > 0 ? Math.floor(poolsData3 / maxPool * 150) + "px" : "1px" }}
            ></div>
            <div className="">d</div>
          </div>
          <div className="thickbar  d-flex flex-column align-items-center  ">
            {formatNumber(poolsData4)}
            <div className={`w-full max-w-72  rounded-t-lg bg-custom-blue2 `}
              style={{ height: poolsData4 > 0 ? Math.floor(poolsData4 / maxPool * 150) + "px" : "1px" }}
            ></div>
            <div className="text-center">e</div>
          </div>
          <div className="thickbar  d-flex flex-column align-items-center  ">
            {formatNumber(poolsData5)}
            <div className={`w-full max-w-72  rounded-t-lg bg-custom-red2 `}
              style={{ height: poolsData5 > 0 ? Math.floor(poolsData5 / maxPool * 150) + "px" : "1px" }}
            ></div>
            <div className="text-center">f</div>
          </div>
          <div className="thickbar  d-flex flex-column align-items-center  ">
            {formatNumber(poolsData6)}
            <div className={`w-full max-w-72  rounded-t-lg bg-custom-yellow2 `}
              style={{ height: poolsData6 > 0 ? Math.floor(poolsData6 / maxPool * 150) + "px" : "1px" }}
            ></div>
            <div className="text-center">g</div>
          </div>
        </div>
        <div className="d-flex mt-14 justify-content-center pb-5 md:pb-0 px-0">
          <div className="d-flex gap-1 md:justify-content-center align-items-center col-12 flex-wrap">
            <div className="d-flex gap-2 col-6 col-lg-3 justify-content-center align-items-center px-0">
              <div className="bg-custom-yellow w-22 h-22 rounded-4 text-12 font-semibold text-white d-flex justify-content-center align-items-center">
                a
              </div>
              <div className="">Flex</div>
            </div>
            <div className="d-flex gap-2 col-6 col-lg-3 justify-content-center align-items-center px-0">
              <div className="bg-custom-blue w-22 h-22 rounded-4 text-12 font-semibold text-white d-flex justify-content-center align-items-center">
                b
              </div>
              <div className="">1 mon</div>
            </div>
            <div className="d-flex gap-2 col-6 col-lg-3 justify-content-center align-items-center px-0">
              <div className="bg-custom-green w-22 h-22 rounded-4 text-12 font-semibold text-white d-flex justify-content-center align-items-center">
                c
              </div>
              <div className="">3 mon</div>
            </div>
            <div className="d-flex gap-2 col-6 col-lg-3 justify-content-center align-items-center px-0">
              <div className="bg-custom-red w-22 h-22 rounded-4 text-12 font-semibold text-white d-flex justify-content-center align-items-center">
                d
              </div>
              <div className="">5 mon</div>
            </div>
            <div className="d-flex gap-2 col-6 col-lg-3 justify-content-center align-items-center px-0">
              <div className="bg-custom-blue2 w-22 h-22 rounded-4 text-12 font-semibold text-white d-flex justify-content-center align-items-center">
                e
              </div>
              <div className="">8 mon</div>
            </div>
            <div className="d-flex gap-2 col-6 col-lg-3 justify-content-center align-items-center px-0">
              <div className="bg-custom-red2 w-22 h-22 rounded-4 text-12 font-semibold text-white d-flex justify-content-center align-items-center">
                f
              </div>
              <div className="">12 mon</div>
            </div>
            <div className="d-flex gap-2 col-6 col-lg-3 justify-content-center align-items-center px-0">
              <div className="bg-custom-yellow2 w-22 h-22 rounded-4 text-12 font-semibold text-white d-flex justify-content-center align-items-center">
                g
              </div>
              <div className="">24 mon</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
