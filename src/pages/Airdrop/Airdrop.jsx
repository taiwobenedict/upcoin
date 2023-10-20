import React from 'react'
import { Hero, Section } from "../../Utilities"


import "./Airdrop.css"
function Airdrop() {
  return (
    <div id='airdrop'>
      <Hero className="container" height={100} container={1000}>
        <div className='text-light' data-aos="fade-up">
          <h1 className="heading-lg bold">Airdrop</h1>
          <p className="text-big bold">Available tokens ⇒ 11,260,000 tokens
            All you need to do here is to complete quick tasks by engaging our social media channels and get rewarded for it with supcoins.
          </p>
        </div>
      </Hero>

      <div className="pri-light-bg">
        <Section pd="100px 0" className="container">
          <h1 className='mb-5'>Airdrop System 2 - $90,000 Airdrop <br /> Social media campaign System</h1>

          <div className="row">
            <div className="col-md-6">
              <h3>Available tokens ⇒ 11,260,000 tokens</h3>
              <p>All you need to do here is to complete quick tasks by engaging our social media channels and get rewarded for it with supcoins.</p>
              <p>Airdrop Allocation ⇒ 11,260,000 tokens (According to the tokenomics)
                Duration ⇒ (1 - 4 weeks) {`{this can be altered to suit any marketing style}`}</p>
              <p>Goal ⇒ To help build our social media communities and create massive buzz about Supelle
              </p>
              <p>Participants (Target) ⇒ 2500 participants or more (can be increased if more tokens are allocated for airdrops)</p>
              <p>Social Media Communities (Target)⇒ Telegram, Twitter, Discord</p>
              <p>We are adopting a model that will incentivize people to carry out the following activities;
              </p>
              <ol>
                <li>Join the communities (Telegram, twitter, Discord) ONLY
                  <ul className="alph-style">
                    <li>Follow Twitter page
                      <ul className="rom-style">
                        <li>Users are required to submit their twitter username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                    <li>Join Telegram group
                      <ul className="rom-style">
                        <li>Users are required to submit their telegram username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                    <li>Join Telegram announcement channel
                      <ul className="rom-style">
                        <li>Users are required to submit their telegram username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Interaction with Social media contents
                  <ul className="alph-style">
                    <li>Like Twitter pinned post
                      <ul className="rom-style">
                        <li>Users are required to submit the twitter username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                    <li>Share Twitter pinned post
                      <ul className="rom-style">
                        <li>Users are required to submit the twitter username/handles after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                    <li >Tweet using designated # hashtags
                      <ul className="rom-style">
                        <li>Users are required to submit the tweet link after this action has been fulfilled for verification</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="col-md-6 ">
              <div className='pri-bg p-5 h-100'>

              image here
              </div>
            </div>
          </div>

        </Section>
      </div>

    </div>
  )
}

export default Airdrop