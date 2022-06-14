import { collection, deleteDoc, getDocs, getFirestore,doc} from "firebase/firestore";
import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import ItemDeleter from '../itemDeleter/itemDeleter.js';
import Loader from '../../loader/loader.js';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

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
        deleteDoc(doc(db, "fotos", `${a}` ))
        .then ( resp => 
            MySwal.fire({
                title: <p>Imagen borrada!!</p>,
                html: <h4>{resp}</h4>,
                icon: "error"
            }) )
    }

    return (
        <div>
        {loading ? <Loader/> : <ItemDeleter picsList={picsList} id={id} deleter={deleteItem}/>}
        </div>
    );
};
export default memo(ItemListContainer);