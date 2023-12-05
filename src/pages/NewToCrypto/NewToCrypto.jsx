
import { useState } from 'react'
import { Hero } from '../../Utilities'

import "./NewToCrypto.css"
import Email from '../../components/Email'
import { useEffect } from 'react'

function NewToCrypto() {
    useEffect(()=> {
        document.title = "GAIN ACCESS TO OUR EARLY BIRD PRESALE! REGISTER BELOW AND WE'LL GUIDE YOU"
    },[])
    
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        contact_time: "",
        budget: "",

    })

    const handleForm = (e) => {

        setFormData(prev => (
            {
                ...prev,
                [e.target.id]: e.target.value
            }
        ))

    }

    return (
        <div id='newtocrypto'>
            <Hero centerContent className="container">
                <div className="newtocryto-container mx-auto">
                    <div>
                        <div className="form-context" data-aos="fade-up">
                            <h1 className='heading-md font-weight-bold' >GAIN ACCESS TO OUR EARLY BIRD PRESALE! REGISTER BELOW AND WE'LL GUIDE YOU</h1>
                            <h5 className='my-5'>Supelle is a first-of-its-kind freelance and finance ecosystem that is blockchain-based. Our Supcoin (SUP) is the first cryptocurrency with a global marketplace to back it up. This eliminates all risk from your investment with a decentralized ecosystem where you have control. And if you buy with our early bird presale, you stand to make profits of up to 100,000%! PURCHASE THE SUPCOIN TOKEN TODAY.</h5>
                        </div>

                        <div className="newform-container">
                            <h5 className='bold text-center mb-4'>leave your details below and we'll contact you to discuss purchasing Supcoin</h5>
                            <Email template="template_yp7ha2r" serviceID="service_wowp9z2">
                                <div className='new-form'>
                                    <div className="form-group">
                                        <label htmlFor="first_name">First name</label>
                                        <input onChange={handleForm} type="text" value={formData.first_name} className="form-control" name='first_name' id='first_name' placeholder='John' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="first_name">Last name</label>
                                        <input onChange={handleForm} type="text" value={formData.last_name} className="form-control" name='last_name' id='last_name' placeholder='Smith' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="first_name">Email</label>
                                        <input onChange={handleForm} type="email" value={formData.email} className="form-control" id='email' name='email' placeholder='Johnsmith@mail.com' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="first_name">Phone Number</label>
                                        <input onChange={handleForm} type="text" className="form-control" name='number' value={formData.phone_number} id='phone_number' placeholder='+1 800-310-3129' />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="contact-time">Best Time to Contact</label>
                                        <select className="form-control" id="contact_time" onChange={handleForm} name='contact_time' >
                                            <option>Morning</option>
                                            <option>Afternoon</option>
                                            <option>Evening</option>
                                        </select>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="budget">Budget</label>
                                        <select className="form-control" id="budget" onChange={handleForm} name='budget'>
                                            <option>$1-10k</option>
                                            <option>$10-20k</option>
                                            <option>$20-50k</option>
                                            <option>50k+</option>
                                        </select>
                                    </div>

                                    <button className='btn btn-block btn-primary mt-5'>SUBMIT</button>

                                </div>
                            </Email>
                        </div>
                    </div>
                </div>
            </Hero>

        </div>
    )
}

export default NewToCrypto