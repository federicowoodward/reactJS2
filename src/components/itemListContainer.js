import ItemList from './itemList';
import { useEffect, useState } from "react";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";


export default function ItemListContainer (){
  const [picsList, setPicsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  useEffect(() => {
      fetch("/data/data.js")
      .then((resp) => {
        setPicsList(resp);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="item-list-container">
      <div>
        {loading ? <h2>Cargando fotos...</h2> : <ItemList picsList={picsList} id={id} />}
      </div>
    </section>
  );
};
