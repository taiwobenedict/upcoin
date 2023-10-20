import React from 'react'
import { Button, Hero, Section } from '../../Utilities'
import { FaArrowUp } from 'react-icons/fa'
// import { AiFillApple } from 'react-icons/ai'
// import { BiLogoPlayStore } from 'react-icons/bi'

import "./Crypto.css"
import { Link } from 'react-router-dom'

function Crypto() {
  return (
    <div id='crypto'>
      <Hero height={100} className={'container align-items-center text-white'}>
        <h1 className="heading-lg bold" data-aos="fade-up">Supelle:</h1>
        <h1 className="heading-lg bold" data-aos="fade-up">Your Time Is NOW!</h1>
        <p className="text-big" data-aos="fade-up">Join a diverse, innovative market for freelancers and financial futurists powered by <br /> thoroughly vetted cryptocurrencies.</p>
        <div className="d-flex flex-wrap mt-5">
          <Button type={"block"} color={"light"} className="mr-4">Connect</Button>
          <Button type={"block"} color={"light"}> Log in</Button>
        </div>
      </Hero>

      <div className="position-relative">
        <Section name="trade" className="text-light container" pd="100px">
          <div className="overlay"></div>
          <div className="container-lg mx-0 position-relative">
            <h1 className='bold mb-4'>Trade. Build. Trade Again.</h1>
            <p className="text-big">Supelle offers a valuable selection of ERC-20 and utility tokens and crypto assets. You can trade our tokens against fiat, payment tokens, stablecoins, and much more on our completely compliant platform.</p>
            <Link to="#" className='mt-4 text-warning'>Browse Our Listing <FaArrowUp className='ml-2 ' style={{ transform: "rotate(30deg)" }} /></Link>
          </div>
            <div className="container-lg mt-5">
              <div className="row mb-5 align-items-center">
                <div className="col-md-4">
                  <div className="trade-image pri-light-bg">
                    <img src="" alt="" className="w-100" />
                    image here sir
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="trade-text">
                    <h2 className="bold">Inclusivity Above All</h2>
                    <p>Supcoin is completely changing the game in DeFi and freelancing. For years, we have worked to build a functional and inclusive environment that adopts globally required standards and guarantees access to everyone.</p>
                  </div>
                </div>
              </div>

              <div className="row mb-5 align-items-center">
                <div className="col-md-4">
                  <div className="trade-image pri-light-bg">
                    <img src="" alt="" className="w-100" />
                    image here sir
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="trade-text">
                    <h2 className="bold">Transact With Confidence</h2>
                    <p>Everything you do on Supelle is 100% safe. Fast transactions, swift credits, and zero risk on your investment.</p>
                  </div>
                </div>
              </div>

              <div className="row mb-5 align-items-center">
                <div className="col-md-4">
                  <div className="trade-image pri-light-bg">
                    <img src="" alt="" className="w-100" />
                    image here sir
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="trade-text">
                    <h2 className="bold">Cutting-edge Trading Tool</h2>
                    <p>You get to have your eye on everything. Supported by specialized analysis tools and instant reports to continuously track and oversee your accounts.</p>
                  </div>
                </div>
              </div>

            </div>
        </Section>

      </div>
    </div>
  )
}

export default Crypto