import React from 'react';
import ItemCount from "../itemCount.js";
import React, { useState } from 'react';

const ItemDetail = ({ detail }) => {

    const [count, setCount] = useState(initial);
   
  return (
    <article className="fotoCard">
        <img className="fotoImg" src={detail.imgUrl} alt={detail.alt} />
            <p className="fotoClient">${detail.client}</p>    

            <ItemCount initial={"0"} />

            <butto><a>Terminar mi compra</a></butto>
            
    </article>
  );
};

export default ItemDetail;