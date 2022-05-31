import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail.js";
// import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [photo,setPhoto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    id.toString()
    useEffect(() => {
        fetch("/data/data.json")
        .then(resp => resp.json())
        .then(photos => photos.find(pics => pics.id === id))
        .then(data => setPhoto(data))
        .catch(err => console.error(err))
        .finally( setTimeout(() => setLoading(false), 2000) );
    },[id]);

    return (
        <div>
            { loading ? <h4>Esperando respuesta</h4> : <ItemDetail photo={photo}/>}
        </div>
    );
};