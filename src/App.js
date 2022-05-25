import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/navBar';
import Footer from './components/footer.js';
import Container from './components/itemListContainer.js'; 
import Landing from './components/landing.js';
import Introduction from "./components/introduce.js";
import Contact from "./components/contact.js";

export default function App() {

  return (
    <BrowserRouter>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element = { < Landing />} />
            <Route path="/landing" element = { < Landing />} />
            <Route path="/introduce.js" element = { < Introduction />} />
            <Route path="/pics" element = { < Container />} />
            <Route path="/contact" element = { < Contact />} />

            <Route path="/*" element = { <Navigate to="/" replace /> } />
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}


