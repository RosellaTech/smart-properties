import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter f-container">
        {/*left side*/}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to to help you with the right real <br /> estate
            investment plan here in lekki Lagos
          </span>
        </div>

        {/*right side*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            suite F95, Ikota Shopping Complex, Eti-Osa, Lekki 101245, Lagos
          </span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
