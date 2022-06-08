import { React} from 'react';
import './item.css';
import { Link } from "react-router-dom";

export default function Item({ photo}){
  console.log(photo);
  return (
      <div className="flexItem">
        <Link to={`/category/itemdetail/${photo.category + "_" + photo.id}`}>  
        <img className="itemImg" src={photo.imgUrl} alt={photo.client} title="Agregar imagen?" />
        </Link>
      </div>
    );   
};
