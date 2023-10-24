import React from "react";
import "./Productbutton.css";
import { useStateValue } from "./StateProvider";
//import Popover from "./Popover";
import { Link } from "react-router-dom";


function Productbutton({ title, image, id, price, rating, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();


  const handleLinkClick = () => {
    // Scroll to the top of the page when the link is clicked
    window.scrollTo(0, 0, { behavior: "instant" });
  };
  
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        badge_id,
      },
    });
  };

  return (
    <div className="productb">
      {/* <div className="product__bestsellerb">BESTSELLER</div> */}
      <div className="product__infob">
        <p>{title}</p>
        <div className="product__priceb">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__ratingb">
          {Array(rating)
            .fill()
            .map((rate) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className = "normal" onClick={addToBasket}>Add to Cart</button>
      <Link to="/product">
        <button onClick={handleLinkClick} className="greenovation">Available on Greenovation</button>
      </Link>    </div>
  );
}

export default Productbutton;