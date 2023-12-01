import React, { useState , useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import coin from "../../../images/roadmap/coin.png"
import { faqs } from '../../../store/faqs'
import DOMPurify from 'dompurify'


import "./Component.css"
import slugify from 'slugify'

function Faqs() {
    const [screen, setScreen] = useState('faqHeadings')
    const [details, setDetails] = useState(null)
    const navigate = useNavigate()


    const handleFAQs = (faq) => {
        setDetails(faq)
        setScreen("faqDetails")
        navigate(`/support/faqs#${slugify(faq.heading)}`)
    }

    useEffect(() => {
        const handleBackButton = () => {
            setScreen("faqHeadings")
        }
       return window.addEventListener('popstate', handleBackButton);
    }, []);


    return (
        <>
            {
                screen === "faqDetails"
                    ?
                    <FaqDetails faq={details} setScreen={setScreen} />
                    : <div id='faqs'>
                        <div className="faq-hero position-relative">
                            <div className="overlay"></div>
                            
                            <div className='position-relative d-flex hero-faqs justify-content-center align-items-center '>
                                <form action="" className="search">
                                    <BsSearch className='search-icon' />
                                    <input type="search" name="" className='search-videos w-100' placeholder='Search' id="" />
                                </form>
                            </div>

                        </div>

                        <div className="pri-bg py-3">
                            <div className="container-lg py-4 faqs-headings">
                                <div className="row">
                                    {
                                        faqs.map((faq, i) => (
                                            <div className="col-md-4 my-3" key={i}><button className="btn btn-outline-light btn-block py-3" onClick={() => handleFAQs(faq)}>{faq.heading}</button></div>
                                        ))
                                    }
                                </div>

                            </div>

                        </div>

                    </div>
            }
        </>

    )
}



export default Faqs



function FaqDetails({ faq, setScreen }) {


    const [eachFaq, setEachFaq] = useState({
        question: faq.questions[0].question,
        answer: faq.questions[0].answer,
    })


    const handleFaqDetails = (detail) => {
        setEachFaq(detail)

    }

    function renderHTML(htmlString) {
        const sanitizedHTML = DOMPurify.sanitize(htmlString);
        return `<div>${sanitizedHTML}</div>`;
    }

    return (

        <div className='pri-bg videos-page'>
            <div className="container-lg">
                <div className="d-flex justify-content-between align-items-center">
                    <nav className='breadcrumb-container'>
                        <ol className="breadcrumb bg-transparent text-light">
                            <li className="breadcrumb-item"><Link className='  text-light' to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link className='  text-light' onClick={() => setScreen('faqHeadings')}>Back</Link></li>
                        </ol>
                    </nav>
                    <div>
                        <form action="" className="search">
                            <BsSearch className='search-icon' />
                            <input type="search" name="" className='search-videos w-100' placeholder='Search' id="" />
                        </form>
                    </div>
                </div>

                <div className="support-videos mt-5">
                    <div className="row">
                        <div className="col-md-3 pl-0">
                            <div className=' position-sticky pr-3'>
                                <h6>Articles is this section</h6>
                                {
                                    faq.questions.map((question, i) => (
                                        <button style={{ border: "none" }} className={`btn btn-outline-light text-left ${question.question === eachFaq.question && "active"}  mb-3`} onClick={() => handleFaqDetails(question)} key={i}>{question.question}</button>
                                    ))
                                }

                            </div>

                        </div>
                        <div className="col-md-9 ">
                            <div>

                                <h3 className='bold mb-4'>{faq.subHeading}</h3>
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
                                    <div dangerouslySetInnerHTML={{ __html: renderHTML(eachFaq.answer) }}></div>

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
                                            <button className="btn btn-outline-light mr-3" style={{ minWidth: "90px" }}>Yes</button>
                                            <button className="btn btn-outline-light" style={{ minWidth: "90px" }}>No</button>
                                        </div>
                                        <p className='mt-5'> Have more questions? <Link to="#">Submit a request </Link> </p>
                                    </div>
                                </div>

                                <div className="border-bottom  py-4">
                                    <h6>Comments</h6>
                                    <small className='mb-0'>0 comment</small>
                                </div>
                            </div>
                            <small className="pt-3 mb-5 d-block">Article is closed for comments.</small>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}