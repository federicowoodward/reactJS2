import { createContext, useContext, useState } from "react";  

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext);
}

export default function CartContextProv({children}){
    const [photosList, setPhotoList] = useState([]);
    const [photosAdded, addPhoto] = useState(0);

    function isItCart(id){
        return photosList.some(photo => photo.id === id)
    }
    function addToCart(item) {
        if (isItCart(item.id)) {
            let i = photosList.findIndex(photo => photo.id === item.id)
            const newList = photosList;
            newList[i].quantity += item.quantity;
            udapteCart(newList);
        } else {
            udapteCart([...photosList,item]);
        }
    }

    function clearCart() {
        udapteCart([]);
    }

    function clearPhoto(id) {
        let i = photosList.findeIndex(photo => photo.id === id);
        const newPhotoList = photosList;
        newPhotoList.splice(i,1);
        udapteCart(newPhotoList);
    }

    function udapteCart(array) {
        setPhotoList(array);
        addPhoto( array
            .map(num => num.quantity*num.price)
            .reduce((acc,num) => acc + num,0) 
        );
    }
    return (
        <cartContext.Provider value={{
            photosList,
            addToCart,
            clearCart,
            clearPhoto,
            photosAdded
        }}>
            {children}
        </cartContext.Provider> 
    );
} 
