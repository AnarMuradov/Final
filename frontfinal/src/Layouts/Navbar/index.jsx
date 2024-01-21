import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar_container_logo">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
            alt=""
          />
        </div>

        <div className="navbar_container_items">
          <ul className="navbar_container_items_list">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/AddPage"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Add Page</li>
            </NavLink>
            <li>Shop</li>
            <li>About</li>
            <li>Latest</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar_container_icons">
          <NavLink
            to={"/WishList"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <i className="fa-regular fa-heart"></i>{" "}
          </NavLink>
          <NavLink
            to={"/Basket"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
          <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="navbar_container_menu">
        <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
