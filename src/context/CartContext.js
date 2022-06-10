import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";
import { createContext, useContext, useState } from "react";  

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext);
}

export default function CartContextProv({children}){
    const [photosList, setPhotoList] = useState([]);
    const [photosQuantityAdedd, setQA] = useState(0)

    function isInCart(id){
        return photosList.some(photo => photo.photo.id === id)
    }
    function addToCart(photo, quantity) {
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
        let QA = 0;
        for(let i = 0; i < array.length; i++) {
            QA += array[i].quantity;
        }
        setQA(QA);
    }
    
     
    function generateOrder(customer) {
        let order = {}
        let date = new Date();
        let orderid = Math.random();

        order.buyer = customer;
        order.photos = photosList.map(photos => {
            const id = photos.photo.id;
            return { id };
        });
        order.date = { date: date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear() }
        order.randomid = orderid;
        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        console.log(order)
        addDoc(queryCollection, order)
        .catch(err => console.log(err))
        .finally(() => clearCart(), 
        )
        
        
        orderId(orderid)
    }    
        
    
    function orderId(a) {
            const db = getFirestore();
            const queryCollection = collection(db, 'orders');
            getDocs(queryCollection)
            .then ( resp =>
                resp.docs.map(item => ({id: item.id, ...item.data()}))
                .map(item => item.randomid === a && alert(item.id)))
            }

    return (
        <cartContext.Provider value={{
            photosList,
            addToCart,
            clearCart,
            clearPhoto,
            photosQuantityAdedd,
            generateOrder,
        }}>
            {children}
        </cartContext.Provider> 
    );
} 
