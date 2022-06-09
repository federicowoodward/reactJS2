import { addDoc, collection, getFirestore} from "firebase/firestore";
import { useState } from 'react';
import Upload from "./fileUpload";


export default function ItemUpload({img}) {
    const [item, setItem] = useState({})
    const [upload, setUploadDone] = useState(false)
    const [newUpload, setNewUploadDone] = useState(false);
    let photo = {};

    function generateItem(e) {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }


    function uploadItem() {

        photo.alt = item.alt;
        photo.category = item.category;
        photo.client = item.client;
        photo.img = img;

        const db = getFirestore();
        const queryCollection = collection(db, 'fotos');
        addDoc(queryCollection, photo)
        .catch(err => console.log(err))
        .finally(
            setItem({}),
            photo = {},
            setUploadDone(true)
        )
    };

    function uploadAgain() {
        setNewUploadDone(true);
    }

    function deleteItem() {
        setNewUploadDone(true);
        img = null;
        photo = null;
    }
                 
    if (upload === false) {

        return(
            <div>
            <img src={img} alt="" className="imgUpload"/>
            <form>
                <input name="alt" placeholder="Alt" type="text" onChange={(e) => generateItem(e)}/>
                <input name="category" placeholder="Categoria" type="text" onChange={(e) => generateItem(e)}/>
                <input name="client" placeholder="Cliente" type="text" onChange={(e) => generateItem(e)}/>
            </form>
            <button onClick={uploadItem}>Subir</button>
            <button onClick={deleteItem}>Borrar foto</button>
        </div>
    );
} else if (upload === true) {
    <div>
        <h4>Subida lograda! </h4>
        <p> Podes chequearlo en "Fotos" (sin categorias seleccionadas)</p>
        <p>Para subir otra foto:</p>
        <button onClick={uploadAgain}>Subir otra foto</button>
    </div>
} else if ( newUpload === true) {
    < Upload />
} 
}
