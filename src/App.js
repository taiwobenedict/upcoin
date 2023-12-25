import { io } from 'socket.io-client';
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import { Outlet, Route, Routes, useLocation } from "react-router-dom"
import Invest from "./pages/Invest/Invest";
import Sup from "./pages/Sup/Sup";
import { UIContext } from "./context/UIcontext";
import { useContext } from "react";
import Blog from "./pages/Blog/Blog";
import Roadmap from "./pages/Roadmap/Roadmap";
import About from "./pages/About/About";
import NewToCrypto from "./pages/NewToCrypto/NewToCrypto";
import Airdrop from "./pages/Airdrop/Airdrop";
import { useState, useEffect } from "react";
import Marketplace from "./pages/Marketplace/Marketplace";
import Caculator from "./pages/Caculator/Caculator";
import Support from "./pages/support/Support";

import Marque from "./components/Marque";
import HowToBuy from "./pages/HowToBuy/HowToBuy";
import SupportHeading from "./pages/support/components/SupportHeading";
import SupportFooter from "./pages/support/components/SupportFooter";
import Videos from "./pages/support/components/Videos";
import Faqs from "./pages/support/components/Faqs";
import Crypto from "./pages/Cryptocurrencies/Crypto";
import Legal from "./pages/Legal/Legal";
import Whitelist from "./pages/Whitelist/Whitelist";
import Careers from "./pages/Careers/Careers";
import Learn from "./pages/Learn/Learn";
import Stake from "./pages/Staking/Stake";
import { StripeResult } from "./pages/StripeResult";

import Claim from "./pages/Staking/Claim";
import Overview from "./pages/Staking/Overview";
import CalculatorPage from "./pages/Staking/CalculatorPage";


export const socket = io(`${process.env.REACT_APP_SERVER_SOCKET_URL}`);

function App() {
    const { setToggle, hideNav, setHideNav } = useContext(UIContext)
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation()

    useEffect(() => {

        const handleScroll = () => {
            const scrollY = window.scrollY;

            // You can adjust this value to control when the background color is added back
            const triggerScrollY = 100;

            if (scrollY > triggerScrollY) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        const pattern = /^\/support\/.*/

        if (pattern.test(location.pathname)) {
            setHideNav(false)
        } else setHideNav(true)

        window.addEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, [location]);

    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Scroll the page to the top whenever the pathname changes (i.e., a new page/route is loaded)
            window.scrollTo(0, 0);
        }
    }, [hash, pathname]);


    return (
        <div className="App">
            {
                hideNav && <NavBar isScrolled={isScrolled} />
            }
            <div onClick={() => setToggle(false)}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/invest" element={<Invest />} />
                    <Route path="/sup" element={<Sup />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/post/:id" element={<Blog />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/new-to-crypto" element={<NewToCrypto />} />
                    <Route path="/airdrop" element={<Airdrop />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/caculator" element={<Caculator />} />
                    <Route path="/how-to-buy" element={<HowToBuy />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/support/*" element={<SupportPages />} >
                        <Route path="videos" element={<Videos />} />
                        <Route path="faqs" element={<Faqs />} />
                    </Route>
                    <Route path="/cryptocurrencies" element={<Crypto />} />
                    <Route path="/legals" element={<Legal />} />
                    <Route path="/whitelist" element={<Whitelist />} />
                    <Route path="/careers" element={<Careers />} exact />
                    <Route path="/learn" element={<Learn />} />

                    <Route path="/overview" element={<Overview />} />
                    <Route path="/claim" element={<Claim />} />
                    <Route path="/calculator" element={<CalculatorPage />} />
                    <Route path="/stake" element={<Stake />} />
                    <Route path="/stripeResult" element={<StripeResult />} />
                </Routes>
            </div>
            <Marque />
            {
                hideNav && <Footer />
            }

        </div>
    );
}

export default App;



function SupportPages() {

    return (
        <>
            <SupportHeading />
            <Outlet />
            <SupportFooter />
        </>

    )
}
