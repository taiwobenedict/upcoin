import Reveal from "react-awesome-reveal";
import { fadeInUp } from '../common/constants'
import { numberWithCommas } from "../common/methods";
import { formatEther } from "viem";

import TokenABI from '../chain_interaction/SupCoin.json'
import { useContractRead } from 'wagmi'
import { FiExternalLink } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";

export default function TotalValueLocked({ }) {

  const { data: tokenTvl } = useContractRead({
    address: process.env.REACT_APP_SUPCOIN_ADDRESS,
    abi: TokenABI,
    functionName: 'balanceOf',
    args: [process.env.REACT_APP_STAKING_PLATFORM_ADDRESS],
    chainId: 5,
    watch: true,
    enabled: true,
  })


  return (
    // <div className="overflow-hidden relative min-h-[350px] bg-custom-light-white border-custom-medium-white  md:col-span-2  border-[1px] rounded-3xl pt-20 d-flex flex-column items-center justify-center pb-10">
    <div className="overflow-hidden position-relative min-h-[350px] bg-custom-light-white border-custom-medium-white border rounded-3xl pt-20 d-flex flex-column align-items-center justify-content-center pb-10 h-md-full" style={{ minHeight: '350px' }}>
      <div className="absolute top-5 left-5 h-100">
        <a className="text-gray-300 hover:text-white text-12 group font-semibold flex align-items-center gap-2 " target="_blank" rel="noreferrer"
          href={`https://goerli.etherscan.io/address/${process.env.REACT_APP_STAKING_PLATFORM_ADDRESS}`}
        >View on Etherscan <FiExternalLink className="text-gray-300 hover:text-white group-hover:text-white w-[12px] h-[12px]" /></a>
      </div>
      <Reveal keyframes={fadeInUp} className='onStep' delay={0} duration={800} triggerOnce>
        <div className="d-flex flex-column gap-20">
          <div className="d-flex gap-2 align-items-center">
            <img
              src="/tvl/tvl.svg"
              className="w-[30px] h-[30px]"
              alt="tvl icon"
            />
            <div className="text-25 font-semibold">Total Value Locked</div>
          </div>
          <div className="font-semibold text-center">
            ${numberWithCommas(formatEther(tokenTvl !== undefined && tokenTvl !== null ? tokenTvl?.toString() : "0") * process.env.REACT_APP_SUP2USDT_RATE)}
          </div>
        </div>
        <div className="pt-10 d-flex flex-wrap w-full justify-content-center gap-20">
          <div className="d-flex flex-column min-w-[65px]  ">
            <div className="text-[15px] font-semibold">{numberWithCommas(formatEther(tokenTvl !== undefined ? tokenTvl?.toString() : "0"))}</div>
            <div className="text-[15px] font-semibold ">SUP</div>
          </div>
          <div className="d-flex flex-column min-w-[65px] align-items-center">
            <div className="text-[15px] font-semibold"> ${numberWithCommas(formatEther(tokenTvl !== undefined ? tokenTvl?.toString() : "0") * process.env.REACT_APP_SUP2USDT_RATE)}</div>
            <div className="text-[15px] font-semibold d-flex align-items-center gap-1">
              <img
                src="/tvl/usdt.svg"
                className="w-[20px] h-[20px]"
                alt="usdt icon"
              />
              <div className="">USDT</div>
            </div>
          </div>
          <div className="d-flex flex-column min-w-[65px] align-items-center">
            <div className="text-[15px] font-semibold"> ${numberWithCommas(formatEther(tokenTvl !== undefined ? tokenTvl?.toString() : "0") * process.env.REACT_APP_SUP2USDT_RATE * process.env.REACT_APP_USDT2ETH_RATE)}</div>
            <div className="text-[15px] font-semibold d-flex align-items-center gap-1">
              <FaEthereum className="text-white w-[20px] h-[20px]" />
              <div className="">ETH</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
