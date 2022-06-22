import ItemDeleterContainer from './components/deleter/itemDeleterContainer/itemDeleterContainer.js';
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
import ItemListContainer from './components/itemListContainer/itemListContainer.js'; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Introduction from "./components/introduce/introduce.js";
import Upload from "./components/fileUpload/fileUpload.js";
import CartContextProv from "./context/CartContext.js";
import Contact from "./components/contact/contact.js";
import Landing from './components/landing/landing.js';
import NavBar from './components/navBar/navBar';
import Order from "./components/order/order.js";
import ShowOrder from "./components/order/showOrder.js";
import Login from "./components/login/login.js";
import Cart from "./components/cart/cart.js";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
        <CartContextProv value={{}}>
            <div className="appContainer">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/category/" element={<ItemListContainer/>} />
                    <Route path="/category/:id" element={<ItemListContainer/>} />
                    <Route path="/category/itemdetail/:id" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element = { < Cart />} />
                    <Route path="/introduce.js" element = { < Introduction />} />
                    <Route path="/contact" element = { < Contact />} />
                    <Route path="/landing" element = { < Landing />} />
                    <Route path="/order" element = { < Order />} />
                    <Route path="/login" element = { < Login /> } />
                    <Route path="/upload" element = { <Upload />} />
                    <Route path="/deleter" element = { < ItemDeleterContainer />} />
                    <Route path="/showOrder" element = { <ShowOrder />} />
                    <Route path="/*" element = { <Navigate to="/" replace /> } />
                </Routes>
            </div>
        </CartContextProv>
      </BrowserRouter>
  );
}