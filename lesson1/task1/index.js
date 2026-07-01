const rootElem = document.querySelector('#root');

const reactElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!',
);

ReactDOM.render(reactElem, rootElem);
