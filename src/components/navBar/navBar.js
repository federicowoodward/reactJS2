import CartPhoto from "../../assets/CartPhoto.js";
import Logo from "../../assets/1624241171268.svg";
import { Link } from "react-router-dom";
import QA from "../cart/qa.js";
import "./navBar.css";
export default function NavBar() {

    function showMenu(){
        document.querySelector(".navBarUl").classList.toggle("navBarUl_visibility");
    }
    
    return (
        <div >
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
                            <li><Link to="/category/" onClick={showMenu}>Todos</Link></li>
                                <li><Link to="/category/autos" onClick={showMenu} >Autos</Link></li>
                                <li><Link to="/category/fiesta" onClick={showMenu} >Fiesta</Link></li>
                                <li><Link to="/category/otros" onClick={showMenu} >Otros</Link></li>
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

