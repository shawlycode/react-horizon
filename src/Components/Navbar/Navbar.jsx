import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="images/horizon web-logo.png"
              alt="web logo"
              className="img-responsive"
              width="160px;"
              height="40px;"
            />
          </a>
          <ul>
            <li style="list-style: none; padding-top:1rem; font-weight: bold">
              ABOUT US
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
