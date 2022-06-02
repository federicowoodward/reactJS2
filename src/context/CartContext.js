import { createContext, useContext, useState } from "react";  

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext);
}

export default function CartContextProv({children}){
    const [photosList, setPhotoList] = useState([])

    function isItCart(id){
        return photosList.some(photo => photo.id === id)
    }

    function addToCart(item) {
        if (isItCart(item.id)) {
            let i = photosList.findIndex(photo => photo.id === item.id)
            const newList = photosList;
            newList[i].quantity += item.quantity;
            setPhotoList(newList);
        } else {
              setPhotoList([
                  ...photosList,
                  item]);
        }
    }

    function clearCart() {
        setPhotoList([])
    }

    // function clearPhoto(id) {
    //     no lista
    // }

    return (
        <cartContext.Provider value={{
            photosList,
            addToCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider> 
    );
} 
