import "./itemCount.css";
import React, { useState } from 'react';
import Cart from "../../assets/cart.js";
import { Link } from "react-router-dom";

export default function ItemCount({initial ,id ,category}) {

    const [count, setCount] = useState(initial);
    const [boton, setBoton] = useState(false);

    const sumar = () => setCount(count+1);
    const restar = () => { setCount(count-1); setBoton(true) }

    return (
        <div className="botonFotos">
            <span className="fotosAñadidas"><p>{count}</p></span>
            <Cart/>
            <button className="btnMas" onClick={sumar}> + </button>
            <button className="btnMen" onClick={restar} display={boton ? "block" : "none"}> - </button>
            <Link to={`/category/itemdetail/${category + "_" + id}`}>
            <button>Agregar al pedido</button>
            </Link>
        </div>
    )

}

