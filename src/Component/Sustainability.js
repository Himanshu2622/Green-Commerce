import React from "react";
import "./Sustainability.css";
// import { useSpring, animated } from "react-spring";

// function Number({ n }) {
//   const { number } = useSpring({
//     from: { number: 0 },
//      number: n,
//     delay: 200,
//     config: { mass: 1, tension: 20, friction: 10 },
//   });
//   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
// }

function SustainabilityReportsSection() {
  return (
    <div className="Susback">
      <img src="../images/SusImage.png" alt="" width="100%" />

      <div className="links">
      <span className="reports-heading">Sustainability Reports :  </span> 
        <a href="https://sustainability.aboutamazon.com/2022-sustainability-report.pdf">
          2022 /
        </a>
        <a href="https://sustainability.aboutamazon.com/2021-sustainability-report.pdf">
           2021 /
        </a>
        <a href="https://sustainability.aboutamazon.com/2020-sustainability-report.pdf">
          2020 /
        </a>
        <a href="https://sustainability.aboutamazon.com/2019-sustainability-report.pdf">
          2019 /
        </a>
        <a href="https://sustainability.aboutamazon.com/2018-sustainability-report.pdf">
          2018
        </a>
      </div>
      <div className="parameters">
        <div className="one">
          <p style={{color: "#533A2B"}}><h1 style={{color: "#89B753"}}> 234,000+ </h1><b>ZERO PLASTIC PRODUCTS SOLD</b></p>
        </div>
        <div className="two">
          
          <p style={{color: "#533A2B"}}>
          <h1 style={{color: "#00B099"}}>10,000 Kgs</h1>
            <b>PLASTIC POLLUTION PREVENTED</b>
          </p>
        </div>
        <div className="three">
          
          <p style={{color: "#533A2B"}}>
          <h1 style={{color: "#00B099"}}>17,936 tons</h1><b>CARBON EMISSIONS PREVENTED</b></p>
        </div>
      </div>

      <div className="Text"></div>

      <img
        src="../images/Overview.png"
        alt=""
        width="80%"
        className="Overview"
      />
      <img src="../images/Reports.png" alt="" width="80%" className="Results" />
    </div>
  );
}

export default SustainabilityReportsSection;