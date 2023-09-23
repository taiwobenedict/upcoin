import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import {Route, Routes} from "react-router-dom"
import Invest from "./pages/Invest/Invest";
import Sup from "./pages/Sup/Sup";
import { uiContext } from "./context/UIcontext";
import { useContext } from "react";
import Blog from "./pages/Blog/Blog";
import Roadmap from "./pages/Roadmap/Roadmap";
import About from "./pages/About/About";





function App() {
  const {setToggler, toggle, handleDropDown } = useContext(uiContext)

  const handleToggle = (e)=> {
    handleDropDown(e)
    if (toggle) {
      setToggler(false)
    }
  }



  return (
    <div className="App">

      <NavBar />

      <div  onClick={handleToggle}>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/invest" element={ <Invest /> } />
        <Route path="/sup" element={ <Sup /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/post/:id" element={ <Blog /> } />
        <Route path="/roadmap" element={ <Roadmap /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
