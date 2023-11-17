import React from 'react'
import { Hero, Section } from "../../Utilities"
import goldcoin from "../../images/whitelist/goldcoin.png"
import mission from "../../images/whitelist/mission.jpg"

import "./Whitelist.css"
import { useState } from 'react'

function Whitelist() {
    // const [fund, setFound] = useState(false)
    // const [contribution, setContribution] = useState(false)
    // const [media, setMedia] = useState(false)
    // const [agree, setAgreemt] = useState(false)


    const [formData, setFormData] = useState({
        email: '',
        description: '',
        firstName: '',
        lastName: '',
        telegramHandle: '',
        wallet: '',
        fund: '',
        lastThing: '',
        contribution: '',
        media: '',
        comment: '',
        agreement: '',
    });

    const handleRadioChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


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
                        <input type="email" className='form-control' name='email' onChange={handleRadioChange} placeholder='Valid email address' required />
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

                    {/* Description */}
                    <div className="form-group card p-4 mt-5">
                        <label htmlFor="connect">Let's stay connected!</label>
                        <input type="text" className="form-control" name='description' placeholder='Description (optional)' onChange={handleRadioChange} />
                    </div>

                    {/* First Name */}
                    <div className="form-group card p-4">
                        <label htmlFor="connect">First Name *</label>
                        <input type="text" className="form-control" name='firstName' required  onChange={handleRadioChange}/>
                    </div>

                    {/* Last Name */}
                    <div className="form-group card p-4">
                        <label htmlFor="connect">Last Name *</label>
                        <input type="text" className="form-control" name='lastName' required onChange={handleRadioChange} />
                    </div>

                    {/* Telegram handle */}
                    <div className="form-group card p-4">
                        <label htmlFor="connect">Your Telegram Handle *</label>
                        <input type="text" className="form-control" name='telegramHandle' onChange={handleRadioChange} required />
                    </div>

                    {/* Wallets */}
                    <div className="form-group card p-4">
                        <label htmlFor="connect">Wallet address for whitelisting (Up to 3 Bsc-20/Erc-20) <br /> (Separate wallets a comma ,) *</label>
                        <input type="text" className="form-control" name='wallet' required  onChange={handleRadioChange} />
                    </div>


                    {/* Funding */}
                    <div className="card p-4">
                        <p>Please choose the relevant funding round you'd like to be whitelisted for. *</p>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" onChange={handleRadioChange} name="fund" id="fund1" value="seed sales" />
                            <label className="form-check-label" htmlFor="fund1">
                                Seed Sales
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" onChange={handleRadioChange} name="fund" id="fund2" value="private sales" />
                            <label className="form-check-label" htmlFor="fund2">
                                Private Sales
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" onChange={handleRadioChange} name="fund" id="fund3" value="sup" />
                            <label className="form-check-label" htmlFor="fund3">
                                SUP
                            </label>
                        </div>
                    </div>


                    {/* Contribution */}
                    <div className="card mt-5 p-4">
                        <p>Contribution size per wallet (in $) *</p>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" onChange={handleRadioChange} name="contribution" id="contr1" value="250-500" />
                            <label className="form-check-label" htmlFor="contr1">
                                $250 to $500
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" onChange={handleRadioChange} name="contribution" id="contr2" value="500-1000" />
                            <label className="form-check-label" htmlFor="contr2">
                                $500 to $1,000
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" onChange={handleRadioChange} name="contribution" id="contr3" value="1000-5000" />
                            <label className="form-check-label" htmlFor="contr3">
                                $1,000 to $5,000
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" onChange={handleRadioChange} name="contribution" id="contr4" value="5000-10000" />
                            <label className="form-check-label" htmlFor="contr4">
                                $5,000 to $10,000
                            </label>
                        </div>
                        <div className="form-check align-items-center d-flex flex-direction-column">
                            <input className="form-check-input" type="radio" onChange={handleRadioChange} name="contribution" id="contr5" value="other" />
                            <label className="form-check-label" htmlFor="contr5">
                                other...
                            </label>
                        </div>
                    </div>

                    {/* Last thing */}
                    <div className="form-group card p-4 mt-5">
                        <label htmlFor="connect">Last thing!</label>
                        <input type="text" className="form-control" name='lastThing' placeholder='Description (optional)' onChange={handleRadioChange} />
                    </div>


                    {/* Here about us */}
                    <div className="form-group card p-4 mt-5">
                        <p>How did you hear about this sales round? *</p>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="website" className="form-check-input" value="website"/>
                            <label htmlFor="website" className="form-check-label">
                                Website
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="tv" className="form-check-input" value="tv" />
                            <label htmlFor="tv" className="form-check-label">
                                TV Commercial
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="telegram" className="form-check-input" value="telegram" />
                            <label htmlFor="telegram" className="form-check-label">
                                Telegram
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="youtube" className="form-check-input" value="youtube" />
                            <label htmlFor="youtube" className="form-check-label">
                                YouTube Video
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="influencer" className="form-check-input" value="influencer" />
                            <label htmlFor="influencer" className="form-check-label">
                                Youtube Influencer
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="twitter" className="form-check-input" value="twitter" />
                            <label htmlFor="twitter" className="form-check-label">
                                Twitter
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="crypto_news" className="form-check-input" value="crypto_news" />
                            <label htmlFor="crypto_news" className="form-check-label">
                                Crypto News Website
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="press" className="form-check-input"  value="press"/>
                            <label htmlFor="press" className="form-check-label">
                                The Press
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="radio_commercial" className="form-check-input" value="radio_commercial" />
                            <label htmlFor="radio_commercial" className="form-check-label">
                                Radio Commercial
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="tiktok" className="form-check-input" value="tiktok"/>
                            <label htmlFor="tiktok" className="form-check-label">
                                TikTok
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="tiktok" className="form-check-input" value="discord" />
                            <label htmlFor="discord" className="form-check-label">
                                Discord
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="instagram" className="form-check-input" value="instagram" />
                            <label htmlFor="instagram" className="form-check-label">
                                Instragram
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="media" id="other" className="form-check-input" value="other"/>
                            <label htmlFor="other" className="form-check-label">
                                Other..
                            </label>
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="form-group card p-4 mt-5">
                        <label htmlFor="">Do you have any comments and/or questions you would like to share with our team? *
                        </label>
                        <textarea name="comment" onChange={handleRadioChange} id="" cols="30" rows="10" className='form-control'></textarea>
                    </div>

                    {/* Agreement */}
                    <div className="card mt-5 p-4">
                        <p>
                            Please confirm https://supcoin.co .co may internally share, publish or review any information provided in this form.
                            All information provided in this document is accurate. Any changes made to the information in this form need to be communicated with the administration before closure of the event.
                            Your information will remain private and will not be distributed or sold for any reason. Your privacy is important to us will be kept internally.
                        </p>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="agreement" id="agree" className="form-check-input" />
                            <label htmlFor="agree" className="form-check-label">
                                Agree
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" onChange={handleRadioChange} name="agreement" id="disagree" className="form-check-input" />
                            <label htmlFor="disagree" className="form-check-label">
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