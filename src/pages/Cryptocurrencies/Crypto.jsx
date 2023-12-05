import React, {useEffect} from 'react'
import { Button, Hero, Section } from '../../Utilities'
import { FaArrowUp } from 'react-icons/fa'
import { countries } from 'countries-list'

import flower from "../../images/cryptocurrencies/flower.jpg"
import bubbles from "../../images/cryptocurrencies/bubbles.jpeg"
import "./Crypto.css"
import { Link } from 'react-router-dom'
import Email from '../../components/Email'

function Crypto() {
    useEffect(()=> {
        document.title = "Supelle: Your Time Is Now!"
    },[])
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
                    <div className="col-lg-6 py-5 order-2">
                        <div className="member-padding">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="sub-context">
                                    <h1 className='bold mb-4'>The Rise of Remote Work</h1>
                                    <p className='text-big'>In today’s world, the digital realm has reached unparalleled heights. From working from home to the convenience of having a wide range of items delivered right to our doorstep with just one click away. The online space has become a dominant force in people's lives. Even with the touchless payment methods no longer accepting cash, acquiring goods now heavily relies on digital currency. This makes digital currency even more crucial than ever to invest in with the new age!</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 download-image">
                        <div className="member-padding"></div>
                    </div>
                </div>

            </div>

            <Section className="">
                <div className="row align-items-center  justify-content-between">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="heading-md">Supcoin is the first of its kind of cryptocurrency to be supported by the Supelle Marketplace.</h2>
                            <p className="">Covid-19 has proven anyone can work anywhere, giving freelancing more of a standing than ever before and growing in popularity. Freelancing is the future of the economy and reshaping the workforce, especially since automation is increasingly replacing traditional jobs. As the online space continues to expand, Supelle envisions a future that not only adds jobs to the market but also empowers individuals to achieve financial freedom.</p>

                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="">
                            <img src={flower} alt="" className='w-100' />
                        </div>
                    </div>
                </div>

            </Section>

            <Section className="">
                <div className="row align-items-center  justify-content-between">
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-2">
                        <div className="text-center">
                            <h2 className="heading-md">
                                Supelle seeks to reinvent and redefine the freelancing marketplace.</h2>
                            <p className="">Be a part of a platform that goes beyond facilitating business transactions. At Supelle, we are committed to redefining the freelancing experience by uplifting our talented individuals to new heights. We don’t just consider freelancers as part of our platform; we believe they are the essence of greatness. By providing cutting-edge tools and comprehensive courses, we empower freelancers to stay at the forefront of their fields.</p>

                        </div>
                    </div>
                    <div className="col-md-6 px-0 order-1">
                        <div className="">
                            <img src={bubbles} alt="" className='w-100' />
                        </div>
                    </div>
                </div>

            </Section>

            <div className="countries" id="countries">
                <Hero height={60} className="container">
                    <div className="row text-white">
                        <div className="col-md-6">
                            <h1 className="bold">Can I trade crypto on <br /> SUPCOIN in my country?</h1>

                            <Email template="template_123zbf9" serviceID="service_9xd790e">
                                <div className="mt-5 d-flex">
                                    <select className="custom-select" name='value'>
                                        <option >Choose your country</option>
                                        {
                                            nation.map(country => (
                                                <option key={country.key} value={country.value.name}>{country.value.name} </option>
                                            ))
                                        }
                                    </select>
                                    <input type="hidden" name="message" value="New customer submitted his/her country name" />
                                    <button className="btn btn-primary" type='submit'>Submit</button>
                                </div>

                            </Email>
                        </div>
                        <div className="col-md-6"></div>


                    </div>
                </Hero>
            </div>
        </div>
    )
}

export default Crypto