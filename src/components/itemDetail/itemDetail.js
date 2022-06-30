import { UseCartContext } from "../../context/CartContext.js";
import BuyButtons from "../buyButtons/buyButtons.js";
import ItemCount from "../itemCount/itemCount.js";
import { useState } from "react";
import React from "react";
import "./itemDetail.css";
export default function ItemDetail({photo}) {
    const [inputType, setInputType] = useState("itemCount");
    const {addToCart} = UseCartContext();

    function onAdd(quantity) {
        addToCart({photo, quantity});
        setInputType("buyButtons");
    }

    return (
        React.createElement(
            "div",
            {
              className: "itemDetail"
            },
            /*#__PURE__*/ React.createElement("img", {
              className: "itemDetailImg",
              src: photo.img,
              alt: photo.alt
            }),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "itemDetailInfo"
              },
              /*#__PURE__*/ React.createElement(
                "p",
                {
                  className: "itemDetailCliente"
                },
                "Cliete: ",
                photo.client
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                {
                  className: "itemDetailDetail"
                },
                "Detalle: ",
                photo.alt
              ),
              inputType === "itemCount"
                ? /*#__PURE__*/ React.createElement(ItemCount, {
                    initial: 1,
                    stock: 2,
                    onAdd: onAdd
                  })
                : /*#__PURE__*/ React.createElement(BuyButtons, null)
            )
          )
    );
}