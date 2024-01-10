import cnnLogo from '../../images/home/cnnLogo.png'
import Bloomberg from "../../images/home/Bloomberg.png"
import CryptoNews from "../../images/home/CryptoNews.png"
import foxnews from "../../images/home/foxnews.png"
import nbcLogo from "../../images/home/nbcLogo.png"
import pix1 from "../../images/home/pix1.png"
import pix2 from "../../images/home/pix2.png"
import pix3 from "../../images/home/pix3.png"
import pix4 from "../../images/home/pix4.png"
import bnb from "../../images/home/bnb.png"
import subcoin from "../../images/home/subcoin.png"
import supelle from "../../images/home/supelle.png"
import animation_coin from "../../images/home/animation_coin.mp4"
import { Link } from 'react-router-dom'
import Whitepaper from '../Whitepaper/Whitepaper';
import React, { useState, useEffect, useMemo } from "react";

import usdt from "../../images/home/usdt.png"
import greenDollar from '../../images/home/greenDollar.png'
import eth from '../../images/home/eth.png'
import iconBlue from "../../images/home/iconBlue.png"
import { Button, Hero, Section } from '../../Utilities'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { formatTimestampToDateString } from '../../common/methods'
import {
    useAccount,
    useNetwork,
    useWalletClient,
    useContractRead,
    useSwitchNetwork
} from 'wagmi';
import { formatUnits, parseUnits, parseEther, formatEther } from "viem";
import { readContract } from '@wagmi/core'
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDebounce } from 'use-debounce';
import TokenABI from "../../chain_interaction/SupCoin.json";
import PresalePlatformABI from "../../chain_interaction/PresalePlatform.json";
import { stripeApi } from "../../services/stripe";
import { bnbApi } from "../../services/bnb";
import { mainnet, goerli, bsc, bscTestnet } from 'wagmi/chains';

// Import Swiper styles
import 'swiper/css';
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { confirmTransactionReceipt, confirmTransactionReceiptBSC } from '../../chain_interaction/client';
import { socket } from "../../App";
import { setBNBPrice, setETHPrice, setUSDTPrice } from '../../redux-toolkit/reducers/Prices'
import axios from "axios";
import { MARKET_API_KEY } from '../../utils'

const buyModes = ["byETH", "byUSDT", "byCard", "byBNB"];
const definedPresalePrices = [0.45, 0.55, 0.6, 0.75, 0.8];

function Home() {
    const dispatch = useDispatch();
    const { isLoading: isSwitchingLoading, switchNetwork } =
        useSwitchNetwork()

    const ethPrice = useSelector(state => state.price.ethPrice || 0);
    const usdtPrice = useSelector(state => state.price.usdtPrice || 0);
    const bnbPrice = useSelector(state => state.price.bnbPrice || 0);

    const [maxAmountOfPhase, setMaxAmountOfPhase] = useState(0);
    const [soldAmountOfPhase, setSoldAmountOfPhase] = useState(0);
    const [startTime, setStartTime] = useState(process.env.REACT_APP_SUPCOIN_PRESALE_START_DATE);
    const [endTime, setEndTime] = useState(process.env.REACT_APP_SUPCOIN_PRESALE_END_DATE);
    const [buyMode, setBuyMode] = useState(buyModes[0]);
    const [countdown, setCountDown] = useState(0);
    const [inputAmount, setInputAmount] = useState(0);
    const [outputAmount, setOutputAmount] = useState(0);
    const [debouncedInputAmount] = useDebounce(inputAmount, 100);
    const { address, isConnected } = useAccount();
    const { data: walletClient } = useWalletClient();
    const { chain } = useNetwork();
    const [working, setWorking] = useState(false);
    const [targetDate, setTargetDate] = useState(new Date(process.env.REACT_APP_SUPCOIN_PRESALE_END_DATE * 1000));
    const [approvingTxHash, setApprovingTxHash] = useState("");
    const [presaleTxHash, setPresaleTxHash] = useState("");
    const [bnbTxHash, setBnbTxHash] = useState("");
    const [presalePriceOfPhase, setPresalePriceOfPhase] = useState(0);
    const [minPerWalletOfPhase, setMinPerWalletOfPhase] = useState(0);
    const [maxPerWalletOfPhase, setMaxPerWalletOfPhase] = useState(0);
    const [paidBnbAmount, setPaidBnbAmount] = useState(0);


    const readPrices = () => {
        axios.get('https://api.coinranking.com/v2/coins', {
            headers: {
                'x-access-token': MARKET_API_KEY,
            },
        })
            .then(response => {
                // Handle the API response data here
                const { coins } = response.data.data;
                const ethPrice = coins.find(item => item["symbol"] === "ETH").price;
                const usdtPrice = coins.find(item => item["symbol"] === "USDT").price;
                const bnbPrice = coins.find(item => item["symbol"] === "BNB").price;
                console.log(ethPrice, usdtPrice, bnbPrice);
                dispatch(setETHPrice(ethPrice));
                dispatch(setUSDTPrice(usdtPrice));
                dispatch(setBNBPrice(bnbPrice));
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors here
            });
    }

    useEffect(() => {
        let readInterval = setTimeout(() => {
            readPrices();
        }, 10000);
        return () => {
            if (readInterval) clearInterval(readInterval);
        }
    }, [])

    useEffect(() => {

        socket.on("ServerTime", (data) => {
            // console.log("Sever time >>> ", data);
        })
        socket.on("SupCoinPaid", (data) => {
            console.log("Got SupCoinPaid event >>> ", data);
            if (data && data.wallet && data.wallet?.toString()?.toLowerCase() === address?.toString()?.toLowerCase()) {
                toast.success(`Please check your wallet on Goerli network. You've received ${data?.amount} Supcoin.`);
            }
        });

    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            const timeRemaining = getTimeRemaining(targetDate);
            setCountDown(timeRemaining);
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const getTimeRemaining = (targetDate) => {
        const now = new Date();
        console.log(targetDate, now);
        const timeDifference = targetDate.getTime() - now.getTime();

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    useEffect(() => {

        const supAmount = buyMode === "byETH" ?
            debouncedInputAmount * ethPrice / parseFloat(presalePriceOfPhase || (definedPresalePrices[0] / 100)) :
            buyMode === "byUSDT" ?
                debouncedInputAmount * usdtPrice / parseFloat(presalePriceOfPhase || (definedPresalePrices[0] / 100))
                :
                buyMode === "byBNB" ?
                    debouncedInputAmount * bnbPrice / parseFloat(presalePriceOfPhase || (definedPresalePrices[0] / 100))
                    :
                    Math.floor(debouncedInputAmount / parseFloat(presalePriceOfPhase || (definedPresalePrices[0] / 100)));

        if (buyMode === "byCard" && supAmount % 100 > 0) {
            let q = supAmount / 100;
            q = Math.ceil(q);
            q = q * 100;
            setOutputAmount(q);
        } else {
            setOutputAmount(supAmount);
        }
    }, [debouncedInputAmount]);

    const { data: currentPhaseIndex } = useContractRead({
        address: process.env.REACT_APP_PRESALE_PLATFORM_ADDRESS,
        abi: PresalePlatformABI,
        functionName: 'activePhase',
        enabled: true,
        watch: true,
        chainId: 5
    });

    const { data: activePhaseStatus } = useContractRead({
        address: process.env.REACT_APP_PRESALE_PLATFORM_ADDRESS,
        abi: PresalePlatformABI,
        functionName: 'phases',
        enabled: true,
        args: [currentPhaseIndex],
        watch: true,
        chainId: 5
    })

    const { data: userPaidUSDT } = useContractRead({
        address: process.env.REACT_APP_PRESALE_PLATFORM_ADDRESS,
        abi: PresalePlatformABI,
        functionName: 'getUserPaidUSDT',
        args: [address, currentPhaseIndex],
        enabled: true,
        watch: true,
        chainId: 5
    });

    useEffect(() => {
        if (!activePhaseStatus) return;
        setMaxAmountOfPhase(formatEther(activePhaseStatus[0]?.toString()));
        setSoldAmountOfPhase(formatEther(activePhaseStatus[6]?.toString()));
        setStartTime(activePhaseStatus[4]);
        setTargetDate(new Date(parseInt(activePhaseStatus[5]) * 1000));
        setEndTime(activePhaseStatus[5]);
        console.log("startTIme >>> ", activePhaseStatus[4], " endTIme >>> ", activePhaseStatus[5]);
        setPresalePriceOfPhase(formatUnits(activePhaseStatus[1]?.toString(), 6));
        setMaxPerWalletOfPhase(formatUnits(activePhaseStatus[3]?.toString(), 6));
        setMinPerWalletOfPhase(formatUnits(activePhaseStatus[2]?.toString(), 6));

        console.log("activePhase >>> ", formatEther(activePhaseStatus[0]?.toString()),
            formatEther(activePhaseStatus[6]?.toString()),
            activePhaseStatus[4],
            activePhaseStatus[5],
            formatUnits(activePhaseStatus[1]?.toString(), 6),
            Number(parseFloat(formatEther(activePhaseStatus[6]?.toString())) * 100 / parseFloat(formatEther(activePhaseStatus[0]?.toString())))?.toFixed(2) + "%"
        );
    }, [activePhaseStatus]);

    const onClickBuy = async () => {
        if (isConnected !== true) {

            toast.warning("Connect your wallet!");
            return;
        }
        if (outputAmount <= 0) {
            toast.warning("Invalid amount!");
            return;
        }
        try {
            if (buyMode === buyModes[0]) {
                if (chain.id !== 5) {
                    toast.warning("This platform works on Goerli network for ETH payment. Please change the network of your wallet into Goerli and try again. ");
                    return;
                }
                if (parseFloat(debouncedInputAmount * parseFloat(ethPrice)) > parseFloat(maxPerWalletOfPhase)) {
                    toast.warn(`In this phrase of presale, maximum is ${Number(parseFloat(ethPrice) / parseFloat(maxPerWalletOfPhase)).toFixed(2)} ETH (${parseInt(maxPerWalletOfPhase)} USDT). Please input valid amount and try again.`)
                    return;
                }
                if (parseFloat(debouncedInputAmount * parseFloat(ethPrice)) < parseFloat(minPerWalletOfPhase)) {
                    toast.warn(`In this phrase of presale, minimum is ${Number(parseFloat(ethPrice) / parseFloat(minPerWalletOfPhase)).toFixed(2)} ETH (${parseInt(minPerWalletOfPhase)} USDT). Please input valid amount and try again.`)
                    return;
                }
                setWorking(true);

                const presaleHash = await walletClient.writeContract({
                    address: process.env.REACT_APP_PRESALE_PLATFORM_ADDRESS,
                    abi: PresalePlatformABI,
                    functionName: 'buyTokensWithETH',
                    value: parseEther(debouncedInputAmount !== undefined && debouncedInputAmount?.toString()),

                });
                setPresaleTxHash(presaleHash);
            }
            if (buyMode === buyModes[1]) {

                if (chain.id !== 5) {
                    toast.warning("This platform works on Goerli network for USDT payment. Please change the network of your wallet into Goerli and try again. ");
                    return;
                }
                console.log("debouncedInputAmount  >>> ", debouncedInputAmount);
                if (parseFloat(debouncedInputAmount) > parseFloat(maxPerWalletOfPhase)) {
                    toast.warn(`In this phrase of presale, maximum is ${parseInt(maxPerWalletOfPhase)} USDT. Please input valid amount and try again.`)
                    return;
                }
                if (parseFloat(debouncedInputAmount) < parseFloat(minPerWalletOfPhase)) {
                    toast.warn(`In this phrase of presale, minimum is ${parseInt(minPerWalletOfPhase)} USDT. Please input valid amount and try again.`)
                    return;
                }
                setWorking(true);
                const allowance = await readContract({
                    address: process.env.REACT_APP_USDT_ADDRESS,
                    abi: TokenABI,
                    functionName: 'allowance',
                    args: [address, process.env.REACT_APP_PRESALE_PLATFORM_ADDRESS],

                })
                console.log(allowance, parseFloat(formatUnits(allowance !== undefined && allowance?.toString(), 6)), parseFloat(outputAmount));
                if (parseFloat(formatUnits(allowance !== undefined && allowance?.toString(), 6)) < parseFloat(outputAmount)) {

                    const aproveHash = await walletClient.writeContract({
                        address: process.env.REACT_APP_USDT_ADDRESS,
                        abi: TokenABI,
                        functionName: "approve",
                        args: [process.env.REACT_APP_PRESALE_PLATFORM_ADDRESS, parseUnits(debouncedInputAmount !== undefined && debouncedInputAmount?.toString(), 6)], wallet: address,

                    });
                    setApprovingTxHash(aproveHash);
                }

                const presaleHash = await walletClient.writeContract({
                    address: process.env.REACT_APP_PRESALE_PLATFORM_ADDRESS,
                    abi: PresalePlatformABI,
                    functionName: 'buyTokensWithUSDT',
                    args: [parseUnits(debouncedInputAmount !== undefined && debouncedInputAmount?.toString(), 6)],

                });
                setPresaleTxHash(presaleHash);
            }
            if (buyMode === buyModes[2]) {
                if (parseFloat(debouncedInputAmount) > parseFloat(maxPerWalletOfPhase)) {
                    toast.warn(`In this phrase of presale, maximum is ${parseInt(maxPerWalletOfPhase)} USD. Please input valid amount and try again.`)
                    return;
                }
                if (parseFloat(debouncedInputAmount) < parseFloat(minPerWalletOfPhase)) {
                    toast.warn(`In this phrase of presale, minimum is ${parseInt(minPerWalletOfPhase)} USD. Please input valid amount and try again.`)
                    return;
                }
                stripeApi.checkout({
                    phaseIndex: parseInt(currentPhaseIndex),
                    quantity: outputAmount / 100,
                    walletAddress: address
                })
                    .then(res => {
                        window.location = res.url?.url;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
            if (buyMode === buyModes[3]) {
                if (chain.id !== bscTestnet?.id) {
                    toast.warning("This platform works on BSC testnet network for BNB payment. Please change the network of your wallet into BSC testnet and try again. ");
                    return;
                }
                const ManagerAddress = process.env.REACT_APP_CARD_PAY_MANAGER_WALLET;
                if (parseFloat(debouncedInputAmount * parseFloat(bnbPrice)) > parseFloat(maxPerWalletOfPhase)) {
                    toast.warn(`In this phrase of presale, maximum is ${Number(parseFloat(ethPrice) / parseFloat(maxPerWalletOfPhase)).toFixed(2)} BNB (${parseInt(maxPerWalletOfPhase)} USDT). Please input valid amount and try again.`)
                    return;
                }
                if (parseFloat(debouncedInputAmount * parseFloat(bnbPrice)) < parseFloat(minPerWalletOfPhase)) {
                    toast.warn(`In this phrase of presale, minimum is ${Number(parseFloat(bnbPrice) / parseFloat(minPerWalletOfPhase)).toFixed(2)} BNB (${parseInt(minPerWalletOfPhase)} USDT). Please input valid amount and try again.`)
                    return;
                }

                setWorking(true);
                const bnbHash = await walletClient.sendTransaction({
                    to: ManagerAddress, // Required except during contract publications.
                    from: address, // must match user's active address.
                    value: debouncedInputAmount ? parseEther(debouncedInputAmount?.toString()) : undefined
                });
                setPaidBnbAmount((debouncedInputAmount));
                setBnbTxHash(bnbHash);

            }
        } catch (err) {
            console.error(err);
            setWorking(false);
        }
    }

    useEffect(() => {
        ; (async () => {
            if (bnbTxHash) {
                setTimeout(async () => {
                    try {
                        const receipt = await confirmTransactionReceiptBSC(bnbTxHash, bscTestnet?.id);
                        console.log(receipt);
                        setInputAmount(0);
                        setOutputAmount(0);


                        //report bnb payment to backend
                        bnbApi.reportBnbPay({
                            transactionHash: bnbTxHash,
                            bnbAmount: paidBnbAmount,
                            walletAddress: address
                        })
                            .then(res => {
                                if (res.data?.success) {
                                    toast.success("Please check your SupCoin balance after about few mins. It may be delayed about 30 mins at max.");
                                }
                            })
                            .catch(err => {
                                console.error(err);
                            })

                        setWorking(false);

                        toast.success("You've paid BNB to buy SupCoin");

                        setBnbTxHash(null);
                        setPaidBnbAmount((0));
                    } catch (err) {
                        setWorking(false);
                        setBnbTxHash(null);
                        setPaidBnbAmount((0));
                        console.log(err);
                    }
                }, 3000);
            }
            if (approvingTxHash) {
                setTimeout(async () => {
                    try {
                        const receipt = await confirmTransactionReceipt(approvingTxHash);
                        console.log(receipt);
                        setApprovingTxHash(null);
                        toast.success("You've approved your USDT to presale contract!");
                    } catch (err) {
                        setWorking(false);
                        setApprovingTxHash(null);
                        console.log(err);
                    }
                }, 3000);
            }
            if (presaleTxHash) {
                setTimeout(async () => {
                    try {
                        const receipt = await confirmTransactionReceipt(presaleTxHash);
                        console.log(receipt);
                        setInputAmount(0);
                        setOutputAmount(0);
                        setWorking(false);
                        setPresaleTxHash(null);
                        toast.success("You've successfully bought SUP coins.");
                    } catch (err) {
                        setWorking(false);
                        setPresaleTxHash(null);
                        console.log(err);
                    }
                }, 3000);
            }
        })()
    }, [approvingTxHash, presaleTxHash, bnbTxHash])

    const onChangeInputAmount = (value) => {

        console.log(parseFloat(value));
        setInputAmount(parseFloat(value));
    }

    const switchToChain = (targetChainId) => {
        if (isConnected !== true) {
            toast.warn("Please connect your wallet and try again.");
            return;
        }
        if (targetChainId !== chain?.id) {
            switchNetwork(targetChainId);
        }
    }

    return (
        <>
            <div id={"home"}>
                {/* Hero Backgrounds */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    autoplay={{ delay: 100000 }}
                    speed={1000}
                    loop={"true"}
                    className='w-100 h-100 position-absolute'
                >
                    <SwiperSlide className='w-100 h-100 d-none d-md-block'>
                        <div className="hero-bg hero-bg2 w-100 h-100">
                            <video autoPlay muted loop className='h-100 w-100 animation-coin'>
                                <source src={animation_coin} type="video/mp4" />
                            </video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-100 h-100'>
                        <div className="hero-bg hero-bg1">
                            <div className="display"></div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Hero centerContent={true} expand={true} className={"container-fluid"} >
                    <div className="row  w-100 mx-auto justify-content-between align-items-center">
                        <div className="col-md-7 align-self-start mt-4">
                            <div className="hero-context text-light">
                                <h1 className='heading-sm bold'>EMBRACE AND EMBARK ON A PATH TOWARDS A PROSPEROUS OPPORTUNITY.</h1>
                                <p className='text-big bold'>Begin your journey leading the way to a brighter future
                                    with Supcoin to embrace the potential of this cutting-edge
                                    digital currency. Supcoin- Unleash massive financial
                                    potential with the ultimate fusion of finance and freelancing!</p>
                                <h3 className="sub-heading mt-4">FEATURED BY:</h3>
                                <div className="d-flex flex-wrap">
                                    <img src={cnnLogo} alt="cnnLogo" className='mr-3 mt-2' />
                                    <img src={Bloomberg} alt="bloomberg" className='mr-3 mt-2' />
                                    <img src={CryptoNews} alt="crypto-news" className='mr-3 mt-2' />
                                    <img src={foxnews} alt="foxnew" className='mr-3 mt-2' />
                                    <img src={nbcLogo} alt="nbcLogo" className='mr-3 mt-2' />
                                </div>
                            </div>
                            <div className="action-btns mt-4 justify-content-start">
                                <Link onClick={() => Whitepaper()}><Button color={"light"} type={"block"}>WHITEPAPER</Button></Link>
                                <Link to="/certik_audit"><Button color={"light"} type={"inline"}>CERTIK AUDIT</Button></Link>
                            </div>
                        </div>
                        <div className="col-md-5">

                            <div className="buy-section text-center text-light ml-md-auto">
                                <h6 className="bold">SECURE YOUR PURCHASE BEFORE PRICE INCREASE!</h6>
                                <h6 className="text-primary mt-3 bold">SALE {
                                    new Date().getTime() <= new Date(parseInt(startTime) * 1000).getTime() ?
                                        "STARTS" :
                                        new Date().getTime() <= new Date(parseInt(endTime) * 1000).getTime() ?
                                            "ENDS" : ""
                                } IN</h6>

                                <div className="count-down d">
                                    <div className="time">
                                        <h3 className='m-0 bold'>{countdown.days}</h3>
                                        <p className='m-0'>Days </p>
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
                                            width: (parseInt(endTime) - new Date().getTime() / 1000 > 0) && (parseInt(startTime) < new Date().getTime() / 1000) ? Number((new Date().getTime() / 1000 - parseInt(startTime)) * 100 /
                                                (parseInt(endTime) - parseInt(startTime)))?.toFixed(2) + "%" : "0%"
                                        }}></div>
                                    <p className="m-0 CARD-text"
                                    >Until Price Increase to 1 SUP = {definedPresalePrices[parseInt(currentPhaseIndex) + 1]} USD</p>
                                </div>

                                <h5 className="mt-3 bold">AMOUNT RAISED:  ${Number(parseFloat(soldAmountOfPhase) * parseFloat(presalePriceOfPhase))?.toFixed(2)}</h5>
                                <p className="mt-2">1 SUP = {parseFloat(presalePriceOfPhase)} USD</p>
                                <p style={{ margin: 0, padding: 0 }} >1 ETH = {parseFloat(ethPrice)?.toFixed(4)} USD</p>
                                <p style={{ margin: 0, padding: 0 }} >1 BNB = {parseFloat(bnbPrice)?.toFixed(4)} USD</p>

                                <div className="gateway">
                                    <div className="method"
                                        style={{
                                            outline: buyMode === buyModes[0] ? "1px white solid" : "none"
                                        }}
                                        onClick={() => {
                                            setInputAmount(0);
                                            setOutputAmount(0);
                                            setBuyMode(buyModes[0]);
                                            switchToChain(goerli.id);

                                        }}
                                    >
                                        <img src={eth} alt="" className="w-100 method-img" style={{ width: "26px", height: "26px" }} />
                                        <p className="m-0 bold">ETH</p>
                                    </div>
                                    <div className="method"
                                        style={{
                                            outline: buyMode === buyModes[1] ? "1px white solid" : "none"
                                        }}
                                        onClick={() => {
                                            setInputAmount(0);
                                            setOutputAmount(0);
                                            setBuyMode(buyModes[1])
                                            switchToChain(goerli.id);

                                        }
                                        }

                                    >
                                        <img src={usdt} alt="" className="w-100 method-img" style={{ width: "24px", height: "24px" }} />
                                        <p className="m-0 bold">USDT</p>
                                    </div>
                                    <div className="method"
                                        style={{
                                            outline: buyMode === buyModes[3] ? "1px white solid" : "none"
                                        }}
                                        onClick={() => {
                                            setInputAmount(0);
                                            setOutputAmount(0);
                                            setBuyMode(buyModes[3]);
                                            switchToChain(bscTestnet?.id);
                                        }
                                        }
                                    >
                                        <img src={bnb} alt="" className="w-100 method-img" style={{ width: "24px", height: "24px" }} />
                                        <p className="m-0 bold">BNB</p>
                                    </div>
                                    {/* <div className="method"
                                        style={{
                                            outline: buyMode === buyModes[2] ? "1px white solid" : "none"
                                        }}
                                        onClick={() => {
                                            setInputAmount(0);
                                            setOutputAmount(0);
                                            setBuyMode(buyModes[2])
                                        }
                                        }
                                    >
                                        <IoCardOutline className="w-100 method-img" style={{ width: "24px", height: "24px" }} />
                                        <p className="m-0 bold">CARD</p>
                                    </div> */}
                                </div>

                                <div className="buy-form text-left"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <div className="form-group">
                                        <span>Amount in {
                                            buyMode === "byETH" && "ETH"
                                        }
                                            {
                                                buyMode === "byUSDT" && "USDT"}
                                            {
                                                buyMode === "byCard" && "Card"
                                            }
                                            {
                                                buyMode === "byBNB" && "BNB"
                                            }
                                            &nbsp;you pay</span>
                                        <div className="input d-flex">
                                            <input type="number" id='other' value={inputAmount} onChange={(e) => onChangeInputAmount(e.target.value)} />
                                            {
                                                buyMode === "byETH" ?
                                                    <img src={eth} alt="" style={{ width: "20px", height: "20px", marginRight: "4px" }} />
                                                    :
                                                    buyMode === "byUSDT" ?
                                                        <img src={usdt} alt="" style={{ width: "18px", height: "18px", marginRight: "4px" }} />
                                                        :
                                                        buyMode === "byBNB" ?
                                                            <img src={bnb} style={{ width: "18px", height: "18px", marginRight: "4px" }} alt="" />
                                                            :
                                                            <img src={greenDollar} style={{ width: "26px", height: "26px", marginRight: "4px" }} alt="" />
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <span>Amount in SUP you receive</span>
                                        <div className="input d-flex">
                                            <input type="number" value={Number(outputAmount).toFixed(2)} id='sup' disabled />
                                            <img src={iconBlue} className="method-img" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <button className="btn btn-primary buy-btn btn-block"
                                    onClick={() => onClickBuy()}
                                >Buy with&nbsp;
                                    {
                                        buyMode === "byETH" && "ETH"
                                    }
                                    {
                                        buyMode === "byUSDT" && "USDT"}
                                    {
                                        buyMode === "byCard" && "Card"
                                    }
                                    {
                                        buyMode === "byBNB" && "BNB"
                                    }
                                </button>

                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    fontSize: "14px"
                                }} >
                                    <div className="my-1 mt-2">Presale Ends {formatTimestampToDateString(process.env.REACT_APP_SUPCOIN_PRESALE_END_DATE)}</div>
                                    <div className="my-1 mt-2">You paid: {parseFloat(userPaidUSDT ? formatUnits(userPaidUSDT?.toString(), 6) : '0')?.toFixed(2)} USD</div>
                                </div>

                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    fontSize: "14px"
                                }} >
                                    <div className="my-1">SUP DEX Listing {formatTimestampToDateString(process.env.REACT_APP_SUPCOIN_DEX_LISTING_DATE)}</div>
                                    <div className="my-1 mt-2">Max per wallet: {parseFloat(maxPerWalletOfPhase)} USD</div>
                                </div>

                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    fontSize: "14px"
                                }} >
                                    <div className="my-1">Listing Price 1$SUP = {process.env.REACT_APP_SUPCOIN_LISTING_PRICE}USDT</div>
                                    <div className="my-1">Min per wallet: {parseFloat(minPerWalletOfPhase)} USD</div>
                                </div>

                            </div>

                        </div>
                    </div>
                </Hero>

            </div>

            {/* Welcome Section */}
            <Section name={"welcome"} mt={50} className="container" pd="20px 0 100px 0">
                <div className="text-center col-sm-8 mx-auto" data-aos="zoom-in">
                    <h1 className="heading-m pri-color">Welcome to Supcoin</h1>
                    <h5 className='pri-color'>SUPCON IS THE FUTURE OF GENE-RATONAL WEALTH</h5>
                    <h3 className='mt-5 heading-sm'>What is a Crypto Presale?</h3>
                    <p className=''>A crypto presale grants a unique opportunity to purchase ahead of others and unlock immense profits. Our presale serves as your exclusive gateway to discounted digital assets, paving the way for million-dollar returns!</p>
                    <div className="action-btns mx-auto mt-4">
                        <Button color={"pri"} type={"block"}>Explore Our Project</Button>
                        <Link to="/whitelist" ><Button color={"pri"} type={"block"}>Sale Whitelist</Button></Link>
                    </div>
                </div>
            </Section>

            {/* Opportunity Section */}
            <Section name={"opportunity"} mt={50} className="container" pd="100px  0">
                <div className="row align-items-center h-100">
                    <div className="col-md-6 mt-5 text-center" data-aos="fade-right">
                        <h2 className='heading-sm pri-color mb-5'>Abundance of Opportunities awaits</h2>
                        <div className=" mx-auto">
                            <p className=''>Be among the pioneering investors to possess Supcoin (SUP) and witness remarkable growth in your wealth!</p>
                            <p className='mt-3'>Engage in token offerings with a trusted global marketplace, unlocking a vast network of international Opportunities.</p>
                        </div>
                    </div>
                </div>
            </Section>


            {/* Access Opportunity Section */}
            <Section name={"access"} expand={true} mt={82} pd="100px  0">
                <div className="col-sm-8 mx-auto text-center" data-aos="fade-up">
                    <h3 className="pri-color heading-sm">Access the opportunity through an alternate route!</h3>
                    <p className="mt-3">Envision seizing a rare, once-in-a-lifetime opportunity to aquire a highly profitable assets ahead of most investors-akin to invest in the next Facebook or Amazon and reaping multimillion gains <br /> This is the extraordinary opportunity that awaits YOU.</p>
                </div>

                <div className="access-gallery container-fluid" data-aos="zoom-out">
                    <div className="row">
                        <Link to="#" className="col-sm-6 mt-5 h-100">
                            <div className="gallery h-100">
                                <img src={pix1} className='w-100' alt="" />
                                <div className="px-3">
                                    <h6 className="pri-color">Connect Wallet</h6>
                                    <p>Securely connect your crypto wallet to manage and trade your digital assets easily.</p>
                                    <br />
                                </div>
                            </div>
                        </Link>
                        <Link onClick={() => Whitepaper()} className="col-sm-6 mt-5">
                            <div className="gallery h-100">
                                <img src={pix2} className='w-100' alt="" />
                                <div className="px-3">
                                    <h6 className="pri-color">Whitepaper</h6>
                                    <p>Explore the intricacies and potential of our project with our comprehensive whitepaper.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="#" className="col-sm-6 mt-5">
                            <div className="gallery h-100">
                                <img src={pix3} className='w-100' alt="" />
                                <div className="px-3">
                                    <h6 className="pri-color">Certik Audit</h6>
                                    <p>We assure complete security and reliability of our project with the rigorous Certik audit</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/about#team" className="col-sm-6 mt-5">
                            <div className="gallery h-100">
                                <img src={pix4} className='w-100' alt="" />
                                <div className="px-3">
                                    <h6 className="pri-color">Team</h6>
                                    <p>Introducing our team of seasoned professionals committed to providing you with top-notch services</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Sup Section */}
            <Section name="subcoin" className="container" pd="100px  0">
                <div className="row">
                    <div className="col-sm-6 px-5 mt-5 d-flex justify-content-center align-items-center">
                        <div className="text-center" data-aos="fade-right">
                            <h2 className='pri-color heading-md'>What is Supcoin SUP?</h2>
                            <p className='mt-4'>Supcoin is the official cryptocurrency of Suppelle Global Marketplace. Suppelle and Supcoin pioneer together like a married duo, synergistically complementing each other to generate value and prosperity for their forward-thinking investors. Supcoin serves a payment system and currency that allows Suppelle not just to be a global marketplace but a global decentralized marketplace. </p>
                            <div className="d-flex justify-content-center align-items-center mt-5 flex-wrap">
                                <Link to="/about#supcoin-info" className='d-block mr-4 mt-3'><Button type={"block"} color={"pri"} >What is Supcoin SUP?</Button></Link>
                                <Link to="/learn"><Button type={"block"} color={"pri"} className="mt-3">Learn more about digital money</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5 px-5" data-aos="fade-left">
                        <img src={subcoin} className='w-100' alt="" />
                    </div>
                </div>
            </Section>

            {/* New Letter */}
            <Section name={"newsletter"} mt={82} className="container" pd="100px  0">
                <div className="col-sm-7 text-center" data-aos="fade-up">
                    <h2 className='heading-md'>OUR NEWSLETTER</h2>
                    <p>Sign up to our newsletter and be first to hear about Supcoin news</p>
                    <input type="email" className="form-control w-75 mx-auto" />
                    <p className='mt-3'>By clicking Sign Up you're confirming that you agree with our Terms & Conditions</p>
                </div>
            </Section>

            {/* Supelle */}
            <Section name="supelle" mt={32} className={"container"} pd="100px 0 0 0">
                <div className="row">
                    <div className="col-sm-6 mt-5 align-self-end" data-aos="fade-right">
                        <img src={supelle} alt="Supelle" className="w-100" />
                    </div>
                    <div className="col-sm-6 mt-5 d-flex align-items-center">
                        <div className="mx-auto text-center" data-aos="fade-left">
                            <h2 className="pri-color heading-md">What is Supelle?</h2>
                            <h5 className=''>The People First Marketplace</h5>
                            <p className='mt-3'>Supelle is a global marketplace that serves as an umbrella. Where we provide work opportunities for freelancers and offer solution to individuals and bussiness alike. The innovative platform is the present and future of global connectivity and collaboration. We offer essential support for freelancers' success and deliver top-notch customer supports to clients.</p>
                            <div className="action-btns mx-auto mt-4 pb-4">
                                <Link to="/about#supelle-info"><Button type={"block"} color={"pri"} >What is Supelle?</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Watch Video */}
            <Section name={"watch-video"} center={true} className=" text-light container">
                <div className="row justify-content-between align-items-center" data-aos="zoom-in">
                    <div className="col-md-7 mt-4">
                        <div className="video-content" data-aos="fade-up">
                            <p >SUPCOIN TEAM PUT THIS TOGETHER FOR YOU Embrace the World of Visual Delights:</p>
                            <h3 className='heading-sm'>WATCH OUR VIDEOS</h3>
                            <p >Don't miss out on the opportunity enrich your mind and expand your horizons. Whether you have few minutes to spare or you're looking for deep dive into a specific topic, our video collection is here to serve you. Watch as experts in their fields share valuable insights, discover fascinating stories, and delve into the latest trends; a journey of discovery and enjoyment. Our videos are designed to keep you informed, enlightened, knowledgeable and inspirational. Happy Viewing!</p>
                            <Link to="support/videos" className='mx-auto d-block w-100'><Button type={"block"} color={"light"}  >Watch More</Button></Link>
                        </div>
                    </div>
                    <div className="col-md-5 my-4">
                        <div className="video">
                            <iframe className='w-100 h-100' src="https://www.youtube.com/embed/wFIjt8Gn2B8?si=HqSgLtkYU-OOvSrT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                    </div>
                </div>
            </Section>


            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={working || isSwitchingLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Home