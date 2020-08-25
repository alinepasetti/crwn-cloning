import React from 'react';
import './style.scss';

import CustomButton from './../CustomButton';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton type="button">GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
