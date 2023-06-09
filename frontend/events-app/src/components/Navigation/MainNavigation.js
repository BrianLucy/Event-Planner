
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { SlEvent } from "react-icons/sl";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";

import AuthContext from '../../context/auth-context';
import "./MainNavigation.css";

const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <header className="main-navigation">
        
          <nav className="main-navigation__items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/">
                    Home
                    <AiOutlineHome />
                  </NavLink>
                </li>
              )}
              {!context.token && (
                <li>
                  <NavLink to="/auth">
                    Login <AiOutlineUser />
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">
                  Events <SlEvent />
                </NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/bookings">
                      Bookings <BsBookmarkPlusFill />
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={context.logout}>
                      Logout <HiOutlineLogout />
                    </button>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;