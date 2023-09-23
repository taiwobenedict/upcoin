import React from 'react'
import krithen from "../../images/about/krithen.jpeg"
import tech from "../../images/about/tech.jpeg"
import robot from "../../images/about/robot.jpeg"

import { FaLink } from 'react-icons/fa'





import { Button, Hero, Section } from '../../Utilities'
import "./About.css"
import { Link } from 'react-router-dom'

function About() {
    return (
        <div id='about'>
            <Hero container={800} className={'text-light'}>
                <h1 className="heading hero-heading">We bring communities together and empower them through financial innovation</h1>
                <p className="hero-caption sub-heading mt-4">We forge long-term partnerships with our communities by ensuring high standard products, competitive pricing and excellent customer support</p>

            </Hero>

            <Section name={"info"} center={true} container={1000} >
                <div className="info-container">
                    <h1 className="heading text-center my-5">A message from our CEO, Kristen Bragoli</h1>

                    <div className="row align-items-center">
                        <div className="col-sm-4">
                            <div className="info-image w-100">
                                <img src={krithen} alt={krithen} className='w-100' />
                            </div>
                        </div>
                        <div className="col-sm-8 w-100">
                            <p className="lead">My vision of shaping capital markets and their evolution from the traditional world to a digital economy is coming to life.
                                The SUP Token was the first and significant milestone  the first SEC-registered security token to IPO on the blockchain.
                                Supcoin is another important step in our extraordinary journey, presenting the world's first fully regulated platform that merges investing and trading in security tokens, cryptocurrencies and capital raise services all in ONE place. SUP provides a safe and secure path for responsible trading on multiple asset classes.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section mt={140}>
                <div className="row pri-bg justify-content-between">
                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="heading">We Believe In Transparency</h2>
                            <p className="lead">Transparency and regulation are the cornerstone values of SUP, allowing the investors community to benefit from our platform and the evolution of capital markets.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0">
                        <div className="">
                            <img src={robot} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
                <div className="row mb">
                    <div className="col-sm-6">
                        <div className="">
                            <img src={tech} alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="heading">We strive to provide unique opportunities</h2>
                            <p className="lead">We are the pioneers of a new tokenized economy providing access to new financial opportunities. All assets on Supcoin are carefully vetted as we operate a fully regulated platform and are committed to guaranteeing a secure trading experience for all traders.</p>
                            <Link to={`/markets`} ><Button type={'block'} color={"pri"}> See Markets <FaLink />  </Button></Link>
                        </div>
                    </div>
                </div>
            </Section>

            <Section name={"story"} container={700} mt={130} center={true}>
                <div className="overlay"></div>
                <div className="text-light text-center">
                    <div className="title heading">Our Story</div>
                    <p className="lead">SUP set a revolutionary path to utilize the unparalleled advantages and opportunities of the digital economy in a safe and secure environment maintained by the checks and balances developed in the traditional economy throughout centuries. Now, SUP is on a mission to lead other companies in  embracing the benefits of security tokens.</p>

                </div>
            </Section>
            <Section name={"positions"} container={700} mt={130} center={true}>
               
                <div  className='text-center'>
                    <div className="title heading">Work with us to design a new digital economy</div>
                    <p className="sub-heading mt-4">Explore the career opportunities at one of our SUP offices around the world</p>
                    <Button type={"inline"} color={'pri'}>Go to open positions</Button>

                </div>
            </Section>

        

        </div>
    )
}

export default About