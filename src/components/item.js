import React from 'react';
import ItemCount from './itemCount.js';
import './item.css';

const Item = ({ imgUrl, stock, client, alt}) => {

  return (
    <article className="fotoCard">
        <img className="fotoImg" src={imgUrl} alt={alt} />
        <p className="fotoClient">${client}</p>
      <ItemCount initial={1}/>
      
    </article>
  );
};

export default Item;