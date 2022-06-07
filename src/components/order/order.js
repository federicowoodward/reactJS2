
import { UseCartContext } from "../../context/CartContext.js";
import { useState } from "react";
import "./order.css";

export default function Order() {

    // const {photosList, clearCart, photosPrice, generateOrder} = UseCartContext();
    const [customer, setCustomer] = useState({})
    const [err, setErr] = useState(false)

    function generateCustomer(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    const validName = (name) => /^[a-zA-Z]+$/.test(name);
    function dataManage() {
        if (customer.email === customer.email2) {
            delete customer.email2;
        } else {
            catchErr("email")
        } 
        if (validName(customer.name === true)) {
            setErr(false)
        } else {
            catchErr("name")}
        
        if (!customer.number.includes("+")) {
            catchErr("number")
        }
    }
    let errmessage = "";
    function catchErr(err) {
        switch (err) {
            case "email":
                errmessage = "El correo es distinto.";
                break;
            case "name":
                errmessage = "El nombre no puede contener numeros, solo nombre y apellido";
                break;
            case "number": 
                errmessage = "El formato de numero es +(codigo de pais)"
                break;
            default:
                setErr(false);
        }
        setErr(true)
    };

    return (

        <div className="orderBody">
            <p>Ingrese sus datos para enviar el pedido:</p>
            <form className="inputGroup" action="">
                <input name="name" onChange={(e) => generateCustomer(e)} type="text" placeholder="Nombre" />
                <input name="phone" onChange={(e) => generateCustomer(e)} type="tel" placeholder="Teléfono" />
                <input name="email" onChange={(e) => generateCustomer(e)} type="email" placeholder="Correo eléctronico" />
                <input name="email2" onChange={(e) => generateCustomer(e)} type="email" placeholder="Repita correo electrónico" />
                <textarea name="comment" onChange={(e) => generateCustomer(e)} id="" cols="20" rows="2"></textarea>
            </form>
            {err ? <p>Error: {errmessage}</p> : <p></p>}
            <button onClick={dataManage}>Enviar pedido</button>
        </div>
)
}