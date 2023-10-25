import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import NavBar from "./navbar";
import Checkout from "./Checkout"
import Login from "./Login";
import Headergreen from "./Headergreen";
import Homegreen from "./Homegreen";
import NavBarg from "./navbargreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EducationSection from "./Educationsection";
import SustainabilityReportsSection from "./Sustainability";
import Footer from "./Footer";
import Orders from "./Orders";
import Thanks from "./thanks";
import SellerSection from "./SellerSection";
import Submitted from "./Submitted";
import Dashboard from "./Dashboard";
import Feedback from "./feedback";
import ProductDetails from "./ProductDetails";
import ProductDetails1 from "./ProductDetails1";
import FSubmitted from "./Feedbacksubmitted";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          {/* <Route path="/greenovation" element={<Homegreen/>}/> */}
          <Route path="/feedbacksubmitted" element={[<Headergreen/>, <NavBarg/>, <FSubmitted/>]}/>
          <Route path="/feedback" element={[<Headergreen/>, <NavBarg/>, <Feedback/>, <Footer/>]}/> 
          <Route path="/submitted" element={[<Headergreen/>, <Submitted/>]}/> 
          <Route path="/seller" element={[<Headergreen/>, <NavBarg/>, <SellerSection/>, <Footer/>]}/> 
          <Route path="/thanks" element={[<Header />, <Thanks/>]}/> 
          <Route path="/orders" element={[<Header />, <Orders/>, <Footer/>]}/>
          <Route path="/sustainability" element={[<Headergreen/>,<NavBarg/>, <SustainabilityReportsSection/>, <Footer/>  ]}/>
          <Route path="/education" element={[<Headergreen/>,<NavBarg/>, <EducationSection/>, <Footer/>  ]}/>
          <Route path="/green" element={[<Headergreen/>,<NavBarg/>, <Homegreen/>, <Footer/>  ]}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/checkout" element={[<Header />, <Checkout/>, <Footer/>  ]}/>
          <Route path="/" element={[<Header />, <NavBar/>, <Home />, <Footer/>  ]}/>
          <Route path="/dashboard" element={[<Header />, <NavBarg/>, <Dashboard/>]} />
          <Route path="/product" element={[<Headergreen />, <NavBarg />, <ProductDetails />, <Footer />]}/>
          <Route path="/product1" element={[<Headergreen />, <NavBarg />, <ProductDetails1 />, <Footer />]}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

