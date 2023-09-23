import cnnLogo from '../../images/home/cnnLogo.png'
import Bloomberg from "../../images/home/Bloomberg.png"
import CryptoNews from "../../images/home/CryptoNews.png"
import foxnews from "../../images/home/foxnews.png"
import nbcLogo from "../../images/home/nbcLogo.png"
import buyingSection from "../../images/home/buyingSection.png"
import pix1 from "../../images/home/pix1.png"
import pix2 from "../../images/home/pix2.png"
import pix3 from "../../images/home/pix3.png"
import pix4 from "../../images/home/pix4.png"
import subcoin from "../../images/home/subcoin.png"
import supelle from "../../images/home/supelle.png"
import animation_coin from "../../images/home/animation_coin.mp4"

import Marquee from "react-fast-marquee";

import { Button, Hero, Section } from '../../Utilities'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

import "./Home.css"

function Home() {

    return (
        <>
        <div id={"home"}>
            {/* Hero Backgrounds */}
            <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={"auto"}
                        autoplay = {{delay: 100000}}
                        speed={1000}
                        loop = {"true"}
                        className='w-100 h-100 position-absolute'
                    >
                        <SwiperSlide  className='w-100 h-100 d-none d-md-block'>
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

            <Hero centerContent={true}>
                <div className="row  w-100 justify-content-between align-items-center">
                    <div className="col-md-6 mt-4">
                        <div className="hero-context text-light">
                            <h2 className='heading'>EMBRACE AND EMBARK ON A PATH TOWARDS A PROSPEROUS OPPORTUNITY.</h2>
                            <p className='sub-heading'>Begin your journey leading the way to a brighter future
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
                            <Button color={"light"} type={"block"}>CONNECT</Button>
                            <Button color={"light"} type={"inline"}>CERDIK AUDI</Button>
                        </div>
                    </div>
                    <div className="col-md-6  mt-4">
                        <div className="buying-section">
                            <img src={buyingSection} alt="Buying Section" className='ml-md-auto d-block' />
                        </div>
                    </div>
                </div>
            </Hero>

        </div>


            {/* Marquee */}
            <div className="marquee text-center">
                <Marquee autoFill>
                    <div className="d-flex mr-5 align-items-center p-2">
                        <h5 className='mr-2'>Coin</h5>
                        <small>price</small>
                    </div>
                    <div className="d-flex mr-5 align-items-center p-2">
                        <h5 className='mr-2'>Coin</h5>
                        <small>price</small>
                    </div>
                    <div className="d-flex mr-5 align-items-center p-2">
                        <h5 className='mr-2'>Coin</h5>
                        <small>price</small>
                    </div>
                    <div className="d-flex mr-5 align-items-center p-2">
                        <h5 className='mr-2'>Coin</h5>
                        <small>price</small>
                    </div>
                    <div className="d-flex mr-5 align-items-center p-2">
                        <h5 className='mr-2'>Coin</h5>
                        <small>price</small>
                    </div>
                    <div className="d-flex mr-5 align-items-center p-2">
                        <h5 className='mr-2'>Coin</h5>
                        <small>price</small>
                    </div>
                </Marquee>
            </div>

            {/* Welcome Section */}
            <Section name={"welcome"} mt={50}>
                <div className="welcome-container" data-aos="zoom-in">
                    <h1 className="heading title pri-color">Welcome to Supcoin</h1>
                    <h5 className='pri-color sub-heading'>SUPCON IS THE FUTURE OF GENE-RATONAL WEALTH</h5>
                    <h3 className='mt-5 heading'>What is a Crypto Presale?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem tellus scelerisque morbi vivamus lobortis. Morbi cursus pellentesque ultrices senectus nulla vivamus ullamcorper aenean velit. Nec sit integer lectus viverra tempus purus.</p>
                    <div className="action-btns mx-auto mt-4">
                        <Button color={"pri"} type={"block"}>WHITEPAPER</Button>
                        <Button color={"pri"} type={"inline"}>CERDIK AUDI</Button>
                    </div>
                </div>
            </Section>

            {/* Opportunity Section */}
            <Section name={"opportunity"} mt={50}>
                <div className="row align-items-center h-100">
                    <div className="col-md-6 mt-5 text-center" data-aos="fade-right">
                        <h2 className='heading pri-color mb-5'>Abundance of Opportunities awaits</h2>
                        <div className="w-75 mx-auto">
                            <p>Lorem ipsum dolor sit amet consectetur. Lorem tellus scelerisque morbi vivamus lobortis.</p>
                            <p className='mt-3'>Morbi cursus pellentesque ultrices senectus nulla vivamus ullamcorper aenean velit.</p>
                        </div>
                    </div>
                </div>
            </Section>


            {/* Access Opportunity Section */}
            <Section name={"access"} expand={true} mt={82}>
                <div className="col-sm-7 mx-auto text-center" data-aos="fade-up">
                    <h3 className="pri-color">Access the opportunity through an alternate route!</h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur. Lorem tellus scelerisque morbi vivamus lobortis. Morbi cursus pellentesque ultrices senectus nulla vivamus ullamcorper aenean velit.</p>
                </div>

                <div className="access-gallery" data-aos="zoom-out">
                    <div className="row">
                        <div className="col-sm-6 mt-5 h-100">
                            <div className="gallery h-100">
                                <img src={pix1} className='w-100' alt="" />
                                <div className="px-3">
                                    <h6 className="pri-color">Connect Wallet</h6>
                                    <p>Securely connect your crypto wallet to manage and trade your digital assets easily.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <div className="gallery">
                                <img src={pix2} className='w-100' alt="" />
                                <div className="px-3">
                                    <h6 className="pri-color">Whitepaper</h6>
                                    <p>Explore the intricacies and potential of our project with our comprehensive whitepaper.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mt-5">
                            <div className="gallery">
                                <img src={pix3} className='w-100' alt="" />
                                <div className="px-3">
                                    <h6 className="pri-color">Certik Audit</h6>
                                    <p>We assure complete security and reliability of our project with the rigorous Certik audit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <div className="gallery">
                                <img src={pix4} className='w-100' alt="" />
                                <div className="px-3">
                                    <h6 className="pri-color">Team</h6>
                                    <p>Introducing our team of seasoned professionals committed to providing you with top-notch services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Sup Section */}
            <Section name="subcoin">
            <div className="row">
                <div className="col-sm-6 mt-5 d-flex justify-content-center align-items-center">
                    <div className="text-center" data-aos="fade-right">
                        <h2 className='pri-color'>What is Supcoin SUP?</h2>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur. Lorem tellus scelerisque morbi vivamus lobortis. Morbi cursus pellentesque ultrices senectus nulla vivamus ullamcorper aenean velit.Lorem ipsum dolor sit amet consectetur. Lorem tellus scelerisque morbi vivamus lobortis.</p>
                        <div className="d-flex justify-content-center align-items-center mt-5 flex-wrap">
                            <Button type={"block"} color={"pri"} className="mt-3 mr-3">What is Supcoin SUP?</Button>
                            <Button type={"block"} color={"pri"} className="mt-3">Learn more about digital money</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-5" data-aos="fade-left">
                    <img src={subcoin} className='w-100' alt="" />
                </div>
            </div>
            </Section>

            {/* New Letter */}
            <Section name={"newsletter"} mt={82}>
                <div className="col-sm-7 text-center" data-aos="fade-up">
                    <h2>OUR NEWSLETTER</h2>
                    <p>Sign up to our newsletter and be first to hear about Supcoin news</p>
                    <input type="email" className="form-control w-75 mx-auto" />
                    <p className='mt-3'>By clicking Sign Up you're confirming that you agree with our Terms & Conditions</p>
                </div>
            </Section>

            {/* Supelle */}
            <Section name="supelle" mt={32}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mt-5" data-aos="fade-right">
                            <img src={supelle} alt="Supelle" className="w-100" />
                        </div>
                        <div className="col-sm-6 mt-5 d-flex align-items-center">
                            <div className="mx-auto text-center" data-aos="fade-left">
                                <h2 className="pri-color heading">What is Supelle?</h2>
                                <h5 className='sub-heading'>The People First Marketplace</h5>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur. Lorem tellus scelerisque morbi vivamus lobortis. Morbi cursus pellentesque ultrices senectus nulla vivamus ullamcorper aenean velit. Nec sit integer lectus viverra tempus purus.</p>
                                <div className="action-btns mx-auto mt-4">
                                    <Button type={"block"} color={"pri"}>What is Supelle?</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            {/* Watch Video */}
            <Section name={"watch-video"} className="text-light d-flex align-items-center" mt={47}>
                    <div className="row" data-aos="zoom-in">
                        <div className="col-md-6 mt-4">
                            <div className="video-content">
                                <p>Supcoin team put this together for youEmbrace the World of Visual Delights:</p>
                                <h3>WATCH OUR VIDEOS</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Lorem tellus scelerisque morbi vivamus lobortis. Morbi cursus pellentesque ultrices senectus nulla vivamus ullamcorper aenean velit. Nec sit integer lectus viverra tempus purus.Lorem ipsum dolor sit amet consectetur. Lorem tellus scelerisque morbi vivamus lobortis.</p>
                                <Button color={"light"} type={"block"} className="mx-auto d-block mt-4">Watch More</Button>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="video">

                            </div>
                        </div>
                    </div>
            </Section>
        </>
    )
}

export default Home