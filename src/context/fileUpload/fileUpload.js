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
        if (num === 0) { Color("white")}
        if (num === 20) { Color("green1")
        }
        if (num === 40) { Color("green2")
        }
        if (num === 80) { Color("green3")
        }
        if (num === 99) { Color("green4")
        }
    }

    function redirectToUpload() {
        setUpState(false);
        setColor(0);
        setProgress(0);
        setImg();
    }
  
    function handleUpload(event) {
        const file = event.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, `/fotos/${file.name}`);
        const task = uploadBytesResumable(storageRef, file);
        
        task.on('state_changed', snapshot => {
            let percentage = ( snapshot.bytesTransferred / snapshot.totalBytes);
            if (percentage > 0.2) { setProgress(20); setColor(20);
            } if (percentage > 0.4) { setProgress(40); setColor(40);
            } if (percentage > 0.6) { setProgress(60); setColor(60);
            } if (percentage > 0.8) { setProgress(80); setColor(80);
            } if (percentage > 0.999) { setProgress(99); setColor(99);
            } if (percentage === 1) { setUpState(true); 
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
