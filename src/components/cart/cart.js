import { UseCartContext } from "../../context/CartContext.js";
import { Link } from "react-router-dom";
import CartItem from "./cartItem.js";
import "./cart.css";

export default function Cart() {
    const {photosList, clearCart} = UseCartContext();
  

 
    if (photosList.length!==0) { 
        return (
            <div className="cart">
                <h2> Haz agregado las siguientes fotos:</h2>
                {photosList.map(item => <CartItem key={item.photo.id} item={item.photo} quantity={item.quantity}/>)}
                <button onClick={clearCart}>Vaciar orden</button>
                <Link to="/order">
                    <button>Enviar orden</button>
                </Link>
                
            </div>
        );
    }
    else {
        return (
            <div className="cart">
            <h2>Agrega productos para verlos aqui!</h2>
            </div>
        );
    }
}
