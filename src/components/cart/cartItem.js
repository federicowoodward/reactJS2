import { UseCartContext } from "../../context/CartContext.js";
import "./cartItem.css";

export default function CartItem({item, quantity}) {
    const {clearPhoto} = UseCartContext();
    function removePhoto() {
        clearPhoto(item.id);
    }
    return (
        <li><img className="cartItemImg" src={item.imgUrl} alt={item.alt}/>- Cantidad: {quantity} - 
        <button className="buttonDeleteItem" onClick={removePhoto}>Eliminar item</button>
        </li>
    );
}