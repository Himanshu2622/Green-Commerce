import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';

function Checkout () {
    const [{ basket }, dispatch] = useStateValue();

    return (
    <div className="checkout">
        <div className="checkout__left">
            <Link to = "/green">
            <img className=" checkout__ad"
            src="../images/greenad.png"
            alt=""
            />
            </Link>
            <div>
                <h2 className="checkout__title">Your shopping Cart</h2>
                {basket.map((item) => (
                    <CheckoutProduct
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
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>

    
    )
}

export default Checkout

