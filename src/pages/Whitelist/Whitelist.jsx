import React from 'react'
import { Hero, Section } from "../../Utilities"
import goldcoin from "../../images/whitelist/goldcoin.png"
import mission from "../../images/whitelist/mission.jpg"

import "./Whitelist.css"
// import { useState } from 'react'

function Whitelist() {
    // const [fund, setFound] = useState(false)
    // const [contribution, setContribution] = useState(false)
    // const [media, setMedia] = useState(false)
    // const [agree, setAgreemt] = useState(false)


    // const handleFunding = (e) => {

    // }
    // const handleContribution = (e) => {

    // }
    // const handleMedia = (e) => {

    // }
    // const handleAgrement = (e) => {

    // }


    return (
        <div>
            <div className="pri-bg">
                <Hero height={45} centerContent={true} className="container">
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="whitelist-image">
                            <img src={goldcoin} alt="" className='w-100' />
                            <h1 className='text-center text-light mt-4'>IS THE FUTURE OF GENERATIONAL WEALTH</h1>
                        </div>
                    </div>

                </Hero>

            </div>

            <Section pd="80px 0" className="container-lg">
                <h1><span className='bold'>Supcoin</span> - Seed Sales - Whitetlist</h1>
                <p>🌱 Be a Part of Our Exclusive Seed Sale Opportunity – Join the Whitetlist! 🌱</p>

                <p>

                    Embrace our time-sensitive invitation to ensure you don't miss out on this incredible token sales. Secure your spot on the whitelist for the forthcoming Seed sale and seize this exceptional offer.

                    By becoming a whitelisted member, you'll enjoy prioritized access to our groundbreaking project, positioning yourself at the forefront of the cryptocurrency revolution with an unprecedented opportunity.

                    This is your moment to optimize your investment potential and become an early advocate for our pioneering venture.

                    Act now and join our whitetlist to take a leading role in our token sale!</p>
                <form>
                    <div className="form-group card p-4">
                        <label htmlFor="email">Email *</label>
                        <input type="email" className='form-control' placeholder='Valid email address' required />
                    </div>
                </form>

                <h2 className="bold text-center  mt-5">Our Mission:</h2>
                <p>
                    With our passion for innovation and the collective expertise of our members, we are going to reshape the freelancing landscape, opening up new opportunities for professionals and businesses alike. Together, we shall pave the way for a future where work knows no geographical bounds, where talent thrives, and where the world comes together as one interconnected ecosystem, with Supcoin.
                </p>
                <div className="mission-image">
                    <img src={mission} alt="" className='w-100' />
                </div>

                <form >
                    <div className="form-group card p-4 mt-5">
                        <label htmlFor="connect">Let's stay connected!</label>
                        <input type="text" className="form-control" placeholder='Description (optional)' />
                    </div>
                    <div className="form-group card p-4">
                        <label htmlFor="connect">First Name *</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group card p-4">
                        <label htmlFor="connect">Last Name *</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group card p-4">
                        <label htmlFor="connect">Your Telegram Handle *</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group card p-4">
                        <label htmlFor="connect">Wallet address for whitelisting (Up to 3 Bsc-20/Erc-20) <br /> (Separate wallets a comma ,) *</label>
                        <input type="text" className="form-control" required />
                    </div>

                    <div className="card p-4">
                        <p>Please choose the relevant funding round you'd like to be whitelisted for. *</p>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="fund1" value="option1" />
                            <label className="form-check-label" htmlFor="fund1">
                                Seed Sales
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" name="fund" id="fund2" value="option2" />
                            <label className="form-check-label" htmlFor="fund2">
                                Private Sales
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" name="fund" id="fund3" checked value="option3" />
                            <label className="form-check-label" htmlFor="fund3">
                                SUP
                            </label>
                        </div>
                    </div>

                    <div className="card mt-5 p-4">
                        <p>Contribution size per wallet (in $) *</p>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                $250 to $500
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                $500 to $1,000
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                $1,000 to $5,000
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                $5,000 to $10,000
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                other...
                            </label>
                        </div>
                    </div>

                    <div className="form-group card p-4 mt-5">
                        <label htmlFor="connect">Last thing!</label>
                        <input type="text" className="form-control" placeholder='Description (optional)' />
                    </div>


                    <div className="form-group card p-4 mt-5">
                        <p>How did you hear about this sales round? *</p>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Website
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                TV Commercial
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Telegram
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                YouTube Video
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Youtube Influencer
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Twitter
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Crypto News Website
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                The Press
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Radio Commercial
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                TikTok
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Discord
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Instragram
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Other..
                            </label>
                        </div>
                    </div>

                    <div className="form-group card p-4 mt-5">
                        <label htmlFor="">Do you have any comments and/or questions you would like to share with our team? *
                        </label>
                        <textarea name="" id="" cols="30" rows="10" className='form-control'></textarea>
                    </div>

                    <div className="card mt-5 p-4">
                        <p>
                            Please confirm https://supcoin.co .co may internally share, publish or review any information provided in this form.
                            All information provided in this document is accurate. Any changes made to the information in this form need to be communicated with the administration before closure of the event.
                            Your information will remain private and will not be distributed or sold for any reason. Your privacy is important to us will be kept internally.
                        </p>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Agree
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" name="" id="" className="form-check-input" />
                            <label htmlFor="" className="form-check-label">
                                Disagree
                            </label>
                        </div>
                    </div>

                    <div className='mt-4 w-100 d-flex justify-content-end'>
                        <button className='btn btn-block-pri'>Submit</button>

                    </div>

                </form>
            </Section>

        </div>
    )
}

export default Whitelist