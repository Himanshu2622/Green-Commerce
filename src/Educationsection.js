import React, { useState } from "react";
import "./Educationsection.css";
import { Link } from "react-router-dom";

function Educationsection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Why did we create Greenovation Zone?",
      answer:
        "The Amazon Greenovation Zone was created to make it easier for customers to find and buy eco-friendly products. This promotes conscious shopping, reduces environmental impact, enhances the customer experience",
    },
    {
      question: "What criteria are used to certify products as eco-friendly?",
      answer:
        "Products are certified as eco-friendly based on criteria like eco-friendly certificates, carbon emissions, material sourcing, recyclability, plastic usage, energy efficiency, water conservation, non-toxicity, and packaging. These certifications are awarded by reputable eco-friendly organizations and verified by Amazon.",
    },
    {
      question:
        "Can I provide feedback or report any concerns about a product's eco-friendly claims?",
      answer:
        "Yes, you can provide feedback and report any concerns about a product's eco-friendly claims. We have a customer feedback system in place to ensure that your opinions and concerns are heard, allowing us to continuously improve the accuracy and reliability of eco-friendly claims within the 'Greenovation Zone.'",
    },
    {
      question:
      "How does the box returning system work?",
      answer:
      "After sufficient number of customers click on the RETURN BOX option and the number of boxes from a specific area cross a pre-decided threshold, a pickup will be scheduled and the customers will be notified about the date and time. They can also check the website to get an idea of how much longer it will take to reach the threshold, thus making the procedure much more transparent.",
    },
  ];

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      // Clicking the active item again will close it
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleLinkClick = () => {
    // Scroll to the top of the page when the link is clicked
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  return (
    <>
      <div className="bar">
        <img src="../images/education_bar_image.png" alt="" />
        <ul>
          <li>
            <a href="/green">Home</a>
          </li>
          <li>
            <a href="#EcoCertification">Certificates</a>
          </li>
          <li>
            <a href="#FAQ">FAQS</a>
          </li>
        </ul>
      </div>

      <div className="midse">
        <h1>Zero Waste Production through Return Box System</h1>
        <br />
        <p>
          Our solution leverages Amazon's existing infrastructure for recycling
          boxes from returned products. When enough customers choose the "return
          box" option and a specific region exceeds a set box threshold,
          scheduled pickups are arranged. Customers receive notifications via
          the app, website, or SMS/email. Pickup frequency varies by
          participation. Additionally, post-product delivery, customers can
          return packaging boxes, promoting sustainability in e-commerce.
        </p>

        <video width="750" height="500" autoPlay loop>
          <source src="../images/food_delivery.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="leftse">
        <video width="750" height="500" autoPlay loop>
          <source src="../images/foldbox.mp4" type="video/mp4" />
        </video>

        <h1>How to Fold a Box?</h1>
        <p>
          Folding a box for convenient storage and future use is a practical
          skill. Start by laying the box flat on a clean, flat surface. Look for
          the creased lines on the cardboard, usually marked for easy folding.
          Gently fold along these lines to bring the sides of the box up,
          forming the walls. Then, fold in the bottom flaps to create the base.
          Ensure all edges are aligned neatly for a secure fit. To flatten the
          box, simply reverse these steps, gently folding it back into a flat
          shape. The attached video provides a visual guide, making the process
          even simpler. This way, you can keep your box handy for the next time
          you need it, ensuring easy and efficient storage.
        </p>
      </div>
      <div className="complete">
        <div className="Certificate" id="EcoCertification">
          <img
            src="../images/Eco Friendly Badge Certifications.png"
            alt=""
            width="100%"
          />
        </div>

        <div class="smallcer">
          <img src="../images/edu1.png" alt="" width="100%" />
        </div>
        <div class="largecer">
          <img src="../images/edu2.png" alt="" width="100%" />
        </div>

        <img
          src="../images/edu3.png"
          alt=""
          width="100%"
          className="shopprod"
        />

        <div className="FaqEdu" id="FAQ">
          <h1>Frequently Asked Questions</h1>
          {faqItems.map((item, index) => (
            <div key={index} className="FaqItem">
              <div
                className="FaqQuestion"
                onClick={() => handleItemClick(index)}
              >
                <div>{item.question}</div>
                <span className="AccordionIcon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="FaqAnswer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="ecofriendimg">
          <Link style={{ textDecoration: "none" }} to="/green" onClick={handleLinkClick}>
            <img src="../images/shop eco frinedly.png" alt="" width="100%" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Educationsection;