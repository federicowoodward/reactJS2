import React from 'react';
import "../data/data.js";
import Item from './item.js';

const ItemList = ({ picsList }) => {
  let photo = []; 
    return (
      picsList.map(item => ( <Item photos={ photo }/>
      ))
    );
}
    

export default ItemList;