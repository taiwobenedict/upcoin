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





function App() {
  const {setToggle } = useContext(UIContext)


  return (
    <div className="App">
      <ScrollToTopOnNavigate />

      <NavBar />

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
        
      </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
