import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <span>Pet-First</span>
          </div>
          <div className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item link_hover">
                <a href="#" className="header__nav-link ">
                  About
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Service
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Madi-Core
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="header__button">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
