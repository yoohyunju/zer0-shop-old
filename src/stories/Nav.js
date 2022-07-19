import React from "react";
import "./Nav.css";

const Nav = ({ backgroundColor }) => {
  return (
    <header className="header" style={{backgroundColor: backgroundColor}}>
      <div className="header-title">
        <img className="header-title__logo" alt="zero shop" />
      </div>

      <nav className="navbar">
        <ul className="nav__menu">
          <li class="header-nav__item">
            <a href="" class="header-nav__near-shop">
              가까운 매장 찾기
            </a>
          </li>
          <li class="header-nav__item">
            <a href="" class="header-nav__login">
              login
            </a>
          </li>
          <li class="header-nav__item">
            <a href="" class="header-nav__cart">
            쇼핑 카트
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
