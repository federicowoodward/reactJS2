import { createContext, useContext, useState } from "react";  

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext);
}

export default function CartContextProv({children}){
    const [photosList, setPhotoList] = useState([]);
    const [photosAdded, addPhoto] = useState(0);

    function isInCart(id){
        return photosList.some(photo => photo.photo.id === id)
    }
    function addToCart(item) {
        let quantity = item.quantity
        let photo = item.photo
        if (isInCart(photo.id)) {
            let i = photosList.findIndex(i => i.photo.id === photo.id)
            const newList = photosList;
            newList[i].quantity += quantity;
            udapteCart(newList);
        } else {
            udapteCart([...photosList,{photo, quantity}]);
        }
    }
    function clearCart() {
        udapteCart([]);
    }

    function clearPhoto(id) {
        let i = photosList.findIndex(photo => photo.id === id);
        const newPhotoList = photosList;
        newPhotoList.splice(i,1);
        udapteCart(newPhotoList);
    }

    function udapteCart(array) {
        setPhotoList(array);
        let result = array.map(item => item.quantity*item.photo.price);
        result.reduce((a,b) => a + b, 0);
        addPhoto(result);
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
