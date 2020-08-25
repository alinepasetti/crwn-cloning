import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from './../../assets/crown.svg';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from './../ShoppingCartIcon';
import CartDropdown from './../CartDropdown';

import { auth } from './../../firebase/firebase.utils';

const NavBar = ({ currentUser, hidden }) => {
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
        <ShoppingCartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </nav>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(NavBar);
