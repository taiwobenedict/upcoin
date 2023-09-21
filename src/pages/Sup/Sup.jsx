import React from 'react'
import "./Sup.css"
import endless from "../../images/sup/endless.jpg"
import membership from "../../images/sup/membership.jpg"
import backdoor from "../../images/sup/backdoor.png"
import community from "../../images/sup/community.png"
import revolution from "../../images/sup/revolution.png"
import { FaChevronRight } from 'react-icons/fa'

function Sup() {
    return (
        <div id='sup'>
            <div className="sup-hero">
                <div className="container d-flex justify-content align-items-center h-100">
                    <div className="hero-context text-light">
                        <h1 className='hero-title'>Wealth of Opportunities and Your Key to a Successful Future Endless </h1>
                        <div className="hero-caption ">Exclusively on Supelle, discover a wealth of business opportunities with valuable crypto assets and utility tokens (SUP).</div>
                        <div className="action-btns mt-4 justify-content-start">
                            <button className="btn btn-block-light mt-2 mr-4">CONNECT</button>
                            <button className="btn btn-inline-light mt-2">LOGIN</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="endless section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 pr-sm-5 d-flex justify-content-center align-items-center">
                            <div className="endless-context">
                                <h2 className="pri-color">Endless Possibilities with Supcoin ($SUP)</h2>
                                <p className="mt-2">Introducing Supcoin, a revolutionary fusion of cryptocurrency and marketplace. Supcoin isn't just a currency; it's a visionary currency that enhances the value of your investment, ensuring unprecedented stability. Have greater security, increase wealth, and create opportunities with this global currency. Gain exclusive access to the backdoor opportunities that await early adopters, allowing you to seize the advantage before anyone else. Embrace the future of finance with Supelle and unlock a world of limitless possibilities!
                                    Crypto Currency + Pioneer Global Marketplace = high value
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="endless-image">
                                <img src={endless} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="membership section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 pr-sm-5 d-flex justify-content-center align-items-center order-2">
                            <div className="endless-context">
                                <h1 className="pri-color">Become a Supcoin Token holder today to enjoy Supcoin discounts!
                                </h1>
                                <button className="btn btn-inline-pri mt-5">Buy Supelle Tokens</button>

                            </div>
                        </div>
                        <div className="col-sm-6 order-1">
                            <div className="endless-image">
                                <img src={membership} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="backdoor section">
                <div className="container">
                    <h1 className="pri-color text-center my-5">Get In Through The Backdoor!</h1>
                    <div className="row">
                        <div className="col-sm-6 pr-sm-5 d-flex justify-content-center align-items-center">
                            <div className="endless-context">
                                <h3>Be one of the early birds to own Supcoin (SUP) and increase your wealth tremendously!
                                    Invest in token offerings with a global marketplace you can trust and tap into an international network of opportunities.
                                </h3>
                                <button className="btn btn-inline-pri mt-5">Get In Now!!!</button>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="endless-image">
                                <img src={backdoor} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="community section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 pr-sm-5 d-flex justify-content-center align-items-center">
                            <div className="endless-context">
                                <h3>Our Inspiring Community is The Place to Be</h3>
                                <p className="mt-2">Communities are created when people share a common purpose. The growth of the Supcoin community is the immense growth   of every member. We encourage involvement and investment because we want you to reach your maximum potential too.
                                    Global Supelle members are exploring the brand-new opportunities that the platform offers every day. We harness the power of our strong, growing community to maximize the potential value of crypto and trading.

                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="endless-image">
                                <img src={community} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="revolution mb-0 section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 pr-sm-5 d-flex justify-content-center align-items-center">
                            <div className="endless-context">
                                <div className="mb-3">
                                    <div className="d-flex-align-items-center">
                                        <FaChevronRight className='mr-3' />
                                        <h5 className='d-inline-block'>Becoming a part of the revolutionary</h5>
                                    </div>
                                    <p className="mt-3">Supelle is creating a new paradigm of equality and access to work opportunities around the world by breaking down barriers and offering unprecedented flexibility and transparency.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex-align-items-center">
                                        <FaChevronRight className='mr-3' />
                                        <h5 className='d-inline-block'>We care about you</h5>
                                    </div>
                                    <p className="mt-3">The regulatory oversight we put in place ensures that all our customers are safe and secure on our platform. This is why we take care to verify each user account.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex-align-items-center">
                                        <FaChevronRight className='mr-3' />
                                        <h5 className='d-inline-block'>We support you all the way</h5>
                                    </div>
                                    <p className="mt-3">We provide 24/7 hands-on support with real people, not BOTs. Our support team is always here to assist you and answer any questions you may have. So please feel free to ask us anything!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="endless-image">
                                <img src={revolution} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sup