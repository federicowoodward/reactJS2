import React from 'react';
import "../data/data";
import Item from './item.js';


const ItemList = ({ picsList, id }) => {
  
    return (
      <div className="productListContainer">
        { id?
        picsList.filter(photo => photo.id === id).map((photo) => <Item key={photo.id} photo={photo}/>):
        picsList.map((photo) => <Item key={photo.id} photo={photo}/>)
        }
      </div>
    );
}
export default ItemList;
            
            
            
            
            
            
//             {picsList.map(( photo ) => (
// <div key={photo.id}>
//             <Item
//             imgUrl={photo.imgUrl}
//             alt={photo.alt}
//             client={photo.client}
//             />
//           </div>
//         ))}