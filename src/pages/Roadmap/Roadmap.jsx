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
                <Hero height={100} transparent={false} container={900} className={"container"}>
                    <div className="text-pri roadmap-hero"  data-aos="fade-up">
                        <h1 className="heading-xl bold" data-aos="fade-up">Supcoin <br /> Token</h1>
                        <p className="text-big bold" data-aos="fade-right">The first cryptocurrency with a global blockchain-powered marketplace to back it up. Supcoin Token is the life force of the Supelle ecosystem, developed to empower our innovative community.</p>
                        <Button className="mt-5 presale-btn" type={"block"} color={"light"}>Presale</Button>
                    </div>
                </Hero>

                {/* RoadMap */}
                <div className="pri-light-bg">
                    <Section center={true} className={"container"}  pd="100px 0">
                        <div className="roadmap-container">
                            <h1 className="heading-md my-5"> Bringing the <br />SUP Token to Life</h1>
                            <div className="roadmap-items pt-5">

                                <div className="row">
                                    <div className="col-md-6 p-0 ">
                                        <div className="side left-side">
                                                <div className="circle left-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-right">
                                                <h2 className='mb-4'>Q4 2023</h2>
                                                <h3 className="">SUPCOIN</h3>
                                                <p className='mb-4'>
                                                    <span className='bold'>PRESALE: </span>
                                                    The Presale phase marks a pivotal step in our journey.  It offers early access to our tokens to those who share our vision, fostering our community and supporting our mission to reshape the freelancing landscape. Your participation here is more than an investment; it's a vote of confidence in our mission. Thanks for joining this exciting journey!
                                                </p>
                                                <h6 className='bold'>Genesis</h6>
                                                <ul>
                                                    <li>Social channels formation</li>
                                                    <li>Kick-off Airdrop system-2 Campaign</li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">

                                        <div className="side right-side">
                                                <div className="circle right-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-left">
                                                <h6 className='bold'>Documentation</h6>
                                                <ul>
                                                    <li>Institutional round</li>
                                                    <li>Creation of the Tokenomics</li>
                                                    <li>Completion of Litepaper</li>
                                                    <li>
                                                        <span className='bold'>Comprehensive whitepaper: </span>
                                                        Outlining our vision, objectives, and technical aspects of the decentralized freelancing marketplace
                                                    </li>
                                                    <li>
                                                        <span className='bold'>Smart contract/audit: </span>
                                                        Smart contract creation and tested
                                                    </li>
                                                </ul>
                                                <h3 className="">SUPELLE</h3>
                                                <h6 className='bold'>Genesis</h6>
                                                <ul>
                                                    <li>Freelance Platform Industry Research </li>
                                                    <li>Core team formation</li>
                                                    <li>Founders brainstorm ideas for platform</li>
                                                    <li>Establishment of plan and vision</li>
                                                    <li>Business model validation</li>
                                                    <li>Concept presentation (Mockups)</li>
                                                    <li>Comprehensive Strategic marketing  campaign launch</li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0 ">
                                        <div className="side left-side">
                                                <div className="circle left-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-right">
                                                <h1 className='bold text-center mb-5'> ONCE PRESALE CONCLUDES</h1>
                                                <h2 className='mb-4'>Q1 2024</h2>
                                                <h3 className="">SUPCOIN</h3>
                                                    <p className='mb-4'>
                                                        <span className='bold'>PRESALE AND TOKEN DISTRIBUTION: </span>
                                                        Our primary objective is to spread awareness about Supcoin, and our mission, which is to provide newcomers in the ever-evolving crypto market with a fresh opportunity. To achieve this, we will conduct an equitable and transparent presale event, fostering the growth of a robust community.
                                                    </p>

                                                    <ul>
                                                        <li>Token sale begins for seed round/investors</li>
                                                        <li>Kick-off Airdrop system-3 Campaign</li>
                                                        <li>Awareness marketing campaigns</li>
                                                        <li>
                                                            <span className='bold'>Smart contract deployment/audit: </span>
                                                            Secure and audited smart contracts for SUP tokens to ensure transparency, presale, and trust to establish a strong community.
                                                        </li>
                                                        <li>Private sales</li>
                                                        <li className='bold'>Staking and Governance</li>
                                                        <li>Staking Smart Contracts deployed</li>
                                                        <li>Governance smart contract deployed</li>
                                                        <li>Proposals passed within the ecosystem for the first governance exercise</li>
                                                    </ul>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">

                                        <div className="side right-side">
                                                <div className="circle right-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-left">
                                                <h3 className="">SUPELLE</h3>
                                                    <ul>
                                                        <li>Team Expansion </li>
                                                        <li>Website Design UI/UX completed</li>
                                                        <li>Platform Development incompleted</li>
                                                    </ul>

                                                    <h1 className='mb-4'>Q2 2024</h1>
                                                    <h3 className="">SUPCOIN</h3>
                                                    <p className='mb-4'>
                                                        <span className='bold'>MARKETING AND AWARNESS: </span>
                                                        Commence a marketing spotlighting that underscores the simplicity and accessibility of acquiring Supcoin, with a primary focus on its value proposition as a unique opportunity to possess and stake the token early, generating passive income.

                                                    </p>

                                                    <ul>
                                                        <li>Listing drive </li>
                                                        <li>Funding round closes </li>
                                                        <li>Presale (Launchpad)</li>
                                                        <li>Public launch on DEX (Uniswap)</li>
                                                        <li>Staking Platform Kick-Off</li>
                                                        <li>Securing strategic partners and advisor</li>
                                                        <li>V1 marketplace Initiating</li>
                                                        <li>Post-launch marketing campaigns</li>
                                                        <li>Onboard crypto influencers and listing providers</li>
                                                        <li>Initiate CEX discussionss</li>
                                                        <li>Listing on 1st CEX (Tier 1)</li>
                                                    </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 p-0 ">
                                        <div className="side left-side">
                                                <div className="circle left-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-right">
                                                <h3 className="">SUPCOIN</h3>
                                                    <p className='mb-4'>
                                                        <span className='bold'>Pre-Launch and Token Initiative: </span>
                                                        Following a successful DEX launch, a key aspect of our strategy involves introducing a token mechanism. This feature will autonomously decrease the token supply with each transaction, enhancing its scarcity.
                                                    </p>

                                                    <ul>
                                                        <li>Listing drive </li>
                                                        <li>Funding round closes </li>
                                                        <li>Presale (Launchpad)</li>
                                                        <li>Public launch on DEX (Uniswap)</li>
                                                        <li>Staking Platform Kick-Off</li>
                                                        <li>Securing strategic partners and advisor</li>
                                                        <li>V2 marketplace Initiating</li>
                                                        <li>Post-launch marketing campaigns</li>
                                                        <li>Onboard crypto influencers and listing providers</li>
                                                        <li>Initiate CEX discussionss</li>
                                                        <li>Listing on 1st CEX (Tier 1)</li>
                                                    </ul>
                                                
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">

                                        <div className="side right-side">
                                                <div className="circle right-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-left">
                                                <h3 className="">SUPELLE</h3>
                                                    <p className="bold">Pre-Launch Preparation</p>
                                                    <p className="bold">Beta Testing and Bug Bounty Program:</p>
                                                    <ul>
                                                        <li>Conduct a closed beta test with a select group of users to gather feedback and identify any remaining bugs or issues.</li>
                                                        <li>Implement a bug bounty program to incentivize the community to identify and report vulnerabilities</li>
                                                    </ul>
                                                    <p className="bold">Community Building and Marketing:</p>
                                                    <ul>
                                                        <li>Launch social media channels and engage with potential users and stakeholders.</li>
                                                        <li>Organize webinars, AMAs, and other events to educate the community about the platform's benefits.</li>
                                                    </ul>
                                                    <p className="bold">Partnerships and Onboarding:</p>
                                                    <ul>
                                                        <li>Collaborate with freelancers, businesses, and other platforms to onboard initial users.</li>
                                                        <li>Forge strategic partnerships to increase the platform's visibility.
                                                        </li>
                                                    </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 p-0 ">
                                        <div className="side left-side">
                                                <div className="circle left-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-right">
                                                <h1 className='mb-4'>Q4 2024</h1>
                                                <h3 className="">SUPCOIN</h3>
                                                    <p className='mb-4'>
                                                        <span className='bold'>Post-Launch Community Staking: </span>
                                                        Our aim is to cultivate an active and vibrant community that plays a pivotal role in driving the growth of Supcoin. After the launch, our primary focus shifts towards staking to incentivize community engagement and reward those who lock up their tokens.
                                                    </p>

                                                    <ul>
                                                        <li>Public sale</li>
                                                        <li>Crowdfund are open to the public</li>
                                                        <li>Kick-off Airdrop system-1 Campaign</li>
                                                        <li>Staking Smart Contracts deployed</li>
                                                        <li>Governance smart contract deployed</li>
                                                        <li>Token staking begins</li>
                                                        <li>Expanding team</li>
                                                        <li>Further tier 2 and tier 1 CEX listings</li>
                                                        <li>MVP app release and community reviews (Service Marketplace & Social Interactive app)</li>
                                                        <li>Multi-language website & support dashboard</li>
                                                        <li>Growing international communities</li>
                                                        <li>Major Partner announcements</li>
                                                        <li>Supelle marketplace goes live</li>
                                                    </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 p-0"></div>
                                    <div className="col-md-6 p-0">

                                        <div className="side right-side">
                                                <div className="circle right-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-left">
                                                <h3 className="">SUPELLE</h3>
                                                    <p className="bold">Main-net Deployment: </p>
                                                    <ul>
                                                        <li>Deploy the decentralized freelancing marketplace on the mainnet, making it accessible to the public.</li>
                                                    </ul>
                                                    <p className="bold">User Onboarding and Incentives: </p>
                                                    <ul>
                                                        <li>Offer incentives for early adopters, such as reduced fees or bonus tokens.</li>
                                                        <li>Focus on seamless user onboarding and support to ensure a positive initial experience.</li>
                                                    </ul>
                                                    <p className="bold">Continuous Improvement and Growth: </p>
                                                    <ul>
                                                        <li>Monitor the platform's performance and user feedback to identify areas for improvement.</li>
                                                        <li>Continuously enhance the platform's features and functionalities.

                                                        </li>
                                                    </ul>
                                                    <p className="bold">Marketing and Adoption: </p>
                                                    <ul>
                                                        <li>Launch an extensive global marketing campaign to attract both clients and freelancers.</li>
                                                        <li>Leverage partnerships and community support to drive adoption.
                                                        </li>
                                                        <li>5. Post-Launch (Ongoing)</li>
                                                    </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 p-0 ">
                                        <div className="side left-side">
                                                <div className="circle left-circle"><div className="inner-circle"></div></div>
                                            <div className="content" data-aos="fade-right ">
                                                <h1 className='mb-4'>Q4 2024</h1>
                                                <h3 className="">SUPELLE</h3>
                                                    <p className="bold">Community Engagement: </p>
                                                    <ul>
                                                        <li>Foster an active and engaged community by organizing events, AMAs, and discussions.</li>
                                                        <li>Encourage user feedback and suggestions for further improvement.</li>
                                                    </ul>
                                                    <p className="bold">Security and Compliance: </p>
                                                    <ul>
                                                        <li>Regularly update security measures to protect user data and funds.</li>
                                                        <li>Stay updated on relevant legal and regulatory changes and ensure compliance.</li>
                                                    </ul>
                                                    <p className="bold">Scaling and Global Expansion: </p>
                                                    <ul>
                                                        <li>Plan for scalability to accommodate a growing user base and transaction volume.</li>
                                                        <li>Explore opportunities for global expansion to attract users from different regions.</li>
                                                    </ul>
                                                    <p className="bold">Decentralized Governance Implementation: </p>
                                                    <ul>
                                                        <li>Plan for scalability to accommodate a growing user base and transaction volume.</li>
                                                        <li>Gradually roll out the decentralized governance model and involve the community in decision-making processes.</li>
                                                    </ul>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0"></div>
                                </div>

                              

                               
                            </div>
                        </div>
                    </Section>
                </div>

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
                                        <h2 className='heading-sm'>As a Security.</h2>
                                        <p className=''>
                                            Mandatory Profit Share: Annual pro rata distribution of
                                            40% of the Company's cumulative adjusted net operating cash flow
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
                                        <h2 className='heading-sm'>As a Utility(Coming soon)</h2>
                                        <p className=''>
                                            Discounts of at least 10% on trading fees on SupCoin
                                            according to the Tiered Trading Fee Discount Program, which is based upon the
                                            number of SUP Tokens held in customers' private wallets
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
                                        <h2 className='heading-sm'>Token Economics</h2>
                                        <p className=''>

                                            Whether you are looking to participate in the SUP
                                            ecosystem as an investor or as a customer, the SUP Token has both security and
                                            utility benefits for its holders.

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
                <div className="  px-5 pt-5 col-md-6" >
                    <div className="tech-side ml-auto">
                        <h1 className="pri-light-color bold">Token <br />Technical <br /> Features</h1>
                        <div className="d-flex justify-content-start align-items-center mt-4">
                            <FaArrowRight size={25} className="d-block icon mr-3" />
                            <p className=''>Supcoin is an ERC Ethereum-based (ETH) utility token that uses Binance Coin (BNB)</p>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mt-4">
                            <FaArrowRight size={25} className="d-block icon mr-3" />
                            <p className=''>Supcoin is a type of decentralized utility token.</p>
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



