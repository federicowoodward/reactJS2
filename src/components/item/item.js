import React from 'react';
import './item.css';
// import ItemCount from "./../itemCount/itemCount.js";
import { Link } from "react-router-dom";

const Item = ({ photo, onAdd}) => {
  return (
    <div className="item">
        <img className="fotoImg" src={photo.imgUrl} alt={photo.client} />
        {/* <ItemCount initial={1} id={photo.id} onAdd={onAdd}  /> */}

        <Link to={`/category/itemdetail/${photo.category + "_" + photo.id}`}>
            <button>Agregar al pedido</button>
        </Link>

    </div>
  );  
};

export default Item;