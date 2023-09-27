import React from 'react'
import { Link } from 'react-router-dom'
import coingold from '../images/components/coingold.png'

import './Components.css'

function Footer() {
  return (
    <footer className="footer">
        <div className="container-lg py-4">
            <div className="">
                <img src={coingold} alt="" className='mr-5' />
                <Link to="#home" className="nav-link d-inline-block">Find us on</Link>
            </div>
            <div className="row mt-5">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-sm-6 mt-4">
                            <Link to="#home" className="nav-link">SuppelleCoin</Link>
                            <Link to="/about" className="nav-link">About us</Link>
                            <Link to="#home" className="nav-link">SuppeleCoin Team</Link>
                            <Link to="#home" className="nav-link">SUP Updates</Link>
                            <Link to="#home" className="nav-link">SuppelleCoin Careers</Link>
                            <Link to="#home" className="nav-link">Newsletter</Link>
                        </div>
                        <div className="col-sm-6 mt-4">
                            <Link to="#home" className="nav-link">Trade</Link>
                            <Link to="#home" className="nav-link">Markets</Link>
                            <Link to="#home" className="nav-link">Cryptocurrencies</Link>
                            <Link to="#home" className="nav-link">Cryptocurrencies Geo <br /> Availability Invest</Link>
                            <Link to="#home" className="nav-link">Raise</Link>
                            <Link to="#home" className="nav-link">The SUP Token</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-sm-6 mt-4">
                            <Link to="#home" className="nav-link">Learn</Link>
                            <Link to="#home" className="nav-link">What's Trending</Link>
                            <Link to="#home" className="nav-link">What's Trading</Link>
                            <div className="d-md-none mt-4">
                                <Link to="#home" className="nav-link">Support Center</Link>
                                <Link to="#home" className="nav-link">FAQs</Link>
                                <Link to="#home" className="nav-link">Contact Us</Link>
                            </div>
                        </div>
                       
                        <div className="col-sm-6 mt-4">
                            <Link to="#home" className="nav-link">Legal</Link>
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
                <div className="d-none d-md-block col-md-2 mt-4">
                    <Link to="#home" className="nav-link">Support Center</Link>
                    <Link to="#home" className="nav-link">FAQs</Link>
                    <Link to="#home" className="nav-link">Contact Us</Link>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer