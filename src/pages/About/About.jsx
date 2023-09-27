import { useContext } from 'react'
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

    const { handleModal } = useContext(UIContext)

    return (
        <div id='about'>
            <Hero container={800} className={'text-light container'}>
                <h1 className="heading-md bold">We bring communities together and empower them through financial innovation</h1>
                <p className="text-big bold mt-4">We forge long-term partnerships with our communities by ensuring high standard products, competitive pricing and excellent customer support</p>

            </Hero>

            <Section name="supelle-info" center={true} className={"pri-bg"}>
                <div className="container">
                    <div className="text-light text-center py-5">
                        <div className="heading-lg bold mb-4">What is Supelle?</div>
                        <p className="text-big">
                            Supelle is a global marketplace that serves as an umbrella. Where we provide work opportunities for freelancers and offer solutions to individuals and businesses’ alike. This innovative platform is the present and future of global connectivity and collaboration. We offer essential support for freelancers' success and deliver top-notch customer support to clients. This platform fosters a sense of community and provides educational programs that includes online coaching and masterclasses for freelancers to connect and work effectively together. We also understand the challenges users face when working on projects, and we strive to make the experience seamless and efficient as possible. Supelle is pioneering, educational, and opportunistic, with a philosophy centered on elevating people’s lives and providing opportunities to all.
                            Supelle is a one-stop online marketplace that links freelancers and independent contractors with clients or employers. We’ve built a strong digital community with a booming digital economy by offering bold new ways for freelancers and creators to earn online.

                        </p>

                    </div>

                </div>
            </Section>

            <Section name={"info"} center={true} container={1000} >
                <div className="info-container">


                    <div className="row align-items-center">
                        <div className="col-sm-4">
                            <div className="info-image w-100">
                                <img src={krithen} alt={krithen} className='w-100' />
                            </div>
                        </div>
                        <div className="col-sm-8 w-100">
                            <h1 className="bold text-center my-5">A message from our CEO, Kristen Bragoli</h1>
                            <p className="lead">My vision of shaping capital markets and their evolution from the traditional world to a digital economy is coming to life.
                                The SUP Token was the first and significant milestone  the first SEC-registered security token to IPO on the blockchain.
                                Supcoin is another important step in our extraordinary journey, presenting the world's first fully regulated platform that merges investing and trading in security tokens, cryptocurrencies and capital raise services all in ONE place. SUP provides a safe and secure path for responsible trading on multiple asset classes.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="pri-bg">
                <div className="row pri-bg justify-content-between">
                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="heading-md">We Believe In Transparency</h2>
                            <p className="text-big">Transparency and regulation are the cornerstone values of SUP, allowing the investors community to benefit from our platform and the evolution of capital markets.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0">
                        <div className="">
                            <img src={robot} alt="" className='w-100' />
                        </div>
                    </div>
                </div>

            </Section>

            <Section className='container-fluid'>
                <div className="row mb">
                    <div className="col-sm-6">
                        <div className="">
                            <img src={tech} alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h2 className="heading-md">We strive to provide unique opportunities</h2>
                            <p className="text-big">We are the pioneers of a new tokenized economy providing access to new financial opportunities. All assets on Supcoin are carefully vetted as we operate a fully regulated platform and are committed to guaranteeing a secure trading experience for all traders.</p>
                            <Link to={`/markets`} ><Button type={'block'} color={"pri"}> See Markets <FaLink />  </Button></Link>
                        </div>
                    </div>
                </div>

            </Section>



            <Section name={"story"} center={true} className="container">
                <div className="overlay"></div>
                <div className="text-light text-center">
                    <div className=" heading-lg bold mb-5">Our Story</div>
                    <p className="text-big">SSupelle is a global marketplace that serves as an umbrella. Where we provide work opportunities for freelancers and offer solutions to individuals and businesses' alike.
                        Under the expert guidance of our visionary Founder & CEO, Wefreelancer Global Tech, Inc. ("the Company") is a Boca Raton, Florida-based business embarked on an ambitious journey to create the lead freelancing platform, operating through the domain of Supelle.com. Founded in 2018 where we are set to make a resounding impacts in the freelancing landscape.
                        However, our story doesn't end there. The spark of innovation ignited, and in early 2023, the groundbreaking idea of Supcoin was born. This revolutionary concept reinvented the very essence of freelancing, elevating it to new heights. Enter Supcoin, an embodiment of our commitment to paving a future where work knows no geographical bounds, where talent thrives, and where the world comes together as one interconnected ecosystem.
                        Supelle global marketplace stands as an umbrella of opportunities, catering to at the diverse needs of freelancers seeking fulfilling work and individuals and businesses yearning for ingenious solutions to their challenges. Together we embrace the power of collaboration, championing a future where ingenuity knows no bounds and where Supelle paves the way for a world of boundless possibilities.
                    </p>

                </div>

            </Section>

            {/* Team Member */}
            <div id="team">
                <div className="member">
                    <div className="about-team text-center">
                        <h3 className="heading-sm bold">Meet the industry leaders behind Supcoin</h3>
                        <p>An experienced and dedicated team of business, finance, and technology veterans with the shared vision of redefining the world of regulated security tokens and crypto trading.</p>
                        <Link to="/contact" className='mt-4'><Button type="block" color={"pri"}>Contact Us <FaLink /></Button></Link>
                    </div>
                </div>
                <div className="members">
                    {
                        teamMembers.map((member, i) => (
                            <div className="member" key={i}>
                                <div className="member-image h-100">
                                    <img src={member.image} alt="Maksym" className='w-100 h-100' />
                                    <div className="img-cover d-flex justify-content-center align-items-center">
                                        <div className="img-context">
                                            <h5 className='bold '>{member.name}</h5>
                                            <p>{member.position}</p>
                                            <FaInfo className='icon' onClick={()=>handleModal(member)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                    {/* Team Modal */}
                    <TeamModal/>

                </div>
            </div>

            <Section name={"position"} container={700} center={true} className={"py-5"}>
                <div className='text-center text-light py-5'>
                    <div className="title heading-md">Work with us to design a new digital economy</div>
                    <p className="text-big mt-4">Explore the career opportunities at one of our SUP offices around the world</p>
                    <Button type={"inline"} color={'light'}>Go to open positions</Button>

                </div>
            </Section>



        </div>
    )
}

export default About