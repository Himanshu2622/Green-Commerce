import React, { useState, useEffect } from 'react';
import './Orders.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import OrderedProduct from './orderedProduct';

function Orders() {
    const[{ history }] = useStateValue();

    const reversedHistory = [...history].reverse();

    return (
        <div className="checkout__left">
            <img className=" checkout__ad"
            src="../images/greenad.png"
            alt=""
            />
            <div>
                <h2 className="checkout__title">Your Orders</h2>
                {reversedHistory.map((item) => (
                    <OrderedProduct
                        id={item.id}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        title={item.title}
                        badge_id={item.badge_id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Orders;