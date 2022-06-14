import { Link } from "react-router-dom";
import { React} from 'react';
import './item.css';
export default function Item({ photo }){
  return (
        <div className="flexItem">
            <Link to={`/category/itemdetail/${photo.id}`}>  
                <img className="itemImg" src={photo.img} alt={photo.client} title="Agregar imagen?" />
            </Link>
        </div>
    );   
}
