import "../data/data.js";
import Item from './item';

const ItemList = (picsList) => {

    return (
        
       picsList.map((photo) => (
        <Item
        id={photo.id}
        imgUrl={photo.imgUrl}
        stock={photo.stock}
        client={photo.client}
        alt={photo.alt}
        />
      ))
    );
}
    

export default ItemList;