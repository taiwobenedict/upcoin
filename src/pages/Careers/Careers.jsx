import React, { useState } from 'react'
import { Section } from '../../Utilities'
import { TfiLocationPin } from 'react-icons/tfi'
import { BiChevronsRight } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { careers } from '../../store/careers'
import DOMPurify from 'dompurify'

import Supelle_Careers from "../../images/careers/Supelle_Careers.jpeg"

import "./Careers.css"


function Careers() {
    const [screen, setScreen] = useState("career-list")
    const [careerDetails, setCareerDetails] = useState("")
    const [bg, setBg] = useState(Supelle_Careers)

    const handleCareer = (career) => {
        setCareerDetails(career)
        setBg(career.image)
        setScreen('career-details')


    }



    return (
        <div id='careers'>
            <div className="career-hero position-relative text-white" style={{background: `url("${bg}") top center/cover no-repeat`}}>
                <div className="overlay"></div>
                <div className="container h-100">


                    <div className="career-hero-content position-relative">
                        <div>
                            <h1 className="heading-lg bold mb-4">SUP Careers</h1>
                            <p className="text-big">Join the SUP team around the world</p>

                        </div>
                    </div>
                </div>
            </div>

            {
                screen === "career-details"
                    ? (
                        <CareerDetails career={careerDetails} />
                    )
                    : (
                        <Section pd="80px 0" className="container">

                            <d className="d-flex">
                                <div className="sm-btn mr-3">All</div>
                                <div className="sm-btn mr-3">USA</div>
                            </d>



                            <div className="mt-4">
                                {
                                    careers.map((career, i) => (
                                        <div className="bg-white p-4 mt-5" key={i}>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <p className='bold'>{career.title}</p>
                                                    <small className="pri-color bold d-block" style={{ cursor: "pointer", fontSize: "10px" }} onClick={() => handleCareer(career)}>READ MORE <BiChevronsRight /> </small>
                                                </div>
                                                <div className='text-right'>
                                                    <p className='text-muted' style={{ cursor: "pointer", fontSize: "12px" }}> <TfiLocationPin /> Lorem, ipsum.</p>
                                                    <small className="pri-color bold d-block" ><BsArrowRight /> </small>
                                                </div>

                                            </div>

                                        </div>

                                    ))
                                }
                            </div>

                        </Section>
                    )
            }



        </div>
    )
}

export default Careers


function CareerDetails({ career }) {

    function renderHTML(htmlString) {
        const sanitizedHTML = DOMPurify.sanitize(htmlString);
        return `<div>${sanitizedHTML}</div>`;
    }
    return (
        <>

            <Section pd="80px 0">
                <div className='container'>
                    <div className="d-flex justify-content-between">
                        <h2 className='bold'>{career.title}</h2>

                        <button className='btn-block-pri btn apply-btn'>Apply</button>
                    </div>
                    <p>{career.location}</p>
                    <div dangerouslySetInnerHTML={{ __html: renderHTML(career.content) }}></div>
                </div>
            </Section>


            <div className='row p-0' id='contact'>
                <div className="pri-light-bg  col-md-6">
                    <div className="support-form ml-auto">
                        <div className="contact-us">
                            <h1 className="heading-lg">Apply for <br />
                                this Position</h1>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 bg-white">
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
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" className="form-control" id='email' placeholder='Email' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="form-control" id='phone' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="budget">LinkedIn Profile</label>
                                    <input type="text" className='form-control' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="budget">Your personal site </label>
                                    <input type="text" className='form-control' />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="about_yourself">Message</label>
                                    <textarea name="" id="" cols="30" className='form-control' rows="10"></textarea>
                                </div>

                               
                                    <div class="form-group">
                                        <label for="file">Upload CV *</label>
                                        <input type="file" class="form-control-file" id="file" />
                                    </div>
                            

                            </div>

                            <btn className=" px-5  mt-auto btn btn-block-pri">Submit</btn>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}