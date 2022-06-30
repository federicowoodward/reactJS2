import { Link } from "react-router-dom";
import { React} from 'react';
export default function Item({ category, showMenu }){

    function closeNav() {
    showMenu();
    }

    return (
        <>
            <li><Link to={`/category/${category.text}`} onClick={closeNav} ><p>{category.text}</p></Link></li>
        </>
    );   
}
