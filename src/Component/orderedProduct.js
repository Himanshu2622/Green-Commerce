import React, { useState } from "react";
import "./orderedProduct.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function OrderedProduct({ id, image, title, price, rating, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showOkText, setShowOkText] = useState(false); // Add state for text visibility
  const [isButtonDisabled, setButtonDisabled] = useState(false); // Add state to disable the button

  let eco_friendly = "";

  if (badge_id > 0) {
    eco_friendly = "Eco-Friendly";
  }

  const handleReturnButtonClick = () => {
    // Set showOkText to true when the button is clicked
    setShowOkText(true);

    // Disable the button after it's clicked
    setButtonDisabled(true);
  };

  const handleLinkClick = () => {
    // Scroll to the top of the page when the link is clicked
    window.scrollTo(0, 0);
  };

  return (
    <div className="orderedProduct">
      <img src={image} alt="" className="orderedProduct__image" />
      <div className="orderedProduct__info">
        <p className="orderedProduct__title">{title}</p>
        <p className="orderedProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="orderedProduct__rating">
          {Array(rating)
            .fill()
            .map((rate, index) => (
              <p key={index}>⭐</p>
            ))}
        </p>
        <p className="ecofriendly">{eco_friendly}</p>
      </div>
      <div className="orderedProduct__buttons">
        <button className="nor">Return or Replace items</button>
        <button className="nor">Write a product review</button>
        {badge_id > 0 && (
          <Link to="/feedback">
            <button className="grn_feedback">Feedback</button>
          </Link>
        )}
        <button
          className={`grn ${isButtonDisabled ? "disabled" : ""}`}
          onClick={handleReturnButtonClick}
          disabled={isButtonDisabled} // Set the button disabled attribute
        >
          Return the Box
        </button>
        {showOkText && (
          <div className="threshold_text">
            <p className="ok-text">
              *We will let you know when the threshold of your area is reached.
            </p>
            <Link to="/education" onClick={handleLinkClick}>
              <p className="learn_more">Learn more.</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderedProduct;
