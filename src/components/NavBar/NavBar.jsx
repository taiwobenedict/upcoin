import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { FaBars, FaCaretRight, FaLink, FaTimes } from "react-icons/fa"
import logo from '../../images/home/logo.png'
import { uiContext } from '../../context/UIcontext'


function NavBar() {
   
    const { toggle, setToggler, handleDropDown, learnTog, howTog } = useContext(uiContext)



    return (
        <div id='navbar'>
            <div className="container-fluid">
                <div className="navbar-container flex-wrap">

                    {/* Logo */}
                    <div className='logo'>
                        <Link to="/" className='nav-link'><img src={logo} alt="" /></Link>
                    </div>

                    {/* Main Navigation */}
                    <div className={`main-nav align-items-center ${toggle && "visible"} mx-auto`}>

                        <Link to="/sup" className="nav-link" onClick={() => setToggler(false)}>SUP</Link>
                        <Link to="/invest" className="nav-link" onClick={() => setToggler(false)}>Invest</Link>

                        <div className="nav-link">
                            <div className="position-relative">
                                <span style={{ fontSize: "14px" }}>Learn</span> <FaCaretRight className={`icon transition ${!learnTog && "rotate"}`} />
                                <span onClick={handleDropDown} id='learn' className="dropdown-btn"></span>
                            </div>

                            <div className={`dropdown-items ${learnTog && "drop"}`}>
                                <div className='row text-light dropdown-container'>
                                    <div className='col-sm-6'>
                                        <h1>Learn</h1>
                                        <p>Supcoin help you navigate the digital asset landscape with exiting, cofidence and knowledge. The digital asset space is continuously evolving, with new projects, trends, and technologies emerging frequently.</p>
                                    </div>
                                    <div className="dropdown col-sm-6">
                                        <li onClick={() => setToggler(false)}><Link to="#home" className='nav-link dropdown-item'> Cryptocurrencies  <FaLink className='ml-2' /></Link></li>
                                        <li onClick={() => setToggler(false)}><Link to="#home" className='nav-link dropdown-item'>Caculator  <FaLink className='ml-2' /></Link></li>
                                        <li onClick={() => setToggler(false)}><Link to="#home" className='nav-link dropdown-item'>Market  <FaLink className='ml-2' /></Link></li>
                                        <li onClick={() => setToggler(false)}><Link to="#home" className='nav-link dropdown-item'>Blog  <FaLink className='ml-2' /></Link ></li>
                                        <li onClick={() => setToggler(false)}><Link to="#home" className='nav-link dropdown-item'>Support  <FaLink className='ml-2' /></Link></li>
                                    </div>
                                </div>
                                <div className="close"><FaTimes size={25} onClick={handleDropDown} /></div>
                            </div>
                        </div>

                        <div className='nav-link'>
                            <div className="position-relative">
                                <span style={{ fontSize: "14px" }}>How To Buy</span> <FaCaretRight className={`icon transition ${!howTog && "rotate"}`} />
                                <span onClick={handleDropDown} id='how' className="dropdown-btn"></span>
                            </div>

                            <div className={`dropdown-items ${howTog && "drop"}`} >
                                <div className='row dropdown-container'>
                                    <div className="col-sm-6 text-light">
                                        <h1>New comer</h1>
                                        <p>Multiple markets from two different asset classes all available to you in ONE place.</p>
                                    </div>
                                    <div className="dropdown col-sm-6">
                                        <li onClick={() => setToggler(false)}>
                                            <Link to="#home" className='nav-link dropdown-item'>New To Cryto  <FaLink className='ml-2'/></Link>
                                        </li>
                                        <li onClick={() => setToggler(false)}>
                                            <Link to="#home" className='nav-link dropdown-item'>Win $100k   <FaLink className='ml-2'/></Link>
                                        </li>
                                    </div>
                                </div>
                                <div className="close" onClick={handleDropDown}><FaTimes size={25} color='#fff' /></div>
                            </div>
                        </div>

                        <Link onClick={() => setToggler(false)} to="#home" className="nav-link">Roadmap</Link>
                        <Link onClick={() => setToggler(false)} to="#home" className="nav-link">Whitepaper</Link>
                        <Link onClick={() => setToggler(false)} to="#home" className="nav-link">Certik Audit</Link>
                    </div>

                    {/* Action Buttons */}
                    <div className='action-btns d-flex nav-link flex-nowrap ml-md-auto'>
                        <button className="btn btn-inline-light">Connect <FaCaretRight /></button>
                        <button className="btn btn-inline-light">English <FaCaretRight /></button>
                    </div>


                    <div className="d-flex align-items-center side-nav justify-content-center ">
                        <Link href="#" className="nav-link">Sign In</Link>
                        <div className={`toggler transition ${toggle && "rotate"}`} onClick={()=> setToggler(prev => !prev)}>
                            {toggle ? <FaTimes size={20} /> : <FaBars size={25} />}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NavBar