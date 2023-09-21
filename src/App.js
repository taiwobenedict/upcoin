import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import {Route, Routes} from "react-router-dom"
import Invest from "./pages/Invest/Invest";
import Sup from "./pages/Sup/Sup";


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/invest" element={ <Invest /> } />
        <Route path="/sup" element={ <Sup /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
