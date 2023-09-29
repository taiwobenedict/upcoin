import React, { useContext, useState } from 'react'
import { Button, Hero } from '../../Utilities'




import "./NewToCrypto.css"
import { FaChevronDown } from 'react-icons/fa'
import { UIContext } from '../../context/UIcontext'

function NewToCrypto() {
 
    const [budget, setBudget] = useState("Budget")
    const [bestTime, setBestTime] = useState("Contact Time")

    const {formDrop, handleDropDown, optHeight } = useContext(UIContext)
   


    return (
        <div id='newtocrypto'>
            <Hero centerContent className="container">
                <div className="newtocryto-container col-md-9 mx-auto">
                    <div className="row">
                        <div className="form-context col-md-6">
                            <h3 className='heading-sm bold' >GAIN ACCESS TO OUR EARLY BIRD PRESALE! REGISTER BELOW AND WE'LL GUIDE YOU</h3>
                            <p className=''>Supelle is a first-of-its-kind freelance and finance ecosystem that is blockchain-based. Our Supcoin (SUP) is the first cryptocurrency with a global marketplace to back it up. This eliminates all risk from your investment with a decentralized ecosystem where you have control. And if you buy with our early bird presale, you stand to make profits of up to 100,000%! PURCHASE THE SUPCOIN TOKEN TODAY.</p>
                        </div>

                        <form action="" className="newcomer-form col-md-6">
                            <div className="form-container">
                                <div className="row form-group">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-input" placeholder='First Name' />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-input" placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-input" placeholder="Email" />
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6">
                                        <div className="select">
                                            <div className="option-btn d-flex">
                                                <span className='mr-2'> {bestTime} </span>
                                                <FaChevronDown className='i' />
                                                <div className="select-cover" id='drop3' onClick={handleDropDown}></div>
                                            </div>
                                            <div className="option-container" style={{ height: `${formDrop.drop3 ? optHeight + 5 : "0"}px` }}>
                                                <div className="options" onClick={handleDropDown}>
                                                    <input type="text" className='form-input option-input' value="Morning" readOnly onClick={(e) => setBestTime(e.target.value)} />
                                                    <input type="text" className='form-input option-input' value="Afternoon" readOnly onClick={(e) => setBestTime(e.target.value)} />
                                                    <input type="text" className='form-input option-input' value="Evening" readOnly onClick={(e) => setBestTime(e.target.value)} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="select">

                                            <div className="option-btn d-flex">
                                                <span className='mr-2'> {budget} </span>
                                                <FaChevronDown className='i' />
                                                <div className="select-cover"  id='drop4' onClick={handleDropDown}></div>
                                            </div>
                                            <div className="option-container" style={{ minHeight: `${formDrop.drop4 ? optHeight + 5 : "0"}px` }}>
                                                <div className="options" onClick={handleDropDown}>
                                                    <input type="text" className='form-input option-input' value="$1-10k" readOnly onClick={(e) => setBudget(e.target.value)} />
                                                    <input type="text" className='form-input option-input' value="$10-20k" readOnly onClick={(e) => setBudget(e.target.value)} />
                                                    <input type="text" className='form-input option-input' value="$20-50k" readOnly onClick={(e) => setBudget(e.target.value)} />
                                                    <input type="text" className='form-input option-input' value="$50k+" readOnly onClick={(e) => setBudget(e.target.value)} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="tel" className="form-input" placeholder="Phone Number" />
                                </div>

                            </div>

                            <Button type={"block"} color={"light"} className="mx-auto mt-auto">Register</Button>
                        </form>
                    </div>
                </div>
            </Hero>

        </div>
    )
}

export default NewToCrypto