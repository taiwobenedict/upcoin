import React from 'react'
import "./Sup.css"
import endless from "../../images/sup/endless.jpg"
import backdoor from "../../images/sup/backdoor.png"
import community from "../../images/sup/community.png"
import revolution from "../../images/sup/revolution.png"
import { FaChevronRight } from 'react-icons/fa'
import { Hero, Section } from '../../Utilities'

function Sup() {
    return (
        <div id='sup'>
            <Hero container={750} className="container" height={80}>
                <div className="hero-context text-light">
                    <h1 className='heading-lg' data-aos="fade-up">Wealth of Opportunities and Your Key to a Successful Future Endless </h1>
                    <div className=" bold " data-aos="zoom-out">Exclusively on Supelle, discover a wealth of business opportunities with valuable crypto assets and utility tokens (SUP).</div>
                    <div className="action-btns mt-4 justify-content-start" >
                        <button className="btn btn-block-light mt-2 mr-4" > CONNECT</button>
                        <button className="btn btn-inline-light mt-2">LOGIN</button>
                    </div>
                </div>
            </Hero>

            {/* Endless Posibilities */}
            <Section id={"endless"} className="container" pd={"100px 0px"}>
                <div className="">
                    <div className="row mx-auto">
                        <div className="col-lg-6 mt-3 d-flex align-items-center">
                            <div className="">
                                <h2 className="bold">Endless Possibilities with Supcoin ($SUP)</h2>
                                <p className="mt-2 ">Introducing Supcoin, a revolutionary fusion of cryptocurrency and marketplace. Supcoin isn't just a currency; it's a visionary currency that enhances the value of your investment, ensuring unprecedented stability. Have greater security, increase wealth, and create opportunities with this global currency. Gain exclusive access to the backdoor opportunities that await early adopters, allowing you to seize the advantage before anyone else. Embrace the future of finance with Supelle and unlock a world of limitless possibilities!
                                    Crypto Currency + Pioneer Global Marketplace = high value
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-3 ">
                            <div className="d-flex justify-content-end">
                                <img src={endless} alt="" width={500} />
                            </div>
                        </div>
                    </div>

                </div>
            </Section>


            {/* Become Member */}
            <div id='membership' className="pri-bg" >
                <div className="row">
                    <div className="col-lg-6 py-5 order-2">
                        <div className="member-padding">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="sub-context">
                                    <h2>Seize the opportunity as an early investor in token offerings.</h2>
                                    <p>Have you ever dreamed of becoming an investor in companies you have faith in? Well, now you have the opportunity to get in at the very beginning! Be the pioneer in acquiring security tokens directly from the issuing company before trading begins.</p>
                                    <button className="btn btn-inline-light mt-5">Buy Supelle Tokens</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 membership-image">
                        <div className="member-padding"></div>
                    </div>
                </div>
            </div>

            {/* Get Through the back door */}
            <Section name={"backdoor"} className="container" center={true} pd="100px 0px">
                <div className="">
                    <div className="row">
                        <div className="col-lg-6 mt-3 pr-sm-5 d-flex align-items-center">
                            <div className="sub-context" data-aos="fade-right">
                                <h1 className="pri-color mb-3">Get In Through The Backdoor!</h1>
                                <p className=''>Be one of the early birds to own Supcoin (SUP) and increase your wealth tremendously!
                                    Invest in token offerings with a global marketplace you can trust and tap into an international network of opportunities.
                                </p>
                                <button className="btn btn-inline-pri mt-5">Get In Now!!!</button>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="endless-image sup-image" data-aos="fade-left">
                                <img src={backdoor} alt="" className='w-10' />
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            {/* Community */}
            <div className="pri-bg">
                <Section name={"community"} center={true}  pd="100px 0px">
                    <div className="container">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-6 mt-3 pr-sm-5 d-flex align-items-center">
                                    <div className="sub-context" data-aos="fade-right">
                                        <h3 className='heading-sm'>Our Inspiring Community is The Place to Be</h3>
                                        <p className="mt-2 ">Communities are created when people share a common purpose. The growth of the Supcoin community is the immense growth   of every member. We encourage involvement and investment because we want you to reach your maximum potential too.
                                            Global Supelle members are exploring the brand-new opportunities that the platform offers every day. We harness the power of our strong, growing community to maximize the potential value of crypto and trading.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <div className="endless-image sup-image" data-aos="fade-left">
                                        <img src={community} alt="" className='w-100' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Section>

            </div>

            {/* Become a revolutionary */}
            <Section name={"revolution"} pd="100px 0px" >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-3 pr-sm-5 d-flex align-items-center">
                            <div className="sub-context" data-aos="zoom-in">
                                <div className="mb-5">
                                    <div className="d-flex-align-items-center">
                                        <FaChevronRight className='mr-3' />
                                        <h5 className='d-inline-block'>Becoming a part of the revolutionary</h5>
                                    </div>
                                    <p className="mt-3">Supelle is creating a new paradigm of equality and access to work opportunities around the world by breaking down barriers and offering unprecedented flexibility and transparency.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex-align-items-center">
                                        <FaChevronRight className='mr-3' />
                                        <h5 className='d-inline-block'>We care about you</h5>
                                    </div>
                                    <p className="mt-3">The regulatory oversight we put in place ensures that all our customers are safe and secure on our platform. This is why we take care to verify each user account.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex-align-items-center">
                                        <FaChevronRight className='mr-3' />
                                        <h5 className='d-inline-block'>We support you all the way</h5>
                                    </div>
                                    <p className="mt-3">We provide 24/7 hands-on support with real people, not BOTs. Our support team is always here to assist you and answer any questions you may have. So please feel free to ask us anything!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="endless-image" data-aos="zoom-in">
                                <img src={revolution} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    )
}

export default Sup