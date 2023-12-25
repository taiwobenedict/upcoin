import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaCaretRight, FaArrowUp, FaTimes } from "react-icons/fa"
import logo from '../images/home/logo.png'
import { UIContext } from '../context/UIcontext'
import Whitepaper from '../pages/Whitepaper/Whitepaper';
import { useTranslation } from "react-i18next";
import { Button } from '../Utilities';
import { useAccount, useConnect, useDisconnect, useEnsName, useNetwork } from 'wagmi'
import { toast } from "react-toastify";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoCloseCircleOutline } from "react-icons/io5";
import { minAddress } from "../common/methods";
import styled from 'styled-components';

import { Web3Button } from "@web3modal/react";

// const StyledWeb3Button = styled.web3button.button`
// background-color: #123456 !important;
// `;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#000a',
    border: '1px solid #fff3',
    borderRadius: "10px",
    boxShadow: 24,
    p: 3,
};

function NavBar({ isScrolled }) {

    const { toggle, setToggle, handleDropDown, navDrop, } = useContext(UIContext)

    const { address, isConnected } = useAccount();
    const { chain } = useNetwork();
    const { data: ensName } = useEnsName({ address });

    const { connect, connectors, error: connectionError, isError: isConnectionError } =
        useConnect()
    const { disconnect } = useDisconnect();

    const [openConnectionModal, setOpenConnectionModal] = useState(false);
    const handleOpenConnectionModal = () => setOpenConnectionModal(!openConnectionModal);

    const closeToggler = (e) => {
        setToggle(false);
        handleDropDown(e);
    }

    const handleWhitepaper = (e) => {
        closeToggler()
        Whitepaper()
    }

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div id='navbar' className={`${isScrolled && "removeBg"}`}>
            <div className="container-fluid">
                <div className="navbar-container flex-wrap">

                    <div className='logo' onClick={closeToggler}>
                        <Link to="/" className='nav-link px-0 mr-5'><img width={72} src={logo} alt="" /></Link>
                    </div>

                    <div className={`main-nav align-items-center ${toggle && "visible"}`}>

                        <Link to="/sup" className="nav-link" onClick={closeToggler}>SUP</Link>
                        <Link to="/invest" className="nav-link" onClick={closeToggler}>{t('Invest')}</Link>
                        <Link to="/overview" className="nav-link" onClick={closeToggler}>{t('Staking')}</Link>
                        <Link to="/airdrop" className="nav-link" onClick={closeToggler}>{t('Airdrop')}</Link>

                        <div className="nav-link drop1">
                            <div className="position-relative ">
                                <span style={{ fontSize: "14px" }}>Learn</span>
                                <span onMouseEnter={() => handleDropDown("drop1")} onMouseLeave={handleDropDown} className="dropdown-btn"></span>
                            </div>

                            <div className={`dropdown-items ${navDrop.drop1 && "drop"}`} onMouseEnter={() => handleDropDown("drop1")} onMouseLeave={handleDropDown}>
                                <div className='row text-light dropdown-container'>
                                    <div className='col-md-6'>
                                        <div className="col-md-9">
                                            <h1 className=''>Learn</h1>
                                            <p className='mont-font'>Supcoin help you navigate the digital asset landscape with exiting, cofidence and knowledge. The digital asset space is continuously evolving, with new projects, trends, and technologies emerging frequently.</p>

                                        </div>
                                    </div>
                                    <div className="dropdown col-md-6">
                                        <li onClick={closeToggler}><Link to="/cryptocurrencies" className='nav-link dropdown-item'> Cryptocurrencies  <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link></li>
                                        <li onClick={closeToggler}><Link to="/caculator" className='nav-link dropdown-item'>Calculator  <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link></li>
                                        <li onClick={closeToggler}><Link to="/marketplace" className='nav-link dropdown-item'>Market  <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link></li>
                                        <li onClick={closeToggler}><Link to="/blog" className='nav-link dropdown-item'>Blog  <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link ></li>
                                        <li onClick={closeToggler}><Link to="/support" className='nav-link dropdown-item'>Support  <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link></li>
                                    </div>
                                </div>
                                <div className="close"><FaTimes size={25} onClick={handleDropDown} /></div>
                            </div>
                        </div>

                        <div className='nav-link drop2'>
                            <div className="position-relative ">
                                <span style={{ fontSize: "14px" }}>How To Obtain</span>
                                <Link to='/how-to-buy' onMouseEnter={() => handleDropDown("drop2")} onMouseLeave={handleDropDown} className="dropdown-btn"></Link>
                            </div>

                            <div className={`dropdown-items ${navDrop.drop2 && "drop"}`} onMouseEnter={() => handleDropDown("drop2")} onMouseLeave={handleDropDown} >
                                <div className='row dropdown-container'>
                                    <div className="col-md-6 text-light">
                                        <div className="col-md-9">
                                            <h1 className=''>Obtain </h1>
                                            <p className='mont-font'>Begin by researching the asset you want to purchase. Understand its features, specifications, and pricing to make an informed decision. Take charge and buy Supcoin in presale using ETH, BNB, USDT, or bank card before it lists on DEX.</p>
                                        </div>
                                    </div>
                                    <div className="dropdown col-md-6">
                                        <li onClick={closeToggler}>
                                            <Link to="/how-to-buy" className='nav-link dropdown-item'>How To Obtain  <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link>
                                        </li>
                                        <li onClick={closeToggler}>
                                            <Link to="/new-to-crypto" className='nav-link dropdown-item'>New To Cryto  <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link>
                                        </li>
                                        <li onClick={closeToggler}>
                                            <Link to="/airdrop" className='nav-link dropdown-item'>Airdrop<FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link onClick={closeToggler} to="/roadmap" className="nav-link">Roadmap</Link>
                        <Link onClick={handleWhitepaper} className="nav-link">Whitepaper</Link>
                        <Link onClick={closeToggler} to="#home" className="nav-link">Certik Audit</Link>
                    </div>

                    {/* Action Buttons */}
                    <div className='action-btns d-flex nav-link flex-nowrap ml-md-auto'>
                        <div style={{
                            border: "1px solid #fff",
                            borderRadius: "10px"
                        }}>
                            <Web3Button className="web3button" icon='hide' label='Connect Wallet' balance='hide'
                            />
                        </div>
                        <button className='navbutton' onClick={() => changeLanguage('en')}>English <FaCaretRight /></button>

                    </div>

                    <div className="d-flex align-items-center side-nav justify-content-center ">
                        <Link href="#" className="nav-link">Sign In</Link>
                        <div className={`toggler transition ${toggle && "rotate"}`} onClick={() => { setToggle(pre => !pre) }}>
                            {toggle ? <FaTimes size={20} /> : <FaBars size={25} />}
                        </div>
                    </div>

                </div>
            </div>

            <Modal
                open={openConnectionModal}
                onClose={() => handleOpenConnectionModal()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div variant="h6"
                        style={{
                            color: "white",
                            fontSize: "20px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                    >
                        <div >Connect Wallet</div>
                        <div ><IoCloseCircleOutline style={{
                            cursor: "pointer",
                            width: "24px",
                            height: "24px"
                        }}
                            onClick={() => handleOpenConnectionModal()}
                        /></div>
                    </div>
                    <div style={{ marginTop: "20px" }}
                    >
                        <div
                            style={{
                                color: "white",
                                display: "flex",
                                justifyContent: "between"
                            }}>
                            <div
                                style={{
                                    color: "rgb(158,158,158)",
                                    cursor: "pointer"
                                }}
                                onClick={() => handleOpenConnectionModal()} />
                        </div>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                                borderRadius: "1.5rem",
                                color: "white",
                                alignItems: "center"
                            }}
                        >

                            {isConnected !== true ?
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.5rem"
                                    }}
                                >
                                    {connectors?.length > 0 && connectors.filter((obj, index, array) => {
                                        return index === array.findIndex((el) => el.id === obj.id);
                                    }).map((connector) => (
                                        <button
                                            disabled={!connector.ready}
                                            key={connector.id}
                                            onClick={() => connect({ connector })}
                                            style={{
                                                minWidth: "150px",
                                                backgroundColor: "transparent",
                                                color: "white",
                                                textTransform: "capitalize"
                                            }}
                                        >
                                            {connector.id}</button>
                                    ))}
                                </div>
                                :
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "1rem"
                                    }}
                                >
                                    {
                                        (chain && chain.id !== 5) &&
                                        <div
                                            style={{
                                                color: "rgb(239,83,80)",
                                                fontSize: "16px",
                                                fontWeight: 600,
                                                textAlign: "center"
                                            }}
                                        >Please change the network of your wallet into goerli. This platform works on Goerli network.</div>
                                    }
                                    {
                                        (chain && chain.id === 5) &&
                                        <div className="text-green-400 text-[16px] font-semibold text-center"
                                            style={{
                                                color: "rgb(102,187,106)",
                                                fontSize: "16px",
                                                fontWeight: 600,
                                                textAlign: "center"
                                            }}
                                        >{chain.name} network</div>
                                    }
                                    <div
                                        style={{
                                            color: "white",
                                            fontSize: "16px",
                                            fontWeight: 600
                                        }}
                                    >{isConnected ? ensName ?? address : "Not connected"}</div>
                                    <button
                                        style={{
                                            minWidth: "150px",
                                            backgroundColor: "transparent",
                                            color: "white"
                                        }}
                                        onClick={() => disconnect()}
                                    >
                                        Disconnect
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </Box>
            </Modal>


        </div>
    )
}

export default NavBar