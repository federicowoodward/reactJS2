import React, { useState } from 'react';
import "./itemCount.css";

export default function ItemCount({initial ,  onAdd}) {
    const [count, setCount] = useState(initial);

    const add = () => {if(count < 3) setCount(count+1)}
    const less = () => setCount(count-1)
    if (count === 0) { setCount(count+1) }
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

