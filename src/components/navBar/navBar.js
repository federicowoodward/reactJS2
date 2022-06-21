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
                        <li><Link to="/landing">Inicio</Link></li>
                        <li><Link to="/category/">Fotos</Link>
                            <ul>
                                <li><Link to="/category/autos">Autos</Link></li>
                                <li><Link to="/category/fiesta">Fiesta</Link></li>
                                <li><Link to="/category/otros">Otros</Link></li>
                            </ul>
                        </li>
                        <li><Link to="introduce">Sobre mi</Link></li>
                        <li><Link to="contact">Contacto</Link></li>
                        <QA/>
                    </ul>
                </div>
                <div className="cartImg">
                <Link to="/cart"><CartPhoto/></Link>
                </div>
            </div>
        </div>
    );
};

