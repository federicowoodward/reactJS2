import React, { useState } from 'react';
import "./itemCount.css";

export default function ItemCount({initial , stock, onAdd}) {
    const [count, setCount] = useState(initial);

    const add = () => {if(count < stock) setCount(count+1)}
    const less = () => {if(count > stock) setCount(count-1)}
    function addItem() {
        onAdd(count)
    }

    return (
        <div className="botonFotos">
            <span className="fotosAñadidas"><p>{count}</p></span>
            <button className="btnMas" onClick={add}> + </button>
            <button className="btnMen" onClick={less}> - </button>
            <button onClick={addItem}> Añadir al carrito </button>
        </div>
    )
    
}

