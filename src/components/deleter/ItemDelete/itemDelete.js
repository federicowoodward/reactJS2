import { React} from 'react';
import "./itemDelete.css";

export default function Item({ photo, deleter }){

    function deleteItem() {
        deleter(photo)
    }

  return (
      <div className="itemDelete">
        <img src={photo.img} alt={photo.client} title=""/>
                <button onClick={deleteItem}> Delete</button>
      </div>
    );   
};
