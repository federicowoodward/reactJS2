import ItemDelete from '../ItemDelete/itemDelete.js';
import React from 'react';


export default function ItemList({ picsList, id, deleter}){
    return (
        <div className="itemLst">
                {
                id?
                picsList.filter(photo => photo.category === id).map((photo) => <ItemDelete key={photo.id} photo={photo} deleter={deleter} />)
                :
                picsList.map((photo) => <ItemDelete key={photo.id} photo={photo} deleter={deleter} />)
                }
        </div>
    );
}
            
            
            