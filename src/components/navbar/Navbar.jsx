import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import makiage from "./images/makiage.jpg"
import fenty from "./images/fenty.jpg"
import monika from "./images/monika.jpg"
import farmasi from "./images/farmasi-vfx-pro.jpg"

import "./Navbar.css"
function Navbar2({totalItems}) {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="row v-center">
              <div className="header-item item-left">
                <div className="logo">
                  <Link to="/"> SHADES </Link>
                </div>
              </div>
              <div className="header-item item-center">
                <div className="menu-overlay"></div>
                <nav className="menu">
                  <div className="mobile-menu-head">
                    <div className="go-back">
                      <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="current-menu-title"></div>
                    <div className="mobile-menu-close">&times;</div>
                  </div>
                  <ul className="menu-main">
                    <li>
                      <Link to="/"> Home </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">
                        New <i className="fa fa-angle-down"></i>
                      </a>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item text-center">
                          <a href="#">
                            <img src={makiage} alt="new Product" />
                            <h4 className="title">II Makiage WULT</h4>
                          </a>
                        </div>
                        <div className="list-item text-center">
                          <a href="#">
                            <img src={monika} alt="new Product" />
                            <h4 className="title">Monika Blunder</h4>
                          </a>
                        </div>
                        <div className="list-item text-center">
                          <a href="#">
                            <img src={fenty} alt="new Product" />
                            <h4 className="title">Fenty Beauty Pro</h4>
                          </a>
                        </div>
                        <div className="list-item text-center">
                          <a href="#">
                            <img src={farmasi} alt="new Product" />
                            <h4 className="title">Farmasi VFX PRO</h4>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">
                        Shop <i className="fa fa-angle-down"></i>
                      </a>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item">
                          <h4 className="title">Men's Fashion</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                          <h4 className="title">Beauty</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Women's Fashion</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                          <h4 className="title">Furniture</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Home, Kitchen</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <img src="img/shop1.jpg" alt="shop" />
                        </div>
                      </div>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-item item-right">
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>

                <div className="mobile-menu-trigger">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default Navbar2
