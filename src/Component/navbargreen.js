import React from 'react';
import './navbargreen.css';
import { Link } from 'react-router-dom';
//import Popover from './Popover';

const AmazonNavigationBarg = () => {
  return (
    <div className="amazon-nav">
      <div className="amazon-nav-section">
        <ul className="amazon-nav-list">
          <Link style={{textDecoration: 'none'}} to = "/green">
            <li><a href="#" style={{ color: '#146eb4' }}>Home</a></li>
          </Link>
          <li><a href="#">Today's Deals</a></li>
          <li><a href="#">Amazon Pay</a></li>
          <li><a href="#">Amazon miniTV</a></li>
          <li><a href="#">Personal Care</a></li>
          <li><a href="#">Bamboo</a></li>
          <li><a href="#">Home & Kitchen</a></li>
          <li><a href="#">Gift cards</a></li>
          <Link style={{textDecoration: 'none'}} to = "/seller">
          <li><a href="#" style={{ color: '#146eb4' }}>Seller</a></li>
          </Link>
          <Link style={{textDecoration: 'none'}} to = "/education">
          <li><a href="#" style={{ color: '#146eb4' }}>Educational Section</a></li>
          </Link>
          <Link style={{textDecoration: 'none'}} to = "/sustainability">
          <li><a href="#" style={{ color: '#146eb4' }}>Sustainability Reports</a></li>
          </Link>
          <li><a href="#">More</a></li>

          {/* <Link style={{textDecoration: 'none'}} to = "/green">
            <button className="button">Greenovation Zone</button>
          </Link> */}
          </ul>
      </div>
    </div>
  );
};

export default AmazonNavigationBarg;
