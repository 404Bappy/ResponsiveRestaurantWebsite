import React from "react";
import "./Header.css";
import { Container } from "reactstrap";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2>
              <span>
                <i className="ri-restaurant-2-line"></i>
              </span>
              Bappy Bhai
            </h2>
          </div>
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#">Home</a>
              </li>
              <li className="nav_item">
                <a href="#">About</a>
              </li>
              <li className="nav_item">
                <a href="#">Menu</a>
              </li>
              <li className="nav_item">
                <a href="#">Recipes</a>
              </li>
              <li className="nav_item">
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="menu_right">
            <div className="custom_search">
              <input type="text" placeholder="Search Here" />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>
          <div className="mobile_menu">
            <span>
              <i className="ri-menu-fill"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
