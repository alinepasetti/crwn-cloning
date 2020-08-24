import React from 'react';
import './style.scss';

const CustomButton = ({ children, isSignInWithGoogle, ...otherProps }) => {
  return (
    <button
      className={`${isSignInWithGoogle ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
