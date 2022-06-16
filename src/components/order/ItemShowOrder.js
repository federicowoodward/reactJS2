import "./showOrder.css";
import { Link } from "react-router-dom";
export default function ItemShowOrder({order}) {
    return (
        <div className="showOrderContainer">
            <h2> Tu orden:</h2> 
            <p><strong>Tu id:</strong> {order.id}</p>
            <p><strong>Nombre:</strong> {order.buyer.name}</p>
            <p><strong>Comentarios: </strong>{order.buyer.comment}</p>
            <p><strong>Fecha:</strong> {order.date}</p>
            <Link to={"/"}>
                <button>Volver</button>
            </Link>
        </div>
    );
}