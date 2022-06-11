import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
// import ItemDeleterContainer from "./components/itemDeleter/itemDeleterContainer.js";
import ItemListContainer from './components/itemListContainer/itemListContainer.js'; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Introduction from "./components/introduce/introduce.js";
import Upload from "./components/fileUpload/fileUpload.js";
import CartContextProv from "./context/CartContext.js";
import Landing from "./components/landing/landing.js";
import Contact from "./components/contact/contact.js";
import Footer from './components/footer/footer.js';
import NavBar from './components/navBar/navBar';
import Order from "./components/order/order.js";
import Login from "./components/login/login.js";
import Cart from "./components/cart/cart.js";
import './App.css';

export default function App() {


  return (
    <BrowserRouter>
        <CartContextProv value={{}}>
            <div>
                <NavBar/>
                <Routes>
                <Route name="/landing" element = { <Landing/> } />
                <Route path="/category/photos" element={<ItemListContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/category/itemdetail/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element = { < Cart />} />
                <Route path="/introduce.js" element = { < Introduction />} />
                {/* <Route path="/deleteItems" element = { <ItemDeleterContainer/> } /> */}
                <Route path="/contact" element = { < Contact />} />
                <Route path="/order" element = { < Order />} />
                <Route path="/login" element = { < Login /> } />
                <Route path="/upload" element = { <Upload />} />
                <Route path="/*" element = { <Navigate to="/landing" replace /> } />
                </Routes>
                <Footer/> 
            </div>
        </CartContextProv>
      </BrowserRouter>
  )
}


