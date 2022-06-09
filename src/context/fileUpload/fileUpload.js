import { getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import React, { useState } from 'react';
import ItemUpload from "./itemUpload";
import "./upload.css";

export default function Upload(){
    const [uploadState, setUpState] = useState(false);
    const [uploadImg, setImg] = useState();
    const [newUpload, setNewUploadDone] = useState(false);

    function handleUpload(event) {
        const file = event.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, `/fotos/${file.name}`);
        const task = uploadBytesResumable(storageRef, file);

        task.on('state_changed', snapshot => {
            let percentage = ( snapshot.bytesTransferred / snapshot.totalBytes) + 100;
            if (percentage === 101) {
                setUpState(true);
            }
        }, err => { 
            console.log(err.message) 
        }, () => { 
           getDownloadURL(task.snapshot.ref).then((downloadURL) => {
               setImg(downloadURL);
           })
        });
    }

    
 

    if (uploadState === true) {
        return (
            <div>
                <ItemUpload img={uploadImg} /> 
            </div>
        );
    } else if (uploadState === false) {

        return (
            <div>
                <br/>
                <input type="file" onChange={(e) => handleUpload(e)}/> 
            </div>
        )
    }
}
