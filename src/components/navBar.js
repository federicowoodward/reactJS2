import "./navBar.css";

function NavBar() {
    return (
        <div className="App">
            <div className="navBar">
            {/* <img src={logo} className="logonav" alt="logo"/> */}
                <ul className="navBarUl">
                <li><a href="https://reactjs.org">Inicio</a></li>
                <li><a href="https://reactjs.org">Porductos</a></li>
                <li><a href="https://reactjs.org">Sobre nosotors</a></li>
                <li><a href="https://reactjs.org">Contacto</a></li>
                </ul>
                <div className="linea"></div>
            </div>
        </div>
    );
};

export default NavBar;