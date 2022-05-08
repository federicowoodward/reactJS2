import "./itemCount.css";
import React, { useState } from 'react';
import "./cartWidget.css";
import Carrito from "../assets/carrito.js";



export default function BotonContador() {
    const stockFotos = 5;
    const [count, setCount] = useState(0);

    return (
        <div className="botonContador">
            <p className="contador"> {count}</p>
            <button 
                className="btnMas"
                onClick={() => {
                    if ( count < stockFotos) {
                        setCount(count + 1);
                    } else {
                        alert("No hay stock suficiente")
                    }
                }}
                >
                +
            </button>
            <button 
                className="btnMen"
                onClick={() => {
                    if (count == 0) {
                        alert("no puede ser menos de 0")
                    } else {
                    setCount(count - 1);}
                }}
                >
                -
            </button>
            <button className="botonFotos">
            < Carrito/>
            </button>
        </div>
    );
}