import { Link } from "react-router-dom";
import "./landing.css";
export default function landing() {
    return (
    <div className="mainLanding">
        <div className="fondoFiltro"></div>
        <div className="landing">
            <h1>Franco peña</h1>
            <figure>
                <h4>| Fotografia</h4>
            </figure>
                <Link to="/category/">
                    <button>
                            <div className="fancy">
                                <span className="top-key"></span>
                                <span className="text">Ver fotos</span>
                                <span className="bottom-key-1"></span>
                                <span className="bottom-key-2"></span>
                            </div>
                    </button>
                </Link>
        </div>
        <div className="relleno"></div>
    </div>
    );
}