import CartPhoto from "../../assets/CartPhoto.js";
import { collection, getDocs, getFirestore} from "firebase/firestore";
import Logo from "../../assets/1624241171268.svg";
import { Link } from "react-router-dom";
import QA from "../cart/qa.js";
import "./navBar.css";
import CategoryItem from "./categoryItem.js";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [categoryList, setList] = useState([]);

    function showMenu(){
        document.querySelector(".navBarUl").classList.toggle("navBarUl_visibility");
    }
    
    useEffect(() => {
        if (sessionStorage.getItem("firstReload") === null) {
            getCategories()
            sessionStorage.setItem("firstReload", true)
        }
        else if (sessionStorage.getItem("firstReload") === "false") {
            getCategories()
            sessionStorage.setItem("firstReload", true)
        }
    })

    function getCategories() {
         const db = getFirestore()
        const queryCollection = collection(db, 'categories');
        getDocs(queryCollection)
        .then ( resp => setList( resp.docs.map(item => ({id : item.id , ...item.data()}))))
        .catch(err => console.log(err))
        .finally( setTimeout(() => sessionStorage.setItem("firstReload", false), 1000))
    }

    return (
        <div>
            <div className="navBar"> 
                <div className="logoNav">
                    <Link to="landing">
                        <img src={Logo} alt="Logo Franco peña fotografia"/>
                    </Link>
                </div>
                <button  className="hamburger" onClick={showMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className="navBarMenu">
                    <ul className="navBarUl">
                        <li><p><Link to="/landing" onClick={showMenu} >Inicio</Link></p></li>
                        <li><p>Fotos<span className="material-symbols-outlined expandMoreIcon">expand_more</span></p> 
                            <ul>
                                <li><Link to="/category/" onClick={showMenu}><p>Todos</p></Link></li>
                                {categoryList.map(item =>  <CategoryItem key={item.id} category={item} function={showMenu}/>)}
                            </ul>
                        </li>
                        <li><p><Link to="introduce" onClick={showMenu} >Sobre mi</Link></p></li>
                        <li><p><Link to="contact"  onClick={showMenu} >Contacto</Link></p></li>
                    </ul>
                </div>
                <div className="cartImg">
                    <Link to="/cart"><CartPhoto/></Link>
                    <QA/>
                </div>
            </div>
        </div>
    );
};

