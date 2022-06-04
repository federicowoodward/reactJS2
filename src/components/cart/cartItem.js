import { UseCartContext } from "../../context/CartContext.js";
import "./cartItem.css";

export default function CartItem({item}) {
    const {clearPhoto} = UseCartContext();
    function removePhoto() {
        clearPhoto(item.photo.id);
    }
    return (
        <li><img src={item.photo.imgUrl} alt={item.photo.alt}/>- Cantidad: {item.quantity} - 
        <span className="cartItemRemove" onClick={removePhoto}>
        <i className="l"></i>
        </span></li>
    );
}