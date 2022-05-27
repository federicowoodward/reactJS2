import React from 'react';
import './item.css';
import { Link } from "react-router-dom";

const Item = ({ photo }) => {

  return (
    <div className="item">
        <img className="fotoImg" src={photo.imgUrl} alt={photo.client} />
        <Link to={`/detail/:${photo.id}`}>
            <button>Agregar al pedido</button>
        </Link>
    </div>
  );
};

export default Item;