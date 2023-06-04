// import React from 'react';

import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCard = () => {
  const [card] =useCart();
  console.log(card);
  const total = card.reduce((sum,item)=>item.price + sum,0)
    return (

        <div>
            <Helmet>
                <title>Bristo / mycard</title>
            </Helmet>
        <div className="uppercase">
        <h2 className="text-3xl">total items:{card.length}</h2>
        <h2 className="text-3xl">total price:${total}</h2>
        <button className="btn btn-warning btn-sm">pay</button>
        </div>
        </div>
    );
};

export default MyCard;