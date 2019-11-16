import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <i className="fas fa-recycle mr-2" style={{ color: "white" }}></i>
      <a className="navbar-brand" href="#">
        The Trash Exchange
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-outline-success my-2 my-sm-0" href="#">
              Log In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
