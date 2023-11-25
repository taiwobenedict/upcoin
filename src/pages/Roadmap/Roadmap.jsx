import React from 'react'

import { Button, Hero, Section } from '../../Utilities'
import "./Roadmap.css"

import coin from "../../images/roadmap/coin.png"
import Utility from "../../images/roadmap/Utility.png"
import Adoption from "../../images/roadmap/Adoption.png"
import Token from "../../images/roadmap/Token.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Roadmap() {
    return (
        <>


            <div id='roadmap'>
                <Hero height={100} transparent={false} container={900} className={"container"}>
                    <div className="text-pri roadmap-hero" data-aos="fade-up">
                        <h1 className="heading-xl bold" data-aos="fade-up">Supcoin <br /> Token</h1>
                        <p className="text-big bold" data-aos="fade-right">The first cryptocurrency with a global blockchain-powered marketplace to back it up. Supcoin Token is the life force of the Supelle ecosystem, developed to empower our innovative community.</p>
                        <Button className="mt-5 presale-btn" type={"block"} color={"light"}>Presale</Button>
                    </div>
                </Hero>

                {/* RoadMap */}

                <Section center={true} className={"container"} pd="100px 0">
                    <div className="roadmap-container">
                        <h1 className="heading-md my-5"> Bringing the <br />SUP Token to Life</h1>
                        <div className="roadmap-items pt-5">

                            <div className="col-md-10 mb-5">
                                <h1>SUPELLE ROADMAP</h1>
                                <p>PRESALE: The Presale phase marks a pivotal step in our journey.  It offers early access to our tokens to those who share our vision, fostering our community and supporting our mission to reshape the freelancing landscape. Your participation here is more than an investment; it's a vote of confidence in our mission. Thanks for joining this exciting journey!</p>
                            </div>

                            <div className="roadmap">

                                <div className="row">
                                    <div className='col-md-6 p-0'>
                                        <div className='roadmap-content left'>
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-right">
                                                <h3> 2018 - 2019</h3>
                                                <ul>
                                                    <li> Freelance Platform Industry Research <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Core team formation <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Founders brainstorm ideas for platform <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Establishment of plan and vision <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Business model validation <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Concept presentation (Mockups) (initial pitch to seed investors) <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Freelance marketplace idea conception<FaArrowLeft className='ml-3' /> </li>
                                                    <li> Company registration <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Assembling of experts to kickstart platform building <FaArrowLeft className='ml-3' /> </li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">
                                        <div className='roadmap-content right'>
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-left">
                                                <h3>2020 - 2022</h3>
                                                <ul>
                                                    <li><FaArrowRight className='mr-3' />  Pivoted business model to adapt to the changing landscape</li>
                                                    <li><FaArrowRight className='mr-3' />  Prototype creation for feasibility testing </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content left">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-right">
                                                <div>
                                                    <h1>2023</h1>
                                                </div>
                                                <h3>Q1 - 2023</h3>
                                                <ul>
                                                    <li>Team expansion <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Infrastructure improvement <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Further platform development for better user experience <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Privately launched a BETA version for feedback and bug fixes <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Execution of feedback from testers’ feedback to further improve the platform <FaArrowLeft className='ml-3' /> </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content right">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-left">

                                                <h3>Q2 - 2023</h3>
                                                <ul>
                                                    <li><FaArrowRight className='mr-3' />  Introduction of the following features-</li>
                                                    <li>
                                                        <ul>
                                                            <li>Real-time messaging</li>
                                                            <li>Project tools</li>
                                                            <li>Rating system for user engagement</li>
                                                        </ul>
                                                    </li>
                                                    <li><FaArrowRight className='mr-3' />  Further improvements, expansion and implementation of monetary strategies</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content left">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <h3>Q3 - 2023</h3>
                                            <ul>
                                                <li>Creation of Tokenomics <FaArrowLeft className='ml-3' /> </li>
                                                <li>Completion of litepaper <FaArrowLeft className='ml-3' /> </li>
                                                <li>Formation of social media channels <FaArrowLeft className='ml-3' /> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content right">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-left">
                                                <h3>Q4 - 2023</h3>
                                                <ul>
                                                    <li><FaArrowRight className='mr-3' />  Kick-off Airdrop system-2 Campaign</li>
                                                    <li><FaArrowRight className='mr-3' />  Comprehensive Strategic marketing campaign launch</li>
                                                    <li><FaArrowRight className='mr-3' />  Token Creation (supcoin)</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content left">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-right">
                                                <div>
                                                    <h1>2024</h1>
                                                </div>
                                                <h3>Q1 - 2024</h3>
                                                <ul>
                                                    <li>Team Expansion</li>
                                                    <li>Website Design UI/UX completed <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Token sale commences for seed round/investors <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Kick-off Airdrop system-3 Campaign <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Awareness marketing campaigns <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Smart contract deployment/audit <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Private sale commences <FaArrowLeft className='ml-3' /> </li>
                                                    <li className='bold'>   Staking and Governance:</li>
                                                    <li>Staking Smart Contracts deployed <FaArrowLeft className='ml-3' /> </li>
                                                    <li>Governance smart contract deployed <FaArrowLeft className='ml-3' /> </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content right">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-left">
                                                <h3>Q2 - 2024</h3>
                                                <ul>
                                                    <li><FaArrowRight className='mr-3' />  Presale (Launchpad)</li>
                                                    <li><FaArrowRight className='mr-3' />  Kick-off Airdrop system-1 Campaign</li>
                                                    <li><FaArrowRight className='mr-3' />  Public launch on DEX (Uniswap)</li>
                                                    <li><FaArrowRight className='mr-3' />  Securing strategic partners and advisor</li>
                                                    <li><FaArrowRight className='mr-3' />  V1 marketplace Initiating</li>
                                                    <li><FaArrowRight className='mr-3' />  Post-launch marketing campaigns</li>
                                                    <li><FaArrowRight className='mr-3' />  Onboard crypto influencers and listing providers</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content left">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-right">
                                                <h3>Q3 - 2024</h3>
                                                <ul>
                                                    <li> Securing strategic partners and advisor <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Launch Airdrop system 1 <FaArrowLeft className='ml-3' /> </li>
                                                    <li> V2 Website Initiating <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Post-launch marketing campaigns <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Onboard crypto influencers and listing providers <FaArrowLeft className='ml-3' /> </li>
                                                    <li> DAO registration <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Initiate CEX discussions <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Listing on 1st CEX (Tier 1) <FaArrowLeft className='ml-3' /> </li>
                                                    <li className='bold'>  Supelle Pre-Launch Preparation: <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Beta Testing and Bug Bounty Program <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Community Building and Marketing <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Partnerships and Onboarding <FaArrowLeft className='ml-3' /> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content right">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-left">

                                                <h3>Q4 - 2024</h3>
                                                <ul>
                                                    <li><FaArrowRight className='mr-3' />  Token staking begins</li>
                                                    <li><FaArrowRight className='mr-3' />  Team expansion continues</li>
                                                    <li><FaArrowRight className='mr-3' />  Further tier 2 and tier 1 CEX listings</li>
                                                    <li><FaArrowRight className='mr-3' />  MVP app release and community reviews (Service Marketplace & Social Interactive app)</li>
                                                    <li><FaArrowRight className='mr-3' />  Multi-language website & support dashboard</li>
                                                    <li><FaArrowRight className='mr-3' />  Growing international communities</li>
                                                    <li><FaArrowRight className='mr-3' />  Major Partner announcements</li>
                                                    <li><FaArrowRight className='mr-3' />  Supelle marketplace goes live</li>
                                                    <li><FaArrowRight className='mr-3' />  Supelle Main-net Deployment</li>
                                                    <li><FaArrowRight className='mr-3' />  User Onboarding and Incentives</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <div className="roadmap-content left border-none">
                                            <div className="line-circle">
                                                <div className="line-inner-cicle"><div data-aos="flip-up"></div></div>
                                            </div>
                                            <div data-aos="fade-right">
                                                <div>
                                                    <h1>2025</h1>
                                                </div>
                                                <h3>Q1 - 2025</h3>
                                                <ul>
                                                    <li> Continuous Improvement and Growth <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Marketing and Adoption <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Community Engagement <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Security and Compliance <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Scaling and Global Expansion <FaArrowLeft className='ml-3' /> </li>
                                                    <li> Decentralized Governance Implementation <FaArrowLeft className='ml-3' /> </li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>


                <Section name={"presale"} className={"container"} pd="100px 0">
                    <div className="presale-container">
                        <div>
                            <div className="presale-image" >
                                <img src={coin} alt="coin" className='w-100' data-aos="zoom-out" />
                            </div>
                        </div>

                        <div data-aos="zoom-out-up">
                            <h2 className="mt-2 heading-sm">Last Traded Price:</h2>
                            <h1 className='total-pric heading-md bold'>$0.38</h1>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between flex-wrap mb-3" data-aos="zoom-out">
                                <div className="d-flex align-items-center">
                                    <p className="lead mr-3">Current Day's High:</p>
                                    <h3 className='bold'>$0.35</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="lead mr-3">Current Day's Low:</p>
                                    <h3 className='bold'>$0.30</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="lead mr-3 ">Last 24h Volume:</p>
                                    <h3 className='bold'>54,177.00 SUP</h3>
                                </div>
                            </div>
                            <small>* * The last price represents the most recent matched trade as of the time listed above. The price above is delayed and does not necessarily represent the latest match. A matched trade does not mean the trade has settled. The price is subject to change at any time. Please access the Supcoin Securities ATS for the latest bids and offers, and for more current information. See the additional disclosure below for more information. * *</small>
                        </div>
                    </div>
                </Section>

                <Section name={"token"} mt={50} className={"padding-bottom container"} >
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
                            <div className="row align-items-center img-slider">
                                <div className="col-sm-6">
                                    <div className="pl-sm-5">
                                        <h2 className='heading-sm'>Early Adoption Benefits</h2>
                                        <p className=''>
                                            Investing in Supelle Coin during its ICO phase provides potential investors with early adoption benefits.

                                            Early investors often enjoy advantages such as discounted token prices, bonus  rewards, and exclusive access to platform features.

                                            The discount has been seamlessly incorporated into the presale tokens, enhancing their value, while the prospect of upcoming sales and rewards further augments the potential gains on the horizon.

                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <img src={Adoption} alt="" className='w-75 d-block ml-auto' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row align-items-center img-slider">
                                <div className="col-sm-6">
                                    <div className="pl-sm-5">
                                        <h2 className='heading-sm'>Utility Tokens</h2>
                                        <p className=''>
                                            Major discounts for all members who gain early bird access and make backdoor purchases in our crypto presale. The earlier you buy, the higher the profit you’ll turn around!
                                        </p>

                                    </div>

                                </div>
                                <div className="col-sm-6">
                                    <img src={Utility} alt="" className='w-75 d-block ml-auto' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row align-items-center img-slider">
                                <div className="col-sm-6">
                                    <div className="pl-sm-5">
                                        <h2 className='heading-sm'>Understanding Token Economics</h2>
                                        <p className=''>

                                            No matter if you intend to engage with the Supelle ecosystem as a purchaser or investor, the Supcoin Token offers a wide range of utility benefits tailored to your needs."

                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <img src={Token} alt={Token} className='w-75 d-block ml-auto' />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </Section>

            </div>
            <div className='tech mx-auto row p-0' >
                <div className="  px-5 pt-5 col-md-6 p-0" >
                    <div className="tech-side ml-auto">
                        <h1 className="pri-light-color bold">Token <br />Technical <br /> Features</h1>
                        <div className="d-flex justify-content-start align-items-center mt-4">
                            <FaArrowRight size={25} className="d-block icon mr-3" />
                            <p className=''>Supcoin is an ERC Ethereum-based (ETH) utility token that uses Binance Coin (BNB)</p>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mt-4">
                            <FaArrowRight size={25} className="d-block icon mr-3" />
                            <p className=''>Supcoin is a type of decentralized utility token. <br /> It is an ERC-20 utility coin, a type of secure, smart contract-enabled token on the Ethereum blockchain that is interchangeable. Supelle Decentralized Freelancing Marketplace Launch (2024)</p>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mt-4">
                            <FaArrowRight size={25} className="d-block icon mr-3" />
                            <p className=''>It is an ERC-20 utility coin, a type of secure, smart contract-enabled token on the Ethereum blockchain that is interchangeable.</p>
                        </div>
                    </div>
                </div>
                <div className="pri-light-bg text-light px-5 pt-5 col-md-6">
                    <div className="tech-side">
                        <h1 className="bold">OTC <br />Desk</h1>
                        <p className='mt-5'>Over-The-Counter (OTC) trading takes place off the open SUP order book. We offer deeper liquidity and a private, more personalized service to institutions and high net-worth individuals needing to fill large orders that might be too disruptive if placed on the open market. Whether you are trading blocks of $100,000, $1,000,000 or 200,000 SUP, the OTC desk will provide you with execution and settlement services that are discreet, secure and ultra-competitive
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap



