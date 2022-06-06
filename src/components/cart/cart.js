import { UseCartContext } from "../../context/CartContext.js";
import CartItem from "./cartItem.js";
import "./cart.css";

export default function Cart() {
    const {photosList, clearCart, photosPrice} = UseCartContext();
    // function generateOrder() {
    //     let order = {}

    //     order.buyer = { name: "fede", email: "f@gmail.com" , phone: "2931923"}
    //     order.total = photosAdded;

    //     order.photos = photosList.map(photos => {
    //         const id = photos.photo.id
    //         const name = photos.photo.client
    //         const price = photos.photo.price * photos.quantity
            
    //         return { id, name, price }
    //     })
    // }
    // generateOrder()
    return (
        <div className="cart">
            <h2> Haz agregado las siguientes fotos:</h2>
            {photosList.map(item => <CartItem key={item.photo.id} item={item.photo} quantity={item.quantity}/>)}
            { photosList.length===0 ? <h2>Agrega productos para verlos aqui!</h2> : <button onClick={clearCart}>Vaciar carro</button>}
            { photosPrice.length===0 ? undefined : <span className="cartPrice">{photosPrice}</span> }
            
        </div>
    );
}
