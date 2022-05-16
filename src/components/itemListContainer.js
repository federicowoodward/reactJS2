import "./itemListContainer.css";
import { picsList } from "../data/data.js";
import ItemList from './itemList';
import { useEffect, useState } from "react";

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(picsList);
  }, 2000);
});

export default function ItemListContainer (){
  const [picsList, setPicsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts
      .then((resp) => {
        setPicsList(resp);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="item-list-container">
      <div>
        {loading ? <h2>Cargando fotos...</h2> : <ItemList products={picsList} />}
      </div>
    </section>
  );
};
