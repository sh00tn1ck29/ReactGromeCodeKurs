import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.githubusercontent.com/u/10001',
};

ReactDOM.render(<Comment author={userInfo} text="Good job!" date={new Date()} />, rootElement);
