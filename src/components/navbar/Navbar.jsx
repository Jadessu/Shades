import React from 'react'
import {


  IconButton,
  Badge,
  
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, } from "react-router-dom";
import makiage from "./images/makiage.jpg"
import fenty from "./images/fenty.jpg"
import monika from "./images/monika.jpg"
import farmasi from "./images/farmasi-vfx-pro.jpg"
import Logo from "./images/shades.png"

import "./Navbar.css"
function Navbar2({totalItems}) {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="row v-center">
              <div className="header-item item-left">
                <div className="logo">
                  <Link to="/">
                    {" "}
                    <img src={Logo} alt="new Product" width="206px" />{" "}
                  </Link>
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
                       <Link to="/">
                        New <i className="fa fa-angle-down"></i>
                      </Link>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item text-center">
                          <Link to="/">
                            {" "}
                            
                            <img src={makiage} alt="new Product" />
                            <h4 className="title">II Makiage WULT</h4>
                          </Link>
                        </div>
                        <div className="list-item text-center">
                           <Link to="/">
                            <img src={monika} alt="new Product" />
                            <h4 className="title">Monika Blunder</h4>
                          </Link>
                        </div>
                        <div className="list-item text-center">
                           <Link to="/">
                            <img src={fenty} alt="new Product" />
                            <h4 className="title">Fenty Beauty Pro</h4>
                          </Link>
                        </div>
                        <div className="list-item text-center">
                           <Link to="/">
                            <img src={farmasi} alt="new Product" />
                            <h4 className="title">Farmasi VFX PRO</h4>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/shop">
                        Shop <i className="fa fa-angle-down"></i>
                      </Link>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item">
                          <h4 className="title">Men's Products</h4>
                          <ul>
                            <li>
                              <Link to="/">Product List </Link>
                            </li>
                          </ul>
                          <h4 className="title">Beauty</h4>
                          <ul>
                            <li>
                              <Link to="/">Product List </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Foundations</h4>
                          <ul>
                            <li>
                              <Link to="/fairskin">Fair Skin </Link>
                            </li>
                            <li>
                              <Link to="/mediumskin">Medium Skin </Link>
                            </li>
                            <li>
                              <Link to="/darkskin"> Deep Skin </Link>
                            </li>
                          </ul>
                          <h4 className="title">Makeup Tools</h4>
                          <ul>
                            <li>
                              <Link to="/">Product List </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Women's Products</h4>
                          <ul>
                            <li>
                              <Link to="/">Product List </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <img
                            src="https://images.unsplash.com/photo-1594461287652-10b41090cf91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                            alt="shop"
                          />
                        </div>
                      </div>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="/">Product List </Link>
                    </li>
                    <li>
                      <Link to="/">Product List </Link>
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
