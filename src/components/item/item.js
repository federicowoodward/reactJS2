import React from 'react';
import './item.css';

import ItemCount from "./../itemCount/itemCount.js";

const Item = ({ photo}) => {
  return (
    <div className="item">
        <img className="fotoImg" src={photo.imgUrl} alt={photo.client} />
        <ItemCount initial={1} id={photo.id} category={photo.category} />
        

    </div>
  );  
};

export default Item;