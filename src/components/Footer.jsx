import React from 'react'
import { Link } from 'react-router-dom'
import coingold from '../images/components/coingold.png'

import './Components.css'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <div className="container py-4">
                <div className="d-flex">
                    <div className="logo mr-5">
                        <img src={coingold} alt="" className='' />
                    </div>
                    <div>
                        <p className="nav-link d-inline-block bold text-light">Find us on</p>
                        <div className="social-links nav-link d-flex flex-wrap">
                            <FaFacebook className='social-link' />
                            <FaTwitter className='social-link' />
                            <FaInstagram className='social-link' />
                            <FaLinkedin className='social-link' />
                            <FaYoutube className='social-link' />
                            <FaTelegram className='social-link' />
                            <FaDiscord className='social-link' />
                        </div>
                    </div>


                </div>


                <div className="row mt-2 footer-links">
                    <div className="px-0 col-md-5">
                        <div className="row">
                            <div className="px-0 col-sm-6 mt-4">
                                <p className="nav-link bold text-light">Supelle Coin</p>
                                <Link to="/about" className="nav-link">About us</Link>
                                <Link to="#home" className="nav-link">Supelle Coin Team</Link>
                                <Link to="#home" className="nav-link">SUP Updates</Link>
                                <Link to="#home" className="nav-link">Supelle Coin Careers</Link>
                                <Link to="/newletter" className="nav-link">Newsletter</Link>
                            </div>
                            <div className="px-0 col-sm-6 mt-4">
                                <p className="nav-link bold text-light">Trade</p>
                                <Link to="/marketplace" className="nav-link">Markets</Link>
                                <Link to="/cryptocurrencies" className="nav-link">Cryptocurrencies</Link>
                                <Link to="#home" className="nav-link">Cryptocurrencies Geo Availability </Link>
                                <Link to="/invest" className="nav-link">Invest</Link>
                                <Link to="#home" className="nav-link">Raise</Link>
                                <Link to="#home" className="nav-link">The SUP Token</Link>
                            </div>
                        </div>
                    </div>
                    <div className="px-0 col-md-5">
                        <div className="row">
                            <div className="px-0 col-sm-6 mt-4">
                                <p className="nav-link bold text-light">Learn</p>
                                <Link to="/cryptocurrencies" className='nav-link'> Cryptocurrencies</Link>
                                <Link to="/caculator" className='nav-link'>Caculator</Link>
                                <Link to="/marketplace" className='nav-link'>Market</Link>
                                <Link to="/blog" className='nav-link'>Blog</Link >
                                <Link to="/support" className='nav-link'>Support</Link>
                                <div className="d-md-none mt-4">
                                    <Link to="#home" className="nav-link">Support Center</Link>
                                    <Link to="#home" className="nav-link">FAQs</Link>
                                    <Link to="#home" className="nav-link">Contact Us</Link>
                                </div>
                            </div>

                            <div className="px-0 col-sm-6 mt-4">
                                <p className="nav-link bold text-light">Legal</p>
                                <Link to="#home" className="nav-link">Risk Disclosure</Link>
                                <Link to="#home" className="nav-link">Business Continuity</Link>
                                <Link to="#home" className="nav-link">Privacy Policy</Link>
                                <Link to="#home" className="nav-link">General Terms</Link>
                                <Link to="#home" className="nav-link">Prohibited Use</Link>
                                <Link to="#home" className="nav-link">Verification Procedures</Link>
                                <Link to="#home" className="nav-link">E-sign Disclosure</Link>
                                <Link to="#home" className="nav-link">Disclaimers</Link>
                                <Link to="#home" className="nav-link">UP Token Hokler Rights</Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block px-0 col-md-2 mt-4">
                        <p className="nav-link bold text-light">Support Center</p>
                        <Link to="/support/faqs" className="nav-link">FAQs</Link>
                        <Link to="/support#contact" className="nav-link">Contact Us</Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer