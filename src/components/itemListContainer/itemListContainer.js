import ItemList from '../itemList/itemList.js';
import { useEffect, useState } from "react";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";


export default function ItemListContainer (){
  const [picsList, setPicsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  
  useEffect(() => {
      fetch("/data/data.json")
      .then((resp) => resp.json()) 
      .then((resp) => {
        setPicsList(resp);
      })
      .catch(err => console.log(err))
      .finally( setTimeout(() => setLoading(false), 1500) );
  }, []);

  return (
      <div>
        {loading ? <h2>Cargando fotos...</h2> : <ItemList picsList={picsList} id={id} />}
      </div>
  );
};
