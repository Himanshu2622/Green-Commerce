import React, { useEffect, useState } from 'react';
import './navbar.css'; // Import your CSS file for styling
import {Link} from "react-router-dom";

const AmazonNavigationBar = () => {
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
  };

  // useEffect(() => {
  //   if(showPopover) {
  //     const timeout = setTimeout(() => {
  //       setShowPopover(false);
  //     }, 5000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [showPopover]);

  useEffect(() => {
    const item = document.getElementById('itemToTrack');

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (itemRect.top < windowHeight && itemRect.bottom > 70) {
        setShowPopover(true);
      } else {
        setShowPopover(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="amazon-nav">
      <div className="amazon-nav-section">
        <ul className="amazon-nav-list">
          <li><a href="#">All</a></li>
          <li><a href="#">Fresh</a></li>
          <li><a href="#">Today's Deals</a></li>
          <li><a href="#">Buy Again</a></li>
          <li><a href="#">Electronics</a></li>
          <li><a href="#">Amazon Pay</a></li>
          <li><a href="#">Home & Kitchen</a></li>
          <li><a href="#">Amazon miniTV</a></li>
          <li><a href="#">Sell</a></li>
          <li><a href="#">Gift cards</a></li>
          <li><a href="#">Health, Household & Personal Care</a></li>
          
          <div className='popover_trigger_nav'>
            <Link style={{textDecoration: 'none'}} to = "/green">
              <button id='itemToTrack' className="button">Greenovation Zone</button>
            </Link>
            {showPopover && !dontShowAgain && (
              <div className='popover_content_nav'>
                <div className='triangle'></div>
                <p>Introducing our brand new section<br></br>Greenovation Zone</p>
                <button onClick={closePopover} className='got_it'>Got It</button>
              </div>
            )}
          </div>
          </ul>
      </div>
    </div>
  );
};

export default AmazonNavigationBar;