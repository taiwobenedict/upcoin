import React, { useState, useEffect } from 'react'
import { Hero, Button, Section } from "../../Utilities/index"
// import { FaExchangeAlt } from 'react-icons/fa';
import axios from 'axios';

import "./Marketplace.css"
import { MARKET_API_KEY } from '../../utils';

function Marketplace() {

    const [marketCapData, setMarketCapData] = useState(null);
    
    useEffect(() => {
        axios.get('https://api.coinranking.com/v2/stats', {
        headers: {
            'x-access-token': MARKET_API_KEY // Replace with your Coinranking API key
            }
            })
            .then(response => {
            console.log(response.data);
            const {data} = response.data;
            setMarketCapData(data);
            })
            .catch(error => {
            console.error('Error:', error);
            // Handle errors here
            });

    }, []);

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
                            {marketCapData ? ( 
                            <tbody>
                                {/* {table} */}
                                <tr>
                                    <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                                <tr>
                                <td>{marketCapData.totalMarkets}</td>
                                    <td>${marketCapData.totalMarketCap}</td>
                                    <td className='text-danger'>${marketCapData.total24hVolume}</td>
                                    <td>${marketCapData.total24hVolume}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                    <td>{marketCapData.referenceCurrencyRate}</td>
                                </tr>
                            </tbody> 
                            ) : ( 
                                <p>Loading market data....</p>
                            )}
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