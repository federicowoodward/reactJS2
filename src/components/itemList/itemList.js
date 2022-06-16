import Item from '../item/item.js';
import React from 'react';
import "./itemList.css";
export default function ItemList({ picsList, id}){
    return (
        <div className="itemList">
            {
            picsList.map((photo) => <Item key={photo.id} photo={photo} />)
            }
        </div>
    );
}
            
            
            
            
