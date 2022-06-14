import { UseCartContext } from "../../context/CartContext.js";
import { useState } from "react";
import BuyButtons from "../buyButtons/buyButtons.js";
import ItemCount from "../itemCount/itemCount.js";
import "./itemDetail.css";

export default function ItemDetail({photo}) {
    const [inputType, setInputType] = useState("itemCount");
    const {addToCart} = UseCartContext();

    function onAdd(quantity) {
        addToCart({photo, quantity});
        setInputType("buyButtons");
    }

    return (
        <div className="itemDetail">
            <img className="itemDetailImg" src={photo.img} alt={photo.alt} />
            <div className='itemDetailInfo'>
                <p className='itemDetailCliente'>Cliete: {photo.client}</p>
                <p className="itemDetailDetail">Detalle: {photo.alt}</p>
                <div className='buttons'></div>
                { inputType === "itemCount" ?
                <ItemCount initial={1} stock={2} onAdd={onAdd} />
                :
                <BuyButtons/> }
            </div>
        </div>
    );
}