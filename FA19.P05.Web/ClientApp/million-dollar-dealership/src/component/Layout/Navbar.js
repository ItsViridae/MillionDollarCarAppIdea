import React from "react";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/login" className="brand-logo left">
          Cars4U
        </Link>
        <img className="responsive img" alt="brand" src="/img/CarLogo.png" />
        {isLoggedIn ? (
          <SignedInLinks
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <SignedOutLinks
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
