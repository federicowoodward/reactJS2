import "./itemCount.css";
import React, { useState } from 'react';
import "./cartWidget.css";

const ItemCount = ({initial}) => {

    const [count, setCount] = useState(initial);

    let resta = false;

    const operation = (cuenta) => {
        if (cuenta === "+") {
            setCount (count + 1);
        } else if (cuenta === "-") {
            setCount (count - 1);
            resta = true;
        }
    }


    return (
        <div className="botonFotos">
            <span className="fotosAñadidas">
                <p>Fotos añadidas: {count}</p>
            </span>
            <button className="btnMas" onClick={operation("+")}>
                +
            </button>
            <button className="btnMen" onClick={operation("-")} display={resta ? "block" : "none"}>
                -
            </button>
        </div>
    )

}

export default ItemCount;