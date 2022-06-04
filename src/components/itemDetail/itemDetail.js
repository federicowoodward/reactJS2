import { UseCartContext } from "../../context/CartContext.js";
import { useState } from "react";
import BuyButtons from "../buyButtons/buyButtons.js";
import ItemCount from "../itemCount/itemCount.js";
import "./itemDetail.css";

export default function ItemDetail({photo}) {

    const [inputType, setInputType] = useState("itemCount");

    const {addToCart} = UseCartContext();

    function onAdd(quantity) {
        addToCart({photo, quantity})
        setInputType("buyButtons");
    }

    return (
        <div className="itemDetail">
            <img className="itemDetailImg" src={photo.imgUrl} alt="" />
            <div className='itemDetailInfo'>
                <p className='itemDetailCliente'>{photo.client}</p>
                <h3 className="itemDetailTitle">{photo.alt}</h3>
                <p className="itemDetailDetail">{photo.alt}</p>
            </div>
        { inputType === "itemCount" ?
        <ItemCount initial={1} stock={3} onAdd={onAdd} />
        :
        <BuyButtons/> }
        </div>
    );
}