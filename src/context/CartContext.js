import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";
import { createContext, useContext, useState } from "react";  

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext);
}

export default function CartContextProv({children}){
    const [photosList, setPhotoList] = useState([]);
    const [photosPrice, addPricePhoto] = useState(0);
    const [photosQuantityAdedd, setQA] = useState(0)
    const [orders, setOrders] = useState({})

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
        let result = array.map(item => item.quantity*item.photo.price)
        let resultReduce = result.reduce((a,b) => a + b, 0);
        addPricePhoto(resultReduce);
        let QA = 0;
        for(let i = 0; i < array.length; i++) {
            QA += array[i].quantity;
        }
        setQA(QA);
    }
    
     
    function generateOrder() {
        let order = {}
        let date = new Date();

        order.buyer = { name: "fede", email: "f@gmail.com" , phone: "2931923"};
        order.photos = photosList.map(photos => {
            const id = photos.photo.id;
            const alt = photos.photo.alt;
            const price = photos.photo.price * photos.quantity;
            const quantity = photos.quantity;
            return { id, alt, price, quantity }
        });
        order.date = { date: date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear() }
        order.total = photosPrice;

        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, order)
        .catch(err => console.log(err))
        .finally(() => clearCart())
        getDocs(queryCollection)
        .then ( resp =>
            setOrders(resp.docs.map(item => ({id: item.id, ...item.data()}))))
        
            // for(let i = 0; i < orders.length; i++) {
            //     if (orders[i].buyer.email === order.buyer.email &&  orders[i].date.date === order.date.date && orders[i].total === order.total) {
            //         alert("este es tu id de compra:" + orders[i+1].id)
            //     } else {
            //        console.log("este no es")
            //     }
            // }
    }    
    

    return (
        <cartContext.Provider value={{
            photosList,
            addToCart,
            clearCart,
            clearPhoto,
            photosPrice,
            photosQuantityAdedd,
            generateOrder
        }}>
            {children}
        </cartContext.Provider> 
    );
} 
