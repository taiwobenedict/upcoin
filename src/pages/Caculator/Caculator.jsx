import { useState, useEffect } from 'react'
import { Hero, Section } from '../../Utilities'
import axios from 'axios'
import { BsArrowRepeat } from 'react-icons/bs'
import { currencies, cryptos } from '../../store'


import "./Caculator.css"

function Caculator() {


    return (
        <div id='caculator'>
            <Hero height={80} className={"container text-light"}>
                <h1 className="heading-lg"  data-aos="fade-up">SUP Crypto Calculator</h1>
                <h1 className='mt-3 bold'  data-aos="fade-up">BTC to USD Calculator</h1>

                <CryptoCalculator />
                <p className='mt-5'>* The prices displayed represent market exchange rates provided for informational and estimation purposes only.</p>
            </Hero>

            <div className="caculator-info position-relative text-light">
                <div className="overlay"></div>
                <Section pd={'100px 0'} className={"container"}>
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='bold'>The SUP <br />Cryptocurrency Calculator</h1>
                            <p>The exchange rates of cryptocurrencies can change rapidly, which is why you need a cryptocurrency converter handy. By using SUP's cryptocurrency calculator, you can instantly discover the real-time exchange rate of Bitcoin and to other cryptocurrencies. The SUP cryptocurrency calculator is the best to find the rate for converting ETH to USD.</p>
                            <h3 className='mt-4 bold'>How Does the SUP Cryptocurrency Calculator Work?</h3>
                            <p>The SUP cryptocurrency calculator allows you to convert between a range of currencies. Choose to convert ETH to USD or alternatively, to calculate the rates for on of the many currencies available within the SUP cryptocurrency converter.</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <div className='d-flex mb-3'>
                                    {
                                        cryptos.slice(0, 4).map((crypto, i) => (

                                            crypto.symbol === "BTC" ? 
                                            <div className="cal-badge" key={i}>
                                                <div className="badge">Bitcoion ({crypto.symbol})</div>
                                            </div>
                                            : crypto.symbol === "ETH" ?
                                            <div className="cal-badge" key={i}>
                                                <div className="badge">Ethereum ({crypto.symbol})</div>
                                            </div>
                                            :   <div className="cal-badge" key={i}>
                                                    <div className="badge">{crypto.symbol}</div>
                                                </div>
                                            
                                        ))
                                    }

                                </div>
                                <div className='d-flex  mb-3'>
                                    {
                                        cryptos.slice(4, 9).map((crypto, i) => (
                                            <div className="cal-badge" key={i}>
                                                <div className="badge">{crypto.symbol}</div>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className='d-flex  mb-3'>
                                    {
                                        cryptos.slice(9, 14).map((crypto, i) => (
                                            <div className="cal-badge" key={i}>
                                                <div className="badge">{crypto.symbol}</div>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className='d-flex  mb-3'>
                                    {
                                        cryptos.slice(14, -1).map((crypto, i) => (
                                            <div className="cal-badge" key={i}>
                                                <div className="badge">{crypto.symbol}</div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>


    )
}

export default Caculator


const CryptoCalculator = () => {
    const [cryptoPrice, setCryptoPrice] = useState(null);
    const [cryptoAmount, setCryptoAmount] = useState(1);
    const [currency, setCurrency] = useState('usd');
    const [crypto, setCrypto] = useState('bitcoin');
    const [convertToCrypto, setConvertToCrypto] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`
            );
            setCryptoPrice(response.data[crypto][currency]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line 
    }, [crypto, currency]);

    const handleCryptoChange = (e) => {
        setCrypto(e.target.value);
    };

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    const handleAmountChange = (e) => {
        const inputValue = e.target.value;
        // Check if the input is a positive number (including floating-point numbers)
        if (/^[+]?\d*\.?\d*$/.test(inputValue)) {
            setCryptoAmount(inputValue);
        }
    };

    const handleConvertToggle = () => {
        setConvertToCrypto(!convertToCrypto);
        setCurrency('usd');
        setCryptoAmount(1);
    };


    return (
        <>
            <div className='crypto-cal'>
                <div>
                    <label className='bold'>From</label>
                    <div className='cal-input'>
                        <input type="text" inputMode='numeric' value={cryptoAmount} onChange={handleAmountChange} min="0" />
                        {
                            convertToCrypto
                                ? <select onChange={handleCryptoChange} value={crypto}>
                                    {
                                        cryptos.map((crypto, i) => (<option key={i} value={crypto.id}>{crypto.symbol}</option>))
                                    }
                                    {/* Add more cryptocurrencies here */}
                                </select>
                                : <select onChange={handleCurrencyChange} value={currency}>
                                    {
                                        currencies.map((currency, i) => (<option key={i} value={currency.toLowerCase()}>{currency}</option>))
                                    }
                                    {/* Add more currencies here */}
                                </select>
                        }

                    </div>
                </div>

                <button onClick={handleConvertToggle} className='convert-btn'> < BsArrowRepeat className='convert-icon' /> </button>


                <span>
                    <label className='bold'>To</label>
                    <div className='cal-input justify-content-end'>
                        <input type="text" disabled />
                        {
                            convertToCrypto
                                ? <select onChange={handleCurrencyChange} value={currency}>
                                    {
                                        currencies.map((currency, i) => (<option key={i} value={currency.toLowerCase()}>{currency}</option>))
                                    }
                                    {/* Add more currencies here */}
                                </select>
                                : <select onChange={handleCryptoChange} value={crypto}>
                                    {
                                        cryptos.map((crypto, i) => (<option key={i} value={crypto.id}>{crypto.symbol}</option>))
                                    }
                                    {/* Add more cryptocurrencies here */}
                                </select>
                        }

                    </div>
                </span>

            </div>

            <h2 className='result'>
                {convertToCrypto
                    ? `${cryptoAmount} ${crypto} = ${cryptoAmount * cryptoPrice} ${currency}`
                    : `${cryptoAmount} ${currency} = ${cryptoAmount / cryptoPrice} ${crypto}`}
            </h2>
        </>
    );
};


