import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import coingold from '../images/components/coingold.png'
import legals from '../store/legals'
import { UIContext } from '../context/UIcontext'
import slugify from 'slugify'


import './Components.css'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
    const {handleLegal } = useContext(UIContext)
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
                           <Link to="https://www.facebook.com/supellecoin"> <FaFacebook className='social-link' /> </Link>
                           <Link to="https://www.twitter.com/supellecoin">  <FaTwitter className='social-link' /> </Link>
                           <Link to="https://www.instagram.com/supellecoin">  <FaInstagram className='social-link' /> </Link>
                           <Link to="https://linkedin.com/company/supelle/">   <FaLinkedin className='social-link' /> </Link>
                           <Link to="https://www.youtube.com/@supellecoin">  <FaYoutube className='social-link' /> </Link>
                           <Link to=" https://t.me/supellecoin">  <FaTelegram className='social-link' /> </Link>
                           <Link to="https://discord.gg/Z4qGhcV8">   <FaDiscord className='social-link' /> </Link>
                           <Link to="https://www.tiktok.com/@supellecoin ">   <FaTiktok className='social-link' /> </Link>
                        </div>
                    </div>


                </div>


                <div className="row mt-2 footer-links">
                    <div className="px-0 col-md-5">
                        <div className="row">
                            <div className="px-0 col-sm-6 mt-4">
                                <p className="nav-link bold text-light">Supelle Coin</p>
                                <Link to="/about" className="nav-link">About us</Link>
                                <Link to="/about#team" className="nav-link">Supelle Coin Team</Link>
                                <Link to="/updates" className="nav-link">SUP Updates</Link>
                                <Link to="/careers" className="nav-link">Supelle Coin Careers</Link>
                                <Link to="/whitelist" className="nav-link">Seed Sales Whitelist</Link>
                            </div>
                            <div className="px-0 col-sm-6 mt-4">
                                <p className="nav-link bold text-light">Trade</p>
                                <Link to="/cryptocurrencies/#countries" className="nav-link">Cryptocurrencies Geo Availability </Link>
                                <Link to="/invest" className="nav-link">Invest</Link>
                                {/* <Link to="#home" className="nav-link">Raise</Link> */}
                                <Link to="/#sale" className="nav-link">The SUP Token</Link>
                            </div>
                        </div>
                    </div>
                    <div className="px-0 col-md-5">
                        <div className="row">
                            <div className="px-0 col-sm-6 mt-4">
                                <Link to="/learn" className="nav-link  bold text-light" style={{fontSize: "16px", fontWeight: "600"}}>Learn</Link>
                                <Link to="/cryptocurrencies" className='nav-link'> Cryptocurrencies</Link>
                                <Link to="/caculator" className='nav-link'>Caculator</Link>
                                <Link to="/marketplace" className='nav-link'>Market</Link>
                                <Link to="/blog" className='nav-link'>Blog</Link >
                                <Link to="/support" className='nav-link'>Support</Link>
                                <Link to="/learn" className='nav-link'>Learn more about digital money</Link>
                                <div className="d-md-none mt-4">
                                    <Link to="/support" className="nav-link">Support Center</Link>
                                    <Link to="/support/faqs" className="nav-link">FAQs</Link>
                                    <Link to="/support#contact" className="nav-link">Contact Us</Link>
                                </div>
                            </div>

                            <div className="px-0 col-sm-6 mt-4">
                                <Link to="/legals" className="nav-link  text-light"  style={{fontSize: "16px", fontWeight: "600"}}>Legal</Link>
                                {
                                    legals.map((legal, i) => (
                                        <Link to={`/legals#${slugify(legal.heading)}`} className="nav-link" key={i} onClick={()=>handleLegal(legal)}>{legal.heading}</Link>
                                    ))
                                }
                               
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