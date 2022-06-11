import React from 'react';
import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import ItemDeleter from './itemDeleter.js';
import Loader from '../loader/loader.js';

function ItemListContainer (){
    const [picsList, setPicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db,"fotos");
        // const queryCollectionFilter = id === "photos" ? queryCollection :  query(collection(db, "fotos"), where("category", "==", `${id}`));
        getDocs(queryCollection)
        .then ( resp => {
        setPicsList( resp.docs.map(item => ({id: item.id, ...item.data()})))})
        .catch(err => console.log(err))
        .finally(setTimeout(() => setLoading(false), 4000));
    },[id])
    return (
        <div>
        {loading ? <Loader/> : <ItemDeleter picsList={picsList} id={id} />}
        </div>
    );
};
export default memo(ItemListContainer);