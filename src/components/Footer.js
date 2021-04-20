import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className = "footer">
    <div className = "footer_center">
      <p>Tesla ⓒ {year}</p>
      <p>Privacy & Legal</p>
      <p>Contact</p>
      <p>Careers</p>
      <p>Get Newsletter</p>
      <p>News</p>
      <p>Forums</p>
      <p>Locations</p>
    </div>
    </div>
  );
}

export default Footer;