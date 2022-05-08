import "./navBar.css";
// import CartWidget from "./CartWidget.js";

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
                    {/* < CartWidget /> */}
                </ul>
            </div>
        </div>
    );
};

