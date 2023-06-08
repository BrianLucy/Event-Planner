
import React from "react";
import "./MainNavigation.css";
import { NavLink } from "react-router-dom";

const mainNavigation = (props) => (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1>Events</h1>
    </div>
    <nav className="main-navigation__items">
      <ul class="nav-bar">
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;