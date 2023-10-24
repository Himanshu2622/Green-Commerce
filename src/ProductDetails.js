import React, { useState } from "react";
import "./ProductDetails.css";
import { FaTruck } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { GiCheckedShield, GiLaurelsTrophy } from "react-icons/gi";
import { useStateValue } from "./StateProvider";

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState("../images/Straw2.png");
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (id, title, image, price, rating, badge_id) => {
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

  const imageArray = [
    "../images/Straw1.png",
    "../images/Straw2.png",
    "../images/Straw3.png",
    "../images/Straw4.png",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="whole">
      <div className="img">
        <div className="image-slider">
          <div className="image-thumbnails">
            {imageArray.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={`thumbnail ${selectedImage === image ? "selected" : ""}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="large-image">
          {selectedImage && <img src={selectedImage} alt="Selected Image" />}
        </div>
      </div>

      <div className="img-desc">
        <h2>
          Qudrat Natural Straw | Coconut Leaf | Biodegradable, Eco-Friendly &
          Sustainable Drinking Straws (Pack of 100)
        </h2>
        <p>⭐⭐⭐⭐ (23 reviews)</p>
        <br></br>
        <p className="price">
          <span className="discounted-price">$15.35</span>
          <span className="original-price">$18.99</span>
        </p>
        <br></br>

        <div className="eco_details">
          <div className="carbon_details">
            <img src="../images/co2badge.png"  alt="" className="eco_image"></img>
            <p className="eco_text">60% Less Carbon Emission</p>
          </div>
        <div className="badge_details">
          <div className="popover_trigger">
            <img id='badgeToTrack' src="../images/badge5.png" alt="" className="eco_image"></img>
          </div>
          <p className="eco_text">Eco-Friendly Badge</p>
          </div>
        </div>
        <br></br>
        <p>
          Our innovative Quadrat straws offer an exceptional eco-friendly
          solution for all your beverage needs. Made from fallen coconut leaves,
          these straws are not only biodegradable but also act as a natural
          fertilizer when buried in garden soil, enhancing its quality in just
          30 days. They are not only kind to the environment but also
          long-lasting, capable of withstanding both hot and cold beverages
          without breaking or getting soggy. Their temperature range spans from
          a minimum of 32°F / 0°C to a maximum of 302°F / 150°C. Quadrat straws
          are a sustainable alternative to paper or plastic straws, working like
          plastic but feeling entirely natural.
        </p>
        <br></br>
        <div className="icons">
          <div className="icon">
            <img src="../images/8.png" className="i"/>
            <p>Free Delivery</p>
          </div>

          <div className="icon">
            <img src="../images/9.png" className="i"/>
            <p>Accept Amazon Pay</p>
          </div>

          <div className="icon">
            <img src="../images/10.png" className="i"/>
            <p>2-year warranty</p>
          </div>

          <div className="icon">
            <img src="../images/11.png" className="i"/>
            <p>Top Brand</p>
          </div>
        </div>

        <div className="product-data-info">
          <p>
            Available: <span style={{ color: "green" }}>In Stock</span>
          </p>
        </div>
        <button className="addtocart" onClick={() => addToBasket("875617", "Qudrat Natural Straw | Coconut Leaf | Biodegradable, Eco-Friendly & Sustainable Drinking Straws (Pack of 100)", "../images/straw_eco.jpg", 8.99, 4, 5)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;      