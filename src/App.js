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
import Updates from "./pages/SupUdate/SupUdate";
import Alert from "./components/Alert";





function App() {
    const { setToggle, hideNav, setHideNav, alert } = useContext(UIContext)
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
            <Alert type={alert.type} message={alert.message} />
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
                    <Route path="/updates" element={<Updates />} />
                    <Route path="/updates" element={<Updates />} />
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
