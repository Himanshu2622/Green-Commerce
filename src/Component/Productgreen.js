import React, { useEffect, useState } from "react";
import "./Productgreen.css";
import { useStateValue } from "../StateProvider";

function Product({ title, image, id, price, rating, carbon_red, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is >>>>>", basket);

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

  let badge_photo = "";
  let badge_popover = "";

  if (badge_id === 1) {
    badge_photo = "../images/badge1.png";
    badge_popover = "../images/badge1_popover.png";
  } else if (badge_id === 2) {
    badge_photo = "../images/badge2.png";
    badge_popover = "../images/badge2_popover.png";
  } else if (badge_id === 3) {
    badge_photo = "../images/badge3.png";
    badge_popover = "../images/badge3_popover.png";
  } else if (badge_id === 4) {
    badge_photo = "../images/badge4.png";
    badge_popover = "../images/badge4_popover.png";
  } else if (badge_id === 5) {
    badge_photo = "../images/badge5.png";
    badge_popover = "../images/badge5_popover.png";
  }

  const [isBadgePopoverVisible, setBadgePopoverVisible] = useState(false);
  const [showInfoPopover, setInfoShowPopover] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const showBadgePopover = () => {
    setDontShowAgain(true);
    setBadgePopoverVisible(true);
  };

  const hideBadgePopover = () => {
    setBadgePopoverVisible(false);
  };

  const closeInfoPopover = () => {
    setDontShowAgain(true);
    setInfoShowPopover(false);
  };

  useEffect(() => {
    const item = document.getElementById("badgeToTrack");

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();

      if (itemRect.top < 650 && itemRect.bottom > 200) {
        setInfoShowPopover(true);
      } else {
        setInfoShowPopover(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="productg">
      <div className="product__bestseller">BESTSELLER</div>
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((rate) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <div className="eco_details">
        <div className="carbon_details">
          <img src="../images/co2badge.png" alt="" className="eco_image"></img>
          <p className="eco_text">{carbon_red}% Less Carbon Emission</p>
        </div>
        <div className="badge_details">
          <div className="popover_trigger">
            <img
              id="badgeToTrack"
              src={badge_photo}
              alt=""
              className="eco_image"
              onMouseEnter={showBadgePopover}
              onMouseLeave={hideBadgePopover}
            ></img>
            {isBadgePopoverVisible && (
              <div className="popover_content">
                <div className="content">
                  <img
                    src={badge_popover}
                    className="popover_content_image"
                  ></img>
                </div>
              </div>
            )}
            {showInfoPopover && id === "875615" && !dontShowAgain && (
              <div className="badge_info_popover_content_nav">
                <div className="badge_info_triangle"></div>
                <p>Try hovering over the badge to see further details.</p>
                <button onClick={closeInfoPopover} className="got_it">
                  Got It
                </button>
              </div>
            )}
          </div>
          <p className="eco_text">Eco-Friendly Badge</p>
        </div>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
