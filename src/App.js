import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Footer from './components/footer';
import Menu from "./pages/Menu"
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import Addtocart from './pages/addtocart';


function App() {

  const [cart,setCart] = useState([])

  const addToCart = (data) =>{
     console.log(data)
  }
  

  return (
    <div className="App">
      <BrowserRouter>
         <Navbar size = {7}/>
        <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/menu" element = {<Menu addToCart = {addToCart}/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path='' element = {<Addtocart />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
