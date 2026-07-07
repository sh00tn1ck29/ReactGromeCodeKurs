import React, { Component } from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
};

export default Greeting;
