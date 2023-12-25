import React from 'react'

import "./Learn.css"
import { Hero, Section } from '../../Utilities'
import { FiArrowUpRight } from "react-icons/fi"

import yours from "../../images/Learn/yours.png"
import protect from "../../images/Learn/protect.png"
import control from "../../images/Learn/control.png"
import payments from "../../images/Learn/payment.png"
import open from "../../images/Learn/open.png"
import WhatSup from "../../images/Learn/WhatSup.png"
import DeFi from "../../images/Learn/DeFi.png"
import asset from "../../images/Learn/asset.png"
import shitcoin from "../../images/Learn/shitcoin.png"
import governance from "../../images/Learn/governance.png"
import stablecoin from "../../images/Learn/stablecoin.png"
import collectibles from "../../images/Learn/collectibles.jpg"


import { Link } from 'react-router-dom'


function Learn() {
    return (
        <div id='learn'>
            <Hero height={75}>
                <div className="container text-white">
                    <h1 className='heading-lg'>Digital Currency</h1>
                    <h2 className='bold'>Global reach, fast, secure, and borderless transctions</h2>

                </div>

            </Hero>

            <Section mt={30} className="mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>WHAT IS SUPCOIN ($UP)?</p>
                            <h1 className='bold'>SUP is The Future of Generational Wealth</h1>
                            <p className="mb-3 text-big">$UP is a digital currency. $UP is global money.</p>
                            <p className='text-big'>$UP is the currency of Supelle Marketplace.</p>

                            <div className="learn-box text-center mt-5">
                                <p style={{ fontSize: "14px" }}>CURRENT SUP PRICE (USD)</p>
                                <h1>Loading...</h1>
                                <div className="d-flex align-items-center justify-content-center">
                                    <h3 className='mr-3'>0.00%<FiArrowUpRight /></h3>
                                    <p style={{ fontSize: "14px" }} className='mb-0'>(LAST HOUR)</p>

                                </div>
                            </div>

                            <button className="btn btn-primary mt-4">GEt SUP</button>
                        </div>
                        <div className="col-md-6">
                            <div className="learn-img">
                            </div>
                        </div>
                    </div>

                </div>
            </Section>



            <Section pd="100px 0" mt={30}>
                <div className="container">
                    <p>Digital currencies open up a world of limitless potential for innovation and economic growth <br />
                        Supcoin is projected to take the lead among cryptocurrencies within its exclusive marketplace. <br /> If you are new to crypto, here's how SUP differs from traditional money.</p>


                    <div className="mt-5  mx-0 px-0">
                        <div className="row mb-4 mx-0 px-0">
                            <div className="col-md-4">
                                <div className="learn-card">
                                    <div className="learn-card-image">
                                        <img src={yours} alt="" className='w-100' />
                                    </div>
                                    <h4 className="bold">It’s truly yours</h4>
                                    <p className="mt-3">With SUP, you get to be your own bank. No third parties are required; you can manage your own money using your wallet as proof of ownership.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="learn-card">
                                    <div className="learn-card-image">
                                        <img src={protect} alt="" className='w-100' />
                                    </div>
                                    <h4 className="bold">Protected by cryptography</h4>
                                    <p className="mt-3">Digital currencies may be novel, but they are protected by tested cryptography. This safeguards your wallet, SUP, and transactions.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="learn-card">
                                    <div className="learn-card-image">
                                        <img src={payments} alt="" className='w-100' />
                                    </div>
                                    <h4 className="bold">Peer-to-peer payments</h4>
                                    <p className="mt-3">You can transact with SUP without using an intermediary provider like a bank. It’s similar to physically exchanging money, but you can do it safely with anybody, at any time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4  mx-0 px-0">
                            <div className="col-md-4">
                                <div className="learn-card">
                                    <div className="learn-card-image">
                                        <img src={control} alt="" className='w-100' />
                                    </div>
                                    <h4 className="bold">No centralized control</h4>
                                    <p className="mt-3">SUP is decentralized and global. No business or bank has the authority to decide to increase the supply of SUP or alter its conditions of use.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="learn-card">
                                    <div className="learn-card-image">
                                        <img src={open} alt="" className='w-100' />
                                    </div>
                                    <h4 className="bold">Open to everyone</h4>
                                    <p className="mt-3">To transact with SUP, all you need is a wallet and an internet connection. Accepting payments does not require you to have access to a bank account.</p>
                                </div>
                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>

                        <div className="col-lg-8 mx-auto mt-5">
                            <div className="want">
                                <p className='mb-0'>Need to purchase some Supcoin? Supcoin is also known as Supelle coin, that is where the “Sup” is derived from. Supelle is the heart of the coin, and gives support and some value to the coin.  <Link to="/about">Learn more here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </Section>

            <Section name={"welcome"} mt={50} className="container" pd="20px 0 100px 0">
                <div className="text-center col-sm-8 mx-auto" data-aos="zoom-in">
                    <h1 className="pri-color">What sets SUP apart?</h1>
                    <h3 className='mt-4 heading-sm'>SUP is unique, and here is why.</h3>
                    <p className=''>SUP is unique, and here is why. Many different digital currencies and tokens that exist, yet Supcoin is the only of it’s kind that is backed up by the global marketplace.</p>
                </div>
            </Section>

            <div className="container-lg">

                <Section pd="100px 0" >
                    <h3 className="bold">What is the relationship between blockchain and digital currency?</h3>
                    <p>Blockchain technology serves as the underlying decentralized log or ledger that enables secure and transparent transactions using digital currencies. This technology provides trust, permanence, and accountability to the digital currency ecosystem.</p>
                    <p>Supcoin leverages the Ethereum blockchain, an open-source  blockchain platform enabling the development and execution of distributed  applications and smart contracts.</p>
                    <p>With the Ethereum network functioning as a peer-to-peer network, users can  engage in secure and transparent transactions without the risk of fraud, control,  downtime, or interference from external parties.</p>
                    <p><Link to="#">Learn more about Supcoin.</Link></p>
                    <div className="row shadow align-items-center">
                        <div className="col-md-4 p-4 learn-gradient">
                            <div className="whatsup w-100">
                                <img src={WhatSup} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-md-8 pl-5">
                            <h2 className="bold">What is SUP?</h2>
                            <p>Supcoin serves as a payment system and currency that allows Supelle not just to be a global marketplace but a global decentralized marketplace.</p>

                        </div>
                    </div>
                </Section>

                <Section pd="100px 0">
                    <h3 className="bold">What are nodes?</h3>
                    <p>Validators or nodes are the record-keepers responsible for validating and verifying transactions and adding them to the blockchain ledger. They guarantee that the digital currency ecosystem is safe and free of fraud or cheating.</p>
                    <p>Nodes receive a small amount of digital currency as an incentive or compensation for their efforts.</p>
                    <div className="row shadow align-items-center">
                        <div className="col-md-4 p-4 learn-gradient">
                            <div className="whatsup w-100">
                                <img src={DeFi} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-md-8 pl-5">
                            <h2 className="bold">What is DeFi?</h2>
                            <p>DeFi is a decentralized financial system that is built on a blockchain network. It utilizes smart contracts to enable the provision of traditional financial services in a decentralized and direct manner.</p>
                            <p>DeFi enables users to access financial services, such as lending, borrowing, and trading digital currencies, without relying on intermediaries like banks or brokers.</p>

                        </div>
                    </div>
                </Section>

                <Section pd="80px 0">
                    <h3 className="bold">Uses for digital currency are multiplying daily!</h3>
                    <p className='my-3'>Because of their adaptability, developers have infinite options for customizing digital assets.</p>
                    <p>The uses of digital currency have multiplied exponentially since their genesis in 2009. Here are a few things you can do with digital currency today:</p>
                    <ul className="mt-3">
                        <li>Peer-to-peer transactions - transact digitally without a bank.</li>
                        <li>Instant payments - make safe and convenient payments for anything!</li>
                        <li>Smart investments - buy, sell, trade, and profit with cryptocurrencies.</li>
                        <li>Cross-border transactions - send money fast to anyone, anywhere, and with no limitations.</li>
                    </ul>
                </Section>

            </div>

            <Section mt={100} className="container">
                <div className="learn-asset learn-gradient">
                    <div className="row align-items-center">
                        <div className="col-md-8 pr-5">
                            <h1 className="bold">How to obtain digital assets</h1>
                            <p className='text-big mt-4'>Although you can obtain digital currency from a wallet or an exchange, different nations have varying regulations guiding this. We help you look into the services that permit you to purchase digital currency.</p>
                            <button className="btn btn-block-pri mt-4">GEt SUP</button>
                        </div>
                        <div className="col-md-4">
                            <img src={asset} alt="" className="w-100" />
                        </div>
                    </div>

                </div>

            </Section>


            <Section pd="80px 0" mt={80} className='container'>
                <div className="row">
                    <div className="col-md-7">
                        <h3 className="bold">What is the value of digital currency?</h3>
                        <p className='my-3'>Different people value digital assets for different reasons. But one common benefit digital currency provides to every person is financial inclusion without the need for traditional banking infrastructure.</p>
                        <p>Digital currencies guarantee security and privacy, enable faster and more cost-efficient transactions, and transcend geographical boundaries.</p>
                        <p>These benefits are fostering innovation every day and empowering individuals to have more control over their financial assets. On a blockchain such as Ethereum, anyone can create new types of assets and trade them. They are referred to as “tokens”. Traditional currency, real estate, works of art, and even people themselves have all been tokenized!</p>
                        <p>There are thousands of tokens in existence today, some more valuable and useful than others. New tokens are continually being created by developers to offer up new opportunities and marketplaces. In this way, digital currencies are enabling greater economic participation and economic growth on a global scale.</p>
                    </div>
                    <div className="col-md-5"></div>
                </div>

            </Section>
            <Section pd="80px 0" mt={70} className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="bold">There are other cryptos (retitle)</h3>
                        <p className='my-3'>In Ethereum, anyone can create new types of assets and trade them. They are referred to as “tokens”. Traditional currencies, real estate, works of art, and even people themselves have all been tokenized!</p>
                        <p>There are thousands of tokens in existence today, some more valuable and useful than others. New tokens are continually being created by developers to offer up new opportunities and marketplaces. In this way, digital currencies are enabling greater economic participation and economic growth on a global scale.</p>

                    </div>
                    <div className="col-md-6">
                        <h3 className="bold">Popular types of tokens</h3>
                        <div className="mt-4">
                            <div className="d-flex justify-content-center">
                                <div className="token-mg">
                                    <img src={stablecoin} alt="" />
                                </div>
                                <div>
                                    <p className="text-big mb-1">Stablecoin</p>
                                    <p>Tokens that have the same value as traditional money, such as the US dollar. This fixes the issue of volatility common with several cryptocurrencies.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <div className="token-mg">
                                    <img src={governance} alt="" />
                                </div>
                                <div>
                                    <p className="text-big mb-1">Governance tokens</p>
                                    <p>The governance token allows any stakeholder to make proposals with good ideas on how our platform can perform better. Voting strength is based on the number of tokens staked.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <div className="token-mg">
                                    <div>
                                        <img src={shitcoin} alt="" />

                                    </div>
                                </div>
                                <div>
                                    <p className="text-big mb-1">Sh*t coins</p>
                                    <p>Anyone can create new tokens because the process is simple, including those with malevolent or misinformed motives. Make sure to always do your homework and due diligence before buying tokens! Protect your investments through informed decisions.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <div className="token-mg">
                                    <img src={collectibles} alt="" />
                                </div>
                                <div>
                                    <p className="text-big mb-1">Collectible tokens</p>
                                    <p>Tokens that stand in for a unique asset, a piece of digital art, or a valuable game object. Frequently referred to as non-fungible tokens (NFTs).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Section>

        </div>
    )
}

export default Learn