import ItemList from '../itemList/itemList.js';
import { useEffect, useState } from "react";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore} from "firebase/firestore";


export default function ItemListContainer (){
  const [picsList, setPicsList] = useState([]);
  const [loading, setLoading] = useState(true);
  let idF = undefined;
  const {id} = useParams();

  function setIdFun () {
    id === "todos" ?
    idF = "autos" :
    idF = id;
    // la idea de esta funcion es q setee idF como el parametro q va a usar collection, para q si pido fotos (un coleccion
    // sin crear), devuelva algo (en este caso autos, q es donde mas cree) por alguna razon no funciona como quiero,
    // en collection esta recibiendo "autos" pero no lo registra y no busca fotos. si supiera como devolver todas las colecciones
    }

useEffect(() => {
  setIdFun()
  const db = getFirestore()
  const queryCollection = collection(db, `${idF}`)
  getDocs(queryCollection)
  .then ( resp => setPicsList( resp.docs.map(item => ({id: item.id, ...item.data()}))))
  .catch(err => console.log(err))
  .finally( setLoading(false));
},[])


  return (
      <div>
        {loading ? <h2 className="cargando"> Cargando fotos...</h2> : <ItemList picsList={picsList} id={id} />}
      </div>
  );
};
