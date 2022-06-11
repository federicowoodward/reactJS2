import { React} from 'react';
import './itemDel.css';
import { Link } from "react-router-dom";

export default function Item({ photo}){
  return (
      <div className="flexItem">
        <Link to={`/category/itemdetail/${photo.category + "_" + photo.id}`}>  
        <img className="itemDelImg" src={photo.img} alt={photo.client} title="Agregar imagen?" />
        </Link>
      </div>
    );   
};
