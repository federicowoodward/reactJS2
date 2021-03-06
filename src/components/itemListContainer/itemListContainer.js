import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { useEffect, useState, memo } from "react";
import ItemList from '../itemList/itemList.js';
import { useParams } from "react-router-dom";
import Loader from '../loader/loader.js';
import "./itemListContainer.css";
function ItemListContainer (){
    const [picsList, setPicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore()
        let queryCollection =   collection(db,"fotos");
        const queryCollectionFilter = !id ?  queryCollection : query(collection(db, "fotos"), where("category", "==", `${id}`));
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
            { !id ? <p className="showCategory">Categoria: Todos</p> : <p className="showCategory">Categoria: {id}</p>}
            {loading ? <Loader/> : <ItemList picsList={picsList} id={id} />}
        </div>
    );
};
export default memo(ItemListContainer);