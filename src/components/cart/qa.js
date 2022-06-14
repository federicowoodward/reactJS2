import { UseCartContext } from "../../context/CartContext.js";
import "./qa.css";
export default function QA() {
    const { photosQuantityAdedd } = UseCartContext();
    return (
        <div >
            { photosQuantityAdedd === 0 ? null : photosQuantityAdedd > 9 ?
            <span className="numberQA10">{photosQuantityAdedd}</span> :
            <span className="numberQA">{photosQuantityAdedd}</span> }
        </div>
    );
}