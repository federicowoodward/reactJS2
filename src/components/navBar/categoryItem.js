import { Link } from "react-router-dom";
import { React} from 'react';
export default function Item({ category, showMenu }){
  return (
    <>
        <li><Link to={`/category/${category.text}`} onClick={showMenu} ><p>{category.text}</p></Link></li>
    </>
    );   
}
