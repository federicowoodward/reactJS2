import { Link } from "react-router-dom";
import  React from 'react';
import './item.css';
export default function Item({ photo }){
    return(
        React.createElement(
            "div",
            {
            className: "flexItem",
            key: photo.id
            },
            React.createElement(
                Link,
                {
                    to: `/category/itemdetail/${photo.id}`
                },
                React.createElement("img", {
                    className: "itemImg",
                    src: photo.img,
                    alt: photo.client,
                    title: "Agregar imagen?"
                })
            )
        )
    );
}
