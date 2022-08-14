import { UseCartContext } from "../../context/CartContext.js";
import { useState } from "react";
import "./cartItem.css";
export default function CartItem({item, quantity}) {
    const {clearPhoto} = UseCartContext();
    const [quantityStatus, udapteQuantityStatus] = useState(quantity);

    function removePhoto() {
        if (quantityStatus === 1) {
            clearPhoto(item.id);
        } else {
            udapteQuantityStatus(quantity - 1);
        }
    }
    return (
        <div className="cartItem">
            <li>
                <p>Cantidad: {quantityStatus}</p>
                <img className="cartItemImg" src={item.img} alt={item.alt}/> 
                <span className="material-icons-outlined" onClick={removePhoto}>
                    delete
                </span>
            </li>
        </div>
    );
}