import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

const Search = props => {
  return (
    <>
      <div class="search">
        <h1 class="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
        <div class="search__field">
          <input type="text" class="search__input" />
          <button class="search__button">Search</button>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<Search name="Tom" />, rootElement);
