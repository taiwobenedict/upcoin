import { useContext} from 'react'
import krithen from "../../images/about/krithen.jpeg"
import tech from "../../images/about/tech.jpeg"
import robot from "../../images/about/robot.jpeg"
import TeamModal from '../../components/TeamModal'
import { UIContext } from '../../context/UIcontext'
import { FaInfo, FaLink } from 'react-icons/fa'
import { Button, Hero, Section } from '../../Utilities'
import { Link } from 'react-router-dom'
import { teamMembers } from '../../store'

import "./About.css"

function About() {

    const { handleModal, setModal } = useContext(UIContext)
  

    return (
        <div id='about'>
            <Hero container={800} className={'text-light container'} height={75}>
                <h1 className="heading-md bold" data-aos="fade-up">We bring communities together and empower them through financial innovation</h1>
                <p className="text-big bold mt-4" data-aos="fade-up">We forge long-term partnerships with our communities by ensuring high standard products, competitive pricing and excellent customer support</p>

            </Hero>


            <div className="pri-light-bg">
                <Section name="supelle-info" center={true} pd="80px 0">
                    <div className="container">
                        <div >
                            <div className="text-light text-center py-5 mx-auto">
                                <h1 className="heading-md bold mb-4">What is Supelle?</h1>
                                <p className="">
                                    Supelle is a global marketplace that serves as an umbrella. Where we provide work opportunities for freelancers and offer solutions to individuals and businesses’ alike. This innovative platform is the present and future of global connectivity and collaboration. We offer essential support for freelancers' success and deliver top-notch customer support to clients.
                                </p>

                                <p>
                                    This platform fosters a sense of community and provides educational programs that includes online coaching and masterclasses for freelancers to connect and work effectively together. We also understand the challenges users face when working on projects, and we strive to make the experience seamless and efficient as possible. Supelle is pioneering, educational, and opportunistic, with a philosophy centered on elevating people’s lives and providing opportunities to all.
                                    Supelle is a one-stop online marketplace that links freelancers and independent contractors with clients or employers. We’ve built a strong digital community with a booming digital economy by offering bold new ways for freelancers and creators to earn online.
                                </p>

                            </div>

                        </div>
                    </div>
                </Section>

            </div>

            <Section name="supcoin-info" center={true} className="text-dark" pd="80px 0">
                <div className="container">
                    <div >
                        <div className="text-center py-5 mx-auto">
                            <h1 className="heading-md bold mb-4">What is Supcoin SUP? </h1>
                            <h3>Supcoin is the official cryptocurrency of the Supelle Global Marketplace.</h3>
                            <p className="">
                                Supelle and Supcoin pioneer together like a married duo, synergistically complementing each other to generate value and prosperity for their forward-thinking investors. Supcoin serves as a payment system and currency that allows Supelle not just to be a global marketplace but a global decentralized marketplace. This allows Supelle not to be bound by governmental restrictions or payment limitations because it will operate in a decentralized autonomous organization. This means that freelancers and clients have unparalleled flexibility and freedom to work together from anywhere in the world, in any currency they choose.
                            </p>

                            <p>
                                One of the key advantages of an Initial Coin Offering (ICO) over an Initial Public Offering (IPO). ICOs are typically less regulated than IPOs. In contrast, an ICO is a crowdfunding mechanism through which a company raises funds by offering digital tokens or coins to investors. ICO allows companies to raise funds more quickly and with fewer regulatory hurdles. ICOs can be conducted globally, allowing companies to reach a wider pool of potential investors.

                            </p>
                            <p>
                                Additionally, because ICOs are typically conducted using digital tokens or coins, there may be challenges in valuing these assets and determining their market liquidity.
                            </p>
                            <p>
                                While it is possible for a company to raise funds through an ICO instead of an IPO, overall, while an ICO can be a viable alternative to an IPO for some companies, it is important for companies to carefully weigh the advantages and disadvantages of each option and seek professional advice before making a decision. An IPO is the process by which a company offers shares of its stock to the public, typically through a stock exchange.
                            </p>

                            <p className='text-left'>Benefits of Supelle:</p>
                            <ul className='text-left'>
                                <li>Access to a wider vetted pool of talent, ensuring quality work</li>
                                <li>Flexible work schedules</li>
                                <li>Competitive rates</li>
                                <li>Ease of payment</li>
                                <li>Lower and fewer payment fee</li>
                                <li>Improved work efficiency</li>
                                <li>Global accessibility</li>
                                <li>Effective innovation: robust rating system and networking opportunities for freelancers, self-employed individuals, and entrepreneurs; milestone and project auditing.</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </Section>

            <Section name={"info"} center={true} container={1200} pd="100px 0" >
                <div className="info-container">

                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="info-image w-100 mr-auto">
                                <img src={krithen} alt={krithen} className='w-100' />
                            </div>
                        </div>
                        <div className="col-md-8 w-100">
                            <h1 className="bold text-center my-5">A message from our CEO, Kristen Bragoli</h1>
                            <p className="">My vision of shaping capital markets and their evolution from the traditional world to a digital economy is coming to life.
                                The SUP Token was the first and significant milestone  the first SEC-registered security token to IPO on the blockchain.
                                Supcoin is another important step in our extraordinary journey, presenting the world's first fully regulated platform that merges investing and trading in security tokens, cryptocurrencies and capital raise services all in ONE place. SUP provides a safe and secure path for responsible trading on multiple asset classes.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="pri-bg">
                <div className="row pri-bg align-items-center  justify-content-between">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-center col-md-9 mx-auto">
                            <h2 className="heading-md">We Believe In Transparency</h2>
                            <p className="">Transparency and regulation are the cornerstone values of SUP, allowing the investors community to benefit from our platform and the evolution of capital markets.</p>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="">
                            <img src={robot} alt="" className='w-100' />
                        </div>
                    </div>
                </div>

            </Section>

            <Section className="">
                <div className="row align-items-center  justify-content-between">
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-2">
                        <div className="text-center">
                            <h2 className="heading-md">We strive to provide unique opportunities</h2>
                            <p className="">We are the pioneers of a new tokenized economy providing access to new financial opportunities. All assets on Supcoin are carefully vetted as we operate a fully regulated platform and are committed to guaranteeing a secure trading experience for all traders.</p>
                            <Link to={`/marketplace`} ><Button type={'block'} color={"pri"}> See Markets <FaLink />  </Button></Link>
                        </div>
                    </div>
                    <div className="col-md-6 px-0 order-1">
                        <div className="">
                            <img src={tech} alt="" className='w-100' />
                        </div>
                    </div>
                </div>

            </Section>
            <Section name={"ourstory"} className="pri-bg  pb-0">
                <div className="row pri-bg justify-content-between mx-0">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-center  mx-auto py-5">
                            <h1 className="bold">Our Story</h1>
                            <p className="">Supelle is a global marketplace that serves as an umbrella. Where we provide work opportunities for freelancers and offer solutions to individuals and businesses' alike.
                                Under the expert guidance of our visionary Founder & CEO, Wefreelancer Global Tech, Inc. ("the Company") is a Boca Raton, Florida-based business embarked on an ambitious journey to create the lead freelancing platform, operating through the domain of Supelle.com. Founded in 2018 where we are set to make a resounding impacts in the freelancing landscape.

                            </p>
                            <p>
                                However, our story doesn't end there. The spark of innovation ignited, and in early 2023, the groundbreaking idea of Supcoin was born. This revolutionary concept reinvented the very essence of freelancing, elevating it to new heights. Enter Supcoin, an embodiment of our commitment to paving a future where work knows no geographical bounds, where talent thrives, and where the world comes together as one interconnected ecosystem.
                                Supelle global marketplace stands as an umbrella of opportunities, catering to at the diverse needs of freelancers seeking fulfilling work and individuals and businesses yearning for ingenious solutions to their challenges. Together we embrace the power of collaboration, championing a future where ingenuity knows no bounds and where Supelle paves the way for a world of boundless possibilities.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-sm-0 px-0">
                        <div className="story-image">

                        </div>
                    </div>
                </div>

            </Section>



            {/* Team Member */}
            <div id="team" className='position-relative'>
                <div className="row">
                    <div className="text-center  d-flex justify-content-center align-items-center col-xl-6">
                        <div className="about-team">
                            <h3 className="heading-sm bold">Meet the industry leaders behind Supcoin</h3>
                            <p>An experienced and dedicated team of business, finance, and technology veterans with the shared vision of redefining the world of regulated security tokens and crypto trading.</p>
                            <Link to="/contact" className='mt-4'><Button type="block" color={"pri"}>Contact Us <FaLink /></Button></Link>

                        </div>
                    </div>
                    <div className="col-xl-6 px-0">
                        <div className="members">
                            {
                                teamMembers.slice(0, 6).map((member, i) =>
                                (
                                    member.name === "demo1"
                                        ? (<div key={i}>
                                            <h1 className='demo demo1'>The Sup  <br />Team</h1>
                                        </div>)
                                        :
                                        (<div className="member" key={i}>
                                            <div className="member-image h-100" style={{ background: `url(${member.image}) center center/cover no-repeat` }}>
                                                <div className="img-cover d-flex justify-content-center align-items-center" onMouseEnter={() => handleModal(member)} onMouseLeave={() => setModal(false)}>
                                                    <div className="img-context">
                                                        <h5 className='bold '>{member.name}</h5>
                                                        <p>{member.position}</p>
                                                        <FaInfo className='icon' onClick={() => handleModal(member)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="members-b row flex-wrap">
                    {
                        teamMembers.slice(6,).map((member, i) => (
                            member.name === "demo2"
                                ? (<div key={i} className='col-md-2 p-0'>
                                    <h1 className='demo demo2'>Board of  <br />Directors</h1>
                                </div>)
                                :
                                (<div className="member col-md-2 p-0" key={i}>
                                    <div className="member-image h-100" style={{ background: `url(${member.image}) center center/cover no-repeat` }}>
                                        <div className="img-cover d-flex justify-content-center align-items-center" onMouseEnter={() => handleModal(member)} onMouseLeave={() => setModal(false)}>
                                            <div className="img-context">
                                                <h5 className='bold '>{member.name}</h5>
                                                <p>{member.position}</p>
                                                <FaInfo className='icon' onClick={() => handleModal(member)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        ))
                    }



                </div>
                {/* Team Modal */}
                <TeamModal />
            </div>

            <Section name={"position"} container={700} center={true} className={"py-5"}>
                <div className='text-center text-light py-5'>
                    <h1 className="">Work with us to design a new digital economy</h1>
                    <p className=" mt-4">Explore the career opportunities at one of our SUP offices around the world</p>
                    <Button type={"inline"} color={'light'}>Go to open positions</Button>

                </div>
            </Section>



        </div>
    )
}

export default About