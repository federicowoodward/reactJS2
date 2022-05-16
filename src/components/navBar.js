import "./navBar.css";
import CartWidget from "../assets/carrito.js";
import "./cartWidget.css"

export default function NavBar() {
    return (
        <div >
            <div className="navBar"> 
                <div className="logoNav">
                <img src="https://i.ibb.co/FsvLdjd/1624241171268.png" alt="1624241171268" height="85px" />
                    
                </div>
                <ul className="navBarUl">
                    <li><a href="https://reactjs.org">Inicio</a></li>
                    <li><a href="https://reactjs.org">Fotos</a></li>
                    <li><a href="https://reactjs.org">Sobre mi</a></li>
                    <li><a href="https://reactjs.org">Contacto</a></li>
                    < CartWidget className="carrito"/>
                </ul>
            </div>
        </div>
    );
};

