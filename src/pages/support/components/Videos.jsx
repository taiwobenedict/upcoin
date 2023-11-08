import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch, } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import coin from "../../../images/roadmap/coin.png"

import { videos } from '../../../store'

function Videos() {
    const [viedeoSrc, setVideoSrc ] = useState({
        title: "What is money? What Would the World Be Like Without Money | Supcoinc",
        src: "https://www.youtube.com/embed/wFIjt8Gn2B8?si=HqSgLtkYU-OOvSrT",
    })

    const handleVideos = (video)=> {
        setVideoSrc(video)

    }
    return (
        <div className='pri-bg videos-page'>
            <div className="container-lg">
                <div className="d-flex justify-content-between align-items-center">
                    <nav className='breadcrumb-container'>
                        <ol className="breadcrumb bg-transparent text-light">
                            <li className="breadcrumb-item"><Link className='  text-light' to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link className='  text-light' to="/support">Back</Link></li>
                        </ol>
                    </nav>
                    <div>
                        <form action="" className="search">
                            <BsSearch className='search-icon'/>
                            <input type="search" name="" className='search-videos w-100'placeholder='Search' id="" />
                        </form>
                    </div>
                </div>

                <div className="support-videos mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>Articles is this section</h6>
                            {
                                videos.map((video, i) => (
                                    <button style={{border: "none"}} className={`btn btn-outline-light text-left ${video.src === viedeoSrc.src && "active"}  mb-3`} onClick={()=>handleVideos(video)} key={i}>{video.title}</button>
                                ))
                            }

                        </div>
                        <div className="col-md-9">
                            <h3 className='bold mb-4'>{viedeoSrc.title}</h3>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <div className="position-relative  mr-4">
                                        <div className="coin">
                                            <img src={coin} alt="" className='w-100' />
                                        </div>
                                        <div className='user-support' >
                                            <BiUser />
                                        </div>
                                    </div>

                                    <div>
                                        <h6 className='mb-0'>Roman</h6>
                                        <small>2 month ago - Uploaded</small>
                                    </div>
                                </div>
                                <button className="btn btn-outline-light">Follow</button>
                            </div>

                            <div className="support-videos mt-5">
                                <div className="video">
                                    <iframe width="560" height="315" src={viedeoSrc.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className="socials pb-4 mt-5">
                                    <FaFacebook className='social-link' size={18} />
                                    <FaTwitter className='social-link' size={18} />
                                    <FaLinkedin className='social-link' size={18} />
                                </div>
                            </div>

                            <div className="border-bottom border-top pt-4">
                                <div className="text-center">
                                    <p>Was this article helpful?</p>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-outline-light mr-3"  style={{minWidth: "90px"}}>Yes</button>
                                        <button className="btn btn-outline-light"  style={{minWidth: "90px"}}>No</button>
                                    </div>
                                    <p className='mt-5'> Have more questions? <Link to="#">Submit a request </Link> </p>
                                </div>
                            </div>

                            <div className="border-bottom  py-4">
                                <h6>Comments</h6>
                                <small className='mb-0'>0 comment</small>
                            </div>
                            <small className="pt-3 mb-5 d-block">Article is closed for comments.</small>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Videos