import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaCaretRight, FaLink, FaTimes } from "react-icons/fa"
import logo from '../images/home/logo.png'
import { UIContext } from '../context/UIcontext'

import { Button } from '../Utilities'

function NavBar({isScrolled}) {
    
    const { toggle, setToggle, handleDropDown, navDrop, } = useContext(UIContext)

    const closeToggler = (e)=> {
        setToggle(false)
        handleDropDown(e)

    }

    return (
        <div id='navbar' className={`${isScrolled && "removeBg"}`}>
            <div className="container-fluid">
                <div className="navbar-container flex-wrap">

                    {/* Logo */}
                    <div className='logo' onClick={closeToggler}>
                        <Link to="/" className='nav-link px-0'><img src={logo} alt="" /></Link>
                    </div>

                    {/* Main Navigation */}
                    <div className={`main-nav align-items-center ${toggle && "visible"}`}>

                        <Link to="/sup" className="nav-link" onClick={closeToggler}>SUP</Link>
                        <Link to="/invest" className="nav-link" onClick={closeToggler}>Invest</Link>

                        <div className="nav-link drop1">
                            <div className="position-relative ">
                                <span style={{ fontSize: "14px" }}>Learn</span> <FaCaretRight className={`icon transition ${!navDrop.drop1 && "rotate"}`} />
                                <span onClick={handleDropDown} id='drop1' className="dropdown-btn"></span>
                            </div>

                            <div className={`dropdown-items ${navDrop.drop1 && "drop"}`}>
                                <div className='row text-light dropdown-container'>
                                    <div className='col-sm-6'>
                                        <div className="col-sm-9">
                                            <h1 className='bold '>Learn</h1>
                                            <p className='mont-font'>Supcoin help you navigate the digital asset landscape with exiting, cofidence and knowledge. The digital asset space is continuously evolving, with new projects, trends, and technologies emerging frequently.</p>

                                        </div>
                                    </div>
                                    <div className="dropdown col-sm-6">
                                        <li onClick={closeToggler}><Link to="#home" className='nav-link dropdown-item'> Cryptocurrencies  <FaLink className='ml-2' /></Link></li>
                                        <li onClick={closeToggler}><Link to="#home" className='nav-link dropdown-item'>Caculator  <FaLink className='ml-2' /></Link></li>
                                        <li onClick={closeToggler}><Link to="#home" className='nav-link dropdown-item'>Market  <FaLink className='ml-2' /></Link></li>
                                        <li onClick={closeToggler}><Link to="/blog" className='nav-link dropdown-item'>Blog  <FaLink className='ml-2' /></Link ></li>
                                        <li onClick={closeToggler}><Link to="#home" className='nav-link dropdown-item'>Support  <FaLink className='ml-2' /></Link></li>
                                    </div>
                                </div>
                                <div className="close"><FaTimes size={25} onClick={handleDropDown} /></div>
                            </div>
                        </div>

                        <div className='nav-link drop2'>
                            <div className="position-relative ">
                                <span style={{ fontSize: "14px" }}>How To Buy</span> <FaCaretRight className={`icon transition ${!navDrop.drop2 && "rotate"}`} />
                                <span onClick={handleDropDown} id='drop2' className="dropdown-btn"></span>
                            </div>

                            <div className={`dropdown-items ${navDrop.drop2 && "drop"}`} >
                                <div className='row dropdown-container'>
                                    <div className="col-sm-6 text-light">
                                        <div className="col-sm-9">
                                            <h1 className=' bold title'>New comer</h1>
                                            <p className='mont-font'>Welcome to the world of cryptocurrencies! Crypto is an exciting and rapidly evolving space that offers various opportunities for investment, innovation, and financial empowerment.</p>
                                        </div>
                                    </div>
                                    <div className="dropdown col-sm-6">
                                        <li onClick={closeToggler}>
                                            <Link to="/new-to-crypto" className='nav-link dropdown-item'>New To Cryto  <FaLink className='ml-2'/></Link>
                                        </li>
                                        <li onClick={closeToggler}>
                                            <Link to="/win" className='nav-link dropdown-item'>Win $100k   <FaLink className='ml-2'/></Link>
                                        </li>
                                    </div>
                                </div>
                                <div className="close" onClick={handleDropDown}><FaTimes size={25} color='#fff' /></div>
                            </div>
                        </div>

                        <Link onClick={closeToggler} to="/roadmap" className="nav-link">Roadmap</Link>
                        <Link onClick={closeToggler} to="#home" className="nav-link">Whitepaper</Link>
                        <Link onClick={closeToggler} to="#home" className="nav-link">Certik Audit</Link>
                    </div>

                    {/* Action Buttons */}
                    <div className='action-btns d-flex nav-link flex-nowrap ml-md-auto'>
                        <Button type={"inline"} color={"light"}>Connect <FaCaretRight /></Button>
                        <Button type={"inline"} color={"light"}>English <FaCaretRight /></Button>
                    </div>

                    {/* Toggler */}
                    <div className="d-flex align-items-center side-nav justify-content-center ">
                        <Link href="#" className="nav-link">Sign In</Link>
                        <div className={`toggler transition ${toggle && "rotate"}`} onClick={()=> setToggle(prev => !prev)}>
                            {toggle ? <FaTimes size={20} /> : <FaBars size={25} />}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NavBar