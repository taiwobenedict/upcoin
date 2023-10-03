import { useState, useEffect } from 'react'

import sustainable from "../../images/invest/sustainable.png"
import esteemed from "../../images/invest/esteemed.png"
import unparallel from "../../images/invest/unparallel.png"
import robust from "../../images/invest/robust.png"
import scale from "../../images/invest/scale.png"
import strong from "../../images/invest/sustainable.png"
import eye from "../../images/invest/eye.png"
import growth from "../../images/invest/growth.png"
import time from "../../images/invest/time.png"
import target from "../../images/invest/target.png"
import shuffle from "../../images/invest/shuffle.png"
import globe from "../../images/invest/globe.png"
import marketplace from "../../images/invest/marketplace.png"
import diligence from "../../images/invest/diligence.png"
import chart from "../../images/invest/chart.png"
import earlysupport from "../../images/invest/earlysupport.jpeg"
import keyreasons from "../../images/invest/keyreasons.jpeg"
import investslider from "../../images/invest/investslider.png"


import { Hero, Button, Section } from '../../Utilities'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaChevronCircleRight } from 'react-icons/fa'



import './invest.css'

function Invest() {
    const [isChecked, setCheck] = useState(true)
    const handleCheck = () => {

        setCheck(prev => !prev)
    }

    // Image Slider
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const position = 400 - scrollY;

    const elementStyle = {
        transform: `translateX(${Math.max(0, position)}px)`,
    };


    return (
        <div id='invest'>
            {/* Hero Section */}
            <Hero container={750} className="container invest-container">
                <div className="text-light">
                    <h1 className="heading-lg bold">Pioneering The Future with Us</h1>
                    <p className=' bold'>Be the first to be a part of Supelle's comprehensive opportunity by becoming an early stage supporter. </p>
                    <Button type={"inline"} color={"light"} >Let's Talk</Button>
                </div>
            </Hero>


            {/* Normal  */}
            <div className="pri-bg">
                <Section name={"normal"} mt={0} className="container" pd="100px 0px">
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <h2 className=' heading-md bold mb-3'>Unlock the new normal</h2>
                            <p className='mt-2 '>We are offering you an exciting opportunity that we believe may be of interest to you. We are currently seeking early stage supporters for Supelle, and we want to share some key details with you.</p>
                            <p className="mt-2 ">Supelle/Supcoin has tremendous potential for growth and is positioned to disrupt the freelancing marketplace. Our team is comprised of highly talented individuals with a deep understanding of the industry and a strong track record of success.
                            </p>

                        </div>
                        <div className="col-md-6">
                            <div className="normal-slider-image" style={elementStyle}>
                                <img src={investslider} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 pt-5">
                        <div className="col-md-6 d-flex justify-content-between flex-column align-items-start">
                            <h3 className="mt-3 bold">SUP is the hurdle-free way to Raise Capital:</h3>
                            <button className="btn btn-block-light mt-2">What are utility tokens?</button>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="normal-items">
                                <div className="d-flex align-items-center flex-wrap mb-3">
                                    <div className="normal-image">
                                        <img src={sustainable} alt="Sustainable Financial Resistance" className='w-100' />
                                    </div>
                                    <p className="m-0">Sustainable Financial Resistance</p>
                                </div>
                                <div className="normal-item d-flex align-items-center flex-wrap mb-3">
                                    <div className="normal-image">
                                        <img src={esteemed} alt="Esteemed Founder and Accomplished Team of Experts" className='w-100' />
                                    </div>
                                    <p className="m-0">Esteemed Founder and Accomplished Team of Experts</p>
                                </div>
                                <div className="normal-item d-flex align-items-center flex-wrap mb-3">
                                    <div className="normal-image">
                                        <img src={unparallel} alt="Unparalleled Growth Potential & Uniqueness" className='w-100' />
                                    </div>
                                    <p className="m-0">Unparalleled Growth Potential & Uniqueness</p>
                                </div>
                                <div className="normal-item d-flex align-items-center flex-wrap mb-3">
                                    <div className="normal-image">
                                        <img src={robust} alt="Robust and Strategic Business Model " className='w-100' />
                                    </div>
                                    <p className="m-0">Robust and Strategic Business Model </p>
                                </div>
                                <div className="normal-item d-flex align-items-center flex-wrap mb-3">
                                    <div className="normal-image">
                                        <img src={scale} alt="The Industry Demonstrates Proven Stability and Scalability " className='w-100' />
                                    </div>
                                    <p className="m-0">The Industry Demonstrates Proven Stability and Scalability </p>
                                </div>
                                <div className="normal-item d-flex align-items-center flex-wrap mb-3">
                                    <div className="normal-image">
                                        <img src={strong} alt="Strong Competitive Advantage" className='w-100' />
                                    </div>
                                    <p className="m-0">Strong Competitive Advantage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            <Section>
                <div className="row align-items-center  justify-content-between">
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-2">
                        <div className="text-center col-md-9 mx-auto">
                            <h2 className="heading-md">Early Stage Supporters For Exciting New Crypto Opportunity
                            </h2>
                            <p className="m-0">Early-stage supporters like yourself are crucial to our success. Your expertise and financial backing can provide the resources necessary for us to scale our operations, penetrate the market, and ultimately achieve our vision. We believe that with the right early stage supporters, Supelle has the potential to become a market leader and generate substantial returns.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 px-0 order-1">
                        <div className="m-0">
                            <img src={earlysupport} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </Section>
            <Section className={'pri-bg'}>
                <div className="row align-items-center  justify-content-between">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-center py-5 col-md-9 mx-auto">
                            <h2 >Key Reasons to become an Early stage supporter:
                            </h2>
                            <p className="m-0">Investing with a reputable and trustworthy company is one of the smartest decisions that can lead to great rewards. So take the leap and invest with us - you will be in awe at the amazing returns in store for you.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block px-0">
                        <div className="m-0">
                            <img src={keyreasons} alt="" height={550} className='w-100' />
                        </div>
                    </div>
                </div>
            </Section>


            {/* Solution */}
            <Section name={"solution"} mt={0} className="container" pd="150px 0">
                <div className="overlay"></div>
                <div className="solution-context">
                    <h1 className="pri-color bold">End to End Solution</h1>
                    <p className=''>Out team will guide you through the process of issuign a blockchain based utility token.</p>
                </div>


                <div id="values">

                    <div className="row">
                        <div className="col-md-4 my-4">
                            <div className="custom-card h-100">
                                <h3 className="form-4 pt-4  pri-color mt-4 mb-3">Growth Potential</h3>
                                <p>Our business has demonstrated significant growth potential based on market research, early customer traction, and the scalability of the company. With your financial support and guidance, we can accelerate our market penetration and maximize our potential returns.
                                </p>
                                <div className="card-image top">
                                    <img src={growth} alt="Growth Potential" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-4">
                            <div className="custom-card h-100">
                                <h3 className="form-4 pt-4  pri-color mt-4 mb-3">Unique Value Proposition</h3>
                                <p>Our venture offers a unique value proposition that sets us apart from competitors. By leveraging cutting-edge technology, innovative strategies, and a customer-centric approach, we have the potential to disrupt the market and capture a substantial market share.</p>
                                <div className="card-image top">
                                    <img src={time} alt="Experienced and Committed Team" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-4">
                            <div className="custom-card h-100">
                                <h3 className="form-4 pt-4  pri-color mt-4 mb-3">Experienced and Committed Team</h3>
                                <p>Our team comprises highly skilled professionals with diverse backgrounds and a shared vision for success. We have a proven track record of execution and are deeply committed to delivering exceptional results.</p>
                                <div className="card-image top">
                                    <img src={shuffle} alt="Shuffle" />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className=" mt-5">
                        <div className="row justify-content-center mx-auto">
                            <div className="col-md-4 my-4">
                                <div className="custom-card h-100">
                                    <div className="card-image bot">
                                        <img src={eye} alt="Unique Value Proposition" />
                                    </div>
                                    <h3 className="form-4 pt-4 pri-color mt-4 mb-3">Timely Opportunity</h3>
                                    <p>Investing with us at this stage allows you to enter the market early and capitalize on the rapid growth potential. As the market evolves and competition increases, being a pre-launch investor positions you for enhanced returns on your investment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 my-4">
                                <div className="custom-card h-100">
                                    <div className="card-image bot">
                                        <img src={target} alt="Timely Opportunity" />
                                    </div>
                                    <h3 className="form-4 pt-4 pri-color mt-4 mb-3">End to End Solution</h3>
                                    <p>Invest in solutions; our team will guide you through the process of issuing and addressing the major problems, advantages, and stable customers for significant growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Benefits */}
            <Section mt={120} className="benefits">
                <div className="container">
                    <div className="text-content text-center col-md-9 mx-auto">
                        <h2 className="pri-color heading-sm">Benefits of an early stage supporter</h2>
                        <p className="mt-3 ">
                            As an early stage supporter, success comes from finding opportunities. Are you ready to dive into the exciting world of cryptocurrencies? Here's your chance to be a part and participate in our thrilling pre-launch of the new normal. Your support will be invaluable as we navigate challenges, make strategic decisions, and build a sustainable and profitable business.
                        </p>
                    </div>

                    <div className="slider">
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
                                <div className="col-md-8 mt-3 mx-auto">
                                    <h2 className="pri-color">Our team is here from the beginning of the journey to the end</h2>
                                    <p className="mt-3">In return for your support, we are offering advantages such as discounted token prices, bonus rewards, and exclusive access to platform features.  </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-md-8 mt-3 mx-auto">
                                    <h2 className="pri-color">We help to manage your investment.</h2>
                                    <p className="mt-3">By getting involved at an early stage, investors can position themselves to benefit  from the platform's growth and future enhancements, potentially reaping  substantial rewards as Supelle Coin gains traction.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-md-8 mt-3 mx-auto">
                                    <h2 className="pri-color">We Deliver Pre-Launch Investors a Seamless Journey.</h2>
                                    <p className="mt-3">Our team is committed to transparency, open communication, and delivering results.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Section>

            {/* Investment */}
            <Section mt={120} className="investment py-5" center={true}>
                <div className="overlay"></div>
                <div className="container py-5">
                    <div className="investment-heading">
                        <h2 className="text-center mb-5">Early Stage Investment Possibility With SUPELLE</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4 pr-5">
                            <div className="invest-image">
                                <img src={globe} alt="Global visibility & availability" />
                            </div>
                            <h5>Global visibility & availability</h5>
                            <p>Around-the-clock and the world from any country globally.</p>
                        </div>
                        <div className="col-md-4  pr-5">
                            <div className="invest-image">
                                <img src={marketplace} alt="Fully decentralized marketplace" />
                            </div>
                            <h5>Fully decentralized marketplace</h5>
                            <p>Utility to early stage supporter opportunities for those who want the new normal.</p>
                        </div>
                        <div className="col-md-4  pr-5">
                            <div className="invest-image">
                                <img src={diligence} alt="Due Diligence" />
                            </div>
                            <h5>Due Diligence</h5>
                            <p>Analyze industry trends, competition, target audience, and the company's unique value proposition
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Factors */}
            <Section className="factors" pd="100px 0 0 0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* <div className="fac-bg"></div> */}
                            <img src={chart} alt="chart" className='w-100' />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="mt-auto">
                                <h3 className='mb-5 pri-color'>These factors influence freelancers' and clients' dynamics, opportunities, and challenges. Here are some key factors:
                                </h3>
                                <div className="factor-items">
                                    <div className="factor-item d-flex">
                                        <FaChevronCircleRight className='icon' />
                                        <p className='pri-color'>Technological Advancements: The advancement of technology, particularly digital platforms and communication tools, has revolutionized the freelancing marketplace. Supelle's online platform will make it easier for freelancers to showcase their skills and for clients to find and hire talent globally.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="factor-item">
                                <FaChevronCircleRight className='icon' />
                                <p>Globalization and Remote Work: Globalization has led to increased connectivity and the ability to work remotely. Freelancers now have access to a global client base, while clients can tap into talent pools worldwide. This has increased competition and opened up a broader range of opportunities for freelancers and clients.
                                </p>
                            </div>
                            <div className="factor-item">
                                <FaChevronCircleRight className='icon' />
                                <p>Skill Demand and Supply: The demand for specific skills in the freelancing marketplace can significantly impact freelancers' earning potential and marketability.</p>
                            </div>

                            <div className="factor-item d-flex">
                                <FaChevronCircleRight className='icon' />
                                <p>Work-Life Balance and Lifestyle Choices: Freelancing provides flexibility and the ability to create a customized work-life balance. Many individuals choose freelance for lifestyle reasons, such as the ability to work from anywhere, set their own schedules, and pursue a variety of projects.
                                </p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="factor-item d-flex">
                                <FaChevronCircleRight className='icon' />
                                <p>Economic Factors: Global and local economic conditions can influence the freelancing marketplace. Economic downturns may lead to reduced freelance budgets and increased competition, while periods of economic growth can create more opportunities for freelancers as businesses seek flexible talent instead of full-time employees.
                                </p>
                            </div>
                            <div className="factor-item d-flex">
                                <FaChevronCircleRight className='icon' />
                                <p>Legal and Regulatory Environment:  In which freelancers operate can impact the marketplace. Freelancers must consider tax obligations, intellectual property rights, data protection regulations, and contract laws that may vary across jurisdictions, even in a decentralized marketplace.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

            <Section name="create-token" mt={120} pd="150px 0px">
                <div className="overlay"></div>
                <div className="row">
                    <div className="col-md-9 text-center mx-auto d-flex justify-content-center align-items-center">
                        <div className="rev-context">
                            <h1 className='heading-md'>We embraced the financial revolution by creating our very own utility token and marketplace</h1>
                            <p className=''>We are currently inviting early stage supporters to become part of a growing community early on and join us on this exciting journey. If you are interested in exploring this opportunity further, we would be delighted to provide you with more details.
                            </p>
                            <button className="btn btn-block-light mx-auto d-inline-block">Explore sup token here</button>
                        </div>
                    </div>
                </div>

            </Section>

                {/* Let Token */}
            <Section name="letstoken" className="container" pd="100px 0px">
                <div className="row text-light">
                    <div className="col-md-6">
                        <div className="token-content">
                            <h1 className="heading-md mb-5">Let's Token</h1>
                            <div className=' token-text'>
                                <div className="token-circle"><div className="inner-circle" data-aos="flip-up"></div></div>
                                <p>Tell Us About You</p>
                            </div>
                            <div className='token-text'>
                                <div className="token-circle"></div>
                                <p>Tell Us About Your Raise</p>
                            </div>
                            <div className=' token-text'>
                                <div className="token-circle"></div>
                                <p>Tell If You've Been A Supporter</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="form-container ">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" className="form-control" id='name' placeholder='John Smith' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control" id='email' placeholder='Johnsmith@mail.com' />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone_number">Phone Number</label>
                                    <input type="tel" className="form-control" id='phone_number' placeholder="+17723427995" />
                                </div>

                                
                                <div className="d-flex text-lightmb-4">
                                    <input type="checkbox" className='form-check mr-4' name="" id="" onChange={handleCheck} />
                                    <span>Have you been an early stage supporter in a technology platform before?</span>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="If yes, please kindly explain" disabled={isChecked} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="about_yourself">About Yourself</label>
                                    <input type="text" className="form-control" id='about_yourself' placeholder="What would you like us to know about you?" />
                                </div>

                            </div>

                            <Button type={"block"} color={"light"} className="mx-auto px-5 d-block mt-auto">Finish</Button>
                        </form>
                    </div>
                </div>
            </Section>

        </div>

    )
}

export default Invest