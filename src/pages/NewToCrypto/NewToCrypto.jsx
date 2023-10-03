
import {  Hero } from '../../Utilities'

import "./NewToCrypto.css"

function NewToCrypto() {

    return (
        <div id='newtocrypto'>
            <Hero centerContent className="container">
                <div className="newtocryto-container mx-auto">
                    <div>
                        <div className="form-context">
                            <h1 className='heading-md font-weight-bold' >GAIN ACCESS TO OUR EARLY BIRD PRESALE! REGISTER BELOW AND WE'LL GUIDE YOU</h1>
                            <h5 className='my-5'>Supelle is a first-of-its-kind freelance and finance ecosystem that is blockchain-based. Our Supcoin (SUP) is the first cryptocurrency with a global marketplace to back it up. This eliminates all risk from your investment with a decentralized ecosystem where you have control. And if you buy with our early bird presale, you stand to make profits of up to 100,000%! PURCHASE THE SUPCOIN TOKEN TODAY.</h5>
                        </div>

                        <div className="newform-container">
                            <h5 className='bold text-center mb-4'>leave your details below and we'll contact you to discuss purchasing Supcoin</h5>
                            <form action="" className='new-form'>
                                <div className="form-group">
                                    <label htmlFor="first_name">First name</label>
                                    <input type="text" className="form-control" placeholder='John' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="first_name">Last name</label>
                                    <input type="text" className="form-control" placeholder='Smith' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="first_name">Email</label>
                                    <input type="email" className="form-control" placeholder='Johnsmith@mail.com' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="first_name">Phone Number</label>
                                    <input type="text" className="form-control" placeholder='+1 800-310-3129' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-time">Best Time to Contact</label>
                                    <select className="form-control" id="contact-time">
                                        <option>Morning</option>
                                        <option>Afternoon</option>
                                        <option>Evening</option>
                                    </select>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="budget">Budget</label>
                                    <select className="form-control" id="budget">
                                        <option>$1-10k</option>
                                        <option>$10-20k</option>
                                        <option>$20-50k</option>
                                        <option>50k+</option>
                                    </select>
                                </div>

                                <button className='btn btn-block btn-primary mt-5'>SUBMIT</button>

                            </form>
                        </div>
                    </div>
                </div>
            </Hero>

        </div>
    )
}

export default NewToCrypto