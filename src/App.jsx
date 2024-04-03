import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";


function App() {
  return (
    <>
    {/* <BrowserRouter>
        <Route exact path="/" element={<Login/>}>
          
        </Route>
      <Navbar/>
      <Routes>
        <Route exact path="/Home" element={<Home/>}>
          
        </Route>
        <Route exact path="/services" element={<Services/>} >
          
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
      </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
    {localStorage.getItem('login')=='true' && <Navbar/>}
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/services" element={<Services/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
   
    
 
  )
}

export default App
