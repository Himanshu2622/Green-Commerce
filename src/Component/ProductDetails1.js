import React, { useState } from "react";
import "./ProductDetails.css";
import { TbTruckDelivery } from "react-icons/tb";
import { FaAmazonPay } from "react-icons/fa";
import { GiCheckedShield, GiLaurelsTrophy } from "react-icons/gi";
import { useStateValue } from "../StateProvider";

function ProductDetails1() {
  const [selectedImage, setSelectedImage] = useState("../images/Bag1.png");

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
    "../images/Bag1.png",
    "../images/Bag2.png",
    "../images/Bag3.png",
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
                className={`thumbnail ${
                  selectedImage === image ? "selected" : ""
                }`}
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
          Jutify Eco-Friendly Printed Unisex Canvas Shopping Bag, Women's Tote
          Bag | Spacious, Stylish, Sturdy Handbag
        </h2>
        <p>⭐⭐⭐⭐ ( 63 reviews )</p>
        <br></br>
        <p className="price">
          <span className="discounted-price">$13.96</span>
          <span className="original-price">$19.95</span>
        </p>
        <br></br>

        <div className="eco_details">
          <div className="carbon_details">
            <img
              src="../images/co2badge.png"
              alt=""
              className="eco_image"
            ></img>
            <p className="eco_text">60% Less Carbon Emission</p>
          </div>
          <div className="badge_details">
            <div className="popover_trigger">
              <img
                id="badgeToTrack"
                src="../images/badge5.png"
                alt=""
                className="eco_image"
              ></img>
            </div>
            <p className="eco_text">Eco-Friendly Badge</p>
          </div>
        </div>
        <br></br>

        <p>
          Jutify offers versatile cotton tote bags that are perfect for various
          purposes, such as shopping, work, travel, and more. These spacious and
          sturdy bags are made in India, promoting local employment. They are
          made of thick cotton fabric and come with an inner zip pocket for
          small essentials. Regular cleaning is recommended to maintain their
          quality. Jutify is dedicated to producing high-quality jute and cotton
          bags, setting the standard for quality in the industry.
        </p>
        <br></br>
        <div className="icons">
          <div className="icon">
            <img src="../images/8.png" className="i" />
            <p>Free Delivery</p>
          </div>

          <div className="icon">
            <img src="../images/9.png" className="i" />
            <p>Accept Amazon Pay</p>
          </div>

          <div className="icon">
            <img src="../images/10.png" className="i" />
            <p>2-year warranty</p>
          </div>

          <div className="icon">
            <img src="../images/11.png" className="i" />
            <p>Top Brand</p>
          </div>
        </div>

        <div className="product-data-info">
          <p>
            Available: <span style={{ color: "green" }}> In Stock</span>
          </p>
        </div>
        <br />
        <br />

        <button
          className="addtocart"
          onClick={() =>
            addToBasket(
              "875615",
              "Jutify Eco-Friendly Printed Unisex Canvas Shopping Bag, Women's Tote Bag | Spacious, Stylish, Sturdy Handbag",
              "../images/bag_eco.jpg",
              15.35,
              4,
              4
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails1;
