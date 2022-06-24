import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import withReactContent from 'sweetalert2-react-content';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Swal from "sweetalert2";
import "./itemUpload.css";
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
        const MySwal = withReactContent(Swal)

        const storage = getStorage();
        const desertRef = ref(storage, `${img}`);
        deleteObject(desertRef)
            .then(() => {
                    MySwal.fire({
                        title: <p>Imagen borrada!</p>,
                        icon: "success",
                    })
            } )
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {redirect()});
            }

      if (upload === true)  {
          return( 
            <div className="itemUploadTrue">
                <Link to="/upload">
                    <button> Subir otra foto</button>
                </Link>
                <Link to="/">
                    <button> Volver al inicio</button>
                </Link>
              </div>
                );
    } else if (upload === false) {
        return(
            <div className="itemUpload">
                <img src={img} alt="" className="imgUpload"/>
                <form>
                    <input name="alt" placeholder="Alt" type="text" onChange={(e) => generateItem(e)}/>
                    <input name="category" placeholder="Categoria" type="text" onChange={(e) => generateItem(e)}/>
                    <input name="client" placeholder="Cliente" type="text" onChange={(e) => generateItem(e)}/>
                    <button className="upload" onClick={uploadItem}>Subir</button>
                    <button className="delete" id="delete" onClick={deletePhoto}>Borrar foto</button>
                </form>
            </div>
        );
    }   
}
