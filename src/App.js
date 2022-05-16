import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer.js';
import Container from './components/itemListContainer.js'; 
// import Landing from './components/landing.js';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    // <BrowserRouter>
    <div>
      <NavBar/>
      
      <main>

        {/* < Landing/> */}
        <Container/>
        
      </main>
      
      <footer>
         <Footer/>
      </footer>
    </div>
    // </BrowserRouter>
  )
}


