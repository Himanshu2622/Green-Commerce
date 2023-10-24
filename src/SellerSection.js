import React, { useState } from "react";
import "./SellerSection.css";
import { Link } from "react-router-dom";

function SellerSection() {
  const [formData, setFormData] = useState({
    productName: "",
    manufacturingProcess: "",
    transportationMethod: "",
    materialsUsed: "",
    productLifespan: "",
    recyclability: "",
    ecoCertifications: "",
    packagingUsed: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (isFormValid(formData)) {
      // Handle form submission logic, e.g., send data to a backend server
      // Redirect to the "submitted" page
      window.location.href = "/submitted";
    } else {
      // Show an error message or prevent submission
      alert("Please fill in all the mandatory fields.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to check if all fields are filled
  const isFormValid = (formData) => {
    for (const key in formData) {
      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="seller-section">
      <img
        src="../images/seller_banner.jpg"
        alt=""
        className="seller-image"
      />
      <div className="seller-info">
        <h2>Sell Eco-Friendly Products on Amazon</h2>
        <p>
          Help us create a sustainable shopping experience by providing details
          about your eco-friendly products.
        </p>
      </div>

      <div className="seller-form">
        <h3>Manufacturing Information</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            <div className="form_question">Product ID:</div>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Manufacturing Process:</div>
            <input
              type="text"
              name="manufacturingProcess"
              value={formData.manufacturingProcess}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Transportation Method:</div>
            <input
              type="text"
              name="transportationMethod"
              value={formData.transportationMethod}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Materials Used:</div>
            <input
              type="text"
              name="materialsUsed"
              value={formData.materialsUsed}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Product Lifespan:</div>
            <input
              type="text"
              name="productLifespan"
              value={formData.productLifespan}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Recyclability (YES/NO):</div>
            <input
              type="text"
              name="recyclability"
              value={formData.recyclability}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Eco Certifications (if any):</div>
            <input
              type="text"
              name="ecoCertifications"
              value={formData.ecoCertifications}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <div className="form_question">Packaging Used:</div>
            <input
              type="text"
              name="packagingUsed"
              value={formData.packagingUsed}
              onChange={handleInputChange}
              required
            />
          </label>

          <button className="buttonxyz" type="submit">
            Submit
          </button>
        </form>
      </div>
      <img
        src="../images/amazon_seller.jpg"
        alt=""
        className="seller-image2"
      />
    </div>
  );
}

export default SellerSection;
