import { UseCartContext } from "../../context/CartContext.js";
import "./cartItem.css";
export default function CartItem({item, quantity}) {
    const {clearPhoto} = UseCartContext();
    function removePhoto() {
        clearPhoto(item.id);
    }
    return (
        <div className="cartItem">
            <li>
                <p>Cantidad: {quantity}</p>
                <img className="cartItemImg" src={item.img} alt={item.alt}/> 
                <span className="material-icons-outlined" onClick={removePhoto}>
                    delete
                </span>
            </li>
        </div>
    );
}