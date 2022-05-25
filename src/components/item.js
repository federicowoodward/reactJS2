import React from 'react';
import './item.css';

const Item = ({ photo }) => {

  return (
    <div className="item">
        <img className="fotoImg" src={photo.imgUrl} alt="" />
        <p className="fotoClient">${photo.client}</p>
        {/* <Link to={`/itemDetail/${el.id}`}>
                    <button className="item__addBtn" >Agregar al pedido</button>
        </Link> */}
    </div>
  );
};

export default Item;