import React from 'react'

import { Button, Hero, Section } from '../../Utilities'
import "./Roadmap.css"

import coin from "../../images/roadmap/coin.png"
import Utility from "../../images/roadmap/Utility.png"
import Adoption from "../../images/roadmap/Adoption.png"
import Token from "../../images/roadmap/Token.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowRight } from 'react-icons/fa'


function Roadmap() {
    return (
        <>


            <div id='roadmap'>
                <Hero transparent={false} container={900}>
                    <div className="text-pri roadmap-hero">
                        <h1 className="heading hero-heading" data-aos="fade-up">SupCoin <br /> Token</h1>
                        <p className="sub-headgin hero-caption" data-aos="fade-right">The first cryptocurrency with a global blockchain-powered marketplace to back it up. Supcoin Token is the life force of the Supelle ecosystem, developed to empower our innovative community.</p>
                        <Button className="mt-5 presale-btn" type={"block"} color={"light"}>Presale</Button>
                    </div>
                </Hero>
                {/* 
            <Section name={"maps"} className={'position-relative'}>
                <div className="overlay"></div>
                <div className="map-container">
                    <h1 className="heading pri-color">Bringing the <br />SUP Token to Life</h1>

                    <div className="map">
                        <div className="map-line"></div>

                        <div className="map-items row">
                            <div className="col-sm-4">
                                <div className="map-item map-item-top"></div>
                            </div>
                            <div className="col-sm-4">
                                <div className="map-item map-item-top"></div>
                            </div>
                            <div className="col-sm-4">
                                <div className="map-item map-item-top"></div>
                            </div>
                        </div>
                        <div className="map-items row">
                            <div className="col-sm-4">
                                <div className="map-item map-item-bottom"></div>
                            </div>
                            <div className="col-sm-4">
                                <div className="map-item map-item-bottom"></div>
                            </div>
                            <div className="col-sm-4">
                                <div className="map-item map-item-bottom"></div>
                            </div>
                        </div>

                    </div>

                </div>

            </Section> */}

                <Section name={"presale"} >
                    <div className="presale-container">
                        <div>
                            <div className="presale-image" >
                                <img src={coin} alt="coin" className='w-100' data-aos="zoom-out" />
                            </div>
                        </div>

                        <div data-aos="zoom-out-up">
                            <h2 className="mt-2 sub-heading lead">Last Traded Price:</h2>
                            <h1 className='total-pric'>$0.38</h1>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between flex-wrap mb-3" data-aos="zoom-out">
                                <div className="d-flex align-items-center">
                                    <h3 className="lead muted mr-3">Current Day's High:</h3>
                                    <h3 className=''>$0.35</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h3 className="lead muted mr-3">Current Day's Low:</h3>
                                    <h3 className=''>$0.30</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h3 className="lead muted mr-3 ">Last 24h Volume:</h3>
                                    <h3 className=''>54,177.00 SUP</h3>
                                </div>
                            </div>
                            <small>* * The last price represents the most recent matched trade as of the time listed above. The price above is delayed and does not necessarily represent the latest match. A matched trade does not mean the trade has settled. The price is subject to change at any time. Please access the Supcoin Securities ATS for the latest bids and offers, and for more current information. See the additional disclosure below for more information. * *</small>
                        </div>
                    </div>
                </Section>

                <Section name={"token"} mt={120} className={"padding-bottom"}>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={"auto"}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={1000}
                        loop={"true"}
                        navigation
                        pagination={{ clickable: true }}

                    >
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="pl-sm-5">
                                        <h2 className='heading'>As a Security.</h2>
                                        <p className='lead sub-heading'>
                                            Mandatory Profit Share: Annual pro rata distribution of
                                            40% of the Company's cumulative adjusted net operating cash flow
                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <img src={Adoption} alt="" className='w-100' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="pl-sm-5">
                                        <h2 className='heading'>As a Utility(Coming soon)</h2>
                                        <p className='lead sub-heading'>
                                            Discounts of at least 10% on trading fees on SupCoin
                                            according to the Tiered Trading Fee Discount Program, which is based upon the
                                            number of SUP Tokens held in customers' private wallets
                                        </p>

                                    </div>

                                </div>
                                <div className="col-sm-6">
                                    <img src={Utility} alt="" className='w-100' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="pl-sm-5">
                                        <h2 className='heading'>Token Economics</h2>
                                        <p className='lead sub-heading'>

                                            Whether you are looking to participate in the SUP
                                            ecosystem as an investor or as a customer, the SUP Token has both security and
                                            utility benefits for its holders.

                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <img src={Token} alt={Token} className='w-100' />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </Section>

            </div>
            <div className='tech row' >
                <div className=" pri-color px-5 pt-5 col-md-6" data-aos="fade-right">
                    <h1 className="title">Token <br />Technical <br /> Features</h1>
                    <div className="d-flex justify-content-start align-items-center mt-4">
                        <FaArrowRight size={25} className="d-block icon mr-3" />
                        <p className='lead'>Supcoin is an ERC Ethereum-based (ETH) utility token that uses Binance Coin (BNB)</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mt-4">
                        <FaArrowRight size={25} className="d-block icon mr-3" />
                        <p className='lead'>Supcoin is a type of decentralized utility token.</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mt-4">
                        <FaArrowRight size={25} className="d-block icon mr-3" />
                        <p className='lead'>It is an ERC-20 utility coin, a type of secure, smart contract-enabled token on the Ethereum blockchain that is interchangeable.</p>
                    </div>
                </div>
                <div className="pri-bg text-light px-5 pt-5 col-md-6" data-aos="fade-left">
                    <h1 className="title">OTC <br />Desk</h1>
                    <p className='lead'>Over-The-Counter (OTC) trading takes place off the open SUP order book. We offer deeper liquidity and a private, more personalized service to institutions and high net-worth individuals needing to fill large orders that might be too disruptive if placed on the open market. Whether you are trading blocks of $100,000, $1,000,000 or 200,000 SUP, the OTC desk will provide you with execution and settlement services that are discreet, secure and ultra-competitive
                    </p>
                </div>
            </div>
        </>
    )
}

export default Roadmap



