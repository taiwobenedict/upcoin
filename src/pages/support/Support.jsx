import React from 'react'
import { Hero, Button } from "../../Utilities/index"
import { Link } from "react-router-dom"

import "./Support.css"

function Support() {
    return (
        <div id='support'>
            <Hero height={80} centerContent={true} className="container">
                <h1 className="heading-lg text-center bold mb-4 text-light support-heading">Support Center</h1>
                <div className="d-flex justify-content-center">
                    <Link   className="mr-5 support-btn"><Button type={"block"} color={"pri"} className="w-100">FAQs</Button></Link>
                    <Link to="videos"  className="support-btn"><Button type={"block"} color={"light"} className="w-100">Videos</Button></Link>
                </div>

            </Hero>

            <div className='row p-0' >
                <div className="pri-light-bg  col-md-6">
                    <div className="support-form ml-auto">
                        <div className="contact-us">
                            <h1 className='bold'>Contact Us</h1>
                            <p>We value your input and are eager to hear from you. Whether you have questions, suggestions, or feedback, we're here to help. Please feel free to reach out to us through any of the following means:
                            </p>
                            <h4 className='bold'>Wefreelancer Global Tech, Inc.</h4>
                            <p>6000 Park of Commerce Blvd
                                <br />Suite C
                                <br />Boca Raton, Florida 33487
                            </p>
                            <h4 className='bold'>Wefreelancer GMB</h4>
                            <br />
                            <Link to="#">
                                Presale@supcoin.com
                            </Link><br />
                            <Link to="#">
                                 Info@wefreelancer.com
                            </Link>
                            <br />
                            <p>Toll-free 1-800-310-3129</p>
                            <p>Your opinions matter to us, and we are continuously striving to enhance our services based on your input. Whether it's a suggestion for improvement, a question about our offerings, or even a simple hello, we're excited to engage in a meaningful conversation with you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6">
                    <div className="support-form">
                        <form action="">
                            <div className="form-container ">
                                <div className="form-group">
                                    <label htmlFor="first_name">First Name *</label>
                                    <input type="text" className="form-control" id='last_name' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="email" className="form-control" id='first_name' required />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id='email' placeholder='Email' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="budget">Select topic *</label>
                                    <select className="form-control" id="budget">
                                        <option>Onboarding</option>
                                        <option>Funding</option>
                                        <option>Trading</option>
                                        <option>Primary Offerings</option>
                                    </select>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="about_yourself">Message</label>
                                    <textarea name="" id="" cols="30" className='form-control' rows="10"></textarea>
                                </div>

                            </div>

                            <Button type={"block"} color={"pri"} className=" px-5 d-block mt-auto">Submit</Button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support