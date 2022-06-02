import { UseCartContext } from "../../context/CartContext.js";

export default function Cart () {
    const {photosList, clearCart} = UseCartContext();

    return (
        <div className="cart">
            <h2> Haz agregado las siguientes fotos:</h2>
            {photosList.map(photos => <li>Item:{photos.item.id} - Cantidad: {photos.quantity}</li>)}
            <button onClick={clearCart}>Vaciar carro</button>
        </div>
    );
}
