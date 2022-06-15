export default function ItemShowOrder({order}) {
    return (
        <div>
            <p>Tu id: {order.id}</p>
            { <p>Nombre: {order.buyer.name}</p> }
            { <p>Comentarios: {order.buyer.comment}</p> }
            <p>Fecha: {order.date}</p>
        </div>
    );
}