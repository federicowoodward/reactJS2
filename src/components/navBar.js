import "./navBar.css";
// import CartWidget from "./CartWidget.js";

export default function NavBar() {
    return (
        <div >
            <div className="navBar"> 
                <div className="name">
                    {/* <a href="index.html"><h2>Franco Peña </h2></a> */}
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

