import ItemList from '../itemList/itemList.js';
import { useEffect, useState } from "react";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";


export default function ItemListContainer (){
    const [picsList, setPicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    function onAdd(cant) {
    console.log(cant)
    }
  
    useEffect(() => {
 
        const db2 = getFirestore()
        const queryCollection = query(collection(db2, "autos"), where("category", "==", `${id}`));
       
        getDocs(queryCollection)
        .then ( resp => {
            if (resp.size === 0) {
                console.log("no results!");
            } else {
            setPicsList( resp.docs.map(item => ({id: item.id, ...item.data()})))}})
        .catch(err => console.log(err))
        .finally(setLoading(false));
    },[id])

    return (
        <div>
        {loading ? <h2 className="cargando"> Cargando fotos...</h2> : <ItemList picsList={picsList} id={id} onAdd={onAdd}/>}
        </div>
    );
};
