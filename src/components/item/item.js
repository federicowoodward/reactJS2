import React from 'react';
import './item.css';
import { Link } from "react-router-dom";

export default function Item({ photo}){
  return (
    <div className="item">
        <img className="fotoImg" src={photo.imgUrl} alt={photo.client} />
        <Link to={`/category/itemdetail/${photo.category + "_" + photo.id}`}>
            <button>Agregar al pedido</button>
        </Link>
    </div>
    );  
};
