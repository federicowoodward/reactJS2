import "./itemDetail.css";
import { useState } from "react";
import BuyButtons from "../buyButtons/buyButtons.js";
import ItemCount from "../itemCount/itemCount.js";

export default function ItemDetail({photo, onAdd}) {

    const [inputType, setInputType] = useState("itemCount");

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