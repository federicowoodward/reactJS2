
import { UseCartContext } from "../../context/CartContext.js";
import { useState } from "react";
import "./order.css";

export default function Order() {

    const {photosList, clearCart, photosPrice, generateOrder} = UseCartContext();

    const [customerData, setCustomerData] = useState({});
    const [customerDataOk, setCustomerDataOk] = useState(false);
    const [customerMailOk, setCustomerMailOk] = useState(false);
    const [dataError, setDataError] = useState(false);
    const [orderSent, setOrderSent] = useState(false)


    function changeHandler(e) {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    }

    function dataManage() {
        customerDataVerify() ? sendOrderManage(customerData) : setDataError(true) ;
    }


    function sendOrderManage(customerData) {
        setOrderSent(true);
        generateOrder(customerData);
    }
    function customerDataVerify() {
        if (customerData.name && customerData.phone && customerData.email && customerData.email2) {
            setCustomerDataOk(true);
            if (customerData.email === customerData.email2) {
                setCustomerMailOk(true);
            }
        }
        return (customerDataOk && customerMailOk)
    }

    return (

        <div className="orderBody">
            <p>Ingrese sus datos para enviar el pedido:</p>
            <form className="inputGroup" action="">
                <input name="name" onChange={(e) => changeHandler(e)} type="text" placeholder="Nombre" />
                <input name="phone" onChange={(e) => changeHandler(e)} type="tel" placeholder="Teléfono" />
                <input name="email" onChange={(e) => changeHandler(e)} type="email" placeholder="Correo eléctronico" />
                <input name="email2" onChange={(e) => changeHandler(e)} type="email" placeholder="Repita correo electrónico" />
                <textarea name="comment" onChange={(e) => changeHandler(e)} id="" cols="20" rows="2"></textarea>
            </form>
            {dataError ? <p>Alguno de los datos ingresados es incorrecto</p> : <p></p>}
            <button onClick={generateOrder}>Enviar pedido</button>
        </div>
)
}