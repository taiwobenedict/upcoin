import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi'
import DOMPurify from 'dompurify'
import updates from '../../store/updates'
import { Hero, Section } from '../../Utilities'
import { UIContext } from '../../context/UIcontext'
import slugify from 'slugify'

import "./SupUpdates.css"

function Updates() {
   const {screen, updateDetails,  handleUpdates, setScreen } = useContext(UIContext)

    const { hash } = useLocation();

    useEffect(() => {
        document.title = "SUP updates"
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);


    return (
        <div id='legals'>
            <Hero height={40} className="container">
                <h1 className="heading-lg text-light">SUP updates</h1>
            </Hero>

            {
                screen === "legalDetails"
                    ?
                    <UpdateDetails update={updateDetails} setScreen={setScreen} />
                    : <div>


                        <div className="p py-3">
                            <div className="container py-4">
                                <div className="row">
                                    {
                                        updates.map((update, i) => (
                                            <div className="col-md-3 my-3" key={i}>
                                                <div className="card" style={{ border: "none" }}>
                                                    <div className="card-body">
                                                        <h6 className="card-title bold">{update.heading}</h6>
                                                        <small className="card-text">{update.caption}</small>

                                                        <small className="mt-4 text-primary bold d-block" style={{ cursor: "pointer" }} onClick={() =>  handleUpdates(update)}>READ MORE <BiChevronsRight /> </small>
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



export default Updates



function UpdateDetails({ update, setScreen }) {
    
    const {  handleUpdates } = useContext(UIContext)


    function renderHTML(htmlString) {
        const sanitizedHTML = DOMPurify.sanitize(htmlString);
        return `<div>${sanitizedHTML}</div>`;
    }

    return (




        <Section pd="100px 0" name={slugify(update.heading)}>
            <div className="container">
                <nav className='breadcrumb-container'>
                    <ol className="breadcrumb bg-transparent">
                        <li className="breadcrumb-item"><Link onClick={() => setScreen('legalHeadings')}> <BiChevronsLeft /> Back</Link></li>
                    </ol>
                </nav>

            </div>
            <div className="container" >

                <div className="row">
                    <ul className="col-md-3 px-0">
                        {
                            updates.map((update,i) => (
                                <Link className='nav-link' key={i} onClick={()=>  handleUpdates(update)}>{update.heading}</Link>
                            ))
                        }
                    </ul>

                    <div className="col-md-9 pl-4 border-left">
                        <h2 className='bold mb-5'>{update.heading}</h2>
                        <div dangerouslySetInnerHTML={{ __html: renderHTML(update.body) }}></div>
                    </div>
                </div>
            </div>
        </Section>

    )

}

