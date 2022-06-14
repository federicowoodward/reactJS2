import { collection, deleteDoc, getDocs, getFirestore,doc} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import withReactContent from 'sweetalert2-react-content';
import ItemDeleter from '../itemDeleter/itemDeleter.js';
import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import Loader from '../../loader/loader.js';
import Swal from "sweetalert2";

function ItemListContainer (){
    const [picsList, setPicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db,"fotos");
        getDocs(queryCollection)
        .then ( resp => {
            if (resp.size === 0) {
                alert("no hay fotos para mostrar")
            } else {
                setPicsList( resp.docs.map(item => ({id: item.id, ...item.data()})))}})
                .catch(err => console.log(err))
        .finally(setTimeout(() => setLoading(false), 2000));
    },[id])

    function deleteItem(a) {
        const MySwal = withReactContent(Swal)
        const db = getFirestore()
        const storage = getStorage();
        deleteDoc(doc(db, "fotos", `${a.id}` ))
        .then(() => {
            const desertRef = ref(storage, `${a.img}`);
            deleteObject(desertRef)
        })
        .then ( resp => 
            MySwal.fire({
                title: <p>Imagen borrada!!</p>,
                text: resp,
                icon: "success"
            }) )
        .catch(err => console.log(err))   
        .finally( window.location.reload());
    }

    return (
        <div>
        {loading ? <Loader/> : <ItemDeleter picsList={picsList} id={id} deleter={deleteItem}/>}
        </div>
    );
};
export default memo(ItemListContainer);