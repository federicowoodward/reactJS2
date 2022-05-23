import React from 'react';

const ItemDetail = ({ detail }) => {

  return (
    <article className="fotoCard">
        <img className="fotoImg" src={detail.imgUrl} alt={detail.alt} />
        <p className="fotoClient">${detail.client}</p>      
    </article>
  );
};

export default ItemDetail;