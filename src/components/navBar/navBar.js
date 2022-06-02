import "./navBar.css";
import { Link } from "react-router-dom";

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
                        <li><Link to="/category/autos">autos</Link></li>
                        <li><Link to="/category/fiesta">fiesta</Link></li>
                        <li><Link to="/category/otros">otros</Link></li>
                        <li><Link to="/landing">Inicio</Link></li>
                        <li><Link to="/category/photos">Fotos</Link></li>
                        <li><Link to="introduce">Sobre mi</Link></li>
                        <li><Link to="contact">Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

