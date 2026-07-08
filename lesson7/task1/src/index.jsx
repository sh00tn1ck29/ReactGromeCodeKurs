import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './NumbersList.jsx';
import NumbersList from './NumbersList.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<NumbersList />, rootElement);
