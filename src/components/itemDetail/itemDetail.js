import "./itemDetail.css";
import { useState } from "react";
import BuyButtons from "../buyButtons/buyButtons.js";
import ItemCount from "../itemCount/itemCount.js";
import { UseCartContext } from "../../context/CartContext.js";

export default function ItemDetail({photo}) {

    const [inputType, setInputType] = useState("itemCount");

    const {addToCart, photosList} = UseCartContext();

    function onAdd (quantity, added) {
        console.log(`La foto ${added} a sido agregada ${quantity} veces`)
        addToCart({photo, quantity})
        console.log(photosList)
    }

    function handleInputType() {
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
        <ItemCount photo={photo} initial={1} stock={3} onAdd={onAdd} handleInputType={handleInputType}/>
        :
        <BuyButtons/> }
        </div>
    );
}