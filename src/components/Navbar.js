import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const LoginHandler = () => {
    fetch("https://trashex.herokuapp.com/auth/google")
      .then(res => res.text())
      .then(res => console.log(res));
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <i className="fas fa-recycle mr-2" style={{ color: "white" }}></i>
      <Link to="/" className="navbar-brand">
        The Trash Exchange
      </Link>
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
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={LoginHandler}>
              Log In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
