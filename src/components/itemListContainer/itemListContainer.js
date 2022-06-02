import ItemList from '../itemList/itemList.js';
import { useEffect, useState } from "react";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Loader from '../loader/loader.js';


export default function ItemListContainer (){
    const [picsList, setPicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


 
    
    useEffect(() => {
 
        const db = getFirestore()
        const queryCollection = collection(db,"autos");
        const queryCollectionFilter = id === "photos" ?  query(collection(db, "autos"), where("category", "==", `${id}`)) : queryCollection;
       
        getDocs(queryCollectionFilter)
        .then ( resp => {
            if (resp.size === 0) {
                console.log("no results!");
            } else {
            setPicsList( resp.docs.map(item => ({id: item.id, ...item.data()})))}})
        .catch(err => console.log(err))
        .finally(setTimeout(() => setLoading(false), 2000));
    },[id])

    return (
        <div>
        {loading ? <Loader/> : <ItemList picsList={picsList} id={id}/>}
        </div>
    );
};
