import { UseCartContext } from "../../context/CartContext.js";
import { doc, getDocs, getFirestore, collection, deleteDoc } from "firebase/firestore";
import { useState} from "react";
import "./categoryManager.css";
export default function CategoryManager() {
    const {getCurrentNum} = UseCartContext();
    const [newCategory,setCategoryName] = useState("");
    const [categoryToDelete,setDeleteName] = useState("");

    function generateNewCategory(e) {
        setCategoryName(
            e.target.value.toLowerCase()
        );
    }
    function generateDeleterCategory(e) {
        setDeleteName(
            e.target.value.toLowerCase()
        );
    }
    function sendCategory() {
        getCurrentNum(newCategory)
        setCategoryName("")
        setTimeout(() => window.location.reload(), 1000)
    } 
    function deleteCategory() {
        getId(categoryToDelete)
    }
    function getId(text) {
        const db = getFirestore()
        const queryCollection = collection(db, 'categories');
        getDocs(queryCollection)
        .then ( resp => resp.docs.map(item => ({id: item.id, text: item.data().text})).map(item => {
            if (item.text === text)(getCategoryToDelete(item.id))
            return null;
        })) 
        .catch(err => console.log(err))
    }
    function getCategoryToDelete(id) {
        const db = getFirestore()
        deleteDoc(doc(db, "categories", `${id}` ))
        .finally( setTimeout(() => window.location.reload(), 1000))
    }
    return(
        <div className="categoryManager">
            <div className="instructions">
                <h1>Instrucciones:</h1>
                <h4>Para agregar una categoria, escribela y luego presiona el boton enviar. Podras revisarlas en el navegador</h4>
                <h4>Para eliminarla sigue el mismo proceso anterior.</h4>
            </div>
            <span>Categoria a sumar: {newCategory}</span>
            <input name="category" type="text" placeholder="Escribe categoria a agregar" onChange={(e) => generateNewCategory(e)} />
            <button onClick={sendCategory}>Enviar</button>
            <span>Categoria a eliminar: {categoryToDelete}</span>
            <input name="categoryDelete" type="text" placeholder="Escribe categoria a eliminar" onChange={(e) => generateDeleterCategory(e)} />
            <button onClick={deleteCategory}>Enviar</button>
        </div>
    );
}