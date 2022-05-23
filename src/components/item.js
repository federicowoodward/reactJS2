import React from 'react';
import ItemCount from './itemCount.js';
import './item.css';

const Item = ({ photo }) => {

  return (
    <article className="fotoCard">
        <img className="fotoImg" src={photo.imgUrl} alt={photo.alt} />
        <p className="fotoClient">${photo.client}</p>
      <ItemCount initial={1}/>
      
    </article>
  );
};

export default Item;