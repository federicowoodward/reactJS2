import { Link } from "react-router-dom";
import "./landing.css";
export default function landing() {
    return (
    <main className="mainLanging">
        <div className="fondoFiltro"></div>
        <div className="landing">
            <h1>Franco peña</h1>
            <figure>
                <h4>| Fotografia</h4>
            </figure>
            <button>
                <a className="fancy" href="instagram.com">
                    <span className="top-key"></span>
                    <Link to="/category/all">
                        <span className="text">Ver fotos</span>
                    </Link>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </a>
            </button>
        </div>
        <div className="relleno"></div>
    </main>
    );
}