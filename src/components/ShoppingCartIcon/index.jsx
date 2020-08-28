import React from 'react';
import './style.scss';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const ShoppingCartIcon = (props) => {
  return (
    <div onClick={props.toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.cartItems.length}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon);
