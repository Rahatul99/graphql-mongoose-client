// import React from "react";
// import { Link } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <nav>
    //   <div className="nav-wrapper">
    //     <a href="#" className="brand-logo">
    //       Logo
    //     </a>
    //     <ul id="nav-mobile" class="right hide-on-med-and-down">
    //       <li>
    //         <a href="sass.html">Sass</a>
    //       </li>
    //       <li>
    //         <a href="badges.html">Components</a>
    //       </li>
    //       <li>
    //         <a href="collapsible.html">JavaScript</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav>
      <div className="nav-wrapper #673ab7 deep-purple">
        <Link to="/" className="brand-logo left">
          Quote App
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
