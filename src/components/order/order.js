import { UseCartContext } from "../../context/CartContext.js";
import ShowOrder from "./showOrder.js";
import { useState } from "react";
import "./order.css";
export default function Order() {
    const {generateOrder} = UseCartContext();
    const [customer, setCustomer] = useState({});
    const [err, setErr] = useState(false);
    const [errmessage, setErrMsg] = useState("a");
    const [envoy, setEnvoy] = useState(false);
    
    function generateCustomer(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }
    function dataManage() {
        const validName = (name) => /^[a-zA-Z ]+$/.test(name);
        
        if (customer.email !== customer.email2){
            catchErr("email");
        } 
        if (!validName(customer.name) === true) {  
            catchErr("name")
        }
        if (customer.number < 10 ) {
            catchErr("number")
        }
        sendData();
    }
    function catchErr(err) {
        switch (err) {
            case "email":
                setErrMsg("El correo es distinto.")
                break;
            case "name":
                setErrMsg("El nombre no puede contener numeros, solo nombre y apellido")
                break;
            default:
            setErr(false);
        }
        setErr(true)
    };
    function sendData() {
        delete customer.email2;
        generateOrder(customer);
        setEnvoy(true);
    }
    if (envoy === false) {
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
        );
    }    
    else {
        return (
            <div>
                < ShowOrder/>
            </div>
        );
    }
}



