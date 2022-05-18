import React from 'react';

const ItemDetail = ({ imgUrl, client, alt}) => {

  return (
    <article className="fotoCard">
        <img className="fotoImg" src={imgUrl} alt={alt} />
        <p className="fotoClient">${client}</p>      
    </article>
  );
};

export default ItemDetail;