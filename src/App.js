import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer.js';
import ItemListContainer from './components/itemListContainer/itemListContainer.js'; 
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
import Landing from './components/landing/landing.js';
import Introduction from "./components/introduce/introduce.js";
import Contact from "./components/contact/contact.js";
// import CartContextProvider from "./context/CartContext.js";

export default function App() {


  return (
    <BrowserRouter>
        {/* <CartContextProvider value={{}}> */}
            <div>

                <NavBar/>
                <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/category/itemdetail/:id" element={<ItemDetailContainer/>} />
                {/* <Route path="/*" element = { <Navigate to="/" replace /> } /> */}

                {/* Rutas extra del nav para completar nav */}
                <Route path="/introduce.js" element = { < Introduction />} />
                <Route path="/contact" element = { < Contact />} />
                <Route path="/landing" element = { < Landing />} />
                </Routes>

                <Footer/> 

            </div>
        {/* </CartContextProvider> */}
      </BrowserRouter>
  )
}


