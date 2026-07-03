import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting firstName="Maksym" lastName="Shavryhin" birthDate={new Date('2005-01-17')} />,
  rootElement,
);
