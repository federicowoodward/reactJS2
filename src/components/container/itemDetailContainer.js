import ItemDetail from "./../itemDetail/itemDetail.js";
import { useState, useEffect } from "react";
import { picsList } from "../../data/data.js";

export default function ItemDetailContainer () {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({})

    const getItem = () => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(picsList);
                
              }, 2000);
            });
    getItem.then =(res) => {
        setItem(res[0]);
        setLoading(false);
    }        
    } 
    
    return (
        <div>
            { loading ?
                <h2>Cargando...</h2>
                :
                < ItemDetail itemDetail={item}/>
            }
        </div>
    );
}