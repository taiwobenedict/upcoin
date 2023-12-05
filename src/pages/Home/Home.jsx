import cnnLogo from '../../images/home/cnnLogo.png'
import Bloomberg from "../../images/home/Bloomberg.png"
import CryptoNews from "../../images/home/CryptoNews.png"
import foxnews from "../../images/home/foxnews.png"
import nbcLogo from "../../images/home/nbcLogo.png"
import pix1 from "../../images/home/pix1.png"
import pix2 from "../../images/home/pix2.png"
import pix3 from "../../images/home/pix3.png"
import pix4 from "../../images/home/pix4.png"
import subcoin from "../../images/home/subcoin.png"
import supelle from "../../images/home/supelle.png"
import animation_coin from "../../images/home/animation_coin.mp4"
import { Link } from 'react-router-dom'
import Whitepaper from '../Whitepaper/Whitepaper';
import { useState, useEffect, useMemo } from "react";

import usdt from "../../images/home/usdt.png"
import greenDollar from '../../images/home/greenDollar.png'
import eth from '../../images/home/eth.png'
import card from '../../images/home/card.png'
import iconBlue from "../../images/home/iconBlue.png"
import matic from '../../images/home/matic.png'

import { Button, Hero, Section } from '../../Utilities'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

import "./Home.css"
import Email from '../../components/Email'

function Home() {

    const [method, setMethod] = useState("ETH")
    const [payment, setPayment] = useState({
        sup: 0,
        other: 0
    })


    const handlePayment = (e) => {
        setPayment(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))

    }

    const handleMethod = (e) => {
        setMethod(e.target.id)
    }



    const targetDate = useMemo(() => new Date('2024-01-01T20:59:59'), []);

    const [countdown, setCountdown] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        percentage: 0,
    });

    useEffect(() => {
        document.title = "Supcoin | EMBRACE AND EMBARK ON A PATH TOWARDS A PROSPEROUS OPPORTUNITY."
        const startTime = Date.now();
        const totalTime = targetDate - startTime;

        const updateCountdown = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            let percentage = (elapsedTime / totalTime) * 100;
            percentage = Math.min(100, percentage);

            const remainingTime = Math.max(0, totalTime - elapsedTime);

            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
                .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
                .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            const minutes = Math.floor((remainingTime / (1000 * 60)) % 60)
                .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            const seconds = Math.floor((remainingTime / 1000) % 60)
                .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            setCountdown({ days, hours, minutes, seconds, percentage });
        };

        const timerLoop = setInterval(updateCountdown, 1000);

        return () => clearInterval(timerLoop);
    }, [targetDate]);

    const { days, hours, minutes, seconds, percentage } = countdown






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
                        <div className="col-md-5 mt-4" id='sale'>

                            <div className="buy-section text-center text-light ml-md-auto">
                                <h6 className="bold">SECURE YOUR PURCHASE BEFORE PRICE INCREASE!</h6>
                                <h6 className="text-primary mt-3 bold">SALE STARTS IN</h6>

                                <div className="count-down d">
                                    <div className="time">
                                        <h3 className='m-0 bold'>{days}</h3>
                                        <p className='m-0'>Days</p>
                                    </div>
                                    <div className="time bold">
                                        <h3 className='m-0 bold'>{hours}</h3>
                                        <p className='m-0'>Hours</p>
                                    </div>
                                    <div className="time">
                                        <h3 className='m-0 bold'>{minutes}</h3>
                                        <p className='m-0'>Minutes</p>
                                    </div>
                                    <div className="time">
                                        <h3 className='m-0 bold'>{seconds}</h3>
                                        <p className='m-0'>Seconds</p>
                                    </div>
                                </div>

                                <div className="CARD bg-success">
                                    <div className="inner-card" style={{ width: `${percentage}%` }}></div>
                                    <p className="m-0 CARD-text">Until Price Increase to 1 SUP = 0.0055 CARD</p>
                                </div>

                                <h5 className="mt-3 bold">AMOUNT RAISED:  $0,000,00.00</h5>
                                <p className="mt-2">1 SUP = 0.0045</p>

                                <div className="gateway">
                                    <div className="method position-relative">
                                        <div className="position-absolute w-100 h-100 method-btn" onClick={handleMethod} id='ETH'></div>
                                        <img src={eth} alt="" className="w-100 method-img" />
                                        <p className="m-0 bold">ETH</p>
                                    </div>
                                    <div className="method position-relative">
                                        <div className="position-absolute w-100 h-100 method-btn" onClick={handleMethod} id='USDT'></div>
                                        <img src={usdt} alt="" className="w-100 method-img" />
                                        <p className="m-0 bold">USDT</p>
                                    </div>
                                    <div className="method position-relative">
                                        <div className="position-absolute w-100 h-100 method-btn" onClick={handleMethod} id='MATIC'></div>
                                        <img src={matic} alt="" className="w-100 method-img" />
                                        <p className="m-0 bold">MATIC</p>
                                    </div>
                                    <div className="method position-relative">
                                        <div className="position-absolute w-100 h-100 method-btn" onClick={handleMethod} id='CARD'></div>
                                        <img src={card} alt="" className="w-100 method-img" />
                                        <p className="m-0 bold">CARD</p>
                                    </div>
                                </div>

                                <div className="buy-form text-left">
                                    <div className="form-group">
                                        <span>Amount in {method} you pay</span>
                                        <div className="input d-flex">
                                            <input type="number" id='other' value={payment.other} onChange={handlePayment} />
                                            <img src={greenDollar} className="method-img" alt="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <span>Amount in SUP you receive</span>
                                        <div className="input d-flex">
                                            <input type="number" value={payment.sup} id='sup' onChange={handlePayment} />
                                            <img src={iconBlue} className="method-img" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <button className="btn btn-primary buy-btn btn-block mt-3 mb-2">CONNECT WALLET</button>
                                <button className="btn btn-primary buy-btn btn-block">Buy with BNB</button>

                                <p className="my-1 mt-2">Presale Ends January 31st</p>
                                <p className="my-1">SUP DEX Listing February 5th</p>
                                <p className="my-1">Listing Price 1$SUP = 0.008USDT</p>

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
                        <Link to="/about" ><Button color={"pri"} type={"block"}>Explore Our Project</Button></Link>
                        <Link to="/whitelist" ><Button color={"pri"} type={"block"}>Seed Sale Whitelist</Button></Link>
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

                    <Email template="template_123zbf9" serviceID="service_9xd790e">
                        <div className="d-flex justify-content-center align-items-center">
                            <input type="hidden" name="message" value="You have a new subscriber!" />
                            <input type="email" name='value' className="form-control w-75" />
                            <button className="btn btn-primary" type='submit'>Subscribe</button>
                        </div>
                    </Email>
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
        </>
    )
}

export default Home