import "./itemCount.css";
import React, { useState } from 'react';
import Cart from "../../assets/cart.js";
// import { Link } from "react-router-dom";

export default function ItemCount({initial , stock, photo, onAdd, handleInputType}) {

    const [count, setCount] = useState(initial);

    const add = () => {if(count < stock) setCount(count+1)}
    const less = () => {if(count > stock) setCount(count-1)}

    function addToCart() {
        onAdd(count, photo.id)
        handleInputType();
    }

    return (
        <div className="botonFotos">
            <span className="fotosAñadidas"><p>{count}</p></span>
            <Cart/>
            <button className="btnMas" onClick={add}> + </button>
            <button className="btnMen" onClick={less}> - </button>
            <button onClick={addToCart}> Añadir al carrito </button>
        </div>
    )
    
}
