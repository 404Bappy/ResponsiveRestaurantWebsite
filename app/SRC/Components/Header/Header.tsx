import React from "react";
import "./Header.css";
import { Container } from "reactstrap";

const navLinks = [
  {
    disply: "Home",
    url: "#",
  },
  {
    disply: "About",
    url: "#",
  },
  {
    disply: "Menu",
    url: "#",
  },
  {
    disply: "Recipes",
    url: "#",
  },
  {
    disply: "Contacts",
    url: "#",
  },
];

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-10">
              <span>
                <i className="ri-restaurant-2-line"></i>
              </span>
              Chef Food
            </h2>
          </div>
          <div className="nav_menu">
            <ul className="nav_list">
              {navLinks.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a href={item.url}>{item.disply}</a>
                </li>
              ))}
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
