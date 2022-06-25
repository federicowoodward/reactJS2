import ItemDelete from '../ItemDelete/itemDelete.js';
import React from 'react';
import "./itemDeleter.css";

export default function ItemList({ picsList, id, deleter}){
    return (
        <div className="itemDeleter">
                {
                picsList.map((photo) => <ItemDelete key={photo.id} photo={photo} deleter={deleter} />)
                }
        </div>
    );
}
            
            
            