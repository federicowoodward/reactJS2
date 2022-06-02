import { Link } from "react-router-dom";

export default function BuyButtons() {
    
    return (
        <div className="buyButtons">
            <Link to='/cart'>
                <button className="buyButtonsCart">Ver carrito</button>
            </Link>
            <Link to='/'>
                <button className="buyButtonsMenu">Volver al menú</button>
            </Link>
        </div>
    );

}

