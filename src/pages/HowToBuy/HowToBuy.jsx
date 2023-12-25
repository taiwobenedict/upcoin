import React, { useContext } from 'react'
import { Hero, Section } from '../../Utilities'
import { UIContext } from '../../context/UIcontext'
import { wallets } from '../../store/wallets'
import DOMPurify from 'dompurify'

import "./HowToBuy.css"

function HowToBuy() {

    const { openAcc, handleAccordion, walletGuide, uploadGuide, bg } = useContext(UIContext)

    function renderHTML(htmlString) {
        const sanitizedHTML = DOMPurify.sanitize(htmlString);
        return `<div>${sanitizedHTML}</div>`;
      }
   


    return (
        <div id='howtobuy'>
            <Hero className="container" height={100} container={800}>
                <div className="text-light">
                    <h1 className="heading-xl"  data-aos="fade-up">The journey to an exciting opportunity</h1>
                    <p className="text-big bold"  data-aos="fade-up">Success comes from finding opportunities in problems. Are you ready to dive into the exciting world of cryptocurrencies? Here's your chance to be a part and participate in our thrilling presale for a shot at this incredible wealth builder.</p>

                </div>
            </Hero>

            <div className="buytoken-bg position-relative">
                <div className="overlay"></div>
                <Section name='buy-token' className="container" pd="100px 0">
                    <div className="buying-text">
                        <h1 className="bold">Obtain The SUP Token</h1>
                        <p>To start with, ensure you have a MetaMask wallet installed on your browser in order to CONNECT your wallet to the platform.</p>
                        <p>If you are purchasing on mobile, we recommend using Trust Wallet and connecting through the in-built browser.</p>
                        <p>Once you've connected your wallet, you'll be presented with 4 options with which you can purchase your tokens:</p>
                    </div>

                    <div className="accordion-slider">
                        <div className="accordion-group">
                            <div className="header" style={{ border: "none" }}>
                                <h4 className='pri-light-color'>01</h4>

                                <h4 className="heading text-left">
                                    BUY <span className="pri-light-color">SUP</span> WITH A CARD
                                </h4>
                                <div className="dropdown-btn" id='acc1' onClick={(e) => handleAccordion(e.target.id)}></div>
                            </div>

                            <div className={` content ${openAcc.acc1 && "open"}`}>
                                <div className="inner-content">
                                    <h2 className="heading text-left">
                                        BUY <span className="pri-light-color">SUP</span> WITH A CARD
                                    </h2>
                                    <p>Click the “Buy $UP with credit card“ button to buy $UP with your chosen credit card. You can use the four major credit card networks Mastercard, Visa, American Express, and Discover.</p>
                                    <button className="btn btn-primary mt-4">CONNECT WALLET</button>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-group">
                            <div className="header">
                                <h4 className="pri-light-color">02</h4>

                                <h4 className="heading text-left">
                                    BUY <span className="pri-light-color">ETH</span> WITH A CARD
                                </h4>
                                <div className="dropdown-btn" id='acc2' onClick={(e) => handleAccordion(e.target.id)}></div>
                            </div>

                            <div className={` content ${openAcc.acc2 && "open"}`}>
                                <div className="inner-content">
                                    <h2 className="heading text-left">
                                        Purchase <span className="pri-light-color">ETH</span> WITH A CARD
                                    </h2>
                                    <p>Click the “Buy ETH with Card” button to use Transak if you need to purchase ETH using your credit card, then swap the ETH for $UP. Make sure you have enough ETH left over to cover gas fees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-group">
                            <div className="header">
                                <h4 className="pri-light-color">03</h4>

                                <h4 className="heading text-left">
                                    BUY <span className="pri-light-color">$UP</span> WITH A ETH
                                </h4>
                                <div className="dropdown-btn" id='acc3' onClick={(e) => handleAccordion(e.target.id)}></div>
                            </div>

                            <div className={` content ${openAcc.acc3 && "open"}`}>
                                <div className="inner-content">
                                    <h2 className="heading text-left">
                                        BUY <span className="pri-light-color">SUP</span> WITH ETH
                                    </h2>
                                    <p>Once you have ETH in your wallet, click the “Buy $UP with ETH” button to swap ETH for $UP. Enter the amount of ETH you’d like to invest to see how many $UP tokens you will receive. Use the vesting slider to see additional bonuses you will receive (up to 67%) if you choose to lock your $UP tokens for a longer period.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-group">
                            <div className="header">
                                <h4 className="pri-light-color">04</h4>

                                <h4 className="heading text-left">
                                    Obtain <span className="pri-light-color">SUP</span> WITH USDT
                                </h4>
                                <div className="dropdown-btn" id='acc4' onClick={(e) => handleAccordion(e.target.id)}></div>
                            </div>

                            <div className={` content ${openAcc.acc4 && "open"}`}>
                                <div className="inner-content">
                                    <h2 className="heading text-left">
                                        BUY <span className="pri-light-color">SUP</span> WITH USDT
                                    </h2>
                                    <p>If you have USDT in your wallet, you can use the “Buy $UP with USDT” to swap USDT for $UP. Enter the amount of USDT you'd like to invest to see how many SUP tokens you will receive. Use the vesting slider to see additional bonuses you will receive (up to 67%) if you choose to lock your $UP tokens for a longer period. Your wallet provider will ask you to authorise Fight Out to access the USDT in your wallet. Once signed, confirm the final purchase transaction.</p>

                                </div>
                            </div>
                        </div>



                    </div>
                </Section>
            </div>

            <div style={{background: `url(${walletGuide.image}) center center/cover no-repeat`}} className='position-relative guide'>
                <div className="overlay"></div>
                <div className="text-center text-light guide-container container">
                    <div className='h-100 d-flex align-items-center justify-content-center'>
                        <div>
                            <h1 className="heading-lg bold">WELCOME TO THE HOW TO GUIDE</h1>
                            <p className="text-big">We have compiled detailed video guides to help you purchase $FGHT. <br /> Select an option below.</p>
                        </div>
                    </div>
                    <div className="wallets">
                        {
                            wallets.map((wallet, i) => (
                            <div className="wallet" onClick={()=> uploadGuide(wallet, `bg${[i + 1]}`)} key={i}>
                                <h6>{wallet.name}</h6>
                                <div className={`line ${bg[i] && "bg-light"}`}></div>
                            </div>
                            ))
                        }
                        
                    </div>

                </div>
            </div>

            <div className="pri-light-bg">
                <Section className="container" pd="100px 0">
                    <h1 className='bold heading-lg'>{walletGuide.heading}</h1>
                    <p className="text-big">{walletGuide.subheading}</p>

                    <div className="mt-5 pt-5">

                        {
                            walletGuide.topics.map((topic,i) => (
                            <div className="row mt-5" key={i}>
                                <div className="col-md-6 px-0 order-md-1">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                    <button className="btn text-primary btn-block text-left " type="button" data-toggle="collapse" data-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`}>
                                                        {topic.topic}
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id={`collapse${i}`} className="collapse transition" aria-labelledby={`heading${i}`} data-parent="#accordionExample">
                                                <div className="card-body transition text-dark" dangerouslySetInnerHTML={{__html: renderHTML(topic.content)}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 ${i % 2 === 0 && "order-md-2"}`}>
                                    <div className="wallet-image pri-bg" style={{background: `url(${topic.image}) top center/cover no-repeat`}}>
                                            
                                    </div>
                                </div>
                            </div>

                            ))
                        }
                    </div>
                    

                </Section>

            </div>


        </div>
    )
}

export default HowToBuy