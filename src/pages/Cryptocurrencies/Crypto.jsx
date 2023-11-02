import React from 'react'
import { Button, Hero, Section } from '../../Utilities'
import { FaArrowUp } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
import { BiLogoPlayStore } from 'react-icons/bi'

import { countries } from 'countries-list'

import "./Crypto.css"
import { Link } from 'react-router-dom'

function Crypto() {
    const nation = Object.keys(countries).map(key => ({ key, value: countries[key] }));
    return (
        <div id='crypto'>
            <Hero height={100} className={'container align-items-center text-white'}>
                <h1 className="heading-lg bold" data-aos="fade-up">Supelle:</h1>
                <h1 className="heading-lg bold" data-aos="fade-up">Your Time Is NOW!</h1>
                <p className="text-big" data-aos="fade-up">Join a diverse, innovative market for freelancers and financial futurists powered by <br /> thoroughly vetted cryptocurrencies.</p>
                <div className="d-flex flex-wrap mt-5">
                    <Button type={"block"} color={"light"} className="mr-4">Connect</Button>
                    <Button type={"block"} color={"light"}> Log in</Button>
                </div>
            </Hero>


            <Section name="trade" className="text-light container" pd="100px 0">
                <div className="overlay"></div>
                <div className="container-lg mx-0 position-relative t">
                    <h1 className='bold mb-4'>Trade. Build. Trade Again.</h1>
                    <p className="text-big">Supelle offers a valuable selection of ERC-20 and utility tokens and crypto assets. You can trade our tokens against fiat, payment tokens, stablecoins, and much more on our completely compliant platform.</p>
                    <Link to="#" className='mt-4 text-warning'>Browse Our Listing <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link>
                </div>

                <div className="row trade-image">
                    <div className="col-md-6"></div>

                    <div className="col-md-6 mt-3 d-flex align-items-center">
                        <div className="left-trade">
                            <div className="trade-text">
                                <h2 className="bold">Inclusivity Above All</h2>
                                <p>Supcoin is completely changing the game in DeFi and freelancing. For years, we have worked to build a functional and inclusive environment that adopts globally required standards and guarantees access to everyone.</p>
                            </div>

                            <div className="trade-text mt-5">
                                <h2 className="bold">Transact With Confidence</h2>
                                <p>Everything you do on Supelle is 100% safe. Fast transactions, swift credits, and zero risk on your investment.</p>
                            </div>

                            <div className="trade-text mt-5">
                                <h2 className="bold">Cutting-edge Trading Tool</h2>
                                <p>You get to have your eye on everything. Supported by specialized analysis tools and instant reports to continuously track and oversee your accounts.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>



            <div id="download">
                <div className="row">
                    <div className="col-lg-8 py-5 order-2">
                        <div className="member-padding">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="sub-context">
                                    <h1 className='bold mb-4'>CRYPTO TRADING POWERHOUSE</h1>
                                    <p className='text-big'>Download our new Cryptocurrencies trading app</p>
                                    <button className="btn btn-block-pri mt-5 mr-4">
                                        <div className="d-flex  align-items-center">
                                            <BiLogoPlayStore style={{ height: "60px", width: "60px" }} />
                                            <div>
                                                <small>Get It On</small>
                                                <p className='m-0'>Google Play</p>
                                            </div>
                                        </div>

                                    </button>
                                    <button className="btn btn-block-pri mt-5 mr-4">
                                        <div className="d-flex align-items-center">
                                            <AiFillApple style={{ height: "60px", width: "60px" }} />
                                            <div>
                                                <small>Download on the</small>
                                                <p className='m-0'>App Store</p>
                                            </div>
                                        </div>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-1 download-image">
                        <div className="member-padding"></div>
                    </div>
                </div>

            </div>

            <div className="countries">
                <Hero height={60} className="container">
                    <div className="row text-white">
                        <div className="col-md-6">
                            <h1 className="bold">Can I trade crypto on <br /> SUPCOIN in my country?</h1>

                            <form action="" className="mt-5">
                                <select className="custom-select">
                                    <option >Choose your country</option>
                                    {
                                        nation.map(country => (
                                            <option key={country.key} value={country.value.name}>{country.value.name} </option>
                                        ))
                                    }
                                </select>
                            </form>
                        </div>
                        <div className="col-md-6"></div>


                    </div>
                </Hero>
            </div>
        </div>
    )
}

export default Crypto