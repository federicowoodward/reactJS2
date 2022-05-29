import { createContext } from "react";  
import { useState} from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [photosList, setPhotoList] = useState([])

    return (
        <CartContext.Provider values={{
            photosList 
        }}>
            {children}
        </CartContext.Provider> 
    )

} 

export default CartContextProvider;