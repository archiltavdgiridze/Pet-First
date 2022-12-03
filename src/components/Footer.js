import React from 'react'
import footerLogo from "../assets/footerLogo.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twit from "../assets/twit.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={footerLogo} />
      </div>
      <div className="footer__links">
        <ul>
          <li>About</li>
          <li>Project</li>
          <li>Service</li>
          <li>Client</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Flow</li>
          <li>
            <img src={fb}></img>
          </li>
          <li>
            <img src={insta}></img>
          </li>
          <li>
            <img src={twit}></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
