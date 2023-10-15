import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import { Route, Routes, useLocation } from "react-router-dom"
import Invest from "./pages/Invest/Invest";
import Sup from "./pages/Sup/Sup";
import { UIContext } from "./context/UIcontext";
import { useContext } from "react";
import Blog from "./pages/Blog/Blog";
import Roadmap from "./pages/Roadmap/Roadmap";
import About from "./pages/About/About";
import NewToCrypto from "./pages/NewToCrypto/NewToCrypto";
import Win from "./pages/Win/Win";
import ScrollToTopOnNavigate from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import Marketplace from "./pages/Marketplace/Marketplace";
import Caculator from "./pages/Caculator/Caculator";
import Support from "./pages/support/Support";

import { Marque } from "./components/ScrollToTop";
import HowToBuy from "./pages/HowToBuy/HowToBuy";
import SupportHeading from "./pages/support/components/SupportHeading";
import SupportFooter from "./pages/support/components/SupportFooter";
import Videos from "./pages/support/components/Videos";




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

        if (location.pathname === "/support/videos") {
            setHideNav(false)
        } else setHideNav(true)

        window.addEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, [location]);



    return (
        <div className="App">
            <ScrollToTopOnNavigate />

            {
                hideNav && <NavBar isScrolled={isScrolled} />
            }
            <div  onClick={()=>setToggle(false)}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/invest" element={<Invest />} />
                <Route path="/sup" element={<Sup />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post/:id" element={<Blog />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/about" element={<About />} />
                <Route path="/new-to-crypto" element={<NewToCrypto />} />
                <Route path="/win" element={<Win />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/caculator" element={<Caculator />} />
                <Route path="/how-to-buy" element={<HowToBuy />} />
                <Route path="/support" element={<Support />} />
                <Route path="/support/videos" element={<SupportPages />} />
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
            <Videos />
            <SupportFooter />
        </>

    )
}
