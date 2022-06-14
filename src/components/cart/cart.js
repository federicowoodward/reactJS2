import { UseCartContext } from "../../context/CartContext.js";
import { Link } from "react-router-dom";
import CartItem from "./cartItem.js";
import "./cart.css";
import "./cartWithItem.css";

export default function Cart() {
    const {photosList, clearCart} = UseCartContext();
  
 
    if (photosList.length!==0) { 
        return (
            <div className="cartWithItems">
                <h2> Haz agregado las siguientes fotos:</h2>
                <div className="itemsContainer">
                {photosList.map(item => <CartItem key={item.photo.id} item={item.photo} quantity={item.quantity}/>)}
                </div>

                <div className="cartButtons">
                    <div className="clearCartButton">
                        <button className="noselect" onClick={clearCart}>
                            <span className="text">Vaciar</span>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <Link to="/order">
                        <button>
                            <span className="button_top" >Volver al menú</span>
                        </button>
                    </Link>
                </div>
                
            </div>
        );
    }
    else {
        return (
            <div className="cart">
            <h2>Agrega productos para verlos aqui!</h2>
            <Link to="/fotos">
                <div class="fancy">
                    <span class="top-key"></span>
                    <span class="text">Agrega fotos!</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </div>
            </Link>
            </div>
        );
    }
}
