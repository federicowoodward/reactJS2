import { UseCartContext } from "../../context/CartContext.js";
import CartItem from "./cartItem.js";
import "./cart.css";

export default function Cart() {
    const {photosList, clearCart, photosAdded} = UseCartContext();
    console.log(photosAdded.length);
    return (
        <div className="cart">
            <h2> Haz agregado las siguientes fotos:</h2>
            {photosList.map(photo => <CartItem key={photo.photo.id} item={photo}/>)}
            { photosList.length===0 ? <h2>Agrega productos para verlos aqui!</h2> : <button onClick={clearCart}>Vaciar carro</button>}
            { photosAdded.length===0 ? <span className="cartNum">{photosAdded}</span> : undefined }
        </div>
    );
}
