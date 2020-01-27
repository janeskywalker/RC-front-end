import React from "react";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-text">Follow Us:</div>
        <div className="footer-img-wrapper">
          <img src="/assets/instagram.svg" alt="" className="footer-img"></img>
          <img src="/assets/facebook.svg" alt="" className="footer-img"></img>
        </div>
    </div>
  );
};

export default Footer;
