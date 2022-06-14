import CartPhoto from "../../assets/CartPhoto.js";
import { Link } from "react-router-dom";
import QA from "../cart/qa.js";
import "./navBar.css";
export default function NavBar() {
    return (
        <div >
            <div className="navBar"> 
                <div className="logoNav">
                    <Link to="landing">
                        <img src="https://i.ibb.co/FsvLdjd/1624241171268.png" alt="1624241171268" height="85px" />
                    </Link>
                </div>
                <div>
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
                        <li><Link to="/cart"><CartPhoto/></Link></li>
                        <QA/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

