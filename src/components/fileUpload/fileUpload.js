import { getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import React, { useState } from 'react';
import ItemUpload from "./itemUpload";
import "./upload.css";
export default function Upload(){
    const [uploadState, setUpState] = useState(false);
    const [uploadImg, setImg] = useState();
    const [progress, setProgress] = useState(0);
    const [color, Color] = useState("white");

    function setColor(num) {
        switch(num) {
            case 0:
                Color("white")
                break;
            case 20:
                Color("green1")
                break;
            case 40:
                Color("green2")
                break;
            case 60:
                Color("green3")
                break;
            case 80:
                Color("green4")
                break;
            case 99:
                Color("green5")
                break;
            default:
                Color("white");
        }  
    }
    function redirectToUpload() {
        window.location.reload()
    }
    function handleUpload(event) {
        const file = event.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, `/fotos/${file.name}`);
        const task = uploadBytesResumable(storageRef, file);
        
        task.on('state_changed', snapshot => {
            let percentage = ( snapshot.bytesTransferred / snapshot.totalBytes * 100);
            if (percentage > 20) { setProgress(20); setColor(20);
            } if (percentage > 40) { setProgress(40); setColor(40);
            } if (percentage > 60) { setProgress(60); setColor(60);
            } if (percentage > 80) { setProgress(80); setColor(80);
            } if (percentage > 99) { setProgress(99); setColor(99);
            } if (percentage === 100) { setUpState(true); 
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
                <ItemUpload img={uploadImg} redirect={redirectToUpload}/> 
            </div>
        );
    } else if (uploadState === false) {

        return (
            <div className="selectContainer">
                <p className="select"> Seleccionar archivo:</p>
                <br/>
                <input className="selectInput" type="file" onChange={(e) => handleUpload(e)}/> 
                <div className="progressBar">
                    <p className={color}>%{progress}</p>
                </div>
            </div>
        )
    }
}