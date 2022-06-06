import { UseCartContext } from "../../context/CartContext.js";
import "./qa.css";

export default function QA() {
    const { photosQuantityAdedd } = UseCartContext();
    return (
        <div className="numberQA">
            { photosQuantityAdedd === 0 ? null : <span>{photosQuantityAdedd}</span> }
        </div>
    );
}