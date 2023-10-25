import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi'
import DOMPurify from 'dompurify'
import legals from '../../store/legals'
import { Hero, Section } from '../../Utilities'
import { UIContext } from '../../context/UIcontext'
import slugify from 'slugify'

function Legal() {
   const {screen, details, handleLegal, setScreen } = useContext(UIContext)

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);


    return (
        <div id='legals'>
            <Hero height={60} className="container">
                <h1 className="heading-lg text-light">SUP Legals</h1>
            </Hero>

            {
                screen === "legalDetails"
                    ?
                    <LegalDetails legal={details} setScreen={setScreen} />
                    : <div>


                        <div className="p py-3">
                            <div className="container py-4">
                                <div className="row">
                                    {
                                        legals.map((legal, i) => (
                                            <div className="col-md-4 my-3" key={i}>
                                                <div className="card" style={{ border: "none" }}>
                                                    <div className="card-body">
                                                        <h6 className="card-title bold">{legal.heading}</h6>
                                                        <small className="card-text">{legal.caption}</small>

                                                        <small className="mt-4 text-primary bold d-block" style={{ cursor: "pointer" }} onClick={() => handleLegal(legal)}>READ MORE <BiChevronsRight /> </small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                        </div>

                    </div>
            }
        </div>

    )
}



export default Legal



function LegalDetails({ legal, setScreen }) {



    function renderHTML(htmlString) {
        const sanitizedHTML = DOMPurify.sanitize(htmlString);
        return `<div>${sanitizedHTML}</div>`;
    }

    return (




        <Section pd="100px 0" name={slugify(legal.heading)}>
            <div className="container" style={{ position: "sticky", top: "100px" }}>
                <nav className='breadcrumb-container'>
                    <ol className="breadcrumb bg-transparent">
                        <li className="breadcrumb-item"><Link onClick={() => setScreen('legalHeadings')}> <BiChevronsLeft /> Back</Link></li>
                    </ol>
                </nav>

            </div>
            <div className="container-lg" >
                <h1 className='text-center bold mb-5'>{legal.heading}</h1>
                <div dangerouslySetInnerHTML={{ __html: renderHTML(legal.body) }}></div>
            </div>
        </Section>

    )

}

