import { useContext } from 'react'
import { Hero } from '../../Utilities'
import { UIContext } from '../../context/UIcontext'
import { FaChevronDown } from 'react-icons/fa'



import "./Caculator.css"

function Caculator() {
    const { handleDropDown, formDrop, optHeight, } = useContext(UIContext)


    return (
        <div id='caculator'>
            <Hero height={75} className={"container text-light"}>
                <h1 className="heading-lg">SUP Crypto Calculator</h1>
                <h1 className='mt-3'>BTC to USD Calculator</h1>

                <form action="" className="newcomer-form col-md-6">
                    <div className="form-container">
                        <div className="row form-group">
                            <div className="">
                                <div className="select">
                                    <div className="option-btn d-flex">
                                        <span className='mr-2'> { } </span>
                                        <FaChevronDown className='i' />
                                        <div className="select-cover" id='drop3' onClick={handleDropDown}></div>
                                    </div>
                                    <div className="option-container" style={{ height: `${formDrop.drop3 ? optHeight + 5 : "0"}px` }}>
                                        <div className="options" onClick={handleDropDown}>
                                            <input type="text" className='form-input option-input' value="Morning" readOnly />
                                            <input type="text" className='form-input option-input' value="Afternoon" readOnly />
                                            <input type="text" className='form-input option-input' value="Evening" readOnly />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="">
                                <div className="select">
                                    <div className="option-btn d-flex">
                                        <span className='mr-2'> { } </span>
                                        <FaChevronDown className='i' />
                                        <div className="select-cover" id='drop3' onClick={handleDropDown}></div>
                                    </div>
                                    <div className="option-container" style={{ height: `${formDrop.drop3 ? optHeight + 5 : "0"}px` }}>
                                        <div className="options" onClick={handleDropDown}>
                                            <input type="text" className='form-input option-input' value="Morning" readOnly />
                                            <input type="text" className='form-input option-input' value="Afternoon" readOnly />
                                            <input type="text" className='form-input option-input' value="Evening" readOnly />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </Hero>
        </div>
    )
}

export default Caculator
