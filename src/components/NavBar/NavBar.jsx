import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { FaBars, FaCaretRight, FaTimes } from "react-icons/fa"
import logo from '../../images/home/logo.png'


function NavBar(  ) {
    const [learnTog, setLearnTog] = useState(true)
    const [howTog, setHowTog] = useState(true)
    const [toggle, setToggler] = useState(false)


    
    const handleDropDown = (e)=> {
        const setHeight = e.target.parentElement.nextSibling
        const initialHeight = setHeight.firstElementChild.firstElementChild
        setHeight.style.height =  `${initialHeight.clientHeight}px`
        setHeight.style.opacity =  `1`

        switch (e.target.id) {
            case "learn":
                setLearnTog(prev => !prev)
                setHowTog(true)
                break;
                
                case "how":
                setLearnTog(true)
                setHowTog(prev => !prev)
                break;
        
            default:
                break;
        }

   
    }

     const handleToggler = (e) => {
        setToggler(prev => !prev)
        
     }

    return (
        <div id='navbar'>
            <div className="container-fluid">
                <div className="nav-container flex-wrap">

                    {/* Logo */}
                    <div className='logo'>
                        <Link to="#home" className='nav-link'><img src={logo} alt="" /></Link>
                    </div>

                    {/* Main Navigation */}
                    <div className={`main-nav align-items-center ${toggle && "show"} mx-auto`}>
                        <Link to="#home" className="nav-link">SUP</Link>
                        <Link to="#home" className="nav-link">Invest</Link>
                        <div className="nav-link">
                            <div className="dropdown-btn">
                            <span style={{fontSize: "14px"}}>Learn</span> <FaCaretRight className={`text-light ${!learnTog && "rotate"}`}/>
                                <span onClick={handleDropDown} id='learn' className="btn-cover"></span>
                            </div>

                            <div className={`hide ${learnTog && "drop"}`}>
                                <div>
                                    <div className="dropdown">
                                        <li><Link to="#home" className='nav-link dropdown-item'>Cryptocurrencies</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Caculator</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Market</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Blog</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Support</Link></li>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='nav-link'>
                            <div className="dropdown-btn">
                                <span style={{fontSize: "14px"}}>How To Buy</span> <FaCaretRight className={`text-light ${!howTog && "rotate"}`}/>
                                <span onClick={handleDropDown} id='how' className="btn-cover"></span>
                            </div>

                            <div className={`hide ${howTog && "drop"}`} >
                                <div>
                                    <div className="dropdown">
                                        <li><Link to="#home" className='nav-link dropdown-item'>New To Cryto</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Win $100k</Link></li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="#home" className="nav-link">Roadmap</Link>
                        <Link to="#home" className="nav-link">Whitepaper</Link>
                        <Link to="#home" className="nav-link">Certik Audit</Link>
                    </div>

                    {/* Action Buttons */}
                    <div className='action-btns d-flex flex-nowrap ml-md-auto'>
                        <button className="btn btn-inline-light">Connect <FaCaretRight /></button>
                        <button className="btn btn-inline-light">English <FaCaretRight /></button>
                    </div>


                    <div className="d-flex align-items-center side-nav justify-content-center ">
                        <Link href="#" className="nav-link">Sign In</Link>
                        <div className={`toggler ${toggle && "rotate"}`} onClick={handleToggler}>
                           {toggle ? <FaTimes  size={20}/> : <FaBars size={20}/>}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NavBar