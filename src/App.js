import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
import ItemListContainer from './components/itemListContainer/itemListContainer.js'; 
import CartContextProv from "./context/CartContext.js";
import Introduction from "./components/introduce/introduce.js";
import Contact from "./components/contact/contact.js";
import Landing from './components/landing/landing.js';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer.js';
import Cart from "./components/cart/cart.js";
import Order from "./components/order/order.js";
import Login from "./components/login/login.js";
import './App.css';

export default function App() {


  return (
    <BrowserRouter>
        <CartContextProv value={{}}>
            <div>
                <NavBar/>
                <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/:id" element = { < ItemListContainer />} />
                <Route path="/category/itemdetail/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element = { < Cart />} />
                <Route path="/introduce.js" element = { < Introduction />} />
                <Route path="/contact" element = { < Contact />} />
                <Route path="/landing" element = { < Landing />} />
                <Route path="/order" element = { < Order />} />
                <Route path="/login" element = { < Login /> } />
                <Route path="/*" element = { <Navigate to="/" replace /> } />
                </Routes>
                <Footer/> 
            </div>
        </CartContextProv>
      </BrowserRouter>
  )
}


