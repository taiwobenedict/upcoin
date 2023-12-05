import React, { useEffect, useRef } from 'react'
import { Hero, Button } from "../../Utilities/index"

import './Marketplace.css'

function Marketplace() {
    const trading = useRef()
    useEffect(() => {
        document.title = "OUr Markets"
        const fetchData = async () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';

            script.innerHTML = JSON.stringify({
                width: '100%',
                height: '800',
                defaultColumn: 'overview',
                screener_type: 'crypto_mkt',
                displayCurrency: 'USD',
                colorTheme: 'light',
                locale: 'en',
            });

            trading.current.appendChild(script);

            return () => {
                trading.current.removeChild(script);
            };
        };

        fetchData();
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
            <div className="container my-5">
                <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget" ref={trading}></div>
                    <div className="tradingview-widget-copyright">
               
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Marketplace


















