import React, { useState } from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';
import Orders from './Orders';

const Subtotal = () => {
    const [{ basket , history }, dispatch] = useStateValue();

    const handleProceed = () => {
      if (basket.length > 0) { // Check if the basket is not empty
        dispatch({
          type: "ADD_TO_HISTORY",
          items: basket,
        });
  
        dispatch({
          type: 'CLEAR_BASKET',
        });
      }
    }

    return (
    <div className = "subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" className='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      {basket.length > 0 ? (
        <Link style={{ textDecoration: 'none' }} to="/thanks">
          <button className="proceed" onClick={handleProceed}>Proceed to Buy</button>
        </Link>
      ) : (
        <button className="proceed" disabled={true}>Proceed to Buy</button>
      )}
    </div>
  )
}

export default Subtotal;