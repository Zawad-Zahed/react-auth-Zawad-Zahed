import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../ticketImages/Icon and Logo/DM_WhiteLogo.png";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="bgImage">
      <div className="navBar container">
        <nav className="navbar navbar-expand-lg navbar-light flex">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <img className="logoStyle" src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link to="/" className=" nav-link active " aria-current="page">
                  <h6>Home</h6>
                </Link>
                <Link to="/destination" className="nav-link active">
                  <h6>Destination</h6>
                </Link>
                <Link to="/contact" className="nav-link active">
                  <h6>Contact</h6>
                </Link>
                {loggedInUser.email ? (
                  <p>{loggedInUser.name}</p>
                ) : (
                  <Link to="/login" className="nav-link active ">
                    <button className="btn btn-danger rounded">
                      {" "}
                      <h6>Login</h6>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
