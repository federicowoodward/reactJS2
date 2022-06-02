import React from 'react';
import Item from '../item/item.js';
import "./itemList.css";


const ItemList = ({ picsList, id, onAdd }) => {
    return (
      <div className="container">
        { id?
        picsList.filter(photo => photo.category === id).map((photo) => <Item key={photo.id} photo={photo} onAdd={onAdd}/>)
        :
        picsList.map((photo) => <Item key={photo.id} photo={photo} onAdd={onAdd}/>)
        }
      </div>
    );
}
export default ItemList;
            
            
            
            
