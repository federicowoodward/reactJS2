import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { useState } from 'react';

export default function ItemUpload({img, redirect}) {
    const [item, setItem] = useState({})
    const [upload, setUploadDone] = useState(false)
    let photo = {};

    function generateItem(e) {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }


    function uploadItem() {
  
        photo.alt = item.alt.toLowerCase();
        photo.category = item.category.toLowerCase();
        photo.client = item.client.toLowerCase();
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

    function deletePhoto() {
        const storage = getStorage();
        const desertRef = ref(storage, `${img}`);
        deleteObject(desertRef)
            .then(() => {
                // Swal.fire(
                //     'Imagen borrada!',
                //     'success'
                //   )
            } )
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {redirect()});
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
           
            <button  onClick={deletePhoto}>Borrar foto</button>
        </div>
    );
} else if (upload === true)  {
    <div>
        <h4>Subida lograda! </h4>
        <p> Podes chequearlo en "Fotos" (sin categorias seleccionadas)</p>
        <p>Para subir otra foto:</p>
        {/* <button onClick={uploadAgain}>Subir otra foto</button> */}
    </div>
}}
