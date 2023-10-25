import React from "react";
import "./Homegreen.css";
import Product from "./Productgreen";
import ImageSliderGreen from "./Imageslidegreen";
import { Link } from "react-router-dom";

function Homegreen() {
  return (
    <>
    <div className="homeg">
      <div className="home__containerg">
        {/* <img
          className="home__imageg"
          src="https://github.com/Night-Howler14/Project-HackOn/blob/main/Green.png?raw=true"
          alt=""
        /> */}
        <ImageSliderGreen/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    <div className="home__rowg">
    <Product
      id="843800"
      title="Beco Bamboo Kitchen Towels, 20 sheets Reusable upto 2000 times, 100% Natural and Ecofriendly Alternative to Tissue Papers"
      price={6.35}
      carbon_red={65}
      rating={5}
      image="../images/tissue_eco.jpg"
      badge_id={5}
    />
    <Product
      id="875615"
      title="Jutify Eco-Friendly Printed Unisex Canvas Shopping Bag, Women's Tote Bag | Spacious, Stylish, Sturdy Handbag"
      price={15.35}
      carbon_red={60}
      rating={4}
      image="../images/bag_eco.jpg"
      badge_id={4}
    />
    {/* <Link to="/green"> Add a Link to "/green" here */}
      <Product
        id="875617"
        title="Qudrat Natural Straw | Coconut Leaf | Biodegradable, Eco-Friendly & Sustainable Drinking Straws (Pack of 100)"
        price={8.99}
        carbon_red={75}
        rating={4}
        image="../images/straw_eco.jpg"
        badge_id={5}
      />
    {/* </Link> */}
    <Product
      id="958745"
      title="Sow and Grow Plantable Pencils (Pack Of 10 Single Pencils) Made With 100% Recycled Paper|Eco Friendly|Return Gift|Corporate Gifting|Green"
      price={14.00}
      carbon_red={80}
      rating={4}
      image="../images/pencils_eco.jpg"
      badge_id={3}
      />
  </div>


    <img src="../images/badgebanner.png" alt="" width="100%" />

  <div className="home__rowg">
    <Product
      id="9513254"
      title="Wooden Eyewear Holder | Made With Sheesham Wood | Eyewear Showcase | 6-Inch Height | Decoration | Gift Material"
      price={37.99}
      carbon_red={50}
      rating={3}
      image="../images/sunglasses_eco.jpg"
      badge_id={2}

    />
    <Product
      id="1001002"
      title="Terracotta Clay Water Bottle | Capacity of 1 Litres | Purely Biodegradable | Plastic Alternative"
      price={25.78}
      carbon_red={65}
      rating={5}
      image="../images/bottle_eco.jpg"
      badge_id={4}
    />
    <Product
      id="1657495"
      title="Bamboo Hot Dish Mats / Table Coasters | 30cm x 30cm | Bamboo Product | Strong and Durable"
      price={21}
      carbon_red={70}
      rating={4}
      image="../images/mats_eco.jpg "
      badge_id={3}
    />
  </div>

  <div className="home__rowg">
    <Product
      id="1625854"
      title="Hand Made Jute Hanging Chair | Durable Jute Product | Stylish | Comfortable | Elegant Design"
      price={599.99}
      carbon_red={50}
      rating={4}
      image="../images/hangingchair_eco.png"
      badge_id={1}
    />
    <Product
      id="1625957"
      title="HomeStorie Eco-Friendly Foldable Bamboo Laundry Basket Hamper with Lid, Large - 57 Liter (Light Brown)"
      price={20.99}
      carbon_red={85}
      rating={4}
      image="../images/bamboolaundry.jpg"
      badge_id={5}
    />
    {/* <Product
      id="1625827"
      title="Earthism Eco-Friendly Bamboo Fibre Pasta | Salad | Fruit| Maggi Bowls 14 x 7 cm - Set of 4 (Life, Beige Grey)"
      price={12.99}
      carbon_red={65}
      rating={4}
      image="../images/bamboobowl.jpg"
      badge_id={3}
    /> */}
  </div>



</>
  );
}

export default Homegreen;