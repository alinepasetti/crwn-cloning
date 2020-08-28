import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import CustomButton from './../CustomButton';
import CartItem from './../CartItem';

import { selectCartItems } from './../../redux/cart/cart-selectors';

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems
          ? props.cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          : ''}
      </div>
      <CustomButton type="button">GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
