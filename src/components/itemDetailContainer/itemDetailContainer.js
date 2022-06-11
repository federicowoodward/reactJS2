import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail.js";
import Loader from "../loader/loader.js";
import './itemDetailContainer.css';

function ItemDetailContainer() {
    const [photo,setPhoto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
  
    useEffect(() =>{
        const db = getFirestore()
        const dbQuery = doc(db, `fotos`, `${id}`)
        getDoc(dbQuery) 
        .then(resp => setPhoto( {id: resp.id, ...resp.data()}))
        .catch(err => console.error(err))
        .finally(setLoading(false));
      }, [id])

    return (
        <div>
            { loading ? <Loader/> : <ItemDetail photo={photo}/>}
        </div>
    );
};
export default memo(ItemDetailContainer);