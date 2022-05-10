import React from 'react';
import ItemCount from './itemCount.js';
import './item.css';

const Item = ({ id, imgUrl, stock, client, alt}) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} Fotos para editar!`);
  };

  return (
    <article className="fotoCard">
        <img className="fotoImg" src={imgUrl} alt={alt} />
        <p className="fotoClient">${client}</p>
        
      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;