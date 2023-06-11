import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <h3 className="footer__logo">Events.</h3>

      <div className="footer__socials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Events. All rights reserved</small>
      </div>
    </footer>
  );
}



