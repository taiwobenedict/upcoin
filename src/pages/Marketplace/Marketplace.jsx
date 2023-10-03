import React from 'react'
import { Hero, Button, Section } from "../../Utilities/index"
import { FaExchangeAlt } from 'react-icons/fa'

import "./Marketplace.css"

function Marketplace() {
    return (
        <div id="marketplace">
            <Hero height={75} className={"container"}>
                <h1 className="heading-lg">Our markets</h1>
                <p className="text-big mt-2">Security tokens and Cryptocurrencies all in one place</p>
                <div className="d-flex flex-wrap mt-5">
                    <Button type={"block"} color={"light"} className="mr-4">Connect</Button>
                    <Button type={"inline"} color={"light"}>Sign In</Button>
                </div>

            </Hero>

            {/* Marketplace Table */}
            <div id="market-table">
                <Section pd="80px 0">
                    <div className="container">
                        <div className="badges d-flex mb-3">
                            <div className="badge">All</div>
                            <div className="badge">Crypto</div>
                            <div className="badge">Security tokens</div>
                        </div>

                        <table className="table table-hover ">
                            <thead className='pri-bg'>
                                <tr>
                                    <th scope="col">Market</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Last 24h</th>
                                    <th scope="col">24h Vol</th>
                                    <th scope="col">24h High</th>
                                    <th scope="col">24h Low</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-danger'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-success'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-success'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-danger'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-success'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-danger'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-success'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-success'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-success'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-danger'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-danger'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-success'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-danger'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                                <tr>
                                    <td>SUP <FaExchangeAlt /> USD </td>
                                    <td>0.45 USD</td>
                                    <td className='text-success'>3.95%</td>
                                    <td>22,924.8089992 <span>SUP</span></td>
                                    <td>0.56 USD</td>
                                    <td>0.49 USD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* Article */}
                <Section name={"aritcle"}>


                </Section>
            </div>
        </div>
    )
}


export default Marketplace