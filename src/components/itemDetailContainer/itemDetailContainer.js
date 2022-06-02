import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail.js";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import './itemDetailContainer.css';

export default function ItemDetailContainer() {
    const [photo,setPhoto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    let idSplit = id.split('_');
  

    useEffect(() =>{
        const db = getFirestore()
        const dbQuery = doc(db, `${idSplit[0]}`, `${idSplit[1]}`)
        getDoc(dbQuery) 
        .then(resp => setPhoto( {id: resp.id, ...resp.data()}))
        .catch(err => console.error(err))
        .finally(setLoading(false));
      }, [idSplit])

    return (
        <div>
            { loading ? <h4 className="cargando">Esperando respuesta</h4> : <ItemDetail photo={photo}/>}
        </div>
    );
};