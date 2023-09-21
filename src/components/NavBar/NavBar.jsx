import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { FaBars, FaCaretRight, FaTimes } from "react-icons/fa"
import logo from '../../images/home/logo.png'


function NavBar(  ) {
    const [learnTog, setLearnTog] = useState(false)
    const [howTog, setHowTog] = useState(false)
    const [toggle, setToggler] = useState(false)


    
    const handleDropDown = (e)=> {
        switch (e.target.id) {
            case "learn":
                setHowTog(false)
                setLearnTog(prev => !prev)
                break;
                
                case "how":
                setLearnTog(false)
                setHowTog(prev => !prev)
                break;
        
            default:
                setLearnTog(false)
                setHowTog(false)
                break;
        }

   
    }

     const handleToggler = (e) => {
        setToggler(prev => !prev)
        
     }

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

                        <Link to="/sup" className="nav-link">SUP</Link>
                        <Link to="/invest" className="nav-link">Invest</Link>

                        <div className="nav-link">
                            <div className="position-relative">
                                <span style={{fontSize: "14px"}}>Learn</span> <FaCaretRight className={`icon transition ${!learnTog && "rotate"}`}/>
                                <span onClick={handleDropDown} id='learn' className="dropdown-btn"></span>
                            </div>

                            <div className={`dropdown-items ${learnTog && "drop"}`}>
                                <div className='row text-light dropdown-container'>
                                    <div className='col-sm-6'>
                                        <h1>Learn</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum tempora ab deleniti in suscipit repudiandae accusamus et reprehenderit sunt! Incidunt similique corrupti, assumenda quidem deleniti facilis repudiandae inventore maiores!</p>
                                    </div>
                                    <div className="dropdown col-sm-6">
                                        <li><Link to="#home" className='nav-link dropdown-item'>Cryptocurrencies</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Caculator</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Market</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Blog</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Support</Link></li>
                                    </div>
                                </div>
                                <div className="close"><FaTimes  size={25} onClick={handleDropDown}/></div>
                            </div>
                        </div>

                        <div className='nav-link'>
                            <div className="position-relative">
                                <span style={{fontSize: "14px"}}>How To Buy</span> <FaCaretRight className={`icon transition ${!howTog && "rotate"}`}/>
                                <span onClick={handleDropDown} id='how' className="dropdown-btn"></span>
                            </div>

                            <div className={`dropdown-items ${howTog && "drop"}`} >
                                <div className='row dropdown-container'>
                                    <div className="col-sm-6 text-light">
                                        <h1>How To Buy</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere porro pariatur vel illo, neque commodi nihil ab perspiciatis, deserunt nisi necessitatibus quibusdam? Ab nemo illo totam, deserunt dicta unde. Eaque!</p>
                                    </div>
                                    <div className="dropdown col-sm-6">
                                        <li><Link to="#home" className='nav-link dropdown-item'>New To Cryto</Link></li>
                                        <li><Link to="#home" className='nav-link dropdown-item'>Win $100k</Link></li>
                                    </div>
                                </div>
                                <div className="close" onClick={handleDropDown}><FaTimes  size={25} color='#fff'/></div>
                            </div>
                        </div>

                        <Link to="#home" className="nav-link">Roadmap</Link>
                        <Link to="#home" className="nav-link">Whitepaper</Link>
                        <Link to="#home" className="nav-link">Certik Audit</Link>
                    </div>

                    {/* Action Buttons */}
                    <div className='action-btns d-flex nav-link flex-nowrap ml-md-auto'>
                        <button className="btn btn-inline-light">Connect <FaCaretRight /></button>
                        <button className="btn btn-inline-light">English <FaCaretRight /></button>
                    </div>


                    <div className="d-flex align-items-center side-nav justify-content-center ">
                        <Link href="#" className="nav-link">Sign In</Link>
                        <div className={`toggler transition ${toggle && "rotate"}`} onClick={handleToggler}>
                           {toggle ? <FaTimes  size={20}/> : <FaBars size={25}/>}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NavBar