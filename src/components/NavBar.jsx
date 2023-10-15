import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaCaretRight, FaArrowUp, FaTimes } from  "react-icons/fa"
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
                        <Link to="/" className='nav-link px-0 mr-5'><img width={72}  src={logo} alt="" /></Link>
                    </div>

                    {/* Main Navigation */}
                    <div className={`main-nav align-items-center ${toggle && "visible"}`}>

                        <Link to="/sup" className="nav-link" onClick={closeToggler}>SUP</Link>
                        <Link to="/invest" className="nav-link" onClick={closeToggler}>Invest</Link>

                        <div className="nav-link drop1">
                            <div className="position-relative ">
                                <span style={{ fontSize: "14px" }}>Learn</span>
                                <span onMouseEnter={()=>handleDropDown("drop1")} onMouseLeave={handleDropDown} className="dropdown-btn"></span>
                            </div>

                            <div className={`dropdown-items ${navDrop.drop1 && "drop"}`}  onMouseEnter={()=>handleDropDown("drop1")} onMouseLeave={handleDropDown}>
                                <div className='row text-light dropdown-container'>
                                    <div className='col-md-6'>
                                        <div className="col-md-9">
                                            <h1 className='bold '>Learn</h1>
                                            <p className='mont-font'>Supcoin help you navigate the digital asset landscape with exiting, cofidence and knowledge. The digital asset space is continuously evolving, with new projects, trends, and technologies emerging frequently.</p>

                                        </div>
                                    </div>
                                    <div className="dropdown col-md-6">
                                        <li onClick={closeToggler}><Link to="#home" className='nav-link dropdown-item'> Cryptocurrencies  <FaArrowUp className='ml-2 ' style={{transform: "rotate(30deg)"}} /></Link></li>
                                        <li onClick={closeToggler}><Link to="/caculator" className='nav-link dropdown-item'>Caculator  <FaArrowUp className='ml-2 ' style={{transform: "rotate(30deg)"}} /></Link></li>
                                        <li onClick={closeToggler}><Link to="/marketplace" className='nav-link dropdown-item'>Market  <FaArrowUp className='ml-2 ' style={{transform: "rotate(30deg)"}} /></Link></li>
                                        <li onClick={closeToggler}><Link to="/blog" className='nav-link dropdown-item'>Blog  <FaArrowUp className='ml-2 ' style={{transform: "rotate(30deg)"}} /></Link ></li>
                                        <li onClick={closeToggler}><Link to="/support" className='nav-link dropdown-item'>Support  <FaArrowUp className='ml-2 ' style={{transform: "rotate(30deg)"}} /></Link></li>
                                    </div>
                                </div>
                                <div className="close"><FaTimes size={25} onClick={handleDropDown} /></div>
                            </div>
                        </div>

                        <div className='nav-link drop2'>
                            <div className="position-relative ">
                                <span style={{ fontSize: "14px" }}>How To Obtain</span>
                                <Link to='/how-to-buy' onMouseEnter={()=>handleDropDown("drop2")} onMouseLeave={handleDropDown} className="dropdown-btn"></Link>
                            </div>

                            <div className={`dropdown-items ${navDrop.drop2 && "drop"}`}  onMouseEnter={()=>handleDropDown("drop2")} onMouseLeave={handleDropDown} >
                                <div className='row dropdown-container'>
                                    <div className="col-md-6 text-light">
                                        <div className="col-md-9">
                                            <h1 className=' bold title'>Obtain </h1>
                                            <p className='mont-font'>Begin by researching the asset you want to purchase. Understand its features, specifications, and pricing to make an informed decision. Take charge and buy Supcoin in presale using ETH, BNB, USDT, or bank card before it lists on DEX.</p>
                                        </div>
                                    </div>
                                    <div className="dropdown col-md-6">
                                        <li onClick={closeToggler}>
                                            <Link to="/new-to-crypto" className='nav-link dropdown-item'>New To Cryto  <FaArrowUp className='ml-2 ' style={{transform: "rotate(30deg)"}}/></Link>
                                        </li>
                                        <li onClick={closeToggler}>
                                            <Link to="/win" className='nav-link dropdown-item'>Airdrop<FaArrowUp className='ml-2 ' style={{transform: "rotate(30deg)"}}/></Link>
                                        </li>
                                    </div>
                                </div>
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
                        <div className={`toggler transition ${toggle && "rotate"}`} onClick={()=>{setToggle(pre => !pre)}}>
                            {toggle ? <FaTimes size={20} /> : <FaBars size={25} />}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NavBar