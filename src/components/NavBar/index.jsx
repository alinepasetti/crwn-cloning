import React from 'react';
import './style.scss';
import { ReactComponent as Logo } from './../../crown.svg';
import { Link } from 'react-router-dom';

import { auth } from './../../firebase/firebase.utils';

const NavBar = ({ currentUser }) => {
  return (
    <nav className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
