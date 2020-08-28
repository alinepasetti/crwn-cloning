import React from 'react';
import './style.scss';

const CustomButton = ({ children, isSignInWithGoogle, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isSignInWithGoogle ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
