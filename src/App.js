import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import {Route, Routes} from "react-router-dom"
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

import { Marque } from "./components/ScrollToTop";
import HowToBuy from "./pages/HowToBuy/HowToBuy";




function App() {
  const {setToggle, } = useContext(UIContext)
  const [isScrolled, setIsScrolled] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    
  }, []);
  


  return (
    <div className="App">
      <ScrollToTopOnNavigate />
    

      <NavBar isScrolled={isScrolled} />

      <div  onClick={() => setToggle(false)}>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/invest" element={ <Invest /> } />
        <Route path="/sup" element={ <Sup /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/post/:id" element={ <Blog /> } />
        <Route path="/roadmap" element={ <Roadmap /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/new-to-crypto" element={ <NewToCrypto /> } />
        <Route path="/win" element={ <Win /> } /> 
        <Route path="/marketplace" element={ <Marketplace /> } /> 
        <Route path="/caculator" element={ <Caculator /> } /> 
        <Route path="/how-to-buy" element={ <HowToBuy /> } /> 
        
      </Routes>
      </div>
      <Marque />

      <Footer />
    </div>
  );
}

export default App;
