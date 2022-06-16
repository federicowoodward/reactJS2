import { doc, getDoc, getFirestore} from "firebase/firestore";
import ItemDetail from "../itemDetail/itemDetail.js";
import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/loader.js";
import './itemDetailContainer.css';
import { Link } from "react-router-dom";
import withReactContent from 'sweetalert2-react-content';
import Swal from "sweetalert2";

function ItemDetailContainer() {
    const [photo,setPhoto] = useState({});
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState(true);
    const {id} = useParams();
  
    useEffect(() =>{
        const MySwal = withReactContent(Swal)
        const db = getFirestore()
        const dbQuery = doc(db, "fotos", `${id}`)
        getDoc(dbQuery) 
        .then(resp => {
            if (resp.data() === undefined) {
                setData(false);
                MySwal.fire({
                    title: <p>Esta foto no existe!</p>,
                    icon: "error",
                })
            } else {
                setPhoto( {id: resp.id, ...resp.data()})
            }
        })
        .catch(err => console.error(err))
        .finally(setLoading(false));
      }, [id])

    return (
        <div className="detailContainer">
            { loading ? <Loader/> : data ?
            <ItemDetail photo={photo}/> :
            <Link to={"/category/"}>
                 <button className="returnButtonDetail">
                    <span className="button_top" >Volver a fotos</span>
                </button>
            </Link>
            }
        </div>
    );
};
export default memo(ItemDetailContainer);