import { doc, getDoc, getFirestore} from "firebase/firestore";
import { UseCartContext } from "../../context/CartContext.js";
import { useEffect, useState } from "react";
import Loader from "../loader/loader.js";
import ItemShowOrder from "./ItemShowOrder.js";

export default function ShowOrder() {
    const {orderRealId} = UseCartContext();
    const [orderStatus, setStatus] = useState(false);
    const [order,setOrder] = useState({});

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "orders", `${orderRealId}`)
        getDoc(dbQuery) 
        .then(resp => setOrder( {id: resp.id, ...resp.data()}))
        .catch(err => console.error(err))
        .finally(setStatus(true));
    },[orderRealId])
   
    return (
        <div>
            { orderStatus ? <ItemShowOrder order={order}/> : <Loader />}
        </div>
    );
}