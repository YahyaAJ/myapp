import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

class Header extends Component {
  state = {  } 
  render() { 
    return (
      <Fragment>
          <nav class="header">
            <div>
              <Link to="/">
                <h3>React Router DOM v5</h3>
              </Link>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>|</li>
                <li>
                  <Link to="/register">Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
      </Fragment>
    );
  }
}
 
export default Header;