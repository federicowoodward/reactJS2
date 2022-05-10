import "./itemCount.css";
import React, { useState } from 'react';
import "./cartWidget.css";
import Carrito from "../assets/carrito.js";

const ItemCount = ({initial ,cuentaParametro}) => {

    const [count, setCount] = useState(initial);

    let resta = false;
    let botonResta = document.getElementById("restar");

    const hacerCuenta = (cuenta) => {
        if (cuenta == "+") {
            setCount (count + 1);
            mostrarBoton();
        } else if (cuenta == "-") {
            setCount (count - 1);
            resta = true;
            mostrarBoton();
        }
    }

    const mostrarBoton = () => {
        resta = false ? botonResta.style.display = "none" : botonResta.style.display = "block"; 
    }
 
    hacerCuenta(cuentaParametro); 

    return (
        <button className="botonFotos">
            < Carrito/>
        </button>
    )

}

export default ItemCount;