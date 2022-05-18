import ItemDetail from "./../itemDetail/itemDetail.js";
import { useState, useEffect } from "react";

export default function ItemDetailContainer () {
    const [loading, setLoading] = useState(true)
    const getItem = () => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(setLoading(false));
              }, 2000);
            });
    } 
    
    return (
        <div>
            { loading ?
                <h2>Cargando...</h2>
                :
                <div>
                    { img.map((img) => <div>
                        <ItemDetail
                            id = {img.id}
                        />
                    </div>) 
                    }
                </div>
            }
        </div>
    );
}