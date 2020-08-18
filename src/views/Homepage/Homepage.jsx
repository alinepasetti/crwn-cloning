import React from 'react';

import './homepage.styles.scss';

import Directory from './../../components/Directory';

const Homepage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

export default Homepage;
