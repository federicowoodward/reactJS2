import { picsList } from "../data/data.js";
import React, { useEffect, useState } from 'react';
import Item from './item';
import "./itemCount.js";

const ItemList = () => {

    const [fotos, setFotos] = useState([]);

    const getFotos = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(picsList);
        }, 2000);
    });

    const getPicsFromData = async () => {
        try {
            const result = await getFotos;
            setFotos(result);
        } catch (err) {
            console.error(err);
            alert("LaS fotos no puede ser mostradas, contactate por Whatsapp por favor");
        }
    };

    useEffect(() => {
        getPicsFromData();
    }, []);

    return (
        <div className="product-list-container">
            {
                fotos.length ? ( 
                <>
                    {
                    fotos.map((foto) => {
                        return (
                        <div key={foto.id}>
                            <Item
                                id={foto.id}
                                imgUrl={foto.imgUrl}
                                stock={foto.stock}
                                client={foto.client}
                                alt={foto.alt}
                            />
                            <div className="itemCount">
                                <button id="sumar" onClick={haceCuenta("+")}>+</button>
                                <button id="restar" onClick={haceCuenta("-")}>-</button>
                            </div>
                        </div>
                        );
                    })
                    }
                </>
                ) : (
                <p>Cargando fotos...</p>
                ) 
            } 
        </div>
    );
};

export default ItemList;