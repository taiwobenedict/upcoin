import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import {Route, Routes} from "react-router-dom"
import Invest from "./pages/Invest/Invest";
import Sup from "./pages/Sup/Sup";
import { uiContext } from "./context/UIcontext";
import { useContext } from "react";


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
      </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
