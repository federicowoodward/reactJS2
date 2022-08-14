import { addDoc, collection, getFirestore, getDocs} from "firebase/firestore";
import { createContext, useContext, useState } from "react";  
const cartContext = createContext([]);
export function UseCartContext() {
    return useContext(cartContext);
}

export default function CartContextProv({children}){
    const [photosList, setPhotoList] = useState([]);
    const [photosQuantityAdedd, setQA] = useState(0)
    const [orderReady, setOrder] = useState({});
    const [currentNum, setCurrentNum] = useState(0);

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
        let newPhotoList = photosList;
      
        const result = newPhotoList.filter((item) => item.photo.id !== id);

        udapteCart(result);
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
        let date = new Date();
        let orderDate = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear() 
        let order = {}
        let orderid = Math.random();
        
        order.buyer = customer;
        order.photos = photosList.map(photos => {
            const id = photos.photo.id;
            const alt = photos.photo.alt;
            const quantity = photos.quantity;
            return { id, alt, quantity }
        });
        order.date = orderDate;
        order.randomid = orderid;

        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, order)
        .catch(err => console.log(err))
        .finally(() => clearCart())

        setOrder(orderid)
    }    
    function getCurrentNum(text){
        const db = getFirestore()
        let queryCollection = collection(db,"categories");
        getDocs(queryCollection)
        .then ( resp => {
            if (resp.size === 0) {
                setCurrentNum(0)
            } else {
                let array = []
                array = resp.docs.map(item => item.data().myId)
                setCurrentNum(Math.max(...array)) 
                }})
        .finally(modifyCategory(text))
        .catch(err => console.log(err))
    }

    function modifyCategory(text) {
        let category = {};
        
        category.myId =currentNum + 1;
        category.text = text;

        const db = getFirestore();
        const queryCollection = collection(db, 'categories');
        addDoc(queryCollection, category)
        .catch(err => console.log(err))
        .finally(() => category = {})
    }


    return (
        <cartContext.Provider value={{
            photosList,
            addToCart,
            clearCart,
            clearPhoto,
            photosQuantityAdedd,
            generateOrder,
            orderReady,
            getCurrentNum,
            modifyCategory,
        }}>
            {children}
        </cartContext.Provider> 
    );
} 