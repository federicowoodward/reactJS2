import React from 'react';
import Item from './item.js';
import "./itemList.css";


const ItemList = ({ picsList, id }) => {
    return (
      <div className="container">
        { id?
        picsList.filter(photo => photo.id === id).map((photo) => <Item key={photo.id} photo={photo}/>):
        picsList.map((photo) => <Item key={photo.id} photo={photo}/>)
        }
      </div>
    );
}
export default ItemList;
            
            
            
            
