import Item from './itemDel.js';
import React from 'react';


export default function ItemList({ picsList, id}){
    return (
        <div className="itemList">
                {
                id?
                picsList.filter(photo => photo.category === id).map((photo) => <Item key={photo.id} photo={photo}/>)
                :
                picsList.map((photo) => <Item key={photo.id} photo={photo} />)
                }
        </div>
    );
}
            
            
            
            
