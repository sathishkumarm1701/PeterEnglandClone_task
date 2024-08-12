import React from "react";
import "./Footer.css";
import FirstRowFooter from "./FirstRowFooter";
import SecondRowFooter from "./SecondRowFooter";
import ThirdRowFooter from "./ThirdRowFooter";
import FourthRowFooter from "./FourthRowFooter";

const Footer = () => {
  return (
    <footer className="footer_main text-white pt-4">
      <FirstRowFooter />
      <SecondRowFooter />
      <ThirdRowFooter />
      <FourthRowFooter />
    </footer>
  );
};

export default Footer;
