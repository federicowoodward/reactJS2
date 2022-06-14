import { React} from 'react';

export default function Item({ photo, deleter }){

    function deleteItem() {
        deleter(photo.id)
    }

  return (
      <div className="flexItm">
        <img className="itemImg" src={photo.img} alt={photo.client} title="Agregar imagen?" />
        <button onClick={deleteItem}> Delete</button>
      </div>
    );   
};
