import { createContext, useContext, useState } from "react";  

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext);
}

export default function CartContextProv({children}){
    const [photosList, setPhotoList] = useState([])

    function addToCart(item) {
        setPhotoList([
            ...photosList,
            item]);
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
